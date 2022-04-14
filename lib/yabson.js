!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).yabson={})}(this,(function(e){"use strict";const t=[0],n=Symbol(),r=new TextEncoder,i=new TextDecoder,s=new Array(256);let o=0;function u(e,n,r,i){if(void 0===i){if(o++,!(s.length-o>=t.length))throw new Error("Reached maximum number of custom types");s[s.length-o]={serialize:e,parse:n,test:r}}else s[i]={serialize:e,parse:n,test:r}}u((function*(e,t){const n=e.objects.indexOf(t);yield*l(e,n)}),(function*(e){const t=yield*k(e);return new T(t,e)}),ge,0),u(null,C,Ue),u(y,P,Ie),u(d,V,Oe),u(p,_,ze),u(p,q,ve),u(p,G,Ne),u(p,H,Ee),u(p,J,Se),u(p,K,Be),u(p,L,xe),u(p,Q,Fe),u(p,W,Te),u(p,X,De),u(p,Y,Me),u(b,Z,Re),u(h,$,ke),u(A,ee,Ce),u(m,te,Pe),u(g,ne,Ve),u(w,re,_e),u(U,ie,qe),u(I,se,Ge),u(null,oe,Je),u(null,ue,Ke),u(null,ce,Le),u(j,ae,Qe),u(F,me,rt),u(null,(function*(){return n}),je),u(O,fe,We),u(z,le,Xe),u(v,ye,Ye),u(N,de,Ze),u(S,pe,$e),u(B,be,et),u(x,he,tt),u(E,Ae,nt);class c{constructor(e){this.stream=new a(e),this.objects=[]}append(e){return this.stream.append(e)}flush(){return this.stream.flush()}addObject(e){this.objects.push(it(e)&&!ge(e,this)?e:void 0)}}class a{constructor(e){this.offset=0,this.value=new Uint8Array(e)}*append(e){if(this.offset+e.length>this.value.length){const t=this.value.length-this.offset;yield*this.append(e.subarray(0,t)),yield this.value,this.offset=0,yield*this.append(e.subarray(t))}else this.value.set(e,this.offset),this.offset+=e.length}*flush(){this.offset&&(yield this.value.subarray(0,this.offset))}}function*f(e,{chunkSize:t=8388608}={}){const n=new c(t);yield*l(n,e),yield*n.flush()}function*l(e,t){const n=s.findIndex((({test:n}={})=>n&&n(t,e)));e.addObject(t),yield*e.append(new Uint8Array([n]));const r=s[n].serialize;r&&(yield*r(e,t)),0!=n&&Ue(t)&&(yield*function*(e,t){const n=Object.getOwnPropertySymbols(t).map((e=>[e,t[e]]));yield*y(e,n)}(e,t),yield*function*(e,t){let n=Object.entries(t);Ie(t)&&(n=n.filter((([e])=>!He(Number(e)))));yield*function*(e,t){yield*l(e,t.length);for(const[n,r]of t)yield*d(e,n),yield*l(e,r)}(e,n)}(e,t))}function*y(e,t){yield*l(e,t.length);const r=Object.keys(t).filter((e=>He(Number(e)))).map((e=>Number(e)));for(const[i,s]of t.entries())yield*l(e,r.includes(i)?s:n)}function*d(e,t){const n=r.encode(t);yield*l(e,n.length),yield*e.append(n)}function*p(e,t){yield*l(e,t.length),yield*e.append(new Uint8Array(t.buffer))}function*b(e,t){const n=new Uint8Array(new Float64Array([t]).buffer);yield*e.append(n)}function*h(e,t){const n=new Uint8Array(new BigInt64Array([t]).buffer);yield*e.append(n)}function*A(e,t){const n=new Uint8Array(new Uint32Array([t]).buffer);yield*e.append(n)}function*m(e,t){const n=new Uint8Array(new Int32Array([t]).buffer);yield*e.append(n)}function*g(e,t){const n=new Uint8Array(new Uint16Array([t]).buffer);yield*e.append(n)}function*w(e,t){const n=new Uint8Array(new Int16Array([t]).buffer);yield*e.append(n)}function*U(e,t){const n=new Uint8Array([t]);yield*e.append(n)}function*I(e,t){const n=new Uint8Array(new Int8Array([t]).buffer);yield*e.append(n)}function*j(e,t){const n=new Uint8Array([Number(t)]);yield*e.append(n)}function*O(e,t){const n=t.entries();yield*l(e,t.size);for(const[t,r]of n)yield*l(e,t),yield*l(e,r)}function*z(e,t){yield*l(e,t.size);for(const n of t)yield*l(e,n)}function*v(e,t){yield*b(e,t.getTime())}function*N(e,t){yield*d(e,t.message),yield*d(e,t.stack)}function*S(e,t){yield*d(e,t.source),yield*d(e,t.flags)}function*B(e,t){yield*d(e,t.valueOf())}function*x(e,t){yield*b(e,t.valueOf())}function*E(e,t){yield*j(e,t.valueOf())}function*F(e,t){yield*d(e,t.description)}class T{constructor(e,t){this.index=e,this.data=t}getObject(){return this.data.objects[this.index]}}class D{constructor(){this.stream=new M,this.objects=[],this.setters=[]}consume(e){return this.stream.consume(e)}getObjectId(){const e=this.objects.length;return this.objects.push(void 0),e}resolveObject(e,t){it(t)&&!we(t)&&(this.objects[e]=t)}setObject(e,t){this.setters.push({functionArguments:e,setterFunction:t})}executeSetters(){this.setters.forEach((({functionArguments:e,setterFunction:t})=>{t(...e.map((e=>we(e)?e.getObject():e)))}))}}class M{constructor(){this.offset=0,this.value=new Uint8Array(0)}*consume(e){if(this.offset+e>this.value.length){const t=this.value.subarray(this.offset,this.value.length),n=yield;return t.length+n.length!=this.value.length&&(this.value=new Uint8Array(t.length+n.length)),this.value.set(t),this.value.set(n,t.length),this.offset=0,yield*this.consume(e)}{const t=this.value.slice(this.offset,this.offset+e);return this.offset+=t.length,t}}}function R(){const e=function*(){const e=new D,t=yield*k(e);return e.executeSetters(),t}();return e.next(),e}function*k(e){const t=(yield*e.consume(1))[0],n=s[t].parse,r=e.getObjectId(),i=yield*n(e);return 0!=t&&Ue(i)&&(yield*function*(e,t){const n=yield*P(e);e.setObject([n],(e=>e.forEach((([e,n])=>t[e]=n))))}(e,i),yield*function*(e,t){yield*function*(e,t){const n=yield*k(e);for(let r=0;r<n;r++){const n=yield*V(e),r=yield*k(e);e.setObject([r],(e=>t[n]=e))}}(e,t)}(e,i)),e.resolveObject(r,i),i}function*C(){return{}}function*P(e){const t=yield*k(e),n=[];for(let r=0;r<t;r++){const t=yield*k(e);je(t)||e.setObject([t],(e=>n[r]=e))}return n}function*V(e){const t=yield*k(e),n=yield*e.consume(t);return i.decode(n)}function*_(e){const t=yield*k(e),n=yield*e.consume(8*t);return new BigUint64Array(n.buffer)}function*q(e){const t=yield*k(e),n=yield*e.consume(8*t);return new BigInt64Array(n.buffer)}function*G(e){const t=yield*k(e),n=yield*e.consume(8*t);return new Float64Array(n.buffer)}function*H(e){const t=yield*k(e),n=yield*e.consume(4*t);return new Float32Array(n.buffer)}function*J(e){const t=yield*k(e),n=yield*e.consume(4*t);return new Uint32Array(n.buffer)}function*K(e){const t=yield*k(e),n=yield*e.consume(4*t);return new Int32Array(n.buffer)}function*L(e){const t=yield*k(e),n=yield*e.consume(2*t);return new Uint16Array(n.buffer)}function*Q(e){const t=yield*k(e),n=yield*e.consume(2*t);return new Int16Array(n.buffer)}function*W(e){const t=yield*k(e),n=yield*e.consume(t);return new Uint8ClampedArray(n.buffer)}function*X(e){const t=yield*k(e);return yield*e.consume(t)}function*Y(e){const t=yield*k(e),n=yield*e.consume(t);return new Int8Array(n.buffer)}function*Z(e){const t=yield*e.consume(8);return new Float64Array(t.buffer)[0]}function*$(e){const t=yield*e.consume(8);return new BigInt64Array(t.buffer)[0]}function*ee(e){const t=yield*e.consume(4);return new Uint32Array(t.buffer)[0]}function*te(e){const t=yield*e.consume(4);return new Int32Array(t.buffer)[0]}function*ne(e){const t=yield*e.consume(2);return new Uint16Array(t.buffer)[0]}function*re(e){const t=yield*e.consume(2);return new Int16Array(t.buffer)[0]}function*ie(e){const t=yield*e.consume(1);return new Uint8Array(t.buffer)[0]}function*se(e){const t=yield*e.consume(1);return new Int8Array(t.buffer)[0]}function*oe(){}function*ue(){return null}function*ce(){return NaN}function*ae(e){const t=yield*e.consume(1);return Boolean(t[0])}function*fe(e){const t=yield*k(e),n=new Map;for(let r=0;r<t;r++){const t=yield*k(e),r=yield*k(e);e.setObject([t,r],((e,t)=>n.set(e,t)))}return n}function*le(e){const t=yield*k(e),n=new Set;for(let r=0;r<t;r++){const t=yield*k(e);e.setObject([t],(e=>n.add(e)))}return n}function*ye(e){const t=yield*Z(e);return new Date(t)}function*de(e){const t=yield*V(e),n=yield*V(e),r=new Error(t);return r.stack=n,r}function*pe(e){const t=yield*V(e),n=yield*V(e);return new RegExp(t,n)}function*be(e){return new String(yield*V(e))}function*he(e){return new Number(yield*Z(e))}function*Ae(e){return new Boolean(yield*ae(e))}function*me(e){const t=yield*V(e);return Symbol(t)}function ge(e,t){return Ue(e)&&t.objects.includes(e)}function we(e){return e instanceof T}function Ue(e){return e===Object(e)}function Ie(e){return"number"==typeof e.length}function je(e){return e===n}function Oe(e){return"string"==typeof e}function ze(e){return e instanceof BigUint64Array}function ve(e){return e instanceof BigInt64Array}function Ne(e){return e instanceof Float64Array}function Se(e){return e instanceof Uint32Array}function Be(e){return e instanceof Int32Array}function xe(e){return e instanceof Uint16Array}function Ee(e){return e instanceof Float32Array}function Fe(e){return e instanceof Int16Array}function Te(e){return e instanceof Uint8ClampedArray}function De(e){return e instanceof Uint8Array}function Me(e){return e instanceof Int8Array}function Re(e){return"number"==typeof e}function ke(e){return"bigint"==typeof e}function Ce(e){return He(e)&&e>=0&&e<=4294967295}function Pe(e){return He(e)&&e>=-2147483648&&e<=2147483647}function Ve(e){return He(e)&&e>=0&&e<=65535}function _e(e){return He(e)&&e>=-32768&&e<=32767}function qe(e){return He(e)&&e>=0&&e<=255}function Ge(e){return He(e)&&e>=-128&&e<=127}function He(e){return Re(e)&&Number.isInteger(e)}function Je(e){return void 0===e}function Ke(e){return null===e}function Le(e){return Number.isNaN(e)}function Qe(e){return"boolean"==typeof e}function We(e){return e instanceof Map}function Xe(e){return e instanceof Set}function Ye(e){return e instanceof Date}function Ze(e){return e instanceof Error}function $e(e){return e instanceof RegExp}function et(e){return e instanceof String}function tt(e){return e instanceof Number}function nt(e){return e instanceof Boolean}function rt(e){return"symbol"==typeof e}function it(e){return Ue(e)||rt(e)}e.clone=function(e,t){const n=f(e,t),r=R();let i;for(const e of n)i=r.next(e);return i.value},e.getParser=R,e.getSerializer=f,e.parse=function(e){return R().next(e).value},e.parseArray=P,e.parseBigInt=$,e.parseBigInt64Array=q,e.parseBigUint64Array=_,e.parseBoolean=ae,e.parseBooleanObject=Ae,e.parseDate=ye,e.parseError=de,e.parseFloat32Array=H,e.parseFloat64Array=G,e.parseInt16=re,e.parseInt16Array=Q,e.parseInt32=te,e.parseInt32Array=K,e.parseInt8=se,e.parseInt8Array=Y,e.parseMap=fe,e.parseNaN=ce,e.parseNull=ue,e.parseNumber=Z,e.parseNumberObject=he,e.parseObject=C,e.parseRegExp=pe,e.parseSet=le,e.parseString=V,e.parseStringObject=be,e.parseSymbol=me,e.parseUint16=ne,e.parseUint16Array=L,e.parseUint32=ee,e.parseUint32Array=J,e.parseUint8=ie,e.parseUint8Array=X,e.parseUint8ClampedArray=W,e.parseUndefined=oe,e.parseValue=k,e.registerType=u,e.serialize=function(e,t){const n=f(e,t);let r=new Uint8Array([]);for(const e of n){const t=r;r=new Uint8Array(t.length+e.length),r.set(t,0),r.set(e,t.length)}return r},e.serializeArray=y,e.serializeBigInt=h,e.serializeBoolean=j,e.serializeBooleanObject=E,e.serializeDate=v,e.serializeError=N,e.serializeInt16=w,e.serializeInt32=m,e.serializeInt8=I,e.serializeMap=O,e.serializeNumber=b,e.serializeNumberObject=x,e.serializeRegExp=S,e.serializeSet=z,e.serializeString=d,e.serializeStringObject=B,e.serializeSymbol=F,e.serializeTypedArray=p,e.serializeUint16=g,e.serializeUint32=A,e.serializeUint8=U,e.serializeValue=l,e.testArray=Ie,e.testBigInt=ke,e.testBigInt64Array=ve,e.testBigUint64Array=ze,e.testBoolean=Qe,e.testBooleanObject=nt,e.testDate=Ye,e.testError=Ze,e.testFloat32Array=Ee,e.testFloat64Array=Ne,e.testInt16=_e,e.testInt16Array=Fe,e.testInt32=Pe,e.testInt32Array=Be,e.testInt8=Ge,e.testInt8Array=Me,e.testInteger=He,e.testMap=We,e.testNaN=Le,e.testNull=Ke,e.testNumber=Re,e.testNumberObject=tt,e.testObject=Ue,e.testRegExp=$e,e.testSet=Xe,e.testString=Oe,e.testStringObject=et,e.testSymbol=rt,e.testUint16=Ve,e.testUint16Array=xe,e.testUint32=Ce,e.testUint32Array=Se,e.testUint8=qe,e.testUint8Array=De,e.testUint8ClampedArray=Te,e.testUndefined=Je,Object.defineProperty(e,"__esModule",{value:!0})}));