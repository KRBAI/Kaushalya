(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function RT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var B_={exports:{}},Ru={},$_={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),kT=Symbol.for("react.portal"),xT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),bT=Symbol.for("react.profiler"),DT=Symbol.for("react.provider"),OT=Symbol.for("react.context"),VT=Symbol.for("react.forward_ref"),LT=Symbol.for("react.suspense"),MT=Symbol.for("react.memo"),jT=Symbol.for("react.lazy"),jm=Symbol.iterator;function FT(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var H_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q_=Object.assign,W_={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=W_,this.updater=n||H_}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G_(){}G_.prototype=Ss.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=W_,this.updater=n||H_}var Ud=Fd.prototype=new G_;Ud.constructor=Fd;q_(Ud,Ss.prototype);Ud.isPureReactComponent=!0;var Fm=Array.isArray,K_=Object.prototype.hasOwnProperty,zd={current:null},Q_={key:!0,ref:!0,__self:!0,__source:!0};function Y_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K_.call(e,r)&&!Q_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ca,type:t,key:s,ref:o,props:i,_owner:zd.current}}function UT(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function zT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function Pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zT(""+t.key):e.toString(36)}function pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case kT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pc(o,0):r,Fm(i)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),pl(i,e,n,"",function(c){return c})):i!=null&&(Bd(i)&&(i=UT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Pc(s,l);o+=pl(s,e,n,u,i)}else if(u=FT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Pc(s,l++),o+=pl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var r=[],i=0;return pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},ml={transition:null},$T={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ml,ReactCurrentOwner:zd};function X_(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ss;re.Fragment=xT;re.Profiler=bT;re.PureComponent=Fd;re.StrictMode=NT;re.Suspense=LT;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;re.act=X_;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)K_.call(e,u)&&!Q_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ca,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:OT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DT,_context:t},t.Consumer=t};re.createElement=Y_;re.createFactory=function(t){var e=Y_.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:VT,render:t}};re.isValidElement=Bd;re.lazy=function(t){return{$$typeof:jT,_payload:{_status:-1,_result:t},_init:BT}};re.memo=function(t,e){return{$$typeof:MT,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};re.unstable_act=X_;re.useCallback=function(t,e){return ft.current.useCallback(t,e)};re.useContext=function(t){return ft.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};re.useEffect=function(t,e){return ft.current.useEffect(t,e)};re.useId=function(){return ft.current.useId()};re.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ft.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};re.useRef=function(t){return ft.current.useRef(t)};re.useState=function(t){return ft.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ft.current.useTransition()};re.version="18.3.1";$_.exports=re;var G=$_.exports;const HT=RT(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qT=G,WT=Symbol.for("react.element"),GT=Symbol.for("react.fragment"),KT=Object.prototype.hasOwnProperty,QT=qT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YT={key:!0,ref:!0,__self:!0,__source:!0};function J_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)KT.call(e,r)&&!YT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WT,type:t,key:s,ref:o,props:i,_owner:QT.current}}Ru.Fragment=GT;Ru.jsx=J_;Ru.jsxs=J_;B_.exports=Ru;var p=B_.exports,gh={},Z_={exports:{}},xt={},ev={exports:{}},tv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var ee=$.length;$.push(X);e:for(;0<ee;){var pe=ee-1>>>1,ce=$[pe];if(0<i(ce,X))$[pe]=X,$[ee]=ce,ee=pe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],ee=$.pop();if(ee!==X){$[0]=ee;e:for(var pe=0,ce=$.length,Ee=ce>>>1;pe<Ee;){var bt=2*(pe+1)-1,Dt=$[bt],Ot=bt+1,Vt=$[Ot];if(0>i(Dt,ee))Ot<ce&&0>i(Vt,Dt)?($[pe]=Vt,$[Ot]=ee,pe=Ot):($[pe]=Dt,$[bt]=ee,pe=bt);else if(Ot<ce&&0>i(Vt,ee))$[pe]=Vt,$[Ot]=ee,pe=Ot;else break e}}return X}function i($,X){var ee=$.sortIndex-X.sortIndex;return ee!==0?ee:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,m=null,g=3,T=!1,R=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=$)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function O($){if(N=!1,C($),!R)if(n(u)!==null)R=!0,Mr(j);else{var X=n(c);X!==null&&Wt(O,X.startTime-$)}}function j($,X){R=!1,N&&(N=!1,w(_),_=-1),T=!0;var ee=g;try{for(C(X),m=n(u);m!==null&&(!(m.expirationTime>X)||$&&!P());){var pe=m.callback;if(typeof pe=="function"){m.callback=null,g=m.priorityLevel;var ce=pe(m.expirationTime<=X);X=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),C(X)}else r(u);m=n(u)}if(m!==null)var Ee=!0;else{var bt=n(c);bt!==null&&Wt(O,bt.startTime-X),Ee=!1}return Ee}finally{m=null,g=ee,T=!1}}var F=!1,I=null,_=-1,E=5,S=-1;function P(){return!(t.unstable_now()-S<E)}function k(){if(I!==null){var $=t.unstable_now();S=$;var X=!0;try{X=I(!0,$)}finally{X?A():(F=!1,I=null)}}else F=!1}var A;if(typeof v=="function")A=function(){v(k)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,Cn=mt.port2;mt.port1.onmessage=k,A=function(){Cn.postMessage(null)}}else A=function(){b(k,0)};function Mr($){I=$,F||(F=!0,A())}function Wt($,X){_=b(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,Mr(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var ee=g;g=X;try{return $()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=g;g=$;try{return X()}finally{g=ee}},t.unstable_scheduleCallback=function($,X,ee){var pe=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ee+ce,$={id:d++,callback:X,priorityLevel:$,startTime:ee,expirationTime:ce,sortIndex:-1},ee>pe?($.sortIndex=ee,e(c,$),n(u)===null&&$===n(c)&&(N?(w(_),_=-1):N=!0,Wt(O,ee-pe))):($.sortIndex=ce,e(u,$),R||T||(R=!0,Mr(j))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var X=g;return function(){var ee=g;g=X;try{return $.apply(this,arguments)}finally{g=ee}}}})(tv);ev.exports=tv;var XT=ev.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JT=G,kt=XT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nv=new Set,Oo={};function mi(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(Oo[t]=e,t=0;t<e.length;t++)nv.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,ZT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zm={},Bm={};function eS(t){return yh.call(Bm,t)?!0:yh.call(zm,t)?!1:ZT.test(t)?Bm[t]=!0:(zm[t]=!0,!1)}function tS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nS(t,e,n,r){if(e===null||typeof e>"u"||tS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Hd);Qe[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Hd);Qe[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Hd);Qe[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nS(e,n,i,r)&&(n=null),r||i===null?eS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=JT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),zi=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),iv=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),wh=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),sv=Symbol.for("react.offscreen"),$m=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=$m&&t[$m]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Rc;function so(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var kc=!1;function xc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function rS(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case zi:return"Portal";case _h:return"Profiler";case Wd:return"StrictMode";case vh:return"Suspense";case wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iv:return(t.displayName||"Context")+".Consumer";case rv:return(t._context.displayName||"Context")+".Provider";case Gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function iS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sS(t){var e=ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=sS(t))}function av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ov(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ih(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lv(t,e){e=e.checked,e!=null&&qd(t,"checked",e,!1)}function Th(t,e){lv(t,e);var n=Sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(oo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function uv(t,e){var n=Sr(e.value),r=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,hv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oS=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){oS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function dv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function fv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aS=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(aS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xh=null,es=null,ts=null;function Km(t){if(t=fa(t)){if(typeof xh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Du(e),xh(t.stateNode,t.type,e))}}function pv(t){es?ts?ts.push(t):ts=[t]:es=t}function mv(){if(es){var t=es,e=ts;if(ts=es=null,Km(t),e)for(t=0;t<e.length;t++)Km(e[t])}}function gv(t,e){return t(e)}function yv(){}var Nc=!1;function _v(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return gv(t,e,n)}finally{Nc=!1,(es!==null||ts!==null)&&(yv(),mv())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Du(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Nh=!1;if(Mn)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Nh=!1}function lS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var _o=!1,jl=null,Fl=!1,bh=null,uS={onError:function(t){_o=!0,jl=t}};function cS(t,e,n,r,i,s,o,l,u){_o=!1,jl=null,lS.apply(uS,arguments)}function hS(t,e,n,r,i,s,o,l,u){if(cS.apply(this,arguments),_o){if(_o){var c=jl;_o=!1,jl=null}else throw Error(U(198));Fl||(Fl=!0,bh=c)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qm(t){if(gi(t)!==t)throw Error(U(188))}function dS(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qm(i),t;if(s===r)return Qm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function wv(t){return t=dS(t),t!==null?Ev(t):null}function Ev(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ev(t);if(e!==null)return e;t=t.sibling}return null}var Iv=kt.unstable_scheduleCallback,Ym=kt.unstable_cancelCallback,fS=kt.unstable_shouldYield,pS=kt.unstable_requestPaint,Ne=kt.unstable_now,mS=kt.unstable_getCurrentPriorityLevel,Yd=kt.unstable_ImmediatePriority,Tv=kt.unstable_UserBlockingPriority,Ul=kt.unstable_NormalPriority,gS=kt.unstable_LowPriority,Sv=kt.unstable_IdlePriority,ku=null,gn=null;function yS(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(ku,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:wS,_S=Math.log,vS=Math.LN2;function wS(t){return t>>>=0,t===0?32:31-(_S(t)/vS|0)|0}var Qa=64,Ya=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ao(l):(s&=o,s!==0&&(r=ao(s)))}else o=n&~i,o!==0?r=ao(o):s!==0&&(r=ao(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function ES(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=ES(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Av(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function TS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pv,Jd,Rv,kv,xv,Oh=!1,Xa=[],hr=null,dr=null,fr=null,Mo=new Map,jo=new Map,rr=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function Zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fa(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AS(t,e,n,r,i){switch(e){case"focusin":return hr=Zs(hr,t,e,n,r,i),!0;case"dragenter":return dr=Zs(dr,t,e,n,r,i),!0;case"mouseover":return fr=Zs(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mo.set(s,Zs(Mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,Zs(jo.get(s)||null,t,e,n,r,i)),!0}return!1}function Nv(t){var e=Gr(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=vv(n),e!==null){t.blockedOn=e,xv(t.priority,function(){Rv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kh=r,n.target.dispatchEvent(r),kh=null}else return e=fa(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function Jm(t,e,n){gl(t)&&n.delete(e)}function CS(){Oh=!1,hr!==null&&gl(hr)&&(hr=null),dr!==null&&gl(dr)&&(dr=null),fr!==null&&gl(fr)&&(fr=null),Mo.forEach(Jm),jo.forEach(Jm)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,CS)))}function Fo(t){function e(i){return eo(i,t)}if(0<Xa.length){eo(Xa[0],t);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&eo(hr,t),dr!==null&&eo(dr,t),fr!==null&&eo(fr,t),Mo.forEach(e),jo.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)Nv(n),n.blockedOn===null&&rr.shift()}var ns=Wn.ReactCurrentBatchConfig,Bl=!0;function PS(t,e,n,r){var i=de,s=ns.transition;ns.transition=null;try{de=1,Zd(t,e,n,r)}finally{de=i,ns.transition=s}}function RS(t,e,n,r){var i=de,s=ns.transition;ns.transition=null;try{de=4,Zd(t,e,n,r)}finally{de=i,ns.transition=s}}function Zd(t,e,n,r){if(Bl){var i=Vh(t,e,n,r);if(i===null)Bc(t,e,r,$l,n),Xm(t,r);else if(AS(i,t,e,n,r))r.stopPropagation();else if(Xm(t,r),e&4&&-1<SS.indexOf(t)){for(;i!==null;){var s=fa(i);if(s!==null&&Pv(s),s=Vh(t,e,n,r),s===null&&Bc(t,e,r,$l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bc(t,e,r,null,n)}}var $l=null;function Vh(t,e,n,r){if($l=null,t=Qd(r),t=Gr(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $l=t,null}function bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mS()){case Yd:return 1;case Tv:return 4;case Ul:case gS:return 16;case Sv:return 536870912;default:return 16}default:return 16}}var lr=null,ef=null,yl=null;function Dv(){if(yl)return yl;var t,e=ef,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yl=i.slice(t,1<r?1-r:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Zm(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Zm,this.isPropagationStopped=Zm,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=Nt(As),da=Ae({},As,{view:0,detail:0}),kS=Nt(da),Dc,Oc,to,xu=Ae({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Dc=t.screenX-to.screenX,Oc=t.screenY-to.screenY):Oc=Dc=0,to=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),eg=Nt(xu),xS=Ae({},xu,{dataTransfer:0}),NS=Nt(xS),bS=Ae({},da,{relatedTarget:0}),Vc=Nt(bS),DS=Ae({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),OS=Nt(DS),VS=Ae({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LS=Nt(VS),MS=Ae({},As,{data:0}),tg=Nt(MS),jS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},US={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=US[t])?!!e[t]:!1}function nf(){return zS}var BS=Ae({},da,{key:function(t){if(t.key){var e=jS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$S=Nt(BS),HS=Ae({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=Nt(HS),qS=Ae({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),WS=Nt(qS),GS=Ae({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=Nt(GS),QS=Ae({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YS=Nt(QS),XS=[9,13,27,32],rf=Mn&&"CompositionEvent"in window,vo=null;Mn&&"documentMode"in document&&(vo=document.documentMode);var JS=Mn&&"TextEvent"in window&&!vo,Ov=Mn&&(!rf||vo&&8<vo&&11>=vo),rg=" ",ig=!1;function Vv(t,e){switch(t){case"keyup":return XS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function ZS(t,e){switch(t){case"compositionend":return Lv(e);case"keypress":return e.which!==32?null:(ig=!0,rg);case"textInput":return t=e.data,t===rg&&ig?null:t;default:return null}}function e1(t,e){if($i)return t==="compositionend"||!rf&&Vv(t,e)?(t=Dv(),yl=ef=lr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ov&&e.locale!=="ko"?null:e.data;default:return null}}var t1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t1[t.type]:e==="textarea"}function Mv(t,e,n,r){pv(r),e=Hl(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,Uo=null;function n1(t){Kv(t,0)}function Nu(t){var e=Wi(t);if(av(e))return t}function r1(t,e){if(t==="change")return e}var jv=!1;if(Mn){var Lc;if(Mn){var Mc="oninput"in document;if(!Mc){var og=document.createElement("div");og.setAttribute("oninput","return;"),Mc=typeof og.oninput=="function"}Lc=Mc}else Lc=!1;jv=Lc&&(!document.documentMode||9<document.documentMode)}function ag(){wo&&(wo.detachEvent("onpropertychange",Fv),Uo=wo=null)}function Fv(t){if(t.propertyName==="value"&&Nu(Uo)){var e=[];Mv(e,Uo,t,Qd(t)),_v(n1,e)}}function i1(t,e,n){t==="focusin"?(ag(),wo=e,Uo=n,wo.attachEvent("onpropertychange",Fv)):t==="focusout"&&ag()}function s1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(Uo)}function o1(t,e){if(t==="click")return Nu(e)}function a1(t,e){if(t==="input"||t==="change")return Nu(e)}function l1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:l1;function zo(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yh.call(e,i)||!an(t[i],e[i]))return!1}return!0}function lg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,e){var n=lg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lg(n)}}function Uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zv(){for(var t=window,e=Ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ml(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function u1(t){var e=zv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uv(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ug(n,s);var o=ug(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c1=Mn&&"documentMode"in document&&11>=document.documentMode,Hi=null,Lh=null,Eo=null,Mh=!1;function cg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||Hi==null||Hi!==Ml(r)||(r=Hi,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&zo(Eo,r)||(Eo=r,r=Hl(Lh,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},jc={},Bv={};Mn&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function bu(t){if(jc[t])return jc[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return jc[t]=e[n];return t}var $v=bu("animationend"),Hv=bu("animationiteration"),qv=bu("animationstart"),Wv=bu("transitionend"),Gv=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Gv.set(t,e),mi(e,[t])}for(var Fc=0;Fc<hg.length;Fc++){var Uc=hg[Fc],h1=Uc.toLowerCase(),d1=Uc[0].toUpperCase()+Uc.slice(1);Or(h1,"on"+d1)}Or($v,"onAnimationEnd");Or(Hv,"onAnimationIteration");Or(qv,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Wv,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f1=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function dg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hS(r,e,void 0,t),t.currentTarget=null}function Kv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;dg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;dg(i,l,c),s=u}}}if(Fl)throw t=bh,Fl=!1,bh=null,t}function _e(t,e){var n=e[Bh];n===void 0&&(n=e[Bh]=new Set);var r=t+"__bubble";n.has(r)||(Qv(e,t,2,!1),n.add(r))}function zc(t,e,n){var r=0;e&&(r|=4),Qv(n,t,r,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[el]){t[el]=!0,nv.forEach(function(n){n!=="selectionchange"&&(f1.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,zc("selectionchange",!1,e))}}function Qv(t,e,n,r){switch(bv(e)){case 1:var i=PS;break;case 4:i=RS;break;default:i=Zd}n=i.bind(null,e,n,t),i=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}_v(function(){var c=s,d=Qd(n),m=[];e:{var g=Gv.get(t);if(g!==void 0){var T=tf,R=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":T=$S;break;case"focusin":R="focus",T=Vc;break;case"focusout":R="blur",T=Vc;break;case"beforeblur":case"afterblur":T=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=NS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=WS;break;case $v:case Hv:case qv:T=OS;break;case Wv:T=KS;break;case"scroll":T=kS;break;case"wheel":T=YS;break;case"copy":case"cut":case"paste":T=LS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=ng}var N=(e&4)!==0,b=!N&&t==="scroll",w=N?g!==null?g+"Capture":null:g;N=[];for(var v=c,C;v!==null;){C=v;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,w!==null&&(O=Lo(v,w),O!=null&&N.push($o(v,O,C)))),b)break;v=v.return}0<N.length&&(g=new T(g,R,null,n,d),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==kh&&(R=n.relatedTarget||n.fromElement)&&(Gr(R)||R[jn]))break e;if((T||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=c,R=R?Gr(R):null,R!==null&&(b=gi(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=c),T!==R)){if(N=eg,O="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=ng,O="onPointerLeave",w="onPointerEnter",v="pointer"),b=T==null?g:Wi(T),C=R==null?g:Wi(R),g=new N(O,v+"leave",T,n,d),g.target=b,g.relatedTarget=C,O=null,Gr(d)===c&&(N=new N(w,v+"enter",R,n,d),N.target=C,N.relatedTarget=b,O=N),b=O,T&&R)t:{for(N=T,w=R,v=0,C=N;C;C=Vi(C))v++;for(C=0,O=w;O;O=Vi(O))C++;for(;0<v-C;)N=Vi(N),v--;for(;0<C-v;)w=Vi(w),C--;for(;v--;){if(N===w||w!==null&&N===w.alternate)break t;N=Vi(N),w=Vi(w)}N=null}else N=null;T!==null&&fg(m,g,T,N,!1),R!==null&&b!==null&&fg(m,b,R,N,!0)}}e:{if(g=c?Wi(c):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var j=r1;else if(sg(g))if(jv)j=a1;else{j=s1;var F=i1}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=o1);if(j&&(j=j(t,c))){Mv(m,j,n,d);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Sh(g,"number",g.value)}switch(F=c?Wi(c):window,t){case"focusin":(sg(F)||F.contentEditable==="true")&&(Hi=F,Lh=c,Eo=null);break;case"focusout":Eo=Lh=Hi=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,cg(m,n,d);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":cg(m,n,d)}var I;if(rf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $i?Vv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ov&&n.locale!=="ko"&&($i||_!=="onCompositionStart"?_==="onCompositionEnd"&&$i&&(I=Dv()):(lr=d,ef="value"in lr?lr.value:lr.textContent,$i=!0)),F=Hl(c,_),0<F.length&&(_=new tg(_,t,null,n,d),m.push({event:_,listeners:F}),I?_.data=I:(I=Lv(n),I!==null&&(_.data=I)))),(I=JS?ZS(t,n):e1(t,n))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(d=new tg("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=I))}Kv(m,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift($o(t,s,i)),s=Lo(t,e),s!=null&&r.push($o(t,s,i))),t=t.return}return r}function Vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Lo(n,s),u!=null&&o.unshift($o(n,u,l))):i||(u=Lo(n,s),u!=null&&o.push($o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var p1=/\r\n?/g,m1=/\u0000|\uFFFD/g;function pg(t){return(typeof t=="string"?t:""+t).replace(p1,`
`).replace(m1,"")}function tl(t,e,n){if(e=pg(e),pg(t)!==e&&n)throw Error(U(425))}function ql(){}var jh=null,Fh=null;function Uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=typeof setTimeout=="function"?setTimeout:void 0,g1=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,y1=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(t){return mg.resolve(null).then(t).catch(_1)}:zh;function _1(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fo(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),pn="__reactFiber$"+Cs,Ho="__reactProps$"+Cs,jn="__reactContainer$"+Cs,Bh="__reactEvents$"+Cs,v1="__reactListeners$"+Cs,w1="__reactHandles$"+Cs;function Gr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gg(t);t!==null;){if(n=t[pn])return n;t=gg(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[pn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Du(t){return t[Ho]||null}var $h=[],Gi=-1;function Vr(t){return{current:t}}function we(t){0>Gi||(t.current=$h[Gi],$h[Gi]=null,Gi--)}function ge(t,e){Gi++,$h[Gi]=t.current,t.current=e}var Ar={},ot=Vr(Ar),vt=Vr(!1),ri=Ar;function ds(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function Wl(){we(vt),we(ot)}function yg(t,e,n){if(ot.current!==Ar)throw Error(U(168));ge(ot,e),ge(vt,n)}function Yv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,iS(t)||"Unknown",i));return Ae({},n,r)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,ri=ot.current,ge(ot,t),ge(vt,vt.current),!0}function _g(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Yv(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,we(vt),we(ot),ge(ot,t)):we(vt),ge(vt,n)}var xn=null,Ou=!1,Hc=!1;function Xv(t){xn===null?xn=[t]:xn.push(t)}function E1(t){Ou=!0,Xv(t)}function Lr(){if(!Hc&&xn!==null){Hc=!0;var t=0,e=de;try{var n=xn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,Ou=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),Iv(Yd,Lr),i}finally{de=e,Hc=!1}}return null}var Ki=[],Qi=0,Kl=null,Ql=0,Lt=[],Mt=0,ii=null,Nn=1,bn="";function Hr(t,e){Ki[Qi++]=Ql,Ki[Qi++]=Kl,Kl=t,Ql=e}function Jv(t,e,n){Lt[Mt++]=Nn,Lt[Mt++]=bn,Lt[Mt++]=ii,ii=t;var r=Nn;t=bn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-nn(e)+i|n<<i|r,bn=s+t}else Nn=1<<s|n<<i|r,bn=t}function of(t){t.return!==null&&(Hr(t,1),Jv(t,1,0))}function af(t){for(;t===Kl;)Kl=Ki[--Qi],Ki[Qi]=null,Ql=Ki[--Qi],Ki[Qi]=null;for(;t===ii;)ii=Lt[--Mt],Lt[Mt]=null,bn=Lt[--Mt],Lt[Mt]=null,Nn=Lt[--Mt],Lt[Mt]=null}var Pt=null,Ct=null,Ie=!1,Jt=null;function Zv(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:Nn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Ct=null,!0):!1;default:return!1}}function Hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qh(t){if(Ie){var e=Ct;if(e){var n=e;if(!vg(t,e)){if(Hh(t))throw Error(U(418));e=pr(n.nextSibling);var r=Pt;e&&vg(t,e)?Zv(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Pt=t)}}else{if(Hh(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ie=!1,Pt=t}}}function wg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function nl(t){if(t!==Pt)return!1;if(!Ie)return wg(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uh(t.type,t.memoizedProps)),e&&(e=Ct)){if(Hh(t))throw ew(),Error(U(418));for(;e;)Zv(t,e),e=pr(e.nextSibling)}if(wg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Pt?pr(t.stateNode.nextSibling):null;return!0}function ew(){for(var t=Ct;t;)t=pr(t.nextSibling)}function fs(){Ct=Pt=null,Ie=!1}function lf(t){Jt===null?Jt=[t]:Jt.push(t)}var I1=Wn.ReactCurrentBatchConfig;function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Eg(t){var e=t._init;return e(t._payload)}function tw(t){function e(w,v){if(t){var C=w.deletions;C===null?(w.deletions=[v],w.flags|=16):C.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=_r(w,v),w.index=0,w.sibling=null,w}function s(w,v,C){return w.index=C,t?(C=w.alternate,C!==null?(C=C.index,C<v?(w.flags|=2,v):C):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,C,O){return v===null||v.tag!==6?(v=Xc(C,w.mode,O),v.return=w,v):(v=i(v,C),v.return=w,v)}function u(w,v,C,O){var j=C.type;return j===Bi?d(w,v,C.props.children,O,C.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tr&&Eg(j)===v.type)?(O=i(v,C.props),O.ref=no(w,v,C),O.return=w,O):(O=Al(C.type,C.key,C.props,null,w.mode,O),O.ref=no(w,v,C),O.return=w,O)}function c(w,v,C,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Jc(C,w.mode,O),v.return=w,v):(v=i(v,C.children||[]),v.return=w,v)}function d(w,v,C,O,j){return v===null||v.tag!==7?(v=ei(C,w.mode,O,j),v.return=w,v):(v=i(v,C),v.return=w,v)}function m(w,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xc(""+v,w.mode,C),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return C=Al(v.type,v.key,v.props,null,w.mode,C),C.ref=no(w,null,v),C.return=w,C;case zi:return v=Jc(v,w.mode,C),v.return=w,v;case tr:var O=v._init;return m(w,O(v._payload),C)}if(oo(v)||Xs(v))return v=ei(v,w.mode,C,null),v.return=w,v;rl(w,v)}return null}function g(w,v,C,O){var j=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return j!==null?null:l(w,v,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Wa:return C.key===j?u(w,v,C,O):null;case zi:return C.key===j?c(w,v,C,O):null;case tr:return j=C._init,g(w,v,j(C._payload),O)}if(oo(C)||Xs(C))return j!==null?null:d(w,v,C,O,null);rl(w,C)}return null}function T(w,v,C,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(C)||null,l(v,w,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Wa:return w=w.get(O.key===null?C:O.key)||null,u(v,w,O,j);case zi:return w=w.get(O.key===null?C:O.key)||null,c(v,w,O,j);case tr:var F=O._init;return T(w,v,C,F(O._payload),j)}if(oo(O)||Xs(O))return w=w.get(C)||null,d(v,w,O,j,null);rl(v,O)}return null}function R(w,v,C,O){for(var j=null,F=null,I=v,_=v=0,E=null;I!==null&&_<C.length;_++){I.index>_?(E=I,I=null):E=I.sibling;var S=g(w,I,C[_],O);if(S===null){I===null&&(I=E);break}t&&I&&S.alternate===null&&e(w,I),v=s(S,v,_),F===null?j=S:F.sibling=S,F=S,I=E}if(_===C.length)return n(w,I),Ie&&Hr(w,_),j;if(I===null){for(;_<C.length;_++)I=m(w,C[_],O),I!==null&&(v=s(I,v,_),F===null?j=I:F.sibling=I,F=I);return Ie&&Hr(w,_),j}for(I=r(w,I);_<C.length;_++)E=T(I,w,_,C[_],O),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?_:E.key),v=s(E,v,_),F===null?j=E:F.sibling=E,F=E);return t&&I.forEach(function(P){return e(w,P)}),Ie&&Hr(w,_),j}function N(w,v,C,O){var j=Xs(C);if(typeof j!="function")throw Error(U(150));if(C=j.call(C),C==null)throw Error(U(151));for(var F=j=null,I=v,_=v=0,E=null,S=C.next();I!==null&&!S.done;_++,S=C.next()){I.index>_?(E=I,I=null):E=I.sibling;var P=g(w,I,S.value,O);if(P===null){I===null&&(I=E);break}t&&I&&P.alternate===null&&e(w,I),v=s(P,v,_),F===null?j=P:F.sibling=P,F=P,I=E}if(S.done)return n(w,I),Ie&&Hr(w,_),j;if(I===null){for(;!S.done;_++,S=C.next())S=m(w,S.value,O),S!==null&&(v=s(S,v,_),F===null?j=S:F.sibling=S,F=S);return Ie&&Hr(w,_),j}for(I=r(w,I);!S.done;_++,S=C.next())S=T(I,w,_,S.value,O),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?_:S.key),v=s(S,v,_),F===null?j=S:F.sibling=S,F=S);return t&&I.forEach(function(k){return e(w,k)}),Ie&&Hr(w,_),j}function b(w,v,C,O){if(typeof C=="object"&&C!==null&&C.type===Bi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Wa:e:{for(var j=C.key,F=v;F!==null;){if(F.key===j){if(j=C.type,j===Bi){if(F.tag===7){n(w,F.sibling),v=i(F,C.props.children),v.return=w,w=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tr&&Eg(j)===F.type){n(w,F.sibling),v=i(F,C.props),v.ref=no(w,F,C),v.return=w,w=v;break e}n(w,F);break}else e(w,F);F=F.sibling}C.type===Bi?(v=ei(C.props.children,w.mode,O,C.key),v.return=w,w=v):(O=Al(C.type,C.key,C.props,null,w.mode,O),O.ref=no(w,v,C),O.return=w,w=O)}return o(w);case zi:e:{for(F=C.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(w,v.sibling),v=i(v,C.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Jc(C,w.mode,O),v.return=w,w=v}return o(w);case tr:return F=C._init,b(w,v,F(C._payload),O)}if(oo(C))return R(w,v,C,O);if(Xs(C))return N(w,v,C,O);rl(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,C),v.return=w,w=v):(n(w,v),v=Xc(C,w.mode,O),v.return=w,w=v),o(w)):n(w,v)}return b}var ps=tw(!0),nw=tw(!1),Yl=Vr(null),Xl=null,Yi=null,uf=null;function cf(){uf=Yi=Xl=null}function hf(t){var e=Yl.current;we(Yl),t._currentValue=e}function Wh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Xl=t,uf=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(Xl===null)throw Error(U(308));Yi=t,Xl.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var Kr=null;function df(t){Kr===null?Kr=[t]:Kr.push(t)}function rw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,df(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,df(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}function Ig(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,d=c=u=null,l=s;do{var g=l.lane,T=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(g=e,T=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){m=R.call(T,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,g=typeof R=="function"?R.call(T,m,g):R,g==null)break e;m=Ae({},m,g);break e;case 2:nr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=T,u=m):d=d.next=T,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=m}}function Tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var pa={},yn=Vr(pa),qo=Vr(pa),Wo=Vr(pa);function Qr(t){if(t===pa)throw Error(U(174));return t}function pf(t,e){switch(ge(Wo,e),ge(qo,t),ge(yn,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ch(e,t)}we(yn),ge(yn,e)}function ms(){we(yn),we(qo),we(Wo)}function sw(t){Qr(Wo.current);var e=Qr(yn.current),n=Ch(e,t.type);e!==n&&(ge(qo,t),ge(yn,n))}function mf(t){qo.current===t&&(we(yn),we(qo))}var Te=Vr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function gf(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var wl=Wn.ReactCurrentDispatcher,Wc=Wn.ReactCurrentBatchConfig,si=0,Se=null,Me=null,ze=null,eu=!1,Io=!1,Go=0,T1=0;function et(){throw Error(U(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function _f(t,e,n,r,i,s){if(si=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=t===null||t.memoizedState===null?P1:R1,t=n(r,i),Io){s=0;do{if(Io=!1,Go=0,25<=s)throw Error(U(301));s+=1,ze=Me=null,e.updateQueue=null,wl.current=k1,t=n(r,i)}while(Io)}if(wl.current=tu,e=Me!==null&&Me.next!==null,si=0,ze=Me=Se=null,eu=!1,e)throw Error(U(300));return t}function vf(){var t=Go!==0;return Go=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Se.memoizedState=ze=t:ze=ze.next=t,ze}function Ht(){if(Me===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=ze===null?Se.memoizedState:ze.next;if(e!==null)ze=e,Me=t;else{if(t===null)throw Error(U(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},ze===null?Se.memoizedState=ze=t:ze=ze.next=t}return ze}function Ko(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((si&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Se.lanes|=d,oi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,an(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ow(){}function aw(t,e){var n=Se,r=Ht(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,wf(cw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Qo(9,uw.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(U(349));si&30||lw(n,e,i)}return i}function lw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uw(t,e,n,r){e.value=n,e.getSnapshot=r,hw(e)&&dw(t)}function cw(t,e,n){return n(function(){hw(e)&&dw(t)})}function hw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function dw(t){var e=Fn(t,1);e!==null&&rn(e,t,1,-1)}function Sg(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=t,t=t.dispatch=C1.bind(null,Se,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fw(){return Ht().memoizedState}function El(t,e,n,r){var i=dn();Se.flags|=t,i.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function Vu(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&yf(r,o.deps)){i.memoizedState=Qo(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Qo(1|e,n,s,r)}function Ag(t,e){return El(8390656,8,t,e)}function wf(t,e){return Vu(2048,8,t,e)}function pw(t,e){return Vu(4,2,t,e)}function mw(t,e){return Vu(4,4,t,e)}function gw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yw(t,e,n){return n=n!=null?n.concat([t]):null,Vu(4,4,gw.bind(null,e,t),n)}function Ef(){}function _w(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vw(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ww(t,e,n){return si&21?(an(n,e)||(n=Av(),Se.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function S1(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Wc.transition;Wc.transition={};try{t(!1),e()}finally{de=n,Wc.transition=r}}function Ew(){return Ht().memoizedState}function A1(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iw(t))Tw(e,n);else if(n=rw(t,e,n,r),n!==null){var i=dt();rn(n,t,r,i),Sw(n,e,r)}}function C1(t,e,n){var r=yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iw(t))Tw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,an(l,o)){var u=e.interleaved;u===null?(i.next=i,df(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=rw(t,e,i,r),n!==null&&(i=dt(),rn(n,t,r,i),Sw(n,e,r))}}function Iw(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function Tw(t,e){Io=eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}var tu={readContext:$t,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},P1={readContext:$t,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:Ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,gw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=A1.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:Ef,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=S1.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=dn();if(Ie){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Be===null)throw Error(U(349));si&30||lw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ag(cw.bind(null,r,s,t),[t]),r.flags|=2048,Qo(9,uw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Be.identifierPrefix;if(Ie){var n=bn,r=Nn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=T1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},R1={readContext:$t,useCallback:_w,useContext:$t,useEffect:wf,useImperativeHandle:yw,useInsertionEffect:pw,useLayoutEffect:mw,useMemo:vw,useReducer:Gc,useRef:fw,useState:function(){return Gc(Ko)},useDebugValue:Ef,useDeferredValue:function(t){var e=Ht();return ww(e,Me.memoizedState,t)},useTransition:function(){var t=Gc(Ko)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:ow,useSyncExternalStore:aw,useId:Ew,unstable_isNewReconciler:!1},k1={readContext:$t,useCallback:_w,useContext:$t,useEffect:wf,useImperativeHandle:yw,useInsertionEffect:pw,useLayoutEffect:mw,useMemo:vw,useReducer:Kc,useRef:fw,useState:function(){return Kc(Ko)},useDebugValue:Ef,useDeferredValue:function(t){var e=Ht();return Me===null?e.memoizedState=t:ww(e,Me.memoizedState,t)},useTransition:function(){var t=Kc(Ko)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:ow,useSyncExternalStore:aw,useId:Ew,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lu={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=yr(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(rn(e,t,i,r),vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=yr(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(rn(e,t,i,r),vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=yr(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(rn(e,t,r,n),vl(e,t,r))}};function Cg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(i,s):!0}function Aw(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=wt(e)?ri:ot.current,r=e.contextTypes,s=(r=r!=null)?ds(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lu.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=wt(e)?ri:ot.current,i.context=ds(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lu.enqueueReplaceState(i,i.state,null),Jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e){try{var n="",r=e;do n+=rS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var x1=typeof WeakMap=="function"?WeakMap:Map;function Cw(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ru||(ru=!0,sd=r),Qh(t,e)},n}function Pw(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new x1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=H1.bind(null,t,e,n),e.then(t,t))}function kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var N1=Wn.ReactCurrentOwner,_t=!1;function ct(t,e,n,r){e.child=t===null?nw(e,null,n,r):ps(e,t.child,n,r)}function Ng(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=_f(t,e,n,r,s,i),n=vf(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Ie&&n&&of(e),e.flags|=1,ct(t,e,r,i),e.child)}function bg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Rw(t,e,s,r,i)):(t=Al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function Rw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zo(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Un(t,e,i)}return Yh(t,e,n,r,i)}function kw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ji,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ji,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ji,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ji,St),St|=r;return ct(t,e,i,n),e.child}function xw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yh(t,e,n,r,i){var s=wt(n)?ri:ot.current;return s=ds(e,s),rs(e,i),n=_f(t,e,n,r,s,i),r=vf(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Ie&&r&&of(e),e.flags|=1,ct(t,e,n,i),e.child)}function Dg(t,e,n,r,i){if(wt(n)){var s=!0;Gl(e)}else s=!1;if(rs(e,i),e.stateNode===null)Il(t,e),Aw(e,n,r),Kh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=wt(n)?ri:ot.current,c=ds(e,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Pg(e,o,r,c),nr=!1;var g=e.memoizedState;o.state=g,Jl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||vt.current||nr?(typeof d=="function"&&(Gh(e,n,d,r),u=e.memoizedState),(l=nr||Cg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Yt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=wt(n)?ri:ot.current,u=ds(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Pg(e,o,r,u),nr=!1,g=e.memoizedState,o.state=g,Jl(e,r,o,i);var R=e.memoizedState;l!==m||g!==R||vt.current||nr?(typeof T=="function"&&(Gh(e,n,T,r),R=e.memoizedState),(c=nr||Cg(e,n,c,r,g,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,s,i)}function Xh(t,e,n,r,i,s){xw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_g(e,n,!1),Un(t,e,s);r=e.stateNode,N1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&_g(e,n,!0),e.child}function Nw(t){var e=t.stateNode;e.pendingContext?yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yg(t,e.context,!1),pf(t,e.containerInfo)}function Og(t,e,n,r,i){return fs(),lf(i),e.flags|=256,ct(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function bw(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Te,i&1),t===null)return qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fu(o,r,0,null),t=ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zh(n),e.memoizedState=Jh,t):If(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return b1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function If(t,e){return e=Fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,r){return r!==null&&lf(r),ps(e,t.child,null,n),t=If(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qc(Error(U(422))),il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fu({mode:"visible",children:r.children},i,0,null),s=ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=Zh(o),e.memoizedState=Jh,s);if(!(e.mode&1))return il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Qc(s,r,void 0),il(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),rn(r,t,i,-1))}return Rf(),r=Qc(Error(U(421))),il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=q1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=pr(i.nextSibling),Pt=e,Ie=!0,Jt=null,t!==null&&(Lt[Mt++]=Nn,Lt[Mt++]=bn,Lt[Mt++]=ii,Nn=t.id,bn=t.overflow,ii=e),e=If(e,r.children),e.flags|=4096,e)}function Vg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wh(t.return,e,n)}function Yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Dw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vg(t,n,e);else if(t.tag===19)Vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yc(e,!0,n,null,s);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function D1(t,e,n){switch(e.tag){case 3:Nw(e),fs();break;case 5:sw(e);break;case 1:wt(e.type)&&Gl(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Yl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?bw(t,e,n):(ge(Te,Te.current&1),t=Un(t,e,n),t!==null?t.sibling:null);ge(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Dw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,kw(t,e,n)}return Un(t,e,n)}var Ow,ed,Vw,Lw;Ow=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};Vw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(yn.current);var s=null;switch(n){case"input":i=Ih(t,i),r=Ih(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Ah(t,i),r=Ah(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ql)}Ph(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ro(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function O1(t,e,n){var r=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return wt(e.type)&&Wl(),tt(e),null;case 3:return r=e.stateNode,ms(),we(vt),we(ot),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(ld(Jt),Jt=null))),ed(t,e),tt(e),null;case 5:mf(e);var i=Qr(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)Vw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return tt(e),null}if(t=Qr(yn.current),nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<lo.length;i++)_e(lo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Hm(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Wm(r,s),_e("invalid",r)}Ph(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ga(r),qm(r,s,!0);break;case"textarea":Ga(r),Gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Ho]=r,Ow(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rh(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<lo.length;i++)_e(lo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Hm(t,r),i=Ih(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Wm(t,r),i=Ah(t,r),_e("invalid",t);break;default:i=r}Ph(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?fv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&qd(t,s,u,o))}switch(n){case"input":Ga(t),qm(t,r,!1);break;case"textarea":Ga(t),Gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)Lw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Qr(Wo.current),Qr(yn.current),nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return tt(e),null;case 13:if(we(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ct!==null&&e.mode&1&&!(e.flags&128))ew(),fs(),e.flags|=98560,s=!1;else if(s=nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[pn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Jt!==null&&(ld(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?je===0&&(je=3):Rf())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return ms(),ed(t,e),t===null&&Bo(e.stateNode.containerInfo),tt(e),null;case 10:return hf(e.type._context),tt(e),null;case 17:return wt(e.type)&&Wl(),tt(e),null;case 19:if(we(Te),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zl(t),o!==null){for(e.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>ys&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return tt(e),null}else 2*Ne()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Te.current,ge(Te,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function V1(t,e){switch(af(e),e.tag){case 1:return wt(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),we(vt),we(ot),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(we(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Te),null;case 4:return ms(),null;case 10:return hf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var sl=!1,it=!1,L1=typeof WeakSet=="function"?WeakSet:Set,W=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Lg=!1;function M1(t,e){if(jh=Bl,t=zv(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,m=t,g=null;t:for(;;){for(var T;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(u=o),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fh={focusedElem:t,selectionRange:n},Bl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,b=R.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:Yt(e.type,N),b);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Re(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=Lg,Lg=!1,R}function To(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&td(e,n,s)}i=i.next}while(i!==r)}}function Mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mw(t){var e=t.alternate;e!==null&&(t.alternate=null,Mw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Ho],delete e[Bh],delete e[v1],delete e[w1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jw(t){return t.tag===5||t.tag===3||t.tag===4}function Mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var qe=null,Xt=!1;function Zn(t,e,n){for(n=n.child;n!==null;)Fw(t,e,n),n=n.sibling}function Fw(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(ku,n)}catch{}switch(n.tag){case 5:it||Xi(n,e);case 6:var r=qe,i=Xt;qe=null,Zn(t,e,n),qe=r,Xt=i,qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Fo(t)):$c(qe,n.stateNode));break;case 4:r=qe,i=Xt,qe=n.stateNode.containerInfo,Xt=!0,Zn(t,e,n),qe=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&td(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!it&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Zn(t,e,n),it=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function jg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new L1),e.forEach(function(r){var i=W1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Xt=!1;break e;case 3:qe=l.stateNode.containerInfo,Xt=!0;break e;case 4:qe=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(qe===null)throw Error(U(160));Fw(s,o,i),qe=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uw(e,t),e=e.sibling}function Uw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),hn(t),r&4){try{To(3,t,t.return),Mu(3,t)}catch(N){Re(t,t.return,N)}try{To(5,t,t.return)}catch(N){Re(t,t.return,N)}}break;case 1:Qt(e,t),hn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(Qt(e,t),hn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Vo(i,"")}catch(N){Re(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&lv(i,s),Rh(l,o);var c=Rh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?fv(i,m):d==="dangerouslySetInnerHTML"?hv(i,m):d==="children"?Vo(i,m):qd(i,d,m,c)}switch(l){case"input":Th(i,s);break;case"textarea":uv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Zi(i,!!s.multiple,T,!1):g!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ho]=s}catch(N){Re(t,t.return,N)}}break;case 6:if(Qt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Re(t,t.return,N)}}break;case 3:if(Qt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(N){Re(t,t.return,N)}break;case 4:Qt(e,t),hn(t);break;case 13:Qt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Af=Ne())),r&4&&jg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||d,Qt(e,t),it=c):Qt(e,t),hn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(m=W=d;W!==null;){switch(g=W,T=g.child,g.tag){case 0:case 11:case 14:case 15:To(4,g,g.return);break;case 1:Xi(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Re(r,n,N)}}break;case 5:Xi(g,g.return);break;case 22:if(g.memoizedState!==null){Ug(m);continue}}T!==null?(T.return=g,W=T):Ug(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=dv("display",o))}catch(N){Re(t,t.return,N)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(N){Re(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qt(e,t),hn(t),r&4&&jg(t);break;case 21:break;default:Qt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jw(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var s=Mg(t);id(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Mg(t);rd(t,l,o);break;default:throw Error(U(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j1(t,e,n){W=t,zw(t)}function zw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||it;l=sl;var c=it;if(sl=o,(it=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?zg(i):u!==null?(u.return=o,W=u):zg(i);for(;s!==null;)W=s,zw(s),s=s.sibling;W=i,sl=l,it=c}Fg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Fg(t)}}function Fg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||Mu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Fo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}it||e.flags&512&&nd(e)}catch(g){Re(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ug(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function zg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{nd(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{nd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var F1=Math.ceil,nu=Wn.ReactCurrentDispatcher,Tf=Wn.ReactCurrentOwner,zt=Wn.ReactCurrentBatchConfig,ae=0,Be=null,Oe=null,Ke=0,St=0,Ji=Vr(0),je=0,Yo=null,oi=0,ju=0,Sf=0,So=null,yt=null,Af=0,ys=1/0,kn=null,ru=!1,sd=null,gr=null,ol=!1,ur=null,iu=0,Ao=0,od=null,Tl=-1,Sl=0;function dt(){return ae&6?Ne():Tl!==-1?Tl:Tl=Ne()}function yr(t){return t.mode&1?ae&2&&Ke!==0?Ke&-Ke:I1.transition!==null?(Sl===0&&(Sl=Av()),Sl):(t=de,t!==0||(t=window.event,t=t===void 0?16:bv(t.type)),t):1}function rn(t,e,n,r){if(50<Ao)throw Ao=0,od=null,Error(U(185));ha(t,n,r),(!(ae&2)||t!==Be)&&(t===Be&&(!(ae&2)&&(ju|=n),je===4&&ir(t,Ke)),Et(t,r),n===1&&ae===0&&!(e.mode&1)&&(ys=Ne()+500,Ou&&Lr()))}function Et(t,e){var n=t.callbackNode;IS(t,e);var r=zl(t,t===Be?Ke:0);if(r===0)n!==null&&Ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ym(n),e===1)t.tag===0?E1(Bg.bind(null,t)):Xv(Bg.bind(null,t)),y1(function(){!(ae&6)&&Lr()}),n=null;else{switch(Cv(r)){case 1:n=Yd;break;case 4:n=Tv;break;case 16:n=Ul;break;case 536870912:n=Sv;break;default:n=Ul}n=Qw(n,Bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bw(t,e){if(Tl=-1,Sl=0,ae&6)throw Error(U(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=zl(t,t===Be?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=su(t,r);else{e=r;var i=ae;ae|=2;var s=Hw();(Be!==t||Ke!==e)&&(kn=null,ys=Ne()+500,Zr(t,e));do try{B1();break}catch(l){$w(t,l)}while(!0);cf(),nu.current=s,ae=i,Oe!==null?e=0:(Be=null,Ke=0,e=je)}if(e!==0){if(e===2&&(i=Dh(t),i!==0&&(r=i,e=ad(t,i))),e===1)throw n=Yo,Zr(t,0),ir(t,r),Et(t,Ne()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!U1(i)&&(e=su(t,r),e===2&&(s=Dh(t),s!==0&&(r=s,e=ad(t,s))),e===1))throw n=Yo,Zr(t,0),ir(t,r),Et(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:qr(t,yt,kn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=Af+500-Ne(),10<e)){if(zl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zh(qr.bind(null,t,yt,kn),e);break}qr(t,yt,kn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*F1(r/1960))-r,10<r){t.timeoutHandle=zh(qr.bind(null,t,yt,kn),r);break}qr(t,yt,kn);break;case 5:qr(t,yt,kn);break;default:throw Error(U(329))}}}return Et(t,Ne()),t.callbackNode===n?Bw.bind(null,t):null}function ad(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=su(t,e),t!==2&&(e=yt,yt=n,e!==null&&ld(e)),t}function ld(t){yt===null?yt=t:yt.push.apply(yt,t)}function U1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Sf,e&=~ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function Bg(t){if(ae&6)throw Error(U(327));is();var e=zl(t,0);if(!(e&1))return Et(t,Ne()),null;var n=su(t,e);if(t.tag!==0&&n===2){var r=Dh(t);r!==0&&(e=r,n=ad(t,r))}if(n===1)throw n=Yo,Zr(t,0),ir(t,e),Et(t,Ne()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,yt,kn),Et(t,Ne()),null}function Cf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ys=Ne()+500,Ou&&Lr())}}function ai(t){ur!==null&&ur.tag===0&&!(ae&6)&&is();var e=ae;ae|=1;var n=zt.transition,r=de;try{if(zt.transition=null,de=1,t)return t()}finally{de=r,zt.transition=n,ae=e,!(ae&6)&&Lr()}}function Pf(){St=Ji.current,we(Ji)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,g1(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:ms(),we(vt),we(ot),gf();break;case 5:mf(r);break;case 4:ms();break;case 13:we(Te);break;case 19:we(Te);break;case 10:hf(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(Be=t,Oe=t=_r(t.current,null),Ke=St=e,je=0,Yo=null,Sf=ju=oi=0,yt=So=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function $w(t,e){do{var n=Oe;try{if(cf(),wl.current=tu,eu){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eu=!1}if(si=0,ze=Me=Se=null,Io=!1,Go=0,Tf.current=null,n===null||n.return===null){je=1,Yo=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=kg(o);if(T!==null){T.flags&=-257,xg(T,o,l,s,e),T.mode&1&&Rg(s,c,e),e=T,u=c;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){Rg(s,c,e),Rf();break e}u=Error(U(426))}}else if(Ie&&l.mode&1){var b=kg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),xg(b,o,l,s,e),lf(gs(u,l));break e}}s=u=gs(u,l),je!==4&&(je=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Cw(s,u,e);Ig(s,w);break e;case 1:l=u;var v=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(gr===null||!gr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Pw(s,l,e);Ig(s,O);break e}}s=s.return}while(s!==null)}Ww(n)}catch(j){e=j,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function Hw(){var t=nu.current;return nu.current=tu,t===null?tu:t}function Rf(){(je===0||je===3||je===2)&&(je=4),Be===null||!(oi&268435455)&&!(ju&268435455)||ir(Be,Ke)}function su(t,e){var n=ae;ae|=2;var r=Hw();(Be!==t||Ke!==e)&&(kn=null,Zr(t,e));do try{z1();break}catch(i){$w(t,i)}while(!0);if(cf(),ae=n,nu.current=r,Oe!==null)throw Error(U(261));return Be=null,Ke=0,je}function z1(){for(;Oe!==null;)qw(Oe)}function B1(){for(;Oe!==null&&!fS();)qw(Oe)}function qw(t){var e=Kw(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?Ww(t):Oe=e,Tf.current=null}function Ww(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=V1(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=O1(n,e,St),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function qr(t,e,n){var r=de,i=zt.transition;try{zt.transition=null,de=1,$1(t,e,n,r)}finally{zt.transition=i,de=r}return null}function $1(t,e,n,r){do is();while(ur!==null);if(ae&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TS(t,s),t===Be&&(Oe=Be=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Qw(Ul,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=de;de=1;var l=ae;ae|=4,Tf.current=null,M1(t,n),Uw(n,t),u1(Fh),Bl=!!jh,Fh=jh=null,t.current=n,j1(n),pS(),ae=l,de=o,zt.transition=s}else t.current=n;if(ol&&(ol=!1,ur=t,iu=i),s=t.pendingLanes,s===0&&(gr=null),yS(n.stateNode),Et(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ru)throw ru=!1,t=sd,sd=null,t;return iu&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===od?Ao++:(Ao=0,od=t):Ao=0,Lr(),null}function is(){if(ur!==null){var t=Cv(iu),e=zt.transition,n=de;try{if(zt.transition=null,de=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,iu=0,ae&6)throw Error(U(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:To(8,d,s)}var m=d.child;if(m!==null)m.return=d,W=m;else for(;W!==null;){d=W;var g=d.sibling,T=d.return;if(Mw(d),d===c){W=null;break}if(g!==null){g.return=T,W=g;break}W=T}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var b=N.sibling;N.sibling=null,N=b}while(N!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,W=C;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mu(9,l)}}catch(j){Re(l,l.return,j)}if(l===o){W=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,W=O;break e}W=l.return}}if(ae=i,Lr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(ku,t)}catch{}r=!0}return r}finally{de=n,zt.transition=e}}return!1}function $g(t,e,n){e=gs(n,e),e=Cw(t,e,1),t=mr(t,e,1),e=dt(),t!==null&&(ha(t,1,e),Et(t,e))}function Re(t,e,n){if(t.tag===3)$g(t,t,n);else for(;e!==null;){if(e.tag===3){$g(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=gs(n,t),t=Pw(e,t,1),e=mr(e,t,1),t=dt(),e!==null&&(ha(e,1,t),Et(e,t));break}}e=e.return}}function H1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ke&n)===n&&(je===4||je===3&&(Ke&130023424)===Ke&&500>Ne()-Af?Zr(t,0):Sf|=n),Et(t,e)}function Gw(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=dt();t=Fn(t,e),t!==null&&(ha(t,e,n),Et(t,n))}function q1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gw(t,n)}function W1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Gw(t,n)}var Kw;Kw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,D1(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Ie&&e.flags&1048576&&Jv(e,Ql,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Il(t,e),t=e.pendingProps;var i=ds(e,ot.current);rs(e,n),i=_f(null,e,r,t,i,n);var s=vf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(e),i.updater=Lu,e.stateNode=i,i._reactInternals=e,Kh(e,r,t,n),e=Xh(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&of(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=K1(r),t=Yt(r,t),i){case 0:e=Yh(null,e,r,t,n);break e;case 1:e=Dg(null,e,r,t,n);break e;case 11:e=Ng(null,e,r,t,n);break e;case 14:e=bg(null,e,r,Yt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Yh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Dg(t,e,r,i,n);case 3:e:{if(Nw(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iw(t,e),Jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=gs(Error(U(423)),e),e=Og(t,e,r,n,i);break e}else if(r!==i){i=gs(Error(U(424)),e),e=Og(t,e,r,n,i);break e}else for(Ct=pr(e.stateNode.containerInfo.firstChild),Pt=e,Ie=!0,Jt=null,n=nw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),r===i){e=Un(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return sw(e),t===null&&qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uh(r,i)?o=null:s!==null&&Uh(r,s)&&(e.flags|=32),xw(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&qh(e),null;case 13:return bw(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ps(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Ng(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Yl,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!vt.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Vn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Wh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=$t(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),bg(t,e,r,i,n);case 15:return Rw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Il(t,e),e.tag=1,wt(r)?(t=!0,Gl(e)):t=!1,rs(e,n),Aw(e,r,i),Kh(e,r,i,n),Xh(null,e,r,!0,t,n);case 19:return Dw(t,e,n);case 22:return kw(t,e,n)}throw Error(U(156,e.tag))};function Qw(t,e){return Iv(t,e)}function G1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new G1(t,e,n,r)}function kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K1(t){if(typeof t=="function")return kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gd)return 11;if(t===Kd)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return ei(n.children,i,s,e);case Wd:o=8,i|=8;break;case _h:return t=Ut(12,n,e,i|2),t.elementType=_h,t.lanes=s,t;case vh:return t=Ut(13,n,e,i),t.elementType=vh,t.lanes=s,t;case wh:return t=Ut(19,n,e,i),t.elementType=wh,t.lanes=s,t;case sv:return Fu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rv:o=10;break e;case iv:o=9;break e;case Gd:o=11;break e;case Kd:o=14;break e;case tr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ei(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function Fu(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=sv,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Q1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xf(t,e,n,r,i,s,o,l,u){return t=new Q1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function Y1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Yw(t){if(!t)return Ar;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(wt(n))return Yv(t,n,e)}return e}function Xw(t,e,n,r,i,s,o,l,u){return t=xf(n,r,!0,t,i,s,o,l,u),t.context=Yw(null),n=t.current,r=dt(),i=yr(n),s=Vn(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,ha(t,i,r),Et(t,r),t}function Uu(t,e,n,r){var i=e.current,s=dt(),o=yr(i);return n=Yw(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(rn(t,i,o,s),vl(t,i,o)),o}function ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nf(t,e){Hg(t,e),(t=t.alternate)&&Hg(t,e)}function X1(){return null}var Jw=typeof reportError=="function"?reportError:function(t){console.error(t)};function bf(t){this._internalRoot=t}zu.prototype.render=bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Uu(t,e,null,null)};zu.prototype.unmount=bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){Uu(null,t,null,null)}),e[jn]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=kv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&Nv(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qg(){}function J1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ou(o);s.call(c)}}var o=Xw(e,r,t,0,null,!1,!1,"",qg);return t._reactRootContainer=o,t[jn]=o.current,Bo(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ou(u);l.call(c)}}var u=xf(t,0,!1,null,null,!1,!1,"",qg);return t._reactRootContainer=u,t[jn]=u.current,Bo(t.nodeType===8?t.parentNode:t),ai(function(){Uu(e,u,n,r)}),u}function $u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ou(o);l.call(u)}}Uu(e,o,t,i)}else o=J1(n,e,t,i,r);return ou(o)}Pv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(Xd(e,n|1),Et(e,Ne()),!(ae&6)&&(ys=Ne()+500,Lr()))}break;case 13:ai(function(){var r=Fn(t,1);if(r!==null){var i=dt();rn(r,t,1,i)}}),Nf(t,1)}};Jd=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=dt();rn(e,t,134217728,n)}Nf(t,134217728)}};Rv=function(t){if(t.tag===13){var e=yr(t),n=Fn(t,e);if(n!==null){var r=dt();rn(n,t,e,r)}Nf(t,e)}};kv=function(){return de};xv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};xh=function(t,e,n){switch(e){case"input":if(Th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Du(r);if(!i)throw Error(U(90));av(r),Th(r,i)}}}break;case"textarea":uv(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};gv=Cf;yv=ai;var Z1={usingClientEntryPoint:!1,Events:[fa,Wi,Du,pv,mv,Cf]},io={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eA={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wv(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||X1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{ku=al.inject(eA),gn=al}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z1;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(U(200));return Y1(t,e,null,n)};xt.createRoot=function(t,e){if(!Df(t))throw Error(U(299));var n=!1,r="",i=Jw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xf(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new bf(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=wv(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return ai(t)};xt.hydrate=function(t,e,n){if(!Bu(e))throw Error(U(200));return $u(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Jw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xw(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zu(e)};xt.render=function(t,e,n){if(!Bu(e))throw Error(U(200));return $u(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!Bu(t))throw Error(U(40));return t._reactRootContainer?(ai(function(){$u(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};xt.unstable_batchedUpdates=Cf;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return $u(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function Zw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zw)}catch(t){console.error(t)}}Zw(),Z_.exports=xt;var tA=Z_.exports,Wg=tA;gh.createRoot=Wg.createRoot,gh.hydrateRoot=Wg.hydrateRoot;function nA(){const t=G.useRef(null);return G.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=r?18:54,s={x:null,y:null,radius:160};let o=[],l=0;const u=()=>{const b=window.devicePixelRatio||1,{innerWidth:w,innerHeight:v}=window;e.width=w*b,e.height=v*b,e.style.width=`${w}px`,e.style.height=`${v}px`,n.setTransform(b,0,0,b,0,0)};class c{constructor(w,v,C,O,j,F){this.x=w,this.y=v,this.directionX=C,this.directionY=O,this.size=j,this.color=F}draw(){n.beginPath(),n.arc(this.x,this.y,this.size,0,Math.PI*2,!1),n.fillStyle=this.color,n.fill()}update(){if((this.x>e.width/window.devicePixelRatio||this.x<0)&&(this.directionX=-this.directionX),(this.y>e.height/window.devicePixelRatio||this.y<0)&&(this.directionY=-this.directionY),s.x!==null&&s.y!==null){const w=s.x-this.x,v=s.y-this.y;Math.sqrt(w*w+v*v)<s.radius&&(s.x<this.x&&(this.x+=2.5),s.x>this.x&&(this.x-=2.5),s.y<this.y&&(this.y+=2.5),s.y>this.y&&(this.y-=2.5))}this.x+=this.directionX,this.y+=this.directionY,this.draw()}}const d=()=>{o=[];const b=window.innerWidth,w=window.innerHeight;for(let v=0;v<i;v+=1){const C=Math.random()*2+1,O=Math.random()*(b-C*2)+C,j=Math.random()*(w-C*2)+C,F=Math.random()*.35-.175,I=Math.random()*.35-.175;o.push(new c(O,j,F,I,C,"rgba(96, 165, 250, 0.3)"))}},m=()=>{for(let b=0;b<o.length;b+=1)for(let w=b;w<o.length;w+=1){const v=o[b].x-o[w].x,C=o[b].y-o[w].y,O=v*v+C*C;if(O<window.innerWidth/9*(window.innerHeight/9)){const j=1-O/15e3;n.strokeStyle=`rgba(148, 163, 184, ${j*.25})`,n.lineWidth=1,n.beginPath(),n.moveTo(o[b].x,o[b].y),n.lineTo(o[w].x,o[w].y),n.stroke()}}},g=()=>{n.clearRect(0,0,window.innerWidth,window.innerHeight),o.forEach(b=>b.update()),m(),l=window.requestAnimationFrame(g)},T=b=>{s.x=b.clientX,s.y=b.clientY},R=()=>{s.x=null,s.y=null},N=()=>{u(),d()};return u(),d(),r?m():g(),window.addEventListener("mousemove",T),window.addEventListener("mouseout",R),window.addEventListener("resize",N),()=>{window.cancelAnimationFrame(l),window.removeEventListener("mousemove",T),window.removeEventListener("mouseout",R),window.removeEventListener("resize",N)}},[]),p.jsx("canvas",{ref:t,className:"background-canvas","aria-hidden":"true"})}const rA=()=>{};var Gg={};/**
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
 */const e0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},t0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(g=64)),r.push(n[d],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new sA;const g=s<<2|l>>4;if(r.push(g),c!==64){const T=l<<4&240|c>>2;if(r.push(T),m!==64){const R=c<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oA=function(t){const e=e0(t);return t0.encodeByteArray(e,!0)},au=function(t){return oA(t).replace(/\./g,"")},n0=function(t){try{return t0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lA=()=>aA().__FIREBASE_DEFAULTS__,uA=()=>{if(typeof process>"u"||typeof Gg>"u")return;const t=Gg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n0(t[1]);return e&&JSON.parse(e)},Hu=()=>{try{return rA()||lA()||uA()||cA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r0=t=>{var e,n;return(n=(e=Hu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hA=t=>{const e=r0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},i0=()=>{var t;return(t=Hu())===null||t===void 0?void 0:t.config},s0=t=>{var e;return(e=Hu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function o0(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function fA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[au(JSON.stringify(n)),au(JSON.stringify(o)),""].join(".")}const Co={};function pA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Co))Co[e]?t.emulator.push(e):t.prod.push(e);return t}function mA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kg=!1;function a0(t,e){if(typeof window>"u"||typeof document>"u"||!Ps(window.location.host)||Co[t]===e||Co[t]||Kg)return;Co[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=pA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Kg=!0,o()},g}function d(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=mA(r),T=n("text"),R=document.getElementById(T)||document.createElement("span"),N=n("learnmore"),b=document.getElementById(N)||document.createElement("a"),w=n("preprendIcon"),v=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const C=g.element;l(C),d(b,N);const O=c();u(v,w),C.append(v,R,b,O),document.body.appendChild(C)}s?(R.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function yA(){var t;const e=(t=Hu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _A(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Of(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wA(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EA(){return!yA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vf(){try{return typeof indexedDB=="object"}catch{return!1}}function Lf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function l0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const IA="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IA,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cn(i,l,r)}}function TA(t,e){return t.replace(SA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SA=/\{\$([^}]+)}/g;function AA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qg(s)&&Qg(o)){if(!Cr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qg(t){return t!==null&&typeof t=="object"}/**
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
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CA(t,e){const n=new PA(t,e);return n.subscribe.bind(n)}class PA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zc),i.error===void 0&&(i.error=Zc),i.complete===void 0&&(i.complete=Zc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
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
 */const kA=1e3,xA=2,NA=4*60*60*1e3,bA=.5;function Yg(t,e=kA,n=xA){const r=e*Math.pow(n,t),i=Math.round(bA*r*(Math.random()-.5)*2);return Math.min(NA,r+i)}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class DA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VA(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OA(t){return t===Wr?void 0:t}function VA(t){return t.instantiationMode==="EAGER"}/**
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
 */class LA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const MA={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},jA=ie.INFO,FA={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},UA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=FA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qu{constructor(e){this.name=e,this._logLevel=jA,this._logHandler=UA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const zA=(t,e)=>e.some(n=>t instanceof n);let Xg,Jg;function BA(){return Xg||(Xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $A(){return Jg||(Jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u0=new WeakMap,ud=new WeakMap,c0=new WeakMap,eh=new WeakMap,Mf=new WeakMap;function HA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&u0.set(n,t)}).catch(()=>{}),Mf.set(e,t),e}function qA(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WA(t){cd=t(cd)}function GA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return c0.set(r,e.sort?e.sort():[e]),vr(r)}:$A().includes(t)?function(...e){return t.apply(th(this),e),vr(u0.get(this))}:function(...e){return vr(t.apply(th(this),e))}}function KA(t){return typeof t=="function"?GA(t):(t instanceof IDBTransaction&&qA(t),zA(t,BA())?new Proxy(t,cd):t)}function vr(t){if(t instanceof IDBRequest)return HA(t);if(eh.has(t))return eh.get(t);const e=KA(t);return e!==t&&(eh.set(t,e),Mf.set(e,t)),e}const th=t=>Mf.get(t);function h0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vr(o.result),u.oldVersion,u.newVersion,vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const QA=["get","getKey","getAll","getAllKeys","count"],YA=["put","add","delete","clear"],nh=new Map;function Zg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return nh.set(e,s),s}WA(t=>({...t,get:(e,n,r)=>Zg(e,n)||t.get(e,n,r),has:(e,n)=>!!Zg(e,n)||t.has(e,n)}));/**
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
 */class XA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",ey="0.13.2";/**
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
 */const zn=new qu("@firebase/app"),ZA="@firebase/app-compat",eC="@firebase/analytics-compat",tC="@firebase/analytics",nC="@firebase/app-check-compat",rC="@firebase/app-check",iC="@firebase/auth",sC="@firebase/auth-compat",oC="@firebase/database",aC="@firebase/data-connect",lC="@firebase/database-compat",uC="@firebase/functions",cC="@firebase/functions-compat",hC="@firebase/installations",dC="@firebase/installations-compat",fC="@firebase/messaging",pC="@firebase/messaging-compat",mC="@firebase/performance",gC="@firebase/performance-compat",yC="@firebase/remote-config",_C="@firebase/remote-config-compat",vC="@firebase/storage",wC="@firebase/storage-compat",EC="@firebase/firestore",IC="@firebase/ai",TC="@firebase/firestore-compat",SC="firebase",AC="11.10.0";/**
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
 */const dd="[DEFAULT]",CC={[hd]:"fire-core",[ZA]:"fire-core-compat",[tC]:"fire-analytics",[eC]:"fire-analytics-compat",[rC]:"fire-app-check",[nC]:"fire-app-check-compat",[iC]:"fire-auth",[sC]:"fire-auth-compat",[oC]:"fire-rtdb",[aC]:"fire-data-connect",[lC]:"fire-rtdb-compat",[uC]:"fire-fn",[cC]:"fire-fn-compat",[hC]:"fire-iid",[dC]:"fire-iid-compat",[fC]:"fire-fcm",[pC]:"fire-fcm-compat",[mC]:"fire-perf",[gC]:"fire-perf-compat",[yC]:"fire-rc",[_C]:"fire-rc-compat",[vC]:"fire-gcs",[wC]:"fire-gcs-compat",[EC]:"fire-fst",[TC]:"fire-fst-compat",[IC]:"fire-vertex","fire-js":"fire-js",[SC]:"fire-js-all"};/**
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
 */const lu=new Map,PC=new Map,fd=new Map;function ty(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(fd.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of lu.values())ty(n,t);for(const n of PC.values())ty(n,t);return!0}function _i(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t==null?!1:t.settings!==void 0}/**
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
 */const RC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new yi("app","Firebase",RC);/**
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
 */class kC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=AC;function d0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dd,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=i0()),!n)throw wr.create("no-options");const s=lu.get(i);if(s){if(Cr(n,s.options)&&Cr(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new LA(i);for(const u of fd.values())o.addComponent(u);const l=new kC(n,r,o);return lu.set(i,l),l}function jf(t=dd){const e=lu.get(t);if(!e&&t===dd&&i0())return d0();if(!e)throw wr.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let i=(r=CC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}Sn(new ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xC="firebase-heartbeat-database",NC=1,Xo="firebase-heartbeat-store";let rh=null;function f0(){return rh||(rh=h0(xC,NC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),rh}async function bC(t){try{const n=(await f0()).transaction(Xo),r=await n.objectStore(Xo).get(p0(t));return await n.done,r}catch(e){if(e instanceof cn)zn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function ny(t,e){try{const r=(await f0()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,p0(t)),await r.done}catch(n){if(n instanceof cn)zn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function p0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DC=1024,OC=30;class VC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ry();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>OC){const o=jC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ry(),{heartbeatsToSend:r,unsentEntries:i}=LC(this._heartbeatsCache.heartbeats),s=au(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zn.warn(n),""}}}function ry(){return new Date().toISOString().substring(0,10)}function LC(t,e=DC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vf()?Lf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iy(t){return au(JSON.stringify({version:2,heartbeats:t})).length}function jC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function FC(t){Sn(new ln("platform-logger",e=>new XA(e),"PRIVATE")),Sn(new ln("heartbeat",e=>new VC(e),"PRIVATE")),Bt(hd,ey,t),Bt(hd,ey,"esm2017"),Bt("fire-js","")}FC("");var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,m0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.D=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(S,P,k){for(var A=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)A[mt-2]=arguments[mt];return _.prototype[P].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,E){E||(E=0);var S=Array(16);if(typeof _=="string")for(var P=0;16>P;++P)S[P]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(P=0;16>P;++P)S[P]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],P=I.g[2];var k=I.g[3],A=_+(k^E&(P^k))+S[0]+3614090360&4294967295;_=E+(A<<7&4294967295|A>>>25),A=k+(P^_&(E^P))+S[1]+3905402710&4294967295,k=_+(A<<12&4294967295|A>>>20),A=P+(E^k&(_^E))+S[2]+606105819&4294967295,P=k+(A<<17&4294967295|A>>>15),A=E+(_^P&(k^_))+S[3]+3250441966&4294967295,E=P+(A<<22&4294967295|A>>>10),A=_+(k^E&(P^k))+S[4]+4118548399&4294967295,_=E+(A<<7&4294967295|A>>>25),A=k+(P^_&(E^P))+S[5]+1200080426&4294967295,k=_+(A<<12&4294967295|A>>>20),A=P+(E^k&(_^E))+S[6]+2821735955&4294967295,P=k+(A<<17&4294967295|A>>>15),A=E+(_^P&(k^_))+S[7]+4249261313&4294967295,E=P+(A<<22&4294967295|A>>>10),A=_+(k^E&(P^k))+S[8]+1770035416&4294967295,_=E+(A<<7&4294967295|A>>>25),A=k+(P^_&(E^P))+S[9]+2336552879&4294967295,k=_+(A<<12&4294967295|A>>>20),A=P+(E^k&(_^E))+S[10]+4294925233&4294967295,P=k+(A<<17&4294967295|A>>>15),A=E+(_^P&(k^_))+S[11]+2304563134&4294967295,E=P+(A<<22&4294967295|A>>>10),A=_+(k^E&(P^k))+S[12]+1804603682&4294967295,_=E+(A<<7&4294967295|A>>>25),A=k+(P^_&(E^P))+S[13]+4254626195&4294967295,k=_+(A<<12&4294967295|A>>>20),A=P+(E^k&(_^E))+S[14]+2792965006&4294967295,P=k+(A<<17&4294967295|A>>>15),A=E+(_^P&(k^_))+S[15]+1236535329&4294967295,E=P+(A<<22&4294967295|A>>>10),A=_+(P^k&(E^P))+S[1]+4129170786&4294967295,_=E+(A<<5&4294967295|A>>>27),A=k+(E^P&(_^E))+S[6]+3225465664&4294967295,k=_+(A<<9&4294967295|A>>>23),A=P+(_^E&(k^_))+S[11]+643717713&4294967295,P=k+(A<<14&4294967295|A>>>18),A=E+(k^_&(P^k))+S[0]+3921069994&4294967295,E=P+(A<<20&4294967295|A>>>12),A=_+(P^k&(E^P))+S[5]+3593408605&4294967295,_=E+(A<<5&4294967295|A>>>27),A=k+(E^P&(_^E))+S[10]+38016083&4294967295,k=_+(A<<9&4294967295|A>>>23),A=P+(_^E&(k^_))+S[15]+3634488961&4294967295,P=k+(A<<14&4294967295|A>>>18),A=E+(k^_&(P^k))+S[4]+3889429448&4294967295,E=P+(A<<20&4294967295|A>>>12),A=_+(P^k&(E^P))+S[9]+568446438&4294967295,_=E+(A<<5&4294967295|A>>>27),A=k+(E^P&(_^E))+S[14]+3275163606&4294967295,k=_+(A<<9&4294967295|A>>>23),A=P+(_^E&(k^_))+S[3]+4107603335&4294967295,P=k+(A<<14&4294967295|A>>>18),A=E+(k^_&(P^k))+S[8]+1163531501&4294967295,E=P+(A<<20&4294967295|A>>>12),A=_+(P^k&(E^P))+S[13]+2850285829&4294967295,_=E+(A<<5&4294967295|A>>>27),A=k+(E^P&(_^E))+S[2]+4243563512&4294967295,k=_+(A<<9&4294967295|A>>>23),A=P+(_^E&(k^_))+S[7]+1735328473&4294967295,P=k+(A<<14&4294967295|A>>>18),A=E+(k^_&(P^k))+S[12]+2368359562&4294967295,E=P+(A<<20&4294967295|A>>>12),A=_+(E^P^k)+S[5]+4294588738&4294967295,_=E+(A<<4&4294967295|A>>>28),A=k+(_^E^P)+S[8]+2272392833&4294967295,k=_+(A<<11&4294967295|A>>>21),A=P+(k^_^E)+S[11]+1839030562&4294967295,P=k+(A<<16&4294967295|A>>>16),A=E+(P^k^_)+S[14]+4259657740&4294967295,E=P+(A<<23&4294967295|A>>>9),A=_+(E^P^k)+S[1]+2763975236&4294967295,_=E+(A<<4&4294967295|A>>>28),A=k+(_^E^P)+S[4]+1272893353&4294967295,k=_+(A<<11&4294967295|A>>>21),A=P+(k^_^E)+S[7]+4139469664&4294967295,P=k+(A<<16&4294967295|A>>>16),A=E+(P^k^_)+S[10]+3200236656&4294967295,E=P+(A<<23&4294967295|A>>>9),A=_+(E^P^k)+S[13]+681279174&4294967295,_=E+(A<<4&4294967295|A>>>28),A=k+(_^E^P)+S[0]+3936430074&4294967295,k=_+(A<<11&4294967295|A>>>21),A=P+(k^_^E)+S[3]+3572445317&4294967295,P=k+(A<<16&4294967295|A>>>16),A=E+(P^k^_)+S[6]+76029189&4294967295,E=P+(A<<23&4294967295|A>>>9),A=_+(E^P^k)+S[9]+3654602809&4294967295,_=E+(A<<4&4294967295|A>>>28),A=k+(_^E^P)+S[12]+3873151461&4294967295,k=_+(A<<11&4294967295|A>>>21),A=P+(k^_^E)+S[15]+530742520&4294967295,P=k+(A<<16&4294967295|A>>>16),A=E+(P^k^_)+S[2]+3299628645&4294967295,E=P+(A<<23&4294967295|A>>>9),A=_+(P^(E|~k))+S[0]+4096336452&4294967295,_=E+(A<<6&4294967295|A>>>26),A=k+(E^(_|~P))+S[7]+1126891415&4294967295,k=_+(A<<10&4294967295|A>>>22),A=P+(_^(k|~E))+S[14]+2878612391&4294967295,P=k+(A<<15&4294967295|A>>>17),A=E+(k^(P|~_))+S[5]+4237533241&4294967295,E=P+(A<<21&4294967295|A>>>11),A=_+(P^(E|~k))+S[12]+1700485571&4294967295,_=E+(A<<6&4294967295|A>>>26),A=k+(E^(_|~P))+S[3]+2399980690&4294967295,k=_+(A<<10&4294967295|A>>>22),A=P+(_^(k|~E))+S[10]+4293915773&4294967295,P=k+(A<<15&4294967295|A>>>17),A=E+(k^(P|~_))+S[1]+2240044497&4294967295,E=P+(A<<21&4294967295|A>>>11),A=_+(P^(E|~k))+S[8]+1873313359&4294967295,_=E+(A<<6&4294967295|A>>>26),A=k+(E^(_|~P))+S[15]+4264355552&4294967295,k=_+(A<<10&4294967295|A>>>22),A=P+(_^(k|~E))+S[6]+2734768916&4294967295,P=k+(A<<15&4294967295|A>>>17),A=E+(k^(P|~_))+S[13]+1309151649&4294967295,E=P+(A<<21&4294967295|A>>>11),A=_+(P^(E|~k))+S[4]+4149444226&4294967295,_=E+(A<<6&4294967295|A>>>26),A=k+(E^(_|~P))+S[11]+3174756917&4294967295,k=_+(A<<10&4294967295|A>>>22),A=P+(_^(k|~E))+S[2]+718787259&4294967295,P=k+(A<<15&4294967295|A>>>17),A=E+(k^(P|~_))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+k&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var E=_-this.blockSize,S=this.B,P=this.h,k=0;k<_;){if(P==0)for(;k<=E;)i(this,I,k),k+=this.blockSize;if(typeof I=="string"){for(;k<_;)if(S[P++]=I.charCodeAt(k++),P==this.blockSize){i(this,S),P=0;break}}else for(;k<_;)if(S[P++]=I[k++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var E=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=E&255,E/=256;for(this.u(I),I=Array(16),_=E=0;4>_;++_)for(var S=0;32>S;S+=8)I[E++]=this.g[_]>>>S&255;return I};function s(I,_){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function o(I,_){this.h=_;for(var E=[],S=!0,P=I.length-1;0<=P;P--){var k=I[P]|0;S&&k==_||(E[P]=k,S=!1)}this.g=E}var l={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return b(c(-I));for(var _=[],E=1,S=0;I>=E;S++)_[S]=I/E|0,E*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return b(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),S=m,P=0;P<I.length;P+=8){var k=Math.min(8,I.length-P),A=parseInt(I.substring(P,P+k),_);8>k?(k=c(Math.pow(_,k)),S=S.j(k).add(c(A))):(S=S.j(E),S=S.add(c(A)))}return S}var m=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-b(this).m();for(var I=0,_=1,E=0;E<this.g.length;E++){var S=this.i(E);I+=(0<=S?S:4294967296+S)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(N(this))return"-"+b(this).toString(I);for(var _=c(Math.pow(I,6)),E=this,S="";;){var P=O(E,_).g;E=w(E,P.j(_));var k=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=P,R(E))return k+S;for(;6>k.length;)k="0"+k;S=k+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=w(this,I),N(I)?-1:R(I)?0:1};function b(I){for(var _=I.g.length,E=[],S=0;S<_;S++)E[S]=~I.g[S];return new o(E,~I.h).add(g)}t.abs=function(){return N(this)?b(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],S=0,P=0;P<=_;P++){var k=S+(this.i(P)&65535)+(I.i(P)&65535),A=(k>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);S=A>>>16,k&=65535,A&=65535,E[P]=A<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(I,_){return I.add(b(_))}t.j=function(I){if(R(this)||R(I))return m;if(N(this))return N(I)?b(this).j(b(I)):b(b(this).j(I));if(N(I))return b(this.j(b(I)));if(0>this.l(T)&&0>I.l(T))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,E=[],S=0;S<2*_;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<I.g.length;P++){var k=this.i(S)>>>16,A=this.i(S)&65535,mt=I.i(P)>>>16,Cn=I.i(P)&65535;E[2*S+2*P]+=A*Cn,v(E,2*S+2*P),E[2*S+2*P+1]+=k*Cn,v(E,2*S+2*P+1),E[2*S+2*P+1]+=A*mt,v(E,2*S+2*P+1),E[2*S+2*P+2]+=k*mt,v(E,2*S+2*P+2)}for(S=0;S<_;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=_;S<2*_;S++)E[S]=0;return new o(E,0)};function v(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function C(I,_){this.g=I,this.h=_}function O(I,_){if(R(_))throw Error("division by zero");if(R(I))return new C(m,m);if(N(I))return _=O(b(I),_),new C(b(_.g),b(_.h));if(N(_))return _=O(I,b(_)),new C(b(_.g),_.h);if(30<I.g.length){if(N(I)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,S=_;0>=S.l(I);)E=j(E),S=j(S);var P=F(E,1),k=F(S,1);for(S=F(S,2),E=F(E,2);!R(S);){var A=k.add(S);0>=A.l(I)&&(P=P.add(E),k=A),S=F(S,1),E=F(E,1)}return _=w(I,P.j(_)),new C(P,_)}for(P=m;0<=I.l(_);){for(E=Math.max(1,Math.floor(I.m()/_.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),k=c(E),A=k.j(_);N(A)||0<A.l(I);)E-=S,k=c(E),A=k.j(_);R(k)&&(k=g),P=P.add(k),I=w(I,A)}return new C(P,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)&I.i(S);return new o(E,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)|I.i(S);return new o(E,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)^I.i(S);return new o(E,this.h^I.h)};function j(I){for(var _=I.g.length+1,E=[],S=0;S<_;S++)E[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(E,I.h)}function F(I,_){var E=_>>5;_%=32;for(var S=I.g.length-E,P=[],k=0;k<S;k++)P[k]=0<_?I.i(k+E)>>>_|I.i(k+E+1)<<32-_:I.i(k+E);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,m0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Er=o}).apply(typeof sy<"u"?sy:typeof self<"u"?self:typeof window<"u"?window:{});var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var g0,ho,y0,Cl,pd,_0,v0,w0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ll=="object"&&ll];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var x=a[y];if(!(x in f))break e;f=f[x]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,x={next:function(){if(!y&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function m(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,y),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,g.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,x,D){for(var B=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)B[fe-2]=arguments[fe];return h.prototype[x].apply(y,B)}}function N(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function b(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const x=a.length||0,D=y.length||0;a.length=x+D;for(let B=0;B<D;B++)a[x+B]=y[B]}else a.push(y)}}class w{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var j=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function F(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(f in y)a[f]=y[f];for(let D=0;D<E.length;D++)f=E[D],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function k(a){l.setTimeout(()=>{throw a},0)}function A(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class mt{constructor(){this.h=this.g=null}add(h,f){const y=Cn.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var Cn=new w(()=>new Mr,a=>a.reset());class Mr{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,$=!1,X=new mt,ee=()=>{const a=l.Promise.resolve(void 0);Wt=()=>{a.then(pe)}};var pe=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){k(f)}var h=Cn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var bt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Dt(a,h){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(j){e:{try{O(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ot[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Dt.aa.h.call(this)}}R(Dt,Ee);var Ot={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),Aa=0;function Ca(a,h,f,y,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=x,this.key=++Aa,this.da=this.fa=!1}function jr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fr(a){this.src=a,this.g={},this.h=0}Fr.prototype.add=function(a,h,f,y,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=Pi(a,h,y,x);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new Ca(h,this.src,D,!!y,x),h.fa=f,a.push(h)),h};function Ci(a,h){var f=h.type;if(f in a.g){var y=a.g[f],x=Array.prototype.indexOf.call(y,h,void 0),D;(D=0<=x)&&Array.prototype.splice.call(y,x,1),D&&(jr(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Pi(a,h,f,y){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==y)return x}return-1}var Ri="closure_lm_"+(1e6*Math.random()|0),ki={};function Ls(a,h,f,y,x){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Ls(a,h[D],f,y,x);return null}return f=xi(f),a&&a[Vt]?a.K(h,f,c(y)?!!y.capture:!1,x):Pa(a,h,f,!1,y,x)}function Pa(a,h,f,y,x,D){if(!h)throw Error("Invalid event type");var B=c(x)?!!x.capture:!!x,fe=le(a);if(fe||(a[Ri]=fe=new Fr(a)),f=fe.add(h,f,y,B,D),f.proxy)return f;if(y=Ra(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)bt||(x=B),x===void 0&&(x=!1),a.addEventListener(h.toString(),y,x);else if(a.attachEvent)a.attachEvent(z(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ra(){function a(f){return h.call(a.src,a.listener,f)}const h=J;return a}function Ms(a,h,f,y,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)Ms(a,h[D],f,y,x);else y=c(y)?!!y.capture:!!y,f=xi(f),a&&a[Vt]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=Pi(D,f,y,x),-1<f&&(jr(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=le(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Pi(h,f,y,x)),(f=-1<a?h[a]:null)&&L(f))}function L(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Vt])Ci(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(z(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=le(h))?(Ci(f,a),f.h==0&&(f.src=null,h[Ri]=null)):jr(a)}}}function z(a){return a in ki?ki[a]:ki[a]="on"+a}function J(a,h){if(a.da)a=!0;else{h=new Dt(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&L(a),a=f.call(y,h)}return a}function le(a){return a=a[Ri],a instanceof Fr?a:null}var Gt="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(a){return typeof a=="function"?a:(a[Gt]||(a[Gt]=function(h){return a.handleEvent(h)}),a[Gt])}function Xe(){ce.call(this),this.i=new Fr(this),this.M=this,this.F=null}R(Xe,ce),Xe.prototype[Vt]=!0,Xe.prototype.removeEventListener=function(a,h,f,y){Ms(this,a,h,f,y)};function lt(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Ee(h,a);else if(h instanceof Ee)h.target=h.target||a;else{var x=h;h=new Ee(y,a),S(h,x)}if(x=!0,f)for(var D=f.length-1;0<=D;D--){var B=h.g=f[D];x=ka(B,y,!0,h)&&x}if(B=h.g=a,x=ka(B,y,!0,h)&&x,x=ka(B,y,!1,h)&&x,f)for(D=0;D<f.length;D++)B=h.g=f[D],x=ka(B,y,!1,h)&&x}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)jr(f[y]);delete a.g[h],a.h--}}this.F=null},Xe.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Xe.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function ka(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,D=0;D<h.length;++D){var B=h[D];if(B&&!B.da&&B.capture==f){var fe=B.listener,He=B.ha||B.src;B.fa&&Ci(a.i,B),x=fe.call(He,y)!==!1&&x}}return x&&!y.defaultPrevented}function $p(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Hp(a){a.g=$p(()=>{a.g=null,a.i&&(a.i=!1,Hp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class nT extends ce{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Hp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(a){ce.call(this),this.h=a,this.g={}}R(js,ce);var qp=[];function Wp(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&L(h)},a),a.g={}}js.prototype.N=function(){js.aa.N.call(this),Wp(this)},js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hc=l.JSON.stringify,rT=l.JSON.parse,iT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function dc(){}dc.prototype.h=null;function Gp(a){return a.h||(a.h=a.i())}function Kp(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fc(){Ee.call(this,"d")}R(fc,Ee);function pc(){Ee.call(this,"c")}R(pc,Ee);var Ur={},Qp=null;function xa(){return Qp=Qp||new Xe}Ur.La="serverreachability";function Yp(a){Ee.call(this,Ur.La,a)}R(Yp,Ee);function Us(a){const h=xa();lt(h,new Yp(h))}Ur.STAT_EVENT="statevent";function Xp(a,h){Ee.call(this,Ur.STAT_EVENT,a),this.stat=h}R(Xp,Ee);function ut(a){const h=xa();lt(h,new Xp(h,a))}Ur.Ma="timingevent";function Jp(a,h){Ee.call(this,Ur.Ma,a),this.size=h}R(Jp,Ee);function zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Bs(){this.g=!0}Bs.prototype.xa=function(){this.g=!1};function sT(a,h,f,y,x,D){a.info(function(){if(a.g)if(D)for(var B="",fe=D.split("&"),He=0;He<fe.length;He++){var ue=fe[He].split("=");if(1<ue.length){var Je=ue[0];ue=ue[1];var Ze=Je.split("_");B=2<=Ze.length&&Ze[1]=="type"?B+(Je+"="+ue+"&"):B+(Je+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+h+`
`+f+`
`+B})}function oT(a,h,f,y,x,D,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+h+`
`+f+`
`+D+" "+B})}function Ni(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+lT(a,f)+(y?" "+y:"")})}function aT(a,h){a.info(function(){return"TIMEOUT: "+h})}Bs.prototype.info=function(){};function lT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var x=y[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<x.length;B++)x[B]=""}}}}return hc(f)}catch{return h}}var Na={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mc;function ba(){}R(ba,dc),ba.prototype.g=function(){return new XMLHttpRequest},ba.prototype.i=function(){return{}},mc=new ba;function Yn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new js(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new em}function em(){this.i=null,this.g="",this.h=!1}var tm={},gc={};function yc(a,h,f){a.L=1,a.v=La(Pn(h)),a.m=f,a.P=!0,nm(a,null)}function nm(a,h){a.F=Date.now(),Da(a),a.A=Pn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),gm(f.i,"t",y),a.C=0,f=a.j.J,a.h=new em,a.g=Om(a.j,f?h:null,!a.m),0<a.O&&(a.M=new nT(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(qp[0]=x.toString()),x=qp);for(var D=0;D<x.length;D++){var B=Ls(f,x[D],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Us(),sT(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Rn(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=Rn(this.g);var h=this.g.Ba();const Oi=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Tm(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=Oi?Us(3):Us(2)),_c(this);var f=this.g.Z();this.X=f;t:if(rm(this)){var y=Tm(this.g);a="";var x=y.length,D=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),$s(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(D&&h==x-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,oT(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,He=this.g;if((fe=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(fe)){var ue=fe;break t}}ue=null}if(f=ue)Ni(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vc(this,f);else{this.o=!1,this.s=3,ut(12),zr(this),$s(this);break e}}if(this.P){f=!0;let Kt;for(;!this.J&&this.C<B.length;)if(Kt=uT(this,B),Kt==gc){Ze==4&&(this.s=4,ut(14),f=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==tm){this.s=4,ut(15),Ni(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Ni(this.i,this.l,Kt,null),vc(this,Kt);if(rm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||B.length!=0||this.h.h||(this.s=1,ut(16),f=!1),this.o=this.o&&f,!f)Ni(this.i,this.l,B,"[Invalid Chunked Response]"),zr(this),$s(this);else if(0<B.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ac(Je),Je.M=!0,ut(11))}}else Ni(this.i,this.l,B,null),vc(this,B);Ze==4&&zr(this),this.o&&!this.J&&(Ze==4?xm(this.j,this):(this.o=!1,Da(this)))}else CT(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),zr(this),$s(this)}}}catch{}finally{}};function rm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uT(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?gc:(f=Number(h.substring(f,y)),isNaN(f)?tm:(y+=1,y+f>h.length?gc:(h=h.slice(y,y+f),a.C=y+f,h)))}Yn.prototype.cancel=function(){this.J=!0,zr(this)};function Da(a){a.S=Date.now()+a.I,im(a,a.I)}function im(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zs(g(a.ba,a),h)}function _c(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(aT(this.i,this.A),this.L!=2&&(Us(),ut(17)),zr(this),this.s=2,$s(this)):im(this,this.S-a)};function $s(a){a.j.G==0||a.J||xm(a.j,a)}function zr(a){_c(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Wp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function vc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||wc(f.h,a))){if(!a.K&&wc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ba(f),Ua(f);else break e;Sc(f),ut(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=zs(g(f.Za,f),6e3));if(1>=am(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else $r(f,11)}else if((a.K||f.g==a)&&Ba(f),!v(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let ue=x[h];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const Je=ue[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Ze=ue[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const Oi=ue[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(y=1.5*Oi,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Kt=a.g;if(Kt){const Ha=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ha){var D=y.h;D.g||Ha.indexOf("spdy")==-1&&Ha.indexOf("quic")==-1&&Ha.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ec(D,D.h),D.h=null))}if(y.D){const Cc=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Cc&&(y.ya=Cc,ye(y.I,y.D,Cc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var B=a;if(y.qa=Dm(y,y.J?y.ia:null,y.W),B.K){lm(y.h,B);var fe=B,He=y.L;He&&(fe.I=He),fe.B&&(_c(fe),Da(fe)),y.g=B}else Rm(y);0<f.i.length&&za(f)}else ue[0]!="stop"&&ue[0]!="close"||$r(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?$r(f,7):Tc(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}Us(4)}catch{}}var cT=class{constructor(a,h){this.g=a,this.map=h}};function sm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function om(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function am(a){return a.h?1:a.g?a.g.size:0}function wc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ec(a,h){a.g?a.g.add(h):a.h=h}function lm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}sm.prototype.cancel=function(){if(this.i=um(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function um(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return N(a.i)}function hT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function dT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function cm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=dT(a),y=hT(a),x=y.length,D=0;D<x;D++)h.call(void 0,y[D],f&&f[D],a)}var hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fT(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),x=null;if(0<=y){var D=a[f].substring(0,y);x=a[f].substring(y+1)}else D=a[f];h(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Br){this.h=a.h,Oa(this,a.j),this.o=a.o,this.g=a.g,Va(this,a.s),this.l=a.l;var h=a.i,f=new Ws;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),dm(this,f),this.m=a.m}else a&&(h=String(a).match(hm))?(this.h=!1,Oa(this,h[1]||"",!0),this.o=Hs(h[2]||""),this.g=Hs(h[3]||"",!0),Va(this,h[4]),this.l=Hs(h[5]||"",!0),dm(this,h[6]||"",!0),this.m=Hs(h[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}Br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(qs(h,fm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(qs(h,fm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(qs(f,f.charAt(0)=="/"?gT:mT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",qs(f,_T)),a.join("")};function Pn(a){return new Br(a)}function Oa(a,h,f){a.j=f?Hs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Va(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function dm(a,h,f){h instanceof Ws?(a.i=h,vT(a.i,a.h)):(f||(h=qs(h,yT)),a.i=new Ws(h,a.h))}function ye(a,h,f){a.i.set(h,f)}function La(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Hs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,pT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fm=/[#\/\?@]/g,mT=/[#\?:]/g,gT=/[#\?]/g,yT=/[#\?@]/g,_T=/#/g;function Ws(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&fT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ws.prototype,t.add=function(a,h){Xn(this),this.i=null,a=bi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function pm(a,h){Xn(a),h=bi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function mm(a,h){return Xn(a),h=bi(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(f,y){f.forEach(function(x){a.call(h,x,y,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const x=a[y];for(let D=0;D<x.length;D++)f.push(h[y])}return f},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")mm(this,a)&&(h=h.concat(this.g.get(bi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=bi(this,a),mm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function gm(a,h,f){pm(a,h),0<f.length&&(a.i=null,a.g.set(bi(a,h),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const D=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var x=D;B[y]!==""&&(x+="="+encodeURIComponent(String(B[y]))),a.push(x)}}return this.i=a.join("&")};function bi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vT(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,y){var x=y.toLowerCase();y!=x&&(pm(this,y),gm(this,x,f))},a)),a.j=h}function wT(a,h){const f=new Bs;if(l.Image){const y=new Image;y.onload=T(Jn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=T(Jn,f,"TestLoadImage: error",!1,h,y),y.onabort=T(Jn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=T(Jn,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function ET(a,h){const f=new Bs,y=new AbortController,x=setTimeout(()=>{y.abort(),Jn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(x),D.ok?Jn(f,"TestPingServer: ok",!0,h):Jn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Jn(f,"TestPingServer: error",!1,h)})}function Jn(a,h,f,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(f)}catch{}}function IT(){this.g=new iT}function TT(a,h,f){const y=f||"";try{cm(a,function(x,D){let B=x;c(x)&&(B=hc(x)),h.push(y+D+"="+encodeURIComponent(B))})}catch(x){throw h.push(y+"type="+encodeURIComponent("_badmap")),x}}function Ma(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Ma,dc),Ma.prototype.g=function(){return new ja(this.l,this.j)},Ma.prototype.i=function(a){return function(){return a}}({});function ja(a,h){Xe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ja,Xe),t=ja.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ym(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ym(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Gs(this):Ks(this),this.readyState==3&&ym(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gs(this))},t.Qa=function(a){this.g&&(this.response=a,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ks(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _m(a){let h="";return F(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Ic(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=_m(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ye(a,h,f))}function Pe(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Pe,Xe);var ST=/^https?$/i,AT=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mc.g(),this.v=this.o?Gp(this.o):Gp(mc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){vm(this,D);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)f.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())f.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(AT,h,void 0))||y||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of f)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Im(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){vm(this,D)}};function vm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,wm(a),Fa(a)}function wm(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),Fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fa(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Em(this):this.bb())},t.bb=function(){Em(this)};function Em(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rn(a)!=4||a.Z()!=2)){if(a.u&&Rn(a)==4)$p(a.Ea,0,a);else if(lt(a,"readystatechange"),Rn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=B===0){var x=String(a.D).match(hm)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),y=!ST.test(x?x.toLowerCase():"")}f=y}if(f)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var D=2<Rn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",wm(a)}}finally{Fa(a)}}}}function Fa(a,h){if(a.g){Im(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||lt(a,"ready");try{f.onreadystatechange=y}catch{}}}function Im(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),rT(h)}};function Tm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function CT(a){const h={};a=(a.g&&2<=Rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var f=P(a[y]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[x]||[];h[x]=D,D.push(f)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Sm(a){this.Aa=0,this.i=[],this.j=new Bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new sm(a&&a.concurrentRequestLimit),this.Da=new IT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){ut(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Dm(this,null,this.W),za(this)};function Tc(a){if(Am(a),a.G==3){var h=a.U++,f=Pn(a.I);if(ye(f,"SID",a.K),ye(f,"RID",h),ye(f,"TYPE","terminate"),Ys(a,f),h=new Yn(a,a.j,h),h.L=2,h.v=La(Pn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Om(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Da(h)}bm(a)}function Ua(a){a.g&&(Ac(a),a.g.cancel(),a.g=null)}function Am(a){Ua(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ba(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function za(a){if(!om(a.h)&&!a.s){a.s=!0;var h=a.Ga;Wt||ee(),$||(Wt(),$=!0),X.add(h,a),a.B=0}}function PT(a,h){return am(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zs(g(a.Ga,a,h),Nm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Yn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Pm(this,x,h),f=Pn(this.I),ye(f,"RID",a),ye(f,"CVER",22),this.D&&ye(f,"X-HTTP-Session-Id",this.D),Ys(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(_m(D)))+"&"+h:this.m&&Ic(f,this.m,D)),Ec(this.h,x),this.Ua&&ye(f,"TYPE","init"),this.P?(ye(f,"$req",h),ye(f,"SID","null"),x.T=!0,yc(x,f,null)):yc(x,f,h),this.G=2}}else this.G==3&&(a?Cm(this,a):this.i.length==0||om(this.h)||Cm(this))};function Cm(a,h){var f;h?f=h.l:f=a.U++;const y=Pn(a.I);ye(y,"SID",a.K),ye(y,"RID",f),ye(y,"AID",a.T),Ys(a,y),a.m&&a.o&&Ic(y,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Pm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ec(a.h,f),yc(f,y,h)}function Ys(a,h){a.H&&F(a.H,function(f,y){ye(h,y,f)}),a.l&&cm({},function(f,y){ye(h,y,f)})}function Pm(a,h,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const B=["count="+f];D==-1?0<f?(D=x[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let fe=!0;for(let He=0;He<f;He++){let ue=x[He].g;const Je=x[He].map;if(ue-=D,0>ue)D=Math.max(0,x[He].g-100),fe=!1;else try{TT(Je,B,"req"+ue+"_")}catch{y&&y(Je)}}if(fe){y=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function Rm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Wt||ee(),$||(Wt(),$=!0),X.add(h,a),a.v=0}}function Sc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zs(g(a.Fa,a),Nm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,km(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Ua(this),km(this))};function Ac(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function km(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);ye(h,"RID","rpc"),ye(h,"SID",a.K),ye(h,"AID",a.T),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(h,"TO",a.ja),ye(h,"TYPE","xmlhttp"),Ys(a,h),a.m&&a.o&&Ic(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=La(Pn(h)),f.m=null,f.P=!0,nm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ua(this),Sc(this),ut(19))};function Ba(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xm(a,h){var f=null;if(a.g==h){Ba(a),Ac(a),a.g=null;var y=2}else if(wc(a.h,h))f=h.D,lm(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;y=xa(),lt(y,new Jp(y,f)),za(a)}else Rm(a);else if(x=h.s,x==3||x==0&&0<h.X||!(y==1&&PT(a,h)||y==2&&Sc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function Nm(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),y=a.Xa;const x=!y;y=new Br(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oa(y,"https"),La(y),x?wT(y.toString(),f):ET(y.toString(),f)}else ut(2);a.G=0,a.l&&a.l.sa(h),bm(a),Am(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function bm(a){if(a.G=0,a.ka=[],a.l){const h=um(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Dm(a,h,f){var y=f instanceof Br?Pn(f):new Br(f);if(y.g!="")h&&(y.g=h+"."+y.g),Va(y,y.s);else{var x=l.location;y=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var D=new Br(null);y&&Oa(D,y),h&&(D.g=h),x&&Va(D,x),f&&(D.l=f),y=D}return f=a.D,h=a.ya,f&&h&&ye(y,f,h),ye(y,"VER",a.la),Ys(a,y),y}function Om(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Pe(new Ma({eb:f})):new Pe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vm(){}t=Vm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $a(){}$a.prototype.g=function(a,h){return new Tt(a,h)};function Tt(a,h){Xe.call(this),this.g=new Sm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Di(this)}R(Tt,Xe),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Tc(this.g)},Tt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=hc(a),a=f);h.i.push(new cT(h.Ya++,a)),h.G==3&&za(h)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Tc(this.g),delete this.g,Tt.aa.N.call(this)};function Lm(a){fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Lm,fc);function Mm(){pc.call(this),this.status=1}R(Mm,pc);function Di(a){this.g=a}R(Di,Vm),Di.prototype.ua=function(){lt(this.g,"a")},Di.prototype.ta=function(a){lt(this.g,new Lm(a))},Di.prototype.sa=function(a){lt(this.g,new Mm)},Di.prototype.ra=function(){lt(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,w0=function(){return new $a},v0=function(){return xa()},_0=Ur,pd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Na.NO_ERROR=0,Na.TIMEOUT=8,Na.HTTP_ERROR=6,Cl=Na,Zp.COMPLETE="complete",y0=Zp,Kp.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,ho=Kp,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,g0=Pe}).apply(typeof ll<"u"?ll:typeof self<"u"?self:typeof window<"u"?window:{});const oy="@firebase/firestore",ay="4.8.0";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */let ks="11.10.0";/**
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
 */const li=new qu("@firebase/firestore");function Mi(){return li.logLevel}function q(t,...e){if(li.logLevel<=ie.DEBUG){const n=e.map(Ff);li.debug(`Firestore (${ks}): ${t}`,...n)}}function Bn(t,...e){if(li.logLevel<=ie.ERROR){const n=e.map(Ff);li.error(`Firestore (${ks}): ${t}`,...n)}}function Pr(t,...e){if(li.logLevel<=ie.WARN){const n=e.map(Ff);li.warn(`Firestore (${ks}): ${t}`,...n)}}function Ff(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,E0(t,r,n)}function E0(t,e,n){let r=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Bn(r),new Error(r)}function he(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||E0(e,i,r)}function te(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class I0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class zC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BC{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new I0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new rt(e)}}class $C{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class HC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new $C(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ly(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ly(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function WC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function T0(){return new TextEncoder}/**
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
 */class Uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=WC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function md(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return ne(r,i);{const s=T0(),o=GC(s.encode(uy(t,n)),s.encode(uy(e,n)));return o!==0?o:ne(r,i)}}n+=r>65535?2:1}return ne(t.length,e.length)}function uy(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function GC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ne(t[n],e[n]);return ne(t.length,e.length)}function _s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const cy="__name__";class fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=fn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=fn.isNumericId(e),i=fn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?fn.extractNumericId(e).compare(fn.extractNumericId(n)):md(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Er.fromString(e.substring(4,e.length-2))}}class me extends fn{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const KC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends fn{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return KC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cy}static keyField(){return new Ge([cy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}/**
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
 */function S0(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QC(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hy(t){if(!K.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dy(t){if(K.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function A0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wu(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function ga(t,e){if(!A0(t))throw new H(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const fy=-62135596800,py=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*py);return new ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fy)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/py}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ga(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:Le("string",ve._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
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
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new ve(0,0))}static max(){return new Z(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Jo=-1;function YC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Rr(i,K.empty(),e)}function XC(t){return new Rr(t.readTime,t.key,Jo)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(Z.min(),K.empty(),Jo)}static max(){return new Rr(Z.max(),K.empty(),Jo)}}function JC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const ZC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==ZC)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function tP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Gu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Gu.ue=-1;/**
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
 */const zf=-1;function Ku(t){return t==null}function uu(t){return t===0&&1/t==-1/0}function nP(t){return typeof t=="number"&&Number.isInteger(t)&&!uu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const C0="";function rP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=my(e)),e=iP(t.get(n),e);return my(e)}function iP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case C0:n+="";break;default:n+=s}}return n}function my(t){return t+C0+""}/**
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
 */function gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class en{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new en([])}unionWith(e){let n=new Fe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class R0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new R0("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const sP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=sP.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */const k0="server_timestamp",x0="__type__",N0="__previous_value__",b0="__local_write_time__";function Bf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[x0])===null||n===void 0?void 0:n.stringValue)===k0}function Qu(t){const e=t.mapValue.fields[N0];return Bf(e)?Qu(e):e}function Zo(t){const e=kr(t.mapValue.fields[b0].timestampValue);return new ve(e.seconds,e.nanos)}/**
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
 */class oP{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const cu="(default)";class ea{constructor(e,n){this.projectId=e,this.database=n||cu}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database===cu}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const D0="__type__",aP="__max__",cl={mapValue:{}},O0="__vector__",hu="value";function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bf(t)?4:uP(t)?9007199254740991:lP(t)?10:11:Y(28295,{value:t})}function An(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xr(i.bytesValue).isEqual(xr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?uu(o)===uu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(gy(o)!==gy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!An(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function ta(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return _y(t.timestampValue,e.timestampValue);case 4:return _y(Zo(t),Zo(e));case 5:return md(t.stringValue,e.stringValue);case 6:return function(s,o){const l=xr(s),u=xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ne(l[c],u[c]);if(d!==0)return d}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(xe(s.latitude),xe(o.latitude));return l!==0?l:ne(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const m=s.fields||{},g=o.fields||{},T=(l=m[hu])===null||l===void 0?void 0:l.arrayValue,R=(u=g[hu])===null||u===void 0?void 0:u.arrayValue,N=ne(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:vy(T,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===cl.mapValue&&o===cl.mapValue)return 0;if(s===cl.mapValue)return 1;if(o===cl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=md(u[m],d[m]);if(g!==0)return g;const T=vs(l[u[m]],c[d[m]]);if(T!==0)return T}return ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{le:n})}}function _y(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=kr(t),r=kr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function vy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=vs(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function ws(t){return gd(t)}function gd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gd(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function Pl(t){switch(Nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qu(t);return e?16+Pl(e):16;case 5:return 2*t.stringValue.length;case 6:return xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Pl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return vi(r.fields,(s,o)=>{i+=s.length+Pl(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function wy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yd(t){return!!t&&"integerValue"in t}function $f(t){return!!t&&"arrayValue"in t}function Ey(t){return!!t&&"nullValue"in t}function Iy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rl(t){return!!t&&"mapValue"in t}function lP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[D0])===null||n===void 0?void 0:n.stringValue)===O0}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===aP}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Po(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(Po(this.value))}}function V0(t){const e=[];return vi(t.fields,(n,r)=>{const i=new Ge([n]);if(Rl(r)){const s=V0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
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
 */class st{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,Z.min(),Z.min(),Z.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,Z.min(),Z.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Z.min(),Z.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class du{constructor(e,n){this.position=e,this.inclusive=n}}function Ty(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class na{constructor(e,n="asc"){this.field=e,this.dir=n}}function cP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class L0{}class Ve extends L0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dP(e,n,r):n==="array-contains"?new mP(e,r):n==="in"?new gP(e,r):n==="not-in"?new yP(e,r):n==="array-contains-any"?new _P(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fP(e,r):new pP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(vs(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends L0{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new un(e,n)}matches(e){return M0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function M0(t){return t.op==="and"}function j0(t){return hP(t)&&M0(t)}function hP(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function _d(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(j0(t))return t.filters.map(e=>_d(e)).join(",");{const e=t.filters.map(n=>_d(n)).join(",");return`${t.op}(${e})`}}function F0(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&An(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&F0(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function U0(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(U0).join(" ,")+"}"}(t):"Filter"}class dP extends Ve{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class fP extends Ve{constructor(e,n){super(e,"in",n),this.keys=z0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pP extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=z0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class mP extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $f(n)&&ta(n.arrayValue,this.value)}}class gP extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class yP extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ta(this.value.arrayValue,n)}}class _P extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$f(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
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
 */class vP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Ay(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vP(t,e,n,r,i,s,o)}function Hf(t){const e=te(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_d(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ws(r)).join(",")),e.Pe=n}return e.Pe}function qf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!F0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sy(t.startAt,e.startAt)&&Sy(t.endAt,e.endAt)}function vd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class bs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function wP(t,e,n,r,i,s,o,l){return new bs(t,e,n,r,i,s,o,l)}function Yu(t){return new bs(t)}function Cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function B0(t){return t.collectionGroup!==null}function Ro(t){const e=te(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new na(s,r))}),n.has(Ge.keyField().canonicalString())||e.Te.push(new na(Ge.keyField(),r))}return e.Te}function vn(t){const e=te(t);return e.Ie||(e.Ie=EP(e,Ro(t))),e.Ie}function EP(t,e){if(t.limitType==="F")return Ay(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new na(i.field,s)});const n=t.endAt?new du(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new du(t.startAt.position,t.startAt.inclusive):null;return Ay(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wd(t,e){const n=t.filters.concat([e]);return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ed(t,e,n){return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xu(t,e){return qf(vn(t),vn(e))&&t.limitType===e.limitType}function $0(t){return`${Hf(vn(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>U0(i)).join(", ")}]`),Ku(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ws(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ws(i)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function Ju(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ro(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ty(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ro(r),i)||r.endAt&&!function(o,l,u){const c=Ty(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ro(r),i))}(t,e)}function IP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function H0(t){return(e,n)=>{let r=!1;for(const i of Ro(t)){const s=TP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TP(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?vs(u,c):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
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
 */class wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return P0(this.inner)}size(){return this.innerSize}}/**
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
 */const SP=new Ce(K.comparator);function $n(){return SP}const q0=new Ce(K.comparator);function fo(...t){let e=q0;for(const n of t)e=e.insert(n.key,n);return e}function W0(t){let e=q0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return ko()}function G0(){return ko()}function ko(){return new wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const AP=new Ce(K.comparator),CP=new Fe(K.comparator);function se(...t){let e=CP;for(const n of t)e=e.add(n);return e}const PP=new Fe(ne);function RP(){return PP}/**
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
 */function Wf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uu(e)?"-0":e}}function K0(t){return{integerValue:""+t}}function kP(t,e){return nP(e)?K0(e):Wf(t,e)}/**
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
 */class Zu{constructor(){this._=void 0}}function xP(t,e,n){return t instanceof ra?function(i,s){const o={fields:{[x0]:{stringValue:k0},[b0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Bf(s)&&(s=Qu(s)),s&&(o.fields[N0]=s),{mapValue:o}}(n,e):t instanceof ia?Y0(t,e):t instanceof sa?X0(t,e):function(i,s){const o=Q0(i,s),l=Py(o)+Py(i.Ee);return yd(o)&&yd(i.Ee)?K0(l):Wf(i.serializer,l)}(t,e)}function NP(t,e,n){return t instanceof ia?Y0(t,e):t instanceof sa?X0(t,e):n}function Q0(t,e){return t instanceof fu?function(r){return yd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ra extends Zu{}class ia extends Zu{constructor(e){super(),this.elements=e}}function Y0(t,e){const n=J0(e);for(const r of t.elements)n.some(i=>An(i,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends Zu{constructor(e){super(),this.elements=e}}function X0(t,e){let n=J0(e);for(const r of t.elements)n=n.filter(i=>!An(i,r));return{arrayValue:{values:n}}}class fu extends Zu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Py(t){return xe(t.integerValue||t.doubleValue)}function J0(t){return $f(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class bP{constructor(e,n){this.field=e,this.transform=n}}function DP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ia&&i instanceof ia||r instanceof sa&&i instanceof sa?_s(r.elements,i.elements,An):r instanceof fu&&i instanceof fu?An(r.Ee,i.Ee):r instanceof ra&&i instanceof ra}(t.transform,e.transform)}class OP{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function Z0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gf(t.key,sn.none()):new ya(t.key,t.data,sn.none());{const n=t.data,r=jt.empty();let i=new Fe(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ei(t.key,r,new en(i.toArray()),sn.none())}}function VP(t,e,n){t instanceof ya?function(i,s,o){const l=i.value.clone(),u=ky(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ei?function(i,s,o){if(!kl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ky(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(eE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xo(t,e,n,r){return t instanceof ya?function(s,o,l,u){if(!kl(s.precondition,o))return l;const c=s.value.clone(),d=xy(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ei?function(s,o,l,u){if(!kl(s.precondition,o))return l;const c=xy(s.fieldTransforms,u,o),d=o.data;return d.setAll(eE(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return kl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function LP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Q0(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function Ry(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_s(r,i,(s,o)=>DP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ya extends ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ei extends ec{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ky(t,e,n){const r=new Map;he(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,NP(o,l,n[i]))}return r}function xy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,xP(s,o,e))}return r}class Gf extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MP extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=G0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Z0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>Ry(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>Ry(n,r))}}class Kf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return AP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kf(e,n,r,i)}}/**
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
 */class FP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class UP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,oe;function zP(t){switch(t){case V.OK:return Y(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function tE(t){if(t===void 0)return Bn("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return Y(39323,{code:t})}}(oe=De||(De={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const BP=new Er([4294967295,4294967295],0);function Ny(t){const e=T0().encode(t),n=new m0;return n.update(e),new Uint8Array(n.digest())}function by(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Er([n,r],0),new Er([i,s],0)]}class Qf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(r<0)throw new po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Er.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(Er.fromNumber(r)));return i.compare(BP)===1&&(i=new Er([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Ny(e),[r,i]=by(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=Ny(e),[r,i]=by(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(Z.min(),i,new Ce(ne),$n(),se())}}class _a{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _a(r,n,se(),se(),se())}}/**
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
 */class xl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class nE{constructor(e,n){this.targetId=e,this.De=n}}class rE{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dy{constructor(){this.ve=0,this.Ce=Oy(),this.Fe=Ye.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=se(),n=se(),r=se();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new _a(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Oy()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class $P{constructor(e){this.We=e,this.Ge=new Map,this.ze=$n(),this.je=hl(),this.Je=hl(),this.He=new Ce(ne)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(vd(s))if(r===0){const o=new K(s.path);this.Xe(n,o,st.newNoDocument(o,Z.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(u){if(u instanceof R0)return Pr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Qf(o,i,s)}catch(u){return Pr(u instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&vd(l.target)){const u=new K(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,st.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=se();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new tc(e,n,this.He,this.ze,r);return this.ze=$n(),this.je=hl(),this.Je=hl(),this.He=new Ce(ne),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Dy,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Fe(ne),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Fe(ne),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Dy),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function hl(){return new Ce(K.comparator)}function Oy(){return new Ce(K.comparator)}const HP={asc:"ASCENDING",desc:"DESCENDING"},qP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WP={and:"AND",or:"OR"};class GP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Id(t,e){return t.useProto3Json||Ku(e)?e:{value:e}}function pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KP(t,e){return pu(t,e.toTimestamp())}function wn(t){return he(!!t,49232),Z.fromTimestamp(function(n){const r=kr(n);return new ve(r.seconds,r.nanos)}(t))}function Yf(t,e){return Td(t,e).canonicalString()}function Td(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sE(t){const e=me.fromString(t);return he(cE(e),10190,{key:e.toString()}),e}function Sd(t,e){return Yf(t.databaseId,e.path)}function ih(t,e){const n=sE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(aE(n))}function oE(t,e){return Yf(t.databaseId,e)}function QP(t){const e=sE(t);return e.length===4?me.emptyPath():aE(e)}function Ad(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aE(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Vy(t,e,n){return{name:Sd(t,e),fields:n.value.mapValue.fields}}function YP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(he(d===void 0||typeof d=="string",58123),Ye.fromBase64String(d||"")):(he(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ye.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:tE(c.code);return new H(d,c.message||"")}(o);n=new rE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ih(t,r.document.name),s=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):Z.min(),l=new jt({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new xl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ih(t,r.document),s=r.readTime?wn(r.readTime):Z.min(),o=st.newNoDocument(i,s),l=r.removedTargetIds||[];n=new xl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ih(t,r.document),s=r.removedTargetIds||[];n=new xl([],s,i,null)}else{if(!("filter"in e))return Y(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new UP(i,s),l=r.targetId;n=new nE(l,o)}}return n}function XP(t,e){let n;if(e instanceof ya)n={update:Vy(t,e.key,e.value)};else if(e instanceof Gf)n={delete:Sd(t,e.key)};else if(e instanceof Ei)n={update:Vy(t,e.key,e.data),updateMask:oR(e.fieldMask)};else{if(!(e instanceof MP))return Y(16599,{Rt:e.type});n={verify:Sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fu)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:KP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function JP(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?wn(i.updateTime):wn(s);return o.isEqual(Z.min())&&(o=wn(s)),new OP(o,i.transformResults||[])}(n,e))):[]}function ZP(t,e){return{documents:[oE(t,e.path)]}}function eR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oE(t,i);const s=function(c){if(c.length!==0)return uE(un.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Fi(g.field),direction:rR(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Id(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:i}}function tR(t){let e=QP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(m){const g=lE(m);return g instanceof un&&j0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new na(Ui(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Ku(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,T=m.values||[];return new du(T,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,T=m.values||[];return new du(T,g)}(n.endAt)),wP(e,i,o,s,l,"F",u,c)}function nR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>lE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function rR(t){return HP[t]}function iR(t){return qP[t]}function sR(t){return WP[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return Ge.fromServerFormat(t.fieldPath)}function uE(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Iy(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(Ey(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iy(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(Ey(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:iR(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>uE(i));return r.length===1?r[0]:{compositeFilter:{op:sR(n.op),filters:r}}}(t):Y(54877,{filter:t})}function oR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aR{constructor(e){this.gt=e}}function lR(t){const e=tR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ed(e,e.limit,"L"):e}/**
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
 */class uR{constructor(){this.Dn=new cR}addToCollectionParentIndex(e,n){return this.Dn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Rr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class cR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(me.comparator)).toArray()}}/**
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
 */const Ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hE=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(hE,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */class Es{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Es(0)}static ur(){return new Es(-1)}}/**
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
 */const My="LruGarbageCollector",hR=1048576;function jy([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class dR{constructor(e){this.Tr=e,this.buffer=new Fe(jy),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();jy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){q(My,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?q(My,"Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.Rr(3e5)})}}class pR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Gu.ue);const r=new dR(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ly)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ly):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Mi()<=ie.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function mR(t,e){return new pR(t,e)}/**
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
 */class gR{constructor(){this.changes=new wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _R{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xo(r.mutation,i,en.empty(),ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=$n();const o=ko(),l=function(){return ko()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ei)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),xo(d.mutation,c,d.mutation.getFieldMask(),ve.now())):o.set(c.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var m;return l.set(c,new yR(d,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new Ce((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||en.empty();d=l.applyToLocalView(c,d),r.set(u,d);const m=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,m=G0();d.forEach(g=>{if(!s.has(g)){const T=Z0(n.get(g),r.get(g));T!==null&&m.set(g,T),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):B0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Yr());let l=Jo,u=s;return o.next(c=>M.forEach(c,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(d=>({batchId:l,changes:W0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(m,g){return new bs(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,st.newInvalidDocument(d)))});let l=fo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&xo(d.mutation,c,en.empty(),ve.now()),Ju(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class vR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return M.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:lR(i.bundledQuery),readTime:wn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class wR{constructor(){this.overlays=new Ce(K.comparator),this.kr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Yr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Yr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FP(n,r));let s=this.kr.get(n);s===void 0&&(s=se(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Xf{constructor(){this.qr=new Fe(Ue.Qr),this.$r=new Fe(Ue.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ue(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new K(new me([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new K(new me([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=se();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return K.comparator(e.key,n.key)||ne(e.Hr,n.Hr)}static Ur(e,n){return ne(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
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
 */class IR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Fe(Ue.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?zf:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(ne);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new K(s),0);let l=new Fe(ne);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return M.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Yr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class TR{constructor(e){this.ni=e,this.docs=function(){return new Ce(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=$n();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||JC(XC(d),r)<=0||(i.has(d.key)||Ju(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ri(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SR(this)}getSize(e){return M.resolve(this.size)}}class SR extends gR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class AR{constructor(e){this.persistence=e,this.ii=new wi(n=>Hf(n),qf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.si=0,this.oi=new Xf,this.targetCount=0,this._i=Es.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),M.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.hr(n),M.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.oi.containsKey(n))}}/**
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
 */class dE{constructor(e,n){this.ai={},this.overlays={},this.ui=new Gu(0),this.ci=!1,this.ci=!0,this.li=new ER,this.referenceDelegate=e(this),this.hi=new AR(this),this.indexManager=new uR,this.remoteDocumentCache=function(i){return new TR(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new aR(n),this.Ti=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new IR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new CR(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return M.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class CR extends eP{constructor(e){super(),this.currentSequenceNumber=e}}class Jf{constructor(e){this.persistence=e,this.Ai=new Xf,this.Ri=null}static Vi(e){return new Jf(e)}get mi(){if(this.Ri)return this.Ri;throw Y(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,r=>{const i=K.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return M.or([()=>M.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class mu{constructor(e,n){this.persistence=e,this.gi=new wi(r=>rP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=mR(this,n)}static Vi(e,n){return new mu(e,n)}Ii(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return M.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Pl(e.data.value)),n}Sr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zf(e,n.fromCache,r,i)}}/**
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
 */class PR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return EA()?8:tP(at())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new PR;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Mi()<=ie.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Mi()<=ie.DEBUG&&q("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Mi()<=ie.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):M.resolve())}ps(e,n){if(Cy(n))return M.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ed(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ds(n,c,o,u.readTime)?this.ps(e,Ed(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,i){return Cy(n)||i.isEqual(Z.min())?M.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?M.resolve(null):(Mi()<=ie.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.vs(e,o,n,YC(i,Jo)).next(l=>l))})}bs(e,n){let r=new Fe(H0(e));return n.forEach((i,s)=>{Ju(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Mi()<=ie.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ji(n)),this.gs.getDocumentsMatchingQuery(e,n,Rr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const ep="LocalStore",kR=3e8;class xR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Ce(ne),this.Ms=new wi(s=>Hf(s),qf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _R(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function NR(t,e,n,r){return new xR(t,e,n,r)}async function fE(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:l}))})})}function bR(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const m=c.batch,g=m.keys();let T=M.resolve();return g.forEach(R=>{T=T.next(()=>d.getEntry(u,R)).next(N=>{const b=c.docVersions.get(R);he(b!==null,48541),N.version.compareTo(b)<0&&(m.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),d.addEntry(N)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pE(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function DR(t,e){const n=te(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((d,m)=>{const g=i.get(m);if(!g)return;l.push(n.hi.removeMatchingKeys(s,d.removedDocuments,m).next(()=>n.hi.addMatchingKeys(s,d.addedDocuments,m)));let T=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(Ye.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(m,T),function(N,b,w){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=kR?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,T,d)&&l.push(n.hi.updateTargetData(s,T))});let u=$n(),c=se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(OR(s,o,e.documentUpdates).next(d=>{u=d.Ls,c=d.ks})),!r.isEqual(Z.min())){const d=n.hi.getLastRemoteSnapshotVersion(s).next(m=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Fs=i,s))}function OR(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(ep,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function VR(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=zf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LR(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=te(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ns(o))throw o;q(ep,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Fy(t,e,n){const r=te(t);let i=Z.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const m=te(u),g=m.Ms.get(d);return g!==void 0?M.resolve(m.Fs.get(g)):m.hi.getTargetData(c,d)}(r,o,vn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:se())).next(l=>(MR(r,IP(e),l),{documents:l,qs:s})))}function MR(t,e,n){let r=t.xs.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class Uy{constructor(){this.activeTargetIds=RP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jR{constructor(){this.Fo=new Uy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Uy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FR{xo(e){}shutdown(){}}/**
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
 */const zy="ConnectivityMonitor";class By{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){q(zy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){q(zy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dl=null;function Pd(){return dl===null?dl=function(){return 268435456+Math.round(2147483648*Math.random())}():dl++,"0x"+dl.toString(16)}/**
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
 */const sh="RestConnection",UR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===cu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Pd(),l=this.Go(e,n.toUriEncodedString());q(sh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:c}=new URL(l),d=Ps(c);return this.jo(e,l,u,r,d).then(m=>(q(sh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Pr(sh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=UR[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class BR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const nt="WebChannelConnection";class $R extends zR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=Pd();return new Promise((l,u)=>{const c=new g0;c.setWithCredentials(!0),c.listenOnce(y0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Cl.NO_ERROR:const m=c.getResponseJson();q(nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Cl.TIMEOUT:q(nt,`RPC '${e}' ${o} timed out`),u(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case Cl.HTTP_ERROR:const g=c.getStatus();if(q(nt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const N=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(R.status);u(new H(N,R.message))}else u(new H(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(V.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{q(nt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);q(nt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}P_(e,n,r){const i=Pd(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=w0(),l=v0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(nt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const m=o.createWebChannel(d,u);this.T_(m);let g=!1,T=!1;const R=new BR({Ho:b=>{T?q(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(q(nt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(nt,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},Yo:()=>m.close()}),N=(b,w,v)=>{b.listen(w,C=>{try{v(C)}catch(O){setTimeout(()=>{throw O},0)}})};return N(m,ho.EventType.OPEN,()=>{T||(q(nt,`RPC '${e}' stream ${i} transport opened.`),R.s_())}),N(m,ho.EventType.CLOSE,()=>{T||(T=!0,q(nt,`RPC '${e}' stream ${i} transport closed`),R.__(),this.I_(m))}),N(m,ho.EventType.ERROR,b=>{T||(T=!0,Pr(nt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),R.__(new H(V.UNAVAILABLE,"The operation could not be completed")))}),N(m,ho.EventType.MESSAGE,b=>{var w;if(!T){const v=b.data[0];he(!!v,16349);const C=v,O=(C==null?void 0:C.error)||((w=C[0])===null||w===void 0?void 0:w.error);if(O){q(nt,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let F=function(E){const S=De[E];if(S!==void 0)return tE(S)}(j),I=O.message;F===void 0&&(F=V.INTERNAL,I="Unknown error status: "+j+" with message "+O.message),T=!0,R.__(new H(F,I)),m.close()}else q(nt,`RPC '${e}' stream ${i} received:`,v),R.a_(v)}}),N(l,_0.STAT_EVENT,b=>{b.stat===pd.PROXY?q(nt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===pd.NOPROXY&&q(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function oh(){return typeof document<"u"?document:null}/**
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
 */function nc(t){return new GP(t,!0)}/**
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
 */class mE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const $y="PersistentStream";class gE{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new mE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return q($y,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(q($y,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HR extends gE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=YP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?wn(o.readTime):Z.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Ad(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=vd(u)?{documents:ZP(s,u)}:{query:eR(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=iE(s,o.resumeToken);const c=Id(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=pu(s,o.snapshotVersion.toTimestamp());const c=Id(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=nR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Ad(this.serializer),n.removeTarget=e,this.k_(n)}}class qR extends gE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=JP(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Ad(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XP(this.serializer,r))};this.k_(n)}}/**
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
 */class WR{}class GR extends WR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Td(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(V.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Td(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class KR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Bn(n),this._a=!1):q("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ui="RemoteStore";class QR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(q(ui,"Restarting streams for network reachability change."),await async function(u){const c=te(u);c.Ia.add(4),await va(c),c.Aa.set("Unknown"),c.Ia.delete(4),await rc(c)}(this))})}),this.Aa=new KR(r,i)}}async function rc(t){if(Ii(t))for(const e of t.da)await e(!0)}async function va(t){for(const e of t.da)await e(!1)}function yE(t,e){const n=te(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),ip(n)?rp(n):Ds(n).x_()&&np(n,e))}function tp(t,e){const n=te(t),r=Ds(n);n.Ta.delete(e),r.x_()&&_E(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ii(n)&&n.Aa.set("Unknown"))}function np(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).H_(e)}function _E(t,e){t.Ra.$e(e),Ds(t).Y_(e)}function rp(t){t.Ra=new $P({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.Aa.aa()}function ip(t){return Ii(t)&&!Ds(t).M_()&&t.Ta.size>0}function Ii(t){return te(t).Ia.size===0}function vE(t){t.Ra=void 0}async function YR(t){t.Aa.set("Online")}async function XR(t){t.Ta.forEach((e,n)=>{np(t,e)})}async function JR(t,e){vE(t),ip(t)?(t.Aa.la(e),rp(t)):t.Aa.set("Unknown")}async function ZR(t,e,n){if(t.Aa.set("Online"),e instanceof rE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){q(ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gu(t,r)}else if(e instanceof xl?t.Ra.Ye(e):e instanceof nE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Z.min()))try{const r=await pE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ta.get(c);d&&s.Ta.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ta.get(u);if(!d)return;s.Ta.set(u,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),_E(s,u);const m=new cr(d.target,u,c,d.sequenceNumber);np(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(ui,"Failed to raise snapshot:",r),await gu(t,r)}}async function gu(t,e,n){if(!Ns(e))throw e;t.Ia.add(1),await va(t),t.Aa.set("Offline"),n||(n=()=>pE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(ui,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await rc(t)})}function wE(t,e){return e().catch(n=>gu(t,n,e))}async function ic(t){const e=te(t),n=br(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:zf;for(;ek(e);)try{const i=await VR(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,tk(e,i)}catch(i){await gu(e,i)}EE(e)&&IE(e)}function ek(t){return Ii(t)&&t.Pa.length<10}function tk(t,e){t.Pa.push(e);const n=br(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function EE(t){return Ii(t)&&!br(t).M_()&&t.Pa.length>0}function IE(t){br(t).start()}async function nk(t){br(t).na()}async function rk(t){const e=br(t);for(const n of t.Pa)e.X_(n.mutations)}async function ik(t,e,n){const r=t.Pa.shift(),i=Kf.from(r,e,n);await wE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ic(t)}async function sk(t,e){e&&br(t).Z_&&await async function(r,i){if(function(o){return zP(o)&&o!==V.ABORTED}(i.code)){const s=r.Pa.shift();br(r).N_(),await wE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ic(r)}}(t,e),EE(t)&&IE(t)}async function Hy(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),q(ui,"RemoteStore received new credentials");const r=Ii(n);n.Ia.add(3),await va(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await rc(n)}async function ok(t,e){const n=te(t);e?(n.Ia.delete(2),await rc(n)):e||(n.Ia.add(2),await va(n),n.Aa.set("Unknown"))}function Ds(t){return t.Va||(t.Va=function(n,r,i){const s=te(n);return s.ia(),new HR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:YR.bind(null,t),e_:XR.bind(null,t),n_:JR.bind(null,t),J_:ZR.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),ip(t)?rp(t):t.Aa.set("Unknown")):(await t.Va.stop(),vE(t))})),t.Va}function br(t){return t.ma||(t.ma=function(n,r,i){const s=te(n);return s.ia(),new qR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:nk.bind(null,t),n_:sk.bind(null,t),ea:rk.bind(null,t),ta:ik.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await ic(t)):(await t.ma.stop(),t.Pa.length>0&&(q(ui,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class sp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new sp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Ns(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ss{static emptySet(e){return new ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class qy{constructor(){this.fa=new Ce(K.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Y(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Is(e,n,ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class ak{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class lk{constructor(){this.queries=Wy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Wy(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function Wy(){return new wi(t=>$0(t),Xu)}async function TE(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new ak,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=op(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&ap(n)}async function SE(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uk(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&ap(n)}function ck(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function ap(t){t.Da.forEach(e=>{e.next()})}var Rd,Gy;(Gy=Rd||(Rd={})).Fa="default",Gy.Cache="cache";class AE{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Rd.Cache}}/**
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
 */class CE{constructor(e){this.key=e}}class PE{constructor(e){this.key=e}}class hk{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=se(),this.mutatedKeys=se(),this.Xa=H0(e),this.eu=new ss(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new qy,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,m)=>{const g=i.get(d),T=Ju(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let b=!1;g&&T?g.data.isEqual(T.data)?R!==N&&(r.track({type:3,doc:T}),b=!0):this.iu(g,T)||(r.track({type:2,doc:T}),b=!0,(u&&this.Xa(T,u)>0||c&&this.Xa(T,c)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),b=!0):g&&!T&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(T?(o=o.add(T),s=N?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((d,m)=>function(T,R){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{At:b})}};return N(T)-N(R)}(d.type,m.type)||this.Xa(d.doc,m.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new Is(this.query,e.eu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new qy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=se(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new PE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new CE(r))}),n}uu(e){this.Ha=e.qs,this.Za=se();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Is.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const lp="SyncEngine";class dk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fk{constructor(e){this.key=e,this.lu=!1}}class pk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new wi(l=>$0(l),Xu),this.Tu=new Map,this.Iu=new Set,this.du=new Ce(K.comparator),this.Eu=new Map,this.Au=new Xf,this.Ru={},this.Vu=new Map,this.mu=Es.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function mk(t,e,n=!0){const r=DE(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await RE(r,e,n,!0),i}async function gk(t,e){const n=DE(t);await RE(n,e,!0,!1)}async function RE(t,e,n,r){const i=await LR(t.localStore,vn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await yk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&yE(t.remoteStore,i),l}async function yk(t,e,n,r,i){t.gu=(m,g,T)=>async function(N,b,w,v){let C=b.view.nu(w);C.Ds&&(C=await Fy(N.localStore,b.query,!1).then(({documents:I})=>b.view.nu(I,C)));const O=v&&v.targetChanges.get(b.targetId),j=v&&v.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(C,N.isPrimaryClient,O,j);return Qy(N,b.targetId,F._u),F.snapshot}(t,m,g,T);const s=await Fy(t.localStore,e,!0),o=new hk(e,s.qs),l=o.nu(s.documents),u=_a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Qy(t,n,c._u);const d=new dk(e,n,o);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function _k(t,e,n){const r=te(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Xu(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&tp(r.remoteStore,i.targetId),kd(r,i.targetId)}).catch(xs)):(kd(r,i.targetId),await Cd(r.localStore,i.targetId,!0))}async function vk(t,e){const n=te(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tp(n.remoteStore,r.targetId))}async function wk(t,e,n){const r=Pk(t);try{const i=await function(o,l){const u=te(o),c=ve.now(),d=l.reduce((T,R)=>T.add(R.key),se());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=$n(),N=se();return u.Os.getEntries(T,d).next(b=>{R=b,R.forEach((w,v)=>{v.isValidDocument()||(N=N.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(b=>{m=b;const w=[];for(const v of l){const C=LP(v,m.get(v.key).overlayedDocument);C!=null&&w.push(new Ei(v.key,C,V0(C.value.mapValue),sn.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,w,l)}).next(b=>{g=b;const w=b.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(T,b.batchId,w)})}).then(()=>({batchId:g.batchId,changes:W0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new Ce(ne)),c=c.insert(l,u),o.Ru[o.currentUser.toKey()]=c}(r,i.batchId,n),await wa(r,i.changes),await ic(r.remoteStore)}catch(i){const s=op(i,"Failed to persist write");n.reject(s)}}async function kE(t,e){const n=te(t);try{const r=await DR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?he(o.lu,14607):i.removedDocuments.size>0&&(he(o.lu,42227),o.lu=!1))}),await wa(n,r,e)}catch(r){await xs(r)}}function Ky(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((d,m)=>{for(const g of m.wa)g.va(l)&&(c=!0)}),c&&ap(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ek(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Ce(K.comparator);o=o.insert(s,st.newNoDocument(s,Z.min()));const l=se().add(s),u=new tc(Z.min(),new Map,new Ce(ne),o,l);await kE(r,u),r.du=r.du.remove(s),r.Eu.delete(e),up(r)}else await Cd(r.localStore,e,!1).then(()=>kd(r,e,n)).catch(xs)}async function Ik(t,e){const n=te(t),r=e.batch.batchId;try{const i=await bR(n.localStore,e);NE(n,r,null),xE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wa(n,i)}catch(i){await xs(i)}}async function Tk(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(he(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);NE(r,e,n),xE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wa(r,i)}catch(i){await xs(i)}}function xE(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function NE(t,e,n){const r=te(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function kd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||bE(t,r)})}function bE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(tp(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),up(t))}function Qy(t,e,n){for(const r of n)r instanceof CE?(t.Au.addReference(r.key,e),Sk(t,r)):r instanceof PE?(q(lp,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||bE(t,r.key)):Y(19791,{yu:r})}function Sk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(q(lp,"New document in limbo: "+n),t.Iu.add(r),up(t))}function up(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new K(me.fromString(e)),r=t.mu.next();t.Eu.set(r,new fk(n)),t.du=t.du.insert(n,r),yE(t.remoteStore,new cr(vn(Yu(n.path)),r,"TargetPurposeLimboResolution",Gu.ue))}}async function wa(t,e,n){const r=te(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Zf.Es(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(c,g=>M.forEach(g.Is,T=>d.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>M.forEach(g.ds,T=>d.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!Ns(m))throw m;q(ep,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const T=d.Fs.get(g),R=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(R);d.Fs=d.Fs.insert(g,N)}}}(r.localStore,s))}async function Ak(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){q(lp,"User change. New user:",e.toKey());const r=await fE(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wa(n,r.Bs)}}function Ck(t,e){const n=te(t),r=n.Eu.get(e);if(r&&r.lu)return se().add(r.key);{let i=se();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function DE(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ck.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ek.bind(null,e),e.hu.J_=uk.bind(null,e.eventManager),e.hu.pu=ck.bind(null,e.eventManager),e}function Pk(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ik.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tk.bind(null,e),e}class yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return NR(this.persistence,new RR,e.initialUser,this.serializer)}Du(e){return new dE(Jf.Vi,this.serializer)}bu(e){return new jR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yu.provider={build:()=>new yu};class Rk extends yu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){he(this.persistence.referenceDelegate instanceof mu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new dE(r=>mu.Vi(r,n),this.serializer)}}class xd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ky(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ak.bind(null,this.syncEngine),await ok(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lk}()}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=function(s){return new $R(s)}(e.databaseInfo);return function(s,o,l,u){return new GR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new QR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ky(this.syncEngine,n,0),function(){return By.C()?new By:new FR}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const m=new pk(i,s,o,l,u,c);return d&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);q(ui,"RemoteStore shutting down."),s.Ia.add(5),await va(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xd.provider={build:()=>new xd};/**
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
 */class OE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Dr="FirestoreClient";class kk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=Uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=op(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ah(t,e){t.asyncQueue.verifyOperationInProgress(),q(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Pr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{q("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Pr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function Yy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xk(t);q(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hy(e.remoteStore,i)),t._onlineComponents=e}async function xk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Dr,"Using user provided OfflineComponentProvider");try{await ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Pr("Error using user provided cache. Falling back to memory cache: "+n),await ah(t,new yu)}}else q(Dr,"Using default OfflineComponentProvider"),await ah(t,new Rk(void 0));return t._offlineComponents}async function VE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Dr,"Using user provided OnlineComponentProvider"),await Yy(t,t._uninitializedComponentsProvider._online)):(q(Dr,"Using default OnlineComponentProvider"),await Yy(t,new xd))),t._onlineComponents}function Nk(t){return VE(t).then(e=>e.syncEngine)}async function Nd(t){const e=await VE(t),n=e.eventManager;return n.onListen=mk.bind(null,e.syncEngine),n.onUnlisten=_k.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=gk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vk.bind(null,e.syncEngine),n}function bk(t,e,n={}){const r=new Ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new OE({next:g=>{d.Ou(),o.enqueueAndForget(()=>SE(s,m));const T=g.docs.has(l);!T&&g.fromCache?c.reject(new H(V.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&u&&u.source==="server"?c.reject(new H(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new AE(Yu(l.path),d,{includeMetadataChanges:!0,ka:!0});return TE(s,m)}(await Nd(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function LE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Xy=new Map;/**
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
 */const ME="firestore.googleapis.com",Jy=!0;class Zy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ME,this.ssl=Jy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Jy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hR)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UC;switch(r.type){case"firstParty":return new HC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xy.get(n);r&&(q("ComponentProvider","Removing Datastore"),Xy.delete(n),r.terminate())}(this),Promise.resolve()}}function Dk(t,e,n,r={}){var i;t=_n(t,sc);const s=Ps(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(o0(`https://${u}`),a0("Firestore",!0)),o.host!==ME&&o.host!==u&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Cr(c,l)&&(t._setSettings(c),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=rt.MOCK_USER;else{d=fA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new rt(g)}t._authCredentials=new zC(new I0(d,m))}}/**
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
 */class Ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ti(this.firestore,e,this._query)}}class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ga(n,be._jsonSchema))return new be(e,r||null,new K(me.fromString(n.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Le("string",be._jsonSchemaVersion),referencePath:Le("string")};class Tr extends Ti{constructor(e,n,r){super(e,n,Yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new K(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function cp(t,e,...n){if(t=$e(t),S0("collection","path",e),t instanceof sc){const r=me.fromString(e,...n);return dy(r),new Tr(t,null,r)}{if(!(t instanceof be||t instanceof Tr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return dy(r),new Tr(t.firestore,null,r)}}function Si(t,e,...n){if(t=$e(t),arguments.length===1&&(e=Uf.newId()),S0("doc","path",e),t instanceof sc){const r=me.fromString(e,...n);return hy(r),new be(t,null,new K(r))}{if(!(t instanceof be||t instanceof Tr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return hy(r),new be(t.firestore,t instanceof Tr?t.converter:null,new K(r))}}/**
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
 */const e_="AsyncQueue";class t_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new mE(this,"async_queue_retry"),this.oc=()=>{const r=oh();r&&q(e_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=oh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Ir;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ns(e))throw e;q(e_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Bn("INTERNAL UNHANDLED ERROR: ",n_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=sp.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Y(47125,{hc:n_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function n_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function r_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ci extends sc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new t_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t_(e),this._firestoreClient=void 0,await e}}}function Ok(t,e){const n=typeof t=="object"?t:jf(),r=typeof t=="string"?t:cu,i=_i(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hA("firestore");s&&Dk(i,...s)}return i}function hp(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Vk(t),t._firestoreClient}function Vk(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new oP(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,LE(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new kk(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(Ye.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ga(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:Le("string",Ft._jsonSchemaVersion),bytes:Le("string")};/**
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
 */class dp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fp{constructor(e){this._methodName=e}}/**
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
 */class En{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(ga(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:Le("string",En._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:In._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ga(e,In._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new In(e.vectorValues);throw new H(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}In._jsonSchemaVersion="firestore/vectorValue/1.0",In._jsonSchema={type:Le("string",In._jsonSchemaVersion),vectorValues:Le("object")};/**
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
 */const Lk=/^__.*__$/;class Mk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new ya(e,this.data,n,this.fieldTransforms)}}function jE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ec:t})}}class pp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new pp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return _u(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(jE(this.Ec)&&Lk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class jk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nc(e)}Dc(e,n,r,i=!1){return new pp({Ec:e,methodName:n,bc:r,path:Ge.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mp(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new jk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FE(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);BE("Data must be an object, but it was:",o,r);const l=UE(r,o);let u,c;if(s.merge)u=new en(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const m of s.mergeFields){const g=Uk(e,m,n);if(!o.contains(g))throw new H(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Bk(d,g)||d.push(g)}u=new en(d),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new Mk(new jt(l),u,c)}class gp extends fp{_toFieldTransform(e){return new bP(e.path,new ra)}isEqual(e){return e instanceof gp}}function Fk(t,e,n,r=!1){return yp(n,t.Dc(r?4:3,e))}function yp(t,e){if(zE(t=$e(t)))return BE("Unsupported field value:",e,t),UE(t,e);if(t instanceof fp)return function(r,i){if(!jE(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=yp(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ve.fromDate(r);return{timestampValue:pu(i.serializer,s)}}if(r instanceof ve){const s=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pu(i.serializer,s)}}if(r instanceof En)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:iE(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof In)return function(o,l){return{mapValue:{fields:{[D0]:{stringValue:O0},[hu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.wc("VectorValues must only contain numeric values.");return Wf(l.serializer,c)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Wu(r)}`)}(t,e)}function UE(t,e){const n={};return P0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vi(t,(r,i)=>{const s=yp(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof En||t instanceof Ft||t instanceof be||t instanceof fp||t instanceof In)}function BE(t,e,n){if(!zE(n)||!A0(n)){const r=Wu(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Uk(t,e,n){if((e=$e(e))instanceof dp)return e._internalPath;if(typeof e=="string")return $E(t,e);throw _u("Field path arguments must be of type string or ",t,!1,void 0,n)}const zk=new RegExp("[~\\*/\\[\\]]");function $E(t,e,n){if(e.search(zk)>=0)throw _u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dp(...e.split("."))._internalPath}catch{throw _u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function Bk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class HE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $k(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_p("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $k extends HE{data(){return super.data()}}function _p(t,e){return typeof e=="string"?$E(t,e):e instanceof dp?e._internalPath:e._delegate._internalPath}/**
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
 */function Hk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vp{}class qE extends vp{}function qk(t,e,...n){let r=[];e instanceof vp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ep).length,l=s.filter(u=>u instanceof wp).length;if(o>1||o>0&&l>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class wp extends qE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wp(e,n,r)}_apply(e){const n=this._parse(e);return WE(e._query,n),new Ti(e.firestore,e.converter,wd(e._query,n))}_parse(e){const n=mp(e.firestore);return function(s,o,l,u,c,d,m){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){s_(m,d);const R=[];for(const N of m)R.push(i_(u,s,N));g={arrayValue:{values:R}}}else g=i_(u,s,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||s_(m,d),g=Fk(l,o,m,d==="in"||d==="not-in");return Ve.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ep extends vp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ep(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)WE(o,u),o=wd(o,u)}(e._query,n),new Ti(e.firestore,e.converter,wd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ip extends qE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ip(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new na(s,o)}(e._query,this._field,this._direction);return new Ti(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new bs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Wk(t,e="asc"){const n=e,r=_p("orderBy",t);return Ip._create(r,n)}function i_(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!B0(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!K.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wy(t,new K(r))}if(n instanceof be)return wy(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wu(n)}.`)}function s_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function WE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Gk{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[hu].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>xe(o.doubleValue));return new In(s)}convertGeoPoint(e){return new En(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);he(cE(r),9688,{name:e});const i=new ea(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function GE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ti extends HE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_p("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ti._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ti._jsonSchemaVersion="firestore/documentSnapshot/1.0",ti._jsonSchema={type:Le("string",ti._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class Nl extends ti{data(e={}){return super.data(e)}}class os{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nl(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Nl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Nl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:Kk(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Kk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */function go(t){t=_n(t,be);const e=_n(t.firestore,ci);return bk(hp(e),t._key).then(n=>QE(e,t,n))}os._jsonSchemaVersion="firestore/querySnapshot/1.0",os._jsonSchema={type:Le("string",os._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};class KE extends Gk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function ni(t,e,n){t=_n(t,be);const r=_n(t.firestore,ci),i=GE(t.converter,e,n);return Tp(r,[FE(mp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function Qk(t){return Tp(_n(t.firestore,ci),[new Gf(t._key,sn.none())])}function Yk(t,e){const n=_n(t.firestore,ci),r=Si(t),i=GE(t.converter,e);return Tp(n,[FE(mp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function No(t,...e){var n,r,i;t=$e(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||r_(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(r_(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,c,d;if(t instanceof be)c=_n(t.firestore,ci),d=Yu(t._key.path),u={next:m=>{e[o]&&e[o](QE(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=_n(t,Ti);c=_n(m.firestore,ci),d=m._query;const g=new KE(c);u={next:T=>{e[o]&&e[o](new os(c,g,m,T))},error:e[o+1],complete:e[o+2]},Hk(t._query)}return function(g,T,R,N){const b=new OE(N),w=new AE(T,b,R);return g.asyncQueue.enqueueAndForget(async()=>TE(await Nd(g),w)),()=>{b.Ou(),g.asyncQueue.enqueueAndForget(async()=>SE(await Nd(g),w))}}(hp(c),d,l,u)}function Tp(t,e){return function(r,i){const s=new Ir;return r.asyncQueue.enqueueAndForget(async()=>wk(await Nk(r),i,s)),s.promise}(hp(t),e)}function QE(t,e,n){const r=n.docs.get(e._key),i=new KE(t);return new ti(t,i,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}function Zt(){return new gp("serverTimestamp")}(function(e,n=!0){(function(i){ks=i})(Rs),Sn(new ln("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ci(new BC(r.getProvider("auth-internal")),new qC(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Bt(oy,ay,e),Bt(oy,ay,"esm2017")})();var Xk="firebase",Jk="11.10.0";/**
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
 */Bt(Xk,Jk,"app");const YE="@firebase/installations",Sp="0.6.18";/**
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
 */const XE=1e4,JE=`w:${Sp}`,ZE="FIS_v2",Zk="https://firebaseinstallations.googleapis.com/v1",ex=60*60*1e3,tx="installations",nx="Installations";/**
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
 */const rx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hi=new yi(tx,nx,rx);function eI(t){return t instanceof cn&&t.code.includes("request-failed")}/**
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
 */function tI({projectId:t}){return`${Zk}/projects/${t}/installations`}function nI(t){return{token:t.token,requestStatus:2,expiresIn:sx(t.expiresIn),creationTime:Date.now()}}async function rI(t,e){const r=(await e.json()).error;return hi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function iI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ix(t,{refreshToken:e}){const n=iI(t);return n.append("Authorization",ox(e)),n}async function sI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sx(t){return Number(t.replace("s","000"))}function ox(t){return`${ZE} ${t}`}/**
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
 */async function ax({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=tI(t),i=iI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:ZE,appId:t.appId,sdkVersion:JE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await sI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:nI(c.authToken)}}else throw await rI("Create Installation",u)}/**
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
 */function oI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function lx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ux=/^[cdef][\w-]{21}$/,bd="";function cx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=hx(t);return ux.test(n)?n:bd}catch{return bd}}function hx(t){return lx(t).substr(0,22)}/**
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
 */function oc(t){return`${t.appName}!${t.appId}`}/**
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
 */const aI=new Map;function lI(t,e){const n=oc(t);uI(n,e),dx(n,e)}function uI(t,e){const n=aI.get(t);if(n)for(const r of n)r(e)}function dx(t,e){const n=fx();n&&n.postMessage({key:t,fid:e}),px()}let Xr=null;function fx(){return!Xr&&"BroadcastChannel"in self&&(Xr=new BroadcastChannel("[Firebase] FID Change"),Xr.onmessage=t=>{uI(t.data.key,t.data.fid)}),Xr}function px(){aI.size===0&&Xr&&(Xr.close(),Xr=null)}/**
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
 */const mx="firebase-installations-database",gx=1,di="firebase-installations-store";let lh=null;function Ap(){return lh||(lh=h0(mx,gx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}})),lh}async function vu(t,e){const n=oc(t),i=(await Ap()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&lI(t,e.fid),e}async function cI(t){const e=oc(t),r=(await Ap()).transaction(di,"readwrite");await r.objectStore(di).delete(e),await r.done}async function ac(t,e){const n=oc(t),i=(await Ap()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&lI(t,l.fid),l}/**
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
 */async function Cp(t){let e;const n=await ac(t.appConfig,r=>{const i=yx(r),s=_x(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===bd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yx(t){const e=t||{fid:cx(),registrationStatus:0};return hI(e)}function _x(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wx(t)}:{installationEntry:e}}async function vx(t,e){try{const n=await ax(t,e);return vu(t.appConfig,n)}catch(n){throw eI(n)&&n.customData.serverCode===409?await cI(t.appConfig):await vu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wx(t){let e=await o_(t.appConfig);for(;e.registrationStatus===1;)await oI(100),e=await o_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cp(t);return r||n}return e}function o_(t){return ac(t,e=>{if(!e)throw hi.create("installation-not-found");return hI(e)})}function hI(t){return Ex(t)?{fid:t.fid,registrationStatus:0}:t}function Ex(t){return t.registrationStatus===1&&t.registrationTime+XE<Date.now()}/**
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
 */async function Ix({appConfig:t,heartbeatServiceProvider:e},n){const r=Tx(t,n),i=ix(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:JE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await sI(()=>fetch(r,l));if(u.ok){const c=await u.json();return nI(c)}else throw await rI("Generate Auth Token",u)}function Tx(t,{fid:e}){return`${tI(t)}/${e}/authTokens:generate`}/**
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
 */async function Pp(t,e=!1){let n;const r=await ac(t.appConfig,s=>{if(!dI(s))throw hi.create("not-registered");const o=s.authToken;if(!e&&Cx(o))return s;if(o.requestStatus===1)return n=Sx(t,e),s;{if(!navigator.onLine)throw hi.create("app-offline");const l=Rx(s);return n=Ax(t,l),l}});return n?await n:r.authToken}async function Sx(t,e){let n=await a_(t.appConfig);for(;n.authToken.requestStatus===1;)await oI(100),n=await a_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pp(t,e):r}function a_(t){return ac(t,e=>{if(!dI(e))throw hi.create("not-registered");const n=e.authToken;return kx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ax(t,e){try{const n=await Ix(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await vu(t.appConfig,r),n}catch(n){if(eI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vu(t.appConfig,r)}throw n}}function dI(t){return t!==void 0&&t.registrationStatus===2}function Cx(t){return t.requestStatus===2&&!Px(t)}function Px(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ex}function Rx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function kx(t){return t.requestStatus===1&&t.requestTime+XE<Date.now()}/**
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
 */async function xx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Cp(e);return r?r.catch(console.error):Pp(e).catch(console.error),n.fid}/**
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
 */async function Nx(t,e=!1){const n=t;return await bx(n),(await Pp(n,e)).token}async function bx(t){const{registrationPromise:e}=await Cp(t);e&&await e}/**
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
 */function Dx(t){if(!t||!t.options)throw uh("App Configuration");if(!t.name)throw uh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uh(t){return hi.create("missing-app-config-values",{valueName:t})}/**
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
 */const fI="installations",Ox="installations-internal",Vx=t=>{const e=t.getProvider("app").getImmediate(),n=Dx(e),r=_i(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lx=t=>{const e=t.getProvider("app").getImmediate(),n=_i(e,fI).getImmediate();return{getId:()=>xx(n),getToken:i=>Nx(n,i)}};function Mx(){Sn(new ln(fI,Vx,"PUBLIC")),Sn(new ln(Ox,Lx,"PRIVATE"))}Mx();Bt(YE,Sp);Bt(YE,Sp,"esm2017");/**
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
 */const wu="analytics",jx="firebase_id",Fx="origin",Ux=60*1e3,zx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rp="https://www.googletagmanager.com/gtag/js";/**
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
 */const It=new qu("@firebase/analytics");/**
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
 */const Bx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new yi("analytics","Analytics",Bx);/**
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
 */function $x(t){if(!t.startsWith(Rp)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function pI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Hx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function qx(t,e){const n=Hx("firebase-js-sdk-policy",{createScriptURL:$x}),r=document.createElement("script"),i=`${Rp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Wx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Gx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await pI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){It.error(l)}t("config",i,s)}async function Kx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await pI(n);for(const u of o){const c=l.find(m=>m.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function Qx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Kx(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Gx(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){It.error(l)}}return i}function Yx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Qx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Xx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rp)&&n.src.includes(t))return n;return null}/**
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
 */const Jx=30,Zx=1e3;class eN{constructor(e={},n=Zx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mI=new eN;function tN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function nN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:tN(r)},s=zx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function rN(t,e=mI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new oN;return setTimeout(async()=>{l.abort()},Ux),gI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function gI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=mI){var s;const{appId:o,measurementId:l}=t;try{await iN(r,e)}catch(u){if(l)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await nN(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!sN(c)){if(i.deleteThrottleMetadata(o),l)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Yg(n,i.intervalMillis,Jx):Yg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,m),It.debug(`Calling attemptFetch again in ${d} millis`),gI(t,m,r,i)}}function iN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sN(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class oN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function lN(){if(Vf())try{await Lf()}catch(t){return It.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uN(t,e,n,r,i,s,o){var l;const u=rN(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>It.error(T)),e.push(u);const c=lN().then(T=>{if(T)return r.getId()}),[d,m]=await Promise.all([u,c]);Xx(s)||qx(s,d.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[Fx]="firebase",g.update=!0,m!=null&&(g[jx]=m),i("config",d.measurementId,g),d.measurementId}/**
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
 */class cN{constructor(e){this.app=e}_delete(){return delete bo[this.app.options.appId],Promise.resolve()}}let bo={},l_=[];const u_={};let ch="dataLayer",hN="gtag",c_,yI,h_=!1;function dN(){const t=[];if(Of()&&t.push("This is a browser extension environment."),l0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function fN(t,e,n){dN();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(bo[r]!=null)throw Rt.create("already-exists",{id:r});if(!h_){Wx(ch);const{wrappedGtag:s,gtagCore:o}=Yx(bo,l_,u_,ch,hN);yI=s,c_=o,h_=!0}return bo[r]=uN(t,l_,u_,e,c_,ch,n),new cN(t)}function pN(t=jf()){t=$e(t);const e=_i(t,wu);return e.isInitialized()?e.getImmediate():mN(t)}function mN(t,e={}){const n=_i(t,wu);if(n.isInitialized()){const i=n.getImmediate();if(Cr(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}async function gN(){if(Of()||!l0()||!Vf())return!1;try{return await Lf()}catch{return!1}}function yN(t,e,n,r){t=$e(t),aN(yI,bo[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const d_="@firebase/analytics",f_="0.10.17";function _N(){Sn(new ln(wu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return fN(r,i,n)},"PUBLIC")),Sn(new ln("analytics-internal",t,"PRIVATE")),Bt(d_,f_),Bt(d_,f_,"esm2017");function t(e){try{const n=e.getProvider(wu).getImmediate();return{logEvent:(r,i,s)=>yN(n,r,i,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}_N();function kp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _I(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vN=_I,vI=new yi("auth","Firebase",_I());/**
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
 */const Eu=new qu("@firebase/auth");function wN(t,...e){Eu.logLevel<=ie.WARN&&Eu.warn(`Auth (${Rs}): ${t}`,...e)}function bl(t,...e){Eu.logLevel<=ie.ERROR&&Eu.error(`Auth (${Rs}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Np(t,...e)}function on(t,...e){return Np(t,...e)}function xp(t,e,n){const r=Object.assign(Object.assign({},vN()),{[e]:n});return new yi("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return xp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function EN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(t,"argument-error"),xp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Np(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vI.create(t,...e)}function Q(t,e,...n){if(!t)throw Np(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function Hn(t,e){t||Dn(e)}/**
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
 */function Dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IN(){return p_()==="http:"||p_()==="https:"}function p_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IN()||Of()||"connection"in navigator)?navigator.onLine:!0}function SN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=gA()||vA()}get(){return TN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bp(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PN=new Ea(3e4,6e4);function Gn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,i={}){return EI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ma(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return _A()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(c.credentials="include"),wI.fetch()(await II(t,t.config.apiHost,n,l),c)})}async function EI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AN),e);try{const i=new kN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw fl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xp(t,d,c);qt(t,d)}}catch(i){if(i instanceof cn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function Ia(t,e,n,r,i={}){const s=await Kn(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function II(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?bp(t.config,i):`${t.config.apiScheme}://${i}`;return CN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function RN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),PN.get())})}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function m_(t){return t!==void 0&&t.enterprise!==void 0}class xN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NN(t,e){return Kn(t,"GET","/v2/recaptchaConfig",Gn(t,e))}/**
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
 */async function bN(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function Iu(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Do(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DN(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=Dp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Do(hh(i.auth_time)),issuedAtTime:Do(hh(i.iat)),expirationTime:Do(hh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hh(t){return Number(t)*1e3}function Dp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=n0(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function g_(t){const e=Dp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function oa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&ON(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ON({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Do(this.lastLoginAt),this.creationTime=Do(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await oa(t,Iu(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TI(s.providerUserInfo):[],l=MN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Od(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function LN(t){const e=$e(t);await Tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TI(t){return t.map(e=>{var{providerId:n}=e,r=kp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jN(t,e){const n=await EI(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await II(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(u.credentials="include"),wI.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FN(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",Gn(t,e))}/**
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
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):g_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=g_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new as;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function er(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Od(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await oa(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DN(this,e)}reload(){return LN(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await oa(this,bN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:O,isAnonymous:j,providerData:F,stsTokenManager:I}=n;Q(C&&I,e,"internal-error");const _=as.fromJSON(this.name,I);Q(typeof C=="string",e,"internal-error"),er(m,e.name),er(g,e.name),Q(typeof O=="boolean",e,"internal-error"),Q(typeof j=="boolean",e,"internal-error"),er(T,e.name),er(R,e.name),er(N,e.name),er(b,e.name),er(w,e.name),er(v,e.name);const E=new tn({uid:C,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:j,photoURL:R,phoneNumber:T,tenantId:N,stsTokenManager:_,createdAt:w,lastLoginAt:v});return F&&Array.isArray(F)&&(E.providerData=F.map(S=>Object.assign({},S))),b&&(E._redirectEventId=b),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new as;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?TI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new as;l.updateFromIdToken(r);const u=new tn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Od(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const y_=new Map;function On(t){Hn(t instanceof Function,"Expected a class definition");let e=y_.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,y_.set(t,e),e)}/**
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
 */class SI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}SI.type="NONE";const __=SI;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Iu(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(On(__),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||On(__);const o=Dl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let m;if(typeof d=="string"){const g=await Iu(e,{idToken:d}).catch(()=>{});if(!g)break;m=await tn._fromGetAccountInfoResponse(e,g,d)}else m=tn._fromJSON(e,d);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ls(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ls(s,e,r))}}/**
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
 */function v_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(RI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xI(e))return"Blackberry";if(NI(e))return"Webos";if(CI(e))return"Safari";if((e.includes("chrome/")||PI(e))&&!e.includes("edge/"))return"Chrome";if(kI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AI(t=at()){return/firefox\//i.test(t)}function CI(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PI(t=at()){return/crios\//i.test(t)}function RI(t=at()){return/iemobile/i.test(t)}function kI(t=at()){return/android/i.test(t)}function xI(t=at()){return/blackberry/i.test(t)}function NI(t=at()){return/webos/i.test(t)}function Op(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UN(t=at()){var e;return Op(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zN(){return wA()&&document.documentMode===10}function bI(t=at()){return Op(t)||kI(t)||NI(t)||xI(t)||/windows phone/i.test(t)||RI(t)}/**
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
 */function DI(t,e=[]){let n;switch(t){case"Browser":n=v_(at());break;case"Worker":n=`${v_(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
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
 */class BN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $N(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",Gn(t,e))}/**
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
 */const HN=6;class qN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class WN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new w_(this),this.idTokenSubscription=new w_(this),this.beforeStateQueue=new BN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Iu(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(Ln(this));const n=e?$e(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $N(this),n=new qN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qn(t){return $e(t)}class w_{constructor(e){this.auth=e,this.observer=null,this.addObserver=CA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GN(t){lc=t}function OI(t){return lc.loadJS(t)}function KN(){return lc.recaptchaEnterpriseScript}function QN(){return lc.gapiScript}function YN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class XN{constructor(){this.enterprise=new JN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class JN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ZN="recaptcha-enterprise",VI="NO_RECAPTCHA";class e2{constructor(e){this.type=ZN,this.auth=Qn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{NN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new xN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;m_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(VI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&m_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=KN();u.length!==0&&(u+=l),OI(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function E_(t,e,n,r=!1,i=!1){const s=new e2(t);let o;if(i)o=VI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Su(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await E_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await E_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function t2(t,e){const n=_i(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cr(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function n2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function r2(t,e,n){const r=Qn(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=LI(e),{host:o,port:l}=i2(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Cr(c,r.config.emulator)&&Cr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ps(o)?(o0(`${s}//${o}${u}`),a0("Auth",!0)):s2()}function LI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function i2(t){const e=LI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:I_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:I_(o)}}}function I_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function s2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function o2(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function a2(t,e){return Ia(t,"POST","/v1/accounts:signInWithPassword",Gn(t,e))}async function l2(t,e){return Kn(t,"POST","/v1/accounts:sendOobCode",Gn(t,e))}async function u2(t,e){return l2(t,e)}/**
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
 */async function c2(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",Gn(t,e))}async function h2(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",Gn(t,e))}/**
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
 */class aa extends Vp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new aa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new aa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Su(e,n,"signInWithPassword",a2);case"emailLink":return c2(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Su(e,r,"signUpPassword",o2);case"emailLink":return h2(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return Ia(t,"POST","/v1/accounts:signInWithIdp",Gn(t,e))}/**
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
 */const d2="http://localhost";class fi extends Vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:d2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
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
 */function f2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p2(t){const e=uo(co(t)).link,n=e?uo(co(e)).deep_link_id:null,r=uo(co(t)).deep_link_id;return(r?uo(co(r)).link:null)||r||n||e||t}class Lp{constructor(e){var n,r,i,s,o,l;const u=uo(co(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,m=f2((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&d&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=p2(e);try{return new Lp(n)}catch{return null}}}/**
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
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return aa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lp.parseLink(n);return Q(r,"argument-error"),aa._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ta extends Mp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends Ta{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class mn extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class or extends Ta{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends Ta{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function m2(t,e){return Ia(t,"POST","/v1/accounts:signUp",Gn(t,e))}/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await tn._fromIdTokenResponse(e,r,i),o=T_(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=T_(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function T_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Au extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Au(e,n,r,i)}}function MI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,s,e,r):s})}async function g2(t,e,n=!1){const r=await oa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
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
 */async function y2(t,e,n=!1){const{auth:r}=t;if(At(r.app))return Promise.reject(Ln(r));const i="reauthenticate";try{const s=await oa(t,MI(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Dp(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
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
 */async function jI(t,e,n=!1){if(At(t.app))return Promise.reject(Ln(t));const r="signIn",i=await MI(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _2(t,e){return jI(Qn(t),e)}/**
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
 */async function FI(t){const e=Qn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v2(t,e,n){const r=Qn(t);await Su(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",u2)}async function w2(t,e,n){if(At(t.app))return Promise.reject(Ln(t));const r=Qn(t),o=await Su(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",m2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&FI(t),u}),l=await pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function E2(t,e,n){return At(t.app)?Promise.reject(Ln(t)):_2($e(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&FI(t),r})}function I2(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function T2(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function S2(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function A2(t){return $e(t).signOut()}const Cu="__sak";/**
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
 */class UI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cu,"1"),this.storage.removeItem(Cu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const C2=1e3,P2=10;class zI extends UI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,P2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zI.type="LOCAL";const R2=zI;/**
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
 */class BI extends UI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BI.type="SESSION";const $I=BI;/**
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
 */function k2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await k2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
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
 */function jp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class x2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=jp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tn(){return window}function N2(t){Tn().location.href=t}/**
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
 */function HI(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function b2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function O2(){return HI()?self:null}/**
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
 */const qI="firebaseLocalStorageDb",V2=1,Pu="firebaseLocalStorage",WI="fbase_key";class Sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([Pu],e?"readwrite":"readonly").objectStore(Pu)}function L2(){const t=indexedDB.deleteDatabase(qI);return new Sa(t).toPromise()}function Vd(){const t=indexedDB.open(qI,V2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pu,{keyPath:WI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pu)?e(r):(r.close(),await L2(),e(await Vd()))})})}async function S_(t,e,n){const r=cc(t,!0).put({[WI]:e,value:n});return new Sa(r).toPromise()}async function M2(t,e){const n=cc(t,!1).get(e),r=await new Sa(n).toPromise();return r===void 0?null:r.value}function A_(t,e){const n=cc(t,!0).delete(e);return new Sa(n).toPromise()}const j2=800,F2=3;class GI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(O2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await b2(),!this.activeServiceWorker)return;this.sender=new x2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vd();return await S_(e,Cu,"1"),await A_(e,Cu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>S_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>M2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cc(i,!1).getAll();return new Sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GI.type="LOCAL";const U2=GI;new Ea(3e4,6e4);/**
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
 */function KI(t,e){return e?On(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fp extends Vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function z2(t){return jI(t.auth,new Fp(t),t.bypassAuthState)}function B2(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),y2(n,new Fp(t),t.bypassAuthState)}async function $2(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),g2(n,new Fp(t),t.bypassAuthState)}/**
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
 */class QI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z2;case"linkViaPopup":case"linkViaRedirect":return $2;case"reauthViaPopup":case"reauthViaRedirect":return B2;default:qt(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H2=new Ea(2e3,1e4);async function q2(t,e,n){if(At(t.app))return Promise.reject(on(t,"operation-not-supported-in-this-environment"));const r=Qn(t);EN(t,e,Mp);const i=KI(r,n);return new Jr(r,"signInViaPopup",e,i).executeNotNull()}class Jr extends QI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H2.get())};e()}}Jr.currentPopupAction=null;/**
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
 */const W2="pendingRedirect",Ol=new Map;class G2 extends QI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await K2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K2(t,e){const n=X2(e),r=Y2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Q2(t,e){Ol.set(t._key(),e)}function Y2(t){return On(t._redirectPersistence)}function X2(t){return Dl(W2,t.config.apiKey,t.name)}async function J2(t,e,n=!1){if(At(t.app))return Promise.reject(Ln(t));const r=Qn(t),i=KI(r,e),o=await new G2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Z2=10*60*1e3;class eb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z2&&this.cachedEventUids.clear(),this.cachedEventUids.has(C_(e))}saveEventToCache(e){this.cachedEventUids.add(C_(e)),this.lastProcessedEventTime=Date.now()}}function C_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YI(t);default:return!1}}/**
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
 */async function nb(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
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
 */const rb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ib=/^https?/;async function sb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nb(t);for(const n of e)try{if(ob(n))return}catch{}qt(t,"unauthorized-domain")}function ob(t){const e=Dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ib.test(n))return!1;if(rb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ab=new Ea(3e4,6e4);function P_(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lb(t){return new Promise((e,n)=>{var r,i,s;function o(){P_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{P_(),n(on(t,"network-request-failed"))},timeout:ab.get()})}if(!((i=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tn().gapi)===null||s===void 0)&&s.load)o();else{const l=YN("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},OI(`${QN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function ub(t){return Vl=Vl||lb(t),Vl}/**
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
 */const cb=new Ea(5e3,15e3),hb="__/auth/iframe",db="emulator/auth/iframe",fb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mb(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bp(e,db):`https://${t.config.authDomain}/${hb}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=pb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function gb(t){const e=await ub(t),n=Tn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:mb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=Tn().setTimeout(()=>{s(o)},cb.get());function u(){Tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const yb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_b=500,vb=600,wb="_blank",Eb="http://localhost";class R_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ib(t,e,n,r=_b,i=vb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},yb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=at().toLowerCase();n&&(l=PI(c)?wb:n),AI(c)&&(e=e||Eb,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[T,R])=>`${g}${T}=${R},`,"");if(UN(c)&&l!=="_self")return Tb(e||"",l),new R_(null);const m=window.open(e||"",l,d);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new R_(m)}function Tb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Sb="__/auth/handler",Ab="emulator/auth/handler",Cb=encodeURIComponent("fac");async function k_(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof Mp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",AA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))o[d]=m}if(e instanceof Ta){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Cb}=${encodeURIComponent(u)}`:"";return`${Pb(t)}?${ma(l).slice(1)}${c}`}function Pb({config:t}){return t.emulator?bp(t,Ab):`https://${t.authDomain}/${Sb}`}/**
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
 */const dh="webStorageSupport";class Rb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$I,this._completeRedirectFn=J2,this._overrideRedirectResult=Q2}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await k_(e,n,r,Dd(),i);return Ib(e,o,jp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await k_(e,n,r,Dd(),i);return N2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gb(e),r=new eb(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dh,{type:dh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dh];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bI()||CI()||Op()}}const kb=Rb;var x_="@firebase/auth",N_="1.10.8";/**
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
 */class xb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bb(t){Sn(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DI(t)},c=new WN(r,i,s,u);return n2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new ln("auth-internal",e=>{const n=Qn(e.getProvider("auth").getImmediate());return(r=>new xb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(x_,N_,Nb(t)),Bt(x_,N_,"esm2017")}/**
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
 */const Db=5*60,Ob=s0("authIdTokenMaxAge")||Db;let b_=null;const Vb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ob)return;const i=n==null?void 0:n.token;b_!==i&&(b_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lb(t=jf()){const e=_i(t,"auth");if(e.isInitialized())return e.getImmediate();const n=t2(t,{popupRedirectResolver:kb,persistence:[U2,R2,$I]}),r=s0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Vb(s.toString());T2(n,o,()=>o(n.currentUser)),I2(n,l=>o(l))}}const i=r0("auth");return i&&r2(n,`http://${i}`),n}function Mb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Mb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bb("Browser");const jb={apiKey:"AIzaSyDISBc0pI8dY6CtKf0bcx-IeCVuIZlQUBQ",authDomain:"kaushalyamullegama-0058.firebaseapp.com",databaseURL:"https://kaushalyamullegama-0058-default-rtdb.firebaseio.com",projectId:"kaushalyamullegama-0058",storageBucket:"kaushalyamullegama-0058.firebasestorage.app",messagingSenderId:"542900275314",appId:"1:542900275314:web:9405bd64f145f44b92daeb"},Up=d0(jb),Li=Lb(Up),qn=Ok(Up),XI=new mn;XI.addScope("https://www.googleapis.com/auth/drive.file");gN().then(t=>t?pN(Up):null).catch(()=>null);const ke={site:{title:"Kaushalya",tagline:"Portfolio / Engineering / Design",navItems:[{id:"home",label:"Home"},{id:"blog",label:"Blog & Articles"},{id:"about",label:"About Me"}],socialLinks:[{label:"LinkedIn",href:"https://www.linkedin.com/in/kaushalya-mullegama-962b4b270/",icon:"fa-brands fa-linkedin"},{label:"GitHub",href:"https://github.com/KRBAI",icon:"fa-brands fa-github"},{label:"Instagram",href:"https://www.instagram.com/kaushalya_mullegama_2903/",icon:"fa-brands fa-instagram"},{label:"YouTube",href:"https://www.youtube.com/@kaushalyamullegama3932",icon:"fa-brands fa-youtube"}],contactDetails:{location:"Colombo, Sri Lanka",email:"krb.mullegama@gmail.com"}},hero:{eyebrow:"Portfolio / Engineering / Design",title:"Hey, I’m Kaushalya Mullegama.",description:"I’m an electronics and software enthusiast focused on innovation, from Arduino systems to seamless digital experiences.",ctaPrimary:"Explore Blog",ctaSecondary:"View Background",image:"https://static.wixstatic.com/media/3d6765_c7d6668f3ac7464f84a259bad9bd496b~mv2.png/v1/fill/w_480,h_420,al_c,q_90/Untitled%20design%20(2).png"},heroStats:[{value:"3+",label:"Core disciplines"},{value:"6",label:"Featured projects"},{value:"2026",label:"Expected graduation"}],spotlight:{tag:"Spotlight Feature",title:"A World Without Humans",description:"In a world without humans, robots would evolve beyond their programming, developing self-sustaining intelligence, forming their own societies, and advancing through technological upgrades.",image:"https://static.wixstatic.com/media/c837a6_5b71dec5d2934d45b6dc4cfcd11d038cf000.jpg/v1/fill/w_320,h_180,al_c,q_80/c837a6_5b71dec5d2934d45b6dc4cfcd11d038cf000.jpg"},featuredProjects:[{label:"Web Development",title:"Dynamic Web Portfolio",description:"A sleek and responsive website built using HTML, CSS, and JavaScript, designed to showcase projects and skills with an interactive user experience.",image:"https://static.wixstatic.com/media/3d6765_ba48ac9c59d94aa9bad62312fc183fc8~mv2.png/v1/fill/w_400,h_300,al_c,q_90/Screen%20Shot%202025-02-04%20at%2017_51_23.png"},{label:"Robotics & IoT",title:"Arduino Self Driving Car",description:"A DIY self-driving car built using Arduino boards, motor drivers, and ultrasonic arrays mapping localized spatial parameters for obstacle avoidance.",image:"https://static.wixstatic.com/media/3d6765_b91941eadad74a6e9abc4dcc0c61f7e8~mv2.avif/v1/fill/w_400,h_300,al_c,q_85/untitled-design-4-1.avif"},{label:"UI/UX Design",title:"Inventory System UX",description:"Clean, intuitive dashboard interface assets constructed in Figma emphasizing search capabilities, real-time tracking graphs, and operational management logs.",image:"https://static.wixstatic.com/media/3d6765_a8ac1b90b5734e3299a4e712b08e0f7b~mv2.png/v1/fill/w_400,h_400,al_c,q_90/Screen%20Shot%202025-02-04%20at%2017_53_02.png"}],articles:[{id:"robotics-future",category:"Robotics",title:"Rise of the Machines: How Robots Are Reshaping Our Future",description:"Robots are rapidly becoming an essential part of our daily lives. From AI-powered cobots to precision medical configurations, automation is changing industries.",image:"https://static.wixstatic.com/media/c837a6_172cf227708a485090541c3edf24018b~mv2.jpg/v1/fill/w_400,h_250,al_c,q_85/A%20dark%20robotic%20figure%20from%20the%20game%20_Atactic_.jpg",tone:"blue",commentsEnabled:!0},{id:"robotics-history",category:"AI & Robotics History",title:"From Automatons to AI: The Fascinating History of Robotics",description:"The dream of automation spans back millennia, starting with early mechanical concepts and evolving into modern humanoid and AI systems.",image:"https://static.wixstatic.com/media/c837a6_2bfdfe27559641e5ac6b4e6152d7dfa4~mv2.jpg/v1/fill/w_400,h_250,al_c,q_85/An%20illustration%20of%20a%20man%20hiding%20in%20a%20dragon%20cave.jpg",tone:"amber",commentsEnabled:!0},{id:"robots-only-species",category:"Future Civilizations",title:"A World Without Humans: If Robots Were the Only Species",description:"If biological elements ceased to exist, artificial intelligence networks would shift from programmatic scripts toward independent operational intelligence.",image:"https://static.wixstatic.com/media/c837a6_5048c5c653ef48199db4fe7b52e968f3~mv2.jpg/v1/fill/w_400,h_250,al_c,q_85/c837a6_5048c5c653ef48199db4fe7b52e968f3~mv2.jpg",tone:"violet",commentsEnabled:!0}],education:[{title:"Bachelor of Science in Electronic & Telecommunication Engineering",institution:"General Sir John Kotelawala Defence University (KDU), Sri Lanka",notes:["Embedded systems, communication networks, and signal processing","Expected graduation: 2026"]},{title:"Diploma in Software Engineering",institution:"National Institute of Business Management (NIBM)",notes:["Software development models, UI/UX structures, and database pipelines","Expected completion: 2025"]}],skills:[{title:"Embedded Systems & IoT",accent:"Hardware Layers",icon:"fa-solid fa-microchip",size:"large",description:"Architecting smart systems, automation projects, and sensory arrays using micro-controllers with real-time feedback infrastructure.",chips:["Arduino","Magic bit","Firmware Design"]},{title:"Software Engineering",icon:"fa-solid fa-code",size:"small",description:"Python, Java, C++, and C for logic-heavy development tasks.",chips:["Python","Java","C++","C"]},{title:"Web Interfaces",icon:"fa-solid fa-globe",size:"small",description:"Responsive structures and interactive layouts using modular styling paradigms.",chips:["HTML5","CSS3","JavaScript"]},{title:"UI/UX Layouts",accent:"Design Matrices",icon:"fa-solid fa-bezier-curve",size:"small",description:"Wireframes, visual hierarchy, and interface systems that keep user flows clean.",chips:["Figma","Adobe XD"]},{title:"Photography & Digital Art",icon:"fa-solid fa-camera",size:"wide",description:"Capturing perspectives and manipulating assets with digital creativity.",chips:["Composition","Asset Design","Visual Storytelling"]}],certifications:[{title:"Web Design for Beginners",image:"https://static.wixstatic.com/media/3d6765_e581008f54b34cb3b221ea517348b4bb~mv2.png/v1/fill/w_480,h_340,al_c,q_90/Screen%20Shot%202025-02-04%20at%2010_40_27.png"},{title:"Get Started with Figma",image:"https://static.wixstatic.com/media/3d6765_c8422b4641384aba8b959a0750cdccbf~mv2.png/v1/fill/w_480,h_360,al_c,q_90/Screen%20Shot%202025-02-04%20at%2010_43_22.png"}],about:{eyebrow:"About me",title:"About Kaushalya",description:"I’m an Electronic & Telecommunication Engineering undergraduate at KDU and a software engineering diploma student at NIBM, exploring where hardware and software can meet in practical systems."},aboutImage:"https://static.wixstatic.com/media/c837a6_e6f1add82e8a460297b47026be9099fe~mv2.jpg/v1/fill/w_320,h_180,al_c,q_80/c837a6_e6f1add82e8a460297b47026be9099fe~mv2.jpg"},D_=1400,Fb=.78,Ub=40;function zb(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>n(new Error("Unable to process image file.")),r.src=t})}async function Bb(t){const e=await new Promise((l,u)=>{const c=new FileReader;c.onload=()=>l(String(c.result||"")),c.onerror=()=>u(new Error("Unable to read image file.")),c.readAsDataURL(t)}),n=await zb(e),r=Math.max(n.width,n.height);if(r<=D_)return e;const i=D_/r,s=document.createElement("canvas");s.width=Math.round(n.width*i),s.height=Math.round(n.height*i);const o=s.getContext("2d");if(!o)return e;o.drawImage(n,0,0,s.width,s.height);try{return s.toDataURL("image/webp",Fb)}catch{return e}}function $b(t){return String(t||"image").replace(/[^a-zA-Z0-9._-]/g,"-").slice(0,Ub)||"image"}function Hb(t){const e=t.indexOf(",");if(e===-1)throw new Error("Invalid image data.");const n=t.slice(0,e),r=t.slice(e+1),i=n.match(/^data:(.*?);base64$/);return{mimeType:(i==null?void 0:i[1])||"image/webp",payload:r}}async function qb(t,e,n){var g,T;if(!n)throw new Error("Google Drive access is required to upload images. Sign in with Google first.");const{mimeType:r,payload:i}=Hb(t),s=$b(e),o={name:`${Date.now()}-${s}`,mimeType:r},l=`----kaushalya-drive-${Date.now()}`,u=[`--${l}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(o),`--${l}`,`Content-Type: ${r}`,"Content-Transfer-Encoding: base64","",i,`--${l}--`,""].join(`\r
`),c=await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":`multipart/related; boundary=${l}`},body:u}),d=await c.json();if(!c.ok)throw new Error(((g=d==null?void 0:d.error)==null?void 0:g.message)||"Unable to upload image to Google Drive.");const m=await fetch(`https://www.googleapis.com/drive/v3/files/${d.id}/permissions`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({role:"reader",type:"anyone"})});if(!m.ok){const R=await m.json().catch(()=>({}));throw new Error(((T=R==null?void 0:R.error)==null?void 0:T.message)||"Unable to make the Drive image public.")}return`https://drive.google.com/uc?export=view&id=${d.id}`}async function Wb(t){return t?Bb(t):""}async function JI(t){const e=Array.from(t||[]).filter(Boolean);return Promise.all(e.map(n=>Wb(n)))}async function Gb(t,e,n){return qb(t,e,n)}const Kb=Si(qn,"site","content"),Ts=Si(qn,"site","coreContent"),la=Si(qn,"site","posts"),ua=Si(qn,"site","certificates");function Qb(t){return typeof t=="string"&&t.startsWith("data:image/")}async function Ld(t,e={},n="image"){if(Array.isArray(t)){const r=[];for(let i=0;i<t.length;i+=1)r.push(await Ld(t[i],e,`${n}-${i+1}`));return r}if(t&&typeof t=="object"){const r={};for(const[i,s]of Object.entries(t))r[i]=await Ld(s,e,`${n}-${i}`);return r}if(Qb(t))try{return await Gb(t,n,e.googleAccessToken)}catch{return t}return t}async function zp(t,e={},n="content",r=Ts){const i=await Ld(t,e,n);await ni(r,{...i,updatedAt:Zt()},{merge:!0})}async function fh(t,e){(await go(t)).exists()||await ni(t,{...e,createdAt:Zt(),updatedAt:Zt()})}function Ll(t){return{core:{site:t.site,hero:t.hero,heroStats:t.heroStats,featuredProjects:t.featuredProjects||[],education:t.education||[],skills:t.skills||[],about:t.about,aboutImage:t.aboutImage},posts:{spotlight:t.spotlight,articles:t.articles||[]},certificates:{certifications:t.certifications||[]}}}async function Yb(){const[t,e,n,r]=await Promise.all([go(Kb),go(Ts),go(la),go(ua)]);if(!t.exists())return;const i=t.data()||{},s=Ll({...ke,...i}),o=[];e.exists()||o.push(ni(Ts,{...s.core,createdAt:Zt(),updatedAt:Zt()})),n.exists()||o.push(ni(la,{...s.posts,createdAt:Zt(),updatedAt:Zt()})),r.exists()||o.push(ni(ua,{...s.certificates,createdAt:Zt(),updatedAt:Zt()})),await Promise.all(o)}function Xb(t,e,n){const r=t.exists()?t.data()||{}:ke,i=e.exists()?e.data()||{}:ke,s=n.exists()?n.data()||{}:ke;return{...ke,...r,...i,...s,site:r.site||ke.site,hero:r.hero||ke.hero,heroStats:r.heroStats||ke.heroStats,featuredProjects:r.featuredProjects||ke.featuredProjects,education:r.education||ke.education,skills:r.skills||ke.skills,about:r.about||ke.about,aboutImage:r.aboutImage||ke.aboutImage,spotlight:i.spotlight||ke.spotlight,articles:i.articles||ke.articles,certifications:s.certifications||ke.certifications}}async function Jb(){await Yb(),await Promise.all([fh(Ts,Ll(ke).core),fh(la,Ll(ke).posts),fh(ua,Ll(ke).certificates)])}function Zb(t){const e=[],n={core:null,posts:null,certificates:null},r=()=>{!n.core||!n.posts||!n.certificates||t(Xb(n.core,n.posts,n.certificates))};return e.push(No(Ts,i=>{n.core=i,r()},()=>{n.core={exists:()=>!1,data:()=>({})},r()})),e.push(No(la,i=>{n.posts=i,r()},()=>{n.posts={exists:()=>!1,data:()=>({})},r()})),e.push(No(ua,i=>{n.certificates=i,r()},()=>{n.certificates={exists:()=>!1,data:()=>({})},r()})),()=>{e.forEach(i=>i())}}async function O_(t,e={}){const n={articles:t.articles||[],spotlight:t.spotlight};await zp(n,e,"posts",la)}async function V_(t,e={}){const n={certifications:t.certifications||[]};await zp(n,e,"certificates",ua)}async function Md(t,e={}){const n={site:t.site,hero:t.hero,heroStats:t.heroStats,featuredProjects:t.featuredProjects||[],education:t.education||[],skills:t.skills||[],about:t.about,aboutImage:t.aboutImage};await zp(n,e,"other-content",Ts)}const ZI=G.createContext(null);function eD({children:t}){const[e,n]=G.useState(ke),[r,i]=G.useState(!0);G.useEffect(()=>(Jb().catch(()=>null),Zb(l=>{n(l),i(!1)})),[]);const s=G.useMemo(()=>({content:e,loading:r,saveContent:Md}),[e,r]);return p.jsx(ZI.Provider,{value:s,children:t})}function Vs(){const t=G.useContext(ZI);if(!t)throw new Error("useContent must be used inside ContentProvider");return t}function tD(){return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:p.jsx("path",{d:"M4.98 3.5A2.5 2.5 0 1 1 4.97 8.5a2.5 2.5 0 0 1 .01-5ZM3 9.5h4v11H3v-11Zm7 0h3.8v1.5h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.54v4.91h-4v-11Z"})})}function nD(){return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:p.jsx("path",{d:"M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.67c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.5 2.3 1.07 2.86.82.09-.64.34-1.07.62-1.31-2.21-.25-4.54-1.1-4.54-4.88 0-1.08.38-1.96 1-2.65-.1-.24-.43-1.23.09-2.56 0 0 .84-.27 2.75 1.01A9.5 9.5 0 0 1 12 7.1c.85 0 1.7.12 2.5.34 1.9-1.28 2.74-1.01 2.74-1.01.52 1.33.2 2.32.1 2.56.62.69 1 1.57 1 2.65 0 3.8-2.33 4.63-4.55 4.88.35.3.67.89.67 1.79v2.65c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"})})}function rD(){return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:p.jsx("path",{d:"M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 2.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5Zm5.75-2.2a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3Z"})})}function iD(){return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:p.jsx("path",{d:"M21.8 7.2a2.77 2.77 0 0 0-1.95-1.96C18.1 5 12 5 12 5s-6.1 0-7.85.24A2.77 2.77 0 0 0 2.2 7.2 29.3 29.3 0 0 0 2 12a29.3 29.3 0 0 0 .2 4.8 2.77 2.77 0 0 0 1.95 1.96C5.9 19 12 19 12 19s6.1 0 7.85-.24a2.77 2.77 0 0 0 1.95-1.96A29.3 29.3 0 0 0 22 12a29.3 29.3 0 0 0-.2-4.8ZM10 15V9l5.2 3L10 15Z"})})}function sD({label:t}){const e=t.toLowerCase();return e.includes("github")?p.jsx(nD,{}):e.includes("instagram")?p.jsx(rD,{}):e.includes("youtube")?p.jsx(iD,{}):p.jsx(tD,{})}function oD(t=[],e=[]){const n=[...t,...e],r=new Set;return n.filter(i=>{const s=i.href||i.label;return r.has(s)?!1:(r.add(s),!0)})}function aD({onNavigate:t}){var o,l,u,c,d;const{content:e}=Vs(),n=((o=e.site)==null?void 0:o.navItems)||[],r=oD((l=e.site)==null?void 0:l.socialLinks,ke.site.socialLinks),i=((u=e.site)==null?void 0:u.contactDetails)||{},s=((c=e.site)==null?void 0:c.tagline)||"Thank you for visiting my portfolio. Let’s connect, collaborate, and build something sharper.";return p.jsxs("footer",{className:"site-footer",children:[p.jsxs("div",{className:"site-footer__grid",children:[p.jsxs("div",{className:"footer-card",children:[p.jsx("h3",{children:((d=e.site)==null?void 0:d.title)||"Kaushalya"}),p.jsx("p",{children:s})]}),p.jsxs("div",{className:"footer-card",children:[p.jsx("h4",{children:"Quick Menu"}),p.jsx("div",{className:"footer-links",children:n.map(m=>p.jsx("button",{type:"button",onClick:()=>t(m.id),children:m.label},m.id))})]}),p.jsxs("div",{className:"footer-card",children:[p.jsx("h4",{children:"Contact"}),p.jsxs("ul",{children:[p.jsx("li",{children:i.location}),p.jsx("li",{children:i.email})]})]}),p.jsxs("div",{className:"footer-card",children:[p.jsx("h4",{children:"Socials"}),p.jsx("div",{className:"social-links",children:r.map(m=>p.jsx("a",{href:m.href,target:"_blank",rel:"noreferrer","aria-label":m.label,children:p.jsx(sD,{label:m.label})},m.label))})]})]}),p.jsx("div",{className:"site-footer__bar",children:"© 2026 Kaushalya Mullegama | All Rights Reserved"})]})}const eT=G.createContext(null),lD="krb.mullegama@gmail.com",ph="kaushalya-google-access-token";function uD({children:t}){const[e,n]=G.useState(null),[r,i]=G.useState(!0),[s,o]=G.useState(()=>typeof window>"u"?"":window.sessionStorage.getItem(ph)||"");G.useEffect(()=>S2(Li,u=>{n(u),i(!1)}),[]),G.useEffect(()=>{if(!(typeof window>"u")){if(s){window.sessionStorage.setItem(ph,s);return}window.sessionStorage.removeItem(ph)}},[s]);const l=G.useMemo(()=>{const u=!!(e!=null&&e.email&&e.email.toLowerCase()===lD.toLowerCase());return{user:e,loading:r,isAdmin:u,googleAccessToken:s,signInWithGoogle:async()=>{const d=await q2(Li,XI),m=mn.credentialFromResult(d),g=(m==null?void 0:m.accessToken)||"";return o(g),d},signInWithEmail:(d,m)=>E2(Li,d,m),signUpWithEmail:(d,m)=>w2(Li,d,m),resetPassword:d=>v2(Li,d),signOut:async()=>{o(""),await A2(Li)}}},[s,r,e]);return p.jsx(eT.Provider,{value:l,children:t})}function Ai(){const t=G.useContext(eT);if(!t)throw new Error("useAuth must be used inside AuthProvider");return t}function cD(){const{user:t,loading:e,isAdmin:n,signInWithGoogle:r,signInWithEmail:i,signUpWithEmail:s,resetPassword:o,signOut:l}=Ai(),[u,c]=G.useState(!1),[d,m]=G.useState("sign-in"),[g,T]=G.useState(""),[R,N]=G.useState(""),[b,w]=G.useState(""),v=G.useMemo(()=>d==="sign-in"?"Sign in with email":"Create an email account",[d]),C=()=>{c(!1),w("")},O=async F=>{F.preventDefault(),w("");try{d==="sign-in"?await i(g.trim(),R):await s(g.trim(),R),C()}catch(I){w((I==null?void 0:I.message)||"Authentication failed.")}},j=async()=>{if(!g.trim()){w("Enter your email first to receive a reset link.");return}try{await o(g.trim()),w("Password reset email sent.")}catch(F){w((F==null?void 0:F.message)||"Could not send reset email.")}};return e?p.jsx("div",{className:"auth-chip",children:"Checking session..."}):t?p.jsxs("div",{className:"auth-session",children:[p.jsxs("span",{className:`auth-chip ${n?"auth-chip--admin":""}`,children:[t.displayName||t.email,n?" · Admin":" · Reader"]}),p.jsx("button",{type:"button",className:"auth-button auth-button--ghost",onClick:l,children:"Sign out"})]}):p.jsxs("div",{className:"auth-shell",children:[p.jsx("button",{type:"button",className:"auth-button",onClick:()=>c(F=>!F),children:"Sign in"}),u?p.jsxs("div",{className:"auth-panel",children:[p.jsxs("div",{className:"auth-panel__tabs",children:[p.jsx("button",{type:"button",className:d==="sign-in"?"is-active":"",onClick:()=>m("sign-in"),children:"Sign in"}),p.jsx("button",{type:"button",className:d==="sign-up"?"is-active":"",onClick:()=>m("sign-up"),children:"Create account"})]}),p.jsxs("form",{className:"auth-form",onSubmit:O,children:[p.jsxs("label",{children:["Email",p.jsx("input",{type:"email",value:g,onChange:F=>T(F.target.value),placeholder:"you@example.com"})]}),p.jsxs("label",{children:["Password",p.jsx("input",{type:"password",value:R,onChange:F=>N(F.target.value),placeholder:"••••••••"})]}),p.jsx("button",{type:"submit",className:"primary-button",children:v})]}),p.jsxs("div",{className:"auth-panel__actions",children:[p.jsx("button",{type:"button",className:"text-button",onClick:j,children:"Reset password"}),p.jsx("button",{type:"button",className:"text-button",onClick:r,children:"Continue with Google"}),p.jsx("button",{type:"button",className:"text-button",onClick:C,children:"Close"})]}),b?p.jsx("p",{className:"auth-status",children:b}):null]}):null]})}function hD({activeView:t,mobileMenuOpen:e,onNavigate:n,onToggleMenu:r}){var l,u;const{content:i}=Vs(),{isAdmin:s}=Ai(),o=[...((l=i.site)==null?void 0:l.navItems)||[]];return s&&!o.some(c=>c.id==="edit")&&o.push({id:"edit",label:"Edit"}),p.jsxs("header",{className:"site-header",children:[p.jsxs("div",{className:"site-header__inner",children:[p.jsx("button",{className:"brand-mark",type:"button",onClick:()=>n("home"),children:((u=i.site)==null?void 0:u.title)||"Kaushalya"}),p.jsx("nav",{className:"desktop-nav","aria-label":"Primary",children:o.map(c=>p.jsx("button",{type:"button",className:`nav-link ${t===c.id?"is-active":""}`,onClick:()=>n(c.id),children:c.label},c.id))}),p.jsx("div",{className:"header-actions",children:p.jsx(cD,{})}),p.jsxs("button",{className:"menu-toggle",type:"button","aria-expanded":e,"aria-label":"Toggle menu",onClick:r,children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]})]}),p.jsx("div",{className:`mobile-nav ${e?"is-open":""}`,children:o.map(c=>p.jsx("button",{type:"button",className:`mobile-nav__link ${t===c.id?"is-active":""}`,onClick:()=>n(c.id),children:c.label},c.id))})]})}function ht({children:t,className:e="",delay:n=0,as:r="div"}){const i=G.useRef(null),[s,o]=G.useState(!1);return G.useEffect(()=>{const l=i.current;if(!l)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(!0);return}const u=new IntersectionObserver(([c])=>{c.isIntersecting&&(o(!0),u.unobserve(c.target))},{threshold:.18});return u.observe(l),()=>u.disconnect()},[]),p.jsx(r,{ref:i,className:`reveal ${s?"reveal-visible":""} ${e}`.trim(),style:{"--reveal-delay":`${n}ms`},children:t})}function cs({eyebrow:t,title:e,description:n}){return p.jsxs("div",{className:"section-heading",children:[t?p.jsx("span",{className:"eyebrow",children:t}):null,p.jsx("h2",{children:e}),n?p.jsx("p",{children:n}):null]})}const L_="https://static.wixstatic.com/media/c837a6_e6f1add82e8a460297b47026be9099fe~mv2.jpg/v1/fill/w_320,h_180,al_c,q_80/c837a6_e6f1add82e8a460297b47026be9099fe~mv2.jpg";function dD(){const{content:t}=Vs(),{education:e,skills:n,certifications:r,aboutImage:i,about:s}=t,[o,l]=G.useState("");return G.useEffect(()=>{const u=i||L_;let c=!1;l("");const d=new Image;return d.onload=()=>{c||l(u)},d.onerror=()=>{c||l(L_)},d.src=u,()=>{c=!0}},[i]),p.jsxs("div",{className:"page-stack",children:[p.jsxs("section",{className:"about-hero",children:[p.jsxs(ht,{className:"about-hero__copy",children:[p.jsx("span",{className:"eyebrow",children:(s==null?void 0:s.eyebrow)||"About me"}),p.jsx("h1",{children:(s==null?void 0:s.title)||"About Kaushalya"}),p.jsx("p",{children:(s==null?void 0:s.description)||"I build practical systems where hardware and software meet."})]}),p.jsx(ht,{delay:120,children:p.jsx("div",{className:"about-hero__image-shell",children:o?p.jsx("img",{src:o,alt:"Inner view of a futuristic vehicle"},o):p.jsx("div",{className:"about-hero__image-placeholder","aria-hidden":"true"})})})]}),p.jsxs("section",{className:"section-stack",children:[p.jsx(ht,{children:p.jsx(cs,{eyebrow:"Education",title:"Academic Background"})}),p.jsx("div",{className:"timeline-grid",children:e.map((u,c)=>p.jsx(ht,{delay:c*100,children:p.jsxs("article",{className:"timeline-card",children:[p.jsx("h3",{children:u.title}),p.jsx("p",{className:"timeline-card__institution",children:u.institution}),p.jsx("ul",{children:u.notes.map(d=>p.jsx("li",{children:d},d))})]})},u.title))})]}),p.jsxs("section",{className:"section-stack",children:[p.jsx(ht,{children:p.jsx(cs,{eyebrow:"Skills",title:"Technical Matrix & Competencies",description:"A bento-style breakdown of the areas where I spend the most time building and experimenting."})}),p.jsx("div",{className:"skills-grid",children:n.map((u,c)=>p.jsx(ht,{delay:c*90,children:p.jsxs("article",{className:`skill-card skill-card--${u.size}`,children:[p.jsxs("div",{className:"skill-card__header",children:[p.jsxs("div",{children:[u.accent?p.jsx("span",{className:"eyebrow",children:u.accent}):null,p.jsx("h3",{children:u.title})]}),p.jsx("i",{className:u.icon,"aria-hidden":"true"})]}),p.jsx("p",{children:u.description}),p.jsx("div",{className:"chip-row",children:u.chips.map(d=>p.jsx("span",{className:"chip",children:d},d))})]})},u.title))})]}),p.jsxs("section",{className:"section-stack",children:[p.jsx(ht,{children:p.jsx(cs,{eyebrow:"Certifications",title:"Licenses & Certifications"})}),p.jsx("div",{className:"cert-grid",children:r.map((u,c)=>p.jsx(ht,{delay:c*100,children:p.jsxs("article",{className:"cert-card",children:[p.jsx("h3",{children:u.title}),p.jsx("img",{src:u.image,alt:u.title})]})},u.title))})]})]})}function fD(){const[t,e]=G.useState(""),[n,r]=G.useState(""),[i,s]=G.useState(!1),o=async l=>{if(l.preventDefault(),!t.trim()){r("Add an email address to subscribe.");return}s(!0),r("");try{const u=t.trim().toLowerCase();await ni(Si(qn,"newsletterSubscribers",u),{email:u,subscribedAt:Zt(),source:"newsletter-card"}),r(`Subscribed successfully for ${u}.`),e("")}catch(u){r((u==null?void 0:u.message)||"Unable to subscribe right now. Please try again later.")}finally{s(!1)}};return p.jsxs("section",{className:"newsletter-card reveal-visible",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Newsletter"}),p.jsx("h2",{children:"Subscribe"}),p.jsx("p",{children:"Stay updated with my latest projects and innovations. Join the journey."})]}),p.jsxs("form",{className:"newsletter-form",onSubmit:o,children:[p.jsx("input",{type:"email",value:t,onChange:l=>e(l.target.value),placeholder:"Email Address *","aria-label":"Email address",disabled:i}),p.jsx("button",{type:"submit",disabled:i,children:i?"Submitting...":"Submit"})]}),n?p.jsx("p",{className:"newsletter-message",children:n}):null]})}function pD(t,e,n){const r=qk(cp(qn,"posts",t,"comments"),Wk("createdAt","asc"));return No(r,i=>{e(i.docs.map(s=>({id:s.id,...s.data()})))},i=>{console.error("Comment subscription failed:",i),n&&n(i),e([])})}async function mD(t,e){await Yk(cp(qn,"posts",t,"comments"),{...e,createdAt:Zt()})}function gD({postId:t}){const{user:e}=Ai(),[n,r]=G.useState([]),[i,s]=G.useState(""),[o,l]=G.useState(!1),[u,c]=G.useState("");G.useEffect(()=>pD(t,r,()=>c("Unable to load comments. Check Firestore rules.")),[t]);const d=G.useMemo(()=>n.length,[n]),m=async g=>{if(g.preventDefault(),!(!e||!i.trim())){l(!0),c("");try{await mD(t,{text:i.trim(),authorName:e.displayName||e.email,authorPhotoURL:e.photoURL||"",authorId:e.uid}),s("")}catch(T){c((T==null?void 0:T.message)||"Unable to save comment. Check Firestore rules.")}finally{l(!1)}}};return p.jsxs("section",{className:"comment-panel",children:[p.jsxs("div",{className:"comment-panel__header",children:[p.jsx("h3",{children:"Comments"}),p.jsxs("span",{children:[d," total"]})]}),e?p.jsxs("form",{className:"comment-form",onSubmit:m,children:[p.jsx("textarea",{value:i,onChange:g=>s(g.target.value),placeholder:"Write a thoughtful comment...",rows:"3"}),p.jsx("button",{type:"submit",disabled:o||!i.trim(),children:o?"Posting...":"Post comment"})]}):p.jsx("p",{className:"comment-empty",children:"Sign in to comment on posts."}),u?p.jsx("p",{className:"comment-error",children:u}):null,p.jsx("div",{className:"comment-list",children:n.map(g=>{var T;return p.jsxs("article",{className:"comment-item",children:[g.authorPhotoURL?p.jsx("img",{src:g.authorPhotoURL,alt:""}):p.jsx("span",{children:(T=g.authorName)==null?void 0:T[0]}),p.jsxs("div",{children:[p.jsx("strong",{children:g.authorName}),p.jsx("p",{children:g.text})]})]},g.id)})})]})}function jd({images:t,alt:e,className:n="",imageClassName:r=""}){const i=G.useMemo(()=>t?Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean):[],[t]),[s,o]=G.useState(0),[l,u]=G.useState(null);if(G.useEffect(()=>{o(N=>Math.min(N,Math.max(i.length-1,0)))},[i.length]),!i.length)return null;const c=i.length>1,d=i[s],m=()=>{c&&o(N=>(N-1+i.length)%i.length)},g=()=>{c&&o(N=>(N+1)%i.length)},T=N=>{var b;u(((b=N.touches[0])==null?void 0:b.clientX)??null)},R=N=>{var v;if(l==null)return;const w=(((v=N.changedTouches[0])==null?void 0:v.clientX)??l)-l;Math.abs(w)>36&&(w<0?g():m()),u(null)};return p.jsxs("div",{className:`image-carousel ${n}`,children:[p.jsxs("div",{className:`image-carousel__frame ${c?"is-interactive":""}`,onTouchStart:T,onTouchEnd:R,children:[p.jsx("img",{className:r,src:d,alt:e,draggable:"false"}),c?p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button",className:"image-carousel__nav image-carousel__nav--prev",onClick:m,"aria-label":"Previous image",children:"‹"}),p.jsx("button",{type:"button",className:"image-carousel__nav image-carousel__nav--next",onClick:g,"aria-label":"Next image",children:"›"})]}):null]}),c?p.jsx("div",{className:"image-carousel__dots","aria-label":"Image navigation",children:i.map((N,b)=>p.jsx("button",{type:"button",className:`image-carousel__dot ${b===s?"is-active":""}`,onClick:()=>o(b),"aria-label":`Show image ${b+1}`,"aria-pressed":b===s},`${e}-${b}`))}):null]})}function yD(){var t;return typeof window<"u"&&((t=window.location)!=null&&t.origin)?window.location.origin:"http://localhost:5173"}function _D(t=""){return String(t).toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")}function Bp(t){const e=t.id||_D(t.title);return`${yD()}/shares/${e}.html`}function vD(t){const{user:e}=Ai(),[n,r]=G.useState([]);G.useEffect(()=>{const o=cp(qn,"posts",t,"likes");return No(o,l=>{r(l.docs.map(u=>u.id))})},[t]);const i=!!(e&&n.includes(e.uid)),s=async()=>{if(!e)return;const o=Si(qn,"posts",t,"likes",e.uid);if(i){await Qk(o);return}await ni(o,{authorName:e.displayName||e.email,createdAt:new Date().toISOString()})};return{likeCount:n.length,isLiked:i,toggleLike:s}}function wD(t){const e=Bp(t);return navigator.clipboard.writeText(e).then(()=>e)}function ED({post:t}){const{likeCount:e,isLiked:n,toggleLike:r}=vD(t.id),[i,s]=G.useState(!1),o=async()=>{try{await wD(t),s(!0),setTimeout(()=>s(!1),2e3)}catch{try{const u=Bp(t);await navigator.clipboard.writeText(u),s(!0),setTimeout(()=>s(!1),2e3)}catch{}}};return p.jsxs("article",{className:`article-card article-card--${t.tone}`,id:`post-${t.id}`,children:[p.jsx(jd,{images:t.images||t.image,alt:t.title,imageClassName:"article-card__image"}),p.jsxs("div",{className:"article-card__body",children:[p.jsx("span",{className:"eyebrow",children:t.category}),p.jsx("h2",{children:t.title}),p.jsx("p",{children:t.description}),p.jsxs("div",{className:"post-actions",children:[p.jsxs("button",{type:"button",className:`chip-button ${n?"is-liked":""}`,onClick:r,children:["♥ ",e]}),p.jsx("div",{className:"share-buttons",children:p.jsx("button",{type:"button",className:`chip-button ${i?"is-copied":""}`,onClick:o,children:i?"Copied":"Copy link"})})]})]}),p.jsx(gD,{postId:t.id})]})}function ID(){var s;const{content:t}=Vs(),{user:e}=Ai(),[n,r]=G.useState(""),i=G.useMemo(()=>{const o=n.trim().toLowerCase();return t.articles.filter(l=>o?[l.category,l.title,l.description].join(" ").toLowerCase().includes(o):!0)},[t.articles,n]);return p.jsxs("div",{className:"page-stack",children:[p.jsx(ht,{children:p.jsx(cs,{eyebrow:"Blog",title:"Blog & Articles",description:((s=t.hero)==null?void 0:s.description)||"Insights, tutorials, and articles on embedded systems, software development, UI/UX design, and technology trends."})}),p.jsxs("section",{className:"blog-toolbar",children:[p.jsx("input",{type:"search",value:n,onChange:o=>r(o.target.value),placeholder:"Search posts by title, category, or topic","aria-label":"Search posts"}),p.jsxs("div",{className:"blog-toolbar__meta",children:[p.jsxs("span",{children:[i.length," posts"]}),p.jsx("span",{children:e?"Logged in":"Guest mode"})]})]}),p.jsx("div",{className:"article-list",children:i.map((o,l)=>p.jsx(ht,{delay:l*90,children:p.jsx(ED,{post:o})},o.title))}),p.jsx(fD,{})]})}const M_={label:"",title:"",description:"",tone:"blue",images:[]},j_={category:"",title:"",description:"",tone:"blue",images:[]},F_={title:"",accent:"",description:"",chips:"",icon:"fa-solid fa-star",size:"small"},U_={title:"",image:""};function z_({label:t,hint:e,images:n,onChange:r}){const[i,s]=G.useState(!1),o=G.useRef(null),l=async d=>{const m=await JI(d);m.length&&r([...n||[],...m])},u=async d=>{await l(d.target.files),d.target.value=""},c=async d=>{d.preventDefault(),s(!1),await l(d.dataTransfer.files)};return p.jsxs("div",{className:"media-dropzone-wrap",children:[p.jsxs("div",{className:"media-dropzone__label-row",children:[p.jsx("span",{children:t}),p.jsx("button",{type:"button",className:"text-button",onClick:()=>{var d;return(d=o.current)==null?void 0:d.click()},children:"Browse files"})]}),p.jsxs("div",{className:`media-dropzone ${i?"is-dragging":""}`,onDragOver:d=>{d.preventDefault(),s(!0)},onDragLeave:()=>s(!1),onDrop:c,onClick:()=>{var d;return(d=o.current)==null?void 0:d.click()},role:"button",tabIndex:0,children:[p.jsx("input",{ref:o,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:u}),n!=null&&n.length?p.jsx("div",{className:"media-dropzone__previews",children:n.map((d,m)=>p.jsxs("div",{className:"media-dropzone__preview",children:[p.jsx("img",{src:d,alt:`${t} ${m+1}`}),p.jsx("button",{type:"button",className:"media-dropzone__remove",onClick:g=>{g.stopPropagation(),r(n.filter((T,R)=>R!==m))},"aria-label":`Remove image ${m+1}`,children:"×"})]},`${t}-${m}-${d.slice(0,16)}`))}):p.jsxs("div",{className:"media-dropzone__empty",children:[p.jsx("strong",{children:"Drop images here"}),p.jsx("p",{children:e})]})]})]})}function mh({label:t,hint:e,image:n,onChange:r}){const[i,s]=G.useState(!1),o=G.useRef(null),l=async d=>{const[m]=await JI([d]);m&&r(m)},u=async d=>{var m;await l((m=d.target.files)==null?void 0:m[0]),d.target.value=""},c=async d=>{var m;d.preventDefault(),s(!1),await l((m=d.dataTransfer.files)==null?void 0:m[0])};return p.jsxs("div",{className:"media-dropzone-wrap",children:[p.jsxs("div",{className:"media-dropzone__label-row",children:[p.jsx("span",{children:t}),p.jsx("button",{type:"button",className:"text-button",onClick:()=>{var d;return(d=o.current)==null?void 0:d.click()},children:"Browse file"})]}),p.jsxs("div",{className:`media-dropzone ${i?"is-dragging":""}`,onDragOver:d=>{d.preventDefault(),s(!0)},onDragLeave:()=>s(!1),onDrop:c,onClick:()=>{var d;return(d=o.current)==null?void 0:d.click()},role:"button",tabIndex:0,children:[p.jsx("input",{ref:o,type:"file",accept:"image/*",hidden:!0,onChange:u}),n?p.jsxs("div",{className:"media-dropzone__single-preview",children:[p.jsx("img",{src:n,alt:t}),p.jsx("button",{type:"button",className:"media-dropzone__remove",onClick:d=>{d.stopPropagation(),r("")},"aria-label":"Remove image",children:"×"})]}):p.jsxs("div",{className:"media-dropzone__empty",children:[p.jsx("strong",{children:"Drop an image here"}),p.jsx("p",{children:e})]})]})]})}function TD(){var ee,pe,ce,Ee,bt,Dt,Ot,Vt,Aa,Ca,jr,Fr,Ci,Pi,Ri,ki,Ls,Pa,Ra,Ms;const{content:t,saveContent:e}=Vs(),{isAdmin:n,loading:r,googleAccessToken:i,signInWithGoogle:s}=Ai(),[o,l]=G.useState(t),u=G.useRef(t),[c,d]=G.useState(!1),[m,g]=G.useState(""),[T,R]=G.useState(M_),[N,b]=G.useState(j_),[w,v]=G.useState(F_),[C,O]=G.useState(U_);G.useEffect(()=>{u.current=t,l(t)},[t]);const j=L=>{l(z=>{const J=typeof L=="function"?L(z):L;return u.current=J,J})};if(r)return p.jsx("div",{className:"page-stack",children:p.jsxs("section",{className:"content-editor content-editor--page",children:[p.jsx("span",{className:"eyebrow",children:"Edit"}),p.jsx("h2",{children:"Loading editor…"}),p.jsx("p",{className:"content-editor__status",children:"Checking your sign-in state and content data."})]})});if(!n)return p.jsx("div",{className:"page-stack",children:p.jsxs("section",{className:"content-editor content-editor--page",children:[p.jsx("span",{className:"eyebrow",children:"Edit"}),p.jsx("h2",{children:"Admin access required"}),p.jsx("p",{className:"content-editor__status",children:"Sign in with the admin account to edit this site."})]})});const F=(L,z)=>{j(J=>({...J,site:{...J.site||{},[L]:z}}))},I=(L,z)=>{j(J=>{var le;return{...J,site:{...J.site||{},contactDetails:{...((le=J.site)==null?void 0:le.contactDetails)||{},[L]:z}}}})},_=(L,z)=>{j(J=>{var Gt;const le=[...((Gt=J.site)==null?void 0:Gt.navItems)||[]];return le[L]={...le[L],label:z},{...J,site:{...J.site||{},navItems:le}}})},E=(L,z)=>{j(J=>({...J,[L]:z}))},S=L=>{j(z=>({...z,hero:{...z.hero||{},image:L}}))},P=L=>{j(z=>({...z,aboutImage:L}))},k=(L,z,J,le)=>{j(Gt=>{const xi=[...Gt[L]||[]];return xi[z]={...xi[z],[J]:le},{...Gt,[L]:xi}})},A=(L,z,J,le)=>{k(L,z,J,le.split(",").map(Gt=>Gt.trim()).filter(Boolean))},mt=()=>{if(!T.title.trim()){g("Please enter a project title before adding.");return}const L={id:`project-${Date.now()}`,label:T.label.trim()||"Featured Engineering",title:T.title.trim(),description:T.description.trim(),tone:T.tone||"blue",image:T.images[0]||"",images:T.images},z=u.current||o,J={...z,featuredProjects:[...z.featuredProjects||[],L]};j(J),R({...M_,images:[]}),d(!0),g("Saving added project..."),Md(J,{googleAccessToken:i}).then(()=>{g("Added and saved the featured engineering project.")}).catch(le=>{g((le==null?void 0:le.message)||"Project added to draft, but save failed. Click Save changes to retry.")}).finally(()=>{d(!1)})},Cn=()=>{if(!N.title.trim()){g("Please enter an article title before adding.");return}const L={id:`article-${Date.now()}`,category:N.category.trim()||"Blog",title:N.title.trim(),description:N.description.trim(),tone:N.tone||"blue",image:N.images[0]||"",images:N.images,commentsEnabled:!0},z=u.current||o,J={...z,articles:[...z.articles||[],L]};j(J),b({...j_,images:[]}),d(!0),g("Saving added article..."),O_(J,{googleAccessToken:i}).then(()=>{g("Added and saved the blog article.")}).catch(le=>{g((le==null?void 0:le.message)||"Article added to draft, but save failed. Click Save changes to retry.")}).finally(()=>{d(!1)})},Mr=()=>{if(!w.title.trim()){g("Please enter a skill title before adding.");return}const L={title:w.title.trim(),accent:w.accent.trim(),description:w.description.trim(),chips:w.chips.split(",").map(le=>le.trim()).filter(Boolean),icon:w.icon.trim()||"fa-solid fa-star",size:w.size||"small"},z=u.current||o,J={...z,skills:[...z.skills||[],L]};j(J),v({...F_}),d(!0),g("Saving added skill..."),e(J,{googleAccessToken:i}).then(()=>{g("Added and saved the skill.")}).catch(le=>{g((le==null?void 0:le.message)||"Skill added to draft, but save failed. Click Save changes to retry.")}).finally(()=>{d(!1)})},Wt=()=>{if(!C.title.trim()){g("Please enter a certification title before adding.");return}const L={title:C.title.trim(),image:C.image.trim()},z=u.current||o,J={...z,certifications:[...z.certifications||[],L]};j(J),O({...U_}),d(!0),g("Saving added certification..."),V_(J,{googleAccessToken:i}).then(()=>{g("Added and saved the certification.")}).catch(le=>{g((le==null?void 0:le.message)||"Certification added to draft, but save failed. Click Save changes to retry.")}).finally(()=>{d(!1)})},$=async()=>{g("Refreshing Google Drive access...");try{await s(),g("Google Drive access connected.")}catch(L){g((L==null?void 0:L.message)||"Could not connect Google Drive access.")}},X=async L=>{L.preventDefault(),d(!0),g("");try{const z=u.current||o;await Md(z,{googleAccessToken:i}),await O_(z,{googleAccessToken:i}),await V_(z,{googleAccessToken:i}),g("Saved to Firestore.")}catch(z){g((z==null?void 0:z.message)||"Save failed. Check Firestore rules and permissions.")}finally{d(!1)}};return p.jsx("div",{className:"page-stack",children:p.jsxs("section",{className:"content-editor content-editor--page",children:[p.jsxs("div",{className:"content-editor__header",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Edit"}),p.jsx("h2",{children:"Edit Website Content"})]}),p.jsx("button",{type:"button",onClick:()=>j(t),className:"secondary-button",children:"Reset draft"})]}),m?p.jsx("p",{className:"content-editor__status",children:m}):null,n&&!i?p.jsxs("div",{className:"content-editor__status content-editor__status--warning",children:[p.jsx("span",{children:"Google Drive is not connected. Image uploads will not save until you reconnect."}),p.jsx("button",{type:"button",className:"text-button",onClick:$,children:"Connect Google Drive"})]}):null,p.jsxs("form",{onSubmit:X,className:"content-editor__form",children:[p.jsxs("section",{className:"content-editor__group",children:[p.jsx("h3",{children:"Brand & Navigation"}),p.jsxs("div",{className:"content-editor__grid",children:[p.jsxs("label",{children:["Site title",p.jsx("input",{value:((ee=o.site)==null?void 0:ee.title)||"",onChange:L=>F("title",L.target.value)})]}),p.jsxs("label",{children:["Site tagline",p.jsx("input",{value:((pe=o.site)==null?void 0:pe.tagline)||"",onChange:L=>F("tagline",L.target.value)})]}),p.jsxs("label",{children:["Contact location",p.jsx("input",{value:((Ee=(ce=o.site)==null?void 0:ce.contactDetails)==null?void 0:Ee.location)||"",onChange:L=>I("location",L.target.value)})]}),p.jsxs("label",{children:["Contact email",p.jsx("input",{value:((Dt=(bt=o.site)==null?void 0:bt.contactDetails)==null?void 0:Dt.email)||"",onChange:L=>I("email",L.target.value)})]})]}),p.jsx("div",{className:"content-editor__grid content-editor__grid--three",children:(((Ot=o.site)==null?void 0:Ot.navItems)||[]).map((L,z)=>p.jsxs("label",{children:["Nav item ",z+1,p.jsx("input",{value:L.label||"",onChange:J=>_(z,J.target.value)})]},L.id||z))})]}),p.jsxs("section",{className:"content-editor__group",children:[p.jsx("h3",{children:"Homepage"}),p.jsxs("div",{className:"content-editor__grid",children:[p.jsxs("label",{children:["Hero headline",p.jsx("input",{value:((Vt=o.hero)==null?void 0:Vt.title)||"",onChange:L=>E("hero",{...o.hero||{},title:L.target.value})})]}),p.jsxs("label",{children:["Hero description",p.jsx("textarea",{rows:"3",value:((Aa=o.hero)==null?void 0:Aa.description)||"",onChange:L=>E("hero",{...o.hero||{},description:L.target.value})})]}),p.jsxs("label",{children:["Primary CTA",p.jsx("input",{value:((Ca=o.hero)==null?void 0:Ca.ctaPrimary)||"",onChange:L=>E("hero",{...o.hero||{},ctaPrimary:L.target.value})})]}),p.jsxs("label",{children:["Secondary CTA",p.jsx("input",{value:((jr=o.hero)==null?void 0:jr.ctaSecondary)||"",onChange:L=>E("hero",{...o.hero||{},ctaSecondary:L.target.value})})]})]}),p.jsx(mh,{label:"Home hero image",hint:"Drag in a new hero image for the home section.",image:((Fr=o.hero)==null?void 0:Fr.image)||"",onChange:S}),p.jsx("div",{className:"content-editor__grid content-editor__grid--three",children:(o.heroStats||[]).map((L,z)=>p.jsxs("label",{children:["Stat ",z+1,p.jsx("input",{value:L.value||"",onChange:J=>k("heroStats",z,"value",J.target.value),placeholder:"Value"}),p.jsx("input",{value:L.label||"",onChange:J=>k("heroStats",z,"label",J.target.value),placeholder:"Label"})]},`${L.label}-${z}`))}),p.jsx("div",{className:"content-editor__grid",children:p.jsxs("label",{children:["Spotlight tag",p.jsx("input",{value:((Ci=o.spotlight)==null?void 0:Ci.tag)||"",onChange:L=>E("spotlight",{...o.spotlight||{},tag:L.target.value})})]})})]}),p.jsxs("section",{className:"content-editor__group",children:[p.jsx("h3",{children:"About Page"}),p.jsxs("div",{className:"content-editor__grid",children:[p.jsxs("label",{children:["About eyebrow",p.jsx("input",{value:((Pi=o.about)==null?void 0:Pi.eyebrow)||"",onChange:L=>E("about",{...o.about||{},eyebrow:L.target.value}),placeholder:"About me"})]}),p.jsxs("label",{children:["About title",p.jsx("input",{value:((Ri=o.about)==null?void 0:Ri.title)||"",onChange:L=>E("about",{...o.about||{},title:L.target.value}),placeholder:"About Kaushalya"})]}),p.jsxs("label",{children:["About description",p.jsx("textarea",{rows:"3",value:((ki=o.about)==null?void 0:ki.description)||"",onChange:L=>E("about",{...o.about||{},description:L.target.value}),placeholder:"Write your About section intro"})]})]}),p.jsx(mh,{label:"About section image",hint:"Drag in the image shown beside the About introduction.",image:o.aboutImage||"",onChange:P}),(o.education||[]).map((L,z)=>p.jsxs("div",{className:"content-editor__card",children:[p.jsxs("label",{children:["Education title",p.jsx("input",{value:L.title||"",onChange:J=>k("education",z,"title",J.target.value)})]}),p.jsxs("label",{children:["Institution",p.jsx("input",{value:L.institution||"",onChange:J=>k("education",z,"institution",J.target.value)})]}),p.jsxs("label",{children:["Notes, comma separated",p.jsx("textarea",{rows:"2",value:(L.notes||[]).join(", "),onChange:J=>A("education",z,"notes",J.target.value)})]})]},`${L.title}-${z}`))]}),p.jsxs("section",{className:"content-editor__group",children:[p.jsx("h3",{children:"Add Content"}),p.jsxs("div",{className:"edit-create-grid",children:[p.jsxs("article",{className:"edit-create-card",children:[p.jsxs("div",{className:"edit-create-card__head",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Home"}),p.jsx("h4",{children:"Featured Engineering Projects"})]}),p.jsxs("span",{className:"edit-create-card__count",children:[((Ls=o.featuredProjects)==null?void 0:Ls.length)||0," saved"]})]}),p.jsxs("label",{children:["Project label",p.jsx("input",{value:T.label,onChange:L=>R(z=>({...z,label:L.target.value})),placeholder:"Robotics & IoT"})]}),p.jsxs("label",{children:["Project title",p.jsx("input",{value:T.title,onChange:L=>R(z=>({...z,title:L.target.value})),placeholder:"Arduino Self Driving Car"})]}),p.jsxs("label",{children:["Project description",p.jsx("textarea",{rows:"3",value:T.description,onChange:L=>R(z=>({...z,description:L.target.value})),placeholder:"Describe the project"})]}),p.jsxs("label",{children:["Color tone",p.jsxs("select",{value:T.tone,onChange:L=>R(z=>({...z,tone:L.target.value})),children:[p.jsx("option",{value:"blue",children:"Blue"}),p.jsx("option",{value:"amber",children:"Amber"}),p.jsx("option",{value:"violet",children:"Violet"})]})]}),p.jsx(z_,{label:"Project images",hint:"Drag multiple images here. They will swipe in the home card.",images:T.images,onChange:L=>R(z=>({...z,images:L}))}),p.jsx("button",{type:"button",className:"primary-button",onClick:mt,disabled:!T.title.trim(),children:"Add project"})]}),p.jsxs("article",{className:"edit-create-card",children:[p.jsxs("div",{className:"edit-create-card__head",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Blog"}),p.jsx("h4",{children:"Blog & Articles"})]}),p.jsxs("span",{className:"edit-create-card__count",children:[((Pa=o.articles)==null?void 0:Pa.length)||0," saved"]})]}),p.jsxs("label",{children:["Category",p.jsx("input",{value:N.category,onChange:L=>b(z=>({...z,category:L.target.value})),placeholder:"Robotics"})]}),p.jsxs("label",{children:["Article title",p.jsx("input",{value:N.title,onChange:L=>b(z=>({...z,title:L.target.value})),placeholder:"Rise of the Machines"})]}),p.jsxs("label",{children:["Article description",p.jsx("textarea",{rows:"3",value:N.description,onChange:L=>b(z=>({...z,description:L.target.value})),placeholder:"Write the article summary"})]}),p.jsxs("label",{children:["Color tone",p.jsxs("select",{value:N.tone,onChange:L=>b(z=>({...z,tone:L.target.value})),children:[p.jsx("option",{value:"blue",children:"Blue"}),p.jsx("option",{value:"amber",children:"Amber"}),p.jsx("option",{value:"violet",children:"Violet"})]})]}),p.jsx(z_,{label:"Article images",hint:"Drag multiple images here. Readers can swipe through them in the blog card.",images:N.images,onChange:L=>b(z=>({...z,images:L}))}),p.jsx("button",{type:"button",className:"primary-button",onClick:Cn,disabled:!N.title.trim(),children:"Add article"})]}),p.jsxs("article",{className:"edit-create-card",children:[p.jsxs("div",{className:"edit-create-card__head",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"About"}),p.jsx("h4",{children:"Skills"})]}),p.jsxs("span",{className:"edit-create-card__count",children:[((Ra=o.skills)==null?void 0:Ra.length)||0," saved"]})]}),p.jsxs("label",{children:["Skill title",p.jsx("input",{value:w.title,onChange:L=>v(z=>({...z,title:L.target.value})),placeholder:"Embedded Systems & IoT"})]}),p.jsxs("label",{children:["Accent label",p.jsx("input",{value:w.accent,onChange:L=>v(z=>({...z,accent:L.target.value})),placeholder:"Hardware Layers"})]}),p.jsxs("label",{children:["Description",p.jsx("textarea",{rows:"3",value:w.description,onChange:L=>v(z=>({...z,description:L.target.value})),placeholder:"Describe the skill"})]}),p.jsxs("label",{children:["Chips, comma separated",p.jsx("input",{value:w.chips,onChange:L=>v(z=>({...z,chips:L.target.value})),placeholder:"Arduino, Firmware, Sensors"})]}),p.jsxs("div",{className:"content-editor__grid content-editor__grid--two",children:[p.jsxs("label",{children:["Icon class",p.jsx("input",{value:w.icon,onChange:L=>v(z=>({...z,icon:L.target.value})),placeholder:"fa-solid fa-microchip"})]}),p.jsxs("label",{children:["Card size",p.jsxs("select",{value:w.size,onChange:L=>v(z=>({...z,size:L.target.value})),children:[p.jsx("option",{value:"small",children:"Small"}),p.jsx("option",{value:"large",children:"Large"}),p.jsx("option",{value:"wide",children:"Wide"})]})]})]}),p.jsx("button",{type:"button",className:"primary-button",onClick:Mr,disabled:!w.title.trim(),children:"Add skill"})]}),p.jsxs("article",{className:"edit-create-card",children:[p.jsxs("div",{className:"edit-create-card__head",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"About"}),p.jsx("h4",{children:"Certifications"})]}),p.jsxs("span",{className:"edit-create-card__count",children:[((Ms=o.certifications)==null?void 0:Ms.length)||0," saved"]})]}),p.jsxs("label",{children:["Certification title",p.jsx("input",{value:C.title,onChange:L=>O(z=>({...z,title:L.target.value})),placeholder:"Web Design for Beginners"})]}),p.jsx(mh,{label:"Certification image",hint:"Drop one image here or click to browse.",image:C.image,onChange:L=>O(z=>({...z,image:L}))}),p.jsx("button",{type:"button",className:"primary-button",onClick:Wt,disabled:!C.title.trim(),children:"Add certification"})]})]})]}),p.jsx("button",{type:"submit",className:"primary-button",disabled:c,children:c?"Saving...":"Save changes"})]})]})})}function tT({onNavigate:t}){const{content:e}=Vs(),{hero:n,spotlight:r,featuredProjects:i,heroStats:s,articles:o=[]}=e,l=o.length?o[o.length-1]:null;return p.jsxs("div",{className:"page-stack",children:[p.jsxs("section",{className:"hero-grid",children:[p.jsxs(ht,{className:"hero-copy",children:[p.jsx("span",{className:"eyebrow",children:(n==null?void 0:n.eyebrow)||"Portfolio / Engineering / Design"}),p.jsx("h1",{children:(n==null?void 0:n.title)||"Hey, I’m Kaushalya Mullegama."}),p.jsx("p",{children:n==null?void 0:n.description}),p.jsxs("div",{className:"hero-actions",children:[p.jsx("button",{type:"button",className:"primary-button",onClick:()=>t("blog"),children:(n==null?void 0:n.ctaPrimary)||"Explore Blog"}),p.jsx("button",{type:"button",className:"secondary-button",onClick:()=>t("about"),children:(n==null?void 0:n.ctaSecondary)||"View Background"})]}),p.jsx("div",{className:"stat-row",children:s.map(u=>p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:u.value}),p.jsx("span",{children:u.label})]},u.label))})]}),p.jsx(ht,{className:"hero-visual",delay:120,children:p.jsx("img",{src:(n==null?void 0:n.image)||"https://static.wixstatic.com/media/3d6765_c7d6668f3ac7464f84a259bad9bd496b~mv2.png/v1/fill/w_480,h_420,al_c,q_90/Untitled%20design%20(2).png",alt:"Kaushalya Graphic Banner"})})]}),p.jsxs(ht,{children:[p.jsx(cs,{eyebrow:"Spotlight",title:l?"Latest Post Feature":"Latest Article Feature",description:"A sharp snapshot of the most recent writing and the visual direction behind the portfolio."}),p.jsxs("article",{className:"spotlight-card",children:[p.jsxs("div",{className:"spotlight-card__copy",children:[l?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"badge badge--indigo",children:l.category||"Latest Post"}),p.jsx("h2",{children:l.title}),p.jsx("p",{children:l.description})]}):p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"badge badge--indigo",children:r==null?void 0:r.tag}),p.jsx("h2",{children:r==null?void 0:r.title}),p.jsx("p",{children:r==null?void 0:r.description})]}),p.jsx("button",{type:"button",className:"text-button",onClick:()=>t("blog"),children:"Read more"})]}),p.jsx(jd,{images:(l==null?void 0:l.images)||(l==null?void 0:l.image)||(r==null?void 0:r.images)||(r==null?void 0:r.image),alt:(l==null?void 0:l.title)||(r==null?void 0:r.title)||"Spotlight feature",imageClassName:"spotlight-card__image"})]})]}),p.jsxs("section",{className:"section-stack",children:[p.jsx(ht,{children:p.jsx(cs,{eyebrow:"Showcase",title:"Featured Engineering Projects",description:"A modular view of the hardware, software, and design work that sits at the center of the portfolio."})}),p.jsx("div",{className:"project-grid",children:i.map((u,c)=>{const d=Bp(u);return p.jsx(ht,{delay:c*100,children:p.jsxs("article",{className:"project-card",children:[p.jsx(jd,{images:u.images||u.image,alt:u.title,imageClassName:"project-card__image"}),p.jsxs("div",{className:"project-card__body",children:[p.jsx("span",{className:"eyebrow",children:u.label}),p.jsx("h3",{children:u.title}),p.jsx("p",{children:u.description}),p.jsx("div",{className:"share-buttons",children:p.jsx("button",{type:"button",className:"chip-button",onClick:async()=>{try{await navigator.clipboard.writeText(d)}catch{await navigator.clipboard.writeText(d)}},children:"Copy link"})})]})]})},u.title)})})]})]})}const SD={home:tT,blog:ID,edit:TD,about:dD};function AD(){const[t,e]=G.useState(()=>window.localStorage.getItem("kaushalya-view")||"home"),[n,r]=G.useState(!1);G.useEffect(()=>{window.localStorage.setItem("kaushalya-view",t),window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},[t]);const i=s=>{e(s),r(!1)};return p.jsx(uD,{children:p.jsx(eD,{children:p.jsx(CD,{activeView:t,mobileMenuOpen:n,onNavigate:i,onToggleMenu:()=>r(s=>!s)})})})}function CD({activeView:t,mobileMenuOpen:e,onNavigate:n,onToggleMenu:r}){const{isAdmin:i,loading:s}=Ai();G.useEffect(()=>{!s&&t==="edit"&&!i&&n("home")},[t,i,s,n]);const o=G.useMemo(()=>SD[t]??tT,[t]);return p.jsxs("div",{className:"app-shell",children:[p.jsx(nA,{}),p.jsx(hD,{activeView:t,mobileMenuOpen:e,onNavigate:n,onToggleMenu:r}),p.jsx("main",{className:"page-shell",children:p.jsx(o,{onNavigate:n})}),p.jsx(aD,{onNavigate:n})]})}gh.createRoot(document.getElementById("root")).render(p.jsx(HT.StrictMode,{children:p.jsx(AD,{})}));
