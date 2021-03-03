(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(142)),i={title:"Assign a Subdomain to Elastic Beanstalk and Enable HTTPS",tags:["\u6298\u817e\u8bb0\u5f55"]},l={permalink:"/blog/2021/01/04/subdomain-https-for-eb",source:"@site/blog/2021-01-04-subdomain-https-for-eb.md",description:"To enable HTTPS (easily), make sure you created one Elastic Beanstalk environment with Load Balancer option.",date:"2021-01-04T00:00:00.000Z",tags:[{label:"\u6298\u817e\u8bb0\u5f55",permalink:"/blog/tags/\u6298\u817e\u8bb0\u5f55"}],title:"Assign a Subdomain to Elastic Beanstalk and Enable HTTPS",readingTime:1.8,truncated:!0,nextItem:{title:"\u6211\u5df2\u7ecf\u5fd8\u8bb0\u534a\u5e74\u524d\u5728\u505a\u4ec0\u4e48\u4e86",permalink:"/blog/2020/08/14/my-pandemic-life"}},c=[{value:"Create Hosted Zone",id:"create-hosted-zone",children:[]},{value:"Edit TTL (optional for testing)",id:"edit-ttl-optional-for-testing",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To enable HTTPS (easily), make sure you created one Elastic Beanstalk environment with Load Balancer option.")),Object(o.b)("h2",{id:"create-hosted-zone"},"Create Hosted Zone"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"find Route 53 in AWS console"),Object(o.b)("li",{parentName:"ul"},"choose ",Object(o.b)("inlineCode",{parentName:"li"},"hosted zones")," on the left"),Object(o.b)("li",{parentName:"ul"},"click ",Object(o.b)("inlineCode",{parentName:"li"},"create hosted zone")),Object(o.b)("li",{parentName:"ul"},"write your ",Object(o.b)("inlineCode",{parentName:"li"},"subdomain.example.com")," as domain name, choose ",Object(o.b)("inlineCode",{parentName:"li"},"public hosted zone")," and then click ",Object(o.b)("inlineCode",{parentName:"li"},"create hosted zone"))),Object(o.b)("h2",{id:"edit-ttl-optional-for-testing"},"Edit TTL (optional for testing)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"find the NS record in this hosted zone, select and click ",Object(o.b)("inlineCode",{parentName:"li"},"edit")),Object(o.b)("li",{parentName:"ul"},"change TTL to some value like 900 (15 min), by default the value is 172800 (2 days)")))}b.isMDXComponent=!0}}]);