(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Il=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let g=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(g=64)),i.push(n[l],n[h],n[g],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ta(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Il(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Sl;const g=r<<2|a>>4;if(i.push(g),c!==64){const m=a<<4&240|c>>2;if(i.push(m),h!==64){const T=c<<6&192|h;i.push(T)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Al=function(t){const e=Ta(t);return Ia.encodeByteArray(e,!0)},Zn=function(t){return Al(t).replace(/\./g,"")},bl=function(t){try{return Ia.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=()=>Cl().__FIREBASE_DEFAULTS__,Nl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_l=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bl(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return Dl()||Nl()||_l()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kl=t=>{var e,n;return(n=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xl=t=>{const e=kl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ml=()=>{var t;return(t=Sa())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zn(JSON.stringify(n)),Zn(JSON.stringify(o)),a].join(".")}function Ll(){try{return typeof indexedDB=="object"}catch{return!1}}function Fl(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="FirebaseError";class Lt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Pl,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Vl(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Lt(s,a,i)}}function Vl(t,e){return t.replace(Ul,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ul=/\{\$([^}]+)}/g;function cs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(yo(r)&&yo(o)){if(!cs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function yo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Rl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($l(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Hl(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hl(t){return t===tt?void 0:t}function $l(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Wl={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},ql=R.INFO,jl={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Kl=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=jl[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ba{constructor(e){this.name=e,this._logLevel=ql,this._logHandler=Kl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const zl=(t,e)=>e.some(n=>t instanceof n);let wo,vo;function Ql(){return wo||(wo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yl(){return vo||(vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ca=new WeakMap,ls=new WeakMap,Da=new WeakMap,Qi=new WeakMap,ir=new WeakMap;function Xl(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(je(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ca.set(n,t)}).catch(()=>{}),ir.set(e,t),e}function Jl(t){if(ls.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ls.set(t,e)}let hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ls.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Da.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return je(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zl(t){hs=t(hs)}function eh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Yi(this),e,...n);return Da.set(i,e.sort?e.sort():[e]),je(i)}:Yl().includes(t)?function(...e){return t.apply(Yi(this),e),je(Ca.get(this))}:function(...e){return je(t.apply(Yi(this),e))}}function th(t){return typeof t=="function"?eh(t):(t instanceof IDBTransaction&&Jl(t),zl(t,Ql())?new Proxy(t,hs):t)}function je(t){if(t instanceof IDBRequest)return Xl(t);if(Qi.has(t))return Qi.get(t);const e=th(t);return e!==t&&(Qi.set(t,e),ir.set(e,t)),e}const Yi=t=>ir.get(t);function nh(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=je(o);return i&&o.addEventListener("upgradeneeded",u=>{i(je(o.result),u.oldVersion,u.newVersion,je(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ih=["get","getKey","getAll","getAllKeys","count"],sh=["put","add","delete","clear"],Xi=new Map;function Eo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xi.get(e))return Xi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=sh.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ih.includes(n)))return;const r=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Xi.set(e,r),r}Zl(t=>({...t,get:(e,n,i)=>Eo(e,n)||t.get(e,n,i),has:(e,n)=>!!Eo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oh(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function oh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ds="@firebase/app",To="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new ba("@firebase/app"),ah="@firebase/app-compat",uh="@firebase/analytics-compat",ch="@firebase/analytics",lh="@firebase/app-check-compat",hh="@firebase/app-check",dh="@firebase/auth",fh="@firebase/auth-compat",ph="@firebase/database",gh="@firebase/database-compat",mh="@firebase/functions",yh="@firebase/functions-compat",wh="@firebase/installations",vh="@firebase/installations-compat",Eh="@firebase/messaging",Th="@firebase/messaging-compat",Ih="@firebase/performance",Sh="@firebase/performance-compat",Ah="@firebase/remote-config",bh="@firebase/remote-config-compat",Ch="@firebase/storage",Dh="@firebase/storage-compat",Nh="@firebase/firestore",_h="@firebase/firestore-compat",kh="firebase",xh="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]",Mh={[ds]:"fire-core",[ah]:"fire-core-compat",[ch]:"fire-analytics",[uh]:"fire-analytics-compat",[hh]:"fire-app-check",[lh]:"fire-app-check-compat",[dh]:"fire-auth",[fh]:"fire-auth-compat",[ph]:"fire-rtdb",[gh]:"fire-rtdb-compat",[mh]:"fire-fn",[yh]:"fire-fn-compat",[wh]:"fire-iid",[vh]:"fire-iid-compat",[Eh]:"fire-fcm",[Th]:"fire-fcm-compat",[Ih]:"fire-perf",[Sh]:"fire-perf-compat",[Ah]:"fire-rc",[bh]:"fire-rc-compat",[Ch]:"fire-gcs",[Dh]:"fire-gcs-compat",[Nh]:"fire-fst",[_h]:"fire-fst-compat","fire-js":"fire-js",[kh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Map,ps=new Map;function Rh(t,e){try{t.container.addComponent(e)}catch(n){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(ps.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;ps.set(e,t);for(const n of ei.values())Rh(n,t);return!0}function Oh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ke=new Aa("app","Firebase",Lh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=xh;function Na(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:fs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(n||(n=Ml()),!n)throw Ke.create("no-options");const r=ei.get(s);if(r){if(cs(n,r.options)&&cs(i,r.config))return r;throw Ke.create("duplicate-app",{appName:s})}const o=new Gl(s);for(const u of ps.values())o.addComponent(u);const a=new Fh(n,i,o);return ei.set(s,a),a}function Vh(t=fs){const e=ei.get(t);if(!e&&t===fs)return Na();if(!e)throw Ke.create("no-app",{appName:t});return e}function Et(t,e,n){var i;let s=(i=Mh[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}ti(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="firebase-heartbeat-database",Bh=1,nn="firebase-heartbeat-store";let Ji=null;function _a(){return Ji||(Ji=nh(Uh,Bh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nn)}}}).catch(t=>{throw Ke.create("idb-open",{originalErrorMessage:t.message})})),Ji}async function Hh(t){try{return(await _a()).transaction(nn).objectStore(nn).get(ka(t))}catch(e){if(e instanceof Lt)ct.warn(e.message);else{const n=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(n.message)}}}async function Io(t,e){try{const i=(await _a()).transaction(nn,"readwrite");return await i.objectStore(nn).put(e,ka(t)),i.done}catch(n){if(n instanceof Lt)ct.warn(n.message);else{const i=Ke.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ct.warn(i.message)}}}function ka(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=1024,Gh=30*24*60*60*1e3;class Wh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jh(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=So();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Gh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=So(),{heartbeatsToSend:n,unsentEntries:i}=qh(this._heartbeatsCache.heartbeats),s=Zn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function So(){return new Date().toISOString().substring(0,10)}function qh(t,e=$h){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ao(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ao(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class jh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ll()?Fl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ao(t){return Zn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){ti(new tn("platform-logger",e=>new rh(e),"PRIVATE")),ti(new tn("heartbeat",e=>new Wh(e),"PRIVATE")),Et(ds,To,t),Et(ds,To,"esm2017"),Et("fire-js","")}Kh("");var zh="firebase",Qh="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(zh,Qh,"app");var Yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,sr=sr||{},A=Yh||self;function ni(){}function Ii(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function En(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xh(t){return Object.prototype.hasOwnProperty.call(t,Zi)&&t[Zi]||(t[Zi]=++Jh)}var Zi="closure_uid_"+(1e9*Math.random()>>>0),Jh=0;function Zh(t,e,n){return t.call.apply(t.bind,arguments)}function ed(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function he(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?he=Zh:he=ed,he.apply(null,arguments)}function Vn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function se(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ze(){this.s=this.s,this.o=this.o}var td=0;Ze.prototype.s=!1;Ze.prototype.na=function(){!this.s&&(this.s=!0,this.M(),td!=0)&&Xh(this)};Ze.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xa=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function bo(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Ii(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function de(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var nd=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{A.addEventListener("test",ni,e),A.removeEventListener("test",ni,e)}catch{}return t}();function ii(t){return/^[\s\xa0]*$/.test(t)}var Co=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function es(t,e){return t<e?-1:t>e?1:0}function Si(){var t=A.navigator;return t&&(t=t.userAgent)?t:""}function ke(t){return Si().indexOf(t)!=-1}function or(t){return or[" "](t),t}or[" "]=ni;function id(t){var e=od;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var sd=ke("Opera"),bt=ke("Trident")||ke("MSIE"),Ma=ke("Edge"),gs=Ma||bt,Ra=ke("Gecko")&&!(Si().toLowerCase().indexOf("webkit")!=-1&&!ke("Edge"))&&!(ke("Trident")||ke("MSIE"))&&!ke("Edge"),rd=Si().toLowerCase().indexOf("webkit")!=-1&&!ke("Edge");function Oa(){var t=A.document;return t?t.documentMode:void 0}var si;e:{var ts="",ns=function(){var t=Si();if(Ra)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ma)return/Edge\/([\d\.]+)/.exec(t);if(bt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rd)return/WebKit\/(\S+)/.exec(t);if(sd)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ns&&(ts=ns?ns[1]:""),bt){var is=Oa();if(is!=null&&is>parseFloat(ts)){si=String(is);break e}}si=ts}var od={};function ad(){return id(function(){let t=0;const e=Co(String(si)).split("."),n=Co("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=es(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||es(s[2].length==0,r[2].length==0)||es(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var ms;if(A.document&&bt){var Do=Oa();ms=Do||parseInt(si,10)||void 0}else ms=void 0;var ud=ms;function sn(t,e){if(de.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ra){e:{try{or(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cd[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sn.X.h.call(this)}}se(sn,de);var cd={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),ld=0;function hd(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++ld,this.ba=this.ea=!1}function Ai(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ar(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function La(t){const e={};for(const n in t)e[n]=t[n];return e}const No="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fa(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<No.length;r++)n=No[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function bi(t){this.src=t,this.g={},this.h=0}bi.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ws(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new hd(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function ys(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=xa(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ai(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ws(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var ur="closure_lm_"+(1e6*Math.random()|0),ss={};function Pa(t,e,n,i,s){if(i&&i.once)return Ua(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Pa(t,e[r],n,i,s);return null}return n=hr(n),t&&t[Tn]?t.N(e,n,En(i)?!!i.capture:!!i,s):Va(t,e,n,!1,i,s)}function Va(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=En(s)?!!s.capture:!!s,a=lr(t);if(a||(t[ur]=a=new bi(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=dd(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)nd||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ha(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dd(){function t(n){return e.call(t.src,t.listener,n)}const e=fd;return t}function Ua(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ua(t,e[r],n,i,s);return null}return n=hr(n),t&&t[Tn]?t.O(e,n,En(i)?!!i.capture:!!i,s):Va(t,e,n,!0,i,s)}function Ba(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ba(t,e[r],n,i,s);else i=En(i)?!!i.capture:!!i,n=hr(n),t&&t[Tn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ws(r,n,i,s),-1<n&&(Ai(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=lr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ws(e,n,i,s)),(n=-1<t?e[t]:null)&&cr(n))}function cr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Tn])ys(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ha(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=lr(e))?(ys(n,t),n.h==0&&(n.src=null,e[ur]=null)):Ai(t)}}}function Ha(t){return t in ss?ss[t]:ss[t]="on"+t}function fd(t,e){if(t.ba)t=!0;else{e=new sn(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&cr(t),t=n.call(i,e)}return t}function lr(t){return t=t[ur],t instanceof bi?t:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function hr(t){return typeof t=="function"?t:(t[rs]||(t[rs]=function(e){return t.handleEvent(e)}),t[rs])}function ee(){Ze.call(this),this.i=new bi(this),this.P=this,this.I=null}se(ee,Ze);ee.prototype[Tn]=!0;ee.prototype.removeEventListener=function(t,e,n,i){Ba(this,t,e,n,i)};function ie(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new de(e,t);else if(e instanceof de)e.target=e.target||t;else{var s=e;e=new de(i,t),Fa(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Un(o,i,!0,e)&&s}if(o=e.g=t,s=Un(o,i,!0,e)&&s,s=Un(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Un(o,i,!1,e)&&s}ee.prototype.M=function(){if(ee.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Ai(n[i]);delete t.g[e],t.h--}}this.I=null};ee.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ee.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Un(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&ys(t.i,o),s=a.call(u,i)!==!1&&s}}return s&&!i.defaultPrevented}var dr=A.JSON.stringify;function pd(){var t=Wa;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gd{constructor(){this.h=this.g=null}add(e,n){const i=$a.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var $a=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new md,t=>t.reset());class md{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yd(t){A.setTimeout(()=>{throw t},0)}function Ga(t,e){vs||wd(),Es||(vs(),Es=!0),Wa.add(t,e)}var vs;function wd(){var t=A.Promise.resolve(void 0);vs=function(){t.then(vd)}}var Es=!1,Wa=new gd;function vd(){for(var t;t=pd();){try{t.h.call(t.g)}catch(n){yd(n)}var e=$a;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Es=!1}function Ci(t,e){ee.call(this),this.h=t||1,this.g=e||A,this.j=he(this.lb,this),this.l=Date.now()}se(Ci,ee);w=Ci.prototype;w.ca=!1;w.R=null;w.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ie(this,"tick"),this.ca&&(fr(this),this.start()))}};w.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}w.M=function(){Ci.X.M.call(this),fr(this),delete this.g};function pr(t,e,n){if(typeof t=="function")n&&(t=he(t,n));else if(t&&typeof t.handleEvent=="function")t=he(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(t,e||0)}function qa(t){t.g=pr(()=>{t.g=null,t.i&&(t.i=!1,qa(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ed extends Ze{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qa(this)}M(){super.M(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rn(t){Ze.call(this),this.h=t,this.g={}}se(rn,Ze);var _o=[];function ja(t,e,n,i){Array.isArray(n)||(n&&(_o[0]=n.toString()),n=_o);for(var s=0;s<n.length;s++){var r=Pa(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ka(t){ar(t.g,function(e,n){this.g.hasOwnProperty(n)&&cr(e)},t),t.g={}}rn.prototype.M=function(){rn.X.M.call(this),Ka(this)};rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Di(){this.g=!0}Di.prototype.Aa=function(){this.g=!1};function Td(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Id(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function vt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ad(t,n)+(i?" "+i:"")})}function Sd(t,e){t.info(function(){return"TIMEOUT: "+e})}Di.prototype.info=function(){};function Ad(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return dr(n)}catch{return e}}var dt={},ko=null;function Ni(){return ko=ko||new ee}dt.Pa="serverreachability";function za(t){de.call(this,dt.Pa,t)}se(za,de);function on(t){const e=Ni();ie(e,new za(e))}dt.STAT_EVENT="statevent";function Qa(t,e){de.call(this,dt.STAT_EVENT,t),this.stat=e}se(Qa,de);function ge(t){const e=Ni();ie(e,new Qa(e,t))}dt.Qa="timingevent";function Ya(t,e){de.call(this,dt.Qa,t),this.size=e}se(Ya,de);function In(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){t()},e)}var _i={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Xa={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gr(){}gr.prototype.h=null;function xo(t){return t.h||(t.h=t.i())}function Ja(){}var Sn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function mr(){de.call(this,"d")}se(mr,de);function yr(){de.call(this,"c")}se(yr,de);var Ts;function ki(){}se(ki,gr);ki.prototype.g=function(){return new XMLHttpRequest};ki.prototype.i=function(){return{}};Ts=new ki;function An(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new rn(this),this.O=bd,t=gs?125:void 0,this.T=new Ci(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Za}function Za(){this.i=null,this.g="",this.h=!1}var bd=45e3,Is={},ri={};w=An.prototype;w.setTimeout=function(t){this.O=t};function Ss(t,e,n){t.K=1,t.v=Mi(Ve(e)),t.s=n,t.P=!0,eu(t,null)}function eu(t,e){t.F=Date.now(),bn(t),t.A=Ve(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),uu(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Za,t.g=_u(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ed(he(t.La,t,t.g),t.N)),ja(t.S,t.g,"readystatechange",t.ib),e=t.H?La(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),on(),Td(t.j,t.u,t.A,t.m,t.U,t.s)}w.ib=function(t){t=t.target;const e=this.L;e&&Le(t)==3?e.l():this.La(t)};w.La=function(t){try{if(t==this.g)e:{const l=Le(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||gs||this.g&&(this.h.h||this.g.fa()||Lo(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?on(3):on(2)),xi(this);var n=this.g.aa();this.Y=n;t:if(tu(this)){var i=Lo(this.g);t="";var s=i.length,r=Le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nt(this),Xt(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Id(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ii(a)){var c=a;break t}}c=null}if(n=c)vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,As(this,n);else{this.i=!1,this.o=3,ge(12),nt(this),Xt(this);break e}}this.P?(nu(this,l,o),gs&&this.i&&l==3&&(ja(this.S,this.T,"tick",this.hb),this.T.start())):(vt(this.j,this.m,o,null),As(this,o)),l==4&&nt(this),this.i&&!this.I&&(l==4?bu(this.l,this):(this.i=!1,bn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ge(12)):(this.o=0,ge(13)),nt(this),Xt(this)}}}catch{}finally{}};function tu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function nu(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=Cd(t,n),s==ri){e==4&&(t.o=4,ge(14),i=!1),vt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Is){t.o=4,ge(15),vt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else vt(t.j,t.m,s,null),As(t,s);tu(t)&&s!=ri&&s!=Is&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ge(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ar(e),e.K=!0,ge(11))):(vt(t.j,t.m,n,"[Invalid Chunked Response]"),nt(t),Xt(t))}w.hb=function(){if(this.g){var t=Le(this.g),e=this.g.fa();this.C<e.length&&(xi(this),nu(this,t,e),this.i&&t!=4&&bn(this))}};function Cd(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ri:(n=Number(e.substring(n,i)),isNaN(n)?Is:(i+=1,i+n>e.length?ri:(e=e.substr(i,n),t.C=i+n,e)))}w.cancel=function(){this.I=!0,nt(this)};function bn(t){t.V=Date.now()+t.O,iu(t,t.O)}function iu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=In(he(t.gb,t),e)}function xi(t){t.B&&(A.clearTimeout(t.B),t.B=null)}w.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Sd(this.j,this.A),this.K!=2&&(on(),ge(17)),nt(this),this.o=2,Xt(this)):iu(this,this.V-t)};function Xt(t){t.l.G==0||t.I||bu(t.l,t)}function nt(t){xi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,fr(t.T),Ka(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function As(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bs(n.h,t))){if(!t.J&&bs(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ui(n),Li(n);else break e;Sr(n),ge(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=In(he(n.cb,n),6e3));if(1>=hu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else it(n,11)}else if((t.J||n.g==t)&&ui(n),!ii(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const l=c[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(i=1.5*g,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=t.g;if(m){const T=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=i.h;r.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(wr(r,r.h),r.h=null))}if(i.D){const N=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(i.za=N,B(i.F,i.D,N))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Nu(i,i.H?i.ka:null,i.V),o.J){du(i.h,o);var a=o,u=i.J;u&&a.setTimeout(u),a.B&&(xi(a),bn(a)),i.g=o}else Su(i);0<n.i.length&&Fi(n)}else c[0]!="stop"&&c[0]!="close"||it(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?it(n,7):Ir(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}on(4)}catch{}}function Dd(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ii(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Nd(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ii(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function su(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ii(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Nd(t),i=Dd(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _d(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function rt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rt){this.h=e!==void 0?e:t.h,oi(this,t.j),this.s=t.s,this.g=t.g,ai(this,t.m),this.l=t.l,e=t.i;var n=new an;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Mo(this,n),this.o=t.o}else t&&(n=String(t).match(ru))?(this.h=!!e,oi(this,n[1]||"",!0),this.s=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),ai(this,n[4]),this.l=Wt(n[5]||"",!0),Mo(this,n[6]||"",!0),this.o=Wt(n[7]||"")):(this.h=!!e,this.i=new an(null,this.h))}rt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qt(e,Ro,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qt(e,Ro,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qt(n,n.charAt(0)=="/"?Md:xd,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qt(n,Od)),t.join("")};function Ve(t){return new rt(t)}function oi(t,e,n){t.j=n?Wt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ai(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mo(t,e,n){e instanceof an?(t.i=e,Ld(t.i,t.h)):(n||(e=qt(e,Rd)),t.i=new an(e,t.h))}function B(t,e,n){t.i.set(e,n)}function Mi(t){return B(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ro=/[#\/\?@]/g,xd=/[#\?:]/g,Md=/[#\?]/g,Rd=/[#\?@]/g,Od=/#/g;function an(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function et(t){t.g||(t.g=new Map,t.h=0,t.i&&_d(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}w=an.prototype;w.add=function(t,e){et(this),this.i=null,t=Ft(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ou(t,e){et(t),e=Ft(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function au(t,e){return et(t),e=Ft(t,e),t.g.has(e)}w.forEach=function(t,e){et(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};w.oa=function(){et(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};w.W=function(t){et(this);let e=[];if(typeof t=="string")au(this,t)&&(e=e.concat(this.g.get(Ft(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};w.set=function(t,e){return et(this),this.i=null,t=Ft(this,t),au(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};w.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function uu(t,e,n){ou(t,e),0<n.length&&(t.i=null,t.g.set(Ft(t,e),rr(n)),t.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Ft(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ld(t,e){e&&!t.j&&(et(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(ou(this,i),uu(this,s,n))},t)),t.j=e}var Fd=class{constructor(e,n){this.h=e,this.g=n}};function cu(t){this.l=t||Pd,A.PerformanceNavigationTiming?(t=A.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(A.g&&A.g.Ga&&A.g.Ga()&&A.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Pd=10;function lu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hu(t){return t.h?1:t.g?t.g.size:0}function bs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wr(t,e){t.g?t.g.add(e):t.h=e}function du(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cu.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return rr(t.i)}function vr(){}vr.prototype.stringify=function(t){return A.JSON.stringify(t,void 0)};vr.prototype.parse=function(t){return A.JSON.parse(t,void 0)};function Vd(){this.g=new vr}function Ud(t,e,n){const i=n||"";try{su(t,function(s,r){let o=s;En(s)&&(o=dr(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Bd(t,e){const n=new Di;if(A.Image){const i=new Image;i.onload=Vn(Bn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Vn(Bn,n,i,"TestLoadImage: error",!1,e),i.onabort=Vn(Bn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Vn(Bn,n,i,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Bn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Cn(t){this.l=t.ac||null,this.j=t.jb||!1}se(Cn,gr);Cn.prototype.g=function(){return new Ri(this.l,this.j)};Cn.prototype.i=function(t){return function(){return t}}({});function Ri(t,e){ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Er,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}se(Ri,ee);var Er=0;w=Ri.prototype;w.open=function(t,e){if(this.readyState!=Er)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,un(this)};w.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||A).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=Er};w.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function pu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}w.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):un(this),this.readyState==3&&pu(this)}};w.Va=function(t){this.g&&(this.response=this.responseText=t,Dn(this))};w.Ua=function(t){this.g&&(this.response=t,Dn(this))};w.ga=function(){this.g&&Dn(this)};function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,un(t)}w.setRequestHeader=function(t,e){this.v.append(t,e)};w.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Hd=A.JSON.parse;function W(t){ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gu,this.K=this.L=!1}se(W,ee);var gu="",$d=/^https?$/i,Gd=["POST","PUT"];w=W.prototype;w.Ka=function(t){this.L=t};w.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ts.g(),this.C=this.u?xo(this.u):xo(Ts),this.g.onreadystatechange=he(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Oo(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=A.FormData&&t instanceof A.FormData,!(0<=xa(Gd,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wu(this),0<this.B&&((this.K=Wd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=he(this.qa,this)):this.A=pr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Oo(this,r)}};function Wd(t){return bt&&ad()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}w.qa=function(){typeof sr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ie(this,"timeout"),this.abort(8))};function Oo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mu(t),Oi(t)}function mu(t){t.D||(t.D=!0,ie(t,"complete"),ie(t,"error"))}w.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ie(this,"complete"),ie(this,"abort"),Oi(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oi(this,!0)),W.X.M.call(this)};w.Ha=function(){this.s||(this.F||this.v||this.l?yu(this):this.fb())};w.fb=function(){yu(this)};function yu(t){if(t.h&&typeof sr<"u"&&(!t.C[1]||Le(t)!=4||t.aa()!=2)){if(t.v&&Le(t)==4)pr(t.Ha,0,t);else if(ie(t,"readystatechange"),Le(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(ru)[1]||null;if(!s&&A.self&&A.self.location){var r=A.self.location.protocol;s=r.substr(0,r.length-1)}i=!$d.test(s?s.toLowerCase():"")}n=i}if(n)ie(t,"complete"),ie(t,"success");else{t.m=6;try{var o=2<Le(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",mu(t)}}finally{Oi(t)}}}}function Oi(t,e){if(t.g){wu(t);const n=t.g,i=t.C[0]?ni:null;t.g=null,t.C=null,e||ie(t,"ready");try{n.onreadystatechange=i}catch{}}}function wu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(A.clearTimeout(t.A),t.A=null)}function Le(t){return t.g?t.g.readyState:0}w.aa=function(){try{return 2<Le(this)?this.g.status:-1}catch{return-1}};w.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Hd(e)}};function Lo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ea=function(){return this.m};w.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vu(t){let e="";return ar(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Tr(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=vu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):B(t,e,n))}function Gt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Eu(t){this.Ca=0,this.i=[],this.j=new Di,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gt("baseRetryDelayMs",5e3,t),this.bb=Gt("retryDelaySeedMs",1e4,t),this.$a=Gt("forwardChannelMaxRetries",2,t),this.ta=Gt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new cu(t&&t.concurrentRequestLimit),this.Fa=new Vd,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}w=Eu.prototype;w.ma=8;w.G=1;function Ir(t){if(Tu(t),t.G==3){var e=t.U++,n=Ve(t.F);B(n,"SID",t.I),B(n,"RID",e),B(n,"TYPE","terminate"),Nn(t,n),e=new An(t,t.j,e,void 0),e.K=2,e.v=Mi(Ve(n)),n=!1,A.navigator&&A.navigator.sendBeacon&&(n=A.navigator.sendBeacon(e.v.toString(),"")),!n&&A.Image&&(new Image().src=e.v,n=!0),n||(e.g=_u(e.l,null),e.g.da(e.v)),e.F=Date.now(),bn(e)}Du(t)}function Li(t){t.g&&(Ar(t),t.g.cancel(),t.g=null)}function Tu(t){Li(t),t.u&&(A.clearTimeout(t.u),t.u=null),ui(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&A.clearTimeout(t.m),t.m=null)}function Fi(t){lu(t.h)||t.m||(t.m=!0,Ga(t.Ja,t),t.C=0)}function qd(t,e){return hu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=In(he(t.Ja,t,e),Cu(t,t.C)),t.C++,!0)}w.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new An(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=La(r),Fa(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Iu(this,s,e),n=Ve(this.F),B(n,"RID",t),B(n,"CVER",22),this.D&&B(n,"X-HTTP-Session-Id",this.D),Nn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(vu(r)))+"&"+e:this.o&&Tr(n,this.o,r)),wr(this.h,s),this.Ya&&B(n,"TYPE","init"),this.O?(B(n,"$req",e),B(n,"SID","null"),s.Z=!0,Ss(s,n,null)):Ss(s,n,e),this.G=2}}else this.G==3&&(t?Fo(this,t):this.i.length==0||lu(this.h)||Fo(this))};function Fo(t,e){var n;e?n=e.m:n=t.U++;const i=Ve(t.F);B(i,"SID",t.I),B(i,"RID",n),B(i,"AID",t.T),Nn(t,i),t.o&&t.s&&Tr(i,t.o,t.s),n=new An(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Iu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),wr(t.h,n),Ss(n,i,e)}function Nn(t,e){t.ia&&ar(t.ia,function(n,i){B(e,i,n)}),t.l&&su({},function(n,i){B(e,i,n)})}function Iu(t,e,n){n=Math.min(t.i.length,n);var i=t.l?he(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let c=s[u].h;const l=s[u].g;if(c-=r,0>c)r=Math.max(0,s[u].h-100),a=!1;else try{Ud(l,o,"req"+c+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Su(t){t.g||t.u||(t.Z=1,Ga(t.Ia,t),t.A=0)}function Sr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=In(he(t.Ia,t),Cu(t,t.A)),t.A++,!0)}w.Ia=function(){if(this.u=null,Au(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=In(he(this.eb,this),t)}};w.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ge(10),Li(this),Au(this))};function Ar(t){t.B!=null&&(A.clearTimeout(t.B),t.B=null)}function Au(t){t.g=new An(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ve(t.sa);B(e,"RID","rpc"),B(e,"SID",t.I),B(e,"CI",t.L?"0":"1"),B(e,"AID",t.T),B(e,"TYPE","xmlhttp"),Nn(t,e),t.o&&t.s&&Tr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Mi(Ve(e)),n.s=null,n.P=!0,eu(n,t)}w.cb=function(){this.v!=null&&(this.v=null,Li(this),Sr(this),ge(19))};function ui(t){t.v!=null&&(A.clearTimeout(t.v),t.v=null)}function bu(t,e){var n=null;if(t.g==e){ui(t),Ar(t),t.g=null;var i=2}else if(bs(t.h,e))n=e.D,du(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Ni(),ie(i,new Ya(i,n)),Fi(t)}else Su(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&qd(t,e)||i==2&&Sr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:it(t,5);break;case 4:it(t,10);break;case 3:it(t,6);break;default:it(t,2)}}}function Cu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function it(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=he(t.kb,t);n||(n=new rt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||oi(n,"https"),Mi(n)),Bd(n.toString(),i)}else ge(2);t.G=0,t.l&&t.l.va(e),Du(t),Tu(t)}w.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ge(2)):(this.j.info("Failed to ping google.com"),ge(1))};function Du(t){if(t.G=0,t.la=[],t.l){const e=fu(t.h);(e.length!=0||t.i.length!=0)&&(bo(t.la,e),bo(t.la,t.i),t.h.i.length=0,rr(t.i),t.i.length=0),t.l.ua()}}function Nu(t,e,n){var i=n instanceof rt?Ve(n):new rt(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),ai(i,i.m);else{var s=A.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new rt(null,void 0);i&&oi(r,i),e&&(r.g=e),s&&ai(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&B(i,n,e),B(i,"VER",t.ma),Nn(t,i),i}function _u(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new W(new Cn({jb:!0})):new W(t.ra),e.Ka(t.H),e}function ku(){}w=ku.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Ra=function(){};function ci(){if(bt&&!(10<=Number(ud)))throw Error("Environmental error: no available transport.")}ci.prototype.g=function(t,e){return new Se(t,e)};function Se(t,e){ee.call(this),this.g=new Eu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ii(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pt(this)}se(Se,ee);Se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ge(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Nu(t,null,t.V),Fi(t)};Se.prototype.close=function(){Ir(this.g)};Se.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=dr(t),t=n);e.i.push(new Fd(e.ab++,t)),e.G==3&&Fi(e)};Se.prototype.M=function(){this.g.l=null,delete this.j,Ir(this.g),delete this.g,Se.X.M.call(this)};function xu(t){mr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}se(xu,mr);function Mu(){yr.call(this),this.status=1}se(Mu,yr);function Pt(t){this.g=t}se(Pt,ku);Pt.prototype.xa=function(){ie(this.g,"a")};Pt.prototype.wa=function(t){ie(this.g,new xu(t))};Pt.prototype.va=function(t){ie(this.g,new Mu)};Pt.prototype.ua=function(){ie(this.g,"b")};ci.prototype.createWebChannel=ci.prototype.g;Se.prototype.send=Se.prototype.u;Se.prototype.open=Se.prototype.m;Se.prototype.close=Se.prototype.close;_i.NO_ERROR=0;_i.TIMEOUT=8;_i.HTTP_ERROR=6;Xa.COMPLETE="complete";Ja.EventType=Sn;Sn.OPEN="a";Sn.CLOSE="b";Sn.ERROR="c";Sn.MESSAGE="d";ee.prototype.listen=ee.prototype.N;W.prototype.listenOnce=W.prototype.O;W.prototype.getLastError=W.prototype.Oa;W.prototype.getLastErrorCode=W.prototype.Ea;W.prototype.getStatus=W.prototype.aa;W.prototype.getResponseJson=W.prototype.Sa;W.prototype.getResponseText=W.prototype.fa;W.prototype.send=W.prototype.da;W.prototype.setWithCredentials=W.prototype.Ka;var jd=function(){return new ci},Kd=function(){return Ni()},os=_i,zd=Xa,Qd=dt,Po={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Yd=Cn,Hn=Ja,Xd=W;const Vo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new ba("@firebase/firestore");function Uo(){return lt.logLevel}function v(t,...e){if(lt.logLevel<=R.DEBUG){const n=e.map(br);lt.debug(`Firestore (${Vt}): ${t}`,...n)}}function Ue(t,...e){if(lt.logLevel<=R.ERROR){const n=e.map(br);lt.error(`Firestore (${Vt}): ${t}`,...n)}}function Cs(t,...e){if(lt.logLevel<=R.WARN){const n=e.map(br);lt.warn(`Firestore (${Vt}): ${t}`,...n)}}function br(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t="Unexpected state"){const e=`FIRESTORE (${Vt}) INTERNAL ASSERTION FAILED: `+t;throw Ue(e),new Error(e)}function P(t,e){t||I()}function D(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ue.UNAUTHENTICATED))}shutdown(){}}class Zd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ef{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let r=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ze,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ze)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(P(typeof i.accessToken=="string"),new Ru(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return P(e===null||typeof e=="string"),new ue(e)}}class tf{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(P(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nf{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new tf(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rf{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(P(typeof n.token=="string"),this.A=n.token,new sf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=of(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function O(t,e){return t<e?-1:t>e?1:0}function Ct(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Y(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new Y(0,0))}static max(){return new b(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n,i){n===void 0?n=0:n>e.length&&I(),i===void 0?i=e.length-n:i>e.length-n&&I(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class U extends cn{construct(e,n,i){return new U(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new U(n)}static emptyPath(){return new U([])}}const af=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends cn{construct(e,n,i){return new le(e,n,i)}static isValidIdentifier(e){return af.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(n)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(U.fromString(e))}static fromName(e){return new E(U.fromString(e).popFirst(5))}static empty(){return new E(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&U.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return U.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new U(e.slice()))}}function uf(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=b.fromTimestamp(i===1e9?new Y(n+1,0):new Y(n,i));return new Ye(s,E.empty(),e)}function cf(t){return new Ye(t.readTime,t.key,-1)}class Ye{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ye(b.min(),E.empty(),-1)}static max(){return new Ye(b.max(),E.empty(),-1)}}function lf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=E.comparator(t.documentKey,e.documentKey),n!==0?n:O(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class df{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==hf)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,i)=>{n(e)})}static reject(e){return new p((n,i)=>{i(e)})}static waitFor(e){return new p((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},u=>i(u))}),o=!0,r===s&&n()})}static or(e){let n=p.resolve(!1);for(const i of e)n=n.next(s=>s?p.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new p((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;n(e[c]).next(l=>{o[c]=l,++a,a===r&&i(o)},l=>s(l))}})}static doWhile(e,n){return new p((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function kn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ut(i),this.ct=i=>n.writeSequenceNumber(i))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Cr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,i,s,r,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class ln{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ln&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ut(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Lu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){return t==null}function li(t){return t===0&&1/t==-1/0}function pf(t){return typeof t=="number"&&Number.isInteger(t)&&!li(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw s instanceof DOMException?new gf("Invalid base64 string: "+s):s}}(e);return new fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const mf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xe(t){if(P(!!t),typeof t=="string"){let e=0;const n=mf.exec(t);if(P(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:z(t.seconds),nanos:z(t.nanos)}}function z(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dt(t){return typeof t=="string"?fe.fromBase64String(t):fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pu(t){const e=t.mapValue.fields.__previous_value__;return Fu(e)?Pu(e):e}function hn(t){const e=Xe(t.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ht(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fu(t)?4:yf(t)?9007199254740991:10:I()}function Re(t,e){if(t===e)return!0;const n=ht(t);if(n!==ht(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hn(t).isEqual(hn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Xe(i.timestampValue),o=Xe(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Dt(i.bytesValue).isEqual(Dt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return z(i.geoPointValue.latitude)===z(s.geoPointValue.latitude)&&z(i.geoPointValue.longitude)===z(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return z(i.integerValue)===z(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=z(i.doubleValue),o=z(s.doubleValue);return r===o?li(r)===li(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ct(t.arrayValue.values||[],e.arrayValue.values||[],Re);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Bo(r)!==Bo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Re(r[a],o[a])))return!1;return!0}(t,e);default:return I()}}function dn(t,e){return(t.values||[]).find(n=>Re(n,e))!==void 0}function Nt(t,e){if(t===e)return 0;const n=ht(t),i=ht(e);if(n!==i)return O(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=z(s.integerValue||s.doubleValue),a=z(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ho(t.timestampValue,e.timestampValue);case 4:return Ho(hn(t),hn(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Dt(s),a=Dt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=O(o[u],a[u]);if(c!==0)return c}return O(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=O(z(s.latitude),z(r.latitude));return o!==0?o:O(z(s.longitude),z(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Nt(o[u],a[u]);if(c)return c}return O(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===$n.mapValue&&r===$n.mapValue)return 0;if(s===$n.mapValue)return 1;if(r===$n.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=O(a[l],c[l]);if(h!==0)return h;const g=Nt(o[a[l]],u[c[l]]);if(g!==0)return g}return O(a.length,c.length)}(t.mapValue,e.mapValue);default:throw I()}}function Ho(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=Xe(t),i=Xe(e),s=O(n.seconds,i.seconds);return s!==0?s:O(n.nanos,i.nanos)}function _t(t){return Ds(t)}function Ds(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Xe(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Dt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,E.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Ds(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Ds(i.fields[a])}`;return r+"}"}(t.mapValue):I();var e,n}function $o(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ns(t){return!!t&&"integerValue"in t}function Dr(t){return!!t&&"arrayValue"in t}function Go(t){return!!t&&"nullValue"in t}function Wo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wn(t){return!!t&&"mapValue"in t}function Jt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ut(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Jt(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yf(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.position=e,this.inclusive=n}}function qo(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=E.comparator(E.fromName(o.referenceValue),n.key):i=Nt(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function jo(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Re(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{}class Q extends Vu{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new vf(e,n,i):n==="array-contains"?new If(e,i):n==="in"?new Sf(e,i):n==="not-in"?new Af(e,i):n==="array-contains-any"?new bf(e,i):new Q(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Ef(e,i):new Tf(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Nt(n,this.value)):n!==null&&ht(this.value)===ht(n)&&this.matchesComparison(Nt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class De extends Vu{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new De(e,n)}matches(e){return Uu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Uu(t){return t.op==="and"}function Bu(t){return wf(t)&&Uu(t)}function wf(t){for(const e of t.filters)if(e instanceof De)return!1;return!0}function _s(t){if(t instanceof Q)return t.field.canonicalString()+t.op.toString()+_t(t.value);if(Bu(t))return t.filters.map(e=>_s(e)).join(",");{const e=t.filters.map(n=>_s(n)).join(",");return`${t.op}(${e})`}}function Hu(t,e){return t instanceof Q?function(n,i){return i instanceof Q&&n.op===i.op&&n.field.isEqual(i.field)&&Re(n.value,i.value)}(t,e):t instanceof De?function(n,i){return i instanceof De&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&Hu(r,i.filters[o]),!0):!1}(t,e):void I()}function $u(t){return t instanceof Q?function(e){return`${e.field.canonicalString()} ${e.op} ${_t(e.value)}`}(t):t instanceof De?function(e){return e.op.toString()+" {"+e.getFilters().map($u).join(" ,")+"}"}(t):"Filter"}class vf extends Q{constructor(e,n,i){super(e,n,i),this.key=E.fromName(i.referenceValue)}matches(e){const n=E.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ef extends Q{constructor(e,n){super(e,"in",n),this.keys=Gu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tf extends Q{constructor(e,n){super(e,"not-in",n),this.keys=Gu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>E.fromName(i.referenceValue))}class If extends Q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dr(n)&&dn(n.arrayValue,this.value)}}class Sf extends Q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&dn(this.value.arrayValue,n)}}class Af extends Q{constructor(e,n){super(e,"not-in",n)}matches(e){if(dn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!dn(this.value.arrayValue,n)}}class bf extends Q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>dn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cf(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.comparator=e,this.root=n||ne.EMPTY}insert(e,n){return new J(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gn(this.root,e,this.comparator,!0)}}class Gn{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ne{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??ne.RED,this.left=s??ne.EMPTY,this.right=r??ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new ne(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ne.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,e,n,i,s){return this}insert(t,e,n){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ko(this.data.getIterator())}getIteratorFrom(e){return new Ko(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof X)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new X(this.comparator);return n.data=e,n}}class Ko{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new Ce([])}unionWith(e){let n=new X(le.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Ce(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ct(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Wn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jt(n)}setAll(e){let n=le.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Jt(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Wn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Re(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Wn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Ut(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Ae(Jt(this.value))}}function Wu(t){const e=[];return Ut(t.fields,(n,i)=>{const s=new le([n]);if(Wn(i)){const r=Wu(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Ce(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ce(e,0,b.min(),b.min(),b.min(),Ae.empty(),0)}static newFoundDocument(e,n,i,s){return new ce(e,1,n,b.min(),i,s,0)}static newNoDocument(e,n){return new ce(e,2,n,b.min(),b.min(),Ae.empty(),0)}static newUnknownDocument(e,n){return new ce(e,3,n,b.min(),b.min(),Ae.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function zo(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Df(t,e,n,i,s,r,o)}function Nr(t){const e=D(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>_s(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Pi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>_t(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>_t(i)).join(",")),e._t=n}return e._t}function _r(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cf(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Hu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jo(t.startAt,e.startAt)&&jo(t.endAt,e.endAt)}function ks(t){return E.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Nf(t,e,n,i,s,r,o,a){return new Bt(t,e,n,i,s,r,o,a)}function kr(t){return new Bt(t)}function Qo(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function qu(t){return t.collectionGroup!==null}function It(t){const e=D(t);if(e.wt===null){e.wt=[];const n=Vi(e),i=xr(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new Tt(n)),e.wt.push(new Tt(le.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Tt(le.keyField(),r))}}}return e.wt}function Be(t){const e=D(t);if(!e.gt)if(e.limitType==="F")e.gt=zo(e.path,e.collectionGroup,It(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of It(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Tt(r.field,o))}const i=e.endAt?new hi(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new hi(e.startAt.position,e.startAt.inclusive):null;e.gt=zo(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.gt}function xs(t,e){e.getFirstInequalityField(),Vi(t);const n=t.filters.concat([e]);return new Bt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function di(t,e,n){return new Bt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ui(t,e){return _r(Be(t),Be(e))&&t.limitType===e.limitType}function ju(t){return`${Nr(Be(t))}|lt:${t.limitType}`}function Ms(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>$u(i)).join(", ")}]`),Pi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>_t(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>_t(i)).join(",")),`Target(${n})`}(Be(t))}; limitType=${t.limitType})`}function Bi(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):E.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of It(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=qo(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,It(n),i)||n.endAt&&!function(s,r,o){const a=qo(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,It(n),i))}(t,e)}function _f(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ku(t){return(e,n)=>{let i=!1;for(const s of It(t)){const r=kf(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function kf(t,e,n){const i=t.field.isKeyField()?E.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),u=o.data.field(s);return a!==null&&u!==null?Nt(a,u):I()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:li(e)?"-0":e}}function Qu(t){return{integerValue:""+t}}function xf(t,e){return pf(e)?Qu(e):zu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this._=void 0}}function Mf(t,e,n){return t instanceof fi?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof fn?Xu(t,e):t instanceof pn?Ju(t,e):function(i,s){const r=Yu(i,s),o=Yo(r)+Yo(i.It);return Ns(r)&&Ns(i.It)?Qu(o):zu(i.Tt,o)}(t,e)}function Rf(t,e,n){return t instanceof fn?Xu(t,e):t instanceof pn?Ju(t,e):n}function Yu(t,e){return t instanceof pi?Ns(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class fi extends Hi{}class fn extends Hi{constructor(e){super(),this.elements=e}}function Xu(t,e){const n=Zu(e);for(const i of t.elements)n.some(s=>Re(s,i))||n.push(i);return{arrayValue:{values:n}}}class pn extends Hi{constructor(e){super(),this.elements=e}}function Ju(t,e){let n=Zu(e);for(const i of t.elements)n=n.filter(s=>!Re(s,i));return{arrayValue:{values:n}}}class pi extends Hi{constructor(e,n){super(),this.Tt=e,this.It=n}}function Yo(t){return z(t.integerValue||t.doubleValue)}function Zu(t){return Dr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Of(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof fn&&i instanceof fn||n instanceof pn&&i instanceof pn?Ct(n.elements,i.elements,Re):n instanceof pi&&i instanceof pi?Re(n.It,i.It):n instanceof fi&&i instanceof fi}(t.transform,e.transform)}class Lf{constructor(e,n){this.version=e,this.transformResults=n}}class Fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $i{}function ec(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nc(t.key,Fe.none()):new xn(t.key,t.data,Fe.none());{const n=t.data,i=Ae.empty();let s=new X(le.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ft(t.key,i,new Ce(s.toArray()),Fe.none())}}function Ff(t,e,n){t instanceof xn?function(i,s,r){const o=i.value.clone(),a=Jo(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ft?function(i,s,r){if(!qn(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Jo(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(tc(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Zt(t,e,n,i){return t instanceof xn?function(s,r,o,a){if(!qn(s.precondition,r))return o;const u=s.value.clone(),c=Zo(s.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof ft?function(s,r,o,a){if(!qn(s.precondition,r))return o;const u=Zo(s.fieldTransforms,a,r),c=r.data;return c.setAll(tc(s)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,i):function(s,r,o){return qn(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Pf(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=Yu(i.transform,s||null);r!=null&&(n===null&&(n=Ae.empty()),n.set(i.field,r))}return n||null}function Xo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ct(n,i,(s,r)=>Of(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xn extends $i{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ft extends $i{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function tc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Jo(t,e,n){const i=new Map;P(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Rf(o,a,n[s]))}return i}function Zo(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,Mf(r,o,e))}return i}class nc extends $i{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vf extends $i{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,k;function Bf(t){switch(t){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ic(t){if(t===void 0)return Ue("GRPC error has no .code"),f.UNKNOWN;switch(t){case j.OK:return f.OK;case j.CANCELLED:return f.CANCELLED;case j.UNKNOWN:return f.UNKNOWN;case j.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case j.INTERNAL:return f.INTERNAL;case j.UNAVAILABLE:return f.UNAVAILABLE;case j.UNAUTHENTICATED:return f.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case j.NOT_FOUND:return f.NOT_FOUND;case j.ALREADY_EXISTS:return f.ALREADY_EXISTS;case j.PERMISSION_DENIED:return f.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case j.ABORTED:return f.ABORTED;case j.OUT_OF_RANGE:return f.OUT_OF_RANGE;case j.UNIMPLEMENTED:return f.UNIMPLEMENTED;case j.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(k=j||(j={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ut(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Lu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new J(E.comparator);function He(){return Hf}const sc=new J(E.comparator);function jt(...t){let e=sc;for(const n of t)e=e.insert(n.key,n);return e}function rc(t){let e=sc;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function st(){return en()}function oc(){return en()}function en(){return new Ht(t=>t.toString(),(t,e)=>t.isEqual(e))}const $f=new J(E.comparator),Gf=new X(E.comparator);function _(...t){let e=Gf;for(const n of t)e=e.add(n);return e}const Wf=new X(O);function ac(){return Wf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Mn.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Gi(b.min(),s,ac(),He(),_())}}class Mn{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Mn(i,n,_(),_(),_())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,i,s){this.Et=e,this.removedTargetIds=n,this.key=i,this.At=s}}class uc{constructor(e,n){this.targetId=e,this.Rt=n}}class cc{constructor(e,n,i=fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class ea{constructor(){this.bt=0,this.vt=na(),this.Pt=fe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=_(),n=_(),i=_();return this.vt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:I()}}),new Mn(this.Pt,this.Vt,e,n,i)}kt(){this.St=!1,this.vt=na()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class qf{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=He(),this.Kt=ta(),this.Gt=new X(O)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const i=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&i.xt(e.resumeToken);break;case 1:i.$t(),i.Dt||i.kt(),i.xt(e.resumeToken);break;case 2:i.$t(),i.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(i.Bt(),i.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),i.xt(e.resumeToken));break;default:I()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((i,s)=>{this.Jt(s)&&n(s)})}Zt(e){const n=e.targetId,i=e.Rt.count,s=this.Xt(n);if(s){const r=s.target;if(ks(r))if(i===0){const o=new E(r.path);this.zt(n,o,ce.newNoDocument(o,b.min()))}else P(i===1);else this.te(n)!==i&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&ks(a.target)){const u=new E(a.target.path);this.Ut.get(u)!==null||this.ne(o,u)||this.zt(o,u,ce.newNoDocument(u,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let i=_();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Xt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const s=new Gi(e,n,this.Gt,this.Ut,i);return this.Ut=He(),this.Kt=ta(),this.Gt=new X(O),s}jt(e,n){if(!this.Jt(e))return;const i=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,i),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,i){if(!this.Jt(e))return;const s=this.Ht(e);this.ne(e,n)?s.Ot(n,1):s.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),i&&(this.Ut=this.Ut.insert(n,i))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new ea,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new X(O),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new ea),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function ta(){return new J(E.comparator)}function na(){return new J(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Kf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zf=(()=>({and:"AND",or:"OR"}))();class Qf{constructor(e,n){this.databaseId=e,this.yt=n}}function gi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lc(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Yf(t,e){return gi(t,e.toTimestamp())}function Me(t){return P(!!t),b.fromTimestamp(function(e){const n=Xe(e);return new Y(n.seconds,n.nanos)}(t))}function Mr(t,e){return function(n){return new U(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function hc(t){const e=U.fromString(t);return P(gc(e)),e}function Rs(t,e){return Mr(t.databaseId,e.path)}function as(t,e){const n=hc(e);if(n.get(1)!==t.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new E(dc(n))}function Os(t,e){return Mr(t.databaseId,e)}function Xf(t){const e=hc(t);return e.length===4?U.emptyPath():dc(e)}function Ls(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dc(t){return P(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ia(t,e,n){return{name:Rs(t,e),fields:n.value.mapValue.fields}}function Jf(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,c){return u.yt?(P(c===void 0||typeof c=="string"),fe.fromBase64String(c||"")):(P(c===void 0||c instanceof Uint8Array),fe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?f.UNKNOWN:ic(u.code);return new y(c,u.message||"")}(o);n=new cc(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=as(t,i.document.name),r=Me(i.document.updateTime),o=i.document.createTime?Me(i.document.createTime):b.min(),a=new Ae({mapValue:{fields:i.document.fields}}),u=ce.newFoundDocument(s,r,o,a),c=i.targetIds||[],l=i.removedTargetIds||[];n=new jn(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=as(t,i.document),r=i.readTime?Me(i.readTime):b.min(),o=ce.newNoDocument(s,r),a=i.removedTargetIds||[];n=new jn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=as(t,i.document),r=i.removedTargetIds||[];n=new jn([],r,s,null)}else{if(!("filter"in e))return I();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new Uf(s),o=i.targetId;n=new uc(o,r)}}return n}function Zf(t,e){let n;if(e instanceof xn)n={update:ia(t,e.key,e.value)};else if(e instanceof nc)n={delete:Rs(t,e.key)};else if(e instanceof ft)n={update:ia(t,e.key,e.data),updateMask:up(e.fieldMask)};else{if(!(e instanceof Vf))return I();n={verify:Rs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof fi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pi)return{fieldPath:r.field.canonicalString(),increment:o.It};throw I()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Yf(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:I()}(t,e.precondition)),n}function ep(t,e){return t&&t.length>0?(P(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Me(i.updateTime):Me(s);return r.isEqual(b.min())&&(r=Me(s)),new Lf(r,i.transformResults||[])}(n,e))):[]}function tp(t,e){return{documents:[Os(t,e.path)]}}function np(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Os(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Os(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(u){if(u.length!==0)return pc(De.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:yt(l.field),direction:rp(l.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,c){return u.yt||Pi(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function ip(t){let e=Xf(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){P(i===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=fc(l);return h instanceof De&&Bu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Tt(wt(h.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Pi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,g=l.values||[];return new hi(g,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,g=l.values||[];return new hi(g,h)}(n.endAt)),Nf(e,s,o,r,a,"F",u,c)}function sp(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function fc(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=wt(e.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=wt(e.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wt(e.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=wt(e.unaryFilter.field);return Q.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(t):t.fieldFilter!==void 0?function(e){return Q.create(wt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return De.create(e.compositeFilter.filters.map(n=>fc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(e.compositeFilter.op))}(t):I()}function rp(t){return jf[t]}function op(t){return Kf[t]}function ap(t){return zf[t]}function yt(t){return{fieldPath:t.canonicalString()}}function wt(t){return le.fromServerFormat(t.fieldPath)}function pc(t){return t instanceof Q?function(e){if(e.op==="=="){if(Wo(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NAN"}};if(Go(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wo(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NOT_NAN"}};if(Go(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yt(e.field),op:op(e.op),value:e.value}}}(t):t instanceof De?function(e){const n=e.getFilters().map(i=>pc(i));return n.length===1?n[0]:{compositeFilter:{op:ap(e.op),filters:n}}}(t):I()}function up(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Ff(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Zt(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Zt(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=oc();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const u=ec(o,a);u!==null&&i.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(b.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_())}isEqual(e){return this.batchId===e.batchId&&Ct(this.mutations,e.mutations,(n,i)=>Xo(n,i))&&Ct(this.baseMutations,e.baseMutations,(n,i)=>Xo(n,i))}}class Rr{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){P(e.mutations.length===i.length);let s=$f;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Rr(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,i,s,r=b.min(),o=b.min(),a=fe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.oe=e}}function dp(t){const e=ip({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?di(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.Ze=new pp}addToCollectionParentIndex(e,n){return this.Ze.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getIndexType(e,n){return p.resolve(0)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,n){return p.resolve(Ye.min())}getMinOffsetFromCollectionGroup(e,n){return p.resolve(Ye.min())}updateCollectionGroup(e,n,i){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class pp{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new X(U.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new X(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new kt(0)}static Sn(){return new kt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.changes=new Ht(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?p.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Zt(i.mutation,s,Ce.empty(),Y.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,_()).next(()=>i))}getLocalViewOfDocuments(e,n,i=_()){const s=st();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=jt();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=st();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,_()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=He();const o=en(),a=en();return n.forEach((u,c)=>{const l=i.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof ft)?r=r.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Zt(l.mutation,c,l.mutation.getFieldMask(),Y.now())):o.set(c.key,Ce.empty())}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new mp(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=en();let s=new J((o,a)=>o-a),r=_();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=i.get(u)||Ce.empty();l=a.applyToLocalView(c,l),i.set(u,l);const h=(s.get(a.batchId)||_()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=oc();l.forEach(g=>{if(!r.has(g)){const m=ec(n.get(g),i.get(g));m!==null&&h.set(g,m),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return p.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return E.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):p.resolve(st());let a=-1,u=r;return o.next(c=>p.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(g=>{u=u.insert(l,g)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,u,c,_())).next(l=>({batchId:a,changes:rc(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new E(n)).next(i=>{let s=jt();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=jt();return this.indexManager.getCollectionParents(e,s).next(o=>p.forEach(o,a=>{const u=function(c,l){return new Bt(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,i).next(c=>{c.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,ce.newInvalidDocument(c)))});let o=jt();return r.forEach((a,u)=>{const c=s.get(a);c!==void 0&&Zt(c.mutation,u,Ce.empty(),Y.now()),Bi(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return p.resolve(this.es.get(n))}saveBundleMetadata(e,n){var i;return this.es.set(n.id,{id:(i=n).id,version:i.version,createTime:Me(i.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(i){return{name:i.name,query:dp(i.bundledQuery),readTime:Me(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.overlays=new J(E.comparator),this.ss=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}getOverlays(e,n){const i=st();return p.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.ce(e,n,r)}),p.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ss.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(i)),p.resolve()}getOverlaysForCollection(e,n,i){const s=st(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return p.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new J((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let l=r.get(c.largestBatchId);l===null&&(l=st(),r=r.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=st(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return p.resolve(a)}ce(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ss.get(s.largestBatchId).delete(i.key);this.ss.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new lp(n,i));let r=this.ss.get(n);r===void 0&&(r=_(),this.ss.set(n,r)),this.ss.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.rs=new X(Z.os),this.us=new X(Z.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const i=new Z(e,n);this.rs=this.rs.add(i),this.us=this.us.add(i)}hs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ls(new Z(e,n))}fs(e,n){e.forEach(i=>this.removeReference(i,n))}ds(e){const n=new E(new U([])),i=new Z(n,e),s=new Z(n,e+1),r=[];return this.us.forEachInRange([i,s],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new E(new U([])),i=new Z(n,e),s=new Z(n,e+1);let r=_();return this.us.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Z(e,0),i=this.rs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Z{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return E.comparator(e.key,n.key)||O(e.gs,n.gs)}static cs(e,n){return O(e.gs,n.gs)||E.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new X(Z.os)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cp(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.ps=this.ps.add(new Z(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Ts(i),r=s<0?0:s;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Z(n,0),s=new Z(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([i,s],o=>{const a=this.Is(o.gs);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new X(O);return n.forEach(s=>{const r=new Z(s,0),o=new Z(s,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{i=i.add(a.gs)})}),p.resolve(this.Es(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;E.isDocumentKey(r)||(r=r.child(""));const o=new Z(new E(r),0);let a=new X(O);return this.ps.forEachWhile(u=>{const c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.gs)),!0)},o),p.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(i=>{const s=this.Is(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){P(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ps;return p.forEach(n.mutations,s=>{const r=new Z(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ps=i})}bn(e){}containsKey(e,n){const i=new Z(n,0),s=this.ps.firstAfterOrEqual(i);return p.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this.Rs=e,this.docs=new J(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Rs(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return p.resolve(i?i.document.mutableCopy():ce.newInvalidDocument(n))}getEntries(e,n){let i=He();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ce.newInvalidDocument(s))}),p.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=He();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lf(cf(l),i)<=0||(s.has(l.key)||Bi(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(e,n,i,s){I()}bs(e,n){return p.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new Ip(this)}getSize(e){return p.resolve(this.size)}}class Ip extends gp{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Xn.addEntry(e,s)):this.Xn.removeEntry(i)}),p.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.persistence=e,this.vs=new Ht(n=>Nr(n),_r),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Or,this.targetCount=0,this.Ss=kt.Vn()}forEachTarget(e,n){return this.vs.forEach((i,s)=>n(s)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ps&&(this.Ps=n),p.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new kt(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.xn(n),p.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),p.waitFor(r).next(()=>s)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const i=this.vs.get(n)||null;return p.resolve(i)}addMatchingKeys(e,n,i){return this.Vs.hs(n,i),p.resolve()}removeMatchingKeys(e,n,i){this.Vs.fs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),p.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Vs.ws(n);return p.resolve(i)}containsKey(e,n){return p.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Cr(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Sp(this),this.indexManager=new fp,this.remoteDocumentCache=function(i){return new Tp(i)}(i=>this.referenceDelegate.ks(i)),this.Tt=new hp(n),this.Os=new wp(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vp,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ds[e.toKey()];return i||(i=new Ep(n,this.referenceDelegate),this.Ds[e.toKey()]=i),i}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,i){v("MemoryPersistence","Starting transaction:",e);const s=new bp(this.Cs.next());return this.referenceDelegate.Ms(),i(s).next(r=>this.referenceDelegate.Fs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}$s(e,n){return p.or(Object.values(this.Ds).map(i=>()=>i.containsKey(e,n)))}}class bp extends df{constructor(e){super(),this.currentSequenceNumber=e}}class Lr{constructor(e){this.persistence=e,this.Bs=new Or,this.Ls=null}static qs(e){return new Lr(e)}get Us(){if(this.Ls)return this.Ls;throw I()}addReference(e,n,i){return this.Bs.addReference(i,n),this.Us.delete(i.toString()),p.resolve()}removeReference(e,n,i){return this.Bs.removeReference(i,n),this.Us.add(i.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),p.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(s=>this.Us.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Us.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Us,i=>{const s=E.fromPath(i);return this.Ks(e,s).next(r=>{r||n.removeEntry(s,b.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(i=>{i?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return p.or([()=>p.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Ci=i,this.xi=s}static Ni(e,n){let i=_(),s=_();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Fr(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Mi(e,n).next(r=>r||this.Fi(e,n,s,i)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Qo(n))return p.resolve(null);let i=Be(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=di(n,null,"F"),i=Be(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=_(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(u=>{const c=this.Bi(n,a);return this.Li(n,c,o,u.readTime)?this.Mi(e,di(n,null,"F")):this.qi(e,c,n,u)}))})))}Fi(e,n,i,s){return Qo(n)||s.isEqual(b.min())?this.$i(e,n):this.Oi.getDocuments(e,i).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,i,s)?this.$i(e,n):(Uo()<=R.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ms(n)),this.qi(e,o,n,uf(s,-1)))})}Bi(e,n){let i=new X(Ku(e));return n.forEach((s,r)=>{Bi(e,r)&&(i=i.add(r))}),i}Li(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}$i(e,n){return Uo()<=R.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ms(n)),this.Oi.getDocumentsMatchingQuery(e,n,Ye.min())}qi(e,n,i,s){return this.Oi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,i,s){this.persistence=e,this.Ui=n,this.Tt=s,this.Ki=new J(O),this.Gi=new Ht(r=>Nr(r),_r),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(i)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yp(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Np(t,e,n,i){return new Dp(t,e,n,i)}async function mc(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.zi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let u=_();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of r){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(i,u).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function _p(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let g=p.resolve();return h.forEach(m=>{g=g.next(()=>c.getEntry(a,m)).next(T=>{const N=u.docVersions.get(m);P(N!==null),T.version.compareTo(N)<0&&(l.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),c.addEntry(T)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=_();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function yc(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function kp(t,e){const n=D(t),i=e.snapshotVersion;let s=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});s=n.Ki;const a=[];e.targetChanges.forEach((l,h)=>{const g=s.get(h);if(!g)return;a.push(n.Ns.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,l.addedDocuments,h)));let m=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(fe.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,i)),s=s.insert(h,m),function(T,N,L){return T.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,m,l)&&a.push(n.Ns.updateTargetData(r,m))});let u=He(),c=_();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(xp(r,o,e.documentUpdates).next(l=>{u=l.Hi,c=l.Ji})),!i.isEqual(b.min())){const l=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(l)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(n.Ki=s,r))}function xp(t,e,n){let i=_(),s=_();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=He();return n.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(b.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Hi:o,Ji:s}})}function Mp(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Rp(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ns.getTargetData(i,e).next(r=>r?(s=r,p.resolve(s)):n.Ns.allocateTargetId(i).next(o=>(s=new ot(e,o,0,i.currentSequenceNumber),n.Ns.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ki.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(i.targetId,i),n.Gi.set(e,i.targetId)),i})}async function Fs(t,e,n){const i=D(t),s=i.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!kn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ki=i.Ki.remove(e),i.Gi.delete(s.target)}function sa(t,e,n){const i=D(t);let s=b.min(),r=_();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=D(a),h=l.Gi.get(c);return h!==void 0?p.resolve(l.Ki.get(h)):l.Ns.getTargetData(u,c)}(i,o,Be(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ns.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>i.Ui.getDocumentsMatchingQuery(o,e,n?s:b.min(),n?r:_())).next(a=>(Op(i,_f(e),a),{documents:a,Yi:r})))}function Op(t,e,n){let i=t.Qi.get(e)||b.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Qi.set(e,i)}class ra{constructor(){this.activeTargetIds=ac()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lp{constructor(){this.Ur=new ra,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,i){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new ra,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,i,s,r){const o=this.fo(e,n);v("RestConnection","Sending: ",o,i);const a={};return this._o(a,s,r),this.wo(e,o,a,i).then(u=>(v("RestConnection","Received: ",u),u),u=>{throw Cs("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",i),u})}mo(e,n,i,s,r,o){return this.lo(e,n,i,s,r)}_o(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}fo(e,n){const i=Pp[e];return`${this.co}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,i,s){return new Promise((r,o)=>{const a=new Xd;a.setWithCredentials(!0),a.listenOnce(zd.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case os.NO_ERROR:const c=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(c)),r(c);break;case os.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case os.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const g=h==null?void 0:h.error;if(g&&g.status&&g.message){const m=function(T){const N=T.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(N)>=0?N:f.UNKNOWN}(g.status);o(new y(m,g.message))}else o(new y(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(s);a.send(n,"POST",u,i,15)})}yo(e,n,i){const s=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=jd(),o=Kd(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Yd({})),this._o(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const u=s.join("");v("Connection","Creating WebChannel: "+u,a);const c=r.createWebChannel(u,a);let l=!1,h=!1;const g=new Vp({Yr:T=>{h?v("Connection","Not sending because WebChannel is closed:",T):(l||(v("Connection","Opening WebChannel transport."),c.open(),l=!0),v("Connection","WebChannel sending:",T),c.send(T))},Zr:()=>c.close()}),m=(T,N,L)=>{T.listen(N,me=>{try{L(me)}catch(re){setTimeout(()=>{throw re},0)}})};return m(c,Hn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),m(c,Hn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),g.oo())}),m(c,Hn.EventType.ERROR,T=>{h||(h=!0,Cs("Connection","WebChannel transport errored:",T),g.oo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),m(c,Hn.EventType.MESSAGE,T=>{var N;if(!h){const L=T.data[0];P(!!L);const me=L,re=me.error||((N=me[0])===null||N===void 0?void 0:N.error);if(re){v("Connection","WebChannel received error:",re);const Fn=re.status;let mt=function(Tl){const mo=j[Tl];if(mo!==void 0)return ic(mo)}(Fn),Pn=re.message;mt===void 0&&(mt=f.INTERNAL,Pn="Unknown error status: "+Fn+" with message "+re.message),h=!0,g.oo(new y(mt,Pn)),c.close()}else v("Connection","WebChannel received:",L),g.uo(L)}}),m(o,Qd.STAT_EVENT,T=>{T.stat===Po.PROXY?v("Connection","Detected buffering proxy"):T.stat===Po.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.ro()},0),g}}function us(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){return new Qf(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=i,this.Io=s,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),i=Math.max(0,Date.now()-this.Ro),s=Math.max(0,n-i);s>0&&v("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,i,s,r,o,a,u){this.Ys=e,this.So=i,this.Do=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new wc(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Ue(n.toString()),Ue("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Co===n&&this.jo(i,s)},i=>{e(()=>{const s=new y(f.UNKNOWN,"Fetching auth token failed: "+i.message);return this.zo(s)})})}jo(e,n){const i=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{i(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(s=>{i(()=>this.zo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bp extends vc{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Jf(this.Tt,e),i=function(s){if(!("targetChange"in s))return b.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?b.min():r.readTime?Me(r.readTime):b.min()}(e);return this.listener.Ho(n,i)}Jo(e){const n={};n.database=Ls(this.Tt),n.addTarget=function(s,r){let o;const a=r.target;return o=ks(a)?{documents:tp(s,a)}:{query:np(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=lc(s,r.resumeToken):r.snapshotVersion.compareTo(b.min())>0&&(o.readTime=gi(s,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const i=sp(this.Tt,e);i&&(n.labels=i),this.qo(n)}Yo(e){const n={};n.database=Ls(this.Tt),n.removeTarget=e,this.qo(n)}}class Hp extends vc{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(P(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=ep(e.writeResults,e.commitTime),i=Me(e.commitTime);return this.listener.eu(i,n)}return P(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Ls(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Zf(this.Tt,i))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.Tt=s,this.iu=!1}ru(){if(this.iu)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.lo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}mo(e,n,i,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Gp{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Ue(n),this.cu=!1):v("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{i.enqueueAndForget(async()=>{pt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=D(a);u.mu.add(4),await Rn(u),u.pu.set("Unknown"),u.mu.delete(4),await qi(u)}(this))})}),this.pu=new Gp(i,s)}}async function qi(t){if(pt(t))for(const e of t.gu)await e(!0)}async function Rn(t){for(const e of t.gu)await e(!1)}function Ec(t,e){const n=D(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ur(n)?Vr(n):$t(n).Mo()&&Pr(n,e))}function Tc(t,e){const n=D(t),i=$t(n);n.wu.delete(e),i.Mo()&&Ic(n,e),n.wu.size===0&&(i.Mo()?i.Bo():pt(n)&&n.pu.set("Unknown"))}function Pr(t,e){t.Iu.Ft(e.targetId),$t(t).Jo(e)}function Ic(t,e){t.Iu.Ft(e),$t(t).Yo(e)}function Vr(t){t.Iu=new qf({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),$t(t).start(),t.pu.au()}function Ur(t){return pt(t)&&!$t(t).Oo()&&t.wu.size>0}function pt(t){return D(t).mu.size===0}function Sc(t){t.Iu=void 0}async function qp(t){t.wu.forEach((e,n)=>{Pr(t,e)})}async function jp(t,e){Sc(t),Ur(t)?(t.pu.fu(e),Vr(t)):t.pu.set("Unknown")}async function Kp(t,e,n){if(t.pu.set("Online"),e instanceof cc&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.wu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.wu.delete(o),i.Iu.removeTarget(o))}(t,e)}catch(i){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await mi(t,i)}else if(e instanceof jn?t.Iu.Qt(e):e instanceof uc?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(b.min()))try{const i=await yc(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Iu.ee(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.wu.get(u);c&&s.wu.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=s.wu.get(a);if(!u)return;s.wu.set(a,u.withResumeToken(fe.EMPTY_BYTE_STRING,u.snapshotVersion)),Ic(s,a);const c=new ot(u.target,a,1,u.sequenceNumber);Pr(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){v("RemoteStore","Failed to raise snapshot:",i),await mi(t,i)}}async function mi(t,e,n){if(!kn(e))throw e;t.mu.add(1),await Rn(t),t.pu.set("Offline"),n||(n=()=>yc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await qi(t)})}function Ac(t,e){return e().catch(n=>mi(t,n,e))}async function ji(t){const e=D(t),n=Je(e);let i=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;zp(e);)try{const s=await Mp(e.localStore,i);if(s===null){e._u.length===0&&n.Bo();break}i=s.batchId,Qp(e,s)}catch(s){await mi(e,s)}bc(e)&&Cc(e)}function zp(t){return pt(t)&&t._u.length<10}function Qp(t,e){t._u.push(e);const n=Je(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function bc(t){return pt(t)&&!Je(t).Oo()&&t._u.length>0}function Cc(t){Je(t).start()}async function Yp(t){Je(t).su()}async function Xp(t){const e=Je(t);for(const n of t._u)e.tu(n.mutations)}async function Jp(t,e,n){const i=t._u.shift(),s=Rr.from(i,e,n);await Ac(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ji(t)}async function Zp(t,e){e&&Je(t).Xo&&await async function(n,i){if(s=i.code,Bf(s)&&s!==f.ABORTED){const r=n._u.shift();Je(n).$o(),await Ac(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await ji(n)}var s}(t,e),bc(t)&&Cc(t)}async function aa(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const i=pt(n);n.mu.add(3),await Rn(n),i&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await qi(n)}async function eg(t,e){const n=D(t);e?(n.mu.delete(2),await qi(n)):e||(n.mu.add(2),await Rn(n),n.pu.set("Unknown"))}function $t(t){return t.Tu||(t.Tu=function(e,n,i){const s=D(e);return s.ru(),new Bp(n,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,i)}(t.datastore,t.asyncQueue,{Xr:qp.bind(null,t),no:jp.bind(null,t),Ho:Kp.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Ur(t)?Vr(t):t.pu.set("Unknown")):(await t.Tu.stop(),Sc(t))})),t.Tu}function Je(t){return t.Eu||(t.Eu=function(e,n,i){const s=D(e);return s.ru(),new Hp(n,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,i)}(t.datastore,t.asyncQueue,{Xr:Yp.bind(null,t),no:Zp.bind(null,t),nu:Xp.bind(null,t),eu:Jp.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await ji(t)):(await t.Eu.stop(),t._u.length>0&&(v("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Br(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hr(t,e){if(Ue("AsyncQueue",`${e}: ${t}`),kn(t))return new y(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e?(n,i)=>e(n,i)||E.comparator(n.key,i.key):(n,i)=>E.comparator(n.key,i.key),this.keyedMap=jt(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new St(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new St;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.Au=new J(E.comparator)}track(e){const n=e.doc.key,i=this.Au.get(n);i?e.type!==0&&i.type===3?this.Au=this.Au.insert(n,e):e.type===3&&i.type!==1?this.Au=this.Au.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Au=this.Au.remove(n):e.type===1&&i.type===2?this.Au=this.Au.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):I():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,i)=>{e.push(i)}),e}}class xt{constructor(e,n,i,s,r,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xt(e,n,St.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ui(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.bu=void 0,this.listeners=[]}}class ng{constructor(){this.queries=new Ht(e=>ju(e),Ui),this.onlineState="Unknown",this.vu=new Set}}async function Dc(t,e){const n=D(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new tg),s)try{r.bu=await n.onListen(i)}catch(o){const a=Hr(o,`Initialization of query '${Ms(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&$r(n)}async function Nc(t,e){const n=D(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function ig(t,e){const n=D(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(s)&&(i=!0);o.bu=s}}i&&$r(n)}function sg(t,e,n){const i=D(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function $r(t){t.vu.forEach(e=>{e.next()})}class _c{constructor(e,n,i){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=i||{}}Vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new xt(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Ou||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=xt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.key=e}}class xc{constructor(e){this.key=e}}class rg{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=_(),this.mutatedKeys=_(),this.ju=Ku(e),this.zu=new St(this.ju)}get Wu(){return this.Ku}Hu(e,n){const i=n?n.Ju:new ua,s=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const g=s.get(l),m=Bi(this.query,h)?h:null,T=!!g&&this.mutatedKeys.has(g.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let L=!1;g&&m?g.data.isEqual(m.data)?T!==N&&(i.track({type:3,doc:m}),L=!0):this.Yu(g,m)||(i.track({type:2,doc:m}),L=!0,(u&&this.ju(m,u)>0||c&&this.ju(m,c)<0)&&(a=!0)):!g&&m?(i.track({type:0,doc:m}),L=!0):g&&!m&&(i.track({type:1,doc:g}),L=!0,(u||c)&&(a=!0)),L&&(m?(o=o.add(m),r=N?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),i.track({type:1,doc:l})}return{zu:o,Ju:i,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,l)=>function(h,g){const m=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(h)-m(g)}(c.type,l.type)||this.ju(c.doc,l.doc)),this.Zu(i);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,u=a!==this.Gu;return this.Gu=a,r.length!==0||u?{snapshot:new xt(this.query,e.zu,s,r,e.mutatedKeys,a===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new ua,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=_(),this.zu.forEach(i=>{this.ec(i.key)&&(this.Qu=this.Qu.add(i.key))});const n=[];return e.forEach(i=>{this.Qu.has(i)||n.push(new xc(i))}),this.Qu.forEach(i=>{e.has(i)||n.push(new kc(i))}),n}nc(e){this.Ku=e.Yi,this.Qu=_();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return xt.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class og{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class ag{constructor(e){this.key=e,this.ic=!1}}class ug{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Ht(a=>ju(a),Ui),this.uc=new Map,this.cc=new Set,this.ac=new J(E.comparator),this.hc=new Map,this.lc=new Or,this.fc={},this.dc=new Map,this._c=kt.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function cg(t,e){const n=vg(t);let i,s;const r=n.oc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.sc();else{const o=await Rp(n.localStore,Be(e));n.isPrimaryClient&&Ec(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await lg(n,e,i,a==="current",o.resumeToken)}return s}async function lg(t,e,n,i,s){t.mc=(h,g,m)=>async function(T,N,L,me){let re=N.view.Hu(L);re.Li&&(re=await sa(T.localStore,N.query,!1).then(({documents:Pn})=>N.view.Hu(Pn,re)));const Fn=me&&me.targetChanges.get(N.targetId),mt=N.view.applyChanges(re,T.isPrimaryClient,Fn);return la(T,N.targetId,mt.tc),mt.snapshot}(t,h,g,m);const r=await sa(t.localStore,e,!0),o=new rg(e,r.Yi),a=o.Hu(r.documents),u=Mn.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);la(t,n,c.tc);const l=new og(e,n,o);return t.oc.set(e,l),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function hg(t,e){const n=D(t),i=n.oc.get(e),s=n.uc.get(i.targetId);if(s.length>1)return n.uc.set(i.targetId,s.filter(r=>!Ui(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Fs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Tc(n.remoteStore,i.targetId),Ps(n,i.targetId)}).catch(_n)):(Ps(n,i.targetId),await Fs(n.localStore,i.targetId,!0))}async function dg(t,e,n){const i=Eg(t);try{const s=await function(r,o){const a=D(r),u=Y.now(),c=o.reduce((g,m)=>g.add(m.key),_());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let m=He(),T=_();return a.ji.getEntries(g,c).next(N=>{m=N,m.forEach((L,me)=>{me.isValidDocument()||(T=T.add(L))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,m)).next(N=>{l=N;const L=[];for(const me of o){const re=Pf(me,l.get(me.key).overlayedDocument);re!=null&&L.push(new ft(me.key,re,Wu(re.value.mapValue),Fe.exists(!0)))}return a.mutationQueue.addMutationBatch(g,u,L,o)}).next(N=>{h=N;const L=N.applyToLocalDocumentSet(l,T);return a.documentOverlayCache.saveOverlays(g,N.batchId,L)})}).then(()=>({batchId:h.batchId,changes:rc(l)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let u=r.fc[r.currentUser.toKey()];u||(u=new J(O)),u=u.insert(o,a),r.fc[r.currentUser.toKey()]=u}(i,s.batchId,n),await On(i,s.changes),await ji(i.remoteStore)}catch(s){const r=Hr(s,"Failed to persist write");n.reject(r)}}async function Mc(t,e){const n=D(t);try{const i=await kp(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.hc.get(r);o&&(P(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ic=!0:s.modifiedDocuments.size>0?P(o.ic):s.removedDocuments.size>0&&(P(o.ic),o.ic=!1))}),await On(n,i,e)}catch(i){await _n(i)}}function ca(t,e,n){const i=D(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Pu(o)&&(u=!0)}),u&&$r(a)}(i.eventManager,e),s.length&&i.rc.Ho(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function fg(t,e,n){const i=D(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.hc.get(e),r=s&&s.key;if(r){let o=new J(E.comparator);o=o.insert(r,ce.newNoDocument(r,b.min()));const a=_().add(r),u=new Gi(b.min(),new Map,new X(O),o,a);await Mc(i,u),i.ac=i.ac.remove(r),i.hc.delete(e),Gr(i)}else await Fs(i.localStore,e,!1).then(()=>Ps(i,e,n)).catch(_n)}async function pg(t,e){const n=D(t),i=e.batch.batchId;try{const s=await _p(n.localStore,e);Oc(n,i,null),Rc(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await On(n,s)}catch(s){await _n(s)}}async function gg(t,e,n){const i=D(t);try{const s=await function(r,o){const a=D(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(P(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(i.localStore,e);Oc(i,e,n),Rc(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await On(i,s)}catch(s){await _n(s)}}function Rc(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Oc(t,e,n){const i=D(t);let s=i.fc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.fc[i.currentUser.toKey()]=s}}function Ps(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.uc.get(e))t.oc.delete(i),n&&t.rc.gc(i,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(i=>{t.lc.containsKey(i)||Lc(t,i)})}function Lc(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Tc(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Gr(t))}function la(t,e,n){for(const i of n)i instanceof kc?(t.lc.addReference(i.key,e),mg(t,i)):i instanceof xc?(v("SyncEngine","Document no longer in limbo: "+i.key),t.lc.removeReference(i.key,e),t.lc.containsKey(i.key)||Lc(t,i.key)):I()}function mg(t,e){const n=e.key,i=n.path.canonicalString();t.ac.get(n)||t.cc.has(i)||(v("SyncEngine","New document in limbo: "+n),t.cc.add(i),Gr(t))}function Gr(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new E(U.fromString(e)),i=t._c.next();t.hc.set(i,new ag(n)),t.ac=t.ac.insert(n,i),Ec(t.remoteStore,new ot(Be(kr(n.path)),i,2,Cr.at))}}async function On(t,e,n){const i=D(t),s=[],r=[],o=[];i.oc.isEmpty()||(i.oc.forEach((a,u)=>{o.push(i.mc(u,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const l=Fr.Ni(u.targetId,c);r.push(l)}}))}),await Promise.all(o),i.rc.Ho(s),await async function(a,u){const c=D(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(u,h=>p.forEach(h.Ci,g=>c.persistence.referenceDelegate.addReference(l,h.targetId,g)).next(()=>p.forEach(h.xi,g=>c.persistence.referenceDelegate.removeReference(l,h.targetId,g)))))}catch(l){if(!kn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const g=c.Ki.get(h),m=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(m);c.Ki=c.Ki.insert(h,T)}}}(i.localStore,r))}async function yg(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const i=await mc(n.localStore,e);n.currentUser=e,function(s,r){s.dc.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,r))})}),s.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await On(n,i.Wi)}}function wg(t,e){const n=D(t),i=n.hc.get(e);if(i&&i.ic)return _().add(i.key);{let s=_();const r=n.uc.get(e);if(!r)return s;for(const o of r){const a=n.oc.get(o);s=s.unionWith(a.view.Wu)}return s}}function vg(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fg.bind(null,e),e.rc.Ho=ig.bind(null,e.eventManager),e.rc.gc=sg.bind(null,e.eventManager),e}function Eg(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gg.bind(null,e),e}class Tg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Wi(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Np(this.persistence,new Cp,e.initialUser,this.Tt)}Tc(e){return new Ap(Lr.qs,this.Tt)}Ic(e){return new Lp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ig{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ca(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yg.bind(null,this.syncEngine),await eg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ng}createDatastore(e){const n=Wi(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new Up(s));var s;return function(r,o,a,u){return new $p(r,o,a,u)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>ca(this.syncEngine,a,0),o=oa.C()?new oa:new Fp,new Wp(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,u,c){const l=new ug(i,s,r,o,a,u);return c&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=D(e);v("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Rn(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Ue("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ue.UNAUTHENTICATED,this.clientId=Ou.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Hr(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ag(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await mc(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function bg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Cg(t);v("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>aa(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>aa(e.remoteStore,r)),t.onlineComponents=e}async function Cg(t){return t.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Ag(t,new Tg)),t.offlineComponents}async function Pc(t){return t.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await bg(t,new Ig)),t.onlineComponents}function Dg(t){return Pc(t).then(e=>e.syncEngine)}async function Vs(t){const e=await Pc(t),n=e.eventManager;return n.onListen=cg.bind(null,e.syncEngine),n.onUnlisten=hg.bind(null,e.syncEngine),n}function Ng(t,e,n={}){const i=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,u){const c=new Fc({next:h=>{r.enqueueAndForget(()=>Nc(s,l)),h.fromCache&&a.source==="server"?u.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new _c(o,c,{includeMetadataChanges:!0,Ou:!0});return Dc(s,l)}(await Vs(t),t.asyncQueue,e,n,i)),i.promise}const ha=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t,e,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _g(t,e,n,i){if(e===!0&&i===!0)throw new y(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function da(t){if(!E.isDocumentKey(t))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fa(t){if(E.isDocumentKey(t))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ki(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":I()}function at(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ki(t);throw new y(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function kg(t,e){if(e<=0)throw new y(f.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_g("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pa(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Jd;switch(n.type){case"gapi":const i=n.client;return new nf(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ha.get(e);n&&(v("ComponentProvider","Removing Datastore"),ha.delete(e),n.terminate())}(this),Promise.resolve()}}function xg(t,e,n,i={}){var s;const r=(t=at(t,zi))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Cs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=ue.MOCK_USER;else{o=Ol(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ue(u)}t._authCredentials=new Zd(new Ru(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}}class $e{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new $e(this.firestore,e,this._query)}}class Qe extends $e{constructor(e,n,i){super(e,n,kr(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new E(e))}withConverter(e){return new Qe(this.firestore,e,this._path)}}function Wr(t,e,...n){if(t=ut(t),Vc("collection","path",e),t instanceof zi){const i=U.fromString(e,...n);return fa(i),new Qe(t,null,i)}{if(!(t instanceof Ie||t instanceof Qe))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(U.fromString(e,...n));return fa(i),new Qe(t.firestore,null,i)}}function Mg(t,e,...n){if(t=ut(t),arguments.length===1&&(e=Ou.R()),Vc("doc","path",e),t instanceof zi){const i=U.fromString(e,...n);return da(i),new Ie(t,null,new E(i))}{if(!(t instanceof Ie||t instanceof Qe))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(U.fromString(e,...n));return da(i),new Ie(t.firestore,t instanceof Qe?t.converter:null,new E(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new wc(this,"async_queue_retry"),this.Hc=()=>{const n=us();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=us();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=us();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new ze;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!kn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(i=>{this.Qc=i,this.jc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ue("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.jc=!1,i))));return this.qc=n,n}enqueueAfterDelay(e,n,i){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const s=Br.createAndSchedule(this,e,n,i,r=>this.Xc(r));return this.Gc.push(s),s}Jc(){this.Qc&&I()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function ga(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class gn extends zi{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Rg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Uc(this),this._firestoreClient.terminate()}}function Og(t,e){const n=typeof t=="object"?t:Vh(),i=typeof t=="string"?t:e||"(default)",s=Oh(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=xl("firestore");r&&xg(s,...r)}return s}function qr(t){return t._firestoreClient||Uc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uc(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new ff(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Sg(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(fe.fromBase64String(e))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=/^__.*__$/;class Fg{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ft(e,this.data,this.fieldMask,n,this.fieldTransforms):new xn(e,this.data,n,this.fieldTransforms)}}function Hc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class zr{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.Tt=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new zr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.oa({path:i,ca:!1});return s.aa(e),s}ha(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.oa({path:i,ca:!1});return s.ia(),s}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return yi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Hc(this.ra)&&Lg.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Pg{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=i||Wi(e)}wa(e,n,i,s=!1){return new zr({ra:e,methodName:n,_a:i,path:le.emptyPath(),ca:!1,da:s},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function $c(t){const e=t._freezeSettings(),n=Wi(t._databaseId);return new Pg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vg(t,e,n,i,s,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,s);qc("Data must be an object, but it was:",o,i);const a=Gc(i,o);let u,c;if(r.merge)u=new Ce(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const g=Bg(e,h,n);if(!o.contains(g))throw new y(f.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);$g(l,g)||l.push(g)}u=new Ce(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Fg(new Ae(a),u,c)}function Ug(t,e,n,i=!1){return Qr(n,t.wa(i?4:3,e))}function Qr(t,e){if(Wc(t=ut(t)))return qc("Unsupported field value:",e,t),Gc(t,e);if(t instanceof Bc)return function(n,i){if(!Hc(i.ra))throw i.fa(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.fa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Qr(o,i.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xf(i.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Y.fromDate(n);return{timestampValue:gi(i.Tt,s)}}if(n instanceof Y){const s=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:gi(i.Tt,s)}}if(n instanceof Kr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mt)return{bytesValue:lc(i.Tt,n._byteString)};if(n instanceof Ie){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mr(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.fa(`Unsupported field value: ${Ki(n)}`)}(t,e)}function Gc(t,e){const n={};return Lu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ut(t,(i,s)=>{const r=Qr(s,e.ua(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Wc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Y||t instanceof Kr||t instanceof Mt||t instanceof Ie||t instanceof Bc)}function qc(t,e,n){if(!Wc(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Ki(n);throw i==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+i)}}function Bg(t,e,n){if((e=ut(e))instanceof jr)return e._internalPath;if(typeof e=="string")return jc(t,e);throw yi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hg=new RegExp("[~\\*/\\[\\]]");function jc(t,e,n){if(e.search(Hg)>=0)throw yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jr(...e.split("."))._internalPath}catch{throw yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yi(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${i}`),o&&(u+=` in document ${s}`),u+=")"),new y(f.INVALID_ARGUMENT,a+t+u)}function $g(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Gg extends Kc{data(){return super.data()}}function Yr(t,e){return typeof e=="string"?jc(t,e):e instanceof jr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xr{}class Jr extends Xr{}function Wg(t,e,...n){let i=[];e instanceof Xr&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof eo).length,o=s.filter(a=>a instanceof Zr).length;if(r>1||r>0&&o>0)throw new y(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Zr extends Jr{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Zr(e,n,i)}_apply(e){const n=this._parse(e);return Qc(e._query,n),new $e(e.firestore,e.converter,xs(e._query,n))}_parse(e){const n=$c(e.firestore);return function(s,r,o,a,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ya(l,c);const g=[];for(const m of l)g.push(ma(a,s,m));h={arrayValue:{values:g}}}else h=ma(a,s,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ya(l,c),h=Ug(o,r,l,c==="in"||c==="not-in");return Q.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class eo extends Xr{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new eo(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:De.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)Qc(r,a),r=xs(r,a)}(e._query,n),new $e(e.firestore,e.converter,xs(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class to extends Jr{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new to(e,n)}_apply(e){const n=function(i,s,r){if(i.startAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Tt(s,r);return function(a,u){if(xr(a)===null){const c=Vi(a);c!==null&&Yc(a,c,u.field)}}(i,o),o}(e._query,this._field,this._direction);return new $e(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new Bt(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function qg(t,e="asc"){const n=e,i=Yr("orderBy",t);return to._create(i,n)}class no extends Jr{constructor(e,n,i){super(),this.type=e,this._limit=n,this._limitType=i}static _create(e,n,i){return new no(e,n,i)}_apply(e){return new $e(e.firestore,e.converter,di(e._query,this._limit,this._limitType))}}function jg(t){return kg("limit",t),no._create("limit",t,"F")}function ma(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qu(e)&&n.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(U.fromString(n));if(!E.isDocumentKey(i))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return $o(t,new E(i))}if(n instanceof Ie)return $o(t,n._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ki(n)}.`)}function ya(t,e){if(!Array.isArray(t)||t.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qc(t,e){if(e.isInequality()){const i=Vi(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=xr(t);r!==null&&Yc(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Yc(t,e,n){if(!n.isEqual(e))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Kg{convertValue(e,n="none"){switch(ht(e)){case 0:return null;case 1:return e.booleanValue;case 2:return z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw I()}}convertObject(e,n){const i={};return Ut(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Kr(z(e.latitude),z(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Pu(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(hn(e));default:return null}}convertTimestamp(e){const n=Xe(e);return new Y(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=U.fromString(e);P(gc(i));const s=new ln(i.get(1),i.get(3)),r=new E(i.popFirst(5));return s.isEqual(n)||Ue(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xc extends Kc{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Yr("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Kn extends Xc{data(e={}){return super.data(e)}}class Jc{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Kt(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Kn(this._firestore,this._userDataWriter,i.key,i,new Kt(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Kn(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Kt(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Kn(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Kt(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Qg(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Qg(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}class io extends Kg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,n)}}function Yg(t){t=at(t,$e);const e=at(t.firestore,gn),n=qr(e),i=new io(e);return zc(t._query),Ng(n,t._query).then(s=>new Jc(e,i,t,s))}function Xg(t,e){const n=at(t.firestore,gn),i=Mg(t),s=zg(t.converter,e);return Zg(n,[Vg($c(t.firestore),"addDoc",i._key,s,t.converter!==null,{}).toMutation(i._key,Fe.exists(!1))]).then(()=>i)}function Jg(t,...e){var n,i,s;t=ut(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ga(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ga(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,c,l;if(t instanceof Ie)c=at(t.firestore,gn),l=kr(t._key.path),u={next:h=>{e[o]&&e[o](em(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=at(t,$e);c=at(h.firestore,gn),l=h._query;const g=new io(c);u={next:m=>{e[o]&&e[o](new Jc(c,g,h,m))},error:e[o+1],complete:e[o+2]},zc(t._query)}return function(h,g,m,T){const N=new Fc(T),L=new _c(g,N,m);return h.asyncQueue.enqueueAndForget(async()=>Dc(await Vs(h),L)),()=>{N.Pc(),h.asyncQueue.enqueueAndForget(async()=>Nc(await Vs(h),L))}}(qr(c),l,a,u)}function Zg(t,e){return function(n,i){const s=new ze;return n.asyncQueue.enqueueAndForget(async()=>dg(await Dg(n),i,s)),s.promise}(qr(t),e)}function em(t,e,n){const i=n.docs.get(e._key),s=new io(t);return new Xc(t,s,e._key,i,new Kt(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Vt=n})(Ph),ti(new tn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new gn(new ef(n.getProvider("auth-internal")),new rf(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(a.options.projectId,u)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Et(Vo,"3.8.4",t),Et(Vo,"3.8.4","esm2017")})();const tm={apiKey:"AIzaSyCTX1d5j_PhFYCmfOJeWREeo9bVurJM9KQ",authDomain:"finalgame-d1901.firebaseapp.com",projectId:"finalgame-d1901",storageBucket:"finalgame-d1901.appspot.com",messagingSenderId:"713369379883",appId:"1:713369379883:web:9f486572415a15c167766e"},nm=Na(tm),so=Og(nm);function im(){try{const t=Xg(Wr(so,"players"),{username:Ne.value(),score:mn})}catch(t){console.error(t)}}async function Zc(){const t=Wg(Wr(so,"players"),qg("score","desc"),jg(5)),e=await Yg(t),n={allScores:[]};e.forEach(i=>{n.allScores.push(i.data())}),_e&&(_e.html("Leaderboard"),n.allScores.forEach(({username:i,score:s})=>{let r=createDiv("");r.style("text-align","left"),r.style("display","flex"),r.style("padding-top",windowHeight/40+"px"),r.style("font-size",windowWidth/60+"px");let o=createDiv("Username: "+i);o.size(windowWidth/3,windowHeight/40);let a=createDiv("Score: "+s);a.size(windowWidth/6,windowHeight/40),r.child(o),r.child(a),_e.child(r)}))}Jg(Wr(so,"players"),t=>{Zc()},t=>{console.error(t)});let Ne,_e,We,ro,oo,ao,uo,zt,el,tl,ye,we,ve,Ee,d,xe,mn,H,At,x,S,be,Oe,Te,M,$,G,V,oe,ae,C,co,Rt,K,lo,F,wi,vi,Us,Bs,yn,te,q,Ei,Ti,Ln,ho,fo,po,go,Pe,qe,Hs,$s,Gs,Qt,wn,Ws,qs,js,Ks,zs,Qs,Ys,Xs,Js,Zs,nl,il,sl,rl,ol,al,ul,cl,ll,er,hl,dl,fl,pl,zn,Qn,Yn,Xn,gl,ml,yl,wl,vl,Ge,Ot,Yt,Jn,tr,nr,pe,wa={0:["Add a Fireball","Fire burn through enemies dealing massive damage!"],1:["Add an Earthwall","Indestructible earth surround you, preventing enemies from getting near you. Enemies hit are permanently slowed."],2:["Increase Speed","Move faster to dodge and weave past enemies."],3:["Increase Health","More health makes you able to take more damage for longer and increase your vision."],4:["Increase Defense","Bolster your armor and take less damage from enemies."],5:["Power up your Airball","Enemies won't know when it's coming, but when it does, it's too late."],6:["Increase Sun Damage","Shadows try to avoid the sun as much as possible, as it does massive damage."],7:["Power up your Waterfield","Surround yourself in an endless whirlpool that slows enemies in the tide."]};p5.disableFriendlyErrors=!0;window.preload=()=>{wl=loadAnimation("images/left1.png"),vl=loadAnimation("images/right1.png"),Js=loadAnimation("images/right2.png",3),Js.frameDelay=12,Zs=loadAnimation("images/left2.png",3),Zs.frameDelay=12,il=loadAnimation("images/enemy2.png"),nl=loadAnimation("images/enemy.png"),rl=loadAnimation("images/shootenemy2.png"),sl=loadAnimation("images/shootenemy.png"),al=loadAnimation("images/runenemy2.png"),ol=loadAnimation("images/runenemy.png"),ul=loadAnimation("images/boss2.png"),cl=loadAnimation("images/boss.png"),ll=loadAnimation("images/fire.png"),er=loadAnimation("images/water1.png",9),er.frameDelay=8,hl=loadAnimation("images/air.png"),dl=loadAnimation("images/earth.png"),fl=loadAnimation("images/sun.png"),pl=loadAnimation("images/shadoworb.png"),zn=loadAnimation("images/sword2.png"),Qn=loadAnimation("images/sword.png"),Yn=loadAnimation("images/sword3.png"),Xn=loadAnimation("images/sword4.png"),gl=loadAnimation("images/bomb.png"),ml=loadAnimation("images/health.png"),yl=loadAnimation("images/experience.png");let t=Math.ceil(Math.random()*3);soundFormats("mp3"),Pe=loadSound("music/background"+t+".mp3"),qe=loadSound("music/boss.mp3"),Yt=loadSound("music/lose"),Hs=loadSound("music/bomb"),$s=loadSound("music/health"),Gs=loadSound("music/experience"),wn=loadSound("music/selectability"),Qt=loadSound("music/sunorb"),qs=loadSound("music/water"),js=loadSound("music/fireballs"),Ks=loadSound("music/air"),zs=loadSound("music/earth"),Qs=loadSound("music/speed"),Ys=loadSound("music/healthincrease"),Xs=loadSound("music/defense"),Ws=loadSound("music/sun")};window.setup=()=>{El()};function El(){for(noSmooth(),pe=createButton("Pause"),pe.style("border-radius",windowWidth/220+"px"),pe.style("font-size",windowWidth/120+"px"),pe.style("border","none"),pe.size(windowWidth/20,windowHeight/30),pe.position(windowWidth/60,windowHeight/20+10),pe.mousePressed(()=>{Jn?(pe.html("Pause"),vn(),loop(),Pe.setVolume(.005),qe.setVolume(.02),Jn=!1):(pe.html("Play"),noLoop(),clearInterval(Ot),Jn=!0,Pe.setVolume(.001),qe.setVolume(.001))}),d=new Sprite(windowWidth/2,windowHeight/2,20,40),vn(),om(),um(),cm(),rm(),createCanvas(windowWidth,windowHeight);H.length<30;)new H.Sprite,H.x=()=>Math.random()*windowWidth,H.y=()=>Math.random()*windowHeight;lm(),sm();let t=Math.ceil(Math.random()*4);zt=loadImage("images/tile"+t+".jpeg"),el=loadImage("images/mouse.png"),tl=loadImage("images/wasd.png")}function sm(){Pe.play(),Pe.loop(),Pe.setVolume(.025),userStartAudio()}function rm(){S.addAnimation("ENEMYLEFTIMG",nl),S.addAnimation("ENEMYRIGHTIMG",il),be.addAnimation("SHOOTENEMYLEFTIMG",sl),be.addAnimation("SHOOTENEMYRIGHTIMG",rl),Oe.addAnimation("FASTENEMYLEFTIMG",ol),Oe.addAnimation("FASTENEMYRIGHTIMG",al),Te.addAnimation("BOSSLEFTIMG",cl),Te.addAnimation("BOSSRIGHTIMG",ul),te.addAnimation("WATERIMG",er),d.addAnimation("right",Js),d.addAnimation("left",Zs),d.addAnimation("PLAYERSTANDRIGHTIMG",vl),d.addAnimation("PLAYERSTANDLEFTIMG",wl),F.addAnimation("AIRIMG",hl),K.addAnimation("EARTHIMG",dl),q.addAnimation("FIREIMG",ll),G.addAnimation("SHADOWORBIMG",pl),$.addAnimation("ORBIMG",fl),V.addAnimation("SWORDIMG_L",zn),zn.offset.x=-45,zn.offset.y=-45,V.addAnimation("SWORDIMG_R",Qn),Qn.offset.x=45,Qn.offset.y=45,V.addAnimation("SWORDIMG_U",Yn),Yn.offset.x=45,Yn.offset.y=-45,V.addAnimation("SWORDIMG_D",Xn),Xn.offset.x=-45,Xn.offset.y=45,ae.addAnimation("HEALTHIMG",ml),oe.addAnimation("BOMBIMG",gl),H.addAnimation("EXPIMG",yl)}function om(){tr=d.x,nr=d.y,We=!1,ro=!1,oo=!1,ao=!1,Ge="right",Jn=!1,ye=0,we=0,ve=windowWidth,Ee=windowHeight,xe=100,Rt=100,mn=0,x=10,At=1,M=1,C=3.25,co=840,uo=1040,lo=!1,wi=!1,Us=1,Bs=1,yn=!1,Ei=!1,Ti=0,Ln=1,ho=320,fo=4,po=1450,go=520,vi=15}function am(){noLoop(),pe.attribute("disabled",""),clearInterval(Ot),fill(0,0,0,180),rect(0,0,windowWidth,windowHeight);let t=["Select a sun orb that you can use to shoot enemies from afar","Select a sun sword that allows you to slash through multiple enemies at close range"],e=["Select Sun Orb","Select Sun Sword"];for(let n=0;n<2;n++){let i=createButton(t[n]);i.style("border-radius",windowWidth/80+"px"),i.style("background-image","radial-gradient(#FFD654 21%, #FFF054 80%)"),i.style("color","#373737"),i.style("font-size",windowWidth/50+"px"),i.style("border",windowWidth/200+"px solid black"),i.size(windowWidth/4,2*windowHeight/3),i.position(n*windowWidth/3+windowWidth/26+windowWidth/6,windowHeight/5);let s=createButton(e[n]);s.style("border-radius",windowWidth/120+"px"),s.style("background-color","white"),s.style("border","1px solid"),s.size(windowWidth/10,windowHeight/15),s.position(n*windowWidth/3+3*windowWidth/26+windowWidth/6,4*windowHeight/5-20),s.attribute=e[n],s.mousePressed(()=>{ro=!0,s.attribute==="Select Sun Orb"?oo=!0:s.attribute==="Select Sun Sword"&&(ao=!0),vn(),loop(),pe.removeAttribute("disabled");let r=selectAll("button");for(let o=1;o<r.length;o++)r[o].remove()})}}function um(){oe=new Group,K=new Group,ae=new Group,$=new Group,G=new Group,V=new Group,F=new Group,te=new Group,S=new Group,be=new S.Group,Oe=new S.Group,Te=new S.Group,H=new Group,q=new Group}function cm(){d.collider="kinematic",V.collider="kinematic",d.rotationLock=!0,F.x=d.x,F.y=d.y,S.rotationLock=!0}function lm(){d.overlaps(H,hm),S.colliding(d,va),d.overlaps($),d.overlaps(oe,dm),d.overlaps(ae,fm),d.overlaps(K),d.overlaps(q),d.overlaps(te),d.overlaps(F),d.overlaps(V),G.collides(d,pm),Te.collides(d,gm),Te.colliding(d,va),H.overlaps(H),H.overlaps($),H.overlaps(S),H.overlaps(oe),H.overlaps(ae),H.overlaps(K),H.overlaps(F),H.overlaps(te),H.overlaps(q),H.overlaps(V),H.overlaps(G),S.collides(S),S.overlaps(oe),S.overlaps(ae),q.overlapping(S,wm),K.collides(S,Tm),F.overlaps(S,Em),te.overlapping(S,vm),$.collides(S,mm),V.collides(S,ym),S.overlaps(G),$.overlaps($),$.overlaps(oe),$.overlaps(ae),$.overlaps(K),$.overlaps(F),$.overlaps(te),$.overlaps(q),oe.overlaps(oe),oe.overlaps(ae),oe.overlaps(K),oe.overlaps(F),oe.overlaps(te),oe.overlaps(q),ae.overlaps(ae),ae.overlaps(K),ae.overlaps(F),ae.overlaps(te),ae.overlaps(q),K.overlaps(K),K.overlaps(F),K.overlaps(te),K.overlaps(q),F.overlaps(te),F.overlaps(q),te.overlaps(q),q.overlaps(q),V.overlaps($),V.overlaps(V),V.overlaps(oe),V.overlaps(ae),V.overlaps(K),V.overlaps(F),V.overlaps(te),V.overlaps(q),G.overlaps(G),G.overlaps($),G.overlaps(V),G.overlaps(oe),G.overlaps(ae),G.overlaps(K),G.overlaps(F),G.overlaps(te),G.overlaps(q)}function vn(){Ot=setInterval(function(){M+=1},1e3)}function hm(t,e){Gs.play(),Gs.setVolume(.05),e.remove(),x+=1,Sm()}function dm(t,e){Hs.play(),Hs.setVolume(.25),fill(255,255,255,160),rect(0,0,windowWidth,windowHeight),e.remove();for(let n=0;n<S.length;n++)Im(e,S[n])}function fm(t,e){$s.play(),$s.setVolume(.25),e.remove(),xe=Rt}function va(t){xe-=Ln*M/1500,fill(255,0,0,25),rect(0,0,windowWidth,windowHeight)}function pm(t){xe-=Ln*M/100,t.remove(),fill(255,0,0,25),rect(0,0,windowWidth,windowHeight)}function gm(t){xe-=Ln*M/220,fill(255,0,0,100),rect(0,0,windowWidth,windowHeight)}function mm(t,e){e.life-=co,gt(e),t.remove()}function ym(t,e){e.life-=uo,gt(e)}function wm(t,e){e.life-=ho,gt(e)}function vm(t,e){e.life-=fo,e.drag!=-2&&yn&&(e.drag=-1),gt(e)}function Em(t,e){e.life-=po,gt(e)}function Tm(t,e){e.life-=go,e.drag=-2,gt(e)}function Im(t,e){e.life=-1,gt(e)}function gt(t){if(t.life<=0){if(Te.includes(t)){for(let e=0;e<50;e++)new H.Sprite(d.x,d.y);M+=1,vn(),We=!1,qe.stop(),Pe.play()}else new H.Sprite(t.x,t.y);Math.random()*1e3>998.5&&new oe.Sprite(t.x-10,t.y-10),Math.random()*1e3>998.25&&new ae.Sprite(t.x+10,t.y-10),t.remove(),mn+=100+M}}function Sm(){x<268?At=x/10:At=Math.pow(x,1/1.7),(x%30===0&&x<240||x===250||x===324||x===421||x===529||x===646||x===773||x===909||x===1054||x===1207||x===1370||x===1540||x===1719||x===1905||x===2100||x===2303||x===2512||x===2729||x===2953||x===3185||x===3424||x===3670||x===3923||x===4183||x===4450||x===4724||x===5004)&&(redraw(),wn.play(),wn.setVolume(.1),Am())}function Am(){noLoop(),pe.attribute("disabled",""),clearInterval(Ot),fill(0,0,0,180),rect(0,0,windowWidth,windowHeight);let t=Math.floor(Math.random()*8),e=Math.floor(Math.random()*8),n=Math.floor(Math.random()*8);for(;e===t;)e=Math.floor(Math.random()*8);for(;n===t||n===e;)n=Math.floor(Math.random()*8);let i=[t,e,n];for(let s=0;s<3;s++){let r=createButton(wa[i[s]][1]);r.style("border-radius",windowWidth/80+"px"),i[s]===0?r.style("background-image","radial-gradient(#FDFF7A 21%, #FF4040 80%)"):i[s]===1?r.style("background-image","radial-gradient(#B0B0B0 21%, #8C5400 80%)"):i[s]===2?r.style("background-image","radial-gradient(#F4FF00 21%, #FF0000 80%)"):i[s]===3?r.style("background-image","radial-gradient(#FFE6E6 21%, #FF1515 80%)"):i[s]===4?r.style("background-image","radial-gradient(#C8C8C8 21%, #333333 80%)"):i[s]===5?r.style("background-image","radial-gradient(#DDFFFD 21%, #54FFF5 90%)"):i[s]===6?r.style("background-image","radial-gradient(#FFD654 21%, #FFF054 80%)"):i[s]===7&&r.style("background-image","radial-gradient(#5BB5D6 21%, #548AFF 80%)"),r.style("color","#373737"),r.style("font-size",windowWidth/50+"px"),r.style("border",windowWidth/200+"px solid black"),r.size(windowWidth/4,2*windowHeight/3),r.position(s*windowWidth/3+windowWidth/26,windowHeight/5);let o=createButton(wa[i[s]][0]);o.style("border-radius",windowWidth/120+"px"),o.style("background-color","white"),o.style("border","1px solid"),o.size(windowWidth/10,windowHeight/15),o.position(s*windowWidth/3+3*windowWidth/26,4*windowHeight/5-20),o.attribute=i[s],o.mousePressed(()=>{if(o.attribute===0)Ei||(Ei=!0),Ti+=1,ho+=50,js.play(),js.setVolume(.3);else if(o.attribute===1)lo=!0,new K.Sprite,go+=25,zs.play(),zs.setVolume(.08);else if(o.attribute===2)C+=.25,Qs.play(),Qs.setVolume(.2);else if(o.attribute===3){let u=Rt;Rt+=u,xe+=u,Ys.play(),Ys.setVolume(.3)}else o.attribute===4?(Ln*=.96,Xs.play(),Xs.setVolume(.2)):o.attribute===5?(wi?(vi+=1,po+=300):(new F.Sprite,wi=!0),Ks.play(),Ks.setVolume(.25)):o.attribute===6?(co+=300,uo+=350,Ws.play(),Ws.setVolume(.1)):o.attribute===7&&(yn?fo+=.6:(new te.Sprite,te.layer=0,yn=!0),qs.play(),qs.setVolume(.2));vn(),loop(),pe.removeAttribute("disabled");let a=selectAll("button");for(let u=1;u<a.length;u++)a[u].remove()})}}function Ea(){let t;if(M>180){let e=Math.random()*2;e>1.88+15/M?(t=new be.Sprite,t.life=100+Math.pow(M,1.25)):e>1.78+15/M?(t=new Oe.Sprite,t.life=100+M):(t=new S.Sprite,t.life=100+Math.pow(M,1.35))}else t=new S.Sprite,t.life=100+Math.pow(M,1.35);Math.random()*2>1?Math.random()*2>1?(t.x=Math.random()*(d.x+windowWidth/2),t.y=d.y-windowHeight/2):(t.x=Math.random()*(d.x+windowWidth/2),t.y=d.y+windowHeight/2):Math.random()*2>1?(t.x=d.x-windowWidth/2,t.y=Math.random()*(d.y+windowHeight/2)):(t.x=d.x+windowWidth/2,t.y=Math.random()*(d.y+windowHeight/2))}window.mousePressed=()=>{if(oo){Qt.play(),Qt.setVolume(.2);let t=new $.Sprite(d.x,d.y,15,15);t.moveTowards(mouse.x+d.mouse.x,mouse.y+d.mouse.y),t.speed=20}else if(ao&&V.length<1){Qt.play(),Qt.setVolume(.2);let t=new V.Sprite([[d.x,d.y],[mouse.x+d.mouse.x,mouse.y+d.mouse.y]]);d.x>mouse.x+d.mouse.x?d.y>mouse.y+d.mouse.y?t.ani="SWORDIMG_L":t.ani="SWORDIMG_D":d.y>mouse.y+d.mouse.y?t.ani="SWORDIMG_U":t.ani="SWORDIMG_R",t.width=80,t.height=80,t.rotate(90,4.6).then(()=>{V.remove()})}};window.draw=()=>{if(Math.floor(xe)<=0){noLoop(),pe.attribute("disabled",""),clearInterval(Ot),Pe.stop(),qe.stop(),Yt.play(),Yt.loop(),Yt.setVolume(.3);let n=createButton("");n.style("border-radius",windowWidth/60+"px"),n.style("background-image","radial-gradient(red 21%, black 80%)"),n.style("border","none"),n.size(windowWidth/2,2*windowHeight/3),n.position(windowWidth/6+2/24*windowWidth,windowHeight/5);let i=createDiv("Your Score: "+mn);i.style("color","black"),i.style("font-size",windowWidth/60+"px"),i.size(windowWidth/6,windowHeight/15),i.style("text-align","center"),i.position(windowWidth/3+3*windowWidth/26-2*windowWidth/70,7*windowHeight/11),_e=createDiv("Leaderboard"),_e.style("color","white"),_e.style("font-size",windowWidth/45+"px"),_e.size(windowWidth/3,windowHeight/15),_e.style("text-align","center"),_e.position(windowWidth/3+windowWidth/26-2*windowWidth/70,windowHeight/5+60),Ne=createInput(""),Ne.position(windowWidth/3+2*windowWidth/26,4*windowHeight/5-80),Ne.style("border-radius",windowWidth/280+"px"),Ne.style("background-color","white"),Ne.style("color","red"),Ne.style("border","black 2px solid"),Ne.size(windowWidth/10,windowHeight/20);let s=createButton("Submit Score");s.position(windowWidth/3+5*windowWidth/26,4*windowHeight/5-80),s.style("border-radius",windowWidth/280+"px"),s.style("background-color","white"),s.style("color","red"),s.style("border","black 2px solid"),s.style("font-size",windowWidth/120+"px"),s.size(windowWidth/15,windowHeight/17),s.mousePressed(function(){im(),s.remove(),Ne.remove()}),Zc();let r=createButton("Play Again");r.style("border-radius",windowWidth/280+"px"),r.style("background-color","black"),r.style("color","white"),r.style("border","none"),r.size(windowWidth/10,windowHeight/15),r.position(windowWidth/3+3*windowWidth/26,4*windowHeight/5-20),r.mousePressed(()=>{allSprites.remove(),clear(),Yt.stop(),El(),M=30,loop(),pe.removeAttribute("disabled"),n.remove(),i.remove(),r.remove(),_e.remove(),Ne.remove(),s.remove()})}for(let n=0;n<$.length;n++)($[n].x>d.x+2*windowWidth/3||$[n].y>d.y+2*windowHeight/3||$[n].x<d.x-2*windowWidth/3||$[n].y<d.y-2*windowHeight/3)&&$[n].remove();for(let n=0;n<G.length;n++)(G[n].x>d.x+2*windowWidth/3||G[n].y>d.y+2*windowHeight/3||G[n].x<d.x-2*windowWidth/3||G[n].y<d.y-2*windowHeight/3)&&G[n].remove();if(clear(),image(zt,ye,we,windowWidth+8,windowHeight+8),image(zt,ve,Ee,windowWidth+8,windowHeight+8),image(zt,ye,Ee,windowWidth+8,windowHeight+8),image(zt,ve,we,windowWidth+8,windowHeight+8),image(el,windowWidth/60,18.2*windowHeight/20,windowWidth/40,windowWidth/40),image(tl,windowWidth/60,16.5*windowHeight/20,windowWidth/35,windowWidth/35),fill(65,65,65,M/1-xe*2),rect(0,0,windowWidth,windowHeight),ye<-windowWidth?ye=windowWidth:ye>windowWidth&&(ye=-windowWidth),ve<-windowWidth?ve=windowWidth:ve>windowWidth&&(ve=-windowWidth),we<-windowHeight?we=windowHeight:we>windowHeight&&(we=-windowHeight),Ee<-windowHeight?Ee=windowHeight:Ee>windowHeight&&(Ee=-windowHeight),frameCount%230===0&&M>20&&!We)for(let n=0;n<M*Math.pow(windowWidth,2)/2e7;n++)S.length<Math.pow(windowWidth,2)/2e4&&Ea();for(let n=0;n<S.length;n++){(!We&&S[n].x>d.x+2*windowWidth/3||!We&&S[n].y>d.y+2*windowHeight/3||!We&&S[n].x<d.x-2*windowWidth/3||!We&&S[n].y<d.y-2*windowHeight/3)&&(S[n].remove(),Ea());let i=Math.atan2(d.y-S[n].y,d.x-S[n].x)*180/Math.PI;S[n].direction=i,S[n].speed=2+M/250,S[n].x<d.x?S[n].ani="ENEMYRIGHTIMG":S[n].ani="ENEMYLEFTIMG",S[n].life+=1,S[n].drag===-1?(S[n].speed=.25*(2+M/250),S[n].drag=0):S[n].drag===-2&&(S[n].speed=.75*(2+M/250))}for(let n=0;n<be.length;n++){if(frameCount%360===0){let i=new G.Sprite(be[n].x,be[n].y,15,15);i.moveTowards(d.x,d.y),i.speed=M/60}be[n].speed=2+M/800,be[n].x<d.x?be[n].ani="SHOOTENEMYRIGHTIMG":be[n].ani="SHOOTENEMYLEFTIMG"}for(let n=0;n<Oe.length;n++)Oe[n].speed=2+M/75,Oe[n].x<d.x?Oe[n].ani="FASTENEMYRIGHTIMG":Oe[n].ani="FASTENEMYLEFTIMG";if(kb.pressing("down")&&kb.pressing("left")?(d.ani="left",Ge="left",d.move(C*1.5,135,C-1),we-=C-1,Ee-=C-1,ye+=C-1,ve+=C-1):kb.pressing("down")&&kb.pressing("right")?(d.ani="right",Ge="right",d.move(C*1.5,45,C-1),we-=C-1,Ee-=C-1,ye-=C-1,ve-=C-1):kb.pressing("up")&&kb.pressing("left")?(d.ani="left",Ge="left",d.move(C*1.5,225,C-1),we+=C-1,Ee+=C-1,ye+=C-1,ve+=C-1):kb.pressing("up")&&kb.pressing("right")?(d.ani="right",Ge="right",ye-=C-1,ve-=C-1,we+=C-1,Ee+=C-1,d.move(C*1.5,315,C-1)):kb.pressing("right")?(d.ani="right",Ge="right",ye-=C,ve-=C,d.move(C*1.5,"right",C)):kb.pressing("left")?(d.ani="left",Ge="left",ye+=C,ve+=C,d.move(C*1.5,"left",C)):kb.pressing("up")?(we+=C,Ee+=C,d.move(C*1.5,"up",C)):kb.pressing("down")?(d.move(C*1.5,"down",C),we-=C,Ee-=C):Ge==="right"?d.ani="PLAYERSTANDRIGHTIMG":d.ani="PLAYERSTANDLEFTIMG",M<=32){let n=["Fight against the shadow warriors who are plotting to attack the Sun.","Be careful not to get near the shadows.","Move around with WASD and dodge their necrotic attacks.","Attack with your LMB and use abilities to defeat them.","As you defeat more shadows, they'll drop sun souls.","Use these souls to level up and become stronger.","As you collect souls, you'll gain powers.","Help save the Sun from danger. Good luck!"];fill("white"),textSize(windowWidth/50),textAlign(CENTER),text(n[Math.floor(M/4)],windowWidth/2,windowHeight/4)}textAlign(CENTER),noFill(),rect(windowWidth*3/10,windowHeight/10,windowWidth*2/5,windowHeight/20),rect(windowWidth*97/200,windowHeight/1.8,windowWidth*3/100,windowHeight/60),fill("green"),rect(windowWidth*3/10,windowHeight/10,map(At-Math.floor(At),0,1,0,windowWidth*2/5),windowHeight/20),fill("red"),rect(windowWidth*97/200,windowHeight/1.8,map(xe,0,Rt,0,windowWidth*3/100),windowHeight/60),fill("white"),textFont("Courier New"),stroke(45,45,45),strokeWeight(2.5),textSize(windowWidth/70),text("Score: "+mn,windowWidth-140,windowHeight/20);let t=Math.floor(M/60),e=M%60;if(t=t<10?"0"+t:t,e=e<10?"0"+e:e,text("Time: "+t+":"+e,windowWidth/15,windowHeight/20),text(": Move",windowWidth/13.2,18.9*windowHeight/20),text(": Attack",windowWidth/11.8,17.4*windowHeight/20),text("Health: "+Math.floor(xe)+"/"+Rt,windowWidth*10/13,windowHeight*2/15),textSize(windowWidth/60),textFont("Arial"),text("Level: "+Math.floor(At),windowWidth/2,windowHeight/11),lo)for(let n=1;n<K.length+1;n++){let i=n*2*Math.PI/K.length,s=Math.cos(frameCount/20)*Math.cos(i),r=Math.sin(frameCount/20)*Math.sin(i);K[n-1].x=d.x+150*s,K[n-1].y=d.y+150*r}for(;H.length>200;)H[0].remove();if(wi&&(F.x=constrain(F.x,d.x-windowWidth/2,d.x+windowWidth/2),F.y=constrain(F.y,d.y-windowHeight/2,d.y+windowHeight/2),F.x+=vi*Us,F.y+=vi*Bs,(F.x>d.x+windowWidth/2||F.x<d.x-windowWidth/2)&&(Us*=-1),(F.y>d.y+windowHeight/2||F.y<d.y-windowHeight/2)&&(Bs*=-1)),yn&&(te.x=d.x,te.y=d.y),V[0]&&(V[0].x=d.x,V[0].y=d.y),camera.x=d.x,camera.y=d.y,Ei&&frameCount%130===0)for(let n=0;n<Ti;n++){let i=new q.Sprite;i.x=d.x,i.y=d.y,i.speed=20;let s=n*2*Math.PI/Ti+Math.PI/2;i.moveTowards(d.x+200*Math.cos(s),d.y+200*Math.sin(s)),(q[n].x>d.x+2*windowWidth/3||q[n].y>d.y+2*windowHeight/3||q[n].x<d.x-2*windowWidth/3||q[n].y<d.y-2*windowHeight/3)&&q[n].remove()}if(M>15&&!ro&&(redraw(),wn.play(),wn.setVolume(.1),am()),M%300===0){if(We=!0,clearInterval(Ot),S.length<1){let n=new Te.Sprite(d.x+windowWidth/2,d.y);n.life=M*500,Pe.stop(),qe.play(),qe.loop(),qe.setVolume(.03)}frameCount%120===0&&(tr=d.x,nr=d.y),Te[0].moveTowards(tr,nr),frameCount%300<30?Te[0].speed=1.5:Te[0].speed=16+M/250,Te[0].x<d.x?Te[0].ani="BOSSRIGHTIMG":Te[0].ani="BOSSLEFTIMG"}};
