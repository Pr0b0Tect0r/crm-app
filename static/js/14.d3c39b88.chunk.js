(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[14],{386:function(e,a){},388:function(e,a){},401:function(e,a){},403:function(e,a){},450:function(e,a){},451:function(e,a){},587:function(e,a,t){"use strict";t.r(a);var n=t(101),l=t.n(n),r=t(102),o=t(84),c=t(515),i=t(1),s=t.n(i),u=t(543),m=t(545),d=t(302),p=t(81),f=t(221),b=t(571),E=t(572),g=t(222),h=t(499),y=t(547),O=t(539),v=t(215),j=t(554),C=t(340),S=t.n(C),I=t(562),T=t(580),w=t(573),x=t(71),k=t(103);var N=function(e,a,t,n){var o="";localStorage.getItem("tokenGoogle")&&(o=JSON.parse(localStorage.getItem("tokenGoogle")));var c={},i="".concat(k.a.urlGmail).concat(a).concat(n);return"POST"===e&&(c={method:e,body:JSON.stringify({raw:t}),headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o)}}),"GET"===e&&(c={method:e,headers:{Authorization:"Bearer ".concat(o)}}),new Promise(function(){var e=Object(r.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i,c).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){t(e)}));case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}())},P=t(586),A=t(546),G=t(167),R=t.n(G),_=t(165),W=t.n(_),D=t(334),M=t(338),B=t(337),q=t(335),F=t(336),L=t(192),Y=t.n(L),z=t(224),H=t(553),J=t(556),U=t(557),X=t(191),K=t(361),Q=t(570),Z=t(588),V=t(555),$=t(497),ee=t.n($),ae=t(498),te=t.n(ae),ne=t(105),le=t.n(ne),re=t(584),oe=t(339),ce=t(589),ie=t(113),se=t(585),ue=t(541),me=t(12),de=t(68),pe=t(220);function fe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var be=Object(d.a)((function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:pe.a[500],"&:hover":{backgroundColor:pe.a[700]}},fabProgress:{color:pe.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:pe.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function Ee(e){var a,n=be(),l=s.a.useState({}),r=Object(o.a)(l,2),c=r[0],i=r[1],m=s.a.useState(!1),d=Object(o.a)(m,2),p=d[0],f=d[1],b=s.a.useState(!1),E=Object(o.a)(b,2),g=E[0],h=E[1],y=s.a.useRef(),O=e.dialogProps,j=Object(me.a)(Object(ie.a)({},n.buttonSuccess,g)),C=function(e){i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?fe(t,!0).forEach((function(a){Object(ie.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},c,Object(ie.a)({},e.target.name,e.target.value)))};return s.a.useEffect((function(){return function(){clearTimeout(y.current)}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null),s.a.createElement(H.a,Object.assign({fullWidth:!0,maxWidth:"sm"},O,{open:e.abrir,onClose:e.cerrar}),s.a.createElement(J.a,null,"Enviar mensaje"),s.a.createElement(U.a,null,s.a.createElement(se.a,{xsDown:!0},s.a.createElement(v.a,{container:!0,spacing:1},s.a.createElement(v.a,{item:!0,xs:12},s.a.createElement(v.a,{container:!0,direction:"column",spacing:2},s.a.createElement(v.a,{item:!0},s.a.createElement(ce.a,{autoComplete:"to",name:"To",fullWidth:!0,label:"Destinatario",placeholder:"Correo electr\xf3nico",required:!0,onChange:C.bind(),type:"text",variant:"outlined"})),s.a.createElement(v.a,{item:!0},s.a.createElement(ce.a,{autoComplete:"motivo",fullWidth:!0,label:"Subject",name:"Subject",placeholder:"Motivo del mensaje",onChange:C.bind(),required:!0,type:"text",variant:"outlined"})),s.a.createElement(v.a,{item:!0},s.a.createElement(ce.a,{autoComplete:"mensaje",fullWidth:!0,multiline:!0,rows:5,label:"Mensaje",name:"Snippet",placeholder:"Cuerpo del mensaje",onChange:C.bind(),required:!0,type:"text",variant:"outlined"})))))),s.a.createElement(se.a,{smUp:!0},s.a.createElement(v.a,{container:!0,direction:"column",spacing:2},s.a.createElement(v.a,{item:!0,xs:!0},s.a.createElement(ce.a,{autoComplete:"to",name:"To",fullWidth:!0,label:"Destinatario",placeholder:"Correo electr\xf3nico",onChange:C.bind(),required:!0,type:"text",variant:"outlined"})),s.a.createElement(v.a,{item:!0,xs:!0},s.a.createElement(ce.a,{autoComplete:"current-password",fullWidth:!0,label:"Subject",name:"Subject",placeholder:"Motivo del mensaje",onChange:C.bind(),required:!0,type:"text",variant:"outlined"})),s.a.createElement(v.a,{item:!0,xs:!0},s.a.createElement(ce.a,{autoComplete:"mensaje",fullWidth:!0,multiline:!0,rows:5,label:"Mensaje",name:"Snippet",placeholder:"Cuerpo del mensaje",onChange:C.bind(),required:!0,type:"text",variant:"outlined"}))))),s.a.createElement(X.a,null,s.a.createElement(ue.a,{color:"secondary",onClick:e.cerrar},"Cerrar"),s.a.createElement(ue.a,{onClick:function(){new(t(362))("text/plain").setContent(c.Snippet).addHeader("From","").addHeader("To",c.To).addHeader("Subject",c.Subject).build((function(e,t){(a=btoa(t.toString()))&&(h(!1),f(!0),y.current=setTimeout((function(){h(!0),f(!1),N("POST","messages/send",a,"?alt=json")}),2e3))}))},color:"primary",className:j,disabled:p,variant:"contained"},p&&s.a.createElement(de.a,{size:24,className:n.buttonProgress}),"Enviar"))))}function ge(e){var a=e.children,t=e.value,n=e.index,l=Object(c.a)(e,["children","value","index"]);return s.a.createElement(O.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),s.a.createElement(x.a,null,a))}function he(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var ye=Object(d.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(10)},card:{width:400,margin:e.spacing(5)},media:{height:100,paddingTop:"56.25%"},"pesta\xf1a":{width:"100%"},typography:{padding:e.spacing(2)},close:{padding:e.spacing(.5)},table:{minWidth:650},iframe:{width:"100%",border:0,minHeight:"80%",height:"600px",display:"flex"},speedDial:{position:"fixed",bottom:e.spacing(7),right:e.spacing(2)},back:{transform:"translateZ(0px)",position:"fixed",zIndex:100},modal:{display:"flex",alignItems:"center",justifyContent:"center"},estiloModal:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),Oe=[{name:"Buscar"},{name:"Nuevo"}];a.default=function(){var e,a,n,c,i,d=s.a.useState(0),C=Object(o.a)(d,2),x=C[0],G=C[1],_=s.a.useState({}),L=Object(o.a)(_,2),$=L[0],ae=L[1],ne=ye(),ie=Object(p.a)(),se=s.a.useState({}),ue=Object(o.a)(se,2),me=ue[0],de=ue[1],pe=s.a.useState([]),fe=Object(o.a)(pe,2),be=fe[0],ve=fe[1],je=s.a.useState({}),Ce=Object(o.a)(je,2),Se=Ce[0],Ie=Ce[1],Te=s.a.useState([]),we=Object(o.a)(Te,2),xe=we[0],ke=we[1],Ne=s.a.useState({}),Pe=Object(o.a)(Ne,2),Ae=Pe[0],Ge=Pe[1],Re=s.a.useState([]),_e=Object(o.a)(Re,2),We=_e[0],De=_e[1],Me=s.a.useState(!1),Be=Object(o.a)(Me,2),qe=Be[0],Fe=Be[1],Le=s.a.useState(""),Ye=Object(o.a)(Le,2),ze=Ye[0],He=Ye[1],Je=s.a.useState("INBOX"),Ue=Object(o.a)(Je,2),Xe=Ue[0],Ke=Ue[1],Qe=s.a.useState(!1),Ze=Object(o.a)(Qe,2),Ve=Ze[0],$e=Ze[1],ea=s.a.useState(""),aa=Object(o.a)(ea,2),ta=aa[0],na=aa[1],la=s.a.useState(""),ra=Object(o.a)(la,2),oa=ra[0],ca=ra[1],ia=s.a.useState(""),sa=Object(o.a)(ia,2),ua=sa[0],ma=sa[1],da=s.a.useState(""),pa=Object(o.a)(da,2),fa=pa[0],ba=pa[1],Ea=s.a.useState(""),ga=Object(o.a)(Ea,2),ha=ga[0],ya=ga[1],Oa=s.a.useState({}),va=Object(o.a)(Oa,2),ja=va[0],Ca=va[1],Sa=s.a.useState("google"),Ia=Object(o.a)(Sa,2),Ta=Ia[0],wa=Ia[1],xa=s.a.useState(!1),ka=Object(o.a)(xa,2),Na=ka[0],Pa=ka[1],Aa=s.a.useState(!1),Ga=Object(o.a)(Aa,2),Ra=Ga[0],_a=Ga[1],Wa=s.a.useState(!1),Da=Object(o.a)(Wa,2),Ma=Da[0],Ba=Da[1],qa=[],Fa=[],La=[],Ya="https://mail.google.com https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly",za=JSON.parse(localStorage.getItem("perfilGoogle")),Ha=function(){Fe(!1)},Ja=function(){N("GET","messages","","?q=".concat(Ta,"&labelIds=INBOX")).then((function(e){if(de(e),e.hasOwnProperty("error"))W.a.load("auth2",Ka);else if(e.resultSizeEstimate>0)for(var a=0;a<e.messages.length;a++)N("GET","messages/","","".concat(e.messages[a].id,"?q=").concat(Ta,"&labelIds=INBOX")).then((function(e){qa.push(e)}));console.log(me),Fe(!0),ve(qa),_a(!1)}))},Ua=function(){N("GET","messages","","?q=".concat(Ta,"&labelIds=SENT")).then((function(e){if(Ie(e),e.hasOwnProperty("error"));else if(e.resultSizeEstimate>0)for(var a=0;a<e.messages.length;a++)N("GET","messages/","","".concat(e.messages[a].id,"?q=").concat(Ta,"&labelIds=SENT")).then((function(e){Fa.push(e)}));console.log(Se),ke(Fa)}))},Xa=function(){N("GET","messages","","?q=".concat(Ta,"&labelIds=CHAT")).then((function(e){if(Ge(e),e.hasOwnProperty("error"));else if(e.resultSizeEstimate>0)for(var a=0;a<e.messages.length;a++)N("GET","messages/","","".concat(e.messages[a].id,"?q=").concat(Ta,"&labelIds=CHAT")).then((function(e){La.push(e)}));console.log(Ae),De(La)}))};function Ka(){W.a.auth2.authorize({apiKey:"".concat(k.a.api_key),client_id:"".concat(k.a.client_id),scope:Ya,cookie_policy:"none"},(function(e){localStorage.setItem("tokenGoogle",JSON.stringify(e.access_token)),ve([]),ke([]),De([]),Ja(),Ua(),Xa(),Za(),Qa(e.access_token)}))}var Qa=function(){var e=Object(r.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=".concat(a),{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("perfilGoogle",JSON.stringify(e))}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Za=function(){N("GET","profile","","").then((function(e){ae(e)}))};s.a.useEffect(Za,[]),s.a.useEffect(Ja,[]),s.a.useEffect(Ua,[]),s.a.useEffect(Xa,[]);var Va=function(t){[t.headers].forEach((function(t){for(var l=0;l<t.length;l++)"To"===t[l].name?a=t[l].value:"From"===t[l].name?n=t[l].value:"Date"===t[l].name?c=t[l].value:"Subject"===t[l].name&&(e=t[l].value)}))},$a=function(){var e=Object(r.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("tokenGoogle")),e.next=3,fetch("https://www.googleapis.com/gmail/v1/users/me/messages/".concat(a),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(){Ja(),Ua(),Xa()}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),et=function(e){wa(Ta),He(e.snippet),$e(!0),"CHAT"===Xe?(na(e.snippet),nt(e.payload)):(at(e.payload),lt(e.payload),rt(e.payload,e.id))},at=function(e){var a="";a=(a=e.hasOwnProperty("parts")?"undefined"===typeof e.parts?e.body.data:tt(e.parts):e.body.data).replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,""),na(decodeURIComponent(escape(window.atob(a))))},tt=function e(a){for(var t=0;t<=a.length;t++){if("undefined"!==typeof a[t].parts)return e(a[t].parts);if("text/html"===a[t].mimeType)return a[t].body.data}return""},nt=function(e){[e.headers].forEach((function(e){for(var a=0;a<e.length;a++)i=e[a].value}))},lt=function(e){[e.headers].forEach((function(e){for(var a=0;a<e.length;a++)"Subject"===e[a].name?ca(e[a].value):"From"===e[a].name&&(i=e[a].value)}))},rt=function(e,a){var t;e.hasOwnProperty("parts")&&([e.parts].forEach((function(e){for(var a=0;a<e.length;a++)"undefined"!==typeof e[a].filename&&(t=e[a].body.attachmentId,ma(e[a].mimeType),ba(e[a].filename),ya(fa.split(".")[1]))})),ot(a,t))},ot=function(e,a){N("GET","messages/","","".concat(e,"/attachments/").concat(a)).then((function(e){Ca(e)}))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null),s.a.createElement(Ee,{abrir:Ma,cerrar:function(){Ba(!1),ve([]),ke([]),De([]),Ja(),Xa(),Ua()}.bind()}),s.a.createElement(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:qe,autoHideDuration:3e3,onClose:Ha,style:{opacity:"0.8"},ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement(O.a,{id:"message-id",variant:"button"},"Cargando mensajes... ",s.a.createElement(z.a,{color:"primary",style:{width:"100%",marginBottom:0}})),action:[s.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",className:ne.close,onClick:Ha},s.a.createElement(R.a,null))]}),s.a.createElement(m.a,{elevation:4,className:ne.root},s.a.createElement(re.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:ne.modal,open:Ra,onClose:function(){_a(!1)},closeAfterTransition:!0,BackdropComponent:V.a,BackdropProps:{timeout:500}},s.a.createElement(oe.a,{in:Ra,timeout:500},s.a.createElement("div",{className:ne.estiloModal},s.a.createElement(O.a,{variant:"h6"},"Buscar"),s.a.createElement(ce.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"\xbfQu\xe9 deseas buscar?",autoComplete:"correo",autoFocus:!0,onChange:function(e){wa(e.target.value)}.bind(),onKeyDown:function(e){13===e.keyCode&&(ve([]),ke([]),De([]),Ja(),Xa(),Ua())}.bind(),value:Ta})))),console.log(ze),console.log(ha),s.a.createElement(V.a,{open:Na,className:ne.back}),s.a.createElement(Q.a,{ariaLabel:"SpeedDial tooltip example",className:ne.speedDial,icon:s.a.createElement(le.a,null),onClose:function(){Pa(!1)},onOpen:function(){Pa(!0)},open:Na},Oe.map((function(e){return s.a.createElement(Z.a,{key:e.name,icon:"Nuevo"===e.name?s.a.createElement(ee.a,null):"Buscar"===e.name?s.a.createElement(te.a,null):"",tooltipTitle:e.name,onClick:"Nuevo"===e.name?function(){return Ba(!0)}:"Buscar"===e.name?function(){return _a(!0)}:""})}))),s.a.createElement(H.a,{open:Ve,onClose:function(){return $e(!1)}},s.a.createElement(J.a,{disableTypography:!0},s.a.createElement(O.a,{variant:"h6"},"CHAT"===Xe?i:oa)),s.a.createElement(U.a,null,s.a.createElement("iframe",{className:ne.iframe,srcDoc:ta,title:oa})),s.a.createElement(X.a,null,s.a.createElement(O.a,{variant:"button",style:{cursor:"pointer"},title:"Descargar Archivo",onClick:function(){return function(){var e=t(494),a=ja.data;if("undefined"!==typeof a){var n=e(a=a.replace(/ /g,"+").replace(/_/g,"/").replace(/-/g,"+"),ua);Object(K.a)(n,fa)}}()}},fa))),s.a.createElement(v.a,{container:!0,alignItems:"center",justify:"center"},s.a.createElement(f.a,{className:ne.card},s.a.createElement(b.a,{avatar:s.a.createElement(y.a,{alt:"...",src:za.picture}),title:$.emailAddress}),s.a.createElement(E.a,{className:ne.media,image:"https://i.imgur.com/RGf2v43.jpg"}),s.a.createElement(g.a,null,s.a.createElement(O.a,{variant:"button",color:"textSecondary",component:"p"},"Mensajes totales: ".concat($.messagesTotal))),s.a.createElement(h.a,{disableSpacing:!0}))),s.a.createElement(j.a,{in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:1e3},s.a.createElement("div",{className:ne.pesta\u00f1a},s.a.createElement(I.a,{position:"static",color:"primary"},s.a.createElement(T.a,{value:x,onChange:function(e,a){G(a)},indicatorColor:"secondary",variant:"fullWidth","aria-label":"full width tabs example"},s.a.createElement(w.a,Object.assign({label:s.a.createElement(O.a,{variant:"button"},"Inbox")},he(0),{onClick:function(){return Ke("INBOX")}})),s.a.createElement(w.a,Object.assign({label:s.a.createElement(O.a,{variant:"button"},"Enviados")},he(1),{onClick:function(){return Ke("SENT")}})),s.a.createElement(w.a,Object.assign({label:s.a.createElement(O.a,{variant:"button"},"Chat")},he(2),{onClick:function(){return Ke("CHAT")}})))),s.a.createElement(S.a,{axis:"rtl"===ie.direction?"x-reverse":"x",index:x,onChangeIndex:function(e){G(e)}},s.a.createElement(ge,{value:x,index:0,dir:ie.direction},s.a.createElement(D.a,{className:ne.table,"aria-label":"simple table","aria-labelledby":"tableTitle"},s.a.createElement(q.a,null,s.a.createElement(F.a,null,s.a.createElement(B.a,{style:{maxWidth:100}},"Origen"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Enviado por:"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Subject"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Fecha"),s.a.createElement(B.a,{align:"right"},"Eliminar"))),s.a.createElement(M.a,null,be.length?be.map((function(a,t){return s.a.createElement(F.a,{key:t},s.a.createElement(B.a,{onClick:function(){return et(a)},style:{cursor:"pointer"}},"IMPORTANT"===a.labelIds[0]?a.labelIds[2]:"Label_1"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_PROMOTIONS"===a.labelIds[0]?a.labelIds[2]:"CATEGORY_UPDATES"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_FORUMS"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_PERSONAL"===a.labelIds[0]?a.labelIds[1]:a.labelIds[0]),s.a.createElement(B.a,{align:"left",onLoad:Va(a.payload),onClick:function(){return et(a)},style:{cursor:"pointer"}},n),s.a.createElement(B.a,{align:"left",onClick:function(){return et(a)},style:{cursor:"pointer"}},s.a.createElement("strong",null,e)," - ".concat(a.snippet.substr(0,20),"...")),s.a.createElement(B.a,{align:"left",onClick:function(){return et(a)},style:{cursor:"pointer"}},c.substr(5,11)),s.a.createElement(B.a,{align:"right"},s.a.createElement(A.a,{"aria-label":"eliminar",onClick:function(){return $a(a.id)}},s.a.createElement(Y.a,{color:"primary"}))))})):s.a.createElement(F.a,null,s.a.createElement(B.a,{align:"left"},s.a.createElement(O.a,{variant:"button"},"No hay nada para mostrar")))))),s.a.createElement(ge,{value:x,index:1,dir:ie.direction},s.a.createElement(D.a,{className:ne.table,"aria-label":"simple table","aria-labelledby":"tableTitle"},s.a.createElement(q.a,null,s.a.createElement(F.a,null,s.a.createElement(B.a,{style:{maxWidth:100}},"Origen"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Enviado a:"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Subject"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Fecha"),s.a.createElement(B.a,{align:"right"},"Eliminar"))),s.a.createElement(M.a,null,xe.length?xe.map((function(t,n){return s.a.createElement(F.a,{key:n},s.a.createElement(B.a,{onClick:function(){return et(t)},style:{cursor:"pointer"}},"IMPORTANT"===t.labelIds[0]?t.labelIds[2]:"Label_1"===t.labelIds[0]?t.labelIds[1]:"CATEGORY_PROMOTIONS"===t.labelIds[0]?t.labelIds[2]:"CATEGORY_UPDATES"===t.labelIds[0]?t.labelIds[1]:"CATEGORY_FORUMS"===t.labelIds[0]?t.labelIds[1]:"CATEGORY_PERSONAL"===t.labelIds[0]?t.labelIds[1]:t.labelIds[0]),s.a.createElement(B.a,{align:"left",onLoad:Va(t.payload),onClick:function(){return et(t)},style:{cursor:"pointer"}},a),s.a.createElement(B.a,{align:"left",onClick:function(){return et(t)},style:{cursor:"pointer"}},s.a.createElement("strong",null,e)," - ".concat(t.snippet.substr(0,20),"...")),s.a.createElement(B.a,{align:"left",onClick:function(){return et(t)},style:{cursor:"pointer"}},c.substr(5,11)),s.a.createElement(B.a,{align:"right"},s.a.createElement(A.a,{"aria-label":"eliminar",onClick:function(){return $a(t.id)}},s.a.createElement(Y.a,{color:"primary"}))))})):s.a.createElement(F.a,null,s.a.createElement(B.a,{align:"left"},s.a.createElement(O.a,{variant:"button"},"No hay nada para mostrar")))))),s.a.createElement(ge,{value:x,index:2,dir:ie.direction},s.a.createElement(D.a,{className:ne.table,"aria-label":"simple table","aria-labelledby":"tableTitle"},s.a.createElement(q.a,null,s.a.createElement(F.a,null,s.a.createElement(B.a,{style:{maxWidth:100}},"Origen"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Enviado por:"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Subject"),s.a.createElement(B.a,{align:"left",style:{maxWidth:100}},"Fecha"),s.a.createElement(B.a,{align:"right"},"Eliminar"))),s.a.createElement(M.a,null,We.length?We.map((function(a,t){return s.a.createElement(F.a,{key:t},s.a.createElement(B.a,{onClick:function(){return et(a)},style:{cursor:"pointer"}},"IMPORTANT"===a.labelIds[0]?a.labelIds[2]:"Label_1"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_PROMOTIONS"===a.labelIds[0]?a.labelIds[2]:"CATEGORY_UPDATES"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_FORUMS"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_PERSONAL"===a.labelIds[0]?a.labelIds[1]:a.labelIds[0]),s.a.createElement(B.a,{align:"left",onLoad:Va(a.payload),onClick:function(){return et(a)},style:{cursor:"pointer"}},n),s.a.createElement(B.a,{align:"left",onClick:function(){return et(a)},style:{cursor:"pointer"}},s.a.createElement("strong",null,e)," - ".concat(a.snippet.substr(0,20),"...")),s.a.createElement(B.a,{align:"left",onClick:function(){return et(a)},style:{cursor:"pointer"}},c.substr(5,11)),s.a.createElement(B.a,{align:"right"},s.a.createElement(A.a,{"aria-label":"eliminar",onClick:function(){return $a(a.id)}},s.a.createElement(Y.a,{color:"primary"}))))})):s.a.createElement(F.a,null,s.a.createElement(B.a,{align:"left"},s.a.createElement(O.a,{variant:"button"},"No hay nada para mostrar")))))))))))}}}]);
//# sourceMappingURL=14.d3c39b88.chunk.js.map