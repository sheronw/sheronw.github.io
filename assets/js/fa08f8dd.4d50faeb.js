"use strict";(self.webpackChunksheron_w=self.webpackChunksheron_w||[]).push([[421],{9813:function(e,n,t){t.r(n),t.d(n,{Torus:function(){return u}});var o=t(7326),a=t(5068),s=t(7294),i=t(9578),r=t(2212),u=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={mouseX:0,mouseY:0},t.onMouseMove=t.onMouseMove.bind((0,o.Z)(t)),t}(0,a.Z)(n,e);var t=n.prototype;return t.componentWillUnmount=function(){this.canvas.parentElement.removeEventListener("mousemove",this.onMouseMove)},t.componentDidMount=function(){var e=this,n=new r.CP7({antialias:!0,alpha:!0}),t=new r.xsS,o=new r.cPb(75,1,.1,1e3);o.lookAt(0,0,0),o.position.set(250,250,170),n.setSize(700,700),this.canvas.appendChild(n.domElement);var a,s,i,u,c,m;a=0,s=0,i=0,u=new r.FE5(65,8,14,4,11,7),c=new r.Uk6(u),(m=new r.ejS(c,new r.nls({color:16777215}))).position.set(a,s,i),t.add(m),this.canvas.parentElement.addEventListener("mousemove",this.onMouseMove);!function a(){requestAnimationFrame(a),o.position.x=e.state.mouseX,o.position.y=e.state.mouseY,o.lookAt(t.position),n.render(t,o)}()},t.onMouseMove=function(e){this.setState({mouseX:this.state.mouseX+.1*e.movementX,mouseY:this.state.mouseY+.2*e.movementY})},t.render=function(){var e=this;return s.createElement("div",{className:i.Z.canvasContainer,ref:function(n){return e.canvas=n}})},n}(s.Component);n.default=u},9578:function(e,n){n.Z={mainContainer:"mainContainer_ZIkc",leftContainer:"leftContainer_ZQsv",headerContainer:"headerContainer_Wd8B",subheaderContainer:"subheaderContainer_vouf",text:"text_vPhu",projectContainer:"projectContainer_YFdt",square:"square_rfUC",projectHeader:"projectHeader_fMyj",projectURL:"projectURL_IvCL",canvasContainer:"canvasContainer_KdcL",light:"light_FckX",lightOnContainer:"lightOnContainer_AwCG"}}}]);