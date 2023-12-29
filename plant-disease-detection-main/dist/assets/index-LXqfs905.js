function Ck(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Pk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function bk(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Kw={exports:{}},Qc={},Gw={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),xk=Symbol.for("react.portal"),Ok=Symbol.for("react.fragment"),Nk=Symbol.for("react.strict_mode"),Dk=Symbol.for("react.profiler"),Lk=Symbol.for("react.provider"),Mk=Symbol.for("react.context"),Vk=Symbol.for("react.forward_ref"),Uk=Symbol.for("react.suspense"),Fk=Symbol.for("react.memo"),$k=Symbol.for("react.lazy"),Nv=Symbol.iterator;function jk(t){return t===null||typeof t!="object"?null:(t=Nv&&t[Nv]||t["@@iterator"],typeof t=="function"?t:null)}var Qw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yw=Object.assign,Xw={};function To(t,e,n){this.props=t,this.context=e,this.refs=Xw,this.updater=n||Qw}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jw(){}Jw.prototype=To.prototype;function Em(t,e,n){this.props=t,this.context=e,this.refs=Xw,this.updater=n||Qw}var Tm=Em.prototype=new Jw;Tm.constructor=Em;Yw(Tm,To.prototype);Tm.isPureReactComponent=!0;var Dv=Array.isArray,Zw=Object.prototype.hasOwnProperty,Im={current:null},eE={key:!0,ref:!0,__self:!0,__source:!0};function tE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zw.call(e,r)&&!eE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fl,type:t,key:s,ref:o,props:i,_owner:Im.current}}function zk(t,e){return{$$typeof:fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sm(t){return typeof t=="object"&&t!==null&&t.$$typeof===fl}function Bk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lv=/\/+/g;function Rd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bk(""+t.key):e.toString(36)}function Tu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fl:case xk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rd(o,0):r,Dv(i)?(n="",t!=null&&(n=t.replace(Lv,"$&/")+"/"),Tu(i,e,n,"",function(u){return u})):i!=null&&(Sm(i)&&(i=zk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Rd(s,a);o+=Tu(s,e,n,l,i)}else if(l=jk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Rd(s,a++),o+=Tu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wl(t,e,n){if(t==null)return t;var r=[],i=0;return Tu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},Iu={transition:null},Hk={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:Iu,ReactCurrentOwner:Im};ce.Children={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!Sm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=To;ce.Fragment=Ok;ce.Profiler=Dk;ce.PureComponent=Em;ce.StrictMode=Nk;ce.Suspense=Uk;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Im.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zw.call(e,l)&&!eE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fl,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:Mk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lk,_context:t},t.Consumer=t};ce.createElement=tE;ce.createFactory=function(t){var e=tE.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:Vk,render:t}};ce.isValidElement=Sm;ce.lazy=function(t){return{$$typeof:$k,_payload:{_status:-1,_result:t},_init:qk}};ce.memo=function(t,e){return{$$typeof:Fk,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Iu.transition;Iu.transition={};try{t()}finally{Iu.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Lt.current.useCallback(t,e)};ce.useContext=function(t){return Lt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Lt.current.useEffect(t,e)};ce.useId=function(){return Lt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Lt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};ce.useRef=function(t){return Lt.current.useRef(t)};ce.useState=function(t){return Lt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Lt.current.useTransition()};ce.version="18.2.0";Gw.exports=ce;var b=Gw.exports;const Ge=wm(b),Wk=Ck({__proto__:null,default:Ge},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kk=b,Gk=Symbol.for("react.element"),Qk=Symbol.for("react.fragment"),Yk=Object.prototype.hasOwnProperty,Xk=Kk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jk={key:!0,ref:!0,__self:!0,__source:!0};function nE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Yk.call(e,r)&&!Jk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Gk,type:t,key:s,ref:o,props:i,_owner:Xk.current}}Qc.Fragment=Qk;Qc.jsx=nE;Qc.jsxs=nE;Kw.exports=Qc;var O=Kw.exports,xf={},rE={exports:{}},ln={},iE={exports:{}},sE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,X){var Z=U.length;U.push(X);e:for(;0<Z;){var fe=Z-1>>>1,be=U[fe];if(0<i(be,X))U[fe]=X,U[Z]=be,Z=fe;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var X=U[0],Z=U.pop();if(Z!==X){U[0]=Z;e:for(var fe=0,be=U.length,At=be>>>1;fe<At;){var kt=2*(fe+1)-1,cn=U[kt],Vt=kt+1,Yt=U[Vt];if(0>i(cn,Z))Vt<be&&0>i(Yt,cn)?(U[fe]=Yt,U[Vt]=Z,fe=Vt):(U[fe]=cn,U[kt]=Z,fe=kt);else if(Vt<be&&0>i(Yt,Z))U[fe]=Yt,U[Vt]=Z,fe=Vt;else break e}}return X}function i(U,X){var Z=U.sortIndex-X.sortIndex;return Z!==0?Z:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,_=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var X=n(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=U)r(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function I(U){if(w=!1,v(U),!_)if(n(l)!==null)_=!0,Ir(A);else{var X=n(u);X!==null&&Qt(I,X.startTime-U)}}function A(U,X){_=!1,w&&(w=!1,g(M),M=-1),m=!0;var Z=d;try{for(v(X),h=n(l);h!==null&&(!(h.expirationTime>X)||U&&!Ve());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,d=h.priorityLevel;var be=fe(h.expirationTime<=X);X=t.unstable_now(),typeof be=="function"?h.callback=be:h===n(l)&&r(l),v(X)}else r(l);h=n(l)}if(h!==null)var At=!0;else{var kt=n(u);kt!==null&&Qt(I,kt.startTime-X),At=!1}return At}finally{h=null,d=Z,m=!1}}var k=!1,R=null,M=-1,H=5,G=-1;function Ve(){return!(t.unstable_now()-G<H)}function er(){if(R!==null){var U=t.unstable_now();G=U;var X=!0;try{X=R(!0,U)}finally{X?Ln():(k=!1,R=null)}}else k=!1}var Ln;if(typeof p=="function")Ln=function(){p(er)};else if(typeof MessageChannel<"u"){var us=new MessageChannel,cs=us.port2;us.port1.onmessage=er,Ln=function(){cs.postMessage(null)}}else Ln=function(){T(er,0)};function Ir(U){R=U,k||(k=!0,Ln())}function Qt(U,X){M=T(function(){U(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Ir(A))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Z=d;d=X;try{return U()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=d;d=U;try{return X()}finally{d=Z}},t.unstable_scheduleCallback=function(U,X,Z){var fe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,U){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,U={id:c++,callback:X,priorityLevel:U,startTime:Z,expirationTime:be,sortIndex:-1},Z>fe?(U.sortIndex=Z,e(u,U),n(l)===null&&U===n(u)&&(w?(g(M),M=-1):w=!0,Qt(I,Z-fe))):(U.sortIndex=be,e(l,U),_||m||(_=!0,Ir(A))),U},t.unstable_shouldYield=Ve,t.unstable_wrapCallback=function(U){var X=d;return function(){var Z=d;d=X;try{return U.apply(this,arguments)}finally{d=Z}}}})(sE);iE.exports=sE;var Zk=iE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE=b,on=Zk;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aE=new Set,Aa={};function ts(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(Aa[t]=e,t=0;t<e.length;t++)aE.add(e[t])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,eC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mv={},Vv={};function tC(t){return Of.call(Vv,t)?!0:Of.call(Mv,t)?!1:eC.test(t)?Vv[t]=!0:(Mv[t]=!0,!1)}function nC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rC(t,e,n,r){if(e===null||typeof e>"u"||nC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rm=/[\-:]([a-z])/g;function Am(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rm,Am);pt[e]=new Mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rm,Am);pt[e]=new Mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rm,Am);pt[e]=new Mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function km(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rC(e,n,i,r)&&(n=null),r||i===null?tC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Er=oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kl=Symbol.for("react.element"),As=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),lE=Symbol.for("react.provider"),uE=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),bm=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),cE=Symbol.for("react.offscreen"),Uv=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=Uv&&t[Uv]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Ad;function Yo(t){if(Ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ad=e&&e[1]||""}return`
`+Ad+t}var kd=!1;function Cd(t,e){if(!t||kd)return"";kd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{kd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function iC(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=Cd(t.type,!1),t;case 11:return t=Cd(t.type.render,!1),t;case 1:return t=Cd(t.type,!0),t;default:return""}}function Mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case As:return"Portal";case Nf:return"Profiler";case Cm:return"StrictMode";case Df:return"Suspense";case Lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uE:return(t.displayName||"Context")+".Consumer";case lE:return(t._context.displayName||"Context")+".Provider";case Pm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bm:return e=t.displayName||null,e!==null?e:Mf(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return Mf(t(e))}catch{}}return null}function sC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mf(e);case 8:return e===Cm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oC(t){var e=hE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gl(t){t._valueTracker||(t._valueTracker=oC(t))}function dE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fE(t,e){e=e.checked,e!=null&&km(t,"checked",e,!1)}function Uf(t,e){fE(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ff(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ff(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $v(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ff(t,e,n){(e!=="number"||Ku(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Xo(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function pE(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ql,gE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ql=Ql||document.createElement("div"),Ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aC=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){aC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function yE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function vE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lC=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zf(t,e){if(e){if(lC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=null;function xm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hf=null,zs=null,Bs=null;function Bv(t){if(t=gl(t)){if(typeof Hf!="function")throw Error(L(280));var e=t.stateNode;e&&(e=eh(e),Hf(t.stateNode,t.type,e))}}function _E(t){zs?Bs?Bs.push(t):Bs=[t]:zs=t}function wE(){if(zs){var t=zs,e=Bs;if(Bs=zs=null,Bv(t),e)for(t=0;t<e.length;t++)Bv(e[t])}}function EE(t,e){return t(e)}function TE(){}var Pd=!1;function IE(t,e,n){if(Pd)return t(e,n);Pd=!0;try{return EE(t,e,n)}finally{Pd=!1,(zs!==null||Bs!==null)&&(TE(),wE())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var r=eh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Wf=!1;if(fr)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){Wf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{Wf=!1}function uC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ua=!1,Gu=null,Qu=!1,Kf=null,cC={onError:function(t){ua=!0,Gu=t}};function hC(t,e,n,r,i,s,o,a,l){ua=!1,Gu=null,uC.apply(cC,arguments)}function dC(t,e,n,r,i,s,o,a,l){if(hC.apply(this,arguments),ua){if(ua){var u=Gu;ua=!1,Gu=null}else throw Error(L(198));Qu||(Qu=!0,Kf=u)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function SE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qv(t){if(ns(t)!==t)throw Error(L(188))}function fC(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qv(i),t;if(s===r)return qv(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function RE(t){return t=fC(t),t!==null?AE(t):null}function AE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=AE(t);if(e!==null)return e;t=t.sibling}return null}var kE=on.unstable_scheduleCallback,Hv=on.unstable_cancelCallback,pC=on.unstable_shouldYield,mC=on.unstable_requestPaint,ze=on.unstable_now,gC=on.unstable_getCurrentPriorityLevel,Om=on.unstable_ImmediatePriority,CE=on.unstable_UserBlockingPriority,Yu=on.unstable_NormalPriority,yC=on.unstable_LowPriority,PE=on.unstable_IdlePriority,Yc=null,qn=null;function vC(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Yc,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:EC,_C=Math.log,wC=Math.LN2;function EC(t){return t>>>=0,t===0?32:31-(_C(t)/wC|0)|0}var Yl=64,Xl=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Jo(a):(s&=o,s!==0&&(r=Jo(s)))}else o=n&~i,o!==0?r=Jo(o):s!==0&&(r=Jo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function TC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Cn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bE(){var t=Yl;return Yl<<=1,!(Yl&4194240)&&(Yl=64),t}function bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function SC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function xE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var OE,Dm,NE,DE,LE,Qf=!1,Jl=[],jr=null,zr=null,Br=null,Pa=new Map,ba=new Map,br=[],RC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wv(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function $o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gl(e),e!==null&&Dm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AC(t,e,n,r,i){switch(e){case"focusin":return jr=$o(jr,t,e,n,r,i),!0;case"dragenter":return zr=$o(zr,t,e,n,r,i),!0;case"mouseover":return Br=$o(Br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pa.set(s,$o(Pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ba.set(s,$o(ba.get(s)||null,t,e,n,r,i)),!0}return!1}function ME(t){var e=Ri(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=SE(n),e!==null){t.blockedOn=e,LE(t.priority,function(){NE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Su(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qf=r,n.target.dispatchEvent(r),qf=null}else return e=gl(n),e!==null&&Dm(e),t.blockedOn=n,!1;e.shift()}return!0}function Kv(t,e,n){Su(t)&&n.delete(e)}function kC(){Qf=!1,jr!==null&&Su(jr)&&(jr=null),zr!==null&&Su(zr)&&(zr=null),Br!==null&&Su(Br)&&(Br=null),Pa.forEach(Kv),ba.forEach(Kv)}function jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Qf||(Qf=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,kC)))}function xa(t){function e(i){return jo(i,t)}if(0<Jl.length){jo(Jl[0],t);for(var n=1;n<Jl.length;n++){var r=Jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&jo(jr,t),zr!==null&&jo(zr,t),Br!==null&&jo(Br,t),Pa.forEach(e),ba.forEach(e),n=0;n<br.length;n++)r=br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<br.length&&(n=br[0],n.blockedOn===null);)ME(n),n.blockedOn===null&&br.shift()}var qs=Er.ReactCurrentBatchConfig,Ju=!0;function CC(t,e,n,r){var i=ve,s=qs.transition;qs.transition=null;try{ve=1,Lm(t,e,n,r)}finally{ve=i,qs.transition=s}}function PC(t,e,n,r){var i=ve,s=qs.transition;qs.transition=null;try{ve=4,Lm(t,e,n,r)}finally{ve=i,qs.transition=s}}function Lm(t,e,n,r){if(Ju){var i=Yf(t,e,n,r);if(i===null)$d(t,e,r,Zu,n),Wv(t,r);else if(AC(i,t,e,n,r))r.stopPropagation();else if(Wv(t,r),e&4&&-1<RC.indexOf(t)){for(;i!==null;){var s=gl(i);if(s!==null&&OE(s),s=Yf(t,e,n,r),s===null&&$d(t,e,r,Zu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $d(t,e,r,null,n)}}var Zu=null;function Yf(t,e,n,r){if(Zu=null,t=xm(r),t=Ri(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=SE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zu=t,null}function VE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gC()){case Om:return 1;case CE:return 4;case Yu:case yC:return 16;case PE:return 536870912;default:return 16}default:return 16}}var Vr=null,Mm=null,Ru=null;function UE(){if(Ru)return Ru;var t,e=Mm,n=e.length,r,i="value"in Vr?Vr.value:Vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ru=i.slice(t,1<r?1-r:void 0)}function Au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function Gv(){return!1}function un(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zl:Gv,this.isPropagationStopped=Gv,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vm=un(Io),ml=De({},Io,{view:0,detail:0}),bC=un(ml),xd,Od,zo,Xc=De({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Um,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(xd=t.screenX-zo.screenX,Od=t.screenY-zo.screenY):Od=xd=0,zo=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:Od}}),Qv=un(Xc),xC=De({},Xc,{dataTransfer:0}),OC=un(xC),NC=De({},ml,{relatedTarget:0}),Nd=un(NC),DC=De({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),LC=un(DC),MC=De({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VC=un(MC),UC=De({},Io,{data:0}),Yv=un(UC),FC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$C={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jC[t])?!!e[t]:!1}function Um(){return zC}var BC=De({},ml,{key:function(t){if(t.key){var e=FC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$C[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Um,charCode:function(t){return t.type==="keypress"?Au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qC=un(BC),HC=De({},Xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xv=un(HC),WC=De({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Um}),KC=un(WC),GC=De({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),QC=un(GC),YC=De({},Xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XC=un(YC),JC=[9,13,27,32],Fm=fr&&"CompositionEvent"in window,ca=null;fr&&"documentMode"in document&&(ca=document.documentMode);var ZC=fr&&"TextEvent"in window&&!ca,FE=fr&&(!Fm||ca&&8<ca&&11>=ca),Jv=" ",Zv=!1;function $E(t,e){switch(t){case"keyup":return JC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function eP(t,e){switch(t){case"compositionend":return jE(e);case"keypress":return e.which!==32?null:(Zv=!0,Jv);case"textInput":return t=e.data,t===Jv&&Zv?null:t;default:return null}}function tP(t,e){if(Cs)return t==="compositionend"||!Fm&&$E(t,e)?(t=UE(),Ru=Mm=Vr=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return FE&&e.locale!=="ko"?null:e.data;default:return null}}var nP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nP[t.type]:e==="textarea"}function zE(t,e,n,r){_E(r),e=ec(e,"onChange"),0<e.length&&(n=new Vm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ha=null,Oa=null;function rP(t){ZE(t,0)}function Jc(t){var e=xs(t);if(dE(e))return t}function iP(t,e){if(t==="change")return e}var BE=!1;if(fr){var Dd;if(fr){var Ld="oninput"in document;if(!Ld){var t_=document.createElement("div");t_.setAttribute("oninput","return;"),Ld=typeof t_.oninput=="function"}Dd=Ld}else Dd=!1;BE=Dd&&(!document.documentMode||9<document.documentMode)}function n_(){ha&&(ha.detachEvent("onpropertychange",qE),Oa=ha=null)}function qE(t){if(t.propertyName==="value"&&Jc(Oa)){var e=[];zE(e,Oa,t,xm(t)),IE(rP,e)}}function sP(t,e,n){t==="focusin"?(n_(),ha=e,Oa=n,ha.attachEvent("onpropertychange",qE)):t==="focusout"&&n_()}function oP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(Oa)}function aP(t,e){if(t==="click")return Jc(e)}function lP(t,e){if(t==="input"||t==="change")return Jc(e)}function uP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xn=typeof Object.is=="function"?Object.is:uP;function Na(t,e){if(xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Of.call(e,i)||!xn(t[i],e[i]))return!1}return!0}function r_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function i_(t,e){var n=r_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=r_(n)}}function HE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?HE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function WE(){for(var t=window,e=Ku();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ku(t.document)}return e}function $m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cP(t){var e=WE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&HE(n.ownerDocument.documentElement,n)){if(r!==null&&$m(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=i_(n,s);var o=i_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hP=fr&&"documentMode"in document&&11>=document.documentMode,Ps=null,Xf=null,da=null,Jf=!1;function s_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jf||Ps==null||Ps!==Ku(r)||(r=Ps,"selectionStart"in r&&$m(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),da&&Na(da,r)||(da=r,r=ec(Xf,"onSelect"),0<r.length&&(e=new Vm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ps)))}function eu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:eu("Animation","AnimationEnd"),animationiteration:eu("Animation","AnimationIteration"),animationstart:eu("Animation","AnimationStart"),transitionend:eu("Transition","TransitionEnd")},Md={},KE={};fr&&(KE=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Zc(t){if(Md[t])return Md[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in KE)return Md[t]=e[n];return t}var GE=Zc("animationend"),QE=Zc("animationiteration"),YE=Zc("animationstart"),XE=Zc("transitionend"),JE=new Map,o_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(t,e){JE.set(t,e),ts(e,[t])}for(var Vd=0;Vd<o_.length;Vd++){var Ud=o_[Vd],dP=Ud.toLowerCase(),fP=Ud[0].toUpperCase()+Ud.slice(1);ui(dP,"on"+fP)}ui(GE,"onAnimationEnd");ui(QE,"onAnimationIteration");ui(YE,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(XE,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function a_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dC(r,e,void 0,t),t.currentTarget=null}function ZE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;a_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;a_(i,a,u),s=l}}}if(Qu)throw t=Kf,Qu=!1,Kf=null,t}function Te(t,e){var n=e[rp];n===void 0&&(n=e[rp]=new Set);var r=t+"__bubble";n.has(r)||(e1(e,t,2,!1),n.add(r))}function Fd(t,e,n){var r=0;e&&(r|=4),e1(n,t,r,e)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[tu]){t[tu]=!0,aE.forEach(function(n){n!=="selectionchange"&&(pP.has(n)||Fd(n,!1,t),Fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tu]||(e[tu]=!0,Fd("selectionchange",!1,e))}}function e1(t,e,n,r){switch(VE(e)){case 1:var i=CC;break;case 4:i=PC;break;default:i=Lm}n=i.bind(null,e,n,t),i=void 0,!Wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $d(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}IE(function(){var u=s,c=xm(n),h=[];e:{var d=JE.get(t);if(d!==void 0){var m=Vm,_=t;switch(t){case"keypress":if(Au(n)===0)break e;case"keydown":case"keyup":m=qC;break;case"focusin":_="focus",m=Nd;break;case"focusout":_="blur",m=Nd;break;case"beforeblur":case"afterblur":m=Nd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Qv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=OC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=KC;break;case GE:case QE:case YE:m=LC;break;case XE:m=QC;break;case"scroll":m=bC;break;case"wheel":m=XC;break;case"copy":case"cut":case"paste":m=VC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Xv}var w=(e&4)!==0,T=!w&&t==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var p=u,v;p!==null;){v=p;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,g!==null&&(I=Ca(p,g),I!=null&&w.push(La(p,I,v)))),T)break;p=p.return}0<w.length&&(d=new m(d,_,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==qf&&(_=n.relatedTarget||n.fromElement)&&(Ri(_)||_[pr]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Ri(_):null,_!==null&&(T=ns(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(w=Qv,I="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Xv,I="onPointerLeave",g="onPointerEnter",p="pointer"),T=m==null?d:xs(m),v=_==null?d:xs(_),d=new w(I,p+"leave",m,n,c),d.target=T,d.relatedTarget=v,I=null,Ri(c)===u&&(w=new w(g,p+"enter",_,n,c),w.target=v,w.relatedTarget=T,I=w),T=I,m&&_)t:{for(w=m,g=_,p=0,v=w;v;v=vs(v))p++;for(v=0,I=g;I;I=vs(I))v++;for(;0<p-v;)w=vs(w),p--;for(;0<v-p;)g=vs(g),v--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=vs(w),g=vs(g)}w=null}else w=null;m!==null&&l_(h,d,m,w,!1),_!==null&&T!==null&&l_(h,T,_,w,!0)}}e:{if(d=u?xs(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=iP;else if(e_(d))if(BE)A=lP;else{A=oP;var k=sP}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=aP);if(A&&(A=A(t,u))){zE(h,A,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Ff(d,"number",d.value)}switch(k=u?xs(u):window,t){case"focusin":(e_(k)||k.contentEditable==="true")&&(Ps=k,Xf=u,da=null);break;case"focusout":da=Xf=Ps=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,s_(h,n,c);break;case"selectionchange":if(hP)break;case"keydown":case"keyup":s_(h,n,c)}var R;if(Fm)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Cs?$E(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(FE&&n.locale!=="ko"&&(Cs||M!=="onCompositionStart"?M==="onCompositionEnd"&&Cs&&(R=UE()):(Vr=c,Mm="value"in Vr?Vr.value:Vr.textContent,Cs=!0)),k=ec(u,M),0<k.length&&(M=new Yv(M,t,null,n,c),h.push({event:M,listeners:k}),R?M.data=R:(R=jE(n),R!==null&&(M.data=R)))),(R=ZC?eP(t,n):tP(t,n))&&(u=ec(u,"onBeforeInput"),0<u.length&&(c=new Yv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}ZE(h,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ca(t,n),s!=null&&r.unshift(La(t,s,i)),s=Ca(t,e),s!=null&&r.push(La(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function l_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ca(n,s),l!=null&&o.unshift(La(n,l,a))):i||(l=Ca(n,s),l!=null&&o.push(La(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mP=/\r\n?/g,gP=/\u0000|\uFFFD/g;function u_(t){return(typeof t=="string"?t:""+t).replace(mP,`
`).replace(gP,"")}function nu(t,e,n){if(e=u_(e),u_(t)!==e&&n)throw Error(L(425))}function tc(){}var Zf=null,ep=null;function tp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var np=typeof setTimeout=="function"?setTimeout:void 0,yP=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,vP=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(t){return c_.resolve(null).then(t).catch(_P)}:np;function _P(t){setTimeout(function(){throw t})}function jd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xa(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function h_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),Fn="__reactFiber$"+So,Ma="__reactProps$"+So,pr="__reactContainer$"+So,rp="__reactEvents$"+So,wP="__reactListeners$"+So,EP="__reactHandles$"+So;function Ri(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=h_(t);t!==null;){if(n=t[Fn])return n;t=h_(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[Fn]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function eh(t){return t[Ma]||null}var ip=[],Os=-1;function ci(t){return{current:t}}function Re(t){0>Os||(t.current=ip[Os],ip[Os]=null,Os--)}function we(t,e){Os++,ip[Os]=t.current,t.current=e}var ri={},It=ci(ri),Bt=ci(!1),Fi=ri;function Zs(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function nc(){Re(Bt),Re(It)}function d_(t,e,n){if(It.current!==ri)throw Error(L(168));we(It,e),we(Bt,n)}function t1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,sC(t)||"Unknown",i));return De({},n,r)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,Fi=It.current,we(It,t),we(Bt,Bt.current),!0}function f_(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=t1(t,e,Fi),r.__reactInternalMemoizedMergedChildContext=t,Re(Bt),Re(It),we(It,t)):Re(Bt),we(Bt,n)}var sr=null,th=!1,zd=!1;function n1(t){sr===null?sr=[t]:sr.push(t)}function TP(t){th=!0,n1(t)}function hi(){if(!zd&&sr!==null){zd=!0;var t=0,e=ve;try{var n=sr;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,th=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),kE(Om,hi),i}finally{ve=e,zd=!1}}return null}var Ns=[],Ds=0,ic=null,sc=0,dn=[],fn=0,$i=null,or=1,ar="";function Ti(t,e){Ns[Ds++]=sc,Ns[Ds++]=ic,ic=t,sc=e}function r1(t,e,n){dn[fn++]=or,dn[fn++]=ar,dn[fn++]=$i,$i=t;var r=or;t=ar;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var s=32-Cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,or=1<<32-Cn(e)+i|n<<i|r,ar=s+t}else or=1<<s|n<<i|r,ar=t}function jm(t){t.return!==null&&(Ti(t,1),r1(t,1,0))}function zm(t){for(;t===ic;)ic=Ns[--Ds],Ns[Ds]=null,sc=Ns[--Ds],Ns[Ds]=null;for(;t===$i;)$i=dn[--fn],dn[fn]=null,ar=dn[--fn],dn[fn]=null,or=dn[--fn],dn[fn]=null}var rn=null,en=null,Ce=!1,kn=null;function i1(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function p_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,en=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$i!==null?{id:or,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,en=null,!0):!1;default:return!1}}function sp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function op(t){if(Ce){var e=en;if(e){var n=e;if(!p_(t,e)){if(sp(t))throw Error(L(418));e=qr(n.nextSibling);var r=rn;e&&p_(t,e)?i1(r,n):(t.flags=t.flags&-4097|2,Ce=!1,rn=t)}}else{if(sp(t))throw Error(L(418));t.flags=t.flags&-4097|2,Ce=!1,rn=t}}}function m_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function ru(t){if(t!==rn)return!1;if(!Ce)return m_(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tp(t.type,t.memoizedProps)),e&&(e=en)){if(sp(t))throw s1(),Error(L(418));for(;e;)i1(t,e),e=qr(e.nextSibling)}if(m_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=rn?qr(t.stateNode.nextSibling):null;return!0}function s1(){for(var t=en;t;)t=qr(t.nextSibling)}function eo(){en=rn=null,Ce=!1}function Bm(t){kn===null?kn=[t]:kn.push(t)}var IP=Er.ReactCurrentBatchConfig;function Rn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var oc=ci(null),ac=null,Ls=null,qm=null;function Hm(){qm=Ls=ac=null}function Wm(t){var e=oc.current;Re(oc),t._currentValue=e}function ap(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){ac=t,qm=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(qm!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(ac===null)throw Error(L(308));Ls=t,ac.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Ai=null;function Km(t){Ai===null?Ai=[t]:Ai.push(t)}function o1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Km(e)):(n.next=i.next,i.next=n),e.interleaved=n,mr(t,r)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function Gm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mr(t,n)}return i=r.interleaved,i===null?(e.next=e,Km(r)):(e.next=i.next,i.next=e),r.interleaved=e,mr(t,n)}function ku(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nm(t,n)}}function g_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,r){var i=t.updateQueue;Pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(d=e,m=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=De({},h,d);break e;case 2:Pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zi|=o,t.lanes=o,t.memoizedState=h}}function y_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var l1=new oE.Component().refs;function lp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nh={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Kr(t),s=hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(Pn(e,t,i,r),ku(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Kr(t),s=hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(Pn(e,t,i,r),ku(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=Kr(t),i=hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(Pn(e,t,r,n),ku(e,t,r))}};function v_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Na(n,r)||!Na(i,s):!0}function u1(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=vn(s):(i=qt(e)?Fi:It.current,r=e.contextTypes,s=(r=r!=null)?Zs(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function __(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nh.enqueueReplaceState(e,e.state,null)}function up(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=l1,Gm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vn(s):(s=qt(e)?Fi:It.current,i.context=Zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nh.enqueueReplaceState(i,i.state,null),lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===l1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function iu(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function w_(t){var e=t._init;return e(t._payload)}function c1(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Gr(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,I){return p===null||p.tag!==6?(p=Qd(v,g.mode,I),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,I){var A=v.type;return A===ks?c(g,p,v.props.children,I,v.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Cr&&w_(A)===p.type)?(I=i(p,v.props),I.ref=Bo(g,p,v),I.return=g,I):(I=Nu(v.type,v.key,v.props,null,g.mode,I),I.ref=Bo(g,p,v),I.return=g,I)}function u(g,p,v,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Yd(v,g.mode,I),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,I,A){return p===null||p.tag!==7?(p=Di(v,g.mode,I,A),p.return=g,p):(p=i(p,v),p.return=g,p)}function h(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Qd(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Kl:return v=Nu(p.type,p.key,p.props,null,g.mode,v),v.ref=Bo(g,null,p),v.return=g,v;case As:return p=Yd(p,g.mode,v),p.return=g,p;case Cr:var I=p._init;return h(g,I(p._payload),v)}if(Xo(p)||Uo(p))return p=Di(p,g.mode,v,null),p.return=g,p;iu(g,p)}return null}function d(g,p,v,I){var A=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(g,p,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Kl:return v.key===A?l(g,p,v,I):null;case As:return v.key===A?u(g,p,v,I):null;case Cr:return A=v._init,d(g,p,A(v._payload),I)}if(Xo(v)||Uo(v))return A!==null?null:c(g,p,v,I,null);iu(g,v)}return null}function m(g,p,v,I,A){if(typeof I=="string"&&I!==""||typeof I=="number")return g=g.get(v)||null,a(p,g,""+I,A);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Kl:return g=g.get(I.key===null?v:I.key)||null,l(p,g,I,A);case As:return g=g.get(I.key===null?v:I.key)||null,u(p,g,I,A);case Cr:var k=I._init;return m(g,p,v,k(I._payload),A)}if(Xo(I)||Uo(I))return g=g.get(v)||null,c(p,g,I,A,null);iu(p,I)}return null}function _(g,p,v,I){for(var A=null,k=null,R=p,M=p=0,H=null;R!==null&&M<v.length;M++){R.index>M?(H=R,R=null):H=R.sibling;var G=d(g,R,v[M],I);if(G===null){R===null&&(R=H);break}t&&R&&G.alternate===null&&e(g,R),p=s(G,p,M),k===null?A=G:k.sibling=G,k=G,R=H}if(M===v.length)return n(g,R),Ce&&Ti(g,M),A;if(R===null){for(;M<v.length;M++)R=h(g,v[M],I),R!==null&&(p=s(R,p,M),k===null?A=R:k.sibling=R,k=R);return Ce&&Ti(g,M),A}for(R=r(g,R);M<v.length;M++)H=m(R,g,M,v[M],I),H!==null&&(t&&H.alternate!==null&&R.delete(H.key===null?M:H.key),p=s(H,p,M),k===null?A=H:k.sibling=H,k=H);return t&&R.forEach(function(Ve){return e(g,Ve)}),Ce&&Ti(g,M),A}function w(g,p,v,I){var A=Uo(v);if(typeof A!="function")throw Error(L(150));if(v=A.call(v),v==null)throw Error(L(151));for(var k=A=null,R=p,M=p=0,H=null,G=v.next();R!==null&&!G.done;M++,G=v.next()){R.index>M?(H=R,R=null):H=R.sibling;var Ve=d(g,R,G.value,I);if(Ve===null){R===null&&(R=H);break}t&&R&&Ve.alternate===null&&e(g,R),p=s(Ve,p,M),k===null?A=Ve:k.sibling=Ve,k=Ve,R=H}if(G.done)return n(g,R),Ce&&Ti(g,M),A;if(R===null){for(;!G.done;M++,G=v.next())G=h(g,G.value,I),G!==null&&(p=s(G,p,M),k===null?A=G:k.sibling=G,k=G);return Ce&&Ti(g,M),A}for(R=r(g,R);!G.done;M++,G=v.next())G=m(R,g,M,G.value,I),G!==null&&(t&&G.alternate!==null&&R.delete(G.key===null?M:G.key),p=s(G,p,M),k===null?A=G:k.sibling=G,k=G);return t&&R.forEach(function(er){return e(g,er)}),Ce&&Ti(g,M),A}function T(g,p,v,I){if(typeof v=="object"&&v!==null&&v.type===ks&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Kl:e:{for(var A=v.key,k=p;k!==null;){if(k.key===A){if(A=v.type,A===ks){if(k.tag===7){n(g,k.sibling),p=i(k,v.props.children),p.return=g,g=p;break e}}else if(k.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Cr&&w_(A)===k.type){n(g,k.sibling),p=i(k,v.props),p.ref=Bo(g,k,v),p.return=g,g=p;break e}n(g,k);break}else e(g,k);k=k.sibling}v.type===ks?(p=Di(v.props.children,g.mode,I,v.key),p.return=g,g=p):(I=Nu(v.type,v.key,v.props,null,g.mode,I),I.ref=Bo(g,p,v),I.return=g,g=I)}return o(g);case As:e:{for(k=v.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Yd(v,g.mode,I),p.return=g,g=p}return o(g);case Cr:return k=v._init,T(g,p,k(v._payload),I)}if(Xo(v))return _(g,p,v,I);if(Uo(v))return w(g,p,v,I);iu(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Qd(v,g.mode,I),p.return=g,g=p),o(g)):n(g,p)}return T}var to=c1(!0),h1=c1(!1),yl={},Hn=ci(yl),Va=ci(yl),Ua=ci(yl);function ki(t){if(t===yl)throw Error(L(174));return t}function Qm(t,e){switch(we(Ua,e),we(Va,t),we(Hn,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jf(e,t)}Re(Hn),we(Hn,e)}function no(){Re(Hn),Re(Va),Re(Ua)}function d1(t){ki(Ua.current);var e=ki(Hn.current),n=jf(e,t.type);e!==n&&(we(Va,t),we(Hn,n))}function Ym(t){Va.current===t&&(Re(Hn),Re(Va))}var Oe=ci(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function Xm(){for(var t=0;t<Bd.length;t++)Bd[t]._workInProgressVersionPrimary=null;Bd.length=0}var Cu=Er.ReactCurrentDispatcher,qd=Er.ReactCurrentBatchConfig,ji=0,Ne=null,Xe=null,nt=null,cc=!1,fa=!1,Fa=0,SP=0;function mt(){throw Error(L(321))}function Jm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xn(t[n],e[n]))return!1;return!0}function Zm(t,e,n,r,i,s){if(ji=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cu.current=t===null||t.memoizedState===null?CP:PP,t=n(r,i),fa){s=0;do{if(fa=!1,Fa=0,25<=s)throw Error(L(301));s+=1,nt=Xe=null,e.updateQueue=null,Cu.current=bP,t=n(r,i)}while(fa)}if(Cu.current=hc,e=Xe!==null&&Xe.next!==null,ji=0,nt=Xe=Ne=null,cc=!1,e)throw Error(L(300));return t}function eg(){var t=Fa!==0;return Fa=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ne.memoizedState=nt=t:nt=nt.next=t,nt}function _n(){if(Xe===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=nt===null?Ne.memoizedState:nt.next;if(e!==null)nt=e,Xe=t;else{if(t===null)throw Error(L(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},nt===null?Ne.memoizedState=nt=t:nt=nt.next=t}return nt}function $a(t,e){return typeof e=="function"?e(t):e}function Hd(t){var e=_n(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ji&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ne.lanes|=c,zi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,xn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,zi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wd(t){var e=_n(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function f1(){}function p1(t,e){var n=Ne,r=_n(),i=e(),s=!xn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,tg(y1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,ja(9,g1.bind(null,n,r,i,e),void 0,null),it===null)throw Error(L(349));ji&30||m1(n,e,i)}return i}function m1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g1(t,e,n,r){e.value=n,e.getSnapshot=r,v1(e)&&_1(t)}function y1(t,e,n){return n(function(){v1(e)&&_1(t)})}function v1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xn(t,n)}catch{return!0}}function _1(t){var e=mr(t,1);e!==null&&Pn(e,t,1,-1)}function E_(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=kP.bind(null,Ne,t),[e.memoizedState,t]}function ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w1(){return _n().memoizedState}function Pu(t,e,n,r){var i=Vn();Ne.flags|=t,i.memoizedState=ja(1|e,n,void 0,r===void 0?null:r)}function rh(t,e,n,r){var i=_n();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&Jm(r,o.deps)){i.memoizedState=ja(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=ja(1|e,n,s,r)}function T_(t,e){return Pu(8390656,8,t,e)}function tg(t,e){return rh(2048,8,t,e)}function E1(t,e){return rh(4,2,t,e)}function T1(t,e){return rh(4,4,t,e)}function I1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S1(t,e,n){return n=n!=null?n.concat([t]):null,rh(4,4,I1.bind(null,e,t),n)}function ng(){}function R1(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function A1(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function k1(t,e,n){return ji&21?(xn(n,e)||(n=bE(),Ne.lanes|=n,zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function RP(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=qd.transition;qd.transition={};try{t(!1),e()}finally{ve=n,qd.transition=r}}function C1(){return _n().memoizedState}function AP(t,e,n){var r=Kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P1(t))b1(e,n);else if(n=o1(t,e,n,r),n!==null){var i=Dt();Pn(n,t,r,i),x1(n,e,r)}}function kP(t,e,n){var r=Kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P1(t))b1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,xn(a,o)){var l=e.interleaved;l===null?(i.next=i,Km(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=o1(t,e,i,r),n!==null&&(i=Dt(),Pn(n,t,r,i),x1(n,e,r))}}function P1(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function b1(t,e){fa=cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nm(t,n)}}var hc={readContext:vn,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},CP={readContext:vn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:T_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pu(4194308,4,I1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pu(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AP.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:E_,useDebugValue:ng,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=E_(!1),e=t[0];return t=RP.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Vn();if(Ce){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),it===null)throw Error(L(349));ji&30||m1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,T_(y1.bind(null,r,s,t),[t]),r.flags|=2048,ja(9,g1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=it.identifierPrefix;if(Ce){var n=ar,r=or;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PP={readContext:vn,useCallback:R1,useContext:vn,useEffect:tg,useImperativeHandle:S1,useInsertionEffect:E1,useLayoutEffect:T1,useMemo:A1,useReducer:Hd,useRef:w1,useState:function(){return Hd($a)},useDebugValue:ng,useDeferredValue:function(t){var e=_n();return k1(e,Xe.memoizedState,t)},useTransition:function(){var t=Hd($a)[0],e=_n().memoizedState;return[t,e]},useMutableSource:f1,useSyncExternalStore:p1,useId:C1,unstable_isNewReconciler:!1},bP={readContext:vn,useCallback:R1,useContext:vn,useEffect:tg,useImperativeHandle:S1,useInsertionEffect:E1,useLayoutEffect:T1,useMemo:A1,useReducer:Wd,useRef:w1,useState:function(){return Wd($a)},useDebugValue:ng,useDeferredValue:function(t){var e=_n();return Xe===null?e.memoizedState=t:k1(e,Xe.memoizedState,t)},useTransition:function(){var t=Wd($a)[0],e=_n().memoizedState;return[t,e]},useMutableSource:f1,useSyncExternalStore:p1,useId:C1,unstable_isNewReconciler:!1};function ro(t,e){try{var n="",r=e;do n+=iC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xP=typeof WeakMap=="function"?WeakMap:Map;function O1(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fc||(fc=!0,wp=r),cp(t,e)},n}function N1(t,e,n){n=hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){cp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cp(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function I_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HP.bind(null,t,e,n),e.then(t,t))}function S_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function R_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var OP=Er.ReactCurrentOwner,zt=!1;function Ot(t,e,n,r){e.child=t===null?h1(e,null,n,r):to(e,t.child,n,r)}function A_(t,e,n,r,i){n=n.render;var s=e.ref;return Hs(e,i),r=Zm(t,e,n,r,s,i),n=eg(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Ce&&n&&jm(e),e.flags|=1,Ot(t,e,r,i),e.child)}function k_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D1(t,e,s,r,i)):(t=Nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(o,r)&&t.ref===e.ref)return gr(t,e,i)}return e.flags|=1,t=Gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function D1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Na(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,gr(t,e,i)}return hp(t,e,n,r,i)}function L1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Vs,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Vs,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Vs,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Vs,Zt),Zt|=r;return Ot(t,e,i,n),e.child}function M1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hp(t,e,n,r,i){var s=qt(n)?Fi:It.current;return s=Zs(e,s),Hs(e,i),n=Zm(t,e,n,r,s,i),r=eg(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Ce&&r&&jm(e),e.flags|=1,Ot(t,e,n,i),e.child)}function C_(t,e,n,r,i){if(qt(n)){var s=!0;rc(e)}else s=!1;if(Hs(e,i),e.stateNode===null)bu(t,e),u1(e,n,r),up(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vn(u):(u=qt(n)?Fi:It.current,u=Zs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&__(e,o,r,u),Pr=!1;var d=e.memoizedState;o.state=d,lc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Bt.current||Pr?(typeof c=="function"&&(lp(e,n,c,r),l=e.memoizedState),(a=Pr||v_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vn(l):(l=qt(n)?Fi:It.current,l=Zs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&__(e,o,r,l),Pr=!1,d=e.memoizedState,o.state=d,lc(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||Bt.current||Pr?(typeof m=="function"&&(lp(e,n,m,r),_=e.memoizedState),(u=Pr||v_(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return dp(t,e,n,r,s,i)}function dp(t,e,n,r,i,s){M1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&f_(e,n,!1),gr(t,e,s);r=e.stateNode,OP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,s),e.child=to(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=r.state,i&&f_(e,n,!0),e.child}function V1(t){var e=t.stateNode;e.pendingContext?d_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&d_(t,e.context,!1),Qm(t,e.containerInfo)}function P_(t,e,n,r,i){return eo(),Bm(i),e.flags|=256,Ot(t,e,n,r),e.child}var fp={dehydrated:null,treeContext:null,retryLane:0};function pp(t){return{baseLanes:t,cachePool:null,transitions:null}}function U1(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Oe,i&1),t===null)return op(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oh(o,r,0,null),t=Di(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pp(n),e.memoizedState=fp,t):rg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=Di(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?pp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fp,r}return s=t.child,t=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rg(t,e){return e=oh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function su(t,e,n,r){return r!==null&&Bm(r),to(e,t.child,null,n),t=rg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kd(Error(L(422))),su(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=oh({mode:"visible",children:r.children},i,0,null),s=Di(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=pp(o),e.memoizedState=fp,s);if(!(e.mode&1))return su(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(L(419)),r=Kd(s,r,void 0),su(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mr(t,i),Pn(r,t,i,-1))}return ug(),r=Kd(Error(L(421))),su(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,en=qr(i.nextSibling),rn=e,Ce=!0,kn=null,t!==null&&(dn[fn++]=or,dn[fn++]=ar,dn[fn++]=$i,or=t.id,ar=t.overflow,$i=e),e=rg(e,r.children),e.flags|=4096,e)}function b_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ap(t.return,e,n)}function Gd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function F1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b_(t,n,e);else if(t.tag===19)b_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gd(e,!0,n,null,s);break;case"together":Gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DP(t,e,n){switch(e.tag){case 3:V1(e),eo();break;case 5:d1(e);break;case 1:qt(e.type)&&rc(e);break;case 4:Qm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(oc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?U1(t,e,n):(we(Oe,Oe.current&1),t=gr(t,e,n),t!==null?t.sibling:null);we(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return F1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,L1(t,e,n)}return gr(t,e,n)}var $1,mp,j1,z1;$1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mp=function(){};j1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ki(Hn.current);var s=null;switch(n){case"input":i=Vf(t,i),r=Vf(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=$f(t,i),r=$f(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tc)}zf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};z1=function(t,e,n,r){n!==r&&(e.flags|=4)};function qo(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LP(t,e,n){var r=e.pendingProps;switch(zm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return qt(e.type)&&nc(),gt(e),null;case 3:return r=e.stateNode,no(),Re(Bt),Re(It),Xm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ru(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Ip(kn),kn=null))),mp(t,e),gt(e),null;case 5:Ym(e);var i=ki(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)j1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return gt(e),null}if(t=ki(Hn.current),ru(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Fn]=e,r[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<Zo.length;i++)Te(Zo[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Fv(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":jv(r,s),Te("invalid",r)}zf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&nu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nu(r.textContent,a,t),i=["children",""+a]):Aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Gl(r),$v(r,s,!0);break;case"textarea":Gl(r),zv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Fn]=e,t[Ma]=r,$1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bf(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zo.length;i++)Te(Zo[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":Fv(t,r),i=Vf(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Te("invalid",t);break;case"textarea":jv(t,r),i=$f(t,r),Te("invalid",t);break;default:i=r}zf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Te("scroll",t):l!=null&&km(t,s,l,o))}switch(n){case"input":Gl(t),$v(t,r,!1);break;case"textarea":Gl(t),zv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?js(t,!!r.multiple,s,!1):r.defaultValue!=null&&js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)z1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=ki(Ua.current),ki(Hn.current),ru(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,(s=r.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:nu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r}return gt(e),null;case 13:if(Re(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&en!==null&&e.mode&1&&!(e.flags&128))s1(),eo(),e.flags|=98560,s=!1;else if(s=ru(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Fn]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),s=!1}else kn!==null&&(Ip(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Ze===0&&(Ze=3):ug())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return no(),mp(t,e),t===null&&Da(e.stateNode.containerInfo),gt(e),null;case 10:return Wm(e.type._context),gt(e),null;case 17:return qt(e.type)&&nc(),gt(e),null;case 19:if(Re(Oe),s=e.memoizedState,s===null)return gt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qo(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uc(t),o!==null){for(e.flags|=128,qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>io&&(e.flags|=128,r=!0,qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=uc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return gt(e),null}else 2*ze()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,r=!0,qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Oe.current,we(Oe,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return lg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function MP(t,e){switch(zm(e),e.tag){case 1:return qt(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),Re(Bt),Re(It),Xm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ym(e),null;case 13:if(Re(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Oe),null;case 4:return no(),null;case 10:return Wm(e.type._context),null;case 22:case 23:return lg(),null;case 24:return null;default:return null}}var ou=!1,_t=!1,VP=typeof WeakSet=="function"?WeakSet:Set,z=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function gp(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var x_=!1;function UP(t,e){if(Zf=Ju,t=WE(),$m(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ep={focusedElem:t,selectionRange:n},Ju=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,T=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Rn(e.type,w),T);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(I){Ue(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return _=x_,x_=!1,_}function pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gp(e,n,s)}i=i.next}while(i!==r)}}function ih(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function B1(t){var e=t.alternate;e!==null&&(t.alternate=null,B1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[Ma],delete e[rp],delete e[wP],delete e[EP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q1(t){return t.tag===5||t.tag===3||t.tag===4}function O_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(r!==4&&(t=t.child,t!==null))for(vp(t,e,n),t=t.sibling;t!==null;)vp(t,e,n),t=t.sibling}function _p(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_p(t,e,n),t=t.sibling;t!==null;)_p(t,e,n),t=t.sibling}var at=null,An=!1;function Rr(t,e,n){for(n=n.child;n!==null;)H1(t,e,n),n=n.sibling}function H1(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Yc,n)}catch{}switch(n.tag){case 5:_t||Ms(n,e);case 6:var r=at,i=An;at=null,Rr(t,e,n),at=r,An=i,at!==null&&(An?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(An?(t=at,n=n.stateNode,t.nodeType===8?jd(t.parentNode,n):t.nodeType===1&&jd(t,n),xa(t)):jd(at,n.stateNode));break;case 4:r=at,i=An,at=n.stateNode.containerInfo,An=!0,Rr(t,e,n),at=r,An=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gp(n,e,o),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!_t&&(Ms(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,Rr(t,e,n),_t=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function N_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VP),e.forEach(function(r){var i=KP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,An=!1;break e;case 3:at=a.stateNode.containerInfo,An=!0;break e;case 4:at=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(at===null)throw Error(L(160));H1(s,o,i),at=null,An=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W1(e,t),e=e.sibling}function W1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Mn(t),r&4){try{pa(3,t,t.return),ih(3,t)}catch(w){Ue(t,t.return,w)}try{pa(5,t,t.return)}catch(w){Ue(t,t.return,w)}}break;case 1:Sn(e,t),Mn(t),r&512&&n!==null&&Ms(n,n.return);break;case 5:if(Sn(e,t),Mn(t),r&512&&n!==null&&Ms(n,n.return),t.flags&32){var i=t.stateNode;try{ka(i,"")}catch(w){Ue(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fE(i,s),Bf(a,o);var u=Bf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?vE(i,h):c==="dangerouslySetInnerHTML"?gE(i,h):c==="children"?ka(i,h):km(i,c,h,u)}switch(a){case"input":Uf(i,s);break;case"textarea":pE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?js(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?js(i,!!s.multiple,s.defaultValue,!0):js(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ma]=s}catch(w){Ue(t,t.return,w)}}break;case 6:if(Sn(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ue(t,t.return,w)}}break;case 3:if(Sn(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(w){Ue(t,t.return,w)}break;case 4:Sn(e,t),Mn(t);break;case 13:Sn(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(og=ze())),r&4&&N_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(u=_t)||c,Sn(e,t),_t=u):Sn(e,t),Mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(z=t,c=t.child;c!==null;){for(h=z=c;z!==null;){switch(d=z,m=d.child,d.tag){case 0:case 11:case 14:case 15:pa(4,d,d.return);break;case 1:Ms(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Ue(r,n,w)}}break;case 5:Ms(d,d.return);break;case 22:if(d.memoizedState!==null){L_(h);continue}}m!==null?(m.return=d,z=m):L_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yE("display",o))}catch(w){Ue(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Ue(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Sn(e,t),Mn(t),r&4&&N_(t);break;case 21:break;default:Sn(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q1(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ka(i,""),r.flags&=-33);var s=O_(t);_p(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=O_(t);vp(t,a,o);break;default:throw Error(L(161))}}catch(l){Ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FP(t,e,n){z=t,K1(t)}function K1(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ou;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_t;a=ou;var u=_t;if(ou=o,(_t=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?M_(i):l!==null?(l.return=o,z=l):M_(i);for(;s!==null;)z=s,K1(s),s=s.sibling;z=i,ou=a,_t=u}D_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):D_(t)}}function D_(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||ih(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&y_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}y_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&xa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}_t||e.flags&512&&yp(e)}catch(d){Ue(e,e.return,d)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function L_(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function M_(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ih(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ue(e,i,l)}}var s=e.return;try{yp(e)}catch(l){Ue(e,s,l)}break;case 5:var o=e.return;try{yp(e)}catch(l){Ue(e,o,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var $P=Math.ceil,dc=Er.ReactCurrentDispatcher,ig=Er.ReactCurrentOwner,yn=Er.ReactCurrentBatchConfig,pe=0,it=null,Ke=null,ht=0,Zt=0,Vs=ci(0),Ze=0,za=null,zi=0,sh=0,sg=0,ma=null,$t=null,og=0,io=1/0,rr=null,fc=!1,wp=null,Wr=null,au=!1,Ur=null,pc=0,ga=0,Ep=null,xu=-1,Ou=0;function Dt(){return pe&6?ze():xu!==-1?xu:xu=ze()}function Kr(t){return t.mode&1?pe&2&&ht!==0?ht&-ht:IP.transition!==null?(Ou===0&&(Ou=bE()),Ou):(t=ve,t!==0||(t=window.event,t=t===void 0?16:VE(t.type)),t):1}function Pn(t,e,n,r){if(50<ga)throw ga=0,Ep=null,Error(L(185));pl(t,n,r),(!(pe&2)||t!==it)&&(t===it&&(!(pe&2)&&(sh|=n),Ze===4&&xr(t,ht)),Ht(t,r),n===1&&pe===0&&!(e.mode&1)&&(io=ze()+500,th&&hi()))}function Ht(t,e){var n=t.callbackNode;IC(t,e);var r=Xu(t,t===it?ht:0);if(r===0)n!==null&&Hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hv(n),e===1)t.tag===0?TP(V_.bind(null,t)):n1(V_.bind(null,t)),vP(function(){!(pe&6)&&hi()}),n=null;else{switch(xE(r)){case 1:n=Om;break;case 4:n=CE;break;case 16:n=Yu;break;case 536870912:n=PE;break;default:n=Yu}n=tT(n,G1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G1(t,e){if(xu=-1,Ou=0,pe&6)throw Error(L(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var r=Xu(t,t===it?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mc(t,r);else{e=r;var i=pe;pe|=2;var s=Y1();(it!==t||ht!==e)&&(rr=null,io=ze()+500,Ni(t,e));do try{BP();break}catch(a){Q1(t,a)}while(!0);Hm(),dc.current=s,pe=i,Ke!==null?e=0:(it=null,ht=0,e=Ze)}if(e!==0){if(e===2&&(i=Gf(t),i!==0&&(r=i,e=Tp(t,i))),e===1)throw n=za,Ni(t,0),xr(t,r),Ht(t,ze()),n;if(e===6)xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!jP(i)&&(e=mc(t,r),e===2&&(s=Gf(t),s!==0&&(r=s,e=Tp(t,s))),e===1))throw n=za,Ni(t,0),xr(t,r),Ht(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Ii(t,$t,rr);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=og+500-ze(),10<e)){if(Xu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=np(Ii.bind(null,t,$t,rr),e);break}Ii(t,$t,rr);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$P(r/1960))-r,10<r){t.timeoutHandle=np(Ii.bind(null,t,$t,rr),r);break}Ii(t,$t,rr);break;case 5:Ii(t,$t,rr);break;default:throw Error(L(329))}}}return Ht(t,ze()),t.callbackNode===n?G1.bind(null,t):null}function Tp(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Ni(t,e).flags|=256),t=mc(t,e),t!==2&&(e=$t,$t=n,e!==null&&Ip(e)),t}function Ip(t){$t===null?$t=t:$t.push.apply($t,t)}function jP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~sg,e&=~sh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function V_(t){if(pe&6)throw Error(L(327));Ws();var e=Xu(t,0);if(!(e&1))return Ht(t,ze()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var r=Gf(t);r!==0&&(e=r,n=Tp(t,r))}if(n===1)throw n=za,Ni(t,0),xr(t,e),Ht(t,ze()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t,$t,rr),Ht(t,ze()),null}function ag(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(io=ze()+500,th&&hi())}}function Bi(t){Ur!==null&&Ur.tag===0&&!(pe&6)&&Ws();var e=pe;pe|=1;var n=yn.transition,r=ve;try{if(yn.transition=null,ve=1,t)return t()}finally{ve=r,yn.transition=n,pe=e,!(pe&6)&&hi()}}function lg(){Zt=Vs.current,Re(Vs)}function Ni(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yP(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(zm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nc();break;case 3:no(),Re(Bt),Re(It),Xm();break;case 5:Ym(r);break;case 4:no();break;case 13:Re(Oe);break;case 19:Re(Oe);break;case 10:Wm(r.type._context);break;case 22:case 23:lg()}n=n.return}if(it=t,Ke=t=Gr(t.current,null),ht=Zt=e,Ze=0,za=null,sg=sh=zi=0,$t=ma=null,Ai!==null){for(e=0;e<Ai.length;e++)if(n=Ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ai=null}return t}function Q1(t,e){do{var n=Ke;try{if(Hm(),Cu.current=hc,cc){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cc=!1}if(ji=0,nt=Xe=Ne=null,fa=!1,Fa=0,ig.current=null,n===null||n.return===null){Ze=1,za=e,Ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=S_(o);if(m!==null){m.flags&=-257,R_(m,o,a,s,e),m.mode&1&&I_(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){I_(s,u,e),ug();break e}l=Error(L(426))}}else if(Ce&&a.mode&1){var T=S_(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),R_(T,o,a,s,e),Bm(ro(l,a));break e}}s=l=ro(l,a),Ze!==4&&(Ze=2),ma===null?ma=[s]:ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=O1(s,l,e);g_(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Wr===null||!Wr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=N1(s,a,e);g_(s,I);break e}}s=s.return}while(s!==null)}J1(n)}catch(A){e=A,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function Y1(){var t=dc.current;return dc.current=hc,t===null?hc:t}function ug(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),it===null||!(zi&268435455)&&!(sh&268435455)||xr(it,ht)}function mc(t,e){var n=pe;pe|=2;var r=Y1();(it!==t||ht!==e)&&(rr=null,Ni(t,e));do try{zP();break}catch(i){Q1(t,i)}while(!0);if(Hm(),pe=n,dc.current=r,Ke!==null)throw Error(L(261));return it=null,ht=0,Ze}function zP(){for(;Ke!==null;)X1(Ke)}function BP(){for(;Ke!==null&&!pC();)X1(Ke)}function X1(t){var e=eT(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?J1(t):Ke=e,ig.current=null}function J1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MP(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ke=null;return}}else if(n=LP(n,e,Zt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Ze===0&&(Ze=5)}function Ii(t,e,n){var r=ve,i=yn.transition;try{yn.transition=null,ve=1,qP(t,e,n,r)}finally{yn.transition=i,ve=r}return null}function qP(t,e,n,r){do Ws();while(Ur!==null);if(pe&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(SC(t,s),t===it&&(Ke=it=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||au||(au=!0,tT(Yu,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=ve;ve=1;var a=pe;pe|=4,ig.current=null,UP(t,n),W1(n,t),cP(ep),Ju=!!Zf,ep=Zf=null,t.current=n,FP(n),mC(),pe=a,ve=o,yn.transition=s}else t.current=n;if(au&&(au=!1,Ur=t,pc=i),s=t.pendingLanes,s===0&&(Wr=null),vC(n.stateNode),Ht(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fc)throw fc=!1,t=wp,wp=null,t;return pc&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===Ep?ga++:(ga=0,Ep=t):ga=0,hi(),null}function Ws(){if(Ur!==null){var t=xE(pc),e=yn.transition,n=ve;try{if(yn.transition=null,ve=16>t?16:t,Ur===null)var r=!1;else{if(t=Ur,Ur=null,pc=0,pe&6)throw Error(L(331));var i=pe;for(pe|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:pa(8,c,s)}var h=c.child;if(h!==null)h.return=c,z=h;else for(;z!==null;){c=z;var d=c.sibling,m=c.return;if(B1(c),c===u){z=null;break}if(d!==null){d.return=m,z=d;break}z=m}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,z=g;break e}z=s.return}}var p=t.current;for(z=p;z!==null;){o=z;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,z=v;else e:for(o=p;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ih(9,a)}}catch(A){Ue(a,a.return,A)}if(a===o){z=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,z=I;break e}z=a.return}}if(pe=i,hi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Yc,t)}catch{}r=!0}return r}finally{ve=n,yn.transition=e}}return!1}function U_(t,e,n){e=ro(n,e),e=O1(t,e,1),t=Hr(t,e,1),e=Dt(),t!==null&&(pl(t,1,e),Ht(t,e))}function Ue(t,e,n){if(t.tag===3)U_(t,t,n);else for(;e!==null;){if(e.tag===3){U_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=ro(n,t),t=N1(e,t,1),e=Hr(e,t,1),t=Dt(),e!==null&&(pl(e,1,t),Ht(e,t));break}}e=e.return}}function HP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ht&n)===n&&(Ze===4||Ze===3&&(ht&130023424)===ht&&500>ze()-og?Ni(t,0):sg|=n),Ht(t,e)}function Z1(t,e){e===0&&(t.mode&1?(e=Xl,Xl<<=1,!(Xl&130023424)&&(Xl=4194304)):e=1);var n=Dt();t=mr(t,e),t!==null&&(pl(t,e,n),Ht(t,n))}function WP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z1(t,n)}function KP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),Z1(t,n)}var eT;eT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,DP(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Ce&&e.flags&1048576&&r1(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bu(t,e),t=e.pendingProps;var i=Zs(e,It.current);Hs(e,n),i=Zm(null,e,r,t,i,n);var s=eg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,rc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gm(e),i.updater=nh,e.stateNode=i,i._reactInternals=e,up(e,r,t,n),e=dp(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&jm(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QP(r),t=Rn(r,t),i){case 0:e=hp(null,e,r,t,n);break e;case 1:e=C_(null,e,r,t,n);break e;case 11:e=A_(null,e,r,t,n);break e;case 14:e=k_(null,e,r,Rn(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),hp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),C_(t,e,r,i,n);case 3:e:{if(V1(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a1(t,e),lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ro(Error(L(423)),e),e=P_(t,e,r,n,i);break e}else if(r!==i){i=ro(Error(L(424)),e),e=P_(t,e,r,n,i);break e}else for(en=qr(e.stateNode.containerInfo.firstChild),rn=e,Ce=!0,kn=null,n=h1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),r===i){e=gr(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return d1(e),t===null&&op(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,tp(r,i)?o=null:s!==null&&tp(r,s)&&(e.flags|=32),M1(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&op(e),null;case 13:return U1(t,e,n);case 4:return Qm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=to(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),A_(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(oc,r._currentValue),r._currentValue=o,s!==null)if(xn(s.value,o)){if(s.children===i.children&&!Bt.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ap(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ap(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hs(e,n),i=vn(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),k_(t,e,r,i,n);case 15:return D1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),bu(t,e),e.tag=1,qt(r)?(t=!0,rc(e)):t=!1,Hs(e,n),u1(e,r,i),up(e,r,i,n),dp(null,e,r,!0,t,n);case 19:return F1(t,e,n);case 22:return L1(t,e,n)}throw Error(L(156,e.tag))};function tT(t,e){return kE(t,e)}function GP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new GP(t,e,n,r)}function cg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QP(t){if(typeof t=="function")return cg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pm)return 11;if(t===bm)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return Di(n.children,i,s,e);case Cm:o=8,i|=8;break;case Nf:return t=mn(12,n,e,i|2),t.elementType=Nf,t.lanes=s,t;case Df:return t=mn(13,n,e,i),t.elementType=Df,t.lanes=s,t;case Lf:return t=mn(19,n,e,i),t.elementType=Lf,t.lanes=s,t;case cE:return oh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lE:o=10;break e;case uE:o=9;break e;case Pm:o=11;break e;case bm:o=14;break e;case Cr:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Di(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function oh(t,e,n,r){return t=mn(22,t,r,e),t.elementType=cE,t.lanes=n,t.stateNode={isHidden:!1},t}function Qd(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Yd(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hg(t,e,n,r,i,s,o,a,l){return t=new YP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gm(s),t}function XP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nT(t){if(!t)return ri;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(qt(n))return t1(t,n,e)}return e}function rT(t,e,n,r,i,s,o,a,l){return t=hg(n,r,!0,t,i,s,o,a,l),t.context=nT(null),n=t.current,r=Dt(),i=Kr(n),s=hr(r,i),s.callback=e??null,Hr(n,s,i),t.current.lanes=i,pl(t,i,r),Ht(t,r),t}function ah(t,e,n,r){var i=e.current,s=Dt(),o=Kr(i);return n=nT(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(Pn(t,i,o,s),ku(t,i,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function F_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dg(t,e){F_(t,e),(t=t.alternate)&&F_(t,e)}function JP(){return null}var iT=typeof reportError=="function"?reportError:function(t){console.error(t)};function fg(t){this._internalRoot=t}lh.prototype.render=fg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));ah(t,e,null,null)};lh.prototype.unmount=fg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bi(function(){ah(null,t,null,null)}),e[pr]=null}};function lh(t){this._internalRoot=t}lh.prototype.unstable_scheduleHydration=function(t){if(t){var e=DE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<br.length&&e!==0&&e<br[n].priority;n++);br.splice(n,0,t),n===0&&ME(t)}};function pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $_(){}function ZP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=gc(o);s.call(u)}}var o=rT(e,r,t,0,null,!1,!1,"",$_);return t._reactRootContainer=o,t[pr]=o.current,Da(t.nodeType===8?t.parentNode:t),Bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=gc(l);a.call(u)}}var l=hg(t,0,!1,null,null,!1,!1,"",$_);return t._reactRootContainer=l,t[pr]=l.current,Da(t.nodeType===8?t.parentNode:t),Bi(function(){ah(e,l,n,r)}),l}function ch(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gc(o);a.call(l)}}ah(e,o,t,i)}else o=ZP(n,e,t,i,r);return gc(o)}OE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(Nm(e,n|1),Ht(e,ze()),!(pe&6)&&(io=ze()+500,hi()))}break;case 13:Bi(function(){var r=mr(t,1);if(r!==null){var i=Dt();Pn(r,t,1,i)}}),dg(t,1)}};Dm=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Dt();Pn(e,t,134217728,n)}dg(t,134217728)}};NE=function(t){if(t.tag===13){var e=Kr(t),n=mr(t,e);if(n!==null){var r=Dt();Pn(n,t,e,r)}dg(t,e)}};DE=function(){return ve};LE=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Hf=function(t,e,n){switch(e){case"input":if(Uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=eh(r);if(!i)throw Error(L(90));dE(r),Uf(r,i)}}}break;case"textarea":pE(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};EE=ag;TE=Bi;var eb={usingClientEntryPoint:!1,Events:[gl,xs,eh,_E,wE,ag]},Ho={findFiberByHostInstance:Ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tb={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=RE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||JP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Yc=lu.inject(tb),qn=lu}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eb;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pg(e))throw Error(L(200));return XP(t,e,null,n)};ln.createRoot=function(t,e){if(!pg(t))throw Error(L(299));var n=!1,r="",i=iT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hg(t,1,!1,null,null,n,!1,r,i),t[pr]=e.current,Da(t.nodeType===8?t.parentNode:t),new fg(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=RE(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return Bi(t)};ln.hydrate=function(t,e,n){if(!uh(e))throw Error(L(200));return ch(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!pg(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rT(e,null,t,1,n??null,i,!1,s,o),t[pr]=e.current,Da(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lh(e)};ln.render=function(t,e,n){if(!uh(e))throw Error(L(200));return ch(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!uh(t))throw Error(L(40));return t._reactRootContainer?(Bi(function(){ch(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};ln.unstable_batchedUpdates=ag;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uh(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return ch(t,e,n,!1,r)};ln.version="18.2.0-next-9e3b772b8-20220608";function sT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT)}catch(t){console.error(t)}}sT(),rE.exports=ln;var nb=rE.exports,j_=nb;xf.createRoot=j_.createRoot,xf.hydrateRoot=j_.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}var Fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fr||(Fr={}));const z_="popstate";function rb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Sp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yc(i)}return sb(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ib(){return Math.random().toString(36).substr(2,8)}function B_(t,e){return{usr:t.state,key:t.key,idx:e}}function Sp(t,e,n,r){return n===void 0&&(n=null),Ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ro(e):e,{state:n,key:e&&e.key||r||ib()})}function yc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ro(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Fr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ba({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Fr.Pop;let T=c(),g=T==null?null:T-u;u=T,l&&l({action:a,location:w.location,delta:g})}function d(T,g){a=Fr.Push;let p=Sp(w.location,T,g);n&&n(p,T),u=c()+1;let v=B_(p,u),I=w.createHref(p);try{o.pushState(v,"",I)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(I)}s&&l&&l({action:a,location:w.location,delta:1})}function m(T,g){a=Fr.Replace;let p=Sp(w.location,T,g);n&&n(p,T),u=c();let v=B_(p,u),I=w.createHref(p);o.replaceState(v,"",I),s&&l&&l({action:a,location:w.location,delta:0})}function _(T){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof T=="string"?T:yc(T);return Fe(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(z_,h),l=T,()=>{i.removeEventListener(z_,h),l=null}},createHref(T){return e(i,T)},createURL:_,encodeLocation(T){let g=_(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:m,go(T){return o.go(T)}};return w}var q_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(q_||(q_={}));function ob(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ro(e):e,i=qa(r.pathname||"/",n);if(i==null)return null;let s=oT(t);ab(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=gb(s[a],vb(i));return o}function oT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Qr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),oT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:pb(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of aT(s.path))i(s,o,l)}),e}function aT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=aT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ab(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lb=/^:\w+$/,ub=3,cb=2,hb=1,db=10,fb=-2,H_=t=>t==="*";function pb(t,e){let n=t.split("/"),r=n.length;return n.some(H_)&&(r+=fb),e&&(r+=cb),n.filter(i=>!H_(i)).reduce((i,s)=>i+(lb.test(s)?ub:s===""?hb:db),r)}function mb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gb(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Rp({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Qr([i,c.pathname]),pathnameBase:Ib(Qr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Qr([i,c.pathnameBase]))}return s}function Rp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let w=a[h]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const _=a[h];return m&&!_?u[d]=void 0:u[d]=_b(_||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function yb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vb(t){try{return decodeURI(t)}catch(e){return mg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _b(t,e){try{return decodeURIComponent(t)}catch(n){return mg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function qa(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ro(t):t;return{pathname:n?n.startsWith("/")?n:Eb(n,e):e,search:Sb(r),hash:Rb(i)}}function Eb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lT(t,e){let n=Tb(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ro(t):(i=Ba({},t),Fe(!i.pathname||!i.pathname.includes("?"),Xd("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Xd("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Xd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=wb(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Qr=t=>t.join("/").replace(/\/\/+/g,"/"),Ib=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Sb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Rb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ab(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cT=["post","put","patch","delete"];new Set(cT);const kb=["get",...cT];new Set(kb);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ha.apply(this,arguments)}const hh=b.createContext(null),hT=b.createContext(null),di=b.createContext(null),dh=b.createContext(null),fi=b.createContext({outlet:null,matches:[],isDataRoute:!1}),dT=b.createContext(null);function Cb(t,e){let{relative:n}=e===void 0?{}:e;vl()||Fe(!1);let{basename:r,navigator:i}=b.useContext(di),{hash:s,pathname:o,search:a}=ph(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Qr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function vl(){return b.useContext(dh)!=null}function _l(){return vl()||Fe(!1),b.useContext(dh).location}function fT(t){b.useContext(di).static||b.useLayoutEffect(t)}function fh(){let{isDataRoute:t}=b.useContext(fi);return t?zb():Pb()}function Pb(){vl()||Fe(!1);let t=b.useContext(hh),{basename:e,future:n,navigator:r}=b.useContext(di),{matches:i}=b.useContext(fi),{pathname:s}=_l(),o=JSON.stringify(lT(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return fT(()=>{a.current=!0}),b.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=uT(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Qr([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function bb(){let{matches:t}=b.useContext(fi),e=t[t.length-1];return e?e.params:{}}function ph(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(di),{matches:i}=b.useContext(fi),{pathname:s}=_l(),o=JSON.stringify(lT(i,r.v7_relativeSplatPath));return b.useMemo(()=>uT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function xb(t,e){return Ob(t,e)}function Ob(t,e,n,r){vl()||Fe(!1);let{navigator:i}=b.useContext(di),{matches:s}=b.useContext(fi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=_l(),c;if(e){var h;let T=typeof e=="string"?Ro(e):e;l==="/"||(h=T.pathname)!=null&&h.startsWith(l)||Fe(!1),c=T}else c=u;let d=c.pathname||"/",m=l==="/"?d:d.slice(l.length)||"/",_=ob(t,{pathname:m}),w=Vb(_&&_.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:Qr([l,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:Qr([l,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,n,r);return e&&w?b.createElement(dh.Provider,{value:{location:Ha({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Fr.Pop}},w):w}function Nb(){let t=jb(),e=Ab(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,s)}const Db=b.createElement(Nb,null);class Lb extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(fi.Provider,{value:this.props.routeContext},b.createElement(dT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mb(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(hh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(fi.Provider,{value:e},r)}function Vb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||Fe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:m}=n,_=h.route.loader&&d[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let m,_=!1,w=null,T=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||Db,l&&(u<0&&d===0?(Bb("route-fallback",!1),_=!0,T=null):u===d&&(_=!0,T=h.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,d+1)),p=()=>{let v;return m?v=w:_?v=T:h.route.Component?v=b.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=c,b.createElement(Mb,{match:h,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?b.createElement(Lb,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var pT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(pT||{}),vc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vc||{});function Ub(t){let e=b.useContext(hh);return e||Fe(!1),e}function Fb(t){let e=b.useContext(hT);return e||Fe(!1),e}function $b(t){let e=b.useContext(fi);return e||Fe(!1),e}function mT(t){let e=$b(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function jb(){var t;let e=b.useContext(dT),n=Fb(vc.UseRouteError),r=mT(vc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function zb(){let{router:t}=Ub(pT.UseNavigateStable),e=mT(vc.UseNavigateStable),n=b.useRef(!1);return fT(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ha({fromRouteId:e},s)))},[t,e])}const W_={};function Bb(t,e,n){!e&&!W_[t]&&(W_[t]=!0)}function nr(t){Fe(!1)}function qb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fr.Pop,navigator:s,static:o=!1,future:a}=t;vl()&&Fe(!1);let l=e.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:s,static:o,future:Ha({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ro(r));let{pathname:c="/",search:h="",hash:d="",state:m=null,key:_="default"}=r,w=b.useMemo(()=>{let T=qa(c,l);return T==null?null:{location:{pathname:T,search:h,hash:d,state:m,key:_},navigationType:i}},[l,c,h,d,m,_,i]);return w==null?null:b.createElement(di.Provider,{value:u},b.createElement(dh.Provider,{children:n,value:w}))}function Hb(t){let{children:e,location:n}=t;return xb(Ap(e),n)}new Promise(()=>{});function Ap(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Ap(r.props.children,s));return}r.type!==nr&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ap(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _c(){return _c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_c.apply(this,arguments)}function gT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Wb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Kb(t,e){return t.button===0&&(!e||e==="_self")&&!Wb(t)}const Gb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Qb=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Yb=b.createContext({isTransitioning:!1}),Xb="startTransition",K_=Wk[Xb];function Jb(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=rb({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=b.useCallback(h=>{u&&K_?K_(()=>l(h)):l(h)},[l,u]);return b.useLayoutEffect(()=>o.listen(c),[o,c]),b.createElement(qb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Zb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wa=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=gT(e,Gb),{basename:m}=b.useContext(di),_,w=!1;if(typeof u=="string"&&ex.test(u)&&(_=u,Zb))try{let v=new URL(window.location.href),I=u.startsWith("//")?new URL(v.protocol+u):new URL(u),A=qa(I.pathname,m);I.origin===v.origin&&A!=null?u=A+I.search+I.hash:w=!0}catch{}let T=Cb(u,{relative:i}),g=rx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(v){r&&r(v),v.defaultPrevented||g(v)}return b.createElement("a",_c({},d,{href:_||T,onClick:w||s?r:p,ref:n,target:l}))}),tx=b.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,h=gT(e,Qb),d=ph(l,{relative:h.relative}),m=_l(),_=b.useContext(hT),{navigator:w}=b.useContext(di),T=_!=null&&ix(d)&&u===!0,g=w.encodeLocation?w.encodeLocation(d).pathname:d.pathname,p=m.pathname,v=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase());const I=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let A=p===g||!o&&p.startsWith(g)&&p.charAt(I)==="/",k=v!=null&&(v===g||!o&&v.startsWith(g)&&v.charAt(g.length)==="/"),R={isActive:A,isPending:k,isTransitioning:T},M=A?r:void 0,H;typeof s=="function"?H=s(R):H=[s,A?"active":null,k?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let G=typeof a=="function"?a(R):a;return b.createElement(Wa,_c({},h,{"aria-current":M,className:H,ref:n,style:G,to:l,unstable_viewTransition:u}),typeof c=="function"?c(R):c)});var kp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kp||(kp={}));var G_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(G_||(G_={}));function nx(t){let e=b.useContext(hh);return e||Fe(!1),e}function rx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=fh(),u=_l(),c=ph(t,{relative:o});return b.useCallback(h=>{if(Kb(h,n)){h.preventDefault();let d=r!==void 0?r:yc(u)===yc(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function ix(t,e){e===void 0&&(e={});let n=b.useContext(Yb);n==null&&Fe(!1);let{basename:r}=nx(kp.useViewTransitionState),i=ph(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=qa(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=qa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Rp(i.pathname,o)!=null||Rp(i.pathname,s)!=null}function sx(){const t=b.useRef(null),[e,n]=b.useState([]),[r,i]=b.useState(!1),[s,o]=b.useState("user"),a=async(h="user")=>{try{const d=await navigator.mediaDevices.getUserMedia({video:{facingMode:h}});t.current&&(t.current.srcObject=d),i(!0)}catch(d){console.error("Error accessing the camera:",d)}},l=()=>{u();const h=s==="user"?"environment":"user";a(h),o(h)},u=()=>{const h=t.current.srcObject,d=h==null?void 0:h.getTracks();d&&d.forEach(m=>m.stop()),t.current.srcObject=null,i(!1)},c=()=>{if(r){const h=document.createElement("canvas");h.width=t.current.videoWidth,h.height=t.current.videoHeight,h.getContext("2d").drawImage(t.current,0,0,h.width,h.height);const m=h.toDataURL("image/jpeg");n(_=>[..._,m])}else console.warn("Camera is not turned on.")};return O.jsxs("div",{className:"max-w-[800px] mx-auto",children:[O.jsxs("div",{children:[O.jsx("video",{ref:t,className:`mx-auto px-4 max-w-[${r?480:0}] h-[${r?480:0}]`,style:{display:`${r?"block":"none"}`},autoPlay:!0,playsInline:!0,width:r?480:0,height:r?480:0}),O.jsxs("div",{className:"mt-4 text-center",children:[O.jsx("button",{onClick:a,disabled:r,children:O.jsx("ion-icon",{name:"videocam-outline"})}),O.jsx("button",{onClick:c,className:"mx-2",children:O.jsx("ion-icon",{name:"aperture-outline"})}),O.jsx("button",{onClick:u,disabled:!r,children:O.jsx("ion-icon",{name:"videocam-off-outline"})}),O.jsx("button",{onClick:l,children:O.jsx("ion-icon",{name:"sync-outline"})})]})]}),O.jsxs("div",{style:{marginTop:"20px"},children:[O.jsx("h2",{children:"Photo Gallery"}),O.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:e.map((h,d)=>O.jsx("img",{src:h,alt:`Captured Photo ${d+1}`,style:{maxWidth:"100px",marginRight:"10px",marginBottom:"10px"}},d))})]})]})}function ox(){return O.jsx(O.Fragment,{children:O.jsx(sx,{})})}var Q_={};/**
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
 */const yT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ax=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ax(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new lx;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ux=function(t){const e=yT(t);return vT.encodeByteArray(e,!0)},wc=function(t){return ux(t).replace(/\./g,"")},_T=function(t){try{return vT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hx=()=>cx().__FIREBASE_DEFAULTS__,dx=()=>{if(typeof process>"u"||typeof Q_>"u")return;const t=Q_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_T(t[1]);return e&&JSON.parse(e)},gg=()=>{try{return hx()||dx()||fx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wT=t=>{var e,n;return(n=(e=gg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ET=t=>{const e=wT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},TT=()=>{var t;return(t=gg())===null||t===void 0?void 0:t.config},IT=t=>{var e;return(e=gg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class px{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ST(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wc(JSON.stringify(n)),wc(JSON.stringify(o)),a].join(".")}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function RT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yx(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AT(){try{return typeof indexedDB=="object"}catch{return!1}}function kT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _x="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_x,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,a,r)}}function wx(t,e){return t.replace(Ex,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ex=/\{\$([^}]+)}/g;function Tx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ka(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Y_(s)&&Y_(o)){if(!Ka(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Y_(t){return t!==null&&typeof t=="object"}/**
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
 */function wl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ea(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ta(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ix(t,e){const n=new Sx(t,e);return n.subscribe.bind(n)}class Sx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jd),i.error===void 0&&(i.error=Jd),i.complete===void 0&&(i.complete=Jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jd(){}/**
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
 */const Ax=1e3,kx=2,Cx=4*60*60*1e3,Px=.5;function X_(t,e=Ax,n=kx){const r=e*Math.pow(n,t),i=Math.round(Px*r*(Math.random()-.5)*2);return Math.min(Cx,r+i)}/**
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
 */function Ae(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Si="[DEFAULT]";/**
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
 */class bx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new px;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ox(e))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Si){return this.instances.has(e)}getOptions(e=Si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Si){return this.component?this.component.multipleInstances?e:Si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xx(t){return t===Si?void 0:t}function Ox(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Dx={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Lx=he.INFO,Mx={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Vx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Mx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mh{constructor(e){this.name=e,this._logLevel=Lx,this._logHandler=Vx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Ux=(t,e)=>e.some(n=>t instanceof n);let J_,Z_;function Fx(){return J_||(J_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $x(){return Z_||(Z_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,Cp=new WeakMap,PT=new WeakMap,Zd=new WeakMap,yg=new WeakMap;function jx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CT.set(n,t)}).catch(()=>{}),yg.set(e,t),e}function zx(t){if(Cp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cp.set(t,e)}let Pp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bx(t){Pp=t(Pp)}function qx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ef(this),e,...n);return PT.set(r,e.sort?e.sort():[e]),Yr(r)}:$x().includes(t)?function(...e){return t.apply(ef(this),e),Yr(CT.get(this))}:function(...e){return Yr(t.apply(ef(this),e))}}function Hx(t){return typeof t=="function"?qx(t):(t instanceof IDBTransaction&&zx(t),Ux(t,Fx())?new Proxy(t,Pp):t)}function Yr(t){if(t instanceof IDBRequest)return jx(t);if(Zd.has(t))return Zd.get(t);const e=Hx(t);return e!==t&&(Zd.set(t,e),yg.set(e,t)),e}const ef=t=>yg.get(t);function Wx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yr(o.result),l.oldVersion,l.newVersion,Yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Kx=["get","getKey","getAll","getAllKeys","count"],Gx=["put","add","delete","clear"],tf=new Map;function e0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Gx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Kx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return tf.set(e,s),s}Bx(t=>({...t,get:(e,n,r)=>e0(e,n)||t.get(e,n,r),has:(e,n)=>!!e0(e,n)||t.has(e,n)}));/**
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
 */class Qx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bp="@firebase/app",t0="0.9.25";/**
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
 */const qi=new mh("@firebase/app"),Xx="@firebase/app-compat",Jx="@firebase/analytics-compat",Zx="@firebase/analytics",eO="@firebase/app-check-compat",tO="@firebase/app-check",nO="@firebase/auth",rO="@firebase/auth-compat",iO="@firebase/database",sO="@firebase/database-compat",oO="@firebase/functions",aO="@firebase/functions-compat",lO="@firebase/installations",uO="@firebase/installations-compat",cO="@firebase/messaging",hO="@firebase/messaging-compat",dO="@firebase/performance",fO="@firebase/performance-compat",pO="@firebase/remote-config",mO="@firebase/remote-config-compat",gO="@firebase/storage",yO="@firebase/storage-compat",vO="@firebase/firestore",_O="@firebase/firestore-compat",wO="firebase",EO="10.7.1";/**
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
 */const xp="[DEFAULT]",TO={[bp]:"fire-core",[Xx]:"fire-core-compat",[Zx]:"fire-analytics",[Jx]:"fire-analytics-compat",[tO]:"fire-app-check",[eO]:"fire-app-check-compat",[nO]:"fire-auth",[rO]:"fire-auth-compat",[iO]:"fire-rtdb",[sO]:"fire-rtdb-compat",[oO]:"fire-fn",[aO]:"fire-fn-compat",[lO]:"fire-iid",[uO]:"fire-iid-compat",[cO]:"fire-fcm",[hO]:"fire-fcm-compat",[dO]:"fire-perf",[fO]:"fire-perf-compat",[pO]:"fire-rc",[mO]:"fire-rc-compat",[gO]:"fire-gcs",[yO]:"fire-gcs-compat",[vO]:"fire-fst",[_O]:"fire-fst-compat","fire-js":"fire-js",[wO]:"fire-js-all"};/**
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
 */const Ec=new Map,Op=new Map;function IO(t,e){try{t.container.addComponent(e)}catch(n){qi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Op.has(e))return qi.debug(`There were multiple attempts to register component ${e}.`),!1;Op.set(e,t);for(const n of Ec.values())IO(n,t);return!0}function pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const SO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xr=new rs("app","Firebase",SO);/**
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
 */class RO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const is=EO;function bT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xr.create("bad-app-name",{appName:String(i)});if(n||(n=TT()),!n)throw Xr.create("no-options");const s=Ec.get(i);if(s){if(Ka(n,s.options)&&Ka(r,s.config))return s;throw Xr.create("duplicate-app",{appName:i})}const o=new Nx(i);for(const l of Op.values())o.addComponent(l);const a=new RO(n,r,o);return Ec.set(i,a),a}function gh(t=xp){const e=Ec.get(t);if(!e&&t===xp&&TT())return bT();if(!e)throw Xr.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let i=(r=TO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qi.warn(a.join(" "));return}On(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const AO="firebase-heartbeat-database",kO=1,Ga="firebase-heartbeat-store";let nf=null;function xT(){return nf||(nf=Wx(AO,kO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ga)}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),nf}async function CO(t){try{return await(await xT()).transaction(Ga).objectStore(Ga).get(OT(t))}catch(e){if(e instanceof Tn)qi.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qi.warn(n.message)}}}async function n0(t,e){try{const r=(await xT()).transaction(Ga,"readwrite");await r.objectStore(Ga).put(e,OT(t)),await r.done}catch(n){if(n instanceof Tn)qi.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qi.warn(r.message)}}}function OT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PO=1024,bO=30*24*60*60*1e3;class xO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=r0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=r0(),{heartbeatsToSend:r,unsentEntries:i}=OO(this._heartbeatsCache.heartbeats),s=wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function r0(){return new Date().toISOString().substring(0,10)}function OO(t,e=PO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),i0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),i0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AT()?kT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function i0(t){return wc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function DO(t){On(new wn("platform-logger",e=>new Qx(e),"PRIVATE")),On(new wn("heartbeat",e=>new xO(e),"PRIVATE")),Wt(bp,t0,t),Wt(bp,t0,"esm2017"),Wt("fire-js","")}DO("");function vg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function NT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LO=NT,DT=new rs("auth","Firebase",NT());/**
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
 */const Tc=new mh("@firebase/auth");function MO(t,...e){Tc.logLevel<=he.WARN&&Tc.warn(`Auth (${is}): ${t}`,...e)}function Du(t,...e){Tc.logLevel<=he.ERROR&&Tc.error(`Auth (${is}): ${t}`,...e)}/**
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
 */function Nn(t,...e){throw _g(t,...e)}function Wn(t,...e){return _g(t,...e)}function VO(t,e,n){const r=Object.assign(Object.assign({},LO()),{[e]:n});return new rs("auth","Firebase",r).create(e,{appName:t.name})}function _g(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return DT.create(t,...e)}function ee(t,e,...n){if(!t)throw _g(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Du(e),new Error(e)}function yr(t,e){t||lr(e)}/**
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
 */function Np(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UO(){return s0()==="http:"||s0()==="https:"}function s0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function FO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UO()||RT()||"connection"in navigator)?navigator.onLine:!0}function $O(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class El{constructor(e,n){this.shortDelay=e,this.longDelay=n,yr(n>e,"Short delay should be less than long delay!"),this.isMobile=mx()||gx()}get(){return FO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wg(t,e){yr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class LT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zO=new El(3e4,6e4);function mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,i={}){return MT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=wl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),LT.fetch()(VT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function MT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jO),e);try{const i=new qO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw uu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw uu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw uu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw uu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw VO(t,c,u);Nn(t,c)}}catch(i){if(i instanceof Tn)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function Tl(t,e,n,r,i={}){const s=await Tr(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function VT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wg(t.config,i):`${t.config.apiScheme}://${i}`}function BO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),zO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}function o0(t){return t!==void 0&&t.enterprise!==void 0}class HO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return BO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function WO(t,e){return Tr(t,"GET","/v2/recaptchaConfig",mi(t,e))}/**
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
 */async function KO(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function GO(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QO(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=Eg(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ya(rf(i.auth_time)),issuedAtTime:ya(rf(i.iat)),expirationTime:ya(rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rf(t){return Number(t)*1e3}function Eg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Du("JWT malformed, contained fewer than 3 sections"),null;try{const i=_T(n);return i?JSON.parse(i):(Du("Failed to decode base64 JWT payload"),null)}catch(i){return Du("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YO(t){const e=Eg(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function so(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&XO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class UT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ya(this.lastLoginAt),this.creationTime=ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await so(t,GO(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tN(s.providerUserInfo):[],a=eN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new UT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ZO(t){const e=Ae(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tN(t){return t.map(e=>{var{providerId:n}=e,r=vg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nN(t,e){const n=await MT(t,{},async()=>{const r=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=VT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rN(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",mi(t,e))}/**
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
 */class Qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qa;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qa,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
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
 */function Ar(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new UT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await so(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QO(this,e)}reload(){return ZO(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await so(this,KO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:I,isAnonymous:A,providerData:k,stsTokenManager:R}=n;ee(v&&R,e,"internal-error");const M=Qa.fromJSON(this.name,R);ee(typeof v=="string",e,"internal-error"),Ar(h,e.name),Ar(d,e.name),ee(typeof I=="boolean",e,"internal-error"),ee(typeof A=="boolean",e,"internal-error"),Ar(m,e.name),Ar(_,e.name),Ar(w,e.name),Ar(T,e.name),Ar(g,e.name),Ar(p,e.name);const H=new Li({uid:v,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:A,photoURL:_,phoneNumber:m,tenantId:w,stsTokenManager:M,createdAt:g,lastLoginAt:p});return k&&Array.isArray(k)&&(H.providerData=k.map(G=>Object.assign({},G))),T&&(H._redirectEventId=T),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qa;i.updateFromServerResponse(n);const s=new Li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ic(s),s}}/**
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
 */const a0=new Map;function ur(t){yr(t instanceof Function,"Expected a class definition");let e=a0.get(t);return e?(yr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,a0.set(t,e),e)}/**
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
 */class FT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FT.type="NONE";const l0=FT;/**
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
 */function Lu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Lu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Lu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks(ur(l0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ur(l0);const o=Lu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Li._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ks(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ks(s,e,r))}}/**
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
 */function u0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($T(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qT(e))return"Blackberry";if(HT(e))return"Webos";if(Tg(e))return"Safari";if((e.includes("chrome/")||jT(e))&&!e.includes("edge/"))return"Chrome";if(BT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $T(t=St()){return/firefox\//i.test(t)}function Tg(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jT(t=St()){return/crios\//i.test(t)}function zT(t=St()){return/iemobile/i.test(t)}function BT(t=St()){return/android/i.test(t)}function qT(t=St()){return/blackberry/i.test(t)}function HT(t=St()){return/webos/i.test(t)}function yh(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iN(t=St()){var e;return yh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sN(){return yx()&&document.documentMode===10}function WT(t=St()){return yh(t)||BT(t)||HT(t)||qT(t)||/windows phone/i.test(t)||zT(t)}function oN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function KT(t,e=[]){let n;switch(t){case"Browser":n=u0(St());break;case"Worker":n=`${u0(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
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
 */class aN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lN(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",mi(t,e))}/**
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
 */const uN=6;class cN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class hN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new c0(this),this.idTokenSubscription=new c0(this),this.beforeStateQueue=new aN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ur(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ur(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lN(this),n=new cN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ur(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[ur(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ss(t){return Ae(t)}class c0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ix(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function dN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function GT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dN().appendChild(r)})}function fN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pN="https://www.google.com/recaptcha/enterprise.js?render=",mN="recaptcha-enterprise",gN="NO_RECAPTCHA";class yN{constructor(e){this.type=mN,this.auth=ss(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{WO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new HO(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;o0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(gN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&o0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}GT(pN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function h0(t,e,n,r=!1){const i=new yN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Dp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await h0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await h0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function vN(t,e){const n=pi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ka(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function _N(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ur);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wN(t,e,n){const r=ss(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=QT(e),{host:o,port:a}=EN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||TN()}function QT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EN(t){const e=QT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:d0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:d0(o)}}}function d0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,n){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function IN(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function SN(t,e){return Tl(t,"POST","/v1/accounts:signInWithPassword",mi(t,e))}/**
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
 */async function RN(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",mi(t,e))}async function AN(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",mi(t,e))}/**
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
 */class Ya extends Ig{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dp(e,n,"signInWithPassword",SN);case"emailLink":return RN(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dp(e,r,"signUpPassword",IN);case"emailLink":return AN(e,{idToken:n,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gs(t,e){return Tl(t,"POST","/v1/accounts:signInWithIdp",mi(t,e))}/**
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
 */const kN="http://localhost";class Hi extends Ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:kN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wl(n)}return e}}/**
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
 */function CN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PN(t){const e=ea(ta(t)).link,n=e?ea(ta(e)).deep_link_id:null,r=ea(ta(t)).deep_link_id;return(r?ea(ta(r)).link:null)||r||n||e||t}class Sg{constructor(e){var n,r,i,s,o,a;const l=ea(ta(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=CN((i=l.mode)!==null&&i!==void 0?i:null);ee(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PN(e);try{return new Sg(n)}catch{return null}}}/**
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
 */class Ao{constructor(){this.providerId=Ao.PROVIDER_ID}static credential(e,n){return Ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sg.parseLink(n);return ee(r,"argument-error"),Ya._fromEmailAndCode(e,r.code,r.tenantId)}}Ao.PROVIDER_ID="password";Ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class YT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Il extends YT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Or extends Il{constructor(){super("facebook.com")}static credential(e){return Hi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
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
 */class Nr extends Il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
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
 */class Dr extends Il{constructor(){super("github.com")}static credential(e){return Hi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
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
 */class Lr extends Il{constructor(){super("twitter.com")}static credential(e,n){return Hi._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
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
 */async function bN(t,e){return Tl(t,"POST","/v1/accounts:signUp",mi(t,e))}/**
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
 */class Wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Li._fromIdTokenResponse(e,r,i),o=f0(r);return new Wi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=f0(r);return new Wi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function f0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sc extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sc(e,n,r,i)}}function XT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(t,s,e,r):s})}async function xN(t,e,n=!1){const r=await so(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wi._forOperation(t,"link",r)}/**
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
 */async function ON(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await so(t,XT(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=Eg(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Wi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
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
 */async function JT(t,e,n=!1){const r="signIn",i=await XT(t,r,e),s=await Wi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function NN(t,e){return JT(ss(t),e)}/**
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
 */async function ZT(t){const e=ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DN(t,e,n){const r=ss(t),o=await Dp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ZT(t),l}),a=await Wi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function LN(t,e,n){return NN(Ae(t),Ao.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZT(t),r})}/**
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
 */async function MN(t,e){return Tr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function VN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await so(r,MN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function UN(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function FN(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function $N(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function jN(t){return Ae(t).signOut()}const Rc="__sak";/**
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
 */class eI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rc,"1"),this.storage.removeItem(Rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zN(){const t=St();return Tg(t)||yh(t)}const BN=1e3,qN=10;class tI extends eI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zN()&&oN(),this.fallbackToPolling=WT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tI.type="LOCAL";const HN=tI;/**
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
 */class nI extends eI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nI.type="SESSION";const rI=nI;/**
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
 */function WN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await WN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vh.receivers=[];/**
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
 */function Rg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Rg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Kn(){return window}function GN(t){Kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function iI(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function QN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XN(){return iI()?self:null}/**
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
 */const sI="firebaseLocalStorageDb",JN=1,Ac="firebaseLocalStorage",oI="fbase_key";class Sl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _h(t,e){return t.transaction([Ac],e?"readwrite":"readonly").objectStore(Ac)}function ZN(){const t=indexedDB.deleteDatabase(sI);return new Sl(t).toPromise()}function Lp(){const t=indexedDB.open(sI,JN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ac,{keyPath:oI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ac)?e(r):(r.close(),await ZN(),e(await Lp()))})})}async function p0(t,e,n){const r=_h(t,!0).put({[oI]:e,value:n});return new Sl(r).toPromise()}async function eD(t,e){const n=_h(t,!1).get(e),r=await new Sl(n).toPromise();return r===void 0?null:r.value}function m0(t,e){const n=_h(t,!0).delete(e);return new Sl(n).toPromise()}const tD=800,nD=3;class aI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vh._getInstance(XN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QN(),!this.activeServiceWorker)return;this.sender=new KN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lp();return await p0(e,Rc,"1"),await m0(e,Rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>p0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>m0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_h(i,!1).getAll();return new Sl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aI.type="LOCAL";const rD=aI;new El(3e4,6e4);/**
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
 */function iD(t,e){return e?ur(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ag extends Ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sD(t){return JT(t.auth,new Ag(t),t.bypassAuthState)}function oD(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),ON(n,new Ag(t),t.bypassAuthState)}async function aD(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),xN(n,new Ag(t),t.bypassAuthState)}/**
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
 */class lI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sD;case"linkViaPopup":case"linkViaRedirect":return aD;case"reauthViaPopup":case"reauthViaRedirect":return oD;default:Nn(this.auth,"internal-error")}}resolve(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lD=new El(2e3,1e4);class Us extends lI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){yr(this.filter.length===1,"Popup operations only handle one event");const e=Rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lD.get())};e()}}Us.currentPopupAction=null;/**
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
 */const uD="pendingRedirect",Mu=new Map;class cD extends lI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const r=await hD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hD(t,e){const n=pD(e),r=fD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dD(t,e){Mu.set(t._key(),e)}function fD(t){return ur(t._redirectPersistence)}function pD(t){return Lu(uD,t.config.apiKey,t.name)}async function mD(t,e,n=!1){const r=ss(t),i=iD(r,e),o=await new cD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const gD=10*60*1e3;class yD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gD&&this.cachedEventUids.clear(),this.cachedEventUids.has(g0(e))}saveEventToCache(e){this.cachedEventUids.add(g0(e)),this.lastProcessedEventTime=Date.now()}}function g0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uI(t);default:return!1}}/**
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
 */async function _D(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
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
 */const wD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ED=/^https?/;async function TD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _D(t);for(const n of e)try{if(ID(n))return}catch{}Nn(t,"unauthorized-domain")}function ID(t){const e=Np(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ED.test(n))return!1;if(wD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const SD=new El(3e4,6e4);function y0(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RD(t){return new Promise((e,n)=>{var r,i,s;function o(){y0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{y0(),n(Wn(t,"network-request-failed"))},timeout:SD.get()})}if(!((i=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kn().gapi)===null||s===void 0)&&s.load)o();else{const a=fN("iframefcb");return Kn()[a]=()=>{gapi.load?o():n(Wn(t,"network-request-failed"))},GT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Vu=null,e})}let Vu=null;function AD(t){return Vu=Vu||RD(t),Vu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const kD=new El(5e3,15e3),CD="__/auth/iframe",PD="emulator/auth/iframe",bD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OD(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wg(e,PD):`https://${t.config.authDomain}/${CD}`,r={apiKey:e.apiKey,appName:t.name,v:is},i=xD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wl(r).slice(1)}`}async function ND(t){const e=await AD(t),n=Kn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:OD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),a=Kn().setTimeout(()=>{s(o)},kD.get());function l(){Kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const DD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LD=500,MD=600,VD="_blank",UD="http://localhost";class v0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FD(t,e,n,r=LD,i=MD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},DD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=St().toLowerCase();n&&(a=jT(u)?VD:n),$T(u)&&(e=e||UD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(iN(u)&&a!=="_self")return $D(e||"",a),new v0(null);const h=window.open(e||"",a,c);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new v0(h)}function $D(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jD="__/auth/handler",zD="emulator/auth/handler",BD=encodeURIComponent("fac");async function _0(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:i};if(e instanceof YT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Il){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${BD}=${encodeURIComponent(l)}`:"";return`${qD(t)}?${wl(a).slice(1)}${u}`}function qD({config:t}){return t.emulator?wg(t,zD):`https://${t.authDomain}/${jD}`}/**
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
 */const sf="webStorageSupport";class HD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rI,this._completeRedirectFn=mD,this._overrideRedirectResult=dD}async _openPopup(e,n,r,i){var s;yr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _0(e,n,r,Np(),i);return FD(e,o,Rg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _0(e,n,r,Np(),i);return GN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ND(e),r=new yD(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sf,{type:sf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sf];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WT()||Tg()||yh()}}const WD=HD;var w0="@firebase/auth",E0="1.5.1";/**
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
 */class KD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QD(t){On(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KT(t)},u=new hN(r,i,s,l);return _N(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new wn("auth-internal",e=>{const n=ss(e.getProvider("auth").getImmediate());return(r=>new KD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(w0,E0,GD(t)),Wt(w0,E0,"esm2017")}/**
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
 */const YD=5*60,XD=IT("authIdTokenMaxAge")||YD;let T0=null;const JD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XD)return;const i=n==null?void 0:n.token;T0!==i&&(T0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZD(t=gh()){const e=pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vN(t,{popupRedirectResolver:WD,persistence:[rD,HN,rI]}),r=IT("authTokenSyncURL");if(r){const s=JD(r);FN(n,s,()=>s(n.currentUser)),UN(n,o=>s(o))}const i=wT("auth");return i&&wN(n,`http://${i}`),n}QD("Browser");var eL="firebase",tL="10.7.1";/**
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
 */Wt(eL,tL,"app");const nL=(t,e)=>e.some(n=>t instanceof n);let I0,S0;function rL(){return I0||(I0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iL(){return S0||(S0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cI=new WeakMap,Mp=new WeakMap,hI=new WeakMap,of=new WeakMap,kg=new WeakMap;function sL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cI.set(n,t)}).catch(()=>{}),kg.set(e,t),e}function oL(t){if(Mp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mp.set(t,e)}let Vp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aL(t){Vp=t(Vp)}function lL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(af(this),e,...n);return hI.set(r,e.sort?e.sort():[e]),Jr(r)}:iL().includes(t)?function(...e){return t.apply(af(this),e),Jr(cI.get(this))}:function(...e){return Jr(t.apply(af(this),e))}}function uL(t){return typeof t=="function"?lL(t):(t instanceof IDBTransaction&&oL(t),nL(t,rL())?new Proxy(t,Vp):t)}function Jr(t){if(t instanceof IDBRequest)return sL(t);if(of.has(t))return of.get(t);const e=uL(t);return e!==t&&(of.set(t,e),kg.set(e,t)),e}const af=t=>kg.get(t);function cL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const hL=["get","getKey","getAll","getAllKeys","count"],dL=["put","add","delete","clear"],lf=new Map;function R0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return lf.set(e,s),s}aL(t=>({...t,get:(e,n,r)=>R0(e,n)||t.get(e,n,r),has:(e,n)=>!!R0(e,n)||t.has(e,n)}));const dI="@firebase/installations",Cg="0.6.4";/**
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
 */const fI=1e4,pI=`w:${Cg}`,mI="FIS_v2",fL="https://firebaseinstallations.googleapis.com/v1",pL=60*60*1e3,mL="installations",gL="Installations";/**
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
 */const yL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ki=new rs(mL,gL,yL);function gI(t){return t instanceof Tn&&t.code.includes("request-failed")}/**
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
 */function yI({projectId:t}){return`${fL}/projects/${t}/installations`}function vI(t){return{token:t.token,requestStatus:2,expiresIn:_L(t.expiresIn),creationTime:Date.now()}}async function _I(t,e){const r=(await e.json()).error;return Ki.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vL(t,{refreshToken:e}){const n=wI(t);return n.append("Authorization",wL(e)),n}async function EI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _L(t){return Number(t.replace("s","000"))}function wL(t){return`${mI} ${t}`}/**
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
 */async function EL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=yI(t),i=wI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:mI,appId:t.appId,sdkVersion:pI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await EI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:vI(u.authToken)}}else throw await _I("Create Installation",l)}/**
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
 */function TI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function TL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const IL=/^[cdef][\w-]{21}$/,Up="";function SL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=RL(t);return IL.test(n)?n:Up}catch{return Up}}function RL(t){return TL(t).substr(0,22)}/**
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
 */function wh(t){return`${t.appName}!${t.appId}`}/**
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
 */const II=new Map;function SI(t,e){const n=wh(t);RI(n,e),AL(n,e)}function RI(t,e){const n=II.get(t);if(n)for(const r of n)r(e)}function AL(t,e){const n=kL();n&&n.postMessage({key:t,fid:e}),CL()}let Ci=null;function kL(){return!Ci&&"BroadcastChannel"in self&&(Ci=new BroadcastChannel("[Firebase] FID Change"),Ci.onmessage=t=>{RI(t.data.key,t.data.fid)}),Ci}function CL(){II.size===0&&Ci&&(Ci.close(),Ci=null)}/**
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
 */const PL="firebase-installations-database",bL=1,Gi="firebase-installations-store";let uf=null;function Pg(){return uf||(uf=cL(PL,bL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gi)}}})),uf}async function kc(t,e){const n=wh(t),i=(await Pg()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&SI(t,e.fid),e}async function AI(t){const e=wh(t),r=(await Pg()).transaction(Gi,"readwrite");await r.objectStore(Gi).delete(e),await r.done}async function Eh(t,e){const n=wh(t),i=(await Pg()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&SI(t,a.fid),a}/**
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
 */async function bg(t){let e;const n=await Eh(t.appConfig,r=>{const i=xL(r),s=OL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Up?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xL(t){const e=t||{fid:SL(),registrationStatus:0};return kI(e)}function OL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ki.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DL(t)}:{installationEntry:e}}async function NL(t,e){try{const n=await EL(t,e);return kc(t.appConfig,n)}catch(n){throw gI(n)&&n.customData.serverCode===409?await AI(t.appConfig):await kc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function DL(t){let e=await A0(t.appConfig);for(;e.registrationStatus===1;)await TI(100),e=await A0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bg(t);return r||n}return e}function A0(t){return Eh(t,e=>{if(!e)throw Ki.create("installation-not-found");return kI(e)})}function kI(t){return LL(t)?{fid:t.fid,registrationStatus:0}:t}function LL(t){return t.registrationStatus===1&&t.registrationTime+fI<Date.now()}/**
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
 */async function ML({appConfig:t,heartbeatServiceProvider:e},n){const r=VL(t,n),i=vL(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:pI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await EI(()=>fetch(r,a));if(l.ok){const u=await l.json();return vI(u)}else throw await _I("Generate Auth Token",l)}function VL(t,{fid:e}){return`${yI(t)}/${e}/authTokens:generate`}/**
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
 */async function xg(t,e=!1){let n;const r=await Eh(t.appConfig,s=>{if(!CI(s))throw Ki.create("not-registered");const o=s.authToken;if(!e&&$L(o))return s;if(o.requestStatus===1)return n=UL(t,e),s;{if(!navigator.onLine)throw Ki.create("app-offline");const a=zL(s);return n=FL(t,a),a}});return n?await n:r.authToken}async function UL(t,e){let n=await k0(t.appConfig);for(;n.authToken.requestStatus===1;)await TI(100),n=await k0(t.appConfig);const r=n.authToken;return r.requestStatus===0?xg(t,e):r}function k0(t){return Eh(t,e=>{if(!CI(e))throw Ki.create("not-registered");const n=e.authToken;return BL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function FL(t,e){try{const n=await ML(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await kc(t.appConfig,r),n}catch(n){if(gI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await AI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await kc(t.appConfig,r)}throw n}}function CI(t){return t!==void 0&&t.registrationStatus===2}function $L(t){return t.requestStatus===2&&!jL(t)}function jL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pL}function zL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function BL(t){return t.requestStatus===1&&t.requestTime+fI<Date.now()}/**
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
 */async function qL(t){const e=t,{installationEntry:n,registrationPromise:r}=await bg(e);return r?r.catch(console.error):xg(e).catch(console.error),n.fid}/**
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
 */async function HL(t,e=!1){const n=t;return await WL(n),(await xg(n,e)).token}async function WL(t){const{registrationPromise:e}=await bg(t);e&&await e}/**
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
 */function KL(t){if(!t||!t.options)throw cf("App Configuration");if(!t.name)throw cf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw cf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function cf(t){return Ki.create("missing-app-config-values",{valueName:t})}/**
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
 */const PI="installations",GL="installations-internal",QL=t=>{const e=t.getProvider("app").getImmediate(),n=KL(e),r=pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YL=t=>{const e=t.getProvider("app").getImmediate(),n=pi(e,PI).getImmediate();return{getId:()=>qL(n),getToken:i=>HL(n,i)}};function XL(){On(new wn(PI,QL,"PUBLIC")),On(new wn(GL,YL,"PRIVATE"))}XL();Wt(dI,Cg);Wt(dI,Cg,"esm2017");/**
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
 */const Cc="analytics",JL="firebase_id",ZL="origin",eM=60*1e3,tM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Og="https://www.googletagmanager.com/gtag/js";/**
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
 */const Kt=new mh("@firebase/analytics");/**
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
 */const nM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},sn=new rs("analytics","Analytics",nM);/**
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
 */function rM(t){if(!t.startsWith(Og)){const e=sn.create("invalid-gtag-resource",{gtagURL:t});return Kt.warn(e.message),""}return t}function bI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function iM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function sM(t,e){const n=iM("firebase-js-sdk-policy",{createScriptURL:rM}),r=document.createElement("script"),i=`${Og}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function oM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function aM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await bI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Kt.error(a)}t("config",i,s)}async function lM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await bI(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Kt.error(s)}}function uM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await lM(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await aM(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Kt.error(a)}}return i}function cM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=uM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function hM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Og)&&n.src.includes(t))return n;return null}/**
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
 */const dM=30,fM=1e3;class pM{constructor(e={},n=fM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xI=new pM;function mM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:mM(r)},s=tM.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function yM(t,e=xI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw sn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw sn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new wM;return setTimeout(async()=>{a.abort()},n!==void 0?n:eM),OI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function OI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=xI){var s;const{appId:o,measurementId:a}=t;try{await vM(r,e)}catch(l){if(a)return Kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await gM(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!_M(u)){if(i.deleteThrottleMetadata(o),a)return Kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?X_(n,i.intervalMillis,dM):X_(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),Kt.debug(`Calling attemptFetch again in ${c} millis`),OI(t,h,r,i)}}function vM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _M(t){if(!(t instanceof Tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class wM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function EM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function TM(){if(AT())try{await kT()}catch(t){return Kt.warn(sn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Kt.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IM(t,e,n,r,i,s,o){var a;const l=yM(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Kt.error(m)),e.push(l);const u=TM().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);hM(s)||sM(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[ZL]="firebase",d.update=!0,h!=null&&(d[JL]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class SM{constructor(e){this.app=e}_delete(){return delete va[this.app.options.appId],Promise.resolve()}}let va={},C0=[];const P0={};let hf="dataLayer",RM="gtag",b0,NI,x0=!1;function AM(){const t=[];if(RT()&&t.push("This is a browser extension environment."),vx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:e});Kt.warn(n.message)}}function kM(t,e,n){AM();const r=t.options.appId;if(!r)throw sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw sn.create("no-api-key");if(va[r]!=null)throw sn.create("already-exists",{id:r});if(!x0){oM(hf);const{wrappedGtag:s,gtagCore:o}=cM(va,C0,P0,hf,RM);NI=s,b0=o,x0=!0}return va[r]=IM(t,C0,P0,e,b0,hf,n),new SM(t)}function CM(t=gh()){t=Ae(t);const e=pi(t,Cc);return e.isInitialized()?e.getImmediate():PM(t)}function PM(t,e={}){const n=pi(t,Cc);if(n.isInitialized()){const i=n.getImmediate();if(Ka(e,n.getOptions()))return i;throw sn.create("already-initialized")}return n.initialize({options:e})}function bM(t,e,n,r){t=Ae(t),EM(NI,va[t.app.options.appId],e,n,r).catch(i=>Kt.error(i))}const O0="@firebase/analytics",N0="0.10.0";function xM(){On(new wn(Cc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return kM(r,i,n)},"PUBLIC")),On(new wn("analytics-internal",t,"PRIVATE")),Wt(O0,N0),Wt(O0,N0,"esm2017");function t(e){try{const n=e.getProvider(Cc).getImmediate();return{logEvent:(r,i,s)=>bM(n,r,i,s)}}catch(n){throw sn.create("interop-component-reg-failed",{reason:n})}}}xM();/**
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
 */const DI="firebasestorage.googleapis.com",LI="storageBucket",OM=2*60*1e3,NM=10*60*1e3,DM=1e3;/**
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
 */class Me extends Tn{constructor(e,n,r=0){super(df(e),`Firebase Storage: ${n} (${df(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return df(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function df(t){return"storage/"+t}function Ng(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(ke.UNKNOWN,t)}function LM(t){return new Me(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function MM(t){return new Me(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function VM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(ke.UNAUTHENTICATED,t)}function UM(){return new Me(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FM(t){return new Me(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function MI(){return new Me(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VI(){return new Me(ke.CANCELED,"User canceled the upload/download.")}function $M(t){return new Me(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function jM(t){return new Me(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zM(){return new Me(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+LI+"' property when initializing the app?")}function UI(){return new Me(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BM(){return new Me(ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function qM(){return new Me(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HM(t){return new Me(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fp(t){return new Me(ke.INVALID_ARGUMENT,t)}function FI(){return new Me(ke.APP_DELETED,"The Firebase app was deleted.")}function WM(t){return new Me(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _a(t,e){return new Me(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Wo(t){throw new Me(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(r.path==="")return r;throw jM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(I){I.path_=decodeURIComponent(I.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},w=n===DI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",g=new RegExp(`^https?://${w}/${i}/${T}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:m,indices:_,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let I=0;I<v.length;I++){const A=v[I],k=A.regex.exec(e);if(k){const R=k[A.indices.bucket];let M=k[A.indices.path];M||(M=""),r=new tn(R,M),A.postModify(r);break}}if(r==null)throw $M(e);return r}}class KM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function GM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(m,l())},T)}function d(){s&&clearTimeout(s)}function m(T,...g){if(u){d();return}if(T){d(),c.call(null,T,...g);return}if(l()||o){d(),c.call(null,T,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let _=!1;function w(T){_||(_=!0,d(),!u&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function QM(t){t(!1)}/**
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
 */function YM(t){return t!==void 0}function XM(t){return typeof t=="function"}function JM(t){return typeof t=="object"&&!Array.isArray(t)}function Th(t){return typeof t=="string"||t instanceof String}function D0(t){return Dg()&&t instanceof Blob}function Dg(){return typeof Blob<"u"}function L0(t,e,n,r){if(r<e)throw Fp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Rl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $I(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Mi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mi||(Mi={}));/**
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
 */function jI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class ZM{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new cu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mi.NO_ERROR,l=s.getStatus();if(!a||jI(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Mi.ABORT;r(!1,new cu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new cu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());YM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Ng();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?FI():VI();o(l)}else{const l=MI();o(l)}};this.canceled_?n(!1,new cu(!1,null,!0)):this.backoffId_=GM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function eV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iV(t,e,n,r,i,s,o=!0){const a=$I(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return nV(u,e),eV(u,n),tV(u,s),rV(u,r),new ZM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function sV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oV(...t){const e=sV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Dg())return new Blob(t);throw new Me(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function lV(t){if(typeof atob>"u")throw HM("base-64");return atob(t)}/**
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
 */const jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ff{constructor(e,n){this.data=e,this.contentType=n||null}}function uV(t,e){switch(t){case jn.RAW:return new ff(zI(e));case jn.BASE64:case jn.BASE64URL:return new ff(BI(t,e));case jn.DATA_URL:return new ff(hV(e),dV(e))}throw Ng()}function zI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cV(t){let e;try{e=decodeURIComponent(t)}catch{throw _a(jn.DATA_URL,"Malformed data URL.")}return zI(e)}function BI(t,e){switch(t){case jn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw _a(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw _a(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lV(e)}catch(i){throw i.message.includes("polyfill")?i:_a(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class qI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _a(jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hV(t){const e=new qI(t);return e.base64?BI(jn.BASE64,e.rest):cV(e.rest)}function dV(t){return new qI(t).contentType}function fV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Mr{constructor(e,n){let r=0,i="";D0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(D0(this.data_)){const r=this.data_,i=aV(r,e,n);return i===null?null:new Mr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mr(r,!0)}}static getBlob(...e){if(Dg()){const n=e.map(r=>r instanceof Mr?r.data_:r);return new Mr(oV.apply(null,n))}else{const n=e.map(o=>Th(o)?uV(jn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Mr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function HI(t){let e;try{e=JSON.parse(t)}catch{return null}return JM(e)?e:null}/**
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
 */function pV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function WI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gV(t,e){return e}class xt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||gV}}let hu=null;function yV(t){return!Th(t)||t.length<2?t:WI(t)}function KI(){if(hu)return hu;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(s,o){return yV(o)}const n=new xt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new xt("size");return i.xform=r,t.push(i),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),hu=t,hu}function vV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new tn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function _V(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return vV(r,t),r}function GI(t,e,n){const r=HI(e);return r===null?null:_V(t,r,n)}function wV(t,e,n,r){const i=HI(e);if(i===null||!Th(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=Rl(d,n,r),_=$I({alt:"media",token:u});return m+_})[0]}function QI(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ko{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dr(t){if(!t)throw Ng()}function Lg(t,e){function n(r,i){const s=GI(t,i,e);return dr(s!==null),s}return n}function EV(t,e){function n(r,i){const s=GI(t,i,e);return dr(s!==null),wV(s,i,t.host,t._protocol)}return n}function Al(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=UM():i=VM():n.getStatus()===402?i=MM(t.bucket):n.getStatus()===403?i=FM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function YI(t){const e=Al(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=LM(t.path)),s.serverResponse=i.serverResponse,s}return n}function TV(t,e,n){const r=e.fullServerUrl(),i=Rl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ko(i,s,Lg(t,n),o);return a.errorHandler=YI(e),a}function IV(t,e,n){const r=e.fullServerUrl(),i=Rl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ko(i,s,EV(t,n),o);return a.errorHandler=YI(e),a}function SV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function XI(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=SV(null,e)),r}function RV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let I=0;I<2;I++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=XI(e,r,i),c=QI(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=Mr.getBlob(h,r,d);if(m===null)throw UI();const _={name:u.fullPath},w=Rl(s,t.host,t._protocol),T="POST",g=t.maxUploadRetryTime,p=new ko(w,T,Lg(t,n),g);return p.urlParams=_,p.headers=o,p.body=m.uploadData(),p.errorHandler=Al(e),p}class Pc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Mg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{dr(!1)}return dr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function AV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=XI(e,r,i),a={name:o.fullPath},l=Rl(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=QI(o,n),d=t.maxUploadRetryTime;function m(w){Mg(w);let T;try{T=w.getResponseHeader("X-Goog-Upload-URL")}catch{dr(!1)}return dr(Th(T)),T}const _=new ko(l,u,m,d);return _.urlParams=a,_.headers=c,_.body=h,_.errorHandler=Al(e),_}function kV(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Mg(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{dr(!1)}h||dr(!1);const d=Number(h);return dr(!isNaN(d)),new Pc(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ko(n,o,s,a);return l.headers=i,l.errorHandler=Al(e),l}const M0=256*1024;function CV(t,e,n,r,i,s,o,a){const l=new Pc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw BM();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},w=r.slice(h,d);if(w===null)throw UI();function T(I,A){const k=Mg(I,["active","final"]),R=l.current+c,M=r.size();let H;return k==="final"?H=Lg(e,s)(I,A):H=null,new Pc(R,M,k==="final",H)}const g="POST",p=e.maxUploadRetryTime,v=new ko(n,g,T,p);return v.headers=_,v.body=w.uploadData(),v.progressCallback=a||null,v.errorHandler=Al(t),v}const Ft={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function pf(t){switch(t){case"running":case"pausing":case"canceling":return Ft.RUNNING;case"paused":return Ft.PAUSED;case"success":return Ft.SUCCESS;case"canceled":return Ft.CANCELED;case"error":return Ft.ERROR;default:return Ft.ERROR}}/**
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
 */class PV{constructor(e,n,r){if(XM(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function _s(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class bV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Wo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xV extends bV{initXhr(){this.xhr_.responseType="text"}}function Ts(){return new xV}/**
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
 */class OV{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=KI(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(jI(i.status,[]))if(s)i=MI();else{this.sleepTime=Math.max(this.sleepTime*2,DM),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ke.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=AV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ts,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=kV(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ts,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=M0*this._chunkMultiplier,n=new Pc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=CV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ts,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){M0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=TV(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ts,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=RV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ts,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=VI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=pf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new PV(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(pf(this._state)){case Ft.SUCCESS:_s(this._resolve.bind(null,this.snapshot))();break;case Ft.CANCELED:case Ft.ERROR:const n=this._reject;_s(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(pf(this._state)){case Ft.RUNNING:case Ft.PAUSED:e.next&&_s(e.next.bind(e,this.snapshot))();break;case Ft.SUCCESS:e.complete&&_s(e.complete.bind(e))();break;case Ft.CANCELED:case Ft.ERROR:e.error&&_s(e.error.bind(e,this._error))();break;default:e.error&&_s(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Qi{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qi(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WI(this._location.path)}get storage(){return this._service}get parent(){const e=pV(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new Qi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WM(e)}}function NV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new OV(t,new Mr(e),n)}function DV(t){t._throwIfRoot("getDownloadURL");const e=IV(t.storage,t._location,KI());return t.storage.makeRequestWithTokens(e,Ts).then(n=>{if(n===null)throw qM();return n})}function LV(t,e){const n=mV(t._location.path,e),r=new tn(t._location.bucket,n);return new Qi(t.storage,r)}/**
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
 */function MV(t){return/^[A-Za-z]+:\/\//.test(t)}function VV(t,e){return new Qi(t,e)}function JI(t,e){if(t instanceof Vg){const n=t;if(n._bucket==null)throw zM();const r=new Qi(n,n._bucket);return e!=null?JI(r,e):r}else return e!==void 0?LV(t,e):t}function UV(t,e){if(e&&MV(e)){if(t instanceof Vg)return VV(t,e);throw Fp("To use ref(service, url), the first argument must be a Storage instance.")}else return JI(t,e)}function V0(t,e){const n=e==null?void 0:e[LI];return n==null?null:tn.makeFromBucketSpec(n,t)}function FV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ST(i,t.app.options.projectId))}class Vg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=DI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OM,this._maxUploadRetryTime=NM,this._requests=new Set,i!=null?this._bucket=tn.makeFromBucketSpec(i,this._host):this._bucket=V0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=V0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){L0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){L0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new KM(FI());{const o=iV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const U0="@firebase/storage",F0="0.12.0";/**
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
 */const ZI="storage";function $V(t,e,n){return t=Ae(t),NV(t,e,n)}function jV(t){return t=Ae(t),DV(t)}function zV(t,e){return t=Ae(t),UV(t,e)}function BV(t=gh(),e){t=Ae(t);const r=pi(t,ZI).getImmediate({identifier:e}),i=ET("storage");return i&&qV(r,...i),r}function qV(t,e,n,r={}){FV(t,e,n,r)}function HV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Vg(n,r,i,e,is)}function WV(){On(new wn(ZI,HV,"PUBLIC").setMultipleInstances(!0)),Wt(U0,F0,""),Wt(U0,F0,"esm2017")}WV();var KV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Ug=Ug||{},ne=KV||self;function Ih(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function kl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GV(t){return Object.prototype.hasOwnProperty.call(t,mf)&&t[mf]||(t[mf]=++QV)}var mf="closure_uid_"+(1e9*Math.random()>>>0),QV=0;function YV(t,e,n){return t.call.apply(t.bind,arguments)}function XV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=YV:Et=XV,Et.apply(null,arguments)}function du(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function gi(){this.s=this.s,this.o=this.o}var JV=0;gi.prototype.s=!1;gi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),JV!=0)&&GV(this)};gi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ih(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var ZV=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ne.addEventListener("test",n,e),ne.removeEventListener("test",n,e)}catch{}return t}();function Xa(t){return/^[\s\xa0]*$/.test(t)}function Sh(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function $n(t){return Sh().indexOf(t)!=-1}function $g(t){return $g[" "](t),t}$g[" "]=function(){};function e2(t,e){var n=W2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var t2=$n("Opera"),oo=$n("Trident")||$n("MSIE"),tS=$n("Edge"),$p=tS||oo,nS=$n("Gecko")&&!(Sh().toLowerCase().indexOf("webkit")!=-1&&!$n("Edge"))&&!($n("Trident")||$n("MSIE"))&&!$n("Edge"),n2=Sh().toLowerCase().indexOf("webkit")!=-1&&!$n("Edge");function rS(){var t=ne.document;return t?t.documentMode:void 0}var jp;e:{var gf="",yf=function(){var t=Sh();if(nS)return/rv:([^\);]+)(\)|;)/.exec(t);if(tS)return/Edge\/([\d\.]+)/.exec(t);if(oo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(n2)return/WebKit\/(\S+)/.exec(t);if(t2)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yf&&(gf=yf?yf[1]:""),oo){var vf=rS();if(vf!=null&&vf>parseFloat(gf)){jp=String(vf);break e}}jp=gf}var zp;if(ne.document&&oo){var j0=rS();zp=j0||parseInt(jp,10)||void 0}else zp=void 0;var r2=zp;function Ja(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nS){e:{try{$g(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:i2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ja.$.h.call(this)}}ot(Ja,Tt);var i2={2:"touch",3:"pen",4:"mouse"};Ja.prototype.h=function(){Ja.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cl="closure_listenable_"+(1e6*Math.random()|0),s2=0;function o2(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++s2,this.fa=this.ia=!1}function Rh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function jg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function a2(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function iS(t){const e={};for(const n in t)e[n]=t[n];return e}const z0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<z0.length;s++)n=z0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ah(t){this.src=t,this.g={},this.h=0}Ah.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new o2(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Bp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=eS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var zg="closure_lm_"+(1e6*Math.random()|0),_f={};function oS(t,e,n,r,i){if(r&&r.once)return lS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)oS(t,e[s],n,r,i);return null}return n=Hg(n),t&&t[Cl]?t.O(e,n,kl(r)?!!r.capture:!!r,i):aS(t,e,n,!1,r,i)}function aS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=kl(i)?!!i.capture:!!i,a=qg(t);if(a||(t[zg]=a=new Ah(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=l2(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ZV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(cS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function l2(){function t(n){return e.call(t.src,t.listener,n)}const e=u2;return t}function lS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)lS(t,e[s],n,r,i);return null}return n=Hg(n),t&&t[Cl]?t.P(e,n,kl(r)?!!r.capture:!!r,i):aS(t,e,n,!0,r,i)}function uS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)uS(t,e[s],n,r,i);else r=kl(r)?!!r.capture:!!r,n=Hg(n),t&&t[Cl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qp(s,n,r,i),-1<n&&(Rh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=qg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qp(e,n,r,i)),(n=-1<t?e[t]:null)&&Bg(n))}function Bg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Cl])Bp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qg(e))?(Bp(n,t),n.h==0&&(n.src=null,e[zg]=null)):Rh(t)}}}function cS(t){return t in _f?_f[t]:_f[t]="on"+t}function u2(t,e){if(t.fa)t=!0;else{e=new Ja(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bg(t),t=n.call(r,e)}return t}function qg(t){return t=t[zg],t instanceof Ah?t:null}var wf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hg(t){return typeof t=="function"?t:(t[wf]||(t[wf]=function(e){return t.handleEvent(e)}),t[wf])}function st(){gi.call(this),this.i=new Ah(this),this.S=this,this.J=null}ot(st,gi);st.prototype[Cl]=!0;st.prototype.removeEventListener=function(t,e,n,r){uS(this,t,e,n,r)};function dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(r,t),sS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=fu(o,r,!0,e)&&i}if(o=e.g=t,i=fu(o,r,!0,e)&&i,i=fu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=fu(o,r,!1,e)&&i}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rh(n[r]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};st.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Wg=ne.JSON.stringify;class c2{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function h2(){var t=Kg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class d2{constructor(){this.h=this.g=null}add(e,n){const r=hS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hS=new c2(()=>new f2,t=>t.reset());class f2{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function p2(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function m2(t){ne.setTimeout(()=>{throw t},0)}let Za,el=!1,Kg=new d2,dS=()=>{const t=ne.Promise.resolve(void 0);Za=()=>{t.then(g2)}};var g2=()=>{for(var t;t=h2();){try{t.h.call(t.g)}catch(n){m2(n)}var e=hS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}el=!1};function kh(t,e){st.call(this),this.h=t||1,this.g=e||ne,this.j=Et(this.qb,this),this.l=Date.now()}ot(kh,st);F=kh.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(Gg(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){kh.$.N.call(this),Gg(this),delete this.g};function Qg(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function fS(t){t.g=Qg(()=>{t.g=null,t.i&&(t.i=!1,fS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class y2 extends gi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fS(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tl(t){gi.call(this),this.h=t,this.g={}}ot(tl,gi);var B0=[];function pS(t,e,n,r){Array.isArray(n)||(n&&(B0[0]=n.toString()),n=B0);for(var i=0;i<n.length;i++){var s=oS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function mS(t){jg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bg(e)},t),t.g={}}tl.prototype.N=function(){tl.$.N.call(this),mS(this)};tl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ch(){this.g=!0}Ch.prototype.Ea=function(){this.g=!1};function v2(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function _2(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Fs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+E2(t,n)+(r?" "+r:"")})}function w2(t,e){t.info(function(){return"TIMEOUT: "+e})}Ch.prototype.info=function(){};function E2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wg(n)}catch{return e}}var os={},q0=null;function Ph(){return q0=q0||new st}os.Ta="serverreachability";function gS(t){Tt.call(this,os.Ta,t)}ot(gS,Tt);function nl(t){const e=Ph();dt(e,new gS(e))}os.STAT_EVENT="statevent";function yS(t,e){Tt.call(this,os.STAT_EVENT,t),this.stat=e}ot(yS,Tt);function Nt(t){const e=Ph();dt(e,new yS(e,t))}os.Ua="timingevent";function vS(t,e){Tt.call(this,os.Ua,t),this.size=e}ot(vS,Tt);function Pl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var bh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_S={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yg(){}Yg.prototype.h=null;function H0(t){return t.h||(t.h=t.i())}function wS(){}var bl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xg(){Tt.call(this,"d")}ot(Xg,Tt);function Jg(){Tt.call(this,"c")}ot(Jg,Tt);var Hp;function xh(){}ot(xh,Yg);xh.prototype.g=function(){return new XMLHttpRequest};xh.prototype.i=function(){return{}};Hp=new xh;function xl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new tl(this),this.P=T2,t=$p?125:void 0,this.V=new kh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ES}function ES(){this.i=null,this.g="",this.h=!1}var T2=45e3,TS={},Wp={};F=xl.prototype;F.setTimeout=function(t){this.P=t};function Kp(t,e,n){t.L=1,t.A=Nh(vr(e)),t.u=n,t.S=!0,IS(t,null)}function IS(t,e){t.G=Date.now(),Ol(t),t.B=vr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),xS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new ES,t.g=JS(t.l,n?e:null,!t.u),0<t.O&&(t.M=new y2(Et(t.Pa,t,t.g),t.O)),pS(t.U,t.g,"readystatechange",t.nb),e=t.I?iS(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),nl(),v2(t.j,t.v,t.B,t.m,t.W,t.u)}F.nb=function(t){t=t.target;const e=this.M;e&&zn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const c=zn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||$p||this.g&&(this.h.h||this.g.ja()||Q0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?nl(3):nl(2)),Oh(this);var n=this.g.da();this.ca=n;t:if(SS(this)){var r=Q0(this.g);t="";var i=r.length,s=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pi(this),wa(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_2(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xa(a)){var u=a;break t}}u=null}if(n=u)Fs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gp(this,n);else{this.i=!1,this.s=3,Nt(12),Pi(this),wa(this);break e}}this.S?(RS(this,c,o),$p&&this.i&&c==3&&(pS(this.U,this.V,"tick",this.mb),this.V.start())):(Fs(this.j,this.m,o,null),Gp(this,o)),c==4&&Pi(this),this.i&&!this.J&&(c==4?GS(this.l,this):(this.i=!1,Ol(this)))}else B2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Pi(this),wa(this)}}}catch{}finally{}};function SS(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function RS(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=I2(t,n),i==Wp){e==4&&(t.s=4,Nt(14),r=!1),Fs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==TS){t.s=4,Nt(15),Fs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fs(t.j,t.m,i,null),Gp(t,i);SS(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),iy(e),e.M=!0,Nt(11))):(Fs(t.j,t.m,n,"[Invalid Chunked Response]"),Pi(t),wa(t))}F.mb=function(){if(this.g){var t=zn(this.g),e=this.g.ja();this.o<e.length&&(Oh(this),RS(this,t,e),this.i&&t!=4&&Ol(this))}};function I2(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Wp:(n=Number(e.substring(n,r)),isNaN(n)?TS:(r+=1,r+n>e.length?Wp:(e=e.slice(r,r+n),t.o=r+n,e)))}F.cancel=function(){this.J=!0,Pi(this)};function Ol(t){t.Y=Date.now()+t.P,AS(t,t.P)}function AS(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Pl(Et(t.lb,t),e)}function Oh(t){t.C&&(ne.clearTimeout(t.C),t.C=null)}F.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(w2(this.j,this.B),this.L!=2&&(nl(),Nt(17)),Pi(this),this.s=2,wa(this)):AS(this,this.Y-t)};function wa(t){t.l.H==0||t.J||GS(t.l,t)}function Pi(t){Oh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gg(t.V),mS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Gp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qp(n.i,t))){if(!t.K&&Qp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Oc(n),Vh(n);else break e;ry(n),Nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Pl(Et(n.ib,n),6e3));if(1>=DS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else bi(n,11)}else if((t.K||n.g==t)&&Oc(n),!Xa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Zg(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Se(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=XS(r,r.J?r.pa:null,r.Y),o.K){LS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Oh(a),Ol(a)),r.g=o}else WS(r);0<n.j.length&&Uh(n)}else u[0]!="stop"&&u[0]!="close"||bi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?bi(n,7):ny(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}nl(4)}catch{}}function S2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ih(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function R2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ih(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function kS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ih(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=R2(t),r=S2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var CS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vi){this.h=t.h,bc(this,t.j),this.s=t.s,this.g=t.g,xc(this,t.m),this.l=t.l;var e=t.i,n=new rl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),W0(this,n),this.o=t.o}else t&&(e=String(t).match(CS))?(this.h=!1,bc(this,e[1]||"",!0),this.s=na(e[2]||""),this.g=na(e[3]||"",!0),xc(this,e[4]),this.l=na(e[5]||"",!0),W0(this,e[6]||"",!0),this.o=na(e[7]||"")):(this.h=!1,this.i=new rl(null,this.h))}Vi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ra(e,K0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ra(e,K0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ra(n,n.charAt(0)=="/"?P2:C2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ra(n,x2)),t.join("")};function vr(t){return new Vi(t)}function bc(t,e,n){t.j=n?na(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function W0(t,e,n){e instanceof rl?(t.i=e,O2(t.i,t.h)):(n||(e=ra(e,b2)),t.i=new rl(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Nh(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function na(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ra(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,k2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function k2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var K0=/[#\/\?@]/g,C2=/[#\?:]/g,P2=/[#\?]/g,b2=/[#\?@]/g,x2=/#/g;function rl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yi(t){t.g||(t.g=new Map,t.h=0,t.i&&A2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=rl.prototype;F.add=function(t,e){yi(this),this.i=null,t=Co(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function PS(t,e){yi(t),e=Co(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bS(t,e){return yi(t),e=Co(t,e),t.g.has(e)}F.forEach=function(t,e){yi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){yi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){yi(this);let e=[];if(typeof t=="string")bS(this,t)&&(e=e.concat(this.g.get(Co(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return yi(this),this.i=null,t=Co(this,t),bS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function xS(t,e,n){PS(t,e),0<n.length&&(t.i=null,t.g.set(Co(t,e),Fg(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Co(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function O2(t,e){e&&!t.j&&(yi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(PS(this,r),xS(this,i,n))},t)),t.j=e}var N2=class{constructor(t,e){this.g=t,this.map=e}};function OS(t){this.l=t||D2,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var D2=10;function NS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function DS(t){return t.h?1:t.g?t.g.size:0}function Qp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zg(t,e){t.g?t.g.add(e):t.h=e}function LS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}OS.prototype.cancel=function(){if(this.i=MS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function MS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Fg(t.i)}var L2=class{stringify(t){return ne.JSON.stringify(t,void 0)}parse(t){return ne.JSON.parse(t,void 0)}};function M2(){this.g=new L2}function V2(t,e,n){const r=n||"";try{kS(t,function(i,s){let o=i;kl(i)&&(o=Wg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function U2(t,e){const n=new Ch;if(ne.Image){const r=new Image;r.onload=du(pu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=du(pu,n,r,"TestLoadImage: error",!1,e),r.onabort=du(pu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=du(pu,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function pu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Dh(t){this.l=t.ec||null,this.j=t.ob||!1}ot(Dh,Yg);Dh.prototype.g=function(){return new Lh(this.l,this.j)};Dh.prototype.i=function(t){return function(){return t}}({});function Lh(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ey,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Lh,st);var ey=0;F=Lh.prototype;F.open=function(t,e){if(this.readyState!=ey)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,il(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nl(this)),this.readyState=ey};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,il(this)),this.g&&(this.readyState=3,il(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;VS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function VS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nl(this):il(this),this.readyState==3&&VS(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,Nl(this))};F.Ya=function(t){this.g&&(this.response=t,Nl(this))};F.ka=function(){this.g&&Nl(this)};function Nl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,il(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function il(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Lh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var F2=ne.JSON.parse;function $e(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=US,this.L=this.M=!1}ot($e,st);var US="",$2=/^https?$/i,j2=["POST","PUT"];F=$e.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hp.g(),this.C=this.u?H0(this.u):H0(Hp),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){G0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ne.FormData&&t instanceof ne.FormData,!(0<=eS(j2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jS(this),0<this.B&&((this.L=z2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Qg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){G0(this,s)}};function z2(t){return oo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Ug<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function G0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,FS(t),Mh(t)}function FS(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),Mh(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mh(this,!0)),$e.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?$S(this):this.kb())};F.kb=function(){$S(this)};function $S(t){if(t.h&&typeof Ug<"u"&&(!t.C[1]||zn(t)!=4||t.da()!=2)){if(t.v&&zn(t)==4)Qg(t.La,0,t);else if(dt(t,"readystatechange"),zn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(CS)[1]||null;!i&&ne.self&&ne.self.location&&(i=ne.self.location.protocol.slice(0,-1)),r=!$2.test(i?i.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var s=2<zn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",FS(t)}}finally{Mh(t)}}}}function Mh(t,e){if(t.g){jS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function jS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function zn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),F2(e)}};function Q0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case US:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function B2(t){const e={};t=(t.g&&2<=zn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Xa(t[r]))continue;var n=p2(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}a2(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zS(t){let e="";return jg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ty(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=zS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Ko(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function BS(t){this.Ga=0,this.j=[],this.l=new Ch,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ko("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ko("baseRetryDelayMs",5e3,t),this.hb=Ko("retryDelaySeedMs",1e4,t),this.eb=Ko("forwardChannelMaxRetries",2,t),this.xa=Ko("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new OS(t&&t.concurrentRequestLimit),this.Ja=new M2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=BS.prototype;F.ra=8;F.H=1;function ny(t){if(qS(t),t.H==3){var e=t.W++,n=vr(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),Dl(t,n),e=new xl(t,t.l,e),e.L=2,e.A=Nh(vr(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon)try{n=ne.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ne.Image&&(new Image().src=e.A,n=!0),n||(e.g=JS(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ol(e)}YS(t)}function Vh(t){t.g&&(iy(t),t.g.cancel(),t.g=null)}function qS(t){Vh(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Oc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Uh(t){if(!NS(t.i)&&!t.m){t.m=!0;var e=t.Na;Za||dS(),el||(Za(),el=!0),Kg.add(e,t),t.C=0}}function q2(t,e){return DS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Pl(Et(t.Na,t,e),QS(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new xl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=iS(s),sS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=HS(this,i,e),n=vr(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Dl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(zS(s)))+"&"+e:this.o&&ty(n,this.o,s)),Zg(this.i,i),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),i.aa=!0,Kp(i,n,null)):Kp(i,n,e),this.H=2}}else this.H==3&&(t?Y0(this,t):this.j.length==0||NS(this.i)||Y0(this))};function Y0(t,e){var n;e?n=e.m:n=t.W++;const r=vr(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),Dl(t,r),t.o&&t.s&&ty(r,t.o,t.s),n=new xl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=HS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Zg(t.i,n),Kp(n,r,e)}function Dl(t,e){t.na&&jg(t.na,function(n,r){Se(e,r,n)}),t.h&&kS({},function(n,r){Se(e,r,n)})}function HS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Et(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{V2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function WS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Za||dS(),el||(Za(),el=!0),Kg.add(e,t),t.A=0}}function ry(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Pl(Et(t.Ma,t),QS(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,KS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Pl(Et(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Nt(10),Vh(this),KS(this))};function iy(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function KS(t){t.g=new xl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vr(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),Dl(t,e),t.o&&t.s&&ty(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Nh(vr(e)),n.u=null,n.S=!0,IS(n,t)}F.ib=function(){this.v!=null&&(this.v=null,Vh(this),ry(this),Nt(19))};function Oc(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function GS(t,e){var n=null;if(t.g==e){Oc(t),iy(t),t.g=null;var r=2}else if(Qp(t.i,e))n=e.F,LS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Ph(),dt(r,new vS(r,n)),Uh(t)}else WS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&q2(t,e)||r==2&&ry(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:bi(t,5);break;case 4:bi(t,10);break;case 3:bi(t,6);break;default:bi(t,2)}}}function QS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function bi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Et(t.pb,t);n||(n=new Vi("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||bc(n,"https"),Nh(n)),U2(n.toString(),r)}else Nt(2);t.H=0,t.h&&t.h.za(e),YS(t),qS(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Nt(2)):(this.l.info("Failed to ping google.com"),Nt(1))};function YS(t){if(t.H=0,t.ma=[],t.h){const e=MS(t.i);(e.length!=0||t.j.length!=0)&&($0(t.ma,e),$0(t.ma,t.j),t.i.i.length=0,Fg(t.j),t.j.length=0),t.h.ya()}}function XS(t,e,n){var r=n instanceof Vi?vr(n):new Vi(n);if(r.g!="")e&&(r.g=e+"."+r.g),xc(r,r.m);else{var i=ne.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Vi(null);r&&bc(s,r),e&&(s.g=e),i&&xc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),Dl(t,r),r}function JS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new $e(new Dh({ob:n})):new $e(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function ZS(){}F=ZS.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function Nc(){if(oo&&!(10<=Number(r2)))throw Error("Environmental error: no available transport.")}Nc.prototype.g=function(t,e){return new an(t,e)};function an(t,e){st.call(this),this.g=new BS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Xa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Po(this)}ot(an,st);an.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=XS(t,null,t.Y),Uh(t)};an.prototype.close=function(){ny(this.g)};an.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wg(t),t=n);e.j.push(new N2(e.fb++,t)),e.H==3&&Uh(e)};an.prototype.N=function(){this.g.h=null,delete this.j,ny(this.g),delete this.g,an.$.N.call(this)};function eR(t){Xg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(eR,Xg);function tR(){Jg.call(this),this.status=1}ot(tR,Jg);function Po(t){this.g=t}ot(Po,ZS);Po.prototype.Ba=function(){dt(this.g,"a")};Po.prototype.Aa=function(t){dt(this.g,new eR(t))};Po.prototype.za=function(t){dt(this.g,new tR)};Po.prototype.ya=function(){dt(this.g,"b")};function H2(){this.blockSize=-1}function Dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(Dn,H2);Dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ef(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ef(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ef(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ef(this,r),i=0;break}}this.h=i,this.i+=e};Dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function _e(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var W2={};function sy(t){return-128<=t&&128>t?e2(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function Bn(t){if(isNaN(t)||!isFinite(t))return Qs;if(0>t)return ut(Bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Yp;return new _e(e,0)}function nR(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(nR(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bn(Math.pow(e,8)),r=Qs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Bn(Math.pow(e,s)),r=r.R(s).add(Bn(o))):(r=r.R(n),r=r.add(Bn(o)))}return r}var Yp=4294967296,Qs=sy(0),Xp=sy(1),X0=sy(16777216);F=_e.prototype;F.ea=function(){if(pn(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Yp+r)*e,e*=Yp}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cr(this))return"0";if(pn(this))return"-"+ut(this).toString(t);for(var e=Bn(Math.pow(t,6)),n=this,r="";;){var i=Lc(n,e).g;n=Dc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pn(t){return t.h==-1}F.X=function(t){return t=Dc(this,t),pn(t)?-1:cr(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _e(n,~t.h).add(Xp)}F.abs=function(){return pn(this)?ut(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function Dc(t,e){return t.add(ut(e))}F.R=function(t){if(cr(this)||cr(t))return Qs;if(pn(this))return pn(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(pn(t))return ut(this.R(ut(t)));if(0>this.X(X0)&&0>t.X(X0))return Bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,mu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,mu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,mu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,mu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _e(n,0)};function mu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Go(t,e){this.g=t,this.h=e}function Lc(t,e){if(cr(e))throw Error("division by zero");if(cr(t))return new Go(Qs,Qs);if(pn(t))return e=Lc(ut(t),e),new Go(ut(e.g),ut(e.h));if(pn(e))return e=Lc(t,ut(e)),new Go(ut(e.g),e.h);if(30<t.g.length){if(pn(t)||pn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xp,r=e;0>=r.X(t);)n=J0(n),r=J0(r);var i=ws(n,1),s=ws(r,1);for(r=ws(r,2),n=ws(n,2);!cr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ws(r,1),n=ws(n,1)}return e=Dc(t,i.R(e)),new Go(i,e)}for(i=Qs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Bn(n),o=s.R(e);pn(o)||0<o.X(t);)n-=r,s=Bn(n),o=s.R(e);cr(s)&&(s=Xp),i=i.add(s),t=Dc(t,o)}return new Go(i,t)}F.gb=function(t){return Lc(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _e(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _e(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _e(n,this.h^t.h)};function J0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _e(n,t.h)}function ws(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _e(i,t.h)}Nc.prototype.createWebChannel=Nc.prototype.g;an.prototype.send=an.prototype.u;an.prototype.open=an.prototype.m;an.prototype.close=an.prototype.close;bh.NO_ERROR=0;bh.TIMEOUT=8;bh.HTTP_ERROR=6;_S.COMPLETE="complete";wS.EventType=bl;bl.OPEN="a";bl.CLOSE="b";bl.ERROR="c";bl.MESSAGE="d";st.prototype.listen=st.prototype.O;$e.prototype.listenOnce=$e.prototype.P;$e.prototype.getLastError=$e.prototype.Sa;$e.prototype.getLastErrorCode=$e.prototype.Ia;$e.prototype.getStatus=$e.prototype.da;$e.prototype.getResponseJson=$e.prototype.Wa;$e.prototype.getResponseText=$e.prototype.ja;$e.prototype.send=$e.prototype.ha;$e.prototype.setWithCredentials=$e.prototype.Oa;Dn.prototype.digest=Dn.prototype.l;Dn.prototype.reset=Dn.prototype.reset;Dn.prototype.update=Dn.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=Bn;_e.fromString=nR;var K2=function(){return new Nc},G2=function(){return Ph()},Tf=bh,Q2=_S,Y2=os,Z0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gu=wS,X2=$e,J2=Dn,Ys=_e;const ew="@firebase/firestore";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let bo="10.7.0";/**
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
 */const Yi=new mh("@firebase/firestore");function Qo(){return Yi.logLevel}function q(t,...e){if(Yi.logLevel<=he.DEBUG){const n=e.map(oy);Yi.debug(`Firestore (${bo}): ${t}`,...n)}}function _r(t,...e){if(Yi.logLevel<=he.ERROR){const n=e.map(oy);Yi.error(`Firestore (${bo}): ${t}`,...n)}}function ao(t,...e){if(Yi.logLevel<=he.WARN){const n=e.map(oy);Yi.warn(`Firestore (${bo}): ${t}`,...n)}}function oy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+t;throw _r(e),new Error(e)}function Ee(t,e){t||te()}function oe(t,e){return t}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class e4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class t4{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new rR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new vt(e)}}class n4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class r4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new n4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class i4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class s4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new i4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function o4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class iR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=o4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function lo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new et(0,0))}static max(){return new re(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sl{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends sl{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const a4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends sl{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return a4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Pe.fromString(e))}static fromName(e){return new Q(Pe.fromString(e).popFirst(5))}static empty(){return new Q(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Pe(e.slice()))}}function l4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new ii(i,Q.empty(),e)}function u4(t){return new ii(t.readTime,t.key,-1)}class ii{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ii(re.min(),Q.empty(),-1)}static max(){return new ii(re.max(),Q.empty(),-1)}}function c4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const h4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ll(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==h4)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ml(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ay{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ay._e=-1;function Fh(t){return t==null}function Mc(t){return t===0&&1/t==-1/0}function f4(t){return typeof t=="number"&&Number.isInteger(t)&&!Mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function tw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yu(this.root,e,this.comparator,!0)}}class yu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nw(this.data.getIterator())}getIteratorFrom(e){return new nw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class nw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new nn([])}unionWith(e){let n=new ft(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class oR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oR("Invalid base64 string: "+s):s}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const p4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=p4.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xi(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */function ly(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uy(t){const e=t.mapValue.fields.__previous_value__;return ly(e)?uy(e):e}function ol(t){const e=si(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class m4{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class al{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ji(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ly(t)?4:g4(t)?9007199254740991:10:te()}function Jn(t,e){if(t===e)return!0;const n=Ji(t);if(n!==Ji(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ol(t).isEqual(ol(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=si(i.timestampValue),a=si(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Xi(i.bytesValue).isEqual(Xi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return He(i.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return He(i.integerValue)===He(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=He(i.doubleValue),a=He(s.doubleValue);return o===a?Mc(o)===Mc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return lo(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(tw(o)!==tw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jn(o[l],a[l])))return!1;return!0}(t,e);default:return te()}}function ll(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function uo(t,e){if(t===e)return 0;const n=Ji(t),r=Ji(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=He(s.integerValue||s.doubleValue),l=He(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return rw(t.timestampValue,e.timestampValue);case 4:return rw(ol(t),ol(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Xi(s),l=Xi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ge(a[u],l[u]);if(c!==0)return c}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ge(He(s.latitude),He(o.latitude));return a!==0?a:ge(He(s.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=uo(a[u],l[u]);if(c)return c}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===vu.mapValue&&o===vu.mapValue)return 0;if(s===vu.mapValue)return 1;if(o===vu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ge(l[h],c[h]);if(d!==0)return d;const m=uo(a[l[h]],u[c[h]]);if(m!==0)return m}return ge(l.length,c.length)}(t.mapValue,e.mapValue);default:throw te()}}function rw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=si(t),r=si(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function co(t){return Jp(t)}function Jp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Jp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Jp(n.fields[o])}`;return i+"}"}(t.mapValue):te()}function Zp(t){return!!t&&"integerValue"in t}function cy(t){return!!t&&"arrayValue"in t}function iw(t){return!!t&&"nullValue"in t}function sw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uu(t){return!!t&&"mapValue"in t}function Ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function g4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ea(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){as(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(Ea(this.value))}}function aR(t){const e=[];return as(t.fields,(n,r)=>{const i=new ct([n]);if(Uu(r)){const s=aR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class wt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,re.min(),re.min(),re.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new wt(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new wt(e,2,n,re.min(),re.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,re.min(),re.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vc{constructor(e,n){this.position=e,this.inclusive=n}}function ow(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=uo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function aw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Uc{constructor(e,n="asc"){this.field=e,this.dir=n}}function y4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class lR{}class Je extends lR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _4(e,n,r):n==="array-contains"?new T4(e,r):n==="in"?new I4(e,r):n==="not-in"?new S4(e,r):n==="array-contains-any"?new R4(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new w4(e,r):new E4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(uo(n,this.value)):n!==null&&Ji(this.value)===Ji(n)&&this.matchesComparison(uo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends lR{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Zn(e,n)}matches(e){return uR(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function uR(t){return t.op==="and"}function cR(t){return v4(t)&&uR(t)}function v4(t){for(const e of t.filters)if(e instanceof Zn)return!1;return!0}function em(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+co(t.value);if(cR(t))return t.filters.map(e=>em(e)).join(",");{const e=t.filters.map(n=>em(n)).join(",");return`${t.op}(${e})`}}function hR(t,e){return t instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&Jn(r.value,i.value)}(t,e):t instanceof Zn?function(r,i){return i instanceof Zn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&hR(o,i.filters[a]),!0):!1}(t,e):void te()}function dR(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`}(t):t instanceof Zn?function(n){return n.op.toString()+" {"+n.getFilters().map(dR).join(" ,")+"}"}(t):"Filter"}class _4 extends Je{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class w4 extends Je{constructor(e,n){super(e,"in",n),this.keys=fR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class E4 extends Je{constructor(e,n){super(e,"not-in",n),this.keys=fR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class T4 extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cy(n)&&ll(n.arrayValue,this.value)}}class I4 extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ll(this.value.arrayValue,n)}}class S4 extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ll(this.value.arrayValue,n)}}class R4 extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ll(this.value.arrayValue,r))}}/**
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
 */class A4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function lw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new A4(t,e,n,r,i,s,o)}function hy(t){const e=oe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>em(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>co(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>co(r)).join(",")),e.ce=n}return e.ce}function dy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!y4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!aw(t.startAt,e.startAt)&&aw(t.endAt,e.endAt)}function tm(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $h{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function k4(t,e,n,r,i,s,o,a){return new $h(t,e,n,r,i,s,o,a)}function fy(t){return new $h(t)}function uw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C4(t){return t.collectionGroup!==null}function Ta(t){const e=oe(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Uc(s,r))}),n.has(ct.keyField().canonicalString())||e.le.push(new Uc(ct.keyField(),r))}return e.le}function Gn(t){const e=oe(t);return e.he||(e.he=P4(e,Ta(t))),e.he}function P4(t,e){if(t.limitType==="F")return lw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Uc(i.field,s)});const n=t.endAt?new Vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vc(t.startAt.position,t.startAt.inclusive):null;return lw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nm(t,e,n){return new $h(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jh(t,e){return dy(Gn(t),Gn(e))&&t.limitType===e.limitType}function pR(t){return`${hy(Gn(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>dR(i)).join(", ")}]`),Fh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>co(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>co(i)).join(",")),`Target(${r})`}(Gn(t))}; limitType=${t.limitType})`}function zh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ta(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=ow(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ta(r),i)||r.endAt&&!function(o,a,l){const u=ow(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ta(r),i))}(t,e)}function b4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mR(t){return(e,n)=>{let r=!1;for(const i of Ta(t)){const s=x4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function x4(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?uo(l,u):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return sR(this.inner)}size(){return this.innerSize}}/**
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
 */const O4=new Le(Q.comparator);function wr(){return O4}const gR=new Le(Q.comparator);function ia(...t){let e=gR;for(const n of t)e=e.insert(n.key,n);return e}function yR(t){let e=gR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xi(){return Ia()}function vR(){return Ia()}function Ia(){return new xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const N4=new Le(Q.comparator),D4=new ft(Q.comparator);function ue(...t){let e=D4;for(const n of t)e=e.add(n);return e}const L4=new ft(ge);function M4(){return L4}/**
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
 */function _R(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mc(e)?"-0":e}}function wR(t){return{integerValue:""+t}}function V4(t,e){return f4(e)?wR(e):_R(t,e)}/**
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
 */class Bh{constructor(){this._=void 0}}function U4(t,e,n){return t instanceof Fc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ly(s)&&(s=uy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ho?TR(t,e):t instanceof ul?IR(t,e):function(i,s){const o=ER(i,s),a=cw(o)+cw(i.Ie);return Zp(o)&&Zp(i.Ie)?wR(a):_R(i.serializer,a)}(t,e)}function F4(t,e,n){return t instanceof ho?TR(t,e):t instanceof ul?IR(t,e):n}function ER(t,e){return t instanceof $c?function(r){return Zp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Fc extends Bh{}class ho extends Bh{constructor(e){super(),this.elements=e}}function TR(t,e){const n=SR(e);for(const r of t.elements)n.some(i=>Jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ul extends Bh{constructor(e){super(),this.elements=e}}function IR(t,e){let n=SR(e);for(const r of t.elements)n=n.filter(i=>!Jn(i,r));return{arrayValue:{values:n}}}class $c extends Bh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function cw(t){return He(t.integerValue||t.doubleValue)}function SR(t){return cy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class $4{constructor(e,n){this.field=e,this.transform=n}}function j4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ho&&i instanceof ho||r instanceof ul&&i instanceof ul?lo(r.elements,i.elements,Jn):r instanceof $c&&i instanceof $c?Jn(r.Ie,i.Ie):r instanceof Fc&&i instanceof Fc}(t.transform,e.transform)}class z4{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qh{}function RR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kR(t.key,Qn.none()):new Vl(t.key,t.data,Qn.none());{const n=t.data,r=jt.empty();let i=new ft(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vi(t.key,r,new nn(i.toArray()),Qn.none())}}function B4(t,e,n){t instanceof Vl?function(i,s,o){const a=i.value.clone(),l=dw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof vi?function(i,s,o){if(!Fu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=dw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(AR(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Sa(t,e,n,r){return t instanceof Vl?function(s,o,a,l){if(!Fu(s.precondition,o))return a;const u=s.value.clone(),c=fw(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof vi?function(s,o,a,l){if(!Fu(s.precondition,o))return a;const u=fw(s.fieldTransforms,l,o),c=o.data;return c.setAll(AR(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Fu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function q4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ER(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function hw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&lo(r,i,(s,o)=>j4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vl extends qh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vi extends qh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dw(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,F4(o,a,n[i]))}return r}function fw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,U4(s,o,e))}return r}class kR extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class H4 extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class W4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&B4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=RR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(n,r)=>hw(n,r))&&lo(this.baseMutations,e.baseMutations,(n,r)=>hw(n,r))}}class py{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=function(){return N4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new py(e,n,r,i)}}/**
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
 */class K4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class G4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,de;function Q4(t){switch(t){default:return te();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function CR(t){if(t===void 0)return _r("GRPC error has no .code"),N.UNKNOWN;switch(t){case qe.OK:return N.OK;case qe.CANCELLED:return N.CANCELLED;case qe.UNKNOWN:return N.UNKNOWN;case qe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case qe.INTERNAL:return N.INTERNAL;case qe.UNAVAILABLE:return N.UNAVAILABLE;case qe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case qe.NOT_FOUND:return N.NOT_FOUND;case qe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case qe.ABORTED:return N.ABORTED;case qe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case qe.DATA_LOSS:return N.DATA_LOSS;default:return te()}}(de=qe||(qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Y4(){return new TextEncoder}/**
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
 */const X4=new Ys([4294967295,4294967295],0);function pw(t){const e=Y4().encode(t),n=new J2;return n.update(e),new Uint8Array(n.digest())}function mw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ys([n,r],0),new Ys([i,s],0)]}class my{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new sa(`Invalid padding: ${n}`);if(r<0)throw new sa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new sa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new sa(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ys.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ys.fromNumber(r)));return i.compare(X4)===1&&(i=new Ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=pw(e),[r,i]=mw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new my(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=pw(e),[r,i]=mw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ul.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hh(re.min(),i,new Le(ge),wr(),ue())}}class Ul{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ul(r,n,ue(),ue(),ue())}}/**
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
 */class $u{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class PR{constructor(e,n){this.targetId=e,this.fe=n}}class bR{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gw{constructor(){this.ge=0,this.pe=vw(),this.ye=Rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ue(),n=ue(),r=ue();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new Ul(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=vw()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ee(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class J4{constructor(e){this.Le=e,this.ke=new Map,this.qe=wr(),this.Qe=yw(),this.Ke=new Le(ge)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(tm(s))if(r===0){const o=new Q(s.path);this.We(n,o,wt.newNoDocument(o,re.min()))}else Ee(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Xi(r).toUint8Array()}catch(l){if(l instanceof oR)return ao("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new my(o,i,s)}catch(l){return ao(l instanceof sa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&tm(a.target)){const l=new Q(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,wt.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ue();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Hh(e,n,this.Ke,this.qe,r);return this.qe=wr(),this.Qe=yw(),this.Ke=new Le(ge),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new gw,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ft(ge),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new gw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yw(){return new Le(Q.comparator)}function vw(){return new Le(Q.comparator)}const Z4={asc:"ASCENDING",desc:"DESCENDING"},eU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tU={and:"AND",or:"OR"};class nU{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rm(t,e){return t.useProto3Json||Fh(e)?e:{value:e}}function jc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rU(t,e){return jc(t,e.toTimestamp())}function Yn(t){return Ee(!!t),re.fromTimestamp(function(n){const r=si(n);return new et(r.seconds,r.nanos)}(t))}function gy(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function OR(t){const e=Pe.fromString(t);return Ee(MR(e)),e}function im(t,e){return gy(t.databaseId,e.path)}function If(t,e){const n=OR(e);if(n.get(1)!==t.databaseId.projectId)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(NR(n))}function sm(t,e){return gy(t.databaseId,e)}function iU(t){const e=OR(t);return e.length===4?Pe.emptyPath():NR(e)}function om(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function NR(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _w(t,e,n){return{name:im(t,e),fields:n.value.mapValue.fields}}function sU(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Ee(c===void 0||typeof c=="string"),Rt.fromBase64String(c||"")):(Ee(c===void 0||c instanceof Uint8Array),Rt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?N.UNKNOWN:CR(u.code);return new K(c,u.message||"")}(o);n=new bR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=If(t,r.document.name),s=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):re.min(),a=new jt({mapValue:{fields:r.document.fields}}),l=wt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new $u(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=If(t,r.document),s=r.readTime?Yn(r.readTime):re.min(),o=wt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $u([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=If(t,r.document),s=r.removedTargetIds||[];n=new $u([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new G4(i,s),a=r.targetId;n=new PR(a,o)}}return n}function oU(t,e){let n;if(e instanceof Vl)n={update:_w(t,e.key,e.value)};else if(e instanceof kR)n={delete:im(t,e.key)};else if(e instanceof vi)n={update:_w(t,e.key,e.data),updateMask:mU(e.fieldMask)};else{if(!(e instanceof H4))return te();n={verify:im(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ul)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $c)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rU(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function aU(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Yn(i.updateTime):Yn(s);return o.isEqual(re.min())&&(o=Yn(s)),new z4(o,i.transformResults||[])}(n,e))):[]}function lU(t,e){return{documents:[sm(t,e.path)]}}function uU(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=sm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return LR(Zn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Ss(h.field),direction:dU(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=rm(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function cU(t){let e=iU(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=DR(h);return d instanceof Zn&&cR(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Uc(Rs(_.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Fh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Vc(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Vc(m,d)}(n.endAt)),k4(e,i,o,s,a,"F",l,u)}function hU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function DR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Rs(n.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rs(n.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Rs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zn.create(n.compositeFilter.filters.map(r=>DR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function dU(t){return Z4[t]}function fU(t){return eU[t]}function pU(t){return tU[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Rs(t){return ct.fromServerFormat(t.fieldPath)}function LR(t){return t instanceof Je?function(n){if(n.op==="=="){if(sw(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(iw(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sw(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(iw(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:fU(n.op),value:n.value}}}(t):t instanceof Zn?function(n){const r=n.getFilters().map(i=>LR(i));return r.length===1?r[0]:{compositeFilter:{op:pU(n.op),filters:r}}}(t):te()}function mU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function MR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $r{constructor(e,n,r,i,s=re.min(),o=re.min(),a=Rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gU{constructor(e){this.ut=e}}function yU(t){const e=cU({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nm(e,e.limit,"L"):e}/**
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
 */class vU{constructor(){this.on=new _U}addToCollectionParentIndex(e,n){return this.on.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(ii.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(ii.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class _U{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(Pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(Pe.comparator)).toArray()}}/**
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
 */class fo{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new fo(0)}static Nn(){return new fo(-1)}}/**
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
 */class wU{constructor(){this.changes=new xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class EU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class TU{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Sa(r.mutation,i,nn.empty(),et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=xi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ia();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=wr();const o=Ia(),a=function(){return Ia()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof vi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Sa(c.mutation,u,c.mutation.getFieldMask(),et.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new EU(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ia();let i=new Le((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||nn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ue()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=vR();c.forEach(d=>{if(!s.has(d)){const m=RR(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(xi());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ue())).next(c=>({batchId:a,changes:yR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ia();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const u=function(h,d){return new $h(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,wt.newInvalidDocument(c)))});let a=ia();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Sa(c.mutation,u,nn.empty(),et.now()),zh(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class IU{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return D.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yn(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:yU(i.bundledQuery),readTime:Yn(i.readTime)}}(n)),D.resolve()}}/**
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
 */class SU{constructor(){this.overlays=new Le(Q.comparator),this.lr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xi();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=xi(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=xi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=xi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new K4(n,r));let s=this.lr.get(n);s===void 0&&(s=ue(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class yy{constructor(){this.hr=new ft(tt.Pr),this.Ir=new ft(tt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new tt(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new Q(new Pe([])),r=new tt(n,e),i=new tt(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Q(new Pe([])),r=new tt(n,e),i=new tt(n,e+1);let s=ue();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new tt(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Q.comparator(e.key,n.key)||ge(e.gr,n.gr)}static Tr(e,n){return ge(e.gr,n.gr)||Q.comparator(e.key,n.key)}}/**
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
 */class RU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ft(tt.Pr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new W4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new tt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(ge);return n.forEach(i=>{const s=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),D.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new tt(new Q(s),0);let a=new ft(ge);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),D.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return D.forEach(n.mutations,i=>{const s=new tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new tt(n,0),i=this.yr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class AU{constructor(e){this.Cr=e,this.docs=function(){return new Le(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=wr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():wt.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wr();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||c4(u4(c),r)<=0||(i.has(c.key)||zh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}vr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kU(this)}getSize(e){return D.resolve(this.size)}}class kU extends wU{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class CU{constructor(e){this.persistence=e,this.Fr=new xo(n=>hy(n),dy),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Mr=0,this.Or=new yy,this.targetCount=0,this.Nr=fo.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),D.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.kn(n),D.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Or.containsKey(n))}}/**
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
 */class PU{constructor(e,n){this.Br={},this.overlays={},this.Lr=new ay(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new CU(this),this.indexManager=new vU,this.remoteDocumentCache=function(i){return new AU(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new gU(n),this.Kr=new IU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new RU(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new bU(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class bU extends d4{constructor(e){super(),this.currentSequenceNumber=e}}class vy{constructor(e){this.persistence=e,this.Gr=new yy,this.zr=null}static jr(e){return new vy(e)}get Hr(){if(this.zr)return this.zr;throw te()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),D.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Hr,r=>{const i=Q.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return D.or([()=>D.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class _y{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _y(e,n.fromCache,r,i)}}/**
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
 */class xU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class OU{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new xU;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Qo()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),D.resolve()):(Qo()<=he.DEBUG&&q("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Qo()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(n))):D.resolve())}zi(e,n){if(uw(n))return D.resolve(null);let r=Gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nm(n,null,"F"),r=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,nm(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return uw(n)||i.isEqual(re.min())?D.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?D.resolve(null):(Qo()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Is(n)),this.Xi(e,o,n,l4(i,-1)).next(a=>a))})}Yi(e,n){let r=new ft(mR(e));return n.forEach((i,s)=>{zh(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Qo()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Is(n)),this.Gi.getDocumentsMatchingQuery(e,n,ii.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class NU{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Le(ge),this.ns=new xo(s=>hy(s),dy),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TU(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function DU(t,e,n,r){return new NU(t,e,n,r)}async function VR(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ue();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function LU(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=D.resolve();return d.forEach(_=>{m=m.next(()=>c.getEntry(l,_)).next(w=>{const T=u.docVersions.get(_);Ee(T!==null),w.version.compareTo(T)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ue();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UR(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function MU(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Rt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(w,T,g){return w.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,m,c)&&a.push(n.qr.updateTargetData(s,m))});let l=wr(),u=ue();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(VU(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(re.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function VU(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function UU(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FU(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function am(t,e,n){const r=oe(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ml(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function ww(t,e,n){const r=oe(t);let i=re.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=oe(l),d=h.ns.get(c);return d!==void 0?D.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,Gn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ue())).next(a=>($U(r,b4(e),a),{documents:a,ls:s})))}function $U(t,e,n){let r=t.rs.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class Ew{constructor(){this.activeTargetIds=M4()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jU{constructor(){this.eo=new Ew,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Ew,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zU{ro(e){}shutdown(){}}/**
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
 */class Tw{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _u=null;function Sf(){return _u===null?_u=function(){return 268435456+Math.round(2147483648*Math.random())}():_u++,"0x"+_u.toString(16)}/**
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
 */const BU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qU{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const yt="WebChannelConnection";class HU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Sf(),l=this.So(n,r);q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(q("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ao("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=BU[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Sf();return new Promise((o,a)=>{const l=new X2;l.setWithCredentials(!0),l.listenOnce(Q2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Tf.NO_ERROR:const c=l.getResponseJson();q(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Tf.TIMEOUT:q(yt,`RPC '${e}' ${s} timed out`),a(new K(N.DEADLINE_EXCEEDED,"Request time out"));break;case Tf.HTTP_ERROR:const h=l.getStatus();if(q(yt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const _=function(T){const g=T.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(g)>=0?g:N.UNKNOWN}(m.status);a(new K(_,m.message))}else a(new K(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new K(N.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{q(yt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);q(yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Sf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=K2(),a=G2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");q(yt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const _=new qU({co:T=>{m?q(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(d||(q(yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),q(yt,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},lo:()=>h.close()}),w=(T,g,p)=>{T.listen(g,v=>{try{p(v)}catch(I){setTimeout(()=>{throw I},0)}})};return w(h,gu.EventType.OPEN,()=>{m||q(yt,`RPC '${e}' stream ${i} transport opened.`)}),w(h,gu.EventType.CLOSE,()=>{m||(m=!0,q(yt,`RPC '${e}' stream ${i} transport closed`),_.Ro())}),w(h,gu.EventType.ERROR,T=>{m||(m=!0,ao(yt,`RPC '${e}' stream ${i} transport errored:`,T),_.Ro(new K(N.UNAVAILABLE,"The operation could not be completed")))}),w(h,gu.EventType.MESSAGE,T=>{var g;if(!m){const p=T.data[0];Ee(!!p);const v=p,I=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(I){q(yt,`RPC '${e}' stream ${i} received error:`,I);const A=I.status;let k=function(H){const G=qe[H];if(G!==void 0)return CR(G)}(A),R=I.message;k===void 0&&(k=N.INTERNAL,R="Unknown error status: "+A+" with message "+I.message),m=!0,_.Ro(new K(k,R)),h.close()}else q(yt,`RPC '${e}' stream ${i} received:`,p),_.Vo(p)}}),w(a,Y2.STAT_EVENT,T=>{T.stat===Z0.PROXY?q(yt,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Z0.NOPROXY&&q(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function Rf(){return typeof document<"u"?document:null}/**
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
 */function Wh(t){return new nU(t,!0)}/**
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
 */class FR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class $R{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new FR(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new K(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WU extends $R{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=sU(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Yn(o.readTime):re.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=om(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=tm(l)?{documents:lU(s,l)}:{query:uU(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xR(s,o.resumeToken);const u=rm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=jc(s,o.snapshotVersion.toTimestamp());const u=rm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=hU(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=om(this.serializer),n.removeTarget=e,this.e_(n)}}class KU extends $R{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=aU(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.I_(r,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=om(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oU(this.serializer,r))};this.e_(n)}}/**
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
 */class GU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(N.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(N.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class QU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(_r(n),this.f_=!1):q("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class YU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{ls(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=oe(l);u.C_.add(4),await Fl(u),u.M_.set("Unknown"),u.C_.delete(4),await Kh(u)}(this))})}),this.M_=new QU(r,i)}}async function Kh(t){if(ls(t))for(const e of t.v_)await e(!0)}async function Fl(t){for(const e of t.v_)await e(!1)}function jR(t,e){const n=oe(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Ty(n)?Ey(n):Oo(n).Ho()&&wy(n,e))}function zR(t,e){const n=oe(t),r=Oo(n);n.D_.delete(e),r.Ho()&&BR(n,e),n.D_.size===0&&(r.Ho()?r.Zo():ls(n)&&n.M_.set("Unknown"))}function wy(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oo(t).u_(e)}function BR(t,e){t.x_.Oe(e),Oo(t).c_(e)}function Ey(t){t.x_=new J4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Oo(t).start(),t.M_.g_()}function Ty(t){return ls(t)&&!Oo(t).jo()&&t.D_.size>0}function ls(t){return oe(t).C_.size===0}function qR(t){t.x_=void 0}async function XU(t){t.D_.forEach((e,n)=>{wy(t,e)})}async function JU(t,e){qR(t),Ty(t)?(t.M_.w_(e),Ey(t)):t.M_.set("Unknown")}async function ZU(t,e,n){if(t.M_.set("Online"),e instanceof bR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zc(t,r)}else if(e instanceof $u?t.x_.$e(e):e instanceof PR?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(re.min()))try{const r=await UR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(Rt.EMPTY_BYTE_STRING,c.snapshotVersion)),BR(s,l);const h=new $r(c.target,l,u,c.sequenceNumber);wy(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await zc(t,r)}}async function zc(t,e,n){if(!Ml(e))throw e;t.C_.add(1),await Fl(t),t.M_.set("Offline"),n||(n=()=>UR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Kh(t)})}function HR(t,e){return e().catch(n=>zc(t,n,e))}async function Gh(t){const e=oe(t),n=oi(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;eF(e);)try{const i=await UU(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,tF(e,i)}catch(i){await zc(e,i)}WR(e)&&KR(e)}function eF(t){return ls(t)&&t.b_.length<10}function tF(t,e){t.b_.push(e);const n=oi(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function WR(t){return ls(t)&&!oi(t).jo()&&t.b_.length>0}function KR(t){oi(t).start()}async function nF(t){oi(t).E_()}async function rF(t){const e=oi(t);for(const n of t.b_)e.P_(n.mutations)}async function iF(t,e,n){const r=t.b_.shift(),i=py.from(r,e,n);await HR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gh(t)}async function sF(t,e){e&&oi(t).h_&&await async function(r,i){if(function(o){return Q4(o)&&o!==N.ABORTED}(i.code)){const s=r.b_.shift();oi(r).Yo(),await HR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gh(r)}}(t,e),WR(t)&&KR(t)}async function Iw(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ls(n);n.C_.add(3),await Fl(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Kh(n)}async function oF(t,e){const n=oe(t);e?(n.C_.delete(2),await Kh(n)):e||(n.C_.add(2),await Fl(n),n.M_.set("Unknown"))}function Oo(t){return t.O_||(t.O_=function(n,r,i){const s=oe(n);return s.A_(),new WU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:XU.bind(null,t),Io:JU.bind(null,t),a_:ZU.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Ty(t)?Ey(t):t.M_.set("Unknown")):(await t.O_.stop(),qR(t))})),t.O_}function oi(t){return t.N_||(t.N_=function(n,r,i){const s=oe(n);return s.A_(),new KU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:nF.bind(null,t),Io:sF.bind(null,t),T_:rF.bind(null,t),I_:iF.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Gh(t)):(await t.N_.stop(),t.b_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class Iy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Iy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sy(t,e){if(_r("AsyncQueue",`${e}: ${t}`),Ml(t))return new K(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ia(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Sw{constructor(){this.B_=new Le(Q.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):te():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class po{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new po(e,n,Xs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class aF{constructor(){this.k_=void 0,this.listeners=[]}}class lF{constructor(){this.queries=new xo(e=>pR(e),jh),this.onlineState="Unknown",this.q_=new Set}}async function GR(t,e){const n=oe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new aF),i)try{s.k_=await n.onListen(r)}catch(o){const a=Sy(o,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Ry(n)}async function QR(t,e){const n=oe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function uF(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Ry(n)}function cF(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ry(t){t.q_.forEach(e=>{e.next()})}class YR{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class XR{constructor(e){this.key=e}}class JR{constructor(e){this.key=e}}class hF{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ue(),this.mutatedKeys=ue(),this._a=mR(e),this.aa=new Xs(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Sw,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=zh(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?_!==w&&(r.track({type:3,doc:m}),T=!0):this.ha(d,m)||(r.track({type:2,doc:m}),T=!0,(l&&this._a(m,l)>0||u&&this._a(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,h)=>function(m,_){const w=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return w(m)-w(_)}(c.type,h.type)||this._a(c.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new po(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Sw,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ue(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new JR(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new XR(r))}),n}da(e){this.ia=e.ls,this.oa=ue();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return po.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class dF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fF{constructor(e){this.key=e,this.Ra=!1}}class pF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new xo(a=>pR(a),jh),this.fa=new Map,this.ga=new Set,this.pa=new Le(Q.comparator),this.ya=new Map,this.wa=new yy,this.Sa={},this.ba=new Map,this.Da=fo.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function mF(t,e){const n=RF(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await FU(n.localStore,Gn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await gF(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&jR(n.remoteStore,o)}return i}async function gF(t,e,n,r,i){t.va=(h,d,m)=>async function(w,T,g,p){let v=T.view.ca(g);v.Zi&&(v=await ww(w.localStore,T.query,!1).then(({documents:R})=>T.view.ca(R,v)));const I=p&&p.targetChanges.get(T.targetId),A=p&&p.targetMismatches.get(T.targetId)!=null,k=T.view.applyChanges(v,w.isPrimaryClient,I,A);return Aw(w,T.targetId,k.Ta),k.snapshot}(t,h,d,m);const s=await ww(t.localStore,e,!0),o=new hF(e,s.ls),a=o.ca(s.documents),l=Ul.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Aw(t,n,u.Ta);const c=new dF(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function yF(t,e){const n=oe(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!jh(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await am(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zR(n.remoteStore,r.targetId),lm(n,r.targetId)}).catch(Ll)):(lm(n,r.targetId),await am(n.localStore,r.targetId,!0))}async function vF(t,e,n){const r=AF(t);try{const i=await function(o,a){const l=oe(o),u=et.now(),c=a.reduce((m,_)=>m.add(_.key),ue());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=wr(),w=ue();return l.ss.getEntries(m,c).next(T=>{_=T,_.forEach((g,p)=>{p.isValidDocument()||(w=w.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(T=>{h=T;const g=[];for(const p of a){const v=q4(p,h.get(p.key).overlayedDocument);v!=null&&g.push(new vi(p.key,v,aR(v.value.mapValue),Qn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,g,a)}).next(T=>{d=T;const g=T.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(m,T.batchId,g)})}).then(()=>({batchId:d.batchId,changes:yR(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Le(ge)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await $l(r,i.changes),await Gh(r.remoteStore)}catch(i){const s=Sy(i,"Failed to persist write");n.reject(s)}}async function ZR(t,e){const n=oe(t);try{const r=await MU(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Ee(o.Ra):i.removedDocuments.size>0&&(Ee(o.Ra),o.Ra=!1))}),await $l(n,r,e)}catch(r){await Ll(r)}}function Rw(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=oe(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&Ry(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _F(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new Le(Q.comparator);o=o.insert(s,wt.newNoDocument(s,re.min()));const a=ue().add(s),l=new Hh(re.min(),new Map,new Le(ge),o,a);await ZR(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Ay(r)}else await am(r.localStore,e,!1).then(()=>lm(r,e,n)).catch(Ll)}async function wF(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await LU(n.localStore,e);tA(n,r,null),eA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $l(n,i)}catch(i){await Ll(i)}}async function EF(t,e,n){const r=oe(t);try{const i=await function(o,a){const l=oe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Ee(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);tA(r,e,n),eA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $l(r,i)}catch(i){await Ll(i)}}function eA(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function tA(t,e,n){const r=oe(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function lm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||nA(t,r)})}function nA(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(zR(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Ay(t))}function Aw(t,e,n){for(const r of n)r instanceof XR?(t.wa.addReference(r.key,e),TF(t,r)):r instanceof JR?(q("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||nA(t,r.key)):te()}function TF(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(q("SyncEngine","New document in limbo: "+n),t.ga.add(r),Ay(t))}function Ay(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Q(Pe.fromString(e)),r=t.Da.next();t.ya.set(r,new fF(n)),t.pa=t.pa.insert(n,r),jR(t.remoteStore,new $r(Gn(fy(n.path)),r,"TargetPurposeLimboResolution",ay._e))}}async function $l(t,e,n){const r=oe(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=_y.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=oe(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>D.forEach(u,d=>D.forEach(d.ki,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>D.forEach(d.qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Ml(h))throw h;q("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.ts.get(d),_=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(_);c.ts=c.ts.insert(d,w)}}}(r.localStore,s))}async function IF(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await VR(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new K(N.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $l(n,r._s)}}function SF(t,e){const n=oe(t),r=n.ya.get(e);if(r&&r.Ra)return ue().add(r.key);{let i=ue();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function RF(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_F.bind(null,e),e.Va.a_=uF.bind(null,e.eventManager),e.Va.Fa=cF.bind(null,e.eventManager),e}function AF(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EF.bind(null,e),e}class kw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return DU(this.persistence,new OU,e.initialUser,this.serializer)}createPersistence(e){return new PU(vy.jr,this.serializer)}createSharedClientState(e){return new jU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IF.bind(null,this.syncEngine),await oF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lF}()}createDatastore(e){const n=Wh(e.databaseInfo.databaseId),r=function(s){return new HU(s)}(e.databaseInfo);return function(s,o,a,l){return new GU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new YU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Rw(this.syncEngine,n,0),function(){return Tw.D()?new Tw:new zU}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new pF(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=oe(n);q("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Fl(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class rA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class CF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=iR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Af(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await VR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bF(t);q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Iw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Iw(e.remoteStore,s)),t._onlineComponents=e}function PF(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function bF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Af(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!PF(n))throw n;ao("Error using user provided cache. Falling back to memory cache: "+n),await Af(t,new kw)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Af(t,new kw);return t._offlineComponents}async function iA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Cw(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Cw(t,new kF))),t._onlineComponents}function xF(t){return iA(t).then(e=>e.syncEngine)}async function um(t){const e=await iA(t),n=e.eventManager;return n.onListen=mF.bind(null,e.syncEngine),n.onUnlisten=yF.bind(null,e.syncEngine),n}function OF(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new rA({next:d=>{o.enqueueAndForget(()=>QR(s,h)),d.fromCache&&l.source==="server"?u.reject(new K(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new YR(a,c,{includeMetadataChanges:!0,J_:!0});return GR(s,h)}(await um(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function sA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Pw=new Map;/**
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
 */function oA(t,e,n){if(!n)throw new K(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NF(t,e,n,r){if(e===!0&&r===!0)throw new K(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bw(t){if(!Q.isDocumentKey(t))throw new K(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xw(t){if(Q.isDocumentKey(t))throw new K(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ky(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ky(t);throw new K(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ow{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ow({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ow(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Z2;switch(r.type){case"firstParty":return new r4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pw.get(n);r&&(q("ComponentProvider","Removing Datastore"),Pw.delete(n),r.terminate())}(this),Promise.resolve()}}function DF(t,e,n,r={}){var i;const s=(t=Xn(t,Qh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=vt.MOCK_USER;else{a=ST(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new K(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(u)}t._authCredentials=new e4(new rR(a,l))}}/**
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
 */class jl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jl(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class ei extends jl{constructor(e,n,r){super(e,n,fy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new Q(e))}withConverter(e){return new ei(this.firestore,e,this._path)}}function LF(t,e,...n){if(t=Ae(t),oA("collection","path",e),t instanceof Qh){const r=Pe.fromString(e,...n);return xw(r),new ei(t,null,r)}{if(!(t instanceof Gt||t instanceof ei))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return xw(r),new ei(t.firestore,null,r)}}function Bc(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=iR.newId()),oA("doc","path",e),t instanceof Qh){const r=Pe.fromString(e,...n);return bw(r),new Gt(t,null,new Q(r))}{if(!(t instanceof Gt||t instanceof ei))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return bw(r),new Gt(t.firestore,t instanceof ei?t.converter:null,new Q(r))}}/**
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
 */class MF{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new FR(this,"async_queue_retry"),this.iu=()=>{const n=Rf();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Rf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Rf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Zr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ml(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Iy.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&te()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Nw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class mo extends Qh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new MF}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aA(this),this._firestoreClient.terminate()}}function VF(t,e){const n=typeof t=="object"?t:gh(),r=typeof t=="string"?t:e||"(default)",i=pi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ET("firestore");s&&DF(i,...s)}return i}function Cy(t){return t._firestoreClient||aA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new m4(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,sA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new CF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(Rt.fromBase64String(e))}catch(n){throw new K(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new go(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xh{constructor(e){this._methodName=e}}/**
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
 */class Py{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const UF=/^__.*__$/;class FF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vl(e,this.data,n,this.fieldTransforms)}}class lA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Jh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Jh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return qc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(uA(this.Iu)&&UF.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class $F{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wh(e)}pu(e,n,r,i=!1){return new Jh({Iu:e,methodName:n,gu:r,path:ct.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cA(t){const e=t._freezeSettings(),n=Wh(t._databaseId);return new $F(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jF(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);by("Data must be an object, but it was:",o,r);const a=hA(r,o);let l,u;if(s.merge)l=new nn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=cm(e,h,n);if(!o.contains(d))throw new K(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fA(c,d)||c.push(d)}l=new nn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new FF(new jt(a),l,u)}class Zh extends Xh{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zh}}function zF(t,e,n){return new Jh({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class BF extends Xh{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=zF(this,e,!0),r=this.yu.map(s=>zl(s,n)),i=new ho(r);return new $4(e.path,i)}isEqual(e){return this===e}}function qF(t,e,n,r){const i=t.pu(1,e,n);by("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();as(r,(l,u)=>{const c=xy(e,l,n);u=Ae(u);const h=i.Ru(c);if(u instanceof Zh)s.push(c);else{const d=zl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new nn(s);return new lA(o,a,i.fieldTransforms)}function HF(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[cm(e,r,n)],l=[i];if(s.length%2!=0)throw new K(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(cm(e,s[d])),l.push(s[d+1]);const u=[],c=jt.empty();for(let d=a.length-1;d>=0;--d)if(!fA(u,a[d])){const m=a[d];let _=l[d];_=Ae(_);const w=o.Ru(m);if(_ instanceof Zh)u.push(m);else{const T=zl(_,w);T!=null&&(u.push(m),c.set(m,T))}}const h=new nn(u);return new lA(c,h,o.fieldTransforms)}function zl(t,e){if(dA(t=Ae(t)))return by("Unsupported field value:",e,t),hA(t,e);if(t instanceof Xh)return function(r,i){if(!uA(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=zl(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return V4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=et.fromDate(r);return{timestampValue:jc(i.serializer,s)}}if(r instanceof et){const s=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jc(i.serializer,s)}}if(r instanceof Py)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof go)return{bytesValue:xR(i.serializer,r._byteString)};if(r instanceof Gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${ky(r)}`)}(t,e)}function hA(t,e){const n={};return sR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(r,i)=>{const s=zl(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Py||t instanceof go||t instanceof Gt||t instanceof Xh)}function by(t,e,n){if(!dA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ky(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function cm(t,e,n){if((e=Ae(e))instanceof Yh)return e._internalPath;if(typeof e=="string")return xy(t,e);throw qc("Field path arguments must be of type string or ",t,!1,void 0,n)}const WF=new RegExp("[~\\*/\\[\\]]");function xy(t,e,n){if(e.search(WF)>=0)throw qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yh(...e.split("."))._internalPath}catch{throw qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new K(N.INVALID_ARGUMENT,a+t+l)}function fA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class pA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KF extends pA{data(){return super.data()}}function mA(t,e){return typeof e=="string"?xy(t,e):e instanceof Yh?e._internalPath:e._delegate._internalPath}/**
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
 */function gA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class GF{convertValue(e,n="none"){switch(Ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return as(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Py(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const n=si(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Ee(MR(r));const i=new al(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||_r(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function QF(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class oa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yA extends pA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ju extends yA{data(e={}){return super.data(e)}}class vA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new oa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ju(this._firestore,this._userDataWriter,r.key,r,new oa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new oa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new oa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:YF(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class Oy extends GF{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function XF(t){t=Xn(t,jl);const e=Xn(t.firestore,mo),n=Cy(e),r=new Oy(e);return gA(t._query),OF(n,t._query).then(i=>new vA(e,r,t,i))}function Dw(t,e,n){t=Xn(t,Gt);const r=Xn(t.firestore,mo),i=QF(t.converter,e,n);return _A(r,[jF(cA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qn.none())])}function JF(t,e,n,...r){t=Xn(t,Gt);const i=Xn(t.firestore,mo),s=cA(i);let o;return o=typeof(e=Ae(e))=="string"||e instanceof Yh?HF(s,"updateDoc",t._key,e,n,r):qF(s,"updateDoc",t._key,e),_A(i,[o.toMutation(t._key,Qn.exists(!0))])}function ZF(t,...e){var n,r,i;t=Ae(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Nw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Gt)u=Xn(t.firestore,mo),c=fy(t._key.path),l={next:h=>{e[o]&&e[o](e$(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Xn(t,jl);u=Xn(h.firestore,mo),c=h._query;const d=new Oy(u);l={next:m=>{e[o]&&e[o](new vA(u,d,h,m))},error:e[o+1],complete:e[o+2]},gA(t._query)}return function(d,m,_,w){const T=new rA(w),g=new YR(m,T,_);return d.asyncQueue.enqueueAndForget(async()=>GR(await um(d),g)),()=>{T.Na(),d.asyncQueue.enqueueAndForget(async()=>QR(await um(d),g))}}(Cy(u),c,a,l)}function _A(t,e){return function(r,i){const s=new Zr;return r.asyncQueue.enqueueAndForget(async()=>vF(await xF(r),i,s)),s.promise}(Cy(t),e)}function e$(t,e,n){const r=n.docs.get(e._key),i=new Oy(t);return new yA(t,i,e._key,r,new oa(n.hasPendingWrites,n.fromCache),e.converter)}function t$(...t){return new BF("arrayUnion",t)}(function(e,n=!0){(function(i){bo=i})(is),On(new wn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new mo(new t4(r.getProvider("auth-internal")),new s4(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new K(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Wt(ew,"4.4.0",e),Wt(ew,"4.4.0","esm2017")})();const n$={apiKey:"AIzaSyAFYR0i-hXg7Tehr9B9T0RFZy9ks0Hu0y4",authDomain:"plant-detection-7cb1c.firebaseapp.com",projectId:"plant-detection-7cb1c",storageBucket:"plant-detection-7cb1c.appspot.com",messagingSenderId:"263641659396",appId:"1:263641659396:web:17ebc93a63fb9c25969d51",measurementId:"G-F5WNPPWCYW"},Ny=bT(n$),ed=ZD(Ny),r$=BV();CM(Ny);const cl=VF(Ny),Bl=b.createContext(),i$=({children:t})=>{const[e,n]=b.useState({});return b.useEffect(()=>{const r=$N(ed,i=>{n(i)});return()=>{r()}},[]),O.jsx(Bl.Provider,{value:{currentUser:e},children:t})},s$=()=>{const{currentUser:t}=b.useContext(Bl),e=fh();console.log(t),t&&e("/community");const[n,r]=b.useState(!1),i=async s=>{s.preventDefault();const o=s.target[0].value,a=s.target[1].value;try{await LN(ed,o,a)}catch{r(!0)}};return O.jsx("div",{className:"formContainer",children:O.jsxs("div",{className:"formWrapper",children:[O.jsx("span",{className:"logo",children:"Lama Chat"}),O.jsx("span",{className:"title",children:"Login"}),O.jsxs("form",{onSubmit:i,children:[O.jsx("input",{type:"email",placeholder:"email"}),O.jsx("input",{type:"password",placeholder:"password"}),O.jsx("button",{children:"Sign in"}),n&&O.jsx("span",{children:"Something went wrong"})]}),O.jsxs("p",{children:["You don't have an account? ",O.jsx(Wa,{to:"/register",children:"Register"})]})]})})},o$=()=>{const[t,e]=b.useState(!1),[n,r]=b.useState(!1);fh();const i=async s=>{r(!0),s.preventDefault();const o=s.target[0].value,a=s.target[1].value,l=s.target[2].value,u=s.target[3].files[0];try{const c=await DN(ed,a,l),h=new Date().getTime(),d=zV(r$,`${o+h}`);await $V(d,u).then(()=>{jV(d).then(async m=>{try{await VN(c.user,{displayName:o,photoURL:m}),await Dw(Bc(cl,"users",c.user.uid),{uid:c.user.uid,displayName:o,email:a,photoURL:m}),await Dw(Bc(cl,"userChats",c.user.uid),{})}catch(_){console.log(_),e(!0),r(!1)}})})}catch{e(!0),r(!1)}};return O.jsx("div",{className:"formContainer",children:O.jsxs("div",{className:"formWrapper",children:[O.jsx("span",{className:"logo",children:"Lama Chat"}),O.jsx("span",{className:"title",children:"Register"}),O.jsxs("form",{onSubmit:i,children:[O.jsx("input",{required:!0,type:"text",placeholder:"display name"}),O.jsx("input",{required:!0,type:"email",placeholder:"email"}),O.jsx("input",{required:!0,type:"password",placeholder:"password"}),O.jsx("input",{required:!0,style:{display:"none"},type:"file",id:"file"}),O.jsx("label",{htmlFor:"file",children:O.jsx("span",{children:"Add an avatar"})}),O.jsx("button",{disabled:n,children:"Sign up"}),n&&"Uploading and compressing the image please wait...",t&&O.jsx("span",{children:"Something went wrong"})]}),O.jsxs("p",{children:["You do have an account? ",O.jsx(Wa,{to:"/login",children:"Login"})]})]})})};function a$(){return O.jsx("div",{children:"Dashboard"})}function l$(){const[t,e]=b.useState([]),{currentUser:n}=b.useContext(Bl),r=fh();b.useEffect(()=>{n?i():r("/login")},[n,r]);const i=async function(){try{const o=(await XF(LF(cl,"communities"))).docs.map(a=>({id:a.id,...a.data()}));e(o)}catch(s){console.error("Error fetching communities:",s)}};return O.jsxs("div",{children:[O.jsx(Wa,{to:"community/1222",children:"Community"}),O.jsx("button",{}),t.map(s=>O.jsx("div",{children:O.jsx(Wa,{to:`/community/${s.id}`,children:O.jsx("button",{className:"m-1",children:s.name})})},s.id))]})}function u$(){const o="http://api.agromonitoring.com/agro/1.0/weather/history/accumulated_temperature?lat=37&lon=-122&start=1483218000&end=1504213200&threshold=273&appid=df24bd934355a6d2ba702da500af0847",a=function(){fetch(o).then(l=>l.json()).then(l=>{console.log(l)}).catch(l=>{console.error("Error:",l)})};return O.jsxs(O.Fragment,{children:[O.jsx("div",{children:"APICalls"}),O.jsx("button",{onClick:a,children:"Fetch Data"})]})}var Qe=function(){return Qe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Qe.apply(this,arguments)};function yo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var c$=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var h=e[c],d=n[c];if(s=r?r.call(i,h,d,c):void 0,s===!1||s===void 0&&h!==d)return!1}return!0};const h$=wm(c$);var Ie="-ms-",Ra="-moz-",ye="-webkit-",wA="comm",td="rule",Dy="decl",d$="@import",EA="@keyframes",f$="@layer",p$=Math.abs,Ly=String.fromCharCode,hm=Object.assign;function m$(t,e){return rt(t,0)^45?(((e<<2^rt(t,0))<<2^rt(t,1))<<2^rt(t,2))<<2^rt(t,3):0}function TA(t){return t.trim()}function ir(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function zu(t,e){return t.indexOf(e)}function rt(t,e){return t.charCodeAt(e)|0}function vo(t,e,n){return t.slice(e,n)}function Un(t){return t.length}function IA(t){return t.length}function aa(t,e){return e.push(t),t}function g$(t,e){return t.map(e).join("")}function Lw(t,e){return t.filter(function(n){return!ir(n,e)})}var nd=1,_o=1,SA=0,En=0,We=0,No="";function rd(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:nd,column:_o,length:o,return:"",siblings:a}}function kr(t,e){return hm(rd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Es(t){for(;t.root;)t=kr(t.root,{children:[t]});aa(t,t.siblings)}function y$(){return We}function v$(){return We=En>0?rt(No,--En):0,_o--,We===10&&(_o=1,nd--),We}function bn(){return We=En<SA?rt(No,En++):0,_o++,We===10&&(_o=1,nd++),We}function Ui(){return rt(No,En)}function Bu(){return En}function id(t,e){return vo(No,t,e)}function dm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _$(t){return nd=_o=1,SA=Un(No=t),En=0,[]}function w$(t){return No="",t}function kf(t){return TA(id(En-1,fm(t===91?t+2:t===40?t+1:t)))}function E$(t){for(;(We=Ui())&&We<33;)bn();return dm(t)>2||dm(We)>3?"":" "}function T$(t,e){for(;--e&&bn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return id(t,Bu()+(e<6&&Ui()==32&&bn()==32))}function fm(t){for(;bn();)switch(We){case t:return En;case 34:case 39:t!==34&&t!==39&&fm(We);break;case 40:t===41&&fm(t);break;case 92:bn();break}return En}function I$(t,e){for(;bn()&&t+We!==57;)if(t+We===84&&Ui()===47)break;return"/*"+id(e,En-1)+"*"+Ly(t===47?t:bn())}function S$(t){for(;!dm(Ui());)bn();return id(t,En)}function R$(t){return w$(qu("",null,null,null,[""],t=_$(t),0,[0],t))}function qu(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,m=0,_=0,w=1,T=1,g=1,p=0,v="",I=i,A=s,k=r,R=v;T;)switch(_=p,p=bn()){case 40:if(_!=108&&rt(R,h-1)==58){zu(R+=le(kf(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:R+=kf(p);break;case 9:case 10:case 13:case 32:R+=E$(_);break;case 92:R+=T$(Bu()-1,7);continue;case 47:switch(Ui()){case 42:case 47:aa(A$(I$(bn(),Bu()),e,n,l),l);break;default:R+="/"}break;case 123*w:a[u++]=Un(R)*g;case 125*w:case 59:case 0:switch(p){case 0:case 125:T=0;case 59+c:g==-1&&(R=le(R,/\f/g,"")),m>0&&Un(R)-h&&aa(m>32?Vw(R+";",r,n,h-1,l):Vw(le(R," ","")+";",r,n,h-2,l),l);break;case 59:R+=";";default:if(aa(k=Mw(R,e,n,u,c,i,a,v,I=[],A=[],h,s),s),p===123)if(c===0)qu(R,e,k,k,I,s,h,a,A);else switch(d===99&&rt(R,3)===110?100:d){case 100:case 108:case 109:case 115:qu(t,k,k,r&&aa(Mw(t,k,k,0,0,i,a,v,i,I=[],h,A),A),i,A,h,a,r?I:A);break;default:qu(R,k,k,k,[""],A,0,a,A)}}u=c=m=0,w=g=1,v=R="",h=o;break;case 58:h=1+Un(R),m=_;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&v$()==125)continue}switch(R+=Ly(p),p*w){case 38:g=c>0?1:(R+="\f",-1);break;case 44:a[u++]=(Un(R)-1)*g,g=1;break;case 64:Ui()===45&&(R+=kf(bn())),d=Ui(),c=h=Un(v=R+=S$(Bu())),p++;break;case 45:_===45&&Un(R)==2&&(w=0)}}return s}function Mw(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,m=i===0?s:[""],_=IA(m),w=0,T=0,g=0;w<r;++w)for(var p=0,v=vo(t,d+1,d=p$(T=o[w])),I=t;p<_;++p)(I=TA(T>0?m[p]+" "+v:le(v,/&\f/g,m[p])))&&(l[g++]=I);return rd(t,e,n,i===0?td:a,l,u,c,h)}function A$(t,e,n,r){return rd(t,e,n,wA,Ly(y$()),vo(t,2,-2),0,r)}function Vw(t,e,n,r,i){return rd(t,e,n,Dy,vo(t,0,r),vo(t,r+1,-1),r,i)}function RA(t,e,n){switch(m$(t,e)){case 5103:return ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+t+t;case 4789:return Ra+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+t+Ra+t+Ie+t+t;case 5936:switch(rt(t,e+11)){case 114:return ye+t+Ie+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ye+t+Ie+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ye+t+Ie+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ye+t+Ie+t+t;case 6165:return ye+t+Ie+"flex-"+t+t;case 5187:return ye+t+le(t,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Ie+"flex-$1$2")+t;case 5443:return ye+t+Ie+"flex-item-"+le(t,/flex-|-self/g,"")+(ir(t,/flex-|baseline/)?"":Ie+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return ye+t+Ie+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return ye+t+Ie+le(t,"shrink","negative")+t;case 5292:return ye+t+Ie+le(t,"basis","preferred-size")+t;case 6060:return ye+"box-"+le(t,"-grow","")+ye+t+Ie+le(t,"grow","positive")+t;case 4554:return ye+le(t,/([^-])(transform)/g,"$1"+ye+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+t+t;case 4200:if(!ir(t,/flex-|baseline/))return Ie+"grid-column-align"+vo(t,e)+t;break;case 2592:case 3360:return Ie+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ir(r.props,/grid-\w+-end/)})?~zu(t+(n=n[e].value),"span")?t:Ie+le(t,"-start","")+t+Ie+"grid-row-span:"+(~zu(n,"span")?ir(n,/\d+/):+ir(n,/\d+/)-+ir(t,/\d+/))+";":Ie+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ir(r.props,/grid-\w+-start/)})?t:Ie+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Un(t)-1-e>6)switch(rt(t,e+1)){case 109:if(rt(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Ra+(rt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~zu(t,"stretch")?RA(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return Ie+i+":"+s+u+(o?Ie+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(rt(t,e+6)===121)return le(t,":",":"+ye)+t;break;case 6444:switch(rt(t,rt(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(rt(t,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Ie+"$2box$3")+t;case 100:return le(t,":",":"+Ie)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function Hc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function k$(t,e,n,r){switch(t.type){case f$:if(t.children.length)break;case d$:case Dy:return t.return=t.return||t.value;case wA:return"";case EA:return t.return=t.value+"{"+Hc(t.children,r)+"}";case td:if(!Un(t.value=t.props.join(",")))return""}return Un(n=Hc(t.children,r))?t.return=t.value+"{"+n+"}":""}function C$(t){var e=IA(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function P$(t){return function(e){e.root||(e=e.return)&&t(e)}}function b$(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Dy:t.return=RA(t.value,t.length,n);return;case EA:return Hc([kr(t,{value:le(t.value,"@","@"+ye)})],r);case td:if(t.length)return g$(n=t.props,function(i){switch(ir(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Es(kr(t,{props:[le(i,/:(read-\w+)/,":"+Ra+"$1")]})),Es(kr(t,{props:[i]})),hm(t,{props:Lw(n,r)});break;case"::placeholder":Es(kr(t,{props:[le(i,/:(plac\w+)/,":"+ye+"input-$1")]})),Es(kr(t,{props:[le(i,/:(plac\w+)/,":"+Ra+"$1")]})),Es(kr(t,{props:[le(i,/:(plac\w+)/,Ie+"input-$1")]})),Es(kr(t,{props:[i]})),hm(t,{props:Lw(n,r)});break}return""})}}var x$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},ai=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",AA="active",Wc="data-styled-version",Zi="6.1.3",My=`/*!sc*/
`,Vy=typeof window<"u"&&"HTMLElement"in window,O$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),N$={},sd=Object.freeze([]),wo=Object.freeze({});function Uy(t,e,n){return n===void 0&&(n=wo),t.theme!==n.theme&&t.theme||e||n.theme}var kA=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),D$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,L$=/(^-|-$)/g;function Uw(t){return t.replace(D$,"-").replace(L$,"")}var M$=/(a)(d)/gi,wu=52,Fw=function(t){return String.fromCharCode(t+(t>25?39:97))};function pm(t){var e,n="";for(e=Math.abs(t);e>wu;e=e/wu|0)n=Fw(e%wu)+n;return(Fw(e%wu)+n).replace(M$,"$1-$2")}var Cf,CA=5381,$s=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},PA=function(t){return $s(CA,t)};function Fy(t){return pm(PA(t)>>>0)}function bA(t){return t.displayName||t.name||"Component"}function Pf(t){return typeof t=="string"&&!0}var xA=typeof Symbol=="function"&&Symbol.for,OA=xA?Symbol.for("react.memo"):60115,V$=xA?Symbol.for("react.forward_ref"):60112,U$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},F$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},NA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$$=((Cf={})[V$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cf[OA]=NA,Cf);function $w(t){return("type"in(e=t)&&e.type.$$typeof)===OA?NA:"$$typeof"in t?$$[t.$$typeof]:U$;var e}var j$=Object.defineProperty,z$=Object.getOwnPropertyNames,jw=Object.getOwnPropertySymbols,B$=Object.getOwnPropertyDescriptor,q$=Object.getPrototypeOf,zw=Object.prototype;function $y(t,e,n){if(typeof e!="string"){if(zw){var r=q$(e);r&&r!==zw&&$y(t,r,n)}var i=z$(e);jw&&(i=i.concat(jw(e)));for(var s=$w(t),o=$w(e),a=0;a<i.length;++a){var l=i[a];if(!(l in F$||n&&n[l]||o&&l in o||s&&l in s)){var u=B$(e,l);try{j$(t,l,u)}catch{}}}}return t}function es(t){return typeof t=="function"}function od(t){return typeof t=="object"&&"styledComponentId"in t}function Oi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function hl(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function dl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function mm(t,e,n){if(n===void 0&&(n=!1),!n&&!dl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=mm(t[r],e[r]);else if(dl(e))for(var r in e)t[r]=mm(t[r],e[r]);return t}function jy(t,e){Object.defineProperty(t,"toString",{value:e})}function gn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var H$=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw gn(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(My);return n},t}(),Hu=new Map,Kc=new Map,Wu=1,Eu=function(t){if(Hu.has(t))return Hu.get(t);for(;Kc.has(Wu);)Wu++;var e=Wu++;return Hu.set(t,e),Kc.set(e,t),e},W$=function(t,e){Wu=e+1,Hu.set(t,e),Kc.set(e,t)},K$="style[".concat(ai,"][").concat(Wc,'="').concat(Zi,'"]'),G$=new RegExp("^".concat(ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Q$=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Y$=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(My),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(G$);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(W$(c,u),Q$(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function gm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var DA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ai,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ai,AA),r.setAttribute(Wc,Zi);var o=gm();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},X$=function(){function t(e){this.element=DA(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw gn(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),J$=function(){function t(e){this.element=DA(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Z$=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Bw=Vy,ej={isServer:!Vy,useCSSOMInjection:!O$},Eo=function(){function t(e,n,r){e===void 0&&(e=wo),n===void 0&&(n={});var i=this;this.options=Qe(Qe({},ej),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Vy&&Bw&&(Bw=!1,function(s){for(var o=document.querySelectorAll(K$),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ai)!==AA&&(Y$(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),jy(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(g){return Kc.get(g)}(h);if(d===void 0)return"continue";var m=s.names.get(d),_=o.getGroup(h);if(m===void 0||_.length===0)return"continue";var w="".concat(ai,".g").concat(h,'[id="').concat(d,'"]'),T="";m!==void 0&&m.forEach(function(g){g.length>0&&(T+="".concat(g,","))}),l+="".concat(_).concat(w,'{content:"').concat(T,'"}').concat(My)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Eu(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Qe(Qe({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Z$(i):r?new X$(i):new J$(i)}(this.options),new H$(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Eu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Eu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Eu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),tj=/&/g,nj=/^\s*\/\/.*$/gm;function LA(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=LA(n.children,e)),n})}function MA(t){var e,n,r,i=t===void 0?wo:t,s=i.options,o=s===void 0?wo:s,a=i.plugins,l=a===void 0?sd:a,u=function(d,m,_){return _===n||_.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===td&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(tj,n).replace(r,u))}),o.prefix&&c.push(b$),c.push(k$);var h=function(d,m,_,w){m===void 0&&(m=""),_===void 0&&(_=""),w===void 0&&(w="&"),e=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var T=d.replace(nj,""),g=R$(_||m?"".concat(_," ").concat(m," { ").concat(T," }"):T);o.namespace&&(g=LA(g,o.namespace));var p=[];return Hc(g,C$(c.concat(P$(function(v){return p.push(v)})))),p};return h.hash=l.length?l.reduce(function(d,m){return m.name||gn(15),$s(d,m.name)},CA).toString():"",h}var VA=new Eo,ym=MA(),ad=Ge.createContext({shouldForwardProp:void 0,styleSheet:VA,stylis:ym}),rj=ad.Consumer,ij=Ge.createContext(void 0);function Gc(){return b.useContext(ad)}function UA(t){var e=b.useState(t.stylisPlugins),n=e[0],r=e[1],i=Gc().styleSheet,s=b.useMemo(function(){var l=i;return t.sheet?l=t.sheet:t.target&&(l=l.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[t.disableCSSOMInjection,t.sheet,t.target,i]),o=b.useMemo(function(){return MA({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);b.useEffect(function(){h$(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var a=b.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:o}},[t.shouldForwardProp,s,o]);return Ge.createElement(ad.Provider,{value:a},Ge.createElement(ij.Provider,{value:o},t.children))}var FA=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ym);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,jy(this,function(){throw gn(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ym),this.name+e.hash},t}(),sj=function(t){return t>="A"&&t<="Z"};function qw(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;sj(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var $A=function(t){return t==null||t===!1||t===""},jA=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!$A(s)&&(Array.isArray(s)&&s.isCss||es(s)?r.push("".concat(qw(i),":"),s,";"):dl(s)?r.push.apply(r,yo(yo(["".concat(i," {")],jA(s),!1),["}"],!1)):r.push("".concat(qw(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in x$||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ti(t,e,n,r){if($A(t))return[];if(od(t))return[".".concat(t.styledComponentId)];if(es(t)){if(!es(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ti(i,e,n,r)}var s;return t instanceof FA?n?(t.inject(n,r),[t.getName(r)]):[t]:dl(t)?jA(t):Array.isArray(t)?Array.prototype.concat.apply(sd,t.map(function(o){return ti(o,e,n,r)})):[t.toString()]}function zA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(es(n)&&!od(n))return!1}return!0}var oj=PA(Zi),aj=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zA(e),this.componentId=n,this.baseHash=$s(oj,n),this.baseStyle=r,Eo.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Oi(i,this.staticRulesId);else{var s=hl(ti(this.rules,e,n,r)),o=pm($s(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Oi(i,o),this.staticRulesId=o}else{for(var l=$s(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=hl(ti(h,e,n,r));l=$s(l,d+c),u+=d}}if(u){var m=pm(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=Oi(i,m)}}return i},t}(),li=Ge.createContext(void 0),lj=li.Consumer;function uj(){var t=b.useContext(li);if(!t)throw gn(18);return t}function cj(t){var e=Ge.useContext(li),n=b.useMemo(function(){return function(r,i){if(!r)throw gn(14);if(es(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw gn(8);return i?Qe(Qe({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?Ge.createElement(li.Provider,{value:n},t.children):null}var bf={};function hj(t,e,n){var r=od(t),i=t,s=!Pf(t),o=e.attrs,a=o===void 0?sd:o,l=e.componentId,u=l===void 0?function(I,A){var k=typeof I!="string"?"sc":Uw(I);bf[k]=(bf[k]||0)+1;var R="".concat(k,"-").concat(Fy(Zi+k+bf[k]));return A?"".concat(A,"-").concat(R):R}(e.displayName,e.parentComponentId):l,c=e.displayName,h=c===void 0?function(I){return Pf(I)?"styled.".concat(I):"Styled(".concat(bA(I),")")}(t):c,d=e.displayName&&e.componentId?"".concat(Uw(e.displayName),"-").concat(e.componentId):e.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(e.shouldForwardProp){var T=e.shouldForwardProp;_=function(I,A){return w(I,A)&&T(I,A)}}else _=w}var g=new aj(n,d,r?i.componentStyle:void 0);function p(I,A){return function(k,R,M){var H=k.attrs,G=k.componentStyle,Ve=k.defaultProps,er=k.foldedComponentIds,Ln=k.styledComponentId,us=k.target,cs=Ge.useContext(li),Ir=Gc(),Qt=k.shouldForwardProp||Ir.shouldForwardProp,U=function(kt,cn,Vt){for(var Yt,tr=Qe(Qe({},cn),{className:void 0,theme:Vt}),hs=0;hs<kt.length;hs+=1){var ds=es(Yt=kt[hs])?Yt(tr):Yt;for(var In in ds)tr[In]=In==="className"?Oi(tr[In],ds[In]):In==="style"?Qe(Qe({},tr[In]),ds[In]):ds[In]}return cn.className&&(tr.className=Oi(tr.className,cn.className)),tr}(H,R,Uy(R,cs,Ve)||wo),X=U.as||us,Z={};for(var fe in U)U[fe]===void 0||fe[0]==="$"||fe==="as"||fe==="theme"||(fe==="forwardedAs"?Z.as=U.forwardedAs:Qt&&!Qt(fe,X)||(Z[fe]=U[fe]));var be=function(kt,cn){var Vt=Gc(),Yt=kt.generateAndInjectStyles(cn,Vt.styleSheet,Vt.stylis);return Yt}(G,U),At=Oi(er,Ln);return be&&(At+=" "+be),U.className&&(At+=" "+U.className),Z[Pf(X)&&!kA.has(X)?"class":"className"]=At,Z.ref=M,b.createElement(X,Z)}(v,I,A)}p.displayName=h;var v=Ge.forwardRef(p);return v.attrs=m,v.componentStyle=g,v.displayName=h,v.shouldForwardProp=_,v.foldedComponentIds=r?Oi(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=r?function(A){for(var k=[],R=1;R<arguments.length;R++)k[R-1]=arguments[R];for(var M=0,H=k;M<H.length;M++)mm(A,H[M],!0);return A}({},i.defaultProps,I):I}}),jy(v,function(){return".".concat(v.styledComponentId)}),s&&$y(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Hw(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Ww=function(t){return Object.assign(t,{isCss:!0})};function ld(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(es(t)||dl(t))return Ww(ti(Hw(sd,yo([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ti(r):Ww(ti(Hw(r,e)))}function vm(t,e,n){if(n===void 0&&(n=wo),!e)throw gn(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,ld.apply(void 0,yo([i],s,!1)))};return r.attrs=function(i){return vm(t,e,Qe(Qe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return vm(t,e,Qe(Qe({},n),i))},r}var BA=function(t){return vm(hj,t)},_m=BA;kA.forEach(function(t){_m[t]=BA(t)});var dj=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=zA(e),Eo.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(hl(ti(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Eo.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function fj(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=ld.apply(void 0,yo([t],e,!1)),i="sc-global-".concat(Fy(JSON.stringify(r))),s=new dj(r,i),o=function(l){var u=Gc(),c=Ge.useContext(li),h=Ge.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),Ge.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,N$,c,d);else{var m=Qe(Qe({},u),{theme:Uy(u,h,o.defaultProps)});s.renderStyles(l,m,c,d)}}return Ge.memo(o)}function pj(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=hl(ld.apply(void 0,yo([t],e,!1))),i=Fy(r);return new FA(i,r)}function mj(t){var e=Ge.forwardRef(function(n,r){var i=Uy(n,Ge.useContext(li),t.defaultProps);return Ge.createElement(t,Qe({},n,{theme:i,ref:r}))});return e.displayName="WithTheme(".concat(bA(t),")"),$y(e,t)}var gj=function(){function t(){var e=this;this._emitSheetCSS=function(){var n=e.instance.toString(),r=gm(),i=hl([r&&'nonce="'.concat(r,'"'),"".concat(ai,'="true"'),"".concat(Wc,'="').concat(Zi,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(n,"</style>")},this.getStyleTags=function(){if(e.sealed)throw gn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw gn(2);var r=((n={})[ai]="",n[Wc]=Zi,n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),i=gm();return i&&(r.nonce=i),[Ge.createElement("style",Qe({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Eo({isServer:!0}),this.sealed=!1}return t.prototype.collectStyles=function(e){if(this.sealed)throw gn(2);return Ge.createElement(UA,{sheet:this.instance},e)},t.prototype.interleaveWithNodeStream=function(e){throw gn(3)},t}(),yj={StyleSheet:Eo,mainSheet:VA};const vj=Object.freeze(Object.defineProperty({__proto__:null,ServerStyleSheet:gj,StyleSheetConsumer:rj,StyleSheetContext:ad,StyleSheetManager:UA,ThemeConsumer:lj,ThemeContext:li,ThemeProvider:cj,__PRIVATE__:yj,createGlobalStyle:fj,css:ld,default:_m,isStyledComponent:od,keyframes:pj,styled:_m,useTheme:uj,version:Zi,withTheme:mj},Symbol.toStringTag,{value:"Module"}));var qA={exports:{}};const _j=bk(vj);(function(t,e){(function(n,r){t.exports=r(b,_j)})(typeof self<"u"?self:Pk,function(n,r){return function(i){var s={};function o(a){if(s[a])return s[a].exports;var l=s[a]={i:a,l:!1,exports:{}};return i[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=i,o.c=s,o.d=function(a,l,u){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:u})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(1&l&&(a=o(a)),8&l||4&l&&typeof a=="object"&&a&&a.__esModule)return a;var u=Object.create(null);if(o.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:a}),2&l&&typeof a!="string")for(var c in a)o.d(u,c,(function(h){return a[h]}).bind(null,c));return u},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="dist/",o(o.s=9)}([function(i,s,o){i.exports=o(5)()},function(i,s){i.exports=n},function(i,s){i.exports=r},function(i,s){var o=function(a,l){return{parse:function(m,_){var w=JSON.parse(m,d).map(h),T=w[0],g=_||u,p=typeof T=="object"&&T?function v(I,A,k,R){return Object.keys(k).reduce(function(M,H){var G=M[H];if(G instanceof a){var Ve=I[G];typeof Ve!="object"||A.has(Ve)?M[H]=R.call(M,H,Ve):(A.add(Ve),M[H]=R.call(M,H,v(I,A,Ve,R)))}else M[H]=R.call(M,H,G);return M},k)}(w,new Set,T,g):T;return g.call({"":p},"",p)},stringify:function(m,_,w){for(var T,g=new Map,p=[],v=[],I=_&&typeof _==typeof p?function(R,M){if(R===""||-1<_.indexOf(R))return M}:_||u,A=+c(g,p,I.call({"":m},"",m)),k=function(R,M){if(T)return T=!T,M;var H=I.call(this,R,M);switch(typeof H){case"object":if(H===null)return H;case l:return g.get(H)||c(g,p,H)}return H};A<p.length;A++)T=!0,v[A]=JSON.stringify(p[A],k,w);return"["+v.join(",")+"]"}};function u(m,_){return _}function c(m,_,w){var T=a(_.push(w)-1);return m.set(w,T),T}function h(m){return m instanceof a?a(m):m}function d(m,_){return typeof _===l?new a(_):_}}(String,"string");i.exports=o},function(i,s,o){i.exports=function(a,l){var u=["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","~!@#$%^&()_+-={}[];',"],c="";(l=l||"aA0").split("").forEach(function(d){isNaN(parseInt(d))?/[a-z]/.test(d)?c+=u[0]:/[A-Z]/.test(d)?c+=u[1]:c+=u[3]:c+=u[2]}),a=a||30;for(var h="";a--;)h+=c.charAt(Math.floor(Math.random()*c.length));return h}},function(i,s,o){var a=o(6),l=o(7),u=o(8);i.exports=function(){function c(m,_,w,T,g,p){p!==u&&l(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function h(){return c}c.isRequired=c;var d={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:h,element:c,instanceOf:h,node:c,objectOf:h,oneOf:h,oneOfType:h,shape:h,exact:h};return d.checkPropTypes=a,d.PropTypes=d,d}},function(i,s,o){function a(u){return function(){return u}}var l=function(){};l.thatReturns=a,l.thatReturnsFalse=a(!1),l.thatReturnsTrue=a(!0),l.thatReturnsNull=a(null),l.thatReturnsThis=function(){return this},l.thatReturnsArgument=function(u){return u},i.exports=l},function(i,s,o){i.exports=function(a,l,u,c,h,d,m,_){if(!a){var w;if(l===void 0)w=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var T=[u,c,h,d,m,_],g=0;(w=new Error(l.replace(/%s/g,function(){return T[g++]}))).name="Invariant Violation"}throw w.framesToPop=1,w}}},function(i,s,o){i.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(i,s,o){o.r(s);var a=o(1),l=o.n(a),u=o(0),c=o.n(u),h=o(4),d=o.n(h),m=o(2),_=o.n(m),w=function(f){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,E=function(x){x=x.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(C,S,W,se){return S+S+W+W+se+se});var $=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);return $?{r:parseInt($[1],16),g:parseInt($[2],16),b:parseInt($[3],16)}:null}(f);return"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", ").concat(y,")")};function T(){var f=I([`
  0% { box-shadow: 0 0 0 0 `,`; }
  70% { box-shadow: 0 0 0 10px `,`; }
  100% { box-shadow: 0 0 0 0 `,`; }
`]);return T=function(){return f},f}function g(){var f=I([`
  25% { transform: rotate(-1deg); }
  100% { transform: rotate(1deg); }
`]);return g=function(){return f},f}function p(){var f=I([`
  100% { transform: scale(1); }
`]);return p=function(){return f},f}function v(){var f=I([`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`]);return v=function(){return f},f}function I(f,y){return y||(y=f.slice(0)),Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(y)}}))}var A=Object(m.keyframes)(v()),k=Object(m.keyframes)(p()),R=Object(m.keyframes)(g());function M(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  animation: `,` 1.4s infinite both;
  animation-delay: `,`;
`]);return M=function(){return f},f}var H=_.a.span(M(),A,function(f){return f.delay}),G=function(){return l.a.createElement("span",{className:"rsc-loading"},l.a.createElement(H,{delay:"0s"},"."),l.a.createElement(H,{delay:".2s"},"."),l.a.createElement(H,{delay:".4s"},"."))};function Ve(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  display: flex;
  justify-content: center;
  margin: 0 6px 10px 6px;
  padding: 16px;
`]);return Ve=function(){return f},f}var er=_.a.div(Ve());function Ln(f){return(Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(f)}function us(f,y){for(var E=0;E<y.length;E++){var x=y[E];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(f,x.key,x)}}function cs(f){return(cs=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(f)}function Ir(f,y){return(Ir=Object.setPrototypeOf||function(E,x){return E.__proto__=x,E})(f,y)}function Qt(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function U(f,y,E){return y in f?Object.defineProperty(f,y,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[y]=E,f}var X=function(f){function y(){var $,C,S,W;(function(j,B){if(!(j instanceof B))throw new TypeError("Cannot call a class as a function")})(this,y);for(var se=arguments.length,P=new Array(se),V=0;V<se;V++)P[V]=arguments[V];return S=this,W=($=cs(y)).call.apply($,[this].concat(P)),C=!W||Ln(W)!=="object"&&typeof W!="function"?Qt(S):W,U(Qt(Qt(C)),"state",{loading:!0}),U(Qt(Qt(C)),"renderComponent",function(){var j=C.props,B=j.step,Y=j.steps,ie=j.previousStep,J=j.triggerNextStep,Be=B.component;return l.a.cloneElement(Be,{step:B,steps:Y,previousStep:ie,triggerNextStep:J})}),C}var E,x;return function($,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(C&&C.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),C&&Ir($,C)}(y,a.Component),E=y,(x=[{key:"componentDidMount",value:function(){var $=this,C=this.props,S=C.speak,W=C.step,se=C.previousValue,P=C.triggerNextStep,V=W.delay,j=W.waitAction;setTimeout(function(){$.setState({loading:!1},function(){j||W.rendered||P(),S(W,se)})},V)}},{key:"render",value:function(){var $=this.state.loading,C=this.props.style;return l.a.createElement(er,{className:"rsc-cs",style:C},$?l.a.createElement(G,null):this.renderComponent())}}])&&us(E.prototype,x),y}();X.propTypes={previousStep:c.a.objectOf(c.a.any).isRequired,previousValue:c.a.oneOfType([c.a.string,c.a.bool,c.a.number,c.a.object,c.a.array]),speak:c.a.func,step:c.a.objectOf(c.a.any).isRequired,steps:c.a.objectOf(c.a.any).isRequired,style:c.a.objectOf(c.a.any).isRequired,triggerNextStep:c.a.func.isRequired},X.defaultProps={previousValue:"",speak:function(){}};var Z=X;function fe(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  animation: `,` 0.3s ease forwards;
  cursor: pointer;
  display: inline-block;
  margin: 2px;
  transform: scale(0);
`]);return fe=function(){return f},f}var be=_.a.li(fe(),k),At={background:"#f5f8fb",fontFamily:"monospace",headerBgColor:"#6e48aa",headerFontColor:"#fff",headerFontSize:"16px",botBubbleColor:"#6E48AA",botFontColor:"#fff",userBubbleColor:"#fff",userFontColor:"#4a4a4a"};function kt(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  background: `,`;
  border: 0;
  border-radius: 22px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: `,`;
  display: inline-block;
  font-size: 14px;
  padding: 12px;

  &:hover {
    opacity: 0.7;
  }
  &:active,
  &:hover:focus {
    outline:none;
  }
`]);return kt=function(){return f},f}var cn=_.a.button(kt(),function(f){return f.theme.botBubbleColor},function(f){return f.theme.botFontColor});cn.defaultProps={theme:At};var Vt=cn;function Yt(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  margin: 2px 0 12px 0;
  padding: 0 6px;
`]);return Yt=function(){return f},f}var tr=_.a.ul(Yt());function hs(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([""]);return hs=function(){return f},f}var ds=_.a.div(hs());function In(f){return(In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(f)}function HA(f,y){for(var E=0;E<y.length;E++){var x=y[E];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(f,x.key,x)}}function zy(f){return(zy=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(f)}function By(f,y){return(By=Object.setPrototypeOf||function(E,x){return E.__proto__=x,E})(f,y)}function Do(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function qy(f,y,E){return y in f?Object.defineProperty(f,y,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[y]=E,f}var Hy=function(f){function y(){var $,C,S,W;(function(j,B){if(!(j instanceof B))throw new TypeError("Cannot call a class as a function")})(this,y);for(var se=arguments.length,P=new Array(se),V=0;V<se;V++)P[V]=arguments[V];return S=this,W=($=zy(y)).call.apply($,[this].concat(P)),C=!W||In(W)!=="object"&&typeof W!="function"?Do(S):W,qy(Do(Do(C)),"onOptionClick",function(j){var B=j.value;(0,C.props.triggerNextStep)({value:B})}),qy(Do(Do(C)),"renderOption",function(j){var B=C.props,Y=B.bubbleOptionStyle,ie=B.step.user,J=j.value,Be=j.label;return l.a.createElement(be,{key:J,className:"rsc-os-option"},l.a.createElement(Vt,{className:"rsc-os-option-element",style:Y,user:ie,onClick:function(){return C.onOptionClick({value:J})}},Be))}),C}var E,x;return function($,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(C&&C.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),C&&By($,C)}(y,a.Component),E=y,(x=[{key:"render",value:function(){var $=this.props.step.options;return l.a.createElement(ds,{className:"rsc-os"},l.a.createElement(tr,{className:"rsc-os-options"},Object.keys($).map(function(C){return $[C]}).map(this.renderOption)))}}])&&HA(E.prototype,x),y}();Hy.propTypes={bubbleOptionStyle:c.a.objectOf(c.a.any).isRequired,step:c.a.objectOf(c.a.any).isRequired,triggerNextStep:c.a.func.isRequired};var WA=Hy;function Wy(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  animation: `,` 0.3s ease forwards;
  background: `,`;
  border-radius: `,`;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: `,`;
  display: inline-block;
  font-size: 14px;
  max-width: 50%;
  margin: `,`;
  overflow: hidden;
  position: relative;
  padding: 12px;
  transform: scale(0);
  transform-origin: `,`;
`]);return Wy=function(){return f},f}var Ky=_.a.div(Wy(),k,function(f){return f.user?f.theme.userBubbleColor:f.theme.botBubbleColor},function(f){var y=f.isFirst,E=f.isLast,x=f.user;return y||E?!y&&E?x?"18px 0 18px 18px":"0 18px 18px 18px":f.user?"18px 18px 0 18px":"18px 18px 18px 0":x?"18px 0 0 18px":"0 18px 18px 0px"},function(f){return f.user?f.theme.userFontColor:f.theme.botFontColor},function(f){var y=f.isFirst,E=f.showAvatar,x=f.user;return!y&&E?x?"-8px 46px 10px 0":"-8px 0 10px 46px":y||E?"0 0 10px 0":x?"-8px 0px 10px 0":"-8px 0 10px 0px"},function(f){var y=f.isFirst,E=f.user;return y?E?"bottom right":"bottom left":E?"top right":"top left"});Ky.defaultProps={theme:At};var KA=Ky;function Gy(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  animation: `,` 0.3s ease forwards;
  border-radius: `,`;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  height: 40px;
  min-width: 40px;
  padding: 3px;
  transform: scale(0);
  transform-origin: `,`;
  width: 40;
`]);return Gy=function(){return f},f}var GA=_.a.img(Gy(),k,function(f){return f.user?"50% 50% 50% 0":"50% 50% 0 50%"},function(f){return f.user?"bottom left":"bottom right"});function Qy(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  display: inline-block;
  order: `,`;
  padding: 6px;
`]);return Qy=function(){return f},f}var QA=_.a.div(Qy(),function(f){return f.user?"1":"0"});function Yy(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  align-items: flex-end;
  display: flex;
  justify-content: `,`;
`]);return Yy=function(){return f},f}var YA=_.a.div(Yy(),function(f){return f.user?"flex-end":"flex-start"});function Xy(f){return(Xy=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(f)}function XA(f,y){for(var E=0;E<y.length;E++){var x=y[E];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(f,x.key,x)}}function Jy(f){return(Jy=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(f)}function Zy(f,y){return(Zy=Object.setPrototypeOf||function(E,x){return E.__proto__=x,E})(f,y)}function _i(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function ud(f,y,E){return y in f?Object.defineProperty(f,y,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[y]=E,f}var cd=function(f){function y(){var $,C,S,W;(function(j,B){if(!(j instanceof B))throw new TypeError("Cannot call a class as a function")})(this,y);for(var se=arguments.length,P=new Array(se),V=0;V<se;V++)P[V]=arguments[V];return S=this,W=($=Jy(y)).call.apply($,[this].concat(P)),C=!W||Xy(W)!=="object"&&typeof W!="function"?_i(S):W,ud(_i(_i(C)),"state",{loading:!0}),ud(_i(_i(C)),"getMessage",function(){var j=C.props,B=j.previousValue,Y=j.step.message;return Y?Y.replace(/{previousValue}/g,B):""}),ud(_i(_i(C)),"renderMessage",function(){var j=C.props,B=j.step,Y=j.steps,ie=j.previousStep,J=j.triggerNextStep,Be=B.component;return Be?l.a.cloneElement(Be,{step:B,steps:Y,previousStep:ie,triggerNextStep:J}):C.getMessage()}),C}var E,x;return function($,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(C&&C.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),C&&Zy($,C)}(y,a.Component),E=y,(x=[{key:"componentDidMount",value:function(){var $=this,C=this.props,S=C.step,W=C.speak,se=C.previousValue,P=C.triggerNextStep,V=S.component,j=S.delay,B=S.waitAction,Y=V&&B;setTimeout(function(){$.setState({loading:!1},function(){Y||S.rendered||P(),W(S,se)})},j)}},{key:"render",value:function(){var $=this.props,C=$.step,S=$.isFirst,W=$.isLast,se=$.avatarStyle,P=$.bubbleStyle,V=$.hideBotAvatar,j=$.hideUserAvatar,B=this.state.loading,Y=C.avatar,ie=C.user,J=ie?!j:!V;return l.a.createElement(YA,{className:"rsc-ts ".concat(ie?"rsc-ts-user":"rsc-ts-bot"),user:ie},l.a.createElement(QA,{className:"rsc-ts-image-container",user:ie},S&&J&&l.a.createElement(GA,{className:"rsc-ts-image",style:se,showAvatar:J,user:ie,src:Y,alt:"avatar"})),l.a.createElement(KA,{className:"rsc-ts-bubble",style:P,user:ie,showAvatar:J,isFirst:S,isLast:W},B?l.a.createElement(G,null):this.renderMessage()))}}])&&XA(E.prototype,x),y}();cd.propTypes={avatarStyle:c.a.objectOf(c.a.any).isRequired,isFirst:c.a.bool.isRequired,isLast:c.a.bool.isRequired,bubbleStyle:c.a.objectOf(c.a.any).isRequired,hideBotAvatar:c.a.bool.isRequired,hideUserAvatar:c.a.bool.isRequired,previousStep:c.a.objectOf(c.a.any),previousValue:c.a.oneOfType([c.a.string,c.a.bool,c.a.number,c.a.object,c.a.array]),speak:c.a.func,step:c.a.objectOf(c.a.any).isRequired,steps:c.a.objectOf(c.a.any),triggerNextStep:c.a.func.isRequired},cd.defaultProps={previousStep:{},previousValue:"",speak:function(){},steps:{}};var JA=cd,ZA=[{key:"id",types:["string","number"],required:!0},{key:"user",types:["boolean"],required:!0},{key:"trigger",types:["string","number","function"],required:!1},{key:"validator",types:["function"],required:!1},{key:"end",types:["boolean"],required:!1},{key:"placeholder",types:["string"],required:!1},{key:"inputAttributes",types:["object"],required:!1},{key:"metadata",types:["object"],required:!1}],ek=[{key:"id",types:["string","number"],required:!0},{key:"message",types:["string","function"],required:!0},{key:"avatar",types:["string"],required:!1},{key:"trigger",types:["string","number","function"],required:!1},{key:"delay",types:["number"],required:!1},{key:"end",types:["boolean"],required:!1},{key:"placeholder",types:["string"],required:!1},{key:"hideInput",types:["boolean"],required:!1},{key:"inputAttributes",types:["object"],required:!1},{key:"metadata",types:["object"],required:!1}],tk=[{key:"id",types:["string","number"],required:!0},{key:"options",types:["object"],required:!0},{key:"end",types:["boolean"],required:!1},{key:"placeholder",types:["string"],required:!1},{key:"hideInput",types:["boolean"],required:!1},{key:"inputAttributes",types:["object"],required:!1},{key:"metadata",types:["object"],required:!1}],nk=[{key:"id",types:["string","number"],required:!0},{key:"component",types:["any"],required:!0},{key:"avatar",types:["string"],required:!1},{key:"replace",types:["boolean"],required:!1},{key:"waitAction",types:["boolean"],required:!1},{key:"asMessage",types:["boolean"],required:!1},{key:"trigger",types:["string","number","function"],required:!1},{key:"delay",types:["number"],required:!1},{key:"end",types:["boolean"],required:!1},{key:"placeholder",types:["string"],required:!1},{key:"hideInput",types:["boolean"],required:!1},{key:"inputAttributes",types:["object"],required:!1},{key:"metadata",types:["object"],required:!1}],rk=[{key:"id",types:["string","number"],required:!0},{key:"update",types:["string","number"],required:!0},{key:"trigger",types:["string","number","function"],required:!0},{key:"placeholder",types:["string"],required:!1},{key:"inputAttributes",types:["object"],required:!1},{key:"metadata",types:["object"],required:!1}],fs=o(3);function hd(f){return(hd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(f)}var ev={parse:function(f){var y=[];if(f.user)y=ZA;else if(f.message)y=ek;else if(f.options)y=tk;else if(f.component)y=nk;else{if(!f.update)throw new Error("The step ".concat(Object(fs.stringify)(f)," is invalid"));y=rk}for(var E=0,x=y.length;E<x;E+=1){var $=y[E],C=$.key,S=$.types,W=$.required;if(!f[C]&&W)throw new Error("Key '".concat(C,"' is required in step ").concat(Object(fs.stringify)(f)));if(f[C]&&S[0]!=="any"&&S.indexOf(hd(f[C]))<0)throw new Error("The type of '".concat(C,"' value must be ").concat(S.join(" or ")," instead of ").concat(hd(f[C])))}var se=y.map(function(P){return P.key});for(var C in f)se.indexOf(C)<0&&(console.error("Invalid key '".concat(C,"' in step '").concat(f.id,"'")),delete f[C]);return f},checkInvalidIds:function(f){for(var y in f){var E=f[y],x=f[y].trigger;if(typeof x!="function"){if(E.options)for(var $=E.options.filter(function(se){return typeof se.trigger!="function"}).map(function(se){return se.trigger}),C=0,S=$.length;C<S;C+=1){var W=$[C];if(W&&!f[W])throw new Error("The id '".concat(W,"' triggered by option ").concat(C+1," in step '").concat(f[y].id,"' does not exist"))}else if(x&&!f[x])throw new Error("The id '".concat(x,"' triggered by step '").concat(f[y].id,"' does not exist"))}}}},ik=function(f,y){var E=Object(fs.parse)(Object(fs.stringify)(y));for(var x in E)for(var $=0,C=E[x].length;$<C;$+=1)E[x][$].component&&(E[x][$].component=E[x][$].id);localStorage.setItem(f,Object(fs.stringify)(E))};function tv(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  background: `,`;
  border-radius: 10px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  font-family: `,`;
  overflow: hidden;
  position: `,`;
  bottom: `,`;
  top: `,`;
  right: `,`;
  left: `,`;
  width: `,`;
  height: `,`;
  z-index: 999;
  transform: `,`;
  transform-origin: `,`;
  transition: transform 0.3s ease;

  @media screen and (max-width: 568px) {
    border-radius: `,`;
    bottom: 0 !important;
    left: initial !important;
    height: 100%;
    right: 0 !important;
    top: initial !important;
    width: 100%;
  }
`]);return tv=function(){return f},f}var nv=_.a.div(tv(),function(f){return f.theme.background},function(f){return f.theme.fontFamily},function(f){return f.floating?"fixed":"relative"},function(f){var y=f.floating,E=f.floatingStyle;return y?E.bottom||"32px":"initial"},function(f){var y=f.floating,E=f.floatingStyle;return y&&E.top||"initial"},function(f){var y=f.floating,E=f.floatingStyle;return y?E.right||"32px":"initial"},function(f){var y=f.floating,E=f.floatingStyle;return y&&E.left||"initial"},function(f){return f.width},function(f){return f.height},function(f){return f.opened?"scale(1)":"scale(0)"},function(f){return f.floatingStyle.transformOrigin||"bottom right"},function(f){return f.floating?"0":""});nv.defaultProps={theme:At};var sk=nv;function rv(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  height: calc(`," - ",`);
  overflow-y: scroll;
  margin-top: 2px;
  padding-top: 6px;

  @media screen and (max-width: 568px) {
    height: `,`;
  }
`]);return rv=function(){return f},f}var ok=_.a.div(rv(),function(f){return f.height},function(f){return f.hideInput?"56px":"112px"},function(f){return f.floating?"calc(100% - 112px)":""});function iv(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  align-items: center;
  background: `,`;
  color: `,`;
  display: flex;
  fill: `,`;
  height: 56px;
  justify-content: space-between;
  padding: 0 10px;
`]);return iv=function(){return f},f}var sv=_.a.div(iv(),function(f){return f.theme.headerBgColor},function(f){return f.theme.headerFontColor},function(f){return f.theme.headerFontColor});sv.defaultProps={theme:At};var ak=sv;function ov(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  margin: 0;
  font-size: `,`;
`]);return ov=function(){return f},f}var av=_.a.h2(ov(),function(f){return f.theme.headerFontSize});av.defaultProps={theme:At};var lk=av;function lv(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  cursor: pointer;
`]);return lv=function(){return f},f}var uk=_.a.a(lv());function uv(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  align-items: center;
  cursor: pointer;
  background: `,`;
  bottom: 32px;
  border-radius: 100%;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  fill: `,`;
  height: 56px;
  justify-content: center;
  position: fixed;
  right: 32px;
  transform: `,`;
  transition: transform 0.3s ease;
  width: 56px;
  z-index: 999;
`]);return uv=function(){return f},f}var cv=_.a.a(uv(),function(f){return f.theme.headerBgColor},function(f){return f.theme.headerFontColor},function(f){return f.opened?"scale(0)":"scale(1)"});cv.defaultProps={theme:{headerBgColor:"#6e48aa",headerFontColor:"#fff"}};var ck=cv;function hv(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  height: 24px;
  width: 24px;
`]);return hv=function(){return f},f}var hk=_.a.img(hv());function dv(){var f=function(y,E){return E||(E=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))}([`
  position: relative;
`]);return dv=function(){return f},f}var dk=_.a.div(dv());function fv(){var f=mv([`
          `,` .2s ease
        `]);return fv=function(){return f},f}function pv(){var f=mv([`
  animation: `,`;
  border: 0;
  border-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: `,`;
  box-shadow: `,`;
  box-sizing: border-box;
  color: `,`;
  font-size: 16px;
  opacity: `,`;
  outline: none;
  padding: `,`;
  width: 100%;
  -webkit-appearance: none;

  &:disabled {
    background: #fff;
  }

  @media screen and (max-width: 568px) {
    border-bottom-left-radius: `,`;
    border-bottom-right-radius: `,`;
  }
`]);return pv=function(){return f},f}function mv(f,y){return y||(y=f.slice(0)),Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(y)}}))}var fk=_.a.input(pv(),function(f){return f.invalid?Object(m.css)(fv(),R):""},function(f){return f.invalid?"0":"1px solid #eee"},function(f){return f.invalid?"inset 0 0 2px #E53935":"none"},function(f){return f.invalid?"#E53935":""},function(f){return f.disabled&&!f.invalid?".5":"1"},function(f){return f.hasButton?"16px 52px 16px 10px":"16px 10px"},function(f){return f.floating?"0":"10px"},function(f){return f.floating?"0":"10px"});function gv(){var f=vv([`
            `,` 2s ease infinite
          `]);return gv=function(){return f},f}function yv(){var f=vv([`
  background-color: transparent;
  border: 0;
  border-bottom-right-radius: 10px;
  box-shadow: none;
  cursor: `,`;
  fill: `,`;
  opacity: `,`;
  outline: none;
  padding: 14px 16px 12px 16px;
  position: absolute;
  right: 0;
  top: 0;
  &:before {
    content: '';
    position: absolute;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    animation: `,`;
  }
  &:not(:disabled):hover {
    opacity: 0.7;
  }
`]);return yv=function(){return f},f}function vv(f,y){return y||(y=f.slice(0)),Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(y)}}))}var _v=_.a.button(yv(),function(f){return f.disabled?"default":"pointer"},function(f){var y=f.speaking,E=f.invalid,x=f.theme;return y?x.headerBgColor:E?"#E53935":"#4a4a4a"},function(f){return f.disabled&&!f.invalid?".5":"1"},function(f){var y,E=f.theme;return f.speaking?Object(m.css)(gv(),(y=E.headerBgColor,Object(m.keyframes)(T(),w(y,.4),w(y,0),w(y,0)))):""});_v.defaultProps={theme:At};var pk=_v;function wv(){return(wv=Object.assign||function(f){for(var y=1;y<arguments.length;y++){var E=arguments[y];for(var x in E)Object.prototype.hasOwnProperty.call(E,x)&&(f[x]=E[x])}return f}).apply(this,arguments)}function Ev(f,y){for(var E=0;E<y.length;E++){var x=y[E];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(f,x.key,x)}}function Tv(f,y,E){return y&&Ev(f.prototype,y),E&&Ev(f,E),f}var dd=null,fd=function(){},Iv=function(){function f(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:fd,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fd,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:fd,$=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"en";return function(C,S){if(!(C instanceof S))throw new TypeError("Cannot call a class as a function")}(this,f),dd||(dd=this),this.state={inputValue:"",lang:$,onChange:y,onEnd:E,onStop:x},this.onResult=this.onResult.bind(this),this.onEnd=this.onEnd.bind(this),this.setup(),dd}return Tv(f,null,[{key:"isSupported",value:function(){return"webkitSpeechRecognition"in window}}]),Tv(f,[{key:"onChange",value:function(y){var E=this.state.onChange;this.setState({inputValue:y}),E(y)}},{key:"onFinal",value:function(y){this.setState({inputValue:y}),this.recognition.stop()}},{key:"onEnd",value:function(){var y=this.state,E=y.onStop,x=y.onEnd,$=y.force;this.setState({speaking:!1}),$?E():x()}},{key:"onResult",value:function(y){for(var E="",x="",$=y.resultIndex;$<y.results.length;$+=1)y.results[$].isFinal?(x+=y.results[$][0].transcript,this.onFinal(x)):(E+=y.results[$][0].transcript,this.onChange(E))}},{key:"setState",value:function(y){this.state=wv({},this.state,y)}},{key:"setup",value:function(){if(!f.isSupported())return this;var y=window.webkitSpeechRecognition;return this.recognition=new y,this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.lang=this.state.lang,this.recognition.onresult=this.onResult,this.recognition.onend=this.onEnd,this}},{key:"setLang",value:function(y){return this.setState({lang:y}),this.setup(),this}},{key:"speak",value:function(){return f.isSupported()?(this.state.speaking?(this.setState({force:!0}),this.recognition.stop()):(this.recognition.start(),this.setState({speaking:!0,inputValue:""})),this):this}}]),f}(),mk=function(){return l.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}),l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},gk=function(){return l.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},pd=function(f){var y=f.size;return l.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:y,height:y,viewBox:"0 0 500 500"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("polygon",{points:"0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"}))))};pd.propTypes={size:c.a.number},pd.defaultProps={size:20};var yk=pd,md=function(f){var y=f.size;return l.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:y,height:y,viewBox:"0 0 400 400"},l.a.createElement("g",null,l.a.createElement("path",{d:"M290.991,240.991c0,26.392-21.602,47.999-48.002,47.999h-11.529c-26.4,0-48.002-21.607-48.002-47.999V104.002   c0-26.4,21.602-48.004,48.002-48.004h11.529c26.4,0,48.002,21.604,48.002,48.004V240.991z"}),l.a.createElement("path",{d:"M342.381,209.85h-8.961c-4.932,0-8.961,4.034-8.961,8.961v8.008c0,50.26-37.109,91.001-87.361,91.001   c-50.26,0-87.109-40.741-87.109-91.001v-8.008c0-4.927-4.029-8.961-8.961-8.961h-8.961c-4.924,0-8.961,4.034-8.961,8.961v8.008   c0,58.862,40.229,107.625,96.07,116.362v36.966h-34.412c-4.932,0-8.961,4.039-8.961,8.971v17.922c0,4.923,4.029,8.961,8.961,8.961   h104.688c4.926,0,8.961-4.038,8.961-8.961v-17.922c0-4.932-4.035-8.971-8.961-8.971h-34.43v-36.966   c55.889-8.729,96.32-57.5,96.32-116.362v-8.008C351.342,213.884,347.303,209.85,342.381,209.85z"})))};md.propTypes={size:c.a.number},md.defaultProps={size:20};var vk=md,gd=function(){return/iphone|ipod|android|ie|blackberry|fennec/i.test(navigator.userAgent)},Sv=function(f){return typeof f=="string"},_k=function(f){return function(y,E){var x=f.lang,$=f.voice,C=f.enable,S=y.user;if(window.SpeechSynthesisUtterance&&window.speechSynthesis&&!S&&C){var W=function(P){var V=P.message,j=P.metadata,B=j===void 0?{}:j;return Sv(B.speak)?B.speak:Sv(V)?V:""}(y),se=new window.SpeechSynthesisUtterance;se.text=W.replace(/{previousValue}/g,E),se.lang=x,se.voice=$,window.speechSynthesis.speak(se)}}};function Rv(f){return(Rv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(f)}function wi(){return(wi=Object.assign||function(f){for(var y=1;y<arguments.length;y++){var E=arguments[y];for(var x in E)Object.prototype.hasOwnProperty.call(E,x)&&(f[x]=E[x])}return f}).apply(this,arguments)}function Av(f,y){for(var E=0;E<y.length;E++){var x=y[E];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(f,x.key,x)}}function kv(f){return(kv=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(f)}function Cv(f,y){return(Cv=Object.setPrototypeOf||function(E,x){return E.__proto__=x,E})(f,y)}function ae(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function je(f,y,E){return y in f?Object.defineProperty(f,y,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[y]=E,f}var yd=function(f){function y(C){var S,W,se;return function(P,V){if(!(P instanceof V))throw new TypeError("Cannot call a class as a function")}(this,y),W=this,se=kv(y).call(this,C),S=!se||Rv(se)!=="object"&&typeof se!="function"?ae(W):se,je(ae(ae(S)),"onNodeInserted",function(P){var V=P.currentTarget;S.props.enableSmoothScroll&&S.supportsScrollBehavior?V.scroll({top:V.scrollHeight,left:0,behavior:"smooth"}):V.scrollTop=V.scrollHeight}),je(ae(ae(S)),"onResize",function(){S.content.scrollTop=S.content.scrollHeight}),je(ae(ae(S)),"onRecognitionChange",function(P){S.setState({inputValue:P})}),je(ae(ae(S)),"onRecognitionEnd",function(){S.setState({speaking:!1}),S.handleSubmitButton()}),je(ae(ae(S)),"onRecognitionStop",function(){S.setState({speaking:!1})}),je(ae(ae(S)),"onValueChange",function(P){S.setState({inputValue:P.target.value})}),je(ae(ae(S)),"getTriggeredStep",function(P,V){var j=S.generateRenderedStepsById();return typeof P=="function"?P({value:V,steps:j}):P}),je(ae(ae(S)),"getStepMessage",function(P){var V=S.state.previousSteps,j=V.length>0?V.length-1:0,B=S.generateRenderedStepsById(),Y=V[j].value;return typeof P=="function"?P({previousValue:Y,steps:B}):P}),je(ae(ae(S)),"generateRenderedStepsById",function(){for(var P=S.state.previousSteps,V={},j=0,B=P.length;j<B;j+=1){var Y=P[j],ie=Y.id,J=Y.message,Be=Y.value,me=Y.metadata;V[ie]={id:ie,message:J,value:Be,metadata:me}}return V}),je(ae(ae(S)),"triggerNextStep",function(P){var V=S.props.enableMobileAutoFocus,j=S.state,B=j.defaultUserSettings,Y=j.previousSteps,ie=j.renderedSteps,J=j.steps,Be=S.state,me=Be.currentStep,Ct=Be.previousStep,Xt=me.end;if(P&&P.value&&(me.value=P.value),P&&P.hideInput&&(me.hideInput=P.hideInput),P&&P.trigger&&(me.trigger=S.getTriggeredStep(P.trigger,P.value)),Xt)S.handleEnd();else if(me.options&&P){var Ye=me.options.filter(function(Mo){return Mo.value===P.value})[0],hn=S.getTriggeredStep(Ye.trigger,me.value);delete me.options,me=wi({},me,Ye,B,{user:!0,message:Ye.label,trigger:hn}),ie.pop(),Y.pop(),ie.push(me),Y.push(me),S.setState({currentStep:me,renderedSteps:ie,previousSteps:Y})}else if(me.trigger){me.replace&&ie.pop();var xe=wi({},J[S.getTriggeredStep(me.trigger,me.value)]);if(xe.message)xe.message=S.getStepMessage(xe.message);else if(xe.update){var Pt=xe;if((xe=wi({},J[Pt.update])).options)for(var bt=0,ps=xe.options.length;bt<ps;bt+=1)xe.options[bt].trigger=Pt.trigger;else xe.trigger=Pt.trigger}xe.key=d()(24),Ct=me,me=xe,S.setState({renderedSteps:ie,currentStep:me,previousStep:Ct},function(){xe.user?S.setState({disabled:!1},function(){!V&&gd()||S.input&&S.input.focus()}):(ie.push(xe),Y.push(xe),S.setState({renderedSteps:ie,previousSteps:Y}))})}var ms=S.props,Sr=ms.cache,Lo=ms.cacheName;Sr&&setTimeout(function(){ik(Lo,{currentStep:me,previousStep:Ct,previousSteps:Y,renderedSteps:ie})},300)}),je(ae(ae(S)),"handleEnd",function(){var P=S.props.handleEnd;if(P){for(var V=S.state.previousSteps,j=V.map(function(Ye){return{id:Ye.id,message:Ye.message,value:Ye.value,metadata:Ye.metadata}}),B=[],Y=0,ie=V.length;Y<ie;Y+=1){var J=V[Y],Be=J.id,me=J.message,Ct=J.value,Xt=J.metadata;B[Be]={id:Be,message:me,value:Ct,metadata:Xt}}P({renderedSteps:j,steps:B,values:V.filter(function(Ye){return Ye.value}).map(function(Ye){return Ye.value})})}}),je(ae(ae(S)),"isInputValueEmpty",function(){var P=S.state.inputValue;return!P||P.length===0}),je(ae(ae(S)),"isLastPosition",function(P){var V=S.state.renderedSteps,j=V.length,B=V.map(function(ie){return ie.key}).indexOf(P.key);if(j<=1||B+1===j)return!0;var Y=V[B+1];return!Y.message&&!Y.asMessage||P.user!==Y.user}),je(ae(ae(S)),"isFirstPosition",function(P){var V=S.state.renderedSteps,j=V.map(function(Y){return Y.key}).indexOf(P.key);if(j===0)return!0;var B=V[j-1];return!B.message&&!B.asMessage||P.user!==B.user}),je(ae(ae(S)),"handleKeyPress",function(P){P.key==="Enter"&&S.submitUserMessage()}),je(ae(ae(S)),"handleSubmitButton",function(){var P=S.state,V=P.speaking,j=P.recognitionEnable;if((S.isInputValueEmpty()||V)&&j)return S.recognition.speak(),void(V||S.setState({speaking:!0}));S.submitUserMessage()}),je(ae(ae(S)),"submitUserMessage",function(){var P=S.state,V=P.defaultUserSettings,j=P.inputValue,B=P.previousSteps,Y=P.renderedSteps,ie=S.state.currentStep;ie.validator&&S.checkInvalidInput()||(ie=wi({},V,ie,{message:j,value:j}),Y.push(ie),B.push(ie),S.setState({currentStep:ie,renderedSteps:Y,previousSteps:B,disabled:!0,inputValue:""},function(){S.input&&S.input.blur()}))}),je(ae(ae(S)),"checkInvalidInput",function(){var P=S.props.enableMobileAutoFocus,V=S.state,j=V.currentStep,B=V.inputValue,Y=j.validator(B),ie=B;return(typeof Y!="boolean"||!Y)&&(S.setState({inputValue:Y.toString(),inputInvalid:!0,disabled:!0},function(){setTimeout(function(){S.setState({inputValue:ie,inputInvalid:!1,disabled:!1},function(){!P&&gd()||S.input&&S.input.focus()})},2e3)}),!0)}),je(ae(ae(S)),"toggleChatBot",function(P){var V=S.props.toggleFloating;V?V({opened:P}):S.setState({opened:P})}),je(ae(ae(S)),"renderStep",function(P,V){var j=S.state.renderedSteps,B=S.props,Y=B.avatarStyle,ie=B.bubbleStyle,J=B.bubbleOptionStyle,Be=B.customStyle,me=B.hideBotAvatar,Ct=B.hideUserAvatar,Xt=B.speechSynthesis,Ye=P.options,hn=P.component,xe=P.asMessage,Pt=S.generateRenderedStepsById(),bt=V>0?j[V-1]:{};return hn&&!xe?l.a.createElement(Z,{key:V,speak:S.speak,step:P,steps:Pt,style:Be,previousStep:bt,previousValue:bt.value,triggerNextStep:S.triggerNextStep}):Ye?l.a.createElement(WA,{key:V,step:P,speak:S.speak,previousValue:bt.value,triggerNextStep:S.triggerNextStep,bubbleOptionStyle:J}):l.a.createElement(JA,{key:V,step:P,steps:Pt,speak:S.speak,previousStep:bt,previousValue:bt.value,triggerNextStep:S.triggerNextStep,avatarStyle:Y,bubbleStyle:ie,hideBotAvatar:me,hideUserAvatar:Ct,speechSynthesis:Xt,isFirst:S.isFirstPosition(P),isLast:S.isLastPosition(P)})}),S.content=null,S.input=null,S.supportsScrollBehavior=!1,S.setContentRef=function(P){S.content=P},S.setInputRef=function(P){S.input=P},S.state={renderedSteps:[],previousSteps:[],currentStep:{},previousStep:{},steps:{},disabled:!0,opened:C.opened||!C.floating,inputValue:"",inputInvalid:!1,speaking:!1,recognitionEnable:C.recognitionEnable&&Iv.isSupported(),defaultUserSettings:{}},S.speak=_k(C.speechSynthesis),S}var E,x,$;return function(C,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(S&&S.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),S&&Cv(C,S)}(y,a.Component),E=y,$=[{key:"getDerivedStateFromProps",value:function(C,S){var W=C.opened;return C.toggleFloating!==void 0&&W!==void 0&&W!==S.opened?function(se){for(var P=1;P<arguments.length;P++){var V=arguments[P]!=null?arguments[P]:{},j=Object.keys(V);typeof Object.getOwnPropertySymbols=="function"&&(j=j.concat(Object.getOwnPropertySymbols(V).filter(function(B){return Object.getOwnPropertyDescriptor(V,B).enumerable}))),j.forEach(function(B){je(se,B,V[B])})}return se}({},S,{opened:W}):S}}],(x=[{key:"componentDidMount",value:function(){for(var C=this,S=this.props.steps,W=this.props,se=W.botDelay,P=W.botAvatar,V=W.cache,j=W.cacheName,B=W.customDelay,Y=W.enableMobileAutoFocus,ie=W.userAvatar,J={},Be={delay:se,avatar:P},me={delay:W.userDelay,avatar:ie,hideInput:!1},Ct={delay:B},Xt=0,Ye=S.length;Xt<Ye;Xt+=1){var hn=S[Xt],xe={};hn.user?xe=me:hn.message||hn.asMessage?xe=Be:hn.component&&(xe=Ct),J[hn.id]=wi({},xe,ev.parse(hn))}ev.checkInvalidIds(J);var Pt=S[0];if(Pt.message){var bt=Pt.message;Pt.message=typeof bt=="function"?bt():bt,J[Pt.id].message=Pt.message}var ps=this.state.recognitionEnable,ms=this.props.recognitionLang;ps&&(this.recognition=new Iv(this.onRecognitionChange,this.onRecognitionEnd,this.onRecognitionStop,ms)),this.supportsScrollBehavior="scrollBehavior"in document.documentElement.style,this.content&&(this.content.addEventListener("DOMNodeInserted",this.onNodeInserted),window.addEventListener("resize",this.onResize));var Sr=function(gs,ql){var Vo=gs.cacheName,wd=gs.cache,Ed=gs.firstStep,Ei=gs.steps,Td=Ed,Ek=[Ei[Td.id]],Tk=[Ei[Td.id]],Pv=localStorage.getItem(Vo);if(wd&&Pv)try{var Ut=Object(fs.parse)(Pv),bv=Ut.renderedSteps[Ut.renderedSteps.length-1];if(!bv||!bv.end){for(var ys=0,Ik=Ut.renderedSteps.length;ys<Ik;ys+=1){var xv=Ut.renderedSteps[ys];if(Ut.renderedSteps[ys].delay=0,Ut.renderedSteps[ys].rendered=!0,xv.component){var Sk=xv.id;Ut.renderedSteps[ys].component=Ei[Sk].component}}var Id=Ut.currentStep,Rk=Id.trigger,Ak=Id.end,Sd=Id.options,Ov=Ut.currentStep.id;if(Sd&&delete Ut.currentStep.rendered,!Rk&&!Ak)if(Sd)for(var Hl=0;Hl<Sd.length;Hl+=1)Ut.currentStep.options[Hl].trigger=Ei[Ov].options[Hl].trigger;else Ut.currentStep.trigger=Ei[Ov].trigger;return Ut.currentStep.user&&ql(),Ut}localStorage.removeItem(Vo)}catch(kk){console.info("Unable to parse cache named:".concat(Vo,`. 
The cache where probably created with an older version of react-simple-chatbot.
`),kk)}return{currentStep:Td,previousStep:{},previousSteps:Tk,renderedSteps:Ek}}({cacheName:j,cache:V,firstStep:Pt,steps:J},function(){C.setState({disabled:!1},function(){!Y&&gd()||C.input&&C.input.focus()})}),Lo=Sr.currentStep,Mo=Sr.previousStep,vd=Sr.previousSteps,_d=Sr.renderedSteps;this.setState({currentStep:Lo,defaultUserSettings:me,previousStep:Mo,previousSteps:vd,renderedSteps:_d,steps:J})}},{key:"componentWillUnmount",value:function(){this.content&&(this.content.removeEventListener("DOMNodeInserted",this.onNodeInserted),window.removeEventListener("resize",this.onResize))}},{key:"render",value:function(){var C=this,S=this.state,W=S.currentStep,se=S.disabled,P=S.inputInvalid,V=S.inputValue,j=S.opened,B=S.renderedSteps,Y=S.speaking,ie=S.recognitionEnable,J=this.props,Be=J.className,me=J.contentStyle,Ct=J.floating,Xt=J.floatingIcon,Ye=J.floatingStyle,hn=J.footerStyle,xe=J.headerComponent,Pt=J.headerTitle,bt=J.hideHeader,ps=J.hideSubmitButton,ms=J.inputStyle,Sr=J.placeholder,Lo=J.inputAttributes,Mo=J.recognitionPlaceholder,vd=J.style,_d=J.submitButtonStyle,gs=J.width,ql=J.height,Vo=xe||l.a.createElement(ak,{className:"rsc-header"},l.a.createElement(lk,{className:"rsc-header-title"},Pt),Ct&&l.a.createElement(uk,{className:"rsc-header-close-button",onClick:function(){return C.toggleChatBot(!1)}},l.a.createElement(gk,null))),wd=(this.isInputValueEmpty()||Y)&&ie?l.a.createElement(vk,null):l.a.createElement(yk,null),Ed=Y?Mo:W.placeholder||Sr,Ei=W.inputAttributes||Lo;return l.a.createElement("div",{className:"rsc ".concat(Be)},Ct&&l.a.createElement(ck,{className:"rsc-float-button",style:Ye,opened:j,onClick:function(){return C.toggleChatBot(!0)}},typeof Xt=="string"?l.a.createElement(hk,{src:Xt}):Xt),l.a.createElement(sk,{className:"rsc-container",floating:Ct,floatingStyle:Ye,opened:j,style:vd,width:gs,height:ql},!bt&&Vo,l.a.createElement(ok,{className:"rsc-content",ref:this.setContentRef,floating:Ct,style:me,height:ql,hideInput:W.hideInput},B.map(this.renderStep)),l.a.createElement(dk,{className:"rsc-footer",style:hn},!W.hideInput&&l.a.createElement(fk,wi({type:"textarea",style:ms,ref:this.setInputRef,className:"rsc-input",placeholder:P?"":Ed,onKeyPress:this.handleKeyPress,onChange:this.onValueChange,value:V,floating:Ct,invalid:P,disabled:se,hasButton:!ps},Ei)),!W.hideInput&&!ps&&l.a.createElement(pk,{className:"rsc-submit-button",style:_d,onClick:this.handleSubmitButton,invalid:P,disabled:se,speaking:Y},wd))))}}])&&Av(E.prototype,x),$&&Av(E,$),y}();yd.propTypes={avatarStyle:c.a.objectOf(c.a.any),botAvatar:c.a.string,botDelay:c.a.number,bubbleOptionStyle:c.a.objectOf(c.a.any),bubbleStyle:c.a.objectOf(c.a.any),cache:c.a.bool,cacheName:c.a.string,className:c.a.string,contentStyle:c.a.objectOf(c.a.any),customDelay:c.a.number,customStyle:c.a.objectOf(c.a.any),enableMobileAutoFocus:c.a.bool,enableSmoothScroll:c.a.bool,floating:c.a.bool,floatingIcon:c.a.oneOfType([c.a.string,c.a.element]),floatingStyle:c.a.objectOf(c.a.any),footerStyle:c.a.objectOf(c.a.any),handleEnd:c.a.func,headerComponent:c.a.element,headerTitle:c.a.string,height:c.a.string,hideBotAvatar:c.a.bool,hideHeader:c.a.bool,hideSubmitButton:c.a.bool,hideUserAvatar:c.a.bool,inputAttributes:c.a.objectOf(c.a.any),inputStyle:c.a.objectOf(c.a.any),opened:c.a.bool,toggleFloating:c.a.func,placeholder:c.a.string,recognitionEnable:c.a.bool,recognitionLang:c.a.string,recognitionPlaceholder:c.a.string,speechSynthesis:c.a.shape({enable:c.a.bool,lang:c.a.string,voice:typeof window<"u"?c.a.instanceOf(window.SpeechSynthesisVoice):c.a.any}),steps:c.a.arrayOf(c.a.object).isRequired,style:c.a.objectOf(c.a.any),submitButtonStyle:c.a.objectOf(c.a.any),userAvatar:c.a.string,userDelay:c.a.number,width:c.a.string},yd.defaultProps={avatarStyle:{},botDelay:1e3,bubbleOptionStyle:{},bubbleStyle:{},cache:!1,cacheName:"rsc_cache",className:"",contentStyle:{},customStyle:{},customDelay:1e3,enableMobileAutoFocus:!1,enableSmoothScroll:!1,floating:!1,floatingIcon:l.a.createElement(mk,null),floatingStyle:{},footerStyle:{},handleEnd:void 0,headerComponent:void 0,headerTitle:"Chat",height:"520px",hideBotAvatar:!1,hideHeader:!1,hideSubmitButton:!1,hideUserAvatar:!1,inputStyle:{},opened:void 0,placeholder:"Type the message ...",inputAttributes:{},recognitionEnable:!1,recognitionLang:"en",recognitionPlaceholder:"Listening ...",speechSynthesis:{enable:!1,lang:"en",voice:null},style:{},submitButtonStyle:{},toggleFloating:void 0,userDelay:1e3,width:"350px",botAvatar:"data:image/svg+xml,%3csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath d='M303 70a47 47 0 1 0-70 40v84h46v-84c14-8 24-23 24-40z' fill='%2393c7ef'/%3e%3cpath d='M256 23v171h23v-84a47 47 0 0 0-23-87z' fill='%235a8bb0'/%3e%3cpath fill='%2393c7ef' d='M0 240h248v124H0z'/%3e%3cpath fill='%235a8bb0' d='M264 240h248v124H264z'/%3e%3cpath fill='%2393c7ef' d='M186 365h140v124H186z'/%3e%3cpath fill='%235a8bb0' d='M256 365h70v124h-70z'/%3e%3cpath fill='%23cce9f9' d='M47 163h419v279H47z'/%3e%3cpath fill='%2393c7ef' d='M256 163h209v279H256z'/%3e%3cpath d='M194 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%233c5d76'/%3e%3cpath d='M380 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%231e2e3b'/%3e%3cpath d='M186 349a70 70 0 1 0 140 0H186z' fill='%233c5d76'/%3e%3cpath d='M256 349v70c39 0 70-31 70-70h-70z' fill='%231e2e3b'/%3e%3c/svg%3e",userAvatar:"data:image/svg+xml,%3csvg viewBox='-208.5 21 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ccircle cx='-158.5' cy='71' fill='%23F5EEE5' r='50'/%3e%3cdefs%3e%3ccircle cx='-158.5' cy='71' id='a' r='50'/%3e%3c/defs%3e%3cclipPath id='b'%3e%3cuse overflow='visible' xlink:href='%23a'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23b)' d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' fill='%23E6C19C'/%3e%3cg clip-path='url(%23b)'%3e%3cdefs%3e%3cpath d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' id='c'/%3e%3c/defs%3e%3cclipPath id='d'%3e%3cuse overflow='visible' xlink:href='%23c'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23d)' d='M-158.5 100.1c12.7 0 23-18.6 23-34.4 0-16.2-10.3-24.7-23-24.7s-23 8.5-23 24.7c0 15.8 10.3 34.4 23 34.4z' fill='%23D4B08C'/%3e%3c/g%3e%3cpath d='M-158.5 96c12.7 0 23-16.3 23-31 0-15.1-10.3-23-23-23s-23 7.9-23 23c0 14.7 10.3 31 23 31z' fill='%23F2CEA5'/%3e%3c/svg%3e"};var wk=yd;o.d(s,"Loading",function(){return G}),s.default=wk}])})})(qA);var wj=qA.exports;const Ej=wm(wj),Tj=[{id:"Greet",message:"Hello, Welcome to our shop",trigger:"Done"},{id:"Done",message:"Please enter your name!",trigger:"waiting1"},{id:"waiting1",user:!0,trigger:"Name"},{id:"Name",message:"Hi {previousValue}, Please select your issue",trigger:"issues"},{id:"issues",options:[{value:"React",label:"React",trigger:"React"},{value:"Angular",label:"Angular",trigger:"Angular"}]},{id:"React",message:"Thanks for letting your React issue, Our team will resolve your issue ASAP",end:!0},{id:"Angular",message:"Thanks for letting your Angular issue, Our team will resolve your issue ASAP",end:!0}],Ij=()=>{const[t,e]=b.useState(!1);return O.jsxs("div",{children:[O.jsx("div",{className:"w-10 aspect-square rounded-full bg-white text-black text-center absolute bottom-10 right-10 cursor-pointer",onClick:()=>e(!t),children:O.jsx("ion-icon",{name:"chatbubbles-outline",style:{fontSize:"25px"}})}),t&&O.jsx(Ej,{steps:Tj,className:"absolute bottom-30 right-10"})]})};function Sj(){const{id:t}=bb(),{currentUser:e}=b.useContext(Bl),[n,r]=b.useState(),[i,s]=b.useState([]),o=async function(a,l){a.preventDefault();const u=Bc(cl,"communities",t);await JF(u,{messages:t$({messageText:a.target[0].value,uid:e.uid,timestamp:new Date().toISOString(),file:a.target[1].value?a.target[1].value:null,displayName:e.displayName})}),a.target[0].value=""};return b.useEffect(()=>{(()=>{const l=ZF(Bc(cl,"communities",t),u=>{u.exists()?(r(u.data()),s(u.data().messages)):console.log("Community not found")});return()=>l()})()},[t]),O.jsxs(O.Fragment,{children:[O.jsx("div",{children:"SingleCommunity"}),i&&i.map((a,l)=>O.jsxs("div",{className:"my-4",children:[O.jsx("span",{children:a.messageText}),O.jsxs("div",{children:["Posted By - ",a.displayName]})]},l)),O.jsxs("form",{onSubmit:o,children:[O.jsx("input",{type:"text"}),O.jsx("input",{type:"file"}),O.jsx("button",{children:"Send"})]})]})}function Rj(){const t=[{name:"Home",href:"/"},{name:"Login",href:"/login"},{name:"Register",href:"/register"},{name:"Communities",href:"/communities"},{name:"Bot",href:"/chatbot"}];return O.jsx("nav",{className:"py-4 mx-10",children:O.jsx("ul",{className:"flex gap-4 flex-wrap",children:t.map((e,n)=>O.jsx("li",{children:O.jsx(tx,{to:e.href,children:e.name})},n))})})}function Aj(){const{currentUser:t}=b.useContext(Bl);return O.jsxs(O.Fragment,{children:[O.jsx(Rj,{}),t&&O.jsx("button",{onClick:()=>jN(ed),children:"Logout"}),O.jsxs(Hb,{children:[O.jsx(nr,{path:"/",element:O.jsx(ox,{})}),O.jsx(nr,{path:"/login",element:O.jsx(s$,{})}),O.jsx(nr,{path:"/register",element:O.jsx(o$,{})}),O.jsx(nr,{path:"/dashboard",element:O.jsx(a$,{})}),O.jsx(nr,{path:"/communities",element:O.jsx(l$,{})}),O.jsx(nr,{path:"community/:id",element:O.jsx(Sj,{})}),O.jsx(nr,{path:"/api",element:O.jsx(u$,{})}),O.jsx(nr,{path:"/chatbot",element:O.jsx(Ij,{})})]})]})}xf.createRoot(document.getElementById("root")).render(O.jsx(Ge.StrictMode,{children:O.jsx(Jb,{children:O.jsx(i$,{children:O.jsx(Aj,{})})})}));
