(window.webpackJsonp=window.webpackJsonp||[]).push([[8,32,33],{"0Pcb":function(e,t,i){"use strict";const s=function(){const e=window.navigator.userAgent;return window.location.href,function(e){const t={},i=e.indexOf("iPhone")>=0||e.indexOf("iPad")>=0||e.indexOf("iPod")>=0,s=e.indexOf("Android")>0;return t.ios=i,t.android=s,t.mobile=i||s,t.pc=!i&&!s,t}(e)}();t.a=s},"14PU":function(e,t,i){var s=i("8VZJ");"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(s,a);s.locals&&(e.exports=s.locals)},"17XO":function(e,t,i){"use strict";i.r(t);const s=9.81;t.default=class{constructor(e,t,i,{verticalHeight:s=0,pixelPerMiter:a=1,useGravity:n=!1,useRebound:r=!1}={}){this.x=e,this.y=t,this.radius=i,this.offset=0,this.moveSpeed=0,this.currentSpeed=0,this.behaviors=[],this.pixelPerMiter=a,this.useGravity=n,this.useRebound=r,this.verticalHeight=s,this.isStill=!1}setSpeed(e){this.moveSpeed=e,this.currentSpeed=e}addBehavior(e){Array.isArray(e)?this.behaviors=[...this.behaviors,...e]:this.behaviors=[...this.behaviors,e]}update(e){for(let t of this.behaviors)t.call(null,this,e)}render(e){let{x:t,y:i,radius:s,offset:a,pixelPerMiter:n}=this;e.save(),e.translate(t,i+a*n),e.beginPath(),e.arc(0,0,s,0,2*Math.PI,!1),e.fill(),e.stroke(),e.restore()}reset(){this.offset=0,this.currentSpeed=this.moveSpeed}static move(e,t){if(e.isStill)return;let{currentSpeed:i}=e,a=t/1e3;e.useGravity&&(e.currentSpeed+=s*a);let n=e.currentSpeed*a;e.offset+n>e.verticalHeight?e.useRebound?(e.offset=e.verticalHeight,e.currentSpeed=.6*-e.currentSpeed,n*e.pixelPerMiter/a<1&&(e.isStill=!0,e.currentSpeed=0)):(e.isStill=!0,e.currentSpeed=0,e.offset=e.verticalHeight):e.offset+=n}}},"8VZJ":function(e,t,i){(t=e.exports=i("I1BE")(!1)).push([e.i,'.ZKHB3b7wcSwR8Wl6fTxfr{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:stretch;align-items:stretch;height:100%;overflow:hidden;opacity:0;transition:all .5s ease-out;will-change:opacity}._2p3_lfNbTv7jvNTjDcwiNG{margin:20px 10px;padding:0;display:block;float:left;width:calc(25vw - 20px);height:calc(25vw - 20px);display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}._3PLz2jKWg5aqWZ0L2XSk1A{width:calc(100vw - 20px);height:calc(100vw - 20px)}._2Aqnhl0UilhQmcJ__tvzcs{-ms-flex:1 1 auto;flex:1 1 auto;width:50%;margin:20px;padding:20px;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border:1px solid #4169e1;border-radius:10px}._3PcgzXzpkVz38FWGWVlBgF{-ms-flex:0 0 auto;flex:0 0 auto;height:42px;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;overflow:auto}._1J5n2jI7d_iyhVCFsz6kGo{padding:0 10px;background:hsla(0,0%,40%,.6);color:hsla(0,0%,100%,.6);line-height:42px;border-right:1px solid #fff;cursor:pointer}._1J5n2jI7d_iyhVCFsz6kGo:hover{background:hsla(0,0%,40%,.4);color:#fff}.lG27D-ztuflQnRQrYzrEk{background:#f5f2f0;color:#3a73d1;padding:0 10px;line-height:42px;border-right:1px solid #fff;cursor:pointer}.lG27D-ztuflQnRQrYzrEk:hover{color:#0858db}._1Uc2dRqvsUOU-zqNfc0zoP{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:scroll;background:#f5f2f0}.uhY8gttG11j6aitIqgmsp{display:none}._1tG49ZjfMiBGC9SRfhiVb{display:block}._11qLAYl8YioCWH0Wa6nugG{-ms-flex:1 1 auto;flex:1 1 auto;margin:20px;padding:20px;width:50%;border:1px solid #4169e1;border-radius:10px;box-sizing:content-box}._3ddyhRKJ33suqfgO4btVi_{border:none;margin:0;padding:0;border-radius:0;display:block}._2p3_lfNbTv7jvNTjDcwiNG ._11qLAYl8YioCWH0Wa6nugG{margin:0;padding:10px;width:100%;height:100%;box-sizing:border-box;border:1px solid #4169e1;border-radius:10px}._3I7L3oK-Gj0uKsP2dcD9jc{position:fixed;top:calc(50% - 16px);left:calc(50% - 16px);width:32px;height:32px;border-radius:50%;background:#b3d4fc;animation:_2UXogTuqtyG9ZgCq7AZ_5F 1.8s ease infinite}._3I7L3oK-Gj0uKsP2dcD9jc:after,._3I7L3oK-Gj0uKsP2dcD9jc:before{content:"";display:block;position:absolute;height:inherit;width:inherit;background:inherit;border-radius:inherit;animation:_2UXogTuqtyG9ZgCq7AZ_5F 1.8s ease infinite}._3I7L3oK-Gj0uKsP2dcD9jc:before{left:calc(50% - 80px);background:#07a}._3I7L3oK-Gj0uKsP2dcD9jc:after{left:calc(50% + 48px);background:#690}.y1HRpH4VDRhNdBAt12eEI>._2Aqnhl0UilhQmcJ__tvzcs{display:none}._1gBDP-PRzphfndCrFoPJoO{opacity:1}.NMrsesPPXb57BISDZo4Q5{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}._3925vOYf0GdFYymPirm6yB{color:red;font-weight:700;font-size:24px}._1PFQRcWzh5gn96QgIv6w9-{color:#999;font-size:12px}@keyframes _2UXogTuqtyG9ZgCq7AZ_5F{0%{top:calc(50% - 16px);transform:rotate(0deg)}50%{top:calc(50% - 80px);transform:rotate(-180deg)}to{top:calc(50% - 16px);transform:rotate(-1turn)}}',""]),t.locals={single:"ZKHB3b7wcSwR8Wl6fTxfr",collect:"_2p3_lfNbTv7jvNTjDcwiNG",collectMobile:"_3PLz2jKWg5aqWZ0L2XSk1A",codes:"_2Aqnhl0UilhQmcJ__tvzcs",codesTab:"_3PcgzXzpkVz38FWGWVlBgF",otherTab:"_1J5n2jI7d_iyhVCFsz6kGo",activeTab:"lG27D-ztuflQnRQrYzrEk",codesSection:"_1Uc2dRqvsUOU-zqNfc0zoP",otherSection:"uhY8gttG11j6aitIqgmsp",activeSection:"_1tG49ZjfMiBGC9SRfhiVb",result:"_11qLAYl8YioCWH0Wa6nugG",mobileResult:"_3ddyhRKJ33suqfgO4btVi_",loading:"_3I7L3oK-Gj0uKsP2dcD9jc",spin:"_2UXogTuqtyG9ZgCq7AZ_5F",mobile:"y1HRpH4VDRhNdBAt12eEI",loaded:"_1gBDP-PRzphfndCrFoPJoO",error:"NMrsesPPXb57BISDZo4Q5",errorTitle:"_3925vOYf0GdFYymPirm6yB",errorTip:"_1PFQRcWzh5gn96QgIv6w9-"}},"8xBV":function(e,t,i){"use strict";var s=i("J66h"),a=i("ysz4"),n=i("kZAv"),r=i("ai4s");var l=class{constructor(e){this.moduleName=e,this.sourcePath=`example/${e}/canvas`,this.requestPath="https://api.github.com/repos/snayan/canvas-demo/contents"}fetch(e){return fetch(`${this.requestPath}/${e}`,{credentials:"omit",method:"get",mode:"cors"})}async getCanvasFiles(){let e,t=[],i=r.a.get(this.moduleName);if(i&&i.length)return i;let s=await this.fetch(this.sourcePath);if(!s.ok)throw new Error(JSON.stringify({status:s.status,statusText:s.statusText,body:await s.text(),url:s.url}));e=await s.json();for(let i of e)"file"===i.type&&(s=await this.fetch(i.path)).ok&&t.push(await s.json());return r.a.set(this.moduleName,t),t}},o=i("0Pcb"),d=i("wZee"),c=i.n(d),h=i("14PU"),u=i.n(h);t.a=class{constructor(e){this.canvasInstances=[],this.moduleName=e,this.el=document.createElement("div"),this.isSingleModule=Object(a.c)(e),this.github=new l(e),this.link=`${n.c}?module=${e}`,o.a.mobile&&this.el.classList.add(u.a.mobile)}loading(){let e=document.createElement("i");return e.classList.add(u.a.loading),document.body.appendChild(e),()=>{document.body.removeChild(e)}}renderCanvas(){let e=this.canvasInstances.length,t=document.createElement("div");t.classList.add(u.a.result),o.a.mobile&&t.classList.add(u.a.mobileResult),this.el.appendChild(t),e>0&&setTimeout(()=>{let{width:i,height:s}=t.getBoundingClientRect(),a=i>2*s,n=document.createElement("div");n.style.display="inline-block",a?(n.style.width=`${100/e}%`,n.style.height="100%"):(n.style.width="100%",n.style.height=`${100/e}%`);for(let e of this.canvasInstances){let i=n.cloneNode();t.appendChild(i),e.render(i)}},0)}async renderCode(){let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("nav"),a=[],n=[],r="0";try{let e=await this.github.getCanvasFiles();for(let[t,{name:i,content:r}]of e.entries())a.push(`<span class='${0===t?u.a.activeTab:u.a.otherTab}' data-index='${t}'>${i}</span>`),n.push(`<div class='${0===t?u.a.activeSection:u.a.otherSection}' data-index='${t}' ><pre class="language-typescript">${c.a.highlight(s.Base64.decode(r),c.a.languages.javascript,"typescript")}</pre></div>`)}catch(e){let t=JSON.parse(e.message);n.push(`<div class='${u.a.error}'><h4 class='${u.a.errorTitle}'>[${t.status}]${t.statusText}</h4><p class='${u.a.errorTip}'>${t.url}</p></div>`)}i.addEventListener("click",e=>{let s=e.target.dataset.index;if(s===r)return!1;let a=i.querySelectorAll("span"),n=t.querySelector(`div[data-index='${r}']`),l=t.querySelector(`div[data-index='${s}']`);for(let e of a)e.className=e.dataset.index===s?u.a.activeTab:u.a.otherTab;return n.className=u.a.otherSection,l.className=u.a.activeSection,r=s,!1}),i.className=u.a.codesTab,i.innerHTML=a.join(""),e.appendChild(i),t.className=u.a.codesSection,t.innerHTML=n.join(""),e.appendChild(t),e.className=u.a.codes,this.el.appendChild(e)}async render(){let e=this.loading();if(this.el.innerHTML="",document.body.appendChild(this.el),this.isSingleModule)this.el.classList.add(u.a.single),o.a.pc&&await this.renderCode();else{this.el.classList.add(u.a.collect);let e=document.createElement("a");e.innerText=this.moduleName,e.href=this.link,e.style.marginTop="10px",this.el.appendChild(e)}return o.a.mobile&&!this.isSingleModule&&this.el.classList.add(u.a.collectMobile),this.renderCanvas(),e(),setTimeout(()=>{this.el.classList.add(u.a.loaded)},0),this}}},Qb4n:function(e,t,i){"use strict";var s=i("kZAv");t.a=class{constructor(){this.el=document.createElement("canvas")}initCanvasSize(e,t){this.el.width=e,this.el.height=t,this.width=e,this.height=t}getContext(e,t){return this.el.getContext(e,t)}render(e){this.container=e;let{width:t,height:i}=e.getBoundingClientRect();this.initCanvasSize(t||s.d,i||s.b),this.container.innerHTML="",this.container.appendChild(this.el)}}},UWGR:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return n});var s=i("Qb4n"),a=i("17XO");class n extends s.a{constructor(){super(),this.ctx=this.getContext("2d"),this.padding=80,this.radius=20,this.isStart=!1}init(){this.fps=0,this.lastFrameTime=0,this.speed=5,this.distance=50;this.height,this.padding;this.distance<=0?this.pixelPerMiter=0:this.pixelPerMiter=(this.height-2*this.padding)/this.distance}createBall(){let{width:e,height:t,padding:i,speed:s,radius:n,pixelPerMiter:r,distance:l}=this;this.ball=new a.default(e/2,i-n,n,{verticalHeight:l,pixelPerMiter:r,useGravity:!0,useRebound:!0}),this.ball.setSpeed(s),this.ball.addBehavior(a.default.move)}createStartButton(){let{padding:e,radius:t}=this,i=document.createElement("button");i.style.position="absolute",i.style.right=2*t*1.4+"px",i.style.top=e-2*t+"px",i.style.width=2*t*1.4+"px",i.style.height=2*t+"px",i.style.textAlign="center",i.style.border="none",i.style.background="green",i.style.color="white",i.style.borderRadius="6px",i.style.zIndex="3",i.innerText="start",this.el.parentElement.style.position="relative",this.el.parentElement.appendChild(i),i.addEventListener("click",this.start.bind(this),!1)}calculateFps(e){let{fps:t,lastFrameTime:i,lastCalculateFpsTime:s}=this;i&&(0===t||e-s>1e3)&&(this.fps=1e3/(e-i),this.lastCalculateFpsTime=e)}draw(){let{ctx:e,width:t,height:i,padding:s}=this;e.strokeStyle="green",e.beginPath(),e.moveTo(s,i-s),e.lineTo(t-s,i-s),e.stroke(),e.fillStyle="orange",e.strokeStyle="red",this.ball.render(e)}update(){this.fps&&this.ball.update(1e3/this.fps)}animate(e){let{width:t,height:i,ctx:s}=this;s.clearRect(0,0,t,i),this.calculateFps(e),this.update(),this.draw(),this.lastFrameTime=e,this.timer=window.requestAnimationFrame(this.animate.bind(this))}start(){window.cancelAnimationFrame(this.timer),this.isStart=!0,this.ball.reset(),this.animate(0)}stop(){this.isStart=!1}render(e){super.render(e),this.init(),this.createBall(),this.createStartButton(),this.draw()}}},dEmn:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return l});var s=i("8xBV"),a=i("ysz4"),n=i("UWGR");const r="free_fall";class l extends s.a{constructor(){super(r),this.canvasInstances.push(new n.default)}}Object(a.c)(r)&&(new l).render()},kZAv:function(e,t,i){"use strict";i.d(t,"d",function(){return s}),i.d(t,"b",function(){return a}),i.d(t,"a",function(){return n}),i.d(t,"c",function(){return r});const s=500,a=500,n=`${i("0Pcb").a.pc?24:16}px sans-serif`,r="https://snayan.github.io/canvas-demo/"}}]);