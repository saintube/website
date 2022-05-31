"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7003],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,p=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(p,i(i({ref:t},m),{},{components:n})):a.createElement(p,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8828:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={slug:"release-v0.3.0",title:"What's New in Koordinator v0.3.0?",authors:["jason"],tags:["koordinator","colocation","kubernetes","scheduling","orchestration","release"]},s=void 0,u={permalink:"/blog/release-v0.3.0",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/blog/2022-05-07-release/index.md",source:"@site/blog/2022-05-07-release/index.md",title:"What's New in Koordinator v0.3.0?",description:"We are happy to announce the v0.3.0 release of Koordinator. After starting small and learning what users needed, we",date:"2022-05-07T00:00:00.000Z",formattedDate:"May 7, 2022",tags:[{label:"koordinator",permalink:"/blog/tags/koordinator"},{label:"colocation",permalink:"/blog/tags/colocation"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"scheduling",permalink:"/blog/tags/scheduling"},{label:"orchestration",permalink:"/blog/tags/orchestration"},{label:"release",permalink:"/blog/tags/release"}],readingTime:10.92,truncated:!1,authors:[{name:"Jason",title:"Koordinator maintainer",url:"https://github.com/jasonliu747",imageURL:"https://github.com/jasonliu747.png",key:"jason"}],frontMatter:{slug:"release-v0.3.0",title:"What's New in Koordinator v0.3.0?",authors:["jason"],tags:["koordinator","colocation","kubernetes","scheduling","orchestration","release"]},prevItem:{title:"What's New in Koordinator v0.4.0?",permalink:"/blog/release-v0.4.0"},nextItem:{title:"Koordinator v0.2.0 - Enhanced node-side scheduling capabilities",permalink:"/blog/release-v0.2.0"}},m={authorsImageUrls:[void 0]},d=[{value:"Install or Upgrade to Koordinator v0.3.0",id:"install-or-upgrade-to-koordinator-v030",level:2},{value:"Install with helms",id:"install-with-helms",level:3},{value:"Upgrade with helm",id:"upgrade-with-helm",level:3},{value:"CPU Burst",id:"cpu-burst",level:2},{value:"How CPU Burst works",id:"how-cpu-burst-works",level:3},{value:"How to use CPU Burst",id:"how-to-use-cpu-burst",level:3},{value:"L3 cache and MBA resource isolation",id:"l3-cache-and-mba-resource-isolation",level:2},{value:"How to use L3 cache and MBA resource isolation",id:"how-to-use-l3-cache-and-mba-resource-isolation",level:3},{value:"Memory QoS",id:"memory-qos",level:2},{value:"Background information",id:"background-information",level:3},{value:"How to use Memory QoS",id:"how-to-use-memory-qos",level:3},{value:"What Comes Next",id:"what-comes-next",level:2}],c={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are happy to announce the v0.3.0 release of ",(0,r.kt)("strong",{parentName:"p"},"Koordinator"),". After starting small and learning what users needed, we\nare able to adjust its path and develop features needed for a stable community release."),(0,r.kt)("p",null,"The release of Koordinator v0.3.0 brings in some notable changes that are most wanted by the community while continuing\nto expand on experimental features."),(0,r.kt)("h2",{id:"install-or-upgrade-to-koordinator-v030"},"Install or Upgrade to Koordinator v0.3.0"),(0,r.kt)("h3",{id:"install-with-helms"},"Install with helms"),(0,r.kt)("p",null,"Koordinator can be simply installed by helm v3.5+, which is a simple command-line tool, and you can get it\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator koordinator-sh/koordinator --version 0.3.0\n")),(0,r.kt)("h3",{id:"upgrade-with-helm"},"Upgrade with helm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Upgrade the latest version.\n$ helm upgrade koordinator koordinator-sh/koordinator --version 0.3.0 [--force]\n")),(0,r.kt)("p",null,"For more details, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"installation manual"),"."),(0,r.kt)("h2",{id:"cpu-burst"},"CPU Burst"),(0,r.kt)("p",null,"CPU Burst is a service level objective (SLO)-aware resource scheduling feature provided by Koordinator. You can use CPU\nBurst to improve the performance of latency-sensitive applications. CPU scheduling for\na container may be throttled by the kernel due to the CPU limit, which downgrades the performance of the application.\nKoordlet automatically detects CPU throttling events and automatically adjusts the CPU limit to a\nproper value. This greatly improves the performance of latency-sensitive applications."),(0,r.kt)("h3",{id:"how-cpu-burst-works"},"How CPU Burst works"),(0,r.kt)("p",null,"Kubernetes allows you to specify CPU limits, which can be reused based on time-sharing. If you specify a CPU limit for a\ncontainer, the OS limits the amount of CPU resources that can be used by the container within a specific time period.\nFor example, you set the CPU limit of a container to 2. The OS kernel limits the CPU time slices that the container can\nuse to 200 milliseconds within each 100-millisecond period."),(0,r.kt)("p",null,"CPU utilization is a key metric that is used to evaluate the performance of a container. In most cases, the CPU limit is\nspecified based on CPU utilization. CPU utilization on a per-millisecond basis shows more spikes than on a per-second\nbasis. If the CPU utilization of a container reaches the limit within a 100-millisecond period, CPU throttling is\nenforced by the OS kernel and threads in the container are suspended for the rest of the time period."),(0,r.kt)("h3",{id:"how-to-use-cpu-burst"},"How to use CPU Burst"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use an annotation to enable CPU Burst"),(0,r.kt)("p",{parentName:"li"},"Add the following annotation to the pod configuration to enable CPU Burst:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n  # Set the value to auto to enable CPU Burst for the pod. \n  koordinator.sh/cpuBurst: \'{"policy": "auto"}\'\n  # To disable CPU Burst for the pod, set the value to none. \n  #koordinator.sh/cpuBurst: \'{"policy": "none"}\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use a ConfigMap to enable CPU Burst for all pods in a cluster"),(0,r.kt)("p",{parentName:"li"},"Modify the slo-controller-config ConfigMap based on the\nfollowing content to enable CPU Burst for all pods in a cluster:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  cpu-burst-config: \'{"clusterStrategy": {"policy": "auto"}}\'\n  #cpu-burst-config: \'{"clusterStrategy": {"policy": "cpuBurstOnly"}}\'\n  #cpu-burst-config: \'{"clusterStrategy": {"policy": "none"}}\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Advanced configurations"),(0,r.kt)("p",{parentName:"li"},"The following code block shows the pod annotations and ConfigMap fields that you can use for advanced configurations:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Example of the slo-controller-config ConfigMap. \ndata:\n  cpu-burst-config: |\n    {\n      "clusterStrategy": {\n        "policy": "auto",\n        "cpuBurstPercent": 1000,\n        "cfsQuotaBurstPercent": 300,\n        "sharePoolThresholdPercent": 50,\n        "cfsQuotaBurstPeriodSeconds": -1\n      }\n    }\n\n  # Example of pod annotations. \n  koordinator.sh/cpuBurst: \'{"policy": "auto", "cpuBurstPercent": 1000, "cfsQuotaBurstPercent": 300, "cfsQuotaBurstPeriodSeconds": -1}\'\n')),(0,r.kt)("p",null,"The following table describes the ConfigMap fields that you can use for advanced configurations of CPU Burst."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," none: disables CPU Burst. If you set the value to none, the related fields are reset to their original values. This is the default value.")," ",(0,r.kt)("li",null,"cpuBurstOnly: enables the CPU Burst feature only for the kernel of Alibaba Cloud Linux 2. "),(0,r.kt)("li",null," cfsQuotaBurstOnly: enables automatic adjustment of CFS quotas of general kernel versions. ")," ",(0,r.kt)("li",null," auto: enables CPU Burst and all the related features. ")," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpuBurstPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value:",(0,r.kt)("inlineCode",{parentName:"td"},"1000"),". Unit: %. This field specifies the percentage to which the CPU limit can be increased by CPU Burst. If the CPU limit is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", CPU Burst can increase the limit to 10 by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfsQuotaBurstPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"300"),". Unit: %. This field specifies the maximum percentage to which the value of cfs_quota in the cgroup parameters can be increased. By default, the value of cfs_quota can be increased to at most three times.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfsQuotaBurstPeriodSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"-1"),". Unit: seconds. This indicates that the time period in which the container can run with an increased CFS quota is unlimited. This field specifies the time period in which the container can run with an increased CFS quota, which cannot exceed the upper limit specified by ",(0,r.kt)("inlineCode",{parentName:"td"},"cfsQuotaBurstPercent"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sharePoolThresholdPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"50"),". Unit: %. This field specifies the CPU utilization threshold of the node. If the CPU utilization of the node exceeds the threshold, the value of cfs_quota in cgroup parameters is reset to the original value.")))),(0,r.kt)("h2",{id:"l3-cache-and-mba-resource-isolation"},"L3 cache and MBA resource isolation"),(0,r.kt)("p",null,"Pods of different priorities are usually deployed on the same machine. This may cause pods to compete for computing\nresources. As a result, the quality of service (QoS) of your service cannot be ensured. The Resource Director\nTechnology (RDT) controls the Last Level Cache (L3 cache) that can be used by workloads of different priorities. RDT\nalso uses the Memory Bandwidth Allocation (MBA) feature to control the memory bandwidth that can be used by workloads.\nThis isolates the L3 cache and memory bandwidth used by workloads, ensures the QoS of high-priority workloads, and\nimproves overall resource utilization. This topic describes how to improve the resource isolation of pods with\ndifferent priorities by controlling the L3 cache and using the MBA feature."),(0,r.kt)("h3",{id:"how-to-use-l3-cache-and-mba-resource-isolation"},"How to use L3 cache and MBA resource isolation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use a ConfigMap to enable L3 cache and MBA resource isolation for all pods in a cluster")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  resource-qos-config: |-\n    {\n      "clusterStrategy": {\n        "lsClass": {\n           "resctrlQoS": {\n             "enable": true,\n             "catRangeStartPercent": 0,\n             "catRangeEndPercent": 100,\n             "MBAPercent": 100\n           }\n         },\n        "beClass": {\n           "resctrlQoS": {\n             "enable": true\n             "catRangeStartPercent": 0,\n             "catRangeEndPercent": 30,\n             "MBAPercent": 100\n           }\n         }\n      }\n    }\n')),(0,r.kt)("h2",{id:"memory-qos"},"Memory QoS"),(0,r.kt)("p",null,"The Koordlet provides the memory quality of service (QoS) feature for containers. You can use this\nfeature to optimize the performance of memory-sensitive applications while ensuring fair memory scheduling among\ncontainers. This topic describes how to enable the memory QoS feature for containers."),(0,r.kt)("h3",{id:"background-information"},"Background information"),(0,r.kt)("p",null,"The following memory limits apply to containers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The memory limit of the container. If the amount of memory that a container uses, including the page cache, is about\nto reach the memory limit of the container, the memory reclaim mechanism of the OS kernel is triggered. As a result,\nthe application in the container may not be able to request or release memory resources as normal."),(0,r.kt)("li",{parentName:"ul"},"The memory limit of the node. If the memory limit of a container is greater than the memory request of the container,\nthe container can overcommit memory resources. In this case, the available memory on the node may become insufficient.\nThis causes the OS kernel to reclaim memory from containers. As a result, the performance of your application is\ndowngraded. In extreme cases, the node cannot run as normal.")),(0,r.kt)("p",null,"To improve the performance of applications and the stability of nodes, Koordinator provides the memory QoS feature for\ncontainers. We recommend that you use Anolis OS as the node OS. For other OS, we will try our best to adapt, and users\ncan still enable it without side effects. After you enable the memory QoS feature for a container, Koordlet\nautomatically configures the memory control group (memcg) based on the configuration of the container. This helps you\noptimize the performance of memory-sensitive applications while ensuring fair memory scheduling on the node."),(0,r.kt)("h3",{id:"how-to-use-memory-qos"},"How to use Memory QoS"),(0,r.kt)("p",null,"When you enable memory QoS for the containers in a pod, the memcg is automatically configured based on the specified\nratios and pod parameters. To enable memory QoS for the containers in a pod, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the following annotations to enable memory QoS for the containers in a pod:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n  # To enable memory QoS for the containers in a pod, set the value to auto. \n  koordinator.sh/memoryQoS: \'{"policy": "auto"}\'\n  # To disable memory QoS for the containers in a pod, set the value to none. \n  #koordinator.sh/memoryQoS: \'{"policy": "none"}\'\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Use a ConfigMap to enable memory QoS for all the containers in a cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  resource-qos-config: |-\n    {\n      "clusterStrategy": {\n        "lsClass": {\n           "memoryQoS": {\n             "enable": true\n           }\n         },\n        "beClass": {\n           "memoryQoS": {\n             "enable": true\n           }\n         }\n      }\n    }\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional. Configure advanced parameters."),(0,r.kt)("p",{parentName:"li"},"The following table describes the advanced parameters that you can use to configure fine-grained memory QoS\nconfigurations at the pod level and cluster level."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," true ")," ",(0,r.kt)("li",null," false ")," ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," true: enables memory QoS for all the containers in a cluster. The default memory QoS settings for the QoS class of the containers are used. ")," ",(0,r.kt)("li",null," false: disables memory QoS for all the containers in a cluster. The memory QoS settings are restored to the original settings for the QoS class of the containers. ")," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," auto ")," ",(0,r.kt)("li",null," default ")," ",(0,r.kt)("li",null," none ")," ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," auto: enables memory QoS for the containers in the pod and uses the recommended memory QoS settings. The recommended memory QoS settings are prioritized over the cluster-wide memory QoS settings. ")," ",(0,r.kt)("li",null," default: specifies that the pod inherits the cluster-wide memory QoS settings. ")," ",(0,r.kt)("li",null," none: disables memory QoS for the pod. The relevant memory QoS settings are restored to the original settings. The original settings are prioritized over the cluster-wide memory QoS settings. ")," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minLimitPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"0~100"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),". The default value indicates that this parameter is disabled. This parameter specifies the unreclaimable proportion of the memory request of a pod. This parameter is suitable for scenarios where applications are sensitive to the page cache. You can use this parameter to cache files to optimize read and write performance. For example, if you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"Memory Request=100MiB")," for a container, the default setting is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.min=104857600"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lowLimitPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"0~100"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),". The default value indicates that this parameter is disabled. This parameter specifies the relatively unreclaimable proportion of the memory request of a pod. For example, if you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"Memory Request=100MiB")," for a container, the default setting is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.low=104857600"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throttlingPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"0~100"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),". The default value indicates that this parameter is disabled. This parameter specifies the memory throttling threshold for the ratio of the memory usage of a container to the memory limit of the container. If the usage of the memory limit of a container exceeds the threshold, the memory used by the container will be reclaimed. This parameter is suitable for container memory overcommitment scenarios. You can use this parameter to avoid OOM killers that are triggered by cgroups. For example, if you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"Memory Request=100MiB")," for a container, the default setting is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.high=83886080"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wmarkRatio"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"0~100"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"95"),". A value of ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," indicates that this parameter is disabled. This parameter specifies the threshold of the usage of the memory limit or the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.high")," that triggers asynchronous memory reclaim. If the usage of the memory limit or the value of memory.high exceeds the threshold, the memcg backend asynchronous reclaim feature is triggered. For example, if you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"Memory Request=100MiB")," for a container, the memory throttling setting is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.high=83886080"),", the reclaim ratio setting is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.wmark_ratio=95"),", and the reclaim threshold setting is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.wmark_high=79691776"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wmarkMinAdj"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"-25~50"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"-25")," for the ",(0,r.kt)("inlineCode",{parentName:"td"},"LS")," QoS class and ",(0,r.kt)("inlineCode",{parentName:"td"},"50")," for the ",(0,r.kt)("inlineCode",{parentName:"td"},"BE")," QoS class. A value of 0 indicates that this parameter is disabled. This parameter specifies the adjustment to the global minimum watermark for a container. A negative value decreases the global minimum watermark and therefore postpones memory reclaim for the container. A positive value increases the global minimum watermark and therefore antedates memory reclaim for the container. For example, if you create a pod whose QoS class is LS, the default setting of this parameter is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.wmark_min_adj=-25"),", which indicates that the minimum watermark is decreased by 25% for the containers in the pod.")))),(0,r.kt)("h2",{id:"what-comes-next"},"What Comes Next"),(0,r.kt)("p",null,"For more details, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/milestones"},"milestone"),". Hope it\nhelps!"))}h.isMDXComponent=!0}}]);