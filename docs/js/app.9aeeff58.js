(function(e){function n(n){for(var o,a,s=n[0],l=n[1],c=n[2],d=0,h=[];d<s.length;d++)a=s[d],r[a]&&h.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(n);while(h.length)h.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,s=1;s<t.length;s++){var l=t[s];0!==r[l]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={1:0},i=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var p=l;i.push([9,0]),t()})({9:function(e,n,t){e.exports=t("Vtdi")},B30f:function(e,n,t){"use strict";var o=t("JvGh"),r=t.n(o);r.a},Drq1:function(e,n,t){},IajB:function(e,n,t){"use strict";var o=t("Yb3g"),r=t.n(o);r.a},JvGh:function(e,n,t){},KHRh:function(e,n,t){"use strict";var o=t("dtHW"),r=t.n(o);r.a},Vtdi:function(e,n,t){"use strict";t.r(n);t("VRzm");var o=t("Kw5r"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Header"),t("section",{staticClass:"page"},[t("router-view")],1),t("Footer")],1)},i=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",{staticClass:"header",class:{hidden:e.isHidden}},[t("router-link",{staticClass:"title",attrs:{to:{name:"index"}}},[e._v("kpat.io")])],1)},s=[],l=(t("f3/d"),{name:"Header",computed:{isHidden:function(){return"index"!==this.$route.name}}}),c=l,p=(t("mdYu"),t("KHd+")),d=Object(p["a"])(c,a,s,!1,null,"68d08845",null),h=d.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",{staticClass:"footer"},[t("router-link",{attrs:{to:{name:"index"}}},[e._v("kpat.io")])],1)},f=[],g={name:"Footer"},m=g,b=(t("KHRh"),Object(p["a"])(m,u,f,!1,null,"0871370c",null)),w=b.exports,v={name:"app",components:{Header:h,Footer:w}},y=v,k=(t("nNx0"),Object(p["a"])(y,r,i,!1,null,null,null)),x=k.exports,T=t("jE9Z"),A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",e._l(e.articles,function(e,n){return t("Preview",{key:n,attrs:{title:e.name}})}))},C=[],E=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"preview"},[t("router-link",{attrs:{to:{name:"detail",params:{title:e.title}}}},[t("Post",{staticClass:"post",attrs:{title:e.title}}),t("div",{staticClass:"after"},[t("button",{staticClass:"button"},[e._v("Continue Reading")])])],1),t("hr")],1)},D=[],I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("article",{ref:"post",staticClass:"post",domProps:{innerHTML:e._s(e.articleLookup(e.title).content)}}),e.error?t("p",[e._v("Couldn't find the article :-(")]):e._e()])},_=[],P=(t("rGqo"),t("yT7P")),S=t("FIf5"),j=t.n(S),q=t("L2JU"),N=(t("jaj/"),t("cFwv"),{name:"Post",props:["title"],data:function(){return{article:"",error:!1}},mounted:function(){this.refreshSyntax()},computed:Object(P["a"])({},Object(q["b"])(["articleLookup"])),methods:{refreshSyntax:function(){this.$refs.post.querySelectorAll("pre > code").forEach(function(e){j.a.highlightBlock(e)})}}}),G=N,W=(t("eTgM"),Object(p["a"])(G,I,_,!1,null,null,null)),L=W.exports,R={name:"Preview",props:["title"],components:{Post:L}},F=R,O=(t("g6v5"),Object(p["a"])(F,E,D,!1,null,"36de9735",null)),H=O.exports,$={name:"Index",computed:Object(q["b"])(["articles"]),components:{Preview:H}},M=$,B=(t("IajB"),Object(p["a"])(M,A,C,!1,null,"57d44152",null)),V=B.exports,K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("Post",{attrs:{title:e.title}})],1)},J=[],U={props:["title"],name:"Detail",components:{Post:L}},Y=U,z=(t("B30f"),Object(p["a"])(Y,K,J,!1,null,"31659f48",null)),Z=z.exports;o["a"].use(T["a"]);var Q=new T["a"]({routes:[{path:"/",name:"index",component:V},{path:"/post/:title",name:"detail",component:Z,props:!0}],scrollBehavior:function(){return{x:0,y:0}}}),X=(t("dRSK"),t("fi9V"));o["a"].use(q["a"]);var ee=new q["a"].Store({state:{articles:X},getters:{articles:function(e){return e.articles},articleLookup:function(e){return function(n){return e.articles.find(function(e){return e.name===n})}}},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({el:"#app",router:Q,store:ee,components:{App:x},render:function(e){return e(x)},template:"<App/>"})},Yb3g:function(e,n,t){},dTVA:function(e,n,t){},dtHW:function(e,n,t){},eTgM:function(e,n,t){"use strict";var o=t("f4zm"),r=t.n(o);r.a},f4zm:function(e,n,t){},fi9V:function(e){e.exports=[{name:"kubernetes-core.html",content:'<date>June 15, 2018</date>\n<h2>Kubernetes Basics</h2>\n<p>\n    Container orchestration is quickly becoming a defacto standard among tech firms.\n    As software requirements become more and more complex and service outages are \n    increasingly expensive, the systems we build have to scale up seamlessly and be \n    highly available.\n</p>\n<p>\n    Kubernetes or <b>k8s</b> is one possible tool to fulfill that job. In it\'s own\n    words:\n</p>\n<blockquote>\n    Kubernetes is an open-source system for automating deployment, scaling, and \n    management of containerized applications.\n</blockquote>\n<p>\n    At the core of k8s there are a few abstractions that we have a look\n    at to get started with orchestrating and automating our containers.\n</p>\n<ul>\n    <li>Pods<sup>1</sup></li>\n    <li>Deployments<sup>2</sup></li>\n    <li>Services<sup>3</sup></li>\n    <li>Ingress<sup>4</sup></li>\n</ul>\n<p>\n    These concepts allow us to engineer products that are resilient\n    and self healing in a concise manner.\n</p>\n\n<h2>Manifests</h2>\n<p>\n    The resources necessary for k8s are handled by <b>kubectl</b> - either manually \n    or via manifest files. For automation purposes manifest files are best \n    practice. All Manifest files follow the same structure and can be interpreted\n    in multiple formats. Here an example in yaml\n</p>\n<pre><code class="less">apiVersion: v1\nkind: Pod\nmetadata:\n    name: podname\n    namespace: ns\n    labels:\n        key1: value1\n        key2: value2\nspec:\n    ...\n</code></pre>\n<p>\n    The following base elements are specified for each manifest file\n</p>\n<ul>\n    <li><b>apiVersion</b> - The version of the k8s API</li>\n    <li><b>kind</b> - The type of object that is to be created</li>\n    <li><b>metadata</b> - Metadata including the name, namespace, and labels to identify the resource</li>\n    <li><b>spec</b> - The specification of the object</li>\n</ul>\n<p>\n    This allows us to create and destroy resources within a k8s cluster.\n    Now let\'s have a closer look at the types of resources we can create.\n</p>\n\n<h2>Pods</h2>\n<p>\n    <b>Pods</b> are the smallest unit of scheduling in k8s. They\n    can contain multiple tighly coupled containers, that share all resources.\n    This enables containers in the same pod to communicate as if they\n    are colocated on the same logical host. This colocation imples the access\n    to the same port ranges, memory, and file access.\n</p>\n<p>\n    The following example describes a pod including a single nginx container\n    exposing port 80 to the other pods.\n</p>\n<pre><code class="less">apiVersion: v1\nkind: Pod\nmetadata:\n    name: nginx\n    labels:\n        app: srv\nspec:\n    containers:\n    - name: nginx\n      image: nginx:1.7.9\n      ports:\n      - containerPort: 80\n</code></pre>\n<p>\n    Manually deploying pods to k8s clusters is not common practice. <b>Deployments</b> \n    that create <b>ReplicationControllers</b>, which make sure that there is a certain \n    number of pods running at a certain time, handle the life cycle of pods.\n</p>\n\n<h2>Deployments</h2>\n<p>\n    <b>Deployments</b> exist to regulate the creation, destruction, and life cycle \n    management of pods. A deployment depicts the target state of the application. \n    If a new version of an application gets deployed to a k8s cluster, deployments \n    take care of the bureaucracy of spinning up new pods and fading out old ones \n    without affecting uptime.\n</p>\n<p>\n    The following deployment spins up 3 replicas of a nginx container\n</p>\n<pre><code>apiVersion: apps/v1\nkind: Deployment\nmetadata:\n    name: srv-deploy\n    labels:\n        app: srv\nspec:\n    replicas: 3\n    selector:\n        matchLabels:\n            app: srv\n    template:\n        metadata:\n            labels:\n                app: srv\n        spec:\n            containers:\n            - name: nginx\n              image: nginx:1.7.9\n              ports:\n              - containerPort: 80\n</code></pre>\n<p>\n    The <b>template</b> field of the deployment specification follows the exact syntax of \n    a pod definition. If the manifest is changed and applied to the cluster, in the background \n    k8s spins up another deployment, waiting for the containers to be available, then \n    gradually removes the old pods.\n</p>\n<p>\n    Up and down scaling of the replicas is handled by a <b>ReplicationController</b> (RC). It\'s\n    job is to make sure that a specified number of replicas are up and\n    running at any given moment. If a pod crashes or becomes unresponsive, the RC will terminate\n    the dying pod and spawn another one as a replacement.\n</p>\n<p>\n    When creating multiple replicas of a pod, we need an abstraction to handle access in a \n    unified way. <b>Services</b> provide exactly that abstraction.\n</p>\n\n<h2>Services</h2>\n<p>\n    <b>Services</b> tie a group of pods together to a unified endpoint by using\n    label selectors. They also represent addressable named units within a \n    namespace.\n</p>\n<p>\n    The following manifest shows a service that selects all pods with the \n    <b>app: srv</b> label and then exposes port 80.\n</p>\n<pre><code>apiVersion: v1\nkind: Service\nmetadata:\n    name: somesvc\nspec:\n    selector:\n        app: srv\n    ports:\n    - protocol: TCP\n      port: 80\n</code></pre>\n<p>\n    The service we created is limited to the local k8s network\n    and currently isn\'t exposed via a public IP. To expose services\n    to the internet we create a resource called <b>ingress</b>.\n</p>\n\n<h2>Ingress</h2>\n<p>\n    To fulfill the promise of <em>multitenancy</em>, a k8s cluster needs to\n    be able to route to multiple endpoints independently. This is where <b>ingress</b> \n    comes in, as the name already implies ingress has the ability of reverse\n    proxying from the internet into the cluster. \n</p>\n<p>\n    The following example routes <b>s1.example.com</b> to the service \n    <b>s1</b> and <b>s2.example.com</b> to <b>s2</b>.\n</p>\n<pre><code class="less">apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n    name: test\nspec:\n    rules:\n    - host: s1.example.com\n    http:\n        paths:\n        - backend:\n            serviceName: s1\n            servicePort: 80\n    - host: s2.example.com\n    http:\n        paths:\n        - backend:\n            serviceName: s2\n            servicePort: 80\n</code></pre>\n<p>\n    Ingress, being the primary endpoint for any incoming connection, \n    also supports <em>TLS</em>.\n</p>\n<p>\n    Now we have a way of deploying our services, scaling them independently, \n    and routing to them from the internet. This covers the very basics of k8s.\n</p>\n\n<h2>Conclusion</h2>\n<p>\n    Kubernetes is a powerful orchestration tool. With the above mentioned resources we can\n    already automate a service to run in our cluster. \n</p>\n<p>\n    Here a few best practices to adhere by when dealing with k8s resources\n</p>\n<ul>\n    <li>Never deploy pods on their own - always use <b>deployments</b> to manage their lifecycle</li>\n    <li>\n        Use <em>one container per pod</em> - this avoids port collisions and keeps your \n        containers independently scalable\n    </li>\n    <li>Only use the <b>latest</b> tag for internal docker images, never for external ones</li>\n    <li>\n        Create services before deployments are created\n        <ul>\n            <li>Deployments take some time to ramp up</li>\n            <li>Services are created instantly</li>\n        </ul>\n    </li>\n    <li>Use <b>ingress</b> to expose services to the outside world instead of <b>services</b></li>\n    <li>Include the orchestration logic in the service\'s version control system</li>\n    <li>Create a CICD pipeline that deploys to your cluster in an automated fashion</li>\n</ul>\n<p>\n    There are additional concepts of vital importance to a k8s cluster. The\n    following is a non-exhaustive list of additional <em>kinds</em> to explore\n</p>\n<ul>\n    <li>\n        <b>Namespace</b> - Used, among other things, to avoid naming conflicts when \n        dealing with multiple environments\n    </li>\n    <li>\n        <b>ConfigMap</b> and <b>Secret</b> - Introduce potentially shared static configuration to the pods\n    </li>\n    <li>\n        <b>StorageClass</b> and <b>PersistentVolumeClaim</b> - Used to share volatile data\n        among pods\n    </li>\n    <li>\n        <b>NetworkPolicy</b> - Used to regulate egress and ingress access to certain nodes \n        and services\n    </li>\n    <li>\n        <b>Job</b> and <b>CronJob</b> - Used to run single or periodic jobs on a k8s cluster\n    </li>\n</ul>\n<p>\n    For more information, refer to the k8s documentation<sup>5</sup>\n</p>\n<hr>\n<h2>References</h2>\n<ol class="references">\n    <li>\n        <a target="_blank" href="https://kubernetes.io/docs/concepts/workloads/pods/pod/">\n            Kubernetes resources on <b>Pods</b>\n        </a>\n    </li>\n    <li>\n        <a target="_blank" href="https://kubernetes.io/docs/concepts/workloads/controllers/deployment/">\n            Kubernetes resources on <b>Deployments</b>\n        </a>\n    </li>\n    <li>\n        <a target="_blank" href="https://kubernetes.io/docs/concepts/services-networking/service/">\n            Kubernetes resources on <b>Services</b>\n        </a>\n    </li>\n    <li>\n        <a target="_blank" href="https://kubernetes.io/docs/concepts/services-networking/ingress/">\n            Kubernetes resources on <b>Ingress</b>\n        </a>\n    </li>\n    <li>\n        <a target="_blank" href="https://kubernetes.io/docs/home/">\n            Kubernetes documentation\n        </a>\n    </li>\n</ol>'},{name:"error-propagation.html",content:'<date>June 9, 2018</date>\n<h2>Go Error Propagation</h2>\n<p>\n    Error handling is a vital part of any programming language. There\'s \n    any number of things that can go wrong if you interact with the outside \n    world. A file can be missing or corrupt, an endpoint temporarily unreachable,\n    a database server down, etc. Things can go wrong everywhere.\n    Now in order to keep the systems we work on maintainable and user friendly,\n    we have to handle these errors appropriately.\n</p>\n<p>\n    Different languages offer different mechanisms for handling errors.\n    Most modern programming languages, for example, include a feature called \n    <b>exceptions</b> as a convenient\n    way to propagate errors through <b>multiple</b>\n    layers. This feature is missing in Go - and that\'s on purpose.\n</p>\n<p>\n    In the following sections we\'ll explore some common methods for avoiding\n    error handling. I like call these <b>anti-patterns</b> or <b>"don\'ts"</b>\n</p>\n<h2>Method 1: Ignore</h2>\n<p>\n    The first anti-pattern in error handling - and this is <b>not</b> limited \n    to go - is ignoring them alltogether. Here is a piece of code that makes excessive\n    use of the underscore (<b>_</b>). The underscore, also known as the \n    <b>blank identifier</b>, is used when calling functions with multiple\n    return values to discard one of these values.\n</p>\n<p>\n    Let\'s have a look at the example\n</p>\n<pre><code>// file: main.go\n\npackage main\n\nimport (\n    "io/ioutil"\n    "log"\n    "net/http"\n)\n\nfunc main() {\n    cont := doWork("google.com")\n\n    log.Println(cont)\n}\n\nfunc doWork(host string) string {\n    client := &amp;http.Client{}\n\n    req, _ := http.NewRequest("GET", host, nil)\n\n    req.Header.Add("Accept", "application/json")\n    req.AddCookie(&amp;http.Cookie{Name: "ID", Value: "1B2EB10C8ADDE70440A2EFBA15C2C6CD"})\n\n    resp, _ := client.Do(req)\n\n    b, _ := ioutil.ReadAll(resp.Body)\n\n    return string(b)\n}</code></pre>\n<p>\n    Looks good enough, right? So there is this <b>doWork</b> function that calls an \n    API endpoint with a cookie, then reads the contents and returns them.\n    Now running this will result in a <b>SIGSEGV</b>, a segmentation fault.\n    Meaning, that one of the errors in the code is not <b>nil</b> and the \n    corresponding unignored value therefore is. \n</p>\n<p>\n    We clearly don\'t want code like this in our production systems. Let\'s try \n    something different.\n</p>\n\n<h2>Method 2: Delegate</h2>\n<p>\n    Since go is <em>annoying</em> and doesn\'t let us propagate the errors to\n    the next layer, we can just try replicate that missing feature ourselves.\n    What if we <b>delegate</b> the error to the calling function? We can just\n    "offshore" the work to the poor fellow who will be interacting with our API.\n</p>\n<p>\n    Let\'s have a peak what that might look like with our example\n</p>\n<pre><code>// file: main.go\n\n// ...\n\nfunc main() {\n    cont, err := doWork("google.com")\n\n    if err != nil {\n        log.Panicln(err)\n    }\n\n    log.Println(cont)\n}\n\nfunc doWork(host string) (string, error) {\n    client := &amp;http.Client{}\n\n    req, err := http.NewRequest("GET", host, nil)\n\n    if err != nil {\n        return "", err\n    }\n\n    req.Header.Add("Accept", "application/json")\n    req.AddCookie(&amp;http.Cookie{Name: "ID", Value: "1B2EB10C8ADDE70440A2EFBA15C2C6CD"})\n\n    resp, err := client.Do(req)\n\n    if err != nil {\n        return "", err\n    }\n\n    b, err := ioutil.ReadAll(resp.Body)\n\n    if err != nil {\n        return "", err\n    }\n\n    return string(b), nil\n}\n</code></pre>\n<p>\n    We\'ve added error delegation inbetween the business logic. The \n    caller now gets a <em>mysterious</em> error message together with a trace\n    that tells her where the error is originating. \n</p>\n<pre><code class="bash">$ go run main.go\npanic: Get google.com: unsupported protocol scheme ""\n</code></pre>\n<p>\n    This is marginally more useful\n    than just crashing, I admit it, yet, not user friendly at all. So how can\n    we improve that?\n</p>\n\n<h2>Improvements</h2>\n<p>\n    Let\'s say Lisa is interacting with our system. Now she\'s getting an error \n    from our API. What Lisa would like to know is\n</p>\n<blockquote>\n    How can I adjust the input value to get rid of the error? What am I doing wrong?\n</blockquote>\n<p>\n    This is a difficult question to answer. What we can easily answer is\n</p>\n<blockquote>\n    What part of the system was I interacting with that produced the error?\n</blockquote>\n<p>\n    Let\'s glance at an example\n</p>\n<pre><code>// file: main.go\n\n// ...\n\nfunc doWork(host string) (string, error) {\n    client := &amp;http.Client{}\n\n    req, err := http.NewRequest("GET", host, nil)\n\n    if err != nil {\n        return "", fmt.Errorf("Failed to create a new request: %v", err)\n    }\n\n    req.Header.Add("Accept", "application/json")\n    req.AddCookie(&amp;http.Cookie{Name: "ID", Value: "1B2EB10C8ADDE70440A2EFBA15C2C6CD"})\n\n    resp, err := client.Do(req)\n\n    if err != nil {\n        return "", fmt.Errorf("Failed to execute the request with host \\"%s\\": %v", host, err)\n    }\n\n    b, err := ioutil.ReadAll(resp.Body)\n\n    if err != nil {\n        return "", fmt.Errorf("Failed to read from request body: %v", err)\n    }\n\n    return string(b), nil\n}\n</code></pre>\n<p>And the corresponding output</p>\n<pre><code class="bash">$ go run main.go\npanic: Failed to execute the request with host "google.com": Get google.com: unsupported protocol scheme ""\n</code></pre>\n<p>\n    Now Lisa knows that we were trying to dispatch the request as the error happened. \n    Together with the trace, I\'d argue, she has a better chance of finding out what\n    changes she has to make to fix her code.\n</p>\n\n<h2>Conclusion</h2>\n<p>\n    There is no magic formula to getting error handling right. We\n    just have consider the poor person interacting with our code.\n    Make it a better experience for them.\n</p>\n<p>\n    Here are a few <em>best practices</em> around error handling. Some of them\n    not covered by the scope of this article.\n</p>\n<ul>\n    <li>Try to give the programmer a hint of where the code is failing</li>\n    <li><b>Always</b> include the trace for internal APIs</li>\n    <li>Hide error information from end users. This might expose a security flaw in your system</li>\n    <li>\n        Try to fail softly. Some errors can be recovered from.\n        <ul>\n            <li>Few errors should render a service unfunctional</li>\n            <li>\n                If, for example, the billing service is unresponsive, simply \n                display a message instead of a internal server error\n            </li>\n        </ul>\n    </li>\n    \n</ul>'},{name:"go-testing.html",content:'<date>June 8, 2018</date>\n<h2>TDD with Go</h2>\n<p>\n    This post explains the basics of <b>Test Driven Developmen</b> (TDD) in the <b>Go</b> language.\n    We\'ll start with the basics of TDD and then cover a simple example with the factorial function. \n</p>\n<h3>The Basics of TDD</h3>\n<p>\n    The core idea of TDD is to write tests prior to writing code. In contrast to\n    <b>Test First Development</b>, TDD is an iterative process, which focusses on one test at a time. \n    There are 3 steps to each cycle:\n</p>\n<ul>\n    <li>\n        <span style="color: red">Red</span> - Add a new test for which the code doesn\'t exist yet. \n        Obviously running the test after this phase will result in a failing test.\n    </li>\n    <li>\n        <span style="color: green">Green</span> - Add the minimum amount of code to satisfy the test. \n        At this point all tests should succeed.\n    </li>\n    <li>Refactor - Improve the code without adding functionality</li>\n</ul>\n<p>\n    The cycle is also known as <b>red-green-refactor</b>. After each of these steps, \n    the tests are executed again. This results in good code coverage and incrementally \n    tested code, thus arguably better code quality.\n</p>\n<h3>An Example</h3>\n<p>\n    Let\'s have a look at a concrete example. Mathematical functions are a simple way\n    of getting to know the concept of testing, since they can be modelled without \n    including any dependencies. We pick the factorial function, wich is most commonly \n    denoted by <b>n!</b>. The factorial is a mathematical function which takes the \n    product of all positive integers up to the specified parameter n. Let\'s look at a few \n    examples \n</p>\n<pre><code class="bash"># Definition of factorial\n$ n! = n * (n - 1) * (n - 2) * ... * 2 * 1\n# Alternative definition\n$ n! = n * (n - 1)!\n# 0 is a special value\n$ 0! = 1\n$ 1! = 1\n$ 2! = 2 * 1 = 1\n$ 3! = 3 * 2 * 1 = 6\n$ ...\n$ 10! = 10 * 9 * 8 * ... * 2 * 1 = 3\'628\'800\n</code></pre>\n<p>\n    Without further ado we setup our <b>main.go</b>, which looks as follows\n</p>\n<pre><code class="go">// file: main.go\n\npackage main\n\nfunc main() {\n    // Insert code\n}\n</code></pre>\n<p>\n    And our test file <b>main_test.go</b>\n</p>\n<pre><code class="go">// file: main_test.go\n\npackage main\n\n// Empty for now\n</code></pre>\n<p>\n    Like obedient TDD developers we\'ll start with a test for our \n    <b>factorial</b> function. <b>0! = 1</b> is a special value of this function.\n    Let\'s start there\n</p>\n<pre><code class="go">// file: main_test.go\n\npackage main\n\nimport (\n    "testing"\n)\n\nfunc TestZero(t *testing.T) {\n    res := factorial(0)\n\n    if 1 != res {\n        t.Errorf("Expected 0! to be 1, got %d", res)\n    }\n}\n</code></pre>\n<p>\n    With TDD in mind, we run the tests which returns the anticipated output, an error\n</p>\n<pre><code class="bash">$ go test\n./main_test.go:8: undefined: factorial\nFAIL    test [build failed]\n</code></pre>\n<p>\n    Right now we\'re in the <span style="color: red">red</span> phase. \n    Our tests are failing. The next step is to add as little functionality\n    as possible to make our tests pass. We adapt out <b>main.go</b> as \n    follows\n</p>\n<pre><code class="go">// file: main.go\n// ...\n\nfunc factorial(num int) int {\n    return 0\n}</code></pre>\n<p>\n    Now the code compiles and we don\'t get that compiler error anymore. Yet,\n    our software doesn\'t work as expected yet.\n</p>\n<pre><code class="bash">$ go test\n--- FAIL: TestZero (0.00s)\nmain_test.go:10: Expected 0! to be 1, got 0\nFAIL\nexit status 1\nFAIL    test      0.006s\n</code></pre>\n<p>\n    This step is crucial to TDD, since it assures us that we aren\'t shooting shoot \n    blanks. In other words, our test actually checks the functionality instead of\n    giving us false positives. Let\'s fix that really quick\n</p>\n<pre><code class="go">// file: main.go\n// ...\n\nfunc factorial(num int) int {\n    return 1\n}</code></pre>\n<p>\n    Now we run our test again and see <span stlye="color: green">green</span>.\n</p>\n<pre><code class="bash">$ go test\nPASS\nok      test      0.006s\n</code></pre>\n<p>\n    The code looks quite simple and neat, hence we won\'t go into the refactor step\n    for now. Phew! Let\'s keep the momentum and move to the next value. <b>1! = 1</b> already\n    works - following the protocol, we first make it fail\n</p>\n<pre><code class="go">// file: main_test.go\n// ...\n\nfunc TestOne(t *testing.T) {\n    res := factorial(1)\n    if 0 != res {\n        t.Errorf("Expected 0! to be 1, got %d", res)\n    }\n}\n</code></pre>\n<p>\n    And fix it again\n</p>\n<pre><code class="go">// file: main_test.go\n// ...\n\nfunc TestOne(t *testing.T) {\n    res := factorial(1)\n    if 1 != res {\n        t.Errorf("Expected 0! to be 1, got %d", res)\n    }\n}\n</code></pre>\n<p>\n    For the next value we\'ll add a more generic test case\n</p>\n<pre><code class="go">// file: main_test.go\n// ...\n\nfunc TestN(t *testing.T) {\n    var prov = []struct {\n        n   int\n        exp int\n    }{\n        {2, 2},\n    }\n\n    for _, tt := range prov {\n        act := factorial(tt.n)\n\n        if act != tt.exp {\n            t.Errorf("Expected %d! to be %d, got %d", tt.n, tt.exp, act)\n        }\n    }\n}\n</code></pre>\n<p>\n    Which fails. Now the corresponding functionality\n</p>\n<pre><code class="go">// file: main.go\n\nfunc factorial(num int) int {\n    if num <= 1 {\n        return 1\n    }\n\n    return 2\n}</code></pre>\n<p>\n    Fine, we\'ll stop with the constants now. Let\'s implement our function\n    recursively as in the second definition <b>n! = n * (n - 1)!</b>. We can break\n    the current implementation with the test for <b>n = 3</b>. The test can now\n    be extended as such\n</p>\n<pre><code class="go">// file: main_test.go\n// ...\n\nfunc TestN(t *testing.T) {\n    var prov = []struct {\n        n   int\n        exp int\n    }{\n        {2, 2},\n        {3, 6}, // We added this\n    }\n    for _, tt := range prov {\n        act := factorial(tt.n)\n\n        if act != tt.exp {\n            t.Errorf("Expected %d! to be %d, got %d", tt.n, tt.exp, act)\n        }\n    }\n}\n</code></pre>\n<p><span style="color: red">Red</span>. Now for the actual code</p>\n<pre><code class="go">// file: main.go\nfunc factorial(num int) int {\n    if num &lt;= 1 {\n        return 1\n    }\n\n    return num * factorial(num-1)\n}\n</code></pre>\n<p>\n    And so on. I think you get the point\n</p>\n\n<h3>Conclusion</h3>\n<p>\n    <b>TDD</b> enables developers to achieve a <b>high test coverage</b> quickly\n    and be more aware of what testable code looks like. It\'s a great way\n    for <em>getting used to testing</em>.\n</p>'},{name:"gin-testing.html",content:'<date>June 8, 2018</date>\n<h2>Testing with Gin</h2>\n<p>\n    Cheers! This blog post is about writing integration tests for a Gin \n    framework based application. Let\'s dive right in to the basic setup<sup>1</sup>.\n</p>\n<pre><code>// file: main.go\n\npackage main\n\nimport "github.com/gin-gonic/gin"\n\nfunc main() {\n    r := gin.Default()\n\n    // register the ping endpoint\n    r.GET("/ping", pingEndpoint)\n\n    r.Run()\n}\n\nfunc pingEndpoint(c *gin.Context) {\n    c.JSON(200, gin.H{\n        "message": "pong",\n    })\n}</code></pre>\n<p>\n    This returns a message on the endpoint <b>/ping</b> with the content\n</p>\n<pre><code class="bash">$ curl http://localhost:8080/ping\n{"message": "pong"}\n</code></pre>\n<p>\n    All other endpoints return a <b>404 error</b>. In order to prepare for integration \n    tests, the first thing to do with this is a small refactoring.\n    The server setup can be extracted out of the main function context as such:\n</p>\n<pre><code>// file: main.go\n\npackage main\n\nimport "github.com/gin-gonic/gin"\n\nfunc main() {\n    setupServer().Run()\n}\n\n// The engine with all endpoints is now extracted from the main function\nfunc setupServer() *gin.Engine {\n    r := gin.Default()\n\n    r.GET("/ping", pingEndpoint)\n\n    return r\n}\n\nfunc pingEndpoint(c *gin.Context) {\n    c.JSON(200, gin.H{\n        "message": "pong",\n    })\n}</code></pre>\n<p>\n    Once the extraction is performed, <b>main_test.go</b> can be set up. The <b>httptest</b>\n    package, that\'s already baked into golang, was designed for this very use case. \n    Fortunately the Gin framework developers have maintained \n    compatibility with the standard http interfaces and can thus be used seamlessly in conjunction.\n</p>\n<p>\n    The following snipped shows a possible integration test for the <b>/ping</b> endpoint.\n</p>\n<pre><code>// file: main_test.go\n\npackage main\n\nimport (\n    "fmt"\n    "net/http"\n    "net/http/httptest"\n    "testing"\n)\n\nfunc TestPingRoute(t *testing.T) {\n    // The setupServer method, that we previously refactored\n    // is injected into a test server\n    ts := httptest.NewServer(setupServer())\n    // Shut down the server and block until all requests have gone through\n    defer ts.Close()\n\n    // Make a request to our server with the {base url}/ping\n    resp, err := http.Get(fmt.Sprintf("%s/ping", ts.URL))\n\n    if err != nil {\n        t.Fatalf("Expected no error, got %v", err)\n    }\n\n    if resp.StatusCode != 200 {\n        t.Fatalf("Expected status code 200, got %v", resp.StatusCode)\n    }\n\n    val, ok := resp.Header["Content-Type"]\n\n    // Assert that the "content-type" header is actually set\n    if !ok {\n        t.Fatalf("Expected Content-Type header to be set")\n    }\n\n    // Assert that it was set as expected\n    if val[0] != "application/json; charset=utf-8" {\n        t.Fatalf("Expected \\"application/json; charset=utf-8\\", got %s", val[0])\n    }\n}</code></pre>\n<p>\n    This is all there is to it code-wise. The rest of the magic is framework independent.\n    As shown in the example, the <b>http</b><sup>2</sup> package can be used to fire request against your endpoints.\n</p>\n<p>The following command can be used to execute the test</p>\n<pre><code class="bash">$ go test\n[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.\n\n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n    - using env:   export GIN_MODE=release\n    - using code:  gin.SetMode(gin.ReleaseMode)\n\n[GIN-debug] GET    /ping                     --\x3e test.pingEndpoint (3 handlers)\n[GIN] 2018/06/08 - 10:40:06 | 200 |         103µs |       127.0.0.1 | GET      /ping\nPASS\nok      test      0.022s</code></pre>\n\n<h3>Good Practices</h3>\n<p>\n    Here are a few guidelines when doing integration tests together with a http framework:\n</p>\n<ul>\n    <li>\n        Focus on one part of the system at a time.\n        <ul>\n            <li>\n                Testing the database in conjunction with the http router is time \n                consuming and results in fragile tests\n            </li>\n            <li>\n                Any other part of the system should be designed with testing in mind. \n                Use interfaces to improve the overall testability of your code\n            </li>\n        </ul>\n    </li>\n    <li>The HTTP headers and status codes should be tested rigurously</li>\n    <li>Form validation errors are also a good place to start</li>\n    <li>It\'s a good idea to use TDD to get jump-started writing testable code</li>\n</ul>\n<hr>\n<h3>References</h3>\n<ol class="references">\n    <li>\n        <a target="_blank" href="https://github.com/gin-gonic/gin#quick-start">A quick start guide to set up the <b>Gin</b> framework</a>\n    </li>\n    <li>\n        <a target="_blank" href="https://golang.org/pkg/net/http/">The golang <b>http</b> package</a>\n    </li>\n</ol>'}]},g6v5:function(e,n,t){"use strict";var o=t("dTVA"),r=t.n(o);r.a},mdYu:function(e,n,t){"use strict";var o=t("Drq1"),r=t.n(o);r.a},nNx0:function(e,n,t){"use strict";var o=t("uWEC"),r=t.n(o);r.a},uWEC:function(e,n,t){}});
//# sourceMappingURL=app.9aeeff58.js.map