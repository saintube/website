# Load Aware Scheduling

Load Aware Scheduling is an ability of koord-scheduler for balancing pods scheduling based on the real-time load of each node.

## Introduction

Load balancing is a common issue in resource scheduling. Under-utilized nodes bring much resource waste to the
cluster, while over-utilized nodes are likely to cause performance degradation. Neither of them is suitable for
efficient resource management.

When we want to balance the pod scheduling on each node and make the loads even with the native Kubernetes scheduler, we
need to set precise resource requirements for the applications. The native scheduler schedules pods based on the
requests and the allocation of nodes, considering neither the real-time load nor the estimated usage. Since Koordinator
enables resource overcommitment to achieve higher utilization, we need a mechanism to reduce the probability of
performance degradation and avoid over-utilization.

Koord-scheduler can retrieve node metrics by cooperating with the koordlet. It provides the ability to balance the
scheduling of both the online (LSE/LSR/LS) pods and offline (BE) pods based on node utilization.

For more information, please see [Design: Load Aware Scheduling](/docs/designs/load-aware-scheduling).

## Setup

### Prerequisite

- Kubernetes >= 1.18
- Koordinator >= 0.4

### Installation

Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to [Installation](/docs/installation).

### Configurations

You can enable load-aware scheduling and configure the rules by modifying the ConfigMap `koord-scheduler-config` in the helm chart.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: koord-scheduler-config
  ...
data:
  koord-scheduler-config: |
    apiVersion: kubescheduler.config.k8s.io/v1beta2
    kind: KubeSchedulerConfiguration
    profiles:
      - schedulerName: koord-scheduler
        plugins:
          # enable the LoadAwareScheduling plugin
          filter:
            enabled:
              - name: LoadAwareScheduling
              ...
          score:
            enabled:
              - name: LoadAwareScheduling
                weight: 1
              ...
          reserve:
            enabled:
              - name: LoadAwareScheduling
          ...
        pluginConfig:
        # configure the thresholds and weights for the plugin
        - name: LoadAwareScheduling
          args:
            apiVersion: kubescheduler.config.k8s.io/v1beta2
            kind: LoadAwareSchedulingArgs
            # whether to filter nodes where koordlet fails to update NodeMetric
            filterExpiredNodeMetrics: true
            # the expiration threshold seconds when using NodeMetric
            nodeMetricExpirationSeconds: 300
            # weights of resources
            resourceWeights:
              cpu: 1
              memory: 1
            # thresholds (%) of resource utilization
            usageThresholds:
              cpu: 75
              memory: 85
            # the factor (%) for estimating resource usage
            estimatedScalingFactors:
              cpu: 80
              memory: 70
```

The koord-scheduler takes this ConfigMap as [scheduler Configuration](https://kubernetes.io/docs/reference/scheduling/config/).
New configurations will take effect after the koord-scheduler restarts.

## Use Load Aware Scheduling

1. Deploy a `stress` pod with the YAML file below.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: stress-demo
  labels:
    name: stress-demo
spec:
  containers:
    - args:
        - '--vm'
        - '2'
        - '--vm-bytes'
        - '2G'
        - '-c'
        - '2'
        - '--vm-hang'
        - '2'
      command:
        - stress
      image: polinux/stress
      imagePullPolicy: Always
      name: stress
      resources:
        limits:
          cpu: '2'
          memory: 4Gi
        requests:
          cpu: 200m
          memory: 1Gi
  restartPolicy: Always
  schedulerName: koord-scheduler
```

```bash
$ kubectl create -f stress-demo.yaml
pod/stress-demo created
```

2. Watch the pod status util it becomes running.

```bash
$ kubectl get pod stress-demo -w
NAME          READY   STATUS    RESTARTS   AGE    IP             NODE     NOMINATED NODE   READINESS GATES
stress-demo   1/1     Running   0          20s    172.20.100.6   node-0   <none>           <none>
```

The pod is scheduled on `node-0`.

3. Check the load of each node.

```bash
$ kubectl top node
NAME     CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
node-0   6450m        19%    25091Mi         19%
node-2   2687m        8%     17535Mi         13%
node-1   3280m        10%    9631Mi          7%
```

In above order, `node-0` has the highest load, while `node-1` has the lowest load.

4. Deploy an `nginx` deployment with the YAML file below.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
  namespace: default
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        resources:
          limits:
            cpu: 500m
          requests:
            cpu: 500m
```

```bash
$ kubectl create -f nginx-deployment.yaml
deployment/nginx created
```

5. Check the scheduling results of `nginx` pods.

```bash
$ kubectl get pods | grep nginx
nginx-7585b886cb-5b6vq   1/1     Running   0       32s     172.20.101.6    node-1   <none>         <none>
nginx-7585b886cb-4mdlh   1/1     Running   0       32s     172.20.106.20   node-2   <none>         <none>
```

Now we can see `nginx` pods get scheduled on the nodes other than `node-0` (node with the highest load).
