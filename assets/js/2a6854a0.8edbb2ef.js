"use strict";(self.webpackChunksheron_w=self.webpackChunksheron_w||[]).push([[451],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},523:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Assign a Subdomain to Elastic Beanstalk and Enable HTTPS",tags:["\u6298\u817e\u8bb0\u5f55"]},c=void 0,u={permalink:"/2021/01/04/subdomain-https-for-eb",source:"@site/blog/2021-01-04-subdomain-https-for-eb.md",title:"Assign a Subdomain to Elastic Beanstalk and Enable HTTPS",description:"To enable HTTPS (easily), make sure you created one Elastic Beanstalk environment with Load Balancer option.",date:"2021-01-04T00:00:00.000Z",formattedDate:"January 4, 2021",tags:[{label:"\u6298\u817e\u8bb0\u5f55",permalink:"/tags/\u6298\u817e\u8bb0\u5f55"}],readingTime:1.8,truncated:!0,authors:[],frontMatter:{title:"Assign a Subdomain to Elastic Beanstalk and Enable HTTPS",tags:["\u6298\u817e\u8bb0\u5f55"]},prevItem:{title:"\u4e24\u5bb6\u4e2d\u9910\u9986\u3001\u6298\u6263\u8d85\u5e02\u4e0e\u4e2d\u8d85\u9001\u8d27\uff0c\u8fd8\u6709\u4fe9\u6708\u6ca1\u624b\u673a",permalink:"/2021/04/29/one-year-of-isolation"},nextItem:{title:"\u6211\u5df2\u7ecf\u5fd8\u8bb0\u534a\u5e74\u524d\u5728\u505a\u4ec0\u4e48\u4e86",permalink:"/2020/08/14/my-pandemic-life"}},s={authorsImageUrls:[]},p=[{value:"Create Hosted Zone",id:"create-hosted-zone",level:2},{value:"Edit TTL (optional for testing)",id:"edit-ttl-optional-for-testing",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To enable HTTPS (easily), make sure you created one Elastic Beanstalk environment with Load Balancer option.")),(0,a.kt)("h2",{id:"create-hosted-zone"},"Create Hosted Zone"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"find Route 53 in AWS console"),(0,a.kt)("li",{parentName:"ul"},"choose ",(0,a.kt)("inlineCode",{parentName:"li"},"hosted zones")," on the left"),(0,a.kt)("li",{parentName:"ul"},"click ",(0,a.kt)("inlineCode",{parentName:"li"},"create hosted zone")),(0,a.kt)("li",{parentName:"ul"},"write your ",(0,a.kt)("inlineCode",{parentName:"li"},"subdomain.example.com")," as domain name, choose ",(0,a.kt)("inlineCode",{parentName:"li"},"public hosted zone")," and then click ",(0,a.kt)("inlineCode",{parentName:"li"},"create hosted zone"))),(0,a.kt)("h2",{id:"edit-ttl-optional-for-testing"},"Edit TTL (optional for testing)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"find the NS record in this hosted zone, select and click ",(0,a.kt)("inlineCode",{parentName:"li"},"edit")),(0,a.kt)("li",{parentName:"ul"},"change TTL to some value like 900 (15 min), by default the value is 172800 (2 days)")))}m.isMDXComponent=!0}}]);