(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[14],{135:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return n}))},141:function(e,t,a){"use strict";var n=a(74);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1)),i=(0,n(a(75)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},170:function(e,t,a){"use strict";var n=a(0),r=a(2),i=a(1),o=a.n(i),c=(a(6),a(12)),l=a(26),s=a(98),u=o.a.forwardRef((function(e,t){var a=e.classes,i=e.className,l=Object(r.a)(e,["classes","className"]),u=o.a.useContext(s.a);return o.a.createElement("div",Object(n.a)({className:Object(c.a)(a.root,i,"flex-start"===u.alignItems&&a.alignItemsFlexStart),ref:t},l))}));t.a=Object(l.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(u)},184:function(e,t,a){"use strict";var n=a(0),r=a(2),i=a(1),o=a.n(i),c=(a(6),a(12)),l=a(27),s=a(26),u=a(15),m=a(83),d=o.a.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.color,u=void 0===s?"primary":s,d=e.value,f=e.valueBuffer,b=e.variant,p=void 0===b?"indeterminate":b,g=Object(r.a)(e,["classes","className","color","value","valueBuffer","variant"]),h=Object(m.a)(),E={},v={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==d){E["aria-valuenow"]=Math.round(d);var y=d-100;"rtl"===h.direction&&(y=-y),v.bar1.transform="translateX(".concat(y,"%)")}else 0;if("buffer"===p)if(void 0!==f){var C=(f||0)-100;"rtl"===h.direction&&(C=-C),v.bar2.transform="translateX(".concat(C,"%)")}else 0;return o.a.createElement("div",Object(n.a)({className:Object(c.a)(a.root,a["color".concat(Object(l.a)(u))],i,{determinate:a.determinate,indeterminate:a.indeterminate,buffer:a.buffer,query:a.query}[p]),role:"progressbar"},E,{ref:t},g),"buffer"===p?o.a.createElement("div",{className:Object(c.a)(a.dashed,a["dashedColor".concat(Object(l.a)(u))])}):null,o.a.createElement("div",{className:Object(c.a)(a.bar,a["barColor".concat(Object(l.a)(u))],("indeterminate"===p||"query"===p)&&a.bar1Indeterminate,{determinate:a.bar1Determinate,buffer:a.bar1Buffer}[p]),style:v.bar1}),"determinate"===p?null:o.a.createElement("div",{className:Object(c.a)(a.bar,("indeterminate"===p||"query"===p)&&a.bar2Indeterminate,"buffer"===p?[a["color".concat(Object(l.a)(u))],a.bar2Buffer]:a["barColor".concat(Object(l.a)(u))]),style:v.bar2}))}));t.a=Object(s.a)((function(e){var t=function(t){return"light"===e.palette.type?Object(u.e)(t,.62):Object(u.a)(t,.5)},a=t(e.palette.primary.main),n=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4},colorPrimary:{backgroundColor:a},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0px -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0px -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",animationDelay:"1.15s"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0px -23px"},"50%":{opacity:0,backgroundPosition:"0px -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(d)},223:function(e,t,a){"use strict";var n=a(0),r=a(2),i=a(1),o=a.n(i),c=(a(6),a(601)),l=a(29),s=a(83),u=a(126),m=a(80),d={entering:{transform:"none"},entered:{transform:"none"}},f={enter:l.b.enteringScreen,exit:l.b.leavingScreen},b=o.a.forwardRef((function(e,t){var a=e.children,i=e.in,l=e.onEnter,b=e.onExit,p=e.style,g=e.timeout,h=void 0===g?f:g,E=Object(r.a)(e,["children","in","onEnter","onExit","style","timeout"]),v=Object(s.a)(),y=Object(m.a)(a.ref,t);return o.a.createElement(c.a,Object(n.a)({appear:!0,in:i,onEnter:function(e,t){Object(u.b)(e);var a=Object(u.a)({style:p,timeout:h},{mode:"enter"});e.style.webkitTransition=v.transitions.create("transform",a),e.style.transition=v.transitions.create("transform",a),l&&l(e,t)},onExit:function(e){var t=Object(u.a)({style:p,timeout:h},{mode:"exit"});e.style.webkitTransition=v.transitions.create("transform",t),e.style.transition=v.transitions.create("transform",t),b&&b(e)},timeout:h},E),(function(e,t){return o.a.cloneElement(a,Object(n.a)({style:Object(n.a)({transform:"scale(0)",visibility:"exited"!==e||i?void 0:"hidden"},d[e],{},p,{},a.props.style),ref:y},t))}))}));t.a=b},584:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var n=a(135),r=a(85),i=a(108),o=a(1),c=a.n(o),l=a(546),s=a(22),u=a(73),m=a(70),d=a(548),f=a(307),b=a(571),p=a(561),g=a(555),h=a(170),E=a(550),v=a(557),y=a(567),C=a(568),j=a(570),x=a(556),O=a(549),k=a(141),S=a.n(k),w=a(541),N=a(184),I=a(596),R=a(545),T=a(223),M=Object(f.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(10)},close:{padding:e.spacing(.5)},appBar:{position:"fixed"},title:{marginLeft:e.spacing(2),flex:1},avatar:{backgroundColor:e.palette.primary.main},linea:{width:"105%"},chatRight:{display:"flex",justifyContent:"flex-end"},me:{backgroundColor:e.palette.primary.main,margin:4,borderRadius:"10px 10px 0 10px",color:e.palette.getContrastText(e.palette.primary.main)},listame:{position:"flex",justifyContent:"flex-end"},them:{backgroundColor:e.palette.secondary.main,margin:4,borderRadius:"0 10px 10px 10px",color:e.palette.getContrastText(e.palette.secondary.main)},listathem:{position:"flex",justifyContent:"flex-start"},textoMensaje:Object(i.a)({},"& fieldset",{borderRadius:50}),listaGeneral:{top:e.spacing(7),width:"100%",position:"fixed",overflow:"auto",maxHeight:"80%"},grid:{position:"fixed",left:e.spacing(1),bottom:e.spacing(4),width:"100%"},grid2:{height:"80%"}}})),L=c.a.forwardRef((function(e,t){return c.a.createElement(j.a,Object.assign({direction:"up",ref:t},e))}));function P(){var e=c.a.useState([]),t=Object(r.a)(e,2),a=t[0],i=t[1],o=c.a.useState(!0),f=Object(r.a)(o,2),j=f[0],k=f[1],P=c.a.useState(null),B=Object(r.a)(P,2),U=B[0],q=B[1],A=c.a.useState(null),D=Object(r.a)(A,2),_=D[0],z=D[1],F=c.a.useState(null),H=Object(r.a)(F,2),J=H[0],G=H[1],X=c.a.useState(null),$=Object(r.a)(X,2),Q=$[0],W=$[1],Y=c.a.useState([]),K=Object(r.a)(Y,2),V=K[0],Z=K[1],ee=c.a.useState(!1),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],re=c.a.useState(!1),ie=Object(r.a)(re,2),oe=ie[0],ce=ie[1],le=c.a.useState(null),se=Object(r.a)(le,2),ue=se[0],me=se[1],de=M(),fe=JSON.parse(localStorage.getItem("usuarioChat")),be=function(){ce(!1)},pe=function(){var e=document.getElementById("lista");e.scrollHeight-e.scrollTop===e.clientHeight||(e.scrollTop=e.scrollHeight)};return c.a.useEffect((function(){return(new s.CometChat.UsersRequestBuilder).setLimit(30).build().fetchNext().then((function(e){i(e),k(!1)}),(function(e){console.log("Error al recibir lista: ",e)})),function(){s.CometChat.removeMessageListener("listener-key")}}),[]),c.a.useEffect((function(){if(s.CometChat.addCallListener("UNIQUE_LISTENER_ID",new s.CometChat.CallListener({onIncomingCallReceived:function(e){},onOutgoingCallAccepted:function(e){console.log("Llamada Saliente aceptada: ",e);var t=e.sessionID;s.CometChat.startCall(t,document.getElementById("callScreen"),new s.CometChat.OngoingCallListener({onUserJoined:function(e){},onUserLeft:function(e){},onCallEnded:function(e){}}))},onOutgoingCallRejected:function(e){},onIncomingCallCancelled:function(e){}})),U){(new s.CometChat.MessagesRequestBuilder).setUID(U).setLimit(30).build().fetchPrevious().then((function(e){Z(e),ne(!1)}),(function(e){})),s.CometChat.removeMessageListener("listener-key");s.CometChat.addMessageListener("UNIQUE_LISTENER_ID",new s.CometChat.MessageListener({onTextMessageReceived:function(e){U===e.sender.uid&&(Z((function(t){return[].concat(Object(n.a)(t),[e])})),pe())},onMediaMessageReceived:function(e){U===e.sender.uid&&Z((function(t){return[].concat(Object(n.a)(t),[e])}))}}))}}),[U]),j?c.a.createElement(u.a,{position:"absolute",top:"50%",left:"50%"},c.a.createElement(m.a,{color:"primary"})):c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null),c.a.createElement(x.a,{fullScreen:!0,open:oe,onClose:be,TransitionComponent:L},c.a.createElement(y.a,{className:de.appBar},c.a.createElement(C.a,null,c.a.createElement(O.a,{edge:"start",color:"inherit",onClick:be,"aria-label":"cerrar"},c.a.createElement(S.a,null)),c.a.createElement(E.a,{className:de.avatar,src:_}),c.a.createElement(w.a,{variant:"h6",className:de.title},"".concat(J," - ").concat(Q))),ae?c.a.createElement(N.a,{color:"secondary",className:de.linea}):null),c.a.createElement(R.a,{container:!0,spacing:2},c.a.createElement(R.a,{item:!0,xs:12},c.a.createElement(g.a,{className:de.listaGeneral,id:"lista"},ae?null:V.map((function(e,t){return e.receiverId!==fe.uid?c.a.createElement(T.a,{in:!0,timeout:500},c.a.createElement(p.a,{key:t,className:de.listame},c.a.createElement(d.a,{elevation:4,className:de.me},c.a.createElement(w.a,{variant:"body1",style:{padding:6}},e.data.text)),c.a.createElement(E.a,{src:fe.avatar,alt:"..."}))):c.a.createElement(T.a,{in:!0,timeout:500},c.a.createElement(p.a,{key:t,className:de.listathem},c.a.createElement(E.a,{src:_,alt:"..."}),c.a.createElement(d.a,{elevation:4,className:de.them},c.a.createElement(w.a,{variant:"body1",style:{padding:6}},e.data.text))))}))))),c.a.createElement(R.a,{container:!0,spacing:2,className:de.grid},c.a.createElement(R.a,{item:!0,xs:12,sm:12},c.a.createElement(I.a,{autoComplete:"mensaje",autoFocus:!0,className:de.textoMensaje,placeholder:"Escribe un mensaje...",required:!0,fullWidth:!0,onKeyDown:function(e){13===e.keyCode&&(!function(){var e=new s.CometChat.TextMessage(U,ue,s.CometChat.RECEIVER_TYPE.USER,s.CometChat.MESSAGE_TYPE.TEXT);s.CometChat.sendMessage(e).then((function(e){Z([].concat(Object(n.a)(V),[e])),pe()}),(function(e){console.log("No se pudo enviar el mensaje:",e)}))}(),document.activeElement.value="")},onChange:function(e){me(e.target.value)},type:"text",variant:"outlined"})))),c.a.createElement(v.a,{in:!0,timeout:1e3},c.a.createElement(d.a,{elevation:4,className:de.root},c.a.createElement(g.a,null,a.map((function(e,t){return c.a.createElement(p.a,{key:t,button:!0,divider:!0,onClick:function(){return t=e.uid,a=e.avatar,n=e.name,r=e.status,q(t),z(a),G(n),W(r),ne(!0),void ce(!0);var t,a,n,r}},c.a.createElement(h.a,null,c.a.createElement(E.a,{className:de.avatar,src:e.avatar})),c.a.createElement(b.a,{primary:e.name,secondary:"".concat(e.uid," - ").concat(e.status)}))}))))))}}}]);
//# sourceMappingURL=14.c4fbf328.chunk.js.map