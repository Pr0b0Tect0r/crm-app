(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[22],{658:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return te}));var n=t(134),l=t(85),o=t(110),i=t(1),r=t.n(i),c=t(613),s=t(22),m=t(73),u=t(70),d=t(615),p=t(339),E=t(638),f=t(628),g=t(622),C=t(177),h=t(617),v=t(624),y=t(634),b=t(635),j=t(637),x=t(623),N=t(616),S=t(140),O=t.n(S),k=t(608),T=t(201),M=t(669),_=t(612),I=t(643),L=t(578),w=t(644),A=t(673),R=t(576),F=t.n(R),P=t(178),H=t.n(P),V=t(577),Y=t.n(V),D=t(626),U=t(627),z=t(633),G=t(610),B=t(573),J=t.n(B),W=t(574),q=t.n(W),K=t(575),$=t.n(K),Q=t(609),X=t(190),Z=t.n(X),ee=Object(p.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(10)},close:{padding:e.spacing(.5)},appBar:{position:"fixed"},title:{marginLeft:e.spacing(2),flex:1},"@keyframes blinker":{"0%":{opacity:1},"50%":{opacity:.2},"100%":{opacity:1}},avatar:{height:50,width:50,animation:"$blinker 1s infinite"},linea:{width:"105%"},chatRight:{display:"flex",justifyContent:"flex-end"},me:{backgroundColor:e.palette.primary.main,margin:4,borderRadius:"10px 10px 0 10px",color:e.palette.getContrastText(e.palette.primary.main)},listame:{position:"flex",justifyContent:"flex-end"},them:{backgroundColor:e.palette.secondary.main,margin:4,borderRadius:"0 10px 10px 10px",color:e.palette.getContrastText(e.palette.secondary.main)},listathem:{position:"flex",justifyContent:"flex-start"},textoMensaje:Object(o.a)({},"& fieldset",{borderRadius:50}),listaGeneral:{top:e.spacing(7),width:"100%",position:"fixed",overflow:"auto",maxHeight:"80%"},grid:{position:"fixed",left:e.spacing(1),bottom:e.spacing(4),width:"100%"},grid2:{height:"80%"},message:{display:"flex",alignItems:"center"},avatarMensaje:{marginRight:e.spacing(1)},speedLlamadas:{position:"fixed",top:e.spacing(1.3),right:e.spacing(2)},div:{position:"absolute",width:"100%",height:"100%"},speedArchivos:{position:"fixed",top:e.spacing(1.3),right:e.spacing(8)},inputFile:{display:"none"},imagenMensaje:{padding:6,width:"100%",height:"100%"},listaNoMensaje:{position:"flex",justifyContent:"center"},noMensaje:{backgroundColor:e.palette.primary.main,margin:4,borderRadius:"10px 10px 10px 10px",color:e.palette.getContrastText(e.palette.primary.main)}}})),ae=r.a.forwardRef((function(e,a){return r.a.createElement(j.a,Object.assign({direction:"up",ref:a},e))}));function te(){var e=r.a.useState([]),a=Object(l.a)(e,2),t=a[0],o=a[1],i=r.a.useState(!0),p=Object(l.a)(i,2),j=p[0],S=p[1],R=r.a.useState(null),P=Object(l.a)(R,2),V=P[0],B=P[1],W=r.a.useState(null),K=Object(l.a)(W,2),X=K[0],te=K[1],ne=r.a.useState([]),le=Object(l.a)(ne,2),oe=le[0],ie=le[1],re=r.a.useState(!1),ce=Object(l.a)(re,2),se=ce[0],me=ce[1],ue=r.a.useState(!1),de=Object(l.a)(ue,2),pe=de[0],Ee=de[1],fe=r.a.useState(null),ge=Object(l.a)(fe,2),Ce=ge[0],he=ge[1],ve=r.a.useState(!1),ye=Object(l.a)(ve,2),be=ye[0],je=ye[1],xe=r.a.useState(!1),Ne=Object(l.a)(xe,2),Se=Ne[0],Oe=Ne[1],ke=r.a.useState({}),Te=Object(l.a)(ke,2),Me=Te[0],_e=Te[1],Ie=r.a.useState(!1),Le=Object(l.a)(Ie,2),we=Le[0],Ae=Le[1],Re=r.a.useState(!1),Fe=Object(l.a)(Re,2),Pe=Fe[0],He=Fe[1],Ve=r.a.useState(!1),Ye=Object(l.a)(Ve,2),De=Ye[0],Ue=Ye[1],ze=r.a.useState(null),Ge=Object(l.a)(ze,2),Be=Ge[0],Je=Ge[1],We=r.a.useState(!1),qe=Object(l.a)(We,2),Ke=qe[0],$e=qe[1],Qe=r.a.useState(null),Xe=Object(l.a)(Qe,2),Ze=Xe[0],ea=(Xe[1],r.a.useState(null)),aa=Object(l.a)(ea,2),ta=aa[0],na=(aa[1],r.a.useState(!1)),la=Object(l.a)(na,2),oa=la[0],ia=la[1],ra=ee(),ca=Z.a.connect("http://172.19.39.179:5000",{forceNew:!0}),sa=JSON.parse(localStorage.getItem("usuarioChat")),ma=function(){Ee(!1),B(null)},ua=function(){var e=document.getElementById("lista");e.scrollHeight-e.scrollTop===e.clientHeight||(e.scrollTop=e.scrollHeight)},da=function(e){var a=new s.CometChat.MediaMessage(V,e.target.files[0],s.CometChat.MESSAGE_TYPE.FILE,s.CometChat.RECEIVER_TYPE.USER);s.CometChat.sendMediaMessage(a).then((function(e){ie([].concat(Object(n.a)(oe),[e])),ua()}),(function(e){console.log("No se pudo enviar el archivo: ",e)}))},pa=function(e){if(e){var a=e.target.files;if(a){var t=a[0];if(t){if(["image/gif","image/jpeg","image/png","image/webp","image/svg+xml"].includes(t.type)&&!(t.size>20971520)){var l=new s.CometChat.MediaMessage(V,t,s.CometChat.MESSAGE_TYPE.IMAGE,s.CometChat.RECEIVER_TYPE.USER);s.CometChat.sendMediaMessage(l).then((function(e){ie([].concat(Object(n.a)(oe),[e])),ua()}),(function(e){console.log("No se pudo enviar el archivo: ",e)}))}}}}};return r.a.useEffect((function(){if(ca.on("notificacion",(function(e){e.uid===sa.uid||(_e({avatar:e.avatar,nombre:e.uid}),Oe(!0))})),ca.on("notificacion/mensaje",(function(e){e.receiverId===sa.uid&&(V===e.sender?je(!1):(_e({avatar:e.avatar,texto:e.texto,nombre:e.sender}),je(!0)))})),ca.emit("usuarios"),ca.on("usuarios/respuesta",(function(e){o(e),S(!1)})),ca.on("conversation/respuesta",(function(e){ie(e)})),V){var e={id1:"".concat(V,"_user_").concat(sa.uid),id2:"".concat(sa.uid,"_user_").concat(V)};ca.emit("conversation",e),ca.on("conversation/respuesta",(function(e){ie(e),me(!1),ua()}))}}),[V]),j?r.a.createElement(m.a,{position:"absolute",top:"50%",left:"50%"},r.a.createElement(u.a,{color:"primary"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:be,TransitionComponent:ae,autoHideDuration:3e3,onClose:function(){return je(!1)},style:{opacity:"0.9"},ContentProps:{"aria-describedby":"mensaje"},message:r.a.createElement(k.a,{variant:"button",className:ra.message},r.a.createElement(h.a,{src:Me.avatar,alt:"...",className:ra.avatarMensaje}),Me.texto),action:[r.a.createElement(N.a,{key:"close","aria-label":"close",color:"inherit",className:ra.close,onClick:function(){return je(!1)}},r.a.createElement(O.a,null))]}),r.a.createElement(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:Se,TransitionComponent:ae,autoHideDuration:3e3,onClose:function(){return Oe(!1)},style:{opacity:"0.9"},ContentProps:{"aria-describedby":"mensaje"},message:r.a.createElement(k.a,{variant:"button",className:ra.message},r.a.createElement(h.a,{src:Me.avatar,alt:"...",className:ra.avatarMensaje}),"".concat(Me.nombre," se ha conectado")),action:[r.a.createElement(N.a,{key:"close","aria-label":"close",color:"inherit",className:ra.close,onClick:function(){return Oe(!1)}},r.a.createElement(O.a,null))]}),r.a.createElement(x.a,{fullWidth:!0,open:De,onClose:function(){return Ue(!1)},TransitionComponent:ae},r.a.createElement(D.a,null,r.a.createElement(k.a,{variant:"button"},"Llamando...")),r.a.createElement(U.a,null,r.a.createElement(h.a,{src:X,alt:"...",className:ra.avatar})),r.a.createElement(z.a,null,r.a.createElement(G.a,{color:"secondary",onClick:function(){return Ue(!1),void s.CometChat.rejectCall(Be,s.CometChat.CALL_STATUS.CANCELLED).then((function(){Je(null)}),(function(e){console.log("Error al cancelar llamada: ",e)}))}},"Cancelar"))),r.a.createElement(x.a,{fullWidth:!0,open:Ke,onClose:function(){return $e(!1)},TransitionComponent:ae},r.a.createElement(D.a,null,r.a.createElement(k.a,{variant:"button"},"Llamanda entrante...")),r.a.createElement(U.a,null,r.a.createElement(h.a,{src:ta,alt:"...",className:ra.avatar})),r.a.createElement(z.a,null,r.a.createElement(G.a,{color:"secondary",onClick:function(){return $e(!1),void s.CometChat.rejectCall(Ze,s.CometChat.CALL_STATUS.CANCELLED).then((function(){}),(function(e){console.log("Error al rechazar llamada: ",e)}))}},"Cancelar"),r.a.createElement(G.a,{color:"primary",variant:"contained",onClick:function(){return $e(!1),void s.CometChat.acceptCall(Ze).then((function(){ia(!0),s.CometChat.startCall(Ze,document.getElementById("callScreen"),new s.CometChat.OngoingCallListener({onCallEnded:function(e){ia(!1)}}))}),(function(e){console.log("Error al aceptar la llamada: ",e)}))}},"Aceptar"))),r.a.createElement(x.a,{fullScreen:!0,open:oa,onClose:function(){return ia(!1)},TransitionComponent:ae},r.a.createElement("div",{id:"callScreen",className:ra.div})),r.a.createElement(x.a,{fullScreen:!0,open:pe,onClose:ma,TransitionComponent:ae},r.a.createElement(y.a,{className:ra.appBar},r.a.createElement(b.a,null,r.a.createElement(N.a,{edge:"start",color:"inherit",onClick:ma,"aria-label":"cerrar"},r.a.createElement(O.a,null)),r.a.createElement(h.a,{src:X}),r.a.createElement(k.a,{variant:"h6",className:ra.title},"".concat(V)),r.a.createElement(w.a,{className:ra.speedArchivos,direction:"down",FabProps:{size:"small",color:"secondary"},ariaLabel:"Archivos",icon:r.a.createElement(J.a,null),onClose:function(){return He(!1)},onOpen:function(){return He(!0)},open:Pe},[{name:"File"},{name:"Images"}].map((function(e){return r.a.createElement(A.a,{key:e.name,icon:"File"===e.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:ra.inputFile,name:"archivoFile",id:"archivoFile",type:"file",onChange:da}),r.a.createElement("label",{htmlFor:"archivoFile"},r.a.createElement(q.a,null))):"Images"===e.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:ra.inputFile,accept:"image/*",name:"archivoImages",id:"archivoImages",type:"file",onChange:pa}),r.a.createElement("label",{htmlFor:"archivoImages"},r.a.createElement($.a,null))):"",tooltipTitle:e.name})}))),r.a.createElement(w.a,{className:ra.speedLlamadas,direction:"down",FabProps:{size:"small",color:"secondary"},ariaLabel:"Llamadas",icon:r.a.createElement(F.a,null),onClose:function(){return Ae(!1)},onOpen:function(){return Ae(!0)},open:we},[{name:"Audio"},{name:"Video"}].map((function(e){return r.a.createElement(A.a,{key:e.name,icon:"Audio"===e.name?r.a.createElement(H.a,null):"Video"===e.name?r.a.createElement(Y.a,null):"",tooltipTitle:e.name,onClick:"Audio"===e.name?function(){return function(){Ue(!0);var e=new s.CometChat.Call(V,s.CometChat.CALL_TYPE.AUDIO,s.CometChat.RECEIVER_TYPE.USER);s.CometChat.initiateCall(e).then((function(e){Je([e][0].sessionId)}),(function(e){console.log("Ha fallado el inicio de llamada: ",e)}))}()}:"Video"===e.name?function(){return function(){Ue(!0);var e=new s.CometChat.Call(V,s.CometChat.CALL_TYPE.VIDEO,s.CometChat.RECEIVER_TYPE.USER);s.CometChat.initiateCall(e).then((function(e){Je([e][0].sessionId)}),(function(e){console.log("Ha fallado el inicio de llamada: ",e)}))}()}:""})})))),se?r.a.createElement(T.a,{color:"secondary",className:ra.linea}):null),r.a.createElement(_.a,{container:!0,spacing:2},r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(g.a,{className:ra.listaGeneral,id:"lista"},se?null:oe.length?oe.map((function(e,a){return e.receiverId!==sa.uid?r.a.createElement(I.a,{in:!0,timeout:500,key:a},r.a.createElement(f.a,{key:a,className:ra.listame},r.a.createElement(d.a,{elevation:4,className:ra.me},"text"===e.type?r.a.createElement(k.a,{variant:"body1",style:{padding:6}},e.text):"audio"===e.type?r.a.createElement(k.a,{variant:"body1",style:{padding:6}},"".concat(e.sender.uid," te llam\xf3")):"video"===e.type?r.a.createElement(k.a,{variant:"body1",style:{padding:6}},"".concat(e.sender.uid," te llam\xf3")):"file"===e.type?r.a.createElement(Q.a,{href:e.data.url,color:"inherit",target:"_blank"},r.a.createElement(k.a,{variant:"body1",style:{padding:6}},e.data.url)):"image"===e.type?r.a.createElement(Q.a,{href:e.data.url,target:"_blank"},r.a.createElement("img",{src:e.data.url,className:ra.imagenMensaje,alt:"..."})):""),r.a.createElement(h.a,{src:sa.avatar,alt:"..."}))):r.a.createElement(I.a,{in:!0,timeout:500,key:a},r.a.createElement(f.a,{key:a,className:ra.listathem},r.a.createElement(h.a,{src:X,alt:"..."}),r.a.createElement(d.a,{elevation:4,className:ra.them},"text"===e.type?r.a.createElement(k.a,{variant:"body1",style:{padding:6}},e.text):"audio"===e.type?r.a.createElement(k.a,{variant:"body1",style:{padding:6}},"".concat(e.sender.uid," te llam\xf3")):"video"===e.type?r.a.createElement(k.a,{variant:"body1",style:{padding:6}},"".concat(e.sender.uid," te llam\xf3")):"file"===e.type?r.a.createElement(Q.a,{href:e.data.url,color:"inherit",target:"_blank"},r.a.createElement(k.a,{variant:"body1",style:{padding:6}},e.data.url)):"image"===e.type?r.a.createElement(Q.a,{href:e.data.url,target:"_blank"},r.a.createElement("img",{src:e.data.url,className:ra.imagenMensaje,alt:"..."})):"")))})):r.a.createElement(I.a,{in:!0,timeout:1e3},r.a.createElement(f.a,{className:ra.listaNoMensaje},r.a.createElement(d.a,{elevation:4,className:ra.noMensaje},r.a.createElement(k.a,{variant:"body1",style:{padding:6}},"No tienes mensajes con ".concat(V)))))))),r.a.createElement(_.a,{container:!0,spacing:2,className:ra.grid},r.a.createElement(_.a,{item:!0,xs:12,sm:12},r.a.createElement(M.a,{autoComplete:"mensaje",autoFocus:!0,className:ra.textoMensaje,placeholder:"Escribe un mensaje...",required:!0,fullWidth:!0,onKeyDown:function(e){13===e.keyCode&&(!function(){var e={receiverId:V,text:Ce,type:"text",conversationId:"".concat(V,"_user_").concat(sa.uid),sender:sa.uid,category:"message",avatar:sa.avatar},a={id1:"".concat(V,"_user_").concat(sa.uid),id2:"".concat(sa.uid,"_user_").concat(V)};ca.emit("enviarMensaje",e),ca.emit("conversation",a),ca.on("conversation/respuesta",(function(e){ie(e),ua()}))}(),document.activeElement.value="")},onChange:function(e){he(e.target.value)},type:"text",variant:"outlined"})))),r.a.createElement(v.a,{in:!0,timeout:1e3},r.a.createElement(d.a,{elevation:4,className:ra.root},r.a.createElement(g.a,null,t.map((function(e,a){return e.uid===sa.uid?null:r.a.createElement(f.a,{key:a,button:!0,divider:!0,onClick:function(){return a=e.uid,t=e.avatar,B(a),te(t),me(!0),void Ee(!0);var a,t}},r.a.createElement(C.a,null,r.a.createElement(h.a,{src:e.avatar})),r.a.createElement(E.a,{primary:e.name,secondary:"".concat(e.uid," - ").concat(e.status)}))}))))))}}}]);
//# sourceMappingURL=22.96ac3ed4.chunk.js.map