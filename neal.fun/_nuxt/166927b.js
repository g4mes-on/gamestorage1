(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1022:function(t,o,e){"use strict";var n=e(2),r=e(1023),c=e(25),l=e(31),d=e(49),f=e(121);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,o=c(this),e=l(o),n=f(o,0);return n.length=r(n,o,o,e,0,void 0===t?1:d(t)),n}})},1023:function(t,o,e){"use strict";var n=e(73),r=e(31),c=e(160),l=e(46),d=function(t,o,source,e,f,v,h,m){for(var element,y,x=f,w=0,M=!!h&&l(h,m);w<e;)w in source&&(element=M?M(source[w],w,o):source[w],v>0&&n(element)?(y=r(element),x=d(t,o,element,y,x,v-1)-1):(c(x+1),t[x]=element),x++),w++;return x};t.exports=d},1024:function(t,o,e){e(113)("flat")},1025:function(t,o,e){!function(t){function o(t){function o(t,o,e){this.x=t,this.y=o,this.z=e}o.prototype.dot2=function(t,o){return this.x*t+this.y*o},o.prototype.dot3=function(t,o,e){return this.x*t+this.y*o+this.z*e},this.grad3=[new o(1,1,0),new o(-1,1,0),new o(1,-1,0),new o(-1,-1,0),new o(1,0,1),new o(-1,0,1),new o(1,0,-1),new o(-1,0,-1),new o(0,1,1),new o(0,-1,1),new o(0,1,-1),new o(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(t||0)}o.prototype.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var p=this.p,i=0;i<256;i++){var o;o=1&i?p[i]^255&t:p[i]^t>>8&255;var e=this.perm,n=this.gradP;e[i]=e[i+256]=o,n[i]=n[i+256]=this.grad3[o%12]}};var e=.5*(Math.sqrt(3)-1),n=(3-Math.sqrt(3))/6,r=1/6;function c(t){return t*t*t*(t*(6*t-15)+10)}function l(a,b,t){return(1-t)*a+t*b}o.prototype.simplex2=function(t,o){var r,c,s=(t+o)*e,i=Math.floor(t+s),l=Math.floor(o+s),d=(i+l)*n,f=t-i+d,v=o-l+d;f>v?(r=1,c=0):(r=0,c=1);var h=f-r+n,m=v-c+n,y=f-1+2*n,x=v-1+2*n;i&=255,l&=255;var w=this.perm,M=this.gradP,k=M[i+w[l]],P=M[i+r+w[l+c]],C=M[i+1+w[l+1]],F=.5-f*f-v*v,U=.5-h*h-m*m,_=.5-y*y-x*x;return 70*((F<0?0:(F*=F)*F*k.dot2(f,v))+(U<0?0:(U*=U)*U*P.dot2(h,m))+(_<0?0:(_*=_)*_*C.dot2(y,x)))},o.prototype.simplex3=function(t,o,e){var n,c,l,d,f,v,s=.3333333333333333*(t+o+e),i=Math.floor(t+s),h=Math.floor(o+s),m=Math.floor(e+s),y=(i+h+m)*r,x=t-i+y,w=o-h+y,M=e-m+y;x>=w?w>=M?(n=1,c=0,l=0,d=1,f=1,v=0):x>=M?(n=1,c=0,l=0,d=1,f=0,v=1):(n=0,c=0,l=1,d=1,f=0,v=1):w<M?(n=0,c=0,l=1,d=0,f=1,v=1):x<M?(n=0,c=1,l=0,d=0,f=1,v=1):(n=0,c=1,l=0,d=1,f=1,v=0);var k=x-n+r,P=w-c+r,C=M-l+r,F=x-d+2*r,U=w-f+2*r,_=M-v+2*r,D=x-1+.5,R=w-1+.5,A=M-1+.5;i&=255,h&=255,m&=255;var B=this.perm,j=this.gradP,L=j[i+B[h+B[m]]],E=j[i+n+B[h+c+B[m+l]]],H=j[i+d+B[h+f+B[m+v]]],z=j[i+1+B[h+1+B[m+1]]],V=.5-x*x-w*w-M*M,Y=.5-k*k-P*P-C*C,W=.5-F*F-U*U-_*_,X=.5-D*D-R*R-A*A;return 32*((V<0?0:(V*=V)*V*L.dot3(x,w,M))+(Y<0?0:(Y*=Y)*Y*E.dot3(k,P,C))+(W<0?0:(W*=W)*W*H.dot3(F,U,_))+(X<0?0:(X*=X)*X*z.dot3(D,R,A)))},o.prototype.perlin2=function(t,o){var e=Math.floor(t),n=Math.floor(o);t-=e,o-=n,e&=255,n&=255;var r=this.perm,d=this.gradP,f=d[e+r[n]].dot2(t,o),v=d[e+r[n+1]].dot2(t,o-1),h=d[e+1+r[n]].dot2(t-1,o),m=d[e+1+r[n+1]].dot2(t-1,o-1),u=c(t);return l(l(f,h,u),l(v,m,u),c(o))},o.prototype.perlin3=function(t,o,e){var n=Math.floor(t),r=Math.floor(o),d=Math.floor(e);t-=n,o-=r,e-=d,n&=255,r&=255,d&=255;var f=this.perm,v=this.gradP,h=v[n+f[r+f[d]]].dot3(t,o,e),m=v[n+f[r+f[d+1]]].dot3(t,o,e-1),y=v[n+f[r+1+f[d]]].dot3(t,o-1,e),x=v[n+f[r+1+f[d+1]]].dot3(t,o-1,e-1),w=v[n+1+f[r+f[d]]].dot3(t-1,o,e),M=v[n+1+f[r+f[d+1]]].dot3(t-1,o,e-1),k=v[n+1+f[r+1+f[d]]].dot3(t-1,o-1,e),P=v[n+1+f[r+1+f[d+1]]].dot3(t-1,o-1,e-1),u=c(t),C=c(o),F=c(e);return l(l(l(h,w,u),l(m,M,u),F),l(l(y,k,u),l(x,P,u),F),C)},t.Noise=o}(t.exports)},1026:function(t,o,e){"use strict";e(671)},1027:function(t,o,e){var n=e(107)(!1);n.push([t.i,".rocks[data-v-2b5f3470]{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;user-select:none}.site-link[data-v-2b5f3470]{top:15px;left:15px;opacity:.8;text-decoration:none;max-width:135px}.controls[data-v-2b5f3470],.site-link[data-v-2b5f3470]{position:fixed;z-index:3;-webkit-user-select:none;-moz-user-select:none;user-select:none}.controls[data-v-2b5f3470]{top:20px;right:20px}.control-icon[data-v-2b5f3470]{width:25px;opacity:.8;cursor:pointer;margin-left:15px}@media only screen and (max-width:600px){.site-link[data-v-2b5f3470]{top:15px;left:15px;max-width:110px}}",""]),t.exports=n},1178:function(t,o,e){"use strict";e.r(o);var n,r,c,l,d,f,v,h,m,y,x,w,M,k,P,C,F,U,_,D,R=e(10),A=(e(60),e(15),e(40),e(41),e(47),e(1022),e(1024),e(340),e(33),e(1025)),B=e(338),j=e(351),L=100,E=Math.max(2,window.devicePixelRatio),H={data:function(){return{ctx:null,muted:!1}},beforeDestroy:function(){B.Howler.unload(),document.body.style=""},mounted:(D=Object(R.a)(regeneratorRuntime.mark((function t(){var o,h,polygon,m,w,M,k,P,_,D=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C=[],F=[],U=[],x=[],document.body.style="overflow: hidden;",this.createRender(),t.next=8,e.e(67).then(e.t.bind(null,1141,7));case 8:for(n=t.sent,r=n.Vec2,n.Settings.maxPolygonVertices=50,c=n.World({gravity:r(0,-100)}),d=c.createBody(),f=c.createBody(),v=c.createBody(),this.onResize(),o=0;o<4;o++)h=this.createRockVertices(),polygon=n.Polygon(h),(m=c.createBody().setDynamic()).createFixture({shape:polygon,density:.3,friction:.3}),w=Math.floor(12*Math.random()),m.setUserData({index:o}),x[o]=j.d(y,{src:"/rocks/rock".concat(w,".jpg")}),m.setAngularDamping(1),m.setPosition(r(0,0)),C.push(m),F.push(this.scaleVertices(polygon.m_vertices)),M={position:F[o]},k=j.a(y,M),U.push(k);P=0,_=function(time){c.step((time-P)/1e3);var t=C.map((function(body){var t=body.getPosition();return[t.x/L,t.y/L]}));t=t.flat(),D.renderRocks(time/1e3,t),D.renderPost(time/1e3,t),P=time},new B.Howl({src:["/rocks/beach.mp3"],autoplay:!0,loop:!0,volume:.15}),c.on("pre-solve",(function(t){var o=t.getWorldManifold(),e=t.getFixtureA().getBody(),n=t.getFixtureB().getBody(),c=o.points[0],d=e.getLinearVelocityFromWorldPoint(c),f=n.getLinearVelocityFromWorldPoint(c),v=Math.abs(r.dot(f.sub(d),o.normal));if(v>15&&!l){var h=Math.floor(3*Math.random());-1!==e.m_userData.index&&-1!==n.m_userData.index||(h="sand"),new B.Howl({src:["/rocks/rock".concat(h,".mp3")],volume:Math.min(1.4,v/50)}).play()}})),this.$requestAnimationFrame(_),this.$addEventListener("resize",this.onResize);case 23:case"end":return t.stop()}}),t,this)}))),function(){return D.apply(this,arguments)}),methods:{createRender:function(){y=this.$refs.canvas.getContext("webgl",{preserveDrawingBuffer:!1}),h=j.c(y,["vs-rocks","fs-rocks"]),m=j.c(y,["vs-post","fs-post"]),y.enableVertexAttribArray(0),M=j.b(y);_=j.a(y,{position:{numComponents:2,data:[-1,-1,-1,1,1,1,1,1,-1,-1,1,-1]}}),w=j.d(y,{src:"/rocks/bg.jpg",flipY:!0})},onResize:function(){j.g(y.canvas,E),y.viewport(0,0,y.canvas.width,y.canvas.height);var t=f.getFixtureList(),o=v.getFixtureList(),e=d.getFixtureList();e&&d.destroyFixture(e),t&&f.destroyFixture(t),o&&v.destroyFixture(o),this.createBounds()},createBounds:function(){k=window.innerWidth,P=window.innerHeight,k/=P,P=1,d.createFixture({shape:n.Edge(r(-120*k,-80*P),r(120*k,-80*P)),friction:.5}),d.setUserData({index:-1}),f.createFixture(n.Edge(r(-120*k,-100*P),r(-120*k,100*P))),f.setUserData({index:-2}),v.createFixture(n.Edge(r(120*k,-100*P),r(120*k,100*k))),v.setUserData({index:-2})},renderRocks:function(time,t){j.h(y,M),C.forEach((function(body,i){var o=body.getPosition(),e=body.getAngle(),n={time:.001*time,resolution:[window.innerWidth*E,window.innerHeight*E],offset:[o.x/L,o.y/L],angle:e,rock:x[body.m_userData.index],rocksPos:t};y.useProgram(h.program),y.bindFramebuffer(y.FRAMEBUFFER,M.framebuffer),j.i(y,h,U[i]),j.j(h,n),j.f(y,U[i],y.TRIANGLE_FAN)}))},renderPost:function(time,t){var o={scene:M.attachments[0],resolution:[window.innerWidth*E,window.innerHeight*E],bg:w,time:time,rocksPos:t};y.useProgram(m.program),y.bindFramebuffer(y.FRAMEBUFFER,null),j.i(y,m,_),j.j(m,o),j.f(y,_,y.TRIANGLES)},scaleVertices:function(t){for(var o=[],i=0;i<t.length;i++)o.push(t[i].x/100,t[i].y/100),o.push(0);return o},createRockVertices:function(){for(var t=new A.Noise(Math.random()),o=[],e=Math.min(window.innerWidth/window.innerHeight,1),n=6*Math.random()*e+11,c=6*Math.random()*e+7,l=0;l<2*Math.PI;l+=2*Math.PI/50){var d=n+t.perlin2(Math.cos(l),Math.sin(l))*(n/4),f=Math.cos(l)*(d+c),v=Math.sin(l)*d;o.push(r(f,v))}return o},toPhysicsCoordY:function(t){return-200*(t/window.innerHeight-P/2)},toPhysicsCoordX:function(t){return 200*(t/window.innerHeight-k/2)},onMouseDown:function(t){var o,e,d=this,f=null!==(o=t.clientX)&&void 0!==o?o:t.touches[0].clientX,v=null!==(e=t.clientY)&&void 0!==e?e:t.touches[0].clientY;c.queryAABB(new n.AABB(r(this.toPhysicsCoordX(f),this.toPhysicsCoordY(v))),(function(t){var o=t.getBody(),e=c.createBody(r(d.toPhysicsCoordX(f),d.toPhysicsCoordY(v)),0);l&&c.destroyJoint(l),(l=c.createJoint(n.RevoluteJoint({bodyA:o,bodyB:e,localAnchorA:o.getLocalPoint(e.getPosition()),collideConnected:!1}))).enableLimit()}))},onMouseMove:function(t){var o,e;t.preventDefault();var n=null!==(o=t.clientX)&&void 0!==o?o:t.touches[0].clientX,c=null!==(e=t.clientY)&&void 0!==e?e:t.touches[0].clientY;l&&l.getBodyB().setPosition(r(this.toPhysicsCoordX(n),this.toPhysicsCoordY(c)))},onMouseUp:function(){l&&(c.destroyJoint(l),l=null)},toggleMute:function(){this.muted=!this.muted,B.Howler.mute(this.muted)},takeScreenshot:function(){var link=document.createElement("a");link.download="rocks",link.href=this.$refs.canvas.toDataURL("image/png"),link.click()}}},z=H,V=(e(1026),e(28)),component=Object(V.a)(z,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"container"},[o("nuxt-link",{staticClass:"site-link",attrs:{to:"/"}},[o("logo",{attrs:{color:"white"}})],1),t._v(" "),o("div",{staticClass:"controls"},[o("img",{staticClass:"control-icon",attrs:{src:t.muted?"/rocks/muted.svg":"/rocks/unmuted.svg"},on:{click:t.toggleMute}})]),t._v(" "),o("canvas",{ref:"canvas",staticClass:"rocks",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp,mouseleave:t.onMouseUp,touchstart:t.onMouseDown,touchmove:t.onMouseMove,touchend:t.onMouseUp,touchcancel:t.onMouseUp}}),t._v(" "),o("script",{attrs:{id:"vs-rocks",type:"notjs"}},[t._v("\n    precision mediump float;\n    attribute vec4 position;\n    varying vec2 rockUv;\n    varying vec2 uv;\n    varying mat2 rotation;\n    uniform float time;\n    uniform float angle;\n    uniform vec2 offset;\n    uniform vec2 resolution;\n\n    mat2 rotate(float angle) {\n      float s = sin(angle);\n      float c = cos(angle);\n\n      return mat2(\n        c, -s,\n        s, c\n      );\n    }\n\n    void main() {\n      float aspectRatio = resolution.y / resolution.x;\n      vec2 pos = position.xy;\n      rotation = rotate(angle);\n      pos *= rotation;\n      pos.x *= aspectRatio;\n      vec2 adjOffset = vec2(offset.x * aspectRatio, offset.y);\n\n      gl_Position = vec4(pos * 1.01 + adjOffset, 0, 1.0);\n      rockUv = position.xy * 2.0 - .5;\n    }\n  ")]),t._v(" "),o("script",{attrs:{id:"fs-rocks",type:"notjs"}},[t._v("\n    precision mediump float;\n\n    varying mat2 rotation;\n    varying vec2 rockUv;\n    varying vec2 uv;\n\n    uniform vec2 resolution;\n    uniform float time;\n    uniform sampler2D rock;\n    uniform float angle;\n    uniform vec2 offset;\n    uniform vec2 rocksPos[4];\n\n    void main() {\n      vec2 uv = gl_FragCoord.xy / resolution - .5;\n      uv.x *= resolution.x / resolution.y;\n\n      vec4 color = texture2D(rock, rockUv * 2.0);\n\n      color.rgb *= clamp(1.0 - distance(uv - .03, offset / 2.0) * 8.5, .20, 1.2);\n\n      for (int i = 0; i < 4; i++) {\n        vec2 rockShadow = vec2(rocksPos[i].x, rocksPos[i].y - .08) / 2.0;\n        color.rgb *=  clamp(distance(uv, rockShadow) * 14.0, 0.5, 1.35) * vec3(1.0, .92, .91);\n      }\n\n      gl_FragColor = color;\n    }\n  ")]),t._v(" "),o("script",{attrs:{id:"vs-post",type:"notjs"}},[t._v("\n    precision mediump float;\n    attribute vec2 position;\n    uniform vec2 resolution;\n    varying vec2 uv;\n\n    void main() {\n      uv = position;\n      gl_Position = vec4(position, 0., 1.);\n    }\n  ")]),t._v(" "),o("script",{attrs:{id:"fs-post",type:"notjs"}},[t._v("\n    precision mediump float;\n    uniform sampler2D scene;\n    uniform sampler2D bg;\n    uniform vec2 resolution;\n    uniform float time;\n    varying vec2 uv;\n\n    float invLerp(float a, float b, float v) {\n      return (v - a) / (b - a);\n    }\n\n    float rand(vec2 co){\n      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);\n    }\n\n    void main() {\n      vec2 adjUv = uv / 2.0 + .5;\n\n      vec2 bgUv = vec2(adjUv.x * min(resolution.x / resolution.y, 1.0), adjUv.y);\n      vec2 heatUv = bgUv + smoothstep(0., .6, uv.y + .6) * .005 * sin(time * .8 + (uv.y + 1.0) * 8.5);\n\n      vec4 bgColor = texture2D(bg, heatUv);\n\n      float fogOpacity = .56 * max(0., invLerp(-.8, -1.0, -1.0 * uv.y - 1.8));\n      fogOpacity *= 1.1 - step(-.8, uv.y);\n\n      vec4 sceneColor = texture2D(scene, adjUv);\n      float shadowColor = fogOpacity * texture2D(scene, vec2(adjUv.x, adjUv.y * -1.0) + vec2(0.0, .2)).a;\n      bgColor.rgb *= 1.0 - shadowColor;\n\n      vec4 color = mix(bgColor, sceneColor, sceneColor.a);\n\n      gl_FragColor = color;\n    }\n  ")])],1)}),[],!1,null,"2b5f3470",null);o.default=component.exports;installComponents(component,{Logo:e(288).default})},321:function(t,o,e){var n=e(4),r=e(24),c=e(13),l=/"/g,d=n("".replace);t.exports=function(t,o,e,n){var f=c(r(t)),v="<"+o;return""!==e&&(v+=" "+e+'="'+d(c(n),l,"&quot;")+'"'),v+">"+f+"</"+o+">"}},322:function(t,o,e){var n=e(3);t.exports=function(t){return n((function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},340:function(t,o,e){"use strict";var n=e(2),r=e(321);n({target:"String",proto:!0,forced:e(322)("sub")},{sub:function(){return r(this,"sub","","")}})},671:function(t,o,e){var content=e(1027);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(108).default)("d453cf5a",content,!0,{sourceMap:!1})}}]);