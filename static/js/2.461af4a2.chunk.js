(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[2],{104:function(e,t,n){e.exports=n(173)},105:function(e,t,n){"use strict";function o(e,t,n,o,r,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){o(a,r,i,s,c,"next",e)}function c(e){o(a,r,i,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return r}))},173:function(e,t,n){var o=function(e){"use strict";var t,n=Object.prototype,o=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(e,t,n,o){var r=t&&t.prototype instanceof d?t:d,i=Object.create(r.prototype),a=new L(o||[]);return i._invoke=function(e,t,n){var o=l;return function(r,i){if(o===f)throw new Error("Generator is already running");if(o===g){if("throw"===r)throw i;return X()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===l)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var c=u(e,t,n);if("normal"===c.type){if(o=n.done?g:p,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(o){return{type:"throw",arg:o}}}e.wrap=c;var l="suspendedStart",p="suspendedYield",f="executing",g="completed",h={};function d(){}function m(){}function v(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,y=w&&w(w(k([])));y&&y!==n&&o.call(y,i)&&(b=y);var _=v.prototype=d.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e){var t;this._invoke=function(n,r){function i(){return new Promise((function(t,i){!function t(n,r,i,a){var s=u(e[n],e,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(l).then((function(e){c.value=e,i(c)}),(function(e){return t("throw",e,i,a)}))}a(s.arg)}(n,r,t,i)}))}return t=t?t.then(i,i):i()}}function O(e,n){var o=e.iterator[n.method];if(o===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=u(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,h;var i=r.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function k(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:X}}function X(){return{value:t,done:!0}}return m.prototype=_.constructor=v,v.constructor=m,v[s]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(t,n,o,r){var i=new E(c(t,n,o,r));return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(_),_[s]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(o,r){return s.type="throw",s.arg=e,n.next=o,r&&(n.method="next",n.arg=t),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;C(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:k(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=o}catch(r){Function("r","regeneratorRuntime = r")(o)}},174:function(e,t){var n=window.gapi=window.gapi||{};n._bs=(new Date).getTime(),function(){var e,t=window,n=document,o=t.location,r=function(){},i=/\[native code\]/,a=function(e,t,n){return e[t]=e[t]||n},s=function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1},c=function(){var e;if((e=Object.create)&&i.test(e))e=e(null);else for(var t in e={})e[t]=void 0;return e},u=a(t,"gapi",{});e=a(t,"___jsl",c()),a(e,"I",0),a(e,"hel",10);var l=function(){var t,n=o.href;if(e.dpo)t=e.h;else{t=e.h;if(n=n&&(/([#].*&|[#])jsh=([^&#]*)/g.exec(n)||/([?#].*&|[?#])jsh=([^&#]*)/g.exec(n)))try{t=decodeURIComponent(n[2])}catch(r){}}return t},p=function(t){return a(a(e,"H",c()),t,c())},f=a(e,"perf",c()),g=a(f,"g",c()),h=a(f,"i",c());a(f,"r",[]),c(),c();var d=function(e,t,n){var o=f.r;"function"===typeof o?o(e,t,n):o.push([e,t,n])},m=function(e,t,n){t&&0<t.length&&(t=v(t),n&&0<n.length&&(t+="___"+v(n)),28<t.length&&(t=t.substr(0,28)+(t.length-28)),n=t,t=a(h,"_p",c()),a(t,n,c())[e]=(new Date).getTime(),d(e,"_p",n))},v=function(e){return e.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")},b=c(),w=[],y=function(e){throw Error("Bad hint"+(e?": "+e:""))};w.push(["jsl",function(t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=t[n];"object"==typeof o?e[n]=a(e,n,[]).concat(o):a(e,n,o)}(n=t.u)&&((t=a(e,"us",[])).push(n),(n=/^https:(.*)$/.exec(n))&&t.push("http:"+n[1]))}]);var _=/^(\/[a-zA-Z0-9_\-]+)+$/,x=[/\/amp\//,/\/amp$/,/^\/amp$/],E=/^[a-zA-Z0-9\-_\.,!]+$/,O=/^gapi\.loaded_[0-9]+$/,j=/^[a-zA-Z0-9,._-]+$/,C=function(e){"/"!==e.charAt(0)&&y("relative path");for(var t=e.substring(1).split("/"),n=[];t.length;){if((e=t.shift()).length&&0!=e.indexOf(".")){if(0<e.indexOf("=")){t.unshift(e);break}}else y("empty/relative directory");n.push(e)}e={};for(var o=0,r=t.length;o<r;++o){var i=t[o].split("="),a=decodeURIComponent(i[0]),s=decodeURIComponent(i[1]);2==i.length&&a&&s&&(e[a]=e[a]||s)}for(t="/"+n.join("/"),_.test(t)||y("invalid_prefix"),n=0,o=x.length;n<o;++n)x[n].test(t)&&y("invalid_prefix");return{g:t,version:n=k(e,"k",!0),a:o=k(e,"am"),c:r=k(e,"rs"),f:e=k(e,"t")}},L=function(e){for(var t=[],n=0,o=e.length;n<o;++n){var r=e[n].replace(/\./g,"_").replace(/-/g,"_");j.test(r)&&t.push(r)}return t.join(",")},k=function(e,t,n){if(!(e=e[t])&&n&&y("missing: "+t),e){if(E.test(e))return e;y("invalid: "+t)}return null},X=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,G=/\/cb=/g,T=/\/\//g;b.m=function(e,t,n,o){return(e=e[0])||y("missing_hint"),"https://apis.google.com"+function(e,t,n,o){e=C(e),O.test(n)||y("invalid_callback"),t=L(t),o=o&&o.length?L(o):null;var r=function(e){return encodeURIComponent(e).replace(/%2C/g,",")};return[encodeURIComponent(e.g).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",r(e.version),"/m=",r(t),o?"/exm="+r(o):"","/rt=j/sv=1/d=1/ed=1",e.a?"/am="+r(e.a):"",e.c?"/rs="+r(e.c):"",e.f?"/t="+r(e.f):"","/cb=",r(n)].join("")}(e,t,n,o)};var R=decodeURI("%73cript"),U=/^[-+_0-9\/A-Za-z]+={0,2}$/,P=function(e,t){for(var n=[],o=0;o<e.length;++o){var r=e[o];r&&0>s.call(t,r)&&n.push(r)}return n},I=function(){var t=e.nonce;if(void 0!==t)return t&&t===String(t)&&t.match(U)?t:e.nonce=null;var o=a(e,"us",[]);if(!o||!o.length)return e.nonce=null;for(var r=n.getElementsByTagName(R),i=0,s=r.length;i<s;++i){var c=r[i];if(c.src&&(t=String(c.getAttribute("nonce")||"")||null)){for(var u=0,l=o.length;u<l&&o[u]!==c.src;++u);if(u!==l&&t&&t===String(t)&&t.match(U))return e.nonce=t}}return null},S=function(e){var t=n.createElement(R);t.setAttribute("src",e),null!==(e=I())&&t.setAttribute("nonce",e),t.async="true",(e=n.getElementsByTagName(R)[0])?e.parentNode.insertBefore(t,e):(n.head||n.body||n.documentElement).appendChild(t)},D=function(t,n){var o=n||{};"function"==typeof n&&((o={}).callback=n),function(e,t){var n=t&&t._c;if(n)for(var o=0;o<w.length;o++){var r=w[o][0],i=w[o][1];i&&Object.prototype.hasOwnProperty.call(n,r)&&i(n[r],e,t)}}(t,o),n=t?t.split(":"):[];var r=o.h||function(){var e=l();if(!e)throw Error("Bad hint");return e}(),i=a(e,"ah",c());if(i["::"]&&n.length){t=[];for(var s=null;s=n.shift();){var u=s.split("."),p=(u=i[s]||i[u[1]&&"ns:"+u[0]||""]||r,t.length&&t[t.length-1]||null),f=p;p&&p.hint==u||(f={hint:u,b:[]},t.push(f)),f.b.push(s)}var g=t.length;if(1<g){var h=o.callback;h&&(o.callback=function(){0==--g&&h()})}for(;n=t.shift();)A(n.b,o,n.hint)}else A(n||[],o,r)},A=function(o,i,s){o=function(e){e=e.sort();for(var t=[],n=void 0,o=0;o<e.length;o++){var r=e[o];r!=n&&t.push(r),n=r}return t}(o)||[];var f=i.callback,g=i.config,h=i.timeout,d=i.ontimeout,v=i.onerror,w=void 0;"function"==typeof v&&(w=v);var _=null,x=!1;if(h&&!d||!h&&d)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";v=a(p(s),"r",[]).sort();var E=a(p(s),"L",[]).sort(),O=[].concat(v),j=function(n,o){if(x)return 0;t.clearTimeout(_),E.push.apply(E,C);var r=((u||{}).config||{}).update;if(r?r(g):g&&a(e,"cu",[]).push(g),o){m("me0",n,O);try{!function(e,t,n){M((function(){var n;n=t===l()?a(u,"_",c()):c(),n=a(p(t),"_",n),e(n)}),n)}(o,s,w)}finally{m("me1",n,O)}}return 1};if(0<h&&(_=t.setTimeout((function(){x=!0,d()}),h)),(C=P(o,E)).length){var C=P(o,v),L=a(e,"CP",[]),k=L.length;if(L[k]=function(t){if(!t)return 0;m("ml1",C,O);var n=function(n){L[k]=null,j(C,t)&&function(t){var n=a(e,"PQ",[]);e.PQ=[];var o=n.length;if(0===o)t();else for(var r=0,i=function(){++r===o&&t()},s=0;s<o;s++)n[s](i)}((function(){f&&f(),n()}))},o=function(){var e=L[k+1];e&&e()};0<k&&L[k-1]?L[k]=function(){n(o)}:n(o)},C.length){var U="loaded_"+e.I++;u[U]=function(e){L[k](e),u[U]=null},o=function(e,t,n,o){var r=e.split(";"),i=r.shift(),a=b[i],s=null;return a?s=a(r,t,n,o):y("no hint processor for: "+i),s||y("failed to generate load url"),n=(t=s).match(T),(o=t.match(G))&&1===o.length&&X.test(t)&&n&&1===n.length||y("failed sanity: "+e),s}(s,C,"gapi."+U,v),v.push.apply(v,C),m("ml0",C,O),i.sync||t.___gapisync?function(e){if("loading"!=n.readyState)S(e);else{var t=I(),o="";null!==t&&(o=' nonce="'+t+'"'),n.write("<"+R+' src="'+encodeURI(e)+'"'+o+"></"+R+">")}}(o):S(o)}else L[k](r)}else j(C)&&f&&f()},M=function(t,n){if(e.hee&&0<e.hel)try{return t()}catch(o){n&&n(o),e.hel--,D("debug_error",(function(){try{window.___jsl.hefn(o)}catch(e){throw o}}))}else try{return t()}catch(o){throw n&&n(o),o}};u.load=function(e,t){return M((function(){return D(e,t)}))},g.bs0=window.gapi._bs||(new Date).getTime(),d("bs0"),g.bs1=(new Date).getTime(),d("bs1"),delete window.gapi._bs}.call(this),n.load("",{callback:window.gapi_onload,_c:{jsl:{ci:{deviceType:"desktop","oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",disableOpt:!0,idpIframeUrl:"https://accounts.google.com/o/oauth2/iframe",usegapi:!1},debug:{reportExceptionRate:.05,forceIm:!1,rethrowException:!1,host:"https://apis.google.com"},enableMultilogin:!0,"googleapis.config":{auth:{useFirstPartyAuthV2:!0}},isPlusUser:!0,inline:{css:1},disableRealtimeCallback:!1,drive_share:{skipInitCommand:!0},csi:{rate:.01},client:{headers:{request:["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","Want-Digest","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Experiments","x-goog-iam-authority-selector","x-goog-iam-authorization-token","X-Goog-Spatula","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Pan-Versionid","X-Proxied-User-IP","X-Origin","X-Referer","X-Requested-With","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-Ios-Bundle-Identifier","X-Android-Package","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"],response:["Digest","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","Vary","Unzipped-Content-MD5","X-Goog-Generation","X-Goog-Metageneration","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Google-Trace","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Goog-Updated-Authorization","X-Server-Object-Version","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid","X-Google-Gfe-Backend-Request-Cost"]},rms:"migrated",cors:!1},isLoggedIn:!0,signInDeprecation:{rate:0},include_granted_scopes:!0,llang:"en",iframes:{youtube:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",methods:["scroll","openwindow"]},ytsubscribe:{url:"https://www.youtube.com/subscribe_embed?usegapi=1"},plus_circle:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"},plus_share:{params:{url:""},url:":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"},rbr_s:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},udc_webconsentflow:{params:{url:""},url:"https://myaccount.google.com/webconsent?usegapi=1"},":source:":"3p",playemm:{url:"https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"},savetoandroidpay:{url:"https://androidpay.google.com/a/widget/save"},blogger:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",methods:["scroll","openwindow"]},evwidget:{params:{url:""},url:":socialhost:/:session_prefix:_/events/widget?usegapi=1"},partnersbadge:{url:"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"},surveyoptin:{url:"https://www.google.com/shopping/customerreviews/optin?usegapi=1"},":socialhost:":"https://apis.google.com",shortlists:{url:""},hangout:{url:"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},plus_followers:{params:{url:""},url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},post:{params:{url:""},url:":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"},":gplus_url:":"https://plus.google.com",signin:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",methods:["onauth"]},rbr_i:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},donation:{url:"https://onetoday.google.com/home/donationWidget?usegapi=1"},share:{url:":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"},plusone:{params:{count:"",size:"",url:""},url:":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"},comments:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",methods:["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com",backdrop:{url:"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"},visibility:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"},autocomplete:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/autocomplete"},additnow:{url:"https://apis.google.com/additnow/additnow.html?usegapi=1",methods:["launchurl"]},":signuphost:":"https://plus.google.com",ratingbadge:{url:"https://www.google.com/shopping/customerreviews/badge?usegapi=1"},appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},sharetoclassroom:{url:"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi=1"},ytshare:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"},plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},family_creation:{params:{url:""},url:"https://families.google.com/webcreation?usegapi=1&usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},zoomableimage:{url:"https://ssl.gstatic.com/microscope/embed/"},savetowallet:{url:"https://clients5.google.com/s2w/o/savetowallet"},person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},savetodrive:{url:"https://drive.google.com/savetodrivebutton?usegapi=1",methods:["save"]},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},card:{url:":socialhost:/:session_prefix:_/hovercard/card"}}},h:"m;/_/scs/apps-static/_/js/k=oz.gapi.en.WcpMzqgmJZU.O/m=__features__/am=AQ/rt=j/d=1/rs=AGLTcCNsTS1p4dx0iMhlrwEpiaXw4iMjOg",u:"https://apis.google.com/js/api.js",hee:!0,fp:"3ee240f9336b92bc9cc2b5c3d9a76daf82153e3c",dpo:!1},fp:"3ee240f9336b92bc9cc2b5c3d9a76daf82153e3c",annotation:["interactivepost","recobar","signin2","autocomplete","profile"],bimodal:["signin","share"]}}),e.exports=n},176:function(e,t,n){"use strict";var o=n(74);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(1)),i=(0,o(n(75)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},608:function(e,t,n){"use strict";var o=n(2),r=n(11),i=n(0),a=n(1),s=n.n(a),c=(n(6),n(12)),u=n(26),l=n(30),p=n(28),f=n.n(p),g=n(113),h=n(82),d=n(123),m=n(133);function v(e){return e.substring(2).toLowerCase()}var b=s.a.forwardRef((function(e,t){var n=e.children,o=e.mouseEvent,r=void 0===o?"onClick":o,i=e.touchEvent,a=void 0===i?"onTouchEnd":i,c=e.onClickAway,u=s.a.useRef(!1),l=s.a.useRef(null),p=s.a.useRef(!1);s.a.useEffect((function(){return p.current=!0,function(){p.current=!1}}),[]);var b=Object(h.a)(l,t),w=s.a.useCallback((function(e){Object(d.a)(b,f.a.findDOMNode(e))}),[b]),y=Object(h.a)(n.ref,w),_=Object(m.a)((function(e){if(!e.defaultPrevented&&p.current)if(u.current)u.current=!1;else if(l.current){var t=Object(g.a)(l.current);t.documentElement&&t.documentElement.contains(e.target)&&!l.current.contains(e.target)&&c(e)}})),x=s.a.useCallback((function(){u.current=!0}),[]);return s.a.useEffect((function(){if(!1!==a){var e=v(a);return document.addEventListener(e,_),document.addEventListener("touchmove",x),function(){document.removeEventListener(e,_),document.removeEventListener("touchmove",x)}}}),[_,x,a]),s.a.useEffect((function(){if(!1!==r){var e=v(r);return document.addEventListener(e,_),function(){document.removeEventListener(e,_)}}}),[_,r]),s.a.createElement(s.a.Fragment,null,s.a.cloneElement(n,{ref:y}))})),w=n(27),y=n(152),_=n(555),x=n(556),E=n(549),O=n(15),j=s.a.forwardRef((function(e,t){var n=e.action,r=e.classes,a=e.className,u=e.message,l=Object(o.a)(e,["action","classes","className","message"]);return s.a.createElement(x.a,Object(i.a)({component:E.a,variant:"body2",variantMapping:{body1:"div",body2:"div"},role:"alertdialog",square:!0,elevation:6,className:Object(c.a)(r.root,a),ref:t},l),s.a.createElement("div",{className:r.message},u),n?s.a.createElement("div",{className:r.action},n):null)})),C=Object(u.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(O.b)(e.palette.background.default,t);return{root:Object(r.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(j),L=s.a.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,a=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,u=r.horizontal,p=e.autoHideDuration,f=e.children,g=e.classes,h=e.className,d=e.ClickAwayListenerProps,m=e.ContentProps,v=e.disableWindowBlurListener,x=void 0!==v&&v,E=e.message,O=e.onClose,j=e.onEnter,L=e.onEntered,k=e.onEntering,X=e.onExit,G=e.onExited,T=e.onExiting,R=e.onMouseEnter,U=e.onMouseLeave,P=e.open,I=e.resumeHideDuration,S=e.TransitionComponent,D=void 0===S?_.a:S,A=e.transitionDuration,M=void 0===A?{enter:l.b.enteringScreen,exit:l.b.leavingScreen}:A,N=e.TransitionProps,z=Object(o.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),B=s.a.useRef(),W=s.a.useState(!0),F=W[0],H=W[1],$=s.a.useCallback((function(e){var t=null!=e?e:p;O&&null!=t&&(clearTimeout(B.current),B.current=setTimeout((function(){O&&null!=(null!=e?e:p)&&O(null,"timeout")}),t))}),[p,O]);s.a.useEffect((function(){return P&&$(),function(){clearTimeout(B.current)}}),[P,$]);var V=function(){clearTimeout(B.current)},q=s.a.useCallback((function(){if(null!=p){if(null!=I)return void $(I);$(.5*p)}}),[p,I,$]);return s.a.useEffect((function(){if(!x&&P)return window.addEventListener("focus",q),window.addEventListener("blur",V),function(){window.removeEventListener("focus",q),window.removeEventListener("blur",V)}}),[x,q,P]),!P&&F?null:s.a.createElement(b,Object(i.a)({onClickAway:function(e){O&&O(e,"clickaway")}},d),s.a.createElement("div",Object(i.a)({className:Object(c.a)(g.root,g["anchorOrigin".concat(Object(w.a)(a)).concat(Object(w.a)(u))],h),onMouseEnter:function(e){R&&R(e),V()},onMouseLeave:function(e){U&&U(e),q()},ref:t},z),s.a.createElement(D,Object(i.a)({appear:!0,in:P,onEnter:Object(y.a)((function(){H(!1)}),j),onEntered:L,onEntering:k,onExit:X,onExited:Object(y.a)((function(){H(!0)}),G),onExiting:T,timeout:M,direction:"top"===a?"down":"up"},N),f||s.a.createElement(C,Object(i.a)({message:E,action:n},m)))))}));t.a=Object(u.a)((function(e){var t={top:8},n={bottom:8},o={justifyContent:"flex-end"},a={justifyContent:"flex-start"},s={top:24},c={bottom:24},u={right:24},l={left:24},p={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(i.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({},s,{},p))),anchorOriginBottomCenter:Object(i.a)({},n,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({},c,{},p))),anchorOriginTopRight:Object(i.a)({},t,{},o,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({left:"auto"},s,{},u))),anchorOriginBottomRight:Object(i.a)({},n,{},o,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({left:"auto"},c,{},u))),anchorOriginTopLeft:Object(i.a)({},t,{},a,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({right:"auto"},s,{},l))),anchorOriginBottomLeft:Object(i.a)({},n,{},a,Object(r.a)({},e.breakpoints.up("sm"),Object(i.a)({right:"auto"},c,{},l)))}}),{flip:!1,name:"MuiSnackbar"})(L)}}]);
//# sourceMappingURL=2.461af4a2.chunk.js.map