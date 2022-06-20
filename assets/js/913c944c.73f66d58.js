"use strict";(self.webpackChunksheron_w=self.webpackChunksheron_w||[]).push([[6753],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,y=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"IMGUI \u4e2d\u6587\u652f\u6301\u65b9\u6848",tags:["\u6298\u817e\u8bb0\u5f55"]},l=void 0,p={permalink:"/2020/07/01/imgui-chinese",source:"@site/blog/2020-07-01-imgui-chinese.md",title:"IMGUI \u4e2d\u6587\u652f\u6301\u65b9\u6848",description:"\u6ca1\u5b66\u8fc7 c++\uff0c\u5355\u7eaf\u60f3\u5934\u94c1\u6c49\u5316\u4e2a\u4e1c\u897f\uff0c\u5c31\u67e5\u8d44\u6599\u6298\u817e\u4e86\u4e00\u4e0b\uff0c\u8fd9\u91cc\u505a\u4e00\u4e2a\u5c0f\u7684\u603b\u7ed3\u3002\u5982\u679c\u6709\u66f4\u597d\u7684\u65b9\u6848\u8bf7\u6307\u6b63\u3002",date:"2020-07-01T00:00:00.000Z",formattedDate:"July 1, 2020",tags:[{label:"\u6298\u817e\u8bb0\u5f55",permalink:"/tags/\u6298\u817e\u8bb0\u5f55"}],readingTime:2.58,truncated:!0,authors:[],frontMatter:{title:"IMGUI \u4e2d\u6587\u652f\u6301\u65b9\u6848",tags:["\u6298\u817e\u8bb0\u5f55"]},prevItem:{title:"\u6211\u5df2\u7ecf\u5fd8\u8bb0\u534a\u5e74\u524d\u5728\u505a\u4ec0\u4e48\u4e86",permalink:"/2020/08/14/my-pandemic-life"},nextItem:{title:"\u5173\u4e8e\u71b5\u7684\u7b80\u77ed\u79d1\u666e\uff08\uff1f\uff09",permalink:"/2020/05/18/this_is_not_entropy"}},u={authorsImageUrls:[]},s=[{value:"\u52a0\u8f7d\u5b57\u4f53",id:"\u52a0\u8f7d\u5b57\u4f53",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6ca1\u5b66\u8fc7 c++\uff0c\u5355\u7eaf\u60f3\u5934\u94c1\u6c49\u5316\u4e2a\u4e1c\u897f\uff0c\u5c31\u67e5\u8d44\u6599\u6298\u817e\u4e86\u4e00\u4e0b\uff0c\u8fd9\u91cc\u505a\u4e00\u4e2a\u5c0f\u7684\u603b\u7ed3\u3002\u5982\u679c\u6709\u66f4\u597d\u7684\u65b9\u6848\u8bf7\u6307\u6b63\u3002"),(0,i.kt)("h2",{id:"\u52a0\u8f7d\u5b57\u4f53"},"\u52a0\u8f7d\u5b57\u4f53"),(0,i.kt)("p",null,"\u9996\u5148\u9700\u8981\u52a0\u8f7d\u652f\u6301\u4e2d\u6587\u7684\u5b57\u4f53\u3002\n\u7f51\u4e0a\u6700\u591a\u7684\u89e3\u51b3\u65b9\u6848\u662f\u8bfb\u53d6\u5916\u90e8\u7684",(0,i.kt)("inlineCode",{parentName:"p"},".ttf/.otf"),"\u5b57\u4f53\uff0c\u4eb2\u6d4b\u53ef\u7528\u3002\u4f46\u9700\u8981\u7528\u6237\u7684\u76ee\u5f55\u8bfb\u53d6\u6743\u9650\uff0c\u800c\u4e14\u53ef\u80fd\u51fa\u73b0\u5b57\u4f53\u4e0d\u5b58\u5728\u7684\u60c5\u51b5\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6e90\u7801\u5185\u5d4c\u5b57\u4f53\uff0cIMGUI \u7684\u4f5c\u8005\u5176\u5b9e\u4e5f\u7ed9\u51fa\u4e86\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ocornut/imgui/blob/0738611559b0a51c7fa0c376eb9601587231f841/misc/fonts/binary_to_compressed_c.cpp"},"\u5c06 binary \u8f6c\u6362\u4e3a C array \u7684\u5de5\u5177"),"\u3002\u5982\u679c\u8f6f\u4ef6\u53ea\u662f\u4f7f\u7528\u62c9\u4e01\u5b57\u96c6\u7684\u8bdd\uff0c\u6587\u4ef6\u4e0d\u5927\u5e94\u8be5\u4e5f\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u6211\u6253\u7b97\u6c49\u5316\u7684\u8f6f\u4ef6\u672c\u8eab\u7528\u7684\u4e5f\u662f\u8fd9\u4e2a\u89e3\u51b3\u65b9\u6848\uff0c\u4f46\u5c06\u4e2d\u6587\u5b57\u96c6\u8f6c\u6362\u4e3a C Array \u7684\u8bdd\u5927\u5c0f\u81f3\u5c11\u662f\u897f\u6587\u5b57\u96c6\u7684\u51e0\u5343\u500d\u5427\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'ImGuiIO& io = ImGui::GetIO();\nIMFont* ttf_font = io.Fonts->AddFontFromFileTTF("res/simhei.ttf", 16.0f, Null, io.Fonts->GetGlyphRangesChinese());\nIMFont* compressed_font = io.Fonts->AddFontFromMemoryCompressedTTF(SimHei_compressed_data,SimHei_compressed_size, 16.f, Null, io.Fonts->GetGlyphRangesChinese());\n')),(0,i.kt)("p",null,"\u8fd9\u91cc\u89e3\u91ca\u4e00\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"GetGlyphRangesChinese()")," \u7528\u6765\u6307\u5b9a\u52a0\u8f7d\u5b57\u7b26\u96c6\uff0c\u6211\u9700\u8981\u6539\u52a8\u7684\u8f6f\u4ef6\u57fa\u4e8e IMGUI 1.4\uff0c\u6240\u4ee5\u53ea\u6709\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5728\u66f4\u65b0\u7684\u7248\u672c\u4e2d\uff0c\u8fd9\u4e2a\u88ab\u52a0\u8f7d\u5e38\u7528\u6c49\u5b57\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"GetGlyphRangesChineseSimplifiedCommon()"),"\u548c\u52a0\u8f7d\u6240\u6709\u6c49\u5b57\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"GetGlyphRangesChineseFull()"),"\u6240\u53d6\u4ee3\u3002"))}f.isMDXComponent=!0}}]);