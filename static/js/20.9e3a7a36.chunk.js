(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[20],{585:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return B}));var n=t(136),o=t(85),r=t(109),l=t(1),i=t.n(l),c=t(547),s=t(21),m=t(73),u=t(70),d=t(549),p=t(309),f=t(572),g=t(562),C=t(556),E=t(170),h=t(551),b=t(558),v=t(568),y=t(569),x=t(571),j=t(557),O=t(550),N=t(142),S=t.n(N),M=t(542),k=t(186),R=t(596),w=t(546),L=t(223),T=t(517),I=Object(p.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(10)},close:{padding:e.spacing(.5)},appBar:{position:"fixed"},title:{marginLeft:e.spacing(2),flex:1},avatar:{backgroundColor:e.palette.primary.main},linea:{width:"105%"},chatRight:{display:"flex",justifyContent:"flex-end"},me:{backgroundColor:e.palette.primary.main,margin:4,borderRadius:"10px 10px 0 10px",color:e.palette.getContrastText(e.palette.primary.main)},listame:{position:"flex",justifyContent:"flex-end"},them:{backgroundColor:e.palette.secondary.main,margin:4,borderRadius:"0 10px 10px 10px",color:e.palette.getContrastText(e.palette.secondary.main)},listathem:{position:"flex",justifyContent:"flex-start"},textoMensaje:Object(r.a)({},"& fieldset",{borderRadius:50}),listaGeneral:{top:e.spacing(7),width:"100%",position:"fixed",overflow:"auto",maxHeight:"80%"},grid:{position:"fixed",left:e.spacing(1),bottom:e.spacing(4),width:"100%"},grid2:{height:"80%"},message:{display:"flex",alignItems:"center"},avatarMensaje:{marginRight:e.spacing(1)}}})),U=i.a.forwardRef((function(e,a){return i.a.createElement(x.a,Object.assign({direction:"up",ref:a},e))}));function B(){var e=i.a.useState([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=i.a.useState(!0),p=Object(o.a)(l,2),x=p[0],N=p[1],B=i.a.useState(null),D=Object(o.a)(B,2),H=D[0],P=D[1],J=i.a.useState(null),_=Object(o.a)(J,2),q=_[0],G=_[1],z=i.a.useState(null),A=Object(o.a)(z,2),F=A[0],Y=A[1],K=i.a.useState(null),Q=Object(o.a)(K,2),V=Q[0],W=Q[1],X=i.a.useState([]),Z=Object(o.a)(X,2),$=Z[0],ee=Z[1],ae=i.a.useState(!1),te=Object(o.a)(ae,2),ne=te[0],oe=te[1],re=i.a.useState(!1),le=Object(o.a)(re,2),ie=le[0],ce=le[1],se=i.a.useState(null),me=Object(o.a)(se,2),ue=me[0],de=me[1],pe=i.a.useState(!1),fe=Object(o.a)(pe,2),ge=fe[0],Ce=fe[1],Ee=i.a.useState(!1),he=Object(o.a)(Ee,2),be=he[0],ve=he[1],ye=i.a.useState({}),xe=Object(o.a)(ye,2),je=xe[0],Oe=xe[1],Ne="UNIQUE_LISTENER_ID",Se=I(),Me=JSON.parse(localStorage.getItem("usuarioChat")),ke=function(){ce(!1),P(null)},Re=function(){var e=document.getElementById("lista");e.scrollHeight-e.scrollTop===e.clientHeight||(e.scrollTop=e.scrollHeight)};return i.a.useEffect((function(){return(new s.CometChat.UsersRequestBuilder).setLimit(30).build().fetchNext().then((function(e){r(e),N(!1)}),(function(e){console.log("Error al recibir lista: ",e)})),function(){s.CometChat.removeMessageListener("listener-key")}}),[]),i.a.useEffect((function(){(s.CometChat.addCallListener(Ne,new s.CometChat.CallListener({onIncomingCallReceived:function(e){},onOutgoingCallAccepted:function(e){console.log("Llamada Saliente aceptada: ",e);var a=e.sessionID;s.CometChat.startCall(a,document.getElementById("callScreen"),new s.CometChat.OngoingCallListener({onUserJoined:function(e){},onUserLeft:function(e){},onCallEnded:function(e){}}))},onOutgoingCallRejected:function(e){},onIncomingCallCancelled:function(e){}})),s.CometChat.addMessageListener(Ne,new s.CometChat.MessageListener({onTextMessageReceived:function(e){Oe({avatar:e.sender.avatar,texto:e.text,nombre:e.sender.uid}),Ce(!0)},onMediaMessageReceived:function(e){}})),s.CometChat.addUserListener(Ne,new s.CometChat.UserListener({onUserOnline:function(e){Oe({avatar:e.avatar,nombre:e.uid}),ve(!0)}})),H)&&((new s.CometChat.MessagesRequestBuilder).setUID(H).setLimit(30).build().fetchPrevious().then((function(e){ee(e),oe(!1),Re()}),(function(e){})),s.CometChat.removeMessageListener("listener-key"),s.CometChat.addMessageListener(Ne,new s.CometChat.MessageListener({onTextMessageReceived:function(e){H===e.sender.uid&&(ee((function(a){return[].concat(Object(n.a)(a),[e])})),Re())},onMediaMessageReceived:function(e){H===e.sender.uid&&ee((function(a){return[].concat(Object(n.a)(a),[e])}))}})))}),[H]),x?i.a.createElement(m.a,{position:"absolute",top:"50%",left:"50%"},i.a.createElement(u.a,{color:"primary"})):i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null),i.a.createElement(T.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:ge,TransitionComponent:U,autoHideDuration:3e3,onClose:function(){return Ce(!1)},style:{opacity:"0.9"},ContentProps:{"aria-describedby":"mensaje"},message:i.a.createElement(M.a,{variant:"button",className:Se.message},i.a.createElement(h.a,{src:je.avatar,alt:"...",className:Se.avatarMensaje}),je.texto),action:[i.a.createElement(O.a,{key:"close","aria-label":"close",color:"inherit",className:Se.close,onClick:function(){return Ce(!1)}},i.a.createElement(S.a,null))]}),i.a.createElement(T.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:be,TransitionComponent:U,autoHideDuration:3e3,onClose:function(){return ve(!1)},style:{opacity:"0.9"},ContentProps:{"aria-describedby":"mensaje"},message:i.a.createElement(M.a,{variant:"button",className:Se.message},i.a.createElement(h.a,{src:je.avatar,alt:"...",className:Se.avatarMensaje}),"".concat(je.nombre," se ha conectado")),action:[i.a.createElement(O.a,{key:"close","aria-label":"close",color:"inherit",className:Se.close,onClick:function(){return ve(!1)}},i.a.createElement(S.a,null))]}),i.a.createElement(j.a,{fullScreen:!0,open:ie,onClose:ke,TransitionComponent:U},i.a.createElement(v.a,{className:Se.appBar},i.a.createElement(y.a,null,i.a.createElement(O.a,{edge:"start",color:"inherit",onClick:ke,"aria-label":"cerrar"},i.a.createElement(S.a,null)),i.a.createElement(h.a,{className:Se.avatar,src:q}),i.a.createElement(M.a,{variant:"h6",className:Se.title},"".concat(F," - ").concat(V))),ne?i.a.createElement(k.a,{color:"secondary",className:Se.linea}):null),i.a.createElement(w.a,{container:!0,spacing:2},i.a.createElement(w.a,{item:!0,xs:12},i.a.createElement(C.a,{className:Se.listaGeneral,id:"lista"},ne?null:$.map((function(e,a){return e.receiverId!==Me.uid?i.a.createElement(L.a,{in:!0,timeout:500,key:a},i.a.createElement(g.a,{key:a,className:Se.listame},i.a.createElement(d.a,{elevation:4,className:Se.me},i.a.createElement(M.a,{variant:"body1",style:{padding:6}},e.text)),i.a.createElement(h.a,{src:Me.avatar,alt:"..."}))):i.a.createElement(L.a,{in:!0,timeout:500,key:a},i.a.createElement(g.a,{key:a,className:Se.listathem},i.a.createElement(h.a,{src:q,alt:"..."}),i.a.createElement(d.a,{elevation:4,className:Se.them},i.a.createElement(M.a,{variant:"body1",style:{padding:6}},e.text))))}))))),i.a.createElement(w.a,{container:!0,spacing:2,className:Se.grid},i.a.createElement(w.a,{item:!0,xs:12,sm:12},i.a.createElement(R.a,{autoComplete:"mensaje",autoFocus:!0,className:Se.textoMensaje,placeholder:"Escribe un mensaje...",required:!0,fullWidth:!0,onKeyDown:function(e){13===e.keyCode&&(!function(){var e=new s.CometChat.TextMessage(H,ue,s.CometChat.RECEIVER_TYPE.USER,s.CometChat.MESSAGE_TYPE.TEXT);s.CometChat.sendMessage(e).then((function(e){ee([].concat(Object(n.a)($),[e])),Re()}),(function(e){console.log("No se pudo enviar el mensaje:",e)}))}(),document.activeElement.value="")},onChange:function(e){de(e.target.value)},type:"text",variant:"outlined"})))),i.a.createElement(b.a,{in:!0,timeout:1e3},i.a.createElement(d.a,{elevation:4,className:Se.root},i.a.createElement(C.a,null,t.map((function(e,a){return i.a.createElement(g.a,{key:a,button:!0,divider:!0,onClick:function(){return a=e.uid,t=e.avatar,n=e.name,o=e.status,P(a),G(t),Y(n),W(o),oe(!0),void ce(!0);var a,t,n,o}},i.a.createElement(E.a,null,i.a.createElement(h.a,{className:Se.avatar,src:e.avatar})),i.a.createElement(f.a,{primary:e.name,secondary:"".concat(e.uid," - ").concat(e.status)}))}))))))}}}]);
//# sourceMappingURL=20.9e3a7a36.chunk.js.map