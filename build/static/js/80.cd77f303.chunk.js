"use strict";(self.webpackChunkfront_app=self.webpackChunkfront_app||[]).push([[80],{80:()=>{const e=document.getElementsByTagName("canvas")[0];e.width=e.clientWidth,e.height=e.clientHeight;let n={TEXTURE_DOWNSAMPLE:1,DENSITY_DISSIPATION:.98,VELOCITY_DISSIPATION:.79,PRESSURE_DISSIPATION:.8,PRESSURE_ITERATIONS:25,CURL:30,SPLAT_RADIUS:9e-4},r=[],t=[];const{gl:i,ext:o}=function(e){const n={alpha:!1,depth:!1,stencil:!1,antialias:!1};let r=e.getContext("webgl2",n);const t=!!r;t||(r=e.getContext("webgl",n)||e.getContext("experimental-webgl",n));let i,o;t?(r.getExtension("EXT_color_buffer_float"),o=r.getExtension("OES_texture_float_linear")):(i=r.getExtension("OES_texture_half_float"),o=r.getExtension("OES_texture_half_float_linear"));r.clearColor(0,0,0,1);const u=t?r.HALF_FLOAT:i.HALF_FLOAT_OES;let v,l,m;t?(v=a(r,r.RGBA16F,r.RGBA,u),l=a(r,r.RG16F,r.RG,u),m=a(r,r.R16F,r.RED,u)):(v=a(r,r.RGBA,r.RGBA,u),l=a(r,r.RGBA,r.RGBA,u),m=a(r,r.RGBA,r.RGBA,u));return{gl:r,ext:{formatRGBA:v,formatRG:l,formatR:m,halfFloatTexType:u,supportLinearFiltering:o}}}(e);function a(e,n,r,t){if(!function(e,n,r,t){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,n,4,4,0,r,t,null);let o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);const a=e.checkFramebufferStatus(e.FRAMEBUFFER);return a==e.FRAMEBUFFER_COMPLETE}(e,n,r,t))switch(n){case e.R16F:return a(e,e.RG16F,e.RG,t);case e.RG16F:return a(e,e.RGBA16F,e.RGBA,t);default:return null}return{internalFormat:n,format:r}}function u(){this.id=-1,this.x=0,this.y=0,this.dx=0,this.dy=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}r.push(new u);class v{constructor(e,n){if(this.uniforms={},this.program=i.createProgram(),i.attachShader(this.program,e),i.attachShader(this.program,n),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw i.getProgramInfoLog(this.program);const r=i.getProgramParameter(this.program,i.ACTIVE_UNIFORMS);for(let t=0;t<r;t++){const e=i.getActiveUniform(this.program,t).name;this.uniforms[e]=i.getUniformLocation(this.program,e)}}bind(){i.useProgram(this.program)}}function l(e,n){const r=i.createShader(e);if(i.shaderSource(r,n),i.compileShader(r),!i.getShaderParameter(r,i.COMPILE_STATUS))throw i.getShaderInfoLog(r);return r}const m=l(i.VERTEX_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"),f=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float value;\n\n    void main () {\n        gl_FragColor = value * texture2D(uTexture, vUv);\n    }\n"),s=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n\n    void main () {\n        gl_FragColor = texture2D(uTexture, vUv);\n    }\n"),c=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n"),d=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    vec4 bilerp (in sampler2D sam, in vec2 p) {\n        vec4 st;\n        st.xy = floor(p - 0.5) + 0.5;\n        st.zw = st.xy + 1.0;\n        vec4 uv = st * texelSize.xyxy;\n        vec4 a = texture2D(sam, uv.xy);\n        vec4 b = texture2D(sam, uv.zy);\n        vec4 c = texture2D(sam, uv.xw);\n        vec4 d = texture2D(sam, uv.zw);\n        vec2 f = p - st.xy;\n        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n    }\n\n    void main () {\n        vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;\n        gl_FragColor = dissipation * bilerp(uSource, coord);\n        gl_FragColor.a = 1.0;\n    }\n"),T=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    void main () {\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        gl_FragColor = dissipation * texture2D(uSource, coord);\n        gl_FragColor.a = 1.0;\n    }\n"),E=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n\n    vec2 sampleVelocity (in vec2 uv) {\n        vec2 multiplier = vec2(1.0, 1.0);\n        if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }\n        if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }\n        if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }\n        if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }\n        return multiplier * texture2D(uVelocity, uv).xy;\n    }\n\n    void main () {\n        float L = sampleVelocity(vL).x;\n        float R = sampleVelocity(vR).x;\n        float T = sampleVelocity(vT).y;\n        float B = sampleVelocity(vB).y;\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n"),p=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);\n    }\n"),R=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n\n    void main () {\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n        vec2 force = vec2(abs(T) - abs(B), 0.0);\n        force *= 1.0 / length(force + 0.00001) * curl * C;\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n"),g=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n\n    vec2 boundary (in vec2 uv) {\n        uv = min(max(uv, 0.0), 1.0);\n        return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n"),x=l(i.FRAGMENT_SHADER,"\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n\n    vec2 boundary (in vec2 uv) {\n        uv = min(max(uv, 0.0), 1.0);\n        return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n");let h,y,D,_,A,S,F;N();const U=new v(m,f),w=new v(m,s),L=new v(m,c),P=new v(m,o.supportLinearFiltering?T:d),b=new v(m,E),B=new v(m,p),I=new v(m,R),M=new v(m,g),C=new v(m,x);function N(){h=i.drawingBufferWidth>>n.TEXTURE_DOWNSAMPLE,y=i.drawingBufferHeight>>n.TEXTURE_DOWNSAMPLE;const e=o.halfFloatTexType,r=o.formatRGBA,t=o.formatRG,a=o.formatR;D=X(2,h,y,r.internalFormat,r.format,e,o.supportLinearFiltering?i.LINEAR:i.NEAREST),_=X(0,h,y,t.internalFormat,t.format,e,o.supportLinearFiltering?i.LINEAR:i.NEAREST),A=G(4,h,y,a.internalFormat,a.format,e,i.NEAREST),S=G(5,h,y,a.internalFormat,a.format,e,i.NEAREST),F=X(6,h,y,a.internalFormat,a.format,e,i.NEAREST)}function G(e,n,r,t,o,a,u){i.activeTexture(i.TEXTURE0+e);let v=i.createTexture();i.bindTexture(i.TEXTURE_2D,v),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,u),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,u),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,t,n,r,0,o,a,null);let l=i.createFramebuffer();return i.bindFramebuffer(i.FRAMEBUFFER,l),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,v,0),i.viewport(0,0,n,r),i.clear(i.COLOR_BUFFER_BIT),[v,l,e]}function X(e,n,r,t,i,o,a){let u=G(e,n,r,t,i,o,a),v=G(e+1,n,r,t,i,o,a);return{get read(){return u},get write(){return v},swap(){let e=u;u=v,v=e}}}const O=(i.bindBuffer(i.ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),i.STATIC_DRAW),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),i.STATIC_DRAW),i.vertexAttribPointer(0,2,i.FLOAT,!1,0,0),i.enableVertexAttribArray(0),e=>{i.bindFramebuffer(i.FRAMEBUFFER,e),i.drawElements(i.TRIANGLES,6,i.UNSIGNED_SHORT,0)});let V=Date.now();function H(r,t,o,a,u){L.bind(),i.uniform1i(L.uniforms.uTarget,_.read[2]),i.uniform1f(L.uniforms.aspectRatio,e.width/e.height),i.uniform2f(L.uniforms.point,r/e.width,1-t/e.height),i.uniform3f(L.uniforms.color,o,-a,1),i.uniform1f(L.uniforms.radius,n.SPLAT_RADIUS),O(_.write[1]),_.swap(),i.uniform1i(L.uniforms.uTarget,D.read[2]),i.uniform3f(L.uniforms.color,.3*u[0],.3*u[1],.3*u[2]),O(D.write[1]),D.swap()}function z(n){for(let r=0;r<n;r++){const n=[10*Math.random(),10*Math.random(),10*Math.random()];H(e.width*Math.random(),e.height*Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),n)}}z(parseInt(20*Math.random())+5),function o(){e.width==e.clientWidth&&e.height==e.clientHeight||(e.width=e.clientWidth,e.height=e.clientHeight,N());const a=Math.min((Date.now()-V)/1e3,.016);V=Date.now(),i.viewport(0,0,h,y),t.length>0&&z(t.pop());P.bind(),i.uniform2f(P.uniforms.texelSize,1/h,1/y),i.uniform1i(P.uniforms.uVelocity,_.read[2]),i.uniform1i(P.uniforms.uSource,_.read[2]),i.uniform1f(P.uniforms.dt,a),i.uniform1f(P.uniforms.dissipation,n.VELOCITY_DISSIPATION),O(_.write[1]),_.swap(),i.uniform1i(P.uniforms.uVelocity,_.read[2]),i.uniform1i(P.uniforms.uSource,D.read[2]),i.uniform1f(P.uniforms.dissipation,n.DENSITY_DISSIPATION),O(D.write[1]),D.swap();for(let e=0;e<r.length;e++){const n=r[e];n.moved&&(H(n.x,n.y,n.dx,n.dy,n.color),n.moved=!1)}B.bind(),i.uniform2f(B.uniforms.texelSize,1/h,1/y),i.uniform1i(B.uniforms.uVelocity,_.read[2]),O(S[1]),I.bind(),i.uniform2f(I.uniforms.texelSize,1/h,1/y),i.uniform1i(I.uniforms.uVelocity,_.read[2]),i.uniform1i(I.uniforms.uCurl,S[2]),i.uniform1f(I.uniforms.curl,n.CURL),i.uniform1f(I.uniforms.dt,a),O(_.write[1]),_.swap(),b.bind(),i.uniform2f(b.uniforms.texelSize,1/h,1/y),i.uniform1i(b.uniforms.uVelocity,_.read[2]),O(A[1]),U.bind();let u=F.read[2];i.activeTexture(i.TEXTURE0+u),i.bindTexture(i.TEXTURE_2D,F.read[0]),i.uniform1i(U.uniforms.uTexture,u),i.uniform1f(U.uniforms.value,n.PRESSURE_DISSIPATION),O(F.write[1]),F.swap(),M.bind(),i.uniform2f(M.uniforms.texelSize,1/h,1/y),i.uniform1i(M.uniforms.uDivergence,A[2]),u=F.read[2],i.uniform1i(M.uniforms.uPressure,u),i.activeTexture(i.TEXTURE0+u);for(let e=0;e<n.PRESSURE_ITERATIONS;e++)i.bindTexture(i.TEXTURE_2D,F.read[0]),O(F.write[1]),F.swap();C.bind(),i.uniform2f(C.uniforms.texelSize,1/h,1/y),i.uniform1i(C.uniforms.uPressure,F.read[2]),i.uniform1i(C.uniforms.uVelocity,_.read[2]),O(_.write[1]),_.swap(),i.viewport(0,0,i.drawingBufferWidth,i.drawingBufferHeight),w.bind(),i.uniform1i(w.uniforms.uTexture,D.read[2]),O(null),requestAnimationFrame(o)}(),window.addEventListener("mousemove",(e=>{let{clientX:n,clientY:t}=e;r[0].moved=r[0].down,r[0].dx=10*(n-r[0].x),r[0].dy=10*(t-r[0].y),r[0].x=n,r[0].y=t})),window.addEventListener("mouseover",(()=>{r[0].down=!0,r[0].color=[Math.random()+.2,Math.random()+.2,Math.random()+.2]})),e.addEventListener("touchmove",(e=>{e.preventDefault();const n=e.targetTouches;for(let t=0;t<n.length;t++){let e=r[t];e.moved=e.down,e.dx=10*(n[t].pageX-e.x),e.dy=10*(n[t].pageY-e.y),e.x=n[t].pageX,e.y=n[t].pageY}}),!1),e.addEventListener("touchstart",(e=>{e.preventDefault();const n=e.targetTouches;for(let t=0;t<n.length;t++)t>=r.length&&r.push(new u),r[t].id=n[t].identifier,r[t].down=!0,r[t].x=n[t].pageX,r[t].y=n[t].pageY,r[t].color=[Math.random()+.2,Math.random()+.2,Math.random()+.2]})),window.addEventListener("mouseup",(()=>{r[0].down=!1})),window.addEventListener("touchend",(e=>{const n=e.changedTouches;for(let t=0;t<n.length;t++)for(let e=0;e<r.length;e++)n[t].identifier==r[e].id&&(r[e].down=!1)}))}}]);
//# sourceMappingURL=80.cd77f303.chunk.js.map