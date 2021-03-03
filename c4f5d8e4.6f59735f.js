(window.webpackJsonp=window.webpackJsonp||[]).push([[57,7,51,67],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(146),s=n(55),r=n.n(s),l=n(148),c=n(62),u=n(56),m=n(63),d=[{name:"Seeing Epidemiology (Working)",color:"#D6EFFA",description:"Forked from Seeing Theory, this is a visualization for basic terms in epidemiology and my d3.js playground.",links:[{label:"Website",link:"https://sheronw.xyz/Seeing-Epidemiology/Measure-Disease-Frequency/"},{label:"Github",link:"https://github.com/sheronw/Seeing-Epidemiology"}],time:"2020.06 - today"},{name:"\u516d\u535a\u51fa\u571f\u4f4d\u7f6e\u8003",color:"#ad8e7f",description:"A visual and educational website for the findspots of liubo (Chinese: \u516d\u535a), an ancient Chinese board game.",links:[{label:"Website",link:"https://sheronw.xyz/liubo"},{label:"Github",link:"https://github.com/sheronw/liubo"}],time:"2020.03 - today"},{name:"Expire Soon Bot",color:"#91B493",description:"A telegram bot to send notifications when any item you track is expiring soon.",links:[{label:"Telegram",link:"https://t.me/expiresoonbot"},{label:"Github",link:"https://github.com/sheronw/ExpireBot"}],time:"2019.11 - 2019.12"}],h=[{name:"\u591c\u9690\u5343\u9699\u6cef\u4e8e\u660e",color:"#787878",description:"\u62fc\u547d\u6a21\u4eff\u5374\u7ec8\u7a76\u65e0\u6cd5\u6210\u4e3a\u7684\u90a3\u4e2a\u4eba\uff0c\u662f\u5426\u4e5f\u66fe\u540c\u6837\u5730\u5411\u5f80\u7740\u53e6\u4e00\u4e2a\u65e0\u6cd5\u4f01\u53ca\u7684\u4eba\u751f\uff1f",links:[{label:"Contents",link:"http://sheronw.xyz/docs/stories/yeyin"}],time:"2013 - today"}];t.default=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return o.a.createElement(i.a,{description:"SheronW \u7684\u81ea\u7559\u5730"},o.a.createElement("div",{className:r.a.mainContainer+" "+(t?r.a.lightOnContainer:"")},o.a.createElement("img",{className:r.a.light,alt:"light off",src:t?Object(l.a)("img/on.svg"):Object(l.a)("img/off.svg"),onClick:function(){return n(!t)}}),t?o.a.createElement("div",{className:r.a.leftContainer},o.a.createElement("div",{className:r.a.headerContainer},o.a.createElement("h1",null,"This is Sheron,"),o.a.createElement("h2",null,"just a random dreamer & amateur Chinese storyteller.")),o.a.createElement("div",{className:r.a.subheaderContainer},o.a.createElement("h1",null,"I write stories for myself,"),o.a.createElement("h2",null,"and for stupid fantasies in my head while lying in bed.")),h.map((function(e){return o.a.createElement(c.default,{info:e,key:e.name})}))):o.a.createElement("div",{className:r.a.leftContainer},o.a.createElement("div",{className:r.a.headerContainer},o.a.createElement("h1",null,"This is Sheron,"),o.a.createElement("h2",null,"just a random CS student @ Columbia SEAS.")),o.a.createElement("div",{className:r.a.subheaderContainer},o.a.createElement("h1",null,"I build things for fun,"),o.a.createElement("h2",null,"and for my interests in user interactions.")),d.map((function(e){return o.a.createElement(c.default,{info:e,key:e.name})}))),t?o.a.createElement(m.default,null):o.a.createElement(u.default,null)))}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"Cube",(function(){return u}));var a=n(158),o=n(4),i=n(0),s=n.n(i),r=n(55),l=n.n(r),c=n(159),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={positionX:200,positionY:200},n.onMouseMove=n.onMouseMove.bind(Object(a.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.canvas.parentElement.removeEventListener("mousemove",this.onMouseMove)},n.componentDidMount=function(){var e=this,t=new c.g({antialias:!0,alpha:!0}),n=new c.e,a=new c.d(75,1,.1,1e3);a.lookAt(0,0,0),a.position.setZ(200),t.setSize(800,800),this.canvas.appendChild(t.domElement);var o=function(e,t,a,o){var i=new c.a(o,o,o,0,0,0),s=new c.h(i),r=new c.c(s,new c.b({color:5462355}));r.position.set(e,t,a),n.add(r)};o(0,0,0,50),o(0,0,50,50),o(0,50,0,50),o(50,0,0,50),o(0,0,100,50),o(0,100,0,50),o(100,0,0,50),o(0,50,50,50),o(50,50,0,50),o(50,0,50,50),this.canvas.parentElement.addEventListener("mousemove",this.onMouseMove);!function o(){requestAnimationFrame(o),a.position.x=e.state.positionX,a.position.y=e.state.positionY,a.lookAt(n.position),t.render(n,a)}()},n.onMouseMove=function(e){var t=this.state.positionX,n=this.state.positionY;this.setState({positionX:t+.4*e.movementX*-1,positionY:n+.1*e.movementY*-1})},n.render=function(){var e=this;return s.a.createElement("div",{className:l.a.canvasContainer,ref:function(t){return e.canvas=t}})},t}(i.Component);t.default=u},62:function(e,t,n){"use strict";n.r(t),n.d(t,"Project",(function(){return l}));var a=n(4),o=n(0),i=n.n(o),s=n(55),r=n.n(s),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).info=t.info,n}return Object(a.a)(t,e),t.prototype.render=function(){return this.info?i.a.createElement("div",{className:r.a.projectContainer},i.a.createElement("div",{className:r.a.square,style:{backgroundColor:this.info.color}}),i.a.createElement("h2",{className:r.a.projectHeader},this.info.name),i.a.createElement("p",{className:r.a.projectDescription},this.info.description),i.a.createElement("div",{className:r.a.projectURL},i.a.createElement("span",null,this.info.links.map((function(e){return i.a.createElement("a",{href:e.link,target:"_blank",key:e.label},e.label)}))),this.info.time)):i.a.createElement("div",null)},t}(o.Component);t.default=l},63:function(e,t,n){"use strict";n.r(t),n.d(t,"Torus",(function(){return u}));var a=n(158),o=n(4),i=n(0),s=n.n(i),r=n(55),l=n.n(r),c=n(159),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mouseX:0,mouseY:0},n.onMouseMove=n.onMouseMove.bind(Object(a.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.canvas.parentElement.removeEventListener("mousemove",this.onMouseMove)},n.componentDidMount=function(){var e=this,t=new c.g({antialias:!0,alpha:!0}),n=new c.e,a=new c.d(75,1,.1,1e3);a.lookAt(0,0,0),a.position.set(250,250,170),t.setSize(700,700),this.canvas.appendChild(t.domElement);var o,i,s,r,l,u;o=0,i=0,s=0,r=new c.f(65,8,14,4,11,7),l=new c.h(r),(u=new c.c(l,new c.b({color:16777215}))).position.set(o,i,s),n.add(u),this.canvas.parentElement.addEventListener("mousemove",this.onMouseMove);!function o(){requestAnimationFrame(o),a.position.x=e.state.mouseX,a.position.y=e.state.mouseY,a.lookAt(n.position),t.render(n,a)}()},n.onMouseMove=function(e){this.setState({mouseX:this.state.mouseX+.1*e.movementX,mouseY:this.state.mouseY+.2*e.movementY})},n.render=function(){var e=this;return s.a.createElement("div",{className:l.a.canvasContainer,ref:function(t){return e.canvas=t}})},t}(i.Component);t.default=u}}]);