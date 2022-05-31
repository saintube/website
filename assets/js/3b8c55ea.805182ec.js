"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3217],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=p(a),k=r,N=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9250:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},d="Installation",p={unversionedId:"installation",id:"installation",title:"Installation",description:"Since v0.1.0 (alpha/beta), Koordinator requires Kubernetes version >= 1.18.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/installation.md",tags:[],version:"current",lastUpdatedBy:"Joseph",lastUpdatedAt:1654001688,formattedLastUpdatedAt:"5/31/2022",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Overview",permalink:"/docs/key-designs/overview"}},m={},u=[{value:"Install with helms",id:"install-with-helms",level:2},{value:"Upgrade with helm",id:"upgrade-with-helm",level:2},{value:"Optional: download charts manually",id:"optional-download-charts-manually",level:2},{value:"Options",id:"options",level:2},{value:"Optional: chart parameters",id:"optional-chart-parameters",level:3},{value:"Optional: feature-gate",id:"optional-feature-gate",level:3},{value:"Optional: the local image for China",id:"optional-the-local-image-for-china",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Installation parameters for AWS EKS",id:"installation-parameters-for-aws-eks",level:3},{value:"Uninstall",id:"uninstall",level:2}],s={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Since v0.1.0 (alpha/beta), Koordinator requires ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18"),"."),(0,l.kt)("h2",{id:"install-with-helms"},"Install with helms"),(0,l.kt)("p",null,"Koordinator can be simply installed by helm v3.5+, which is a simple command-line tool and you can get it from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator koordinator-sh/koordinator --version 0.4.0\n")),(0,l.kt)("h2",{id:"upgrade-with-helm"},"Upgrade with helm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Upgrade the latest version.\n$ helm upgrade koordinator koordinator-sh/koordinator --version 0.4.0 [--force]\n")),(0,l.kt)("p",null,"Note that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Before upgrade, you ",(0,l.kt)("strong",{parentName:"li"},"must")," firstly read the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/koordinator-sh/koordinator/blob/master/CHANGELOG.md"},"Change Log"),"\nto make sure that you have understand the breaking changes in the new version."),(0,l.kt)("li",{parentName:"ol"},"If you want to drop the chart parameters you configured for the old release or set some new parameters,\nit is recommended to add ",(0,l.kt)("inlineCode",{parentName:"li"},"--reset-values")," flag in ",(0,l.kt)("inlineCode",{parentName:"li"},"helm upgrade")," command.\nOtherwise you should use ",(0,l.kt)("inlineCode",{parentName:"li"},"--reuse-values")," flag to reuse the last release's values.")),(0,l.kt)("h2",{id:"optional-download-charts-manually"},"Optional: download charts manually"),(0,l.kt)("p",null,"If you have problem with connecting to ",(0,l.kt)("inlineCode",{parentName:"p"},"https://koordinator-sh.github.io/charts/")," in production, you might need to download the chart from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/releases"},"here")," manually and install or upgrade with it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install/upgrade koordinator /PATH/TO/CHART\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Note that installing this chart directly means it will use the default template values for Koordinator."),(0,l.kt)("p",null,"You may have to set your specific configurations if it is deployed into a production cluster, or you want to configure feature-gates."),(0,l.kt)("h3",{id:"optional-chart-parameters"},"Optional: chart parameters"),(0,l.kt)("p",null,"The following table lists the configurable parameters of the chart and their default values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"featureGates")),(0,l.kt)("td",{parentName:"tr",align:null},"Feature gates for Koordinator, empty string means all by default"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"namespace for Koordinator installation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordinator-system"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imageRepositoryHost")),(0,l.kt)("td",{parentName:"tr",align:null},"Image repository host"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that koord-manager printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.replicas")),(0,l.kt)("td",{parentName:"tr",align:null},"Replicas of koord-manager deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for koord-manager image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koord-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for koord-manager image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.4.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koord-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1000m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koord-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of koord-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of koord-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.metrics.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8080"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.webhook.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of webhook served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeAffinity")),(0,l.kt)("td",{parentName:"tr",align:null},"Node affinity policy for koord-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Node labels for koord-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.tolerations")),(0,l.kt)("td",{parentName:"tr",align:null},"Tolerations for koord-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resyncPeriod")),(0,l.kt)("td",{parentName:"tr",align:null},"Resync period of informer koord-manager, defaults no resync"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.hostNetwork")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether koord-manager pod should run with hostnetwork"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that koord-scheduler printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.replicas")),(0,l.kt)("td",{parentName:"tr",align:null},"Replicas of koord-scheduler deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for koord-scheduler image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koord-scheduler"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for koord-scheduler image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.4.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koord-scheduler container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1000m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koord-scheduler container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of koord-scheduler container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of koord-scheduler container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10251"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.nodeAffinity")),(0,l.kt)("td",{parentName:"tr",align:null},"Node affinity policy for koord-scheduler pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.nodeSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Node labels for koord-scheduler pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.tolerations")),(0,l.kt)("td",{parentName:"tr",align:null},"Tolerations for koord-scheduler pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.hostNetwork")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether koord-scheduler pod should run with hostnetwork"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that koordlet printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for koordlet image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koordlet"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for koordlet image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.4.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koordlet container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koordlet container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of koordlet container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of koordlet container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.failurePolicy.pods")),(0,l.kt)("td",{parentName:"tr",align:null},"The failurePolicy for pods in mutating webhook configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ignore"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.timeoutSeconds")),(0,l.kt)("td",{parentName:"tr",align:null},"The timeoutSeconds for all webhook configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"crds.managed")),(0,l.kt)("td",{parentName:"tr",align:null},"Koordinator will not install CRDs with chart if this is false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imagePullSecrets")),(0,l.kt)("td",{parentName:"tr",align:null},"The list of image pull secrets for koordinator image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"."),(0,l.kt)("h3",{id:"optional-feature-gate"},"Optional: feature-gate"),(0,l.kt)("p",null,"Feature-gate controls some influential features in Koordinator:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Effect (if closed)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodMutatingWebhook")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to open a mutating webhook for Pod ",(0,l.kt)("strong",{parentName:"td"},"create")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Don't inject koordinator.sh/qosClass, koordinator.sh/priority and don't replace koordinator extend resources ad so on")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodValidatingWebhook")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to open a validating webhook for Pod ",(0,l.kt)("strong",{parentName:"td"},"create/update")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"It is possible to create some Pods that do not conform to the Koordinator specification, causing some unpredictable problems")))),(0,l.kt)("p",null,"If you want to configure the feature-gate, just set the parameter when install or upgrade. Such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install koordinator https://... --set featureGates="PodMutatingWebhook=true\\,PodValidatingWebhook=true"\n')),(0,l.kt)("p",null,"If you want to enable all feature-gates, set the parameter as ",(0,l.kt)("inlineCode",{parentName:"p"},"featureGates=AllAlpha=true"),"."),(0,l.kt)("h3",{id:"optional-the-local-image-for-china"},"Optional: the local image for China"),(0,l.kt)("p",null,"If you are in China and have problem to pull image from official DockerHub, you can use the registry hosted on Alibaba Cloud:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install koordinator https://... --set imageRepositoryHost=koordinator-registry.cn-hangzhou.cr.aliyuncs.com\n")),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"installation-parameters-for-aws-eks"},"Installation parameters for AWS EKS"),(0,l.kt)("p",null,"When using a custom CNI (such as Weave or Calico) on EKS, the webhook cannot be reached by default. This happens because the control plane cannot be configured to run on a custom CNI on EKS, so the CNIs differ between control plane and worker nodes."),(0,l.kt)("p",null,"To address this, the webhook can be run in the host network so it can be reached, by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"--set manager.hostNetwork=true")," when use helm install or upgrade."),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"Note that this will lead to all resources created by Koordinator, including webhook configurations, services, namespace, CRDs and CR instances managed by Koordinator controller, to be deleted!"),(0,l.kt)("p",null,"Please do this ONLY when you fully understand the consequence."),(0,l.kt)("p",null,"To uninstall koordinator if it is installed with helm charts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall koordinator\nrelease "koordinator" uninstalled\n')))}k.isMDXComponent=!0}}]);