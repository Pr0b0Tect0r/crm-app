(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[19],{392:function(e,a){},663:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),o=n(85),i=n(110),l=n(12),c=n(339),m=n(86),u=n(636),s=n(613),p=n(634),d=n(635),f=n(622),g=n(608),y=n(631),b=n(616),E=n(111),h=n.n(E),C=n(395),O=n.n(C),v=n(396),j=n.n(v),k=n(628),w=n(629),P=n(638),S=n(617),x=n(630),N=n(579),T=n(10),D=n(29),z=n(397),I=n.n(z),B=n(160),G=n.n(B),L=n(196),A=n.n(L),F=n(197),R=n.n(F),W=n(625),J=n(623),U=n(626),M=n(627),H=n(73),_=n(620),q=n(672),K=n(664),Y=n(666),Z=n(610),Q=n(363),V=n.n(Q),X=n(238),$=n.n(X),ee=n(343),ae=n.n(ee),ne=n(41),te=n(344),re=n.n(te),oe=n(345),ie=n.n(oe),le=n(346),ce=n.n(le),me=n(347),ue=n.n(me),se=n(348),pe=n.n(se),de=n(349),fe=n.n(de),ge=n(350),ye=n.n(ge),be=n(351),Ee=n.n(be),he=n(352),Ce=n.n(he),Oe=n(353),ve=n.n(Oe),je=n(354),ke=n.n(je),we=n(355),Pe=n.n(we),Se=n(356),xe=n.n(Se),Ne=n(357),Te=n.n(Ne),De=n(358),ze=n.n(De),Ie=n(359),Be=n.n(Ie),Ge=n(360),Le=n.n(Ge),Ae=n(361),Fe=n.n(Ae),Re=n(362),We=n.n(Re),Je=n(20),Ue={red:{id:"red",name:"Red",import:re.a},pink:{id:"pink",name:"Pink",import:ie.a},purple:{id:"purple",name:"Purple",import:ce.a},deepPurple:{id:"deep-purple",name:"Deep Purple",import:ue.a},indigo:{id:"indigo",name:"Indigo",import:pe.a},blue:{id:"blue",name:"Blue",import:fe.a},lightBlue:{id:"light-blue",name:"Light Blue",import:ye.a},cyan:{id:"cyan",name:"Cyan",import:Ee.a},teal:{id:"teal",name:"Teal",import:Ce.a},green:{id:"green",name:"Green",import:ve.a},lightGreen:{id:"light-green",name:"Light Green",import:ke.a},lime:{id:"lime",name:"Lime",import:Pe.a},yellow:{id:"yellow",name:"Yellow",import:xe.a},amber:{id:"amber",name:"Amber",import:Te.a},orange:{id:"orange",name:"Orange",import:ze.a},deepOrange:{id:"deep-orange",name:"Deep Orange",import:Be.a},brown:{id:"brown",name:"Brown",import:Le.a},gray:{id:"gray",name:"Gray",import:Fe.a},blueGray:{id:"blue-gray",name:"Blue Gray",import:We.a}},Me={light:{id:"light",name:"Light"},dark:{id:"dark",name:"Dark"}},He=function(e){return e?(e=ae.a.camelCase(e),Ue[e]):null},_e=function(e){return e?Me[e]:null},qe=He("".concat(Je.a.primary_color)),Ke=He("".concat(Je.a.secondary_color)),Ye=_e("".concat(Je.a.type)),Ze=Object(ne.a)({palette:{primary:qe.import,secondary:Ke.import,type:Ye.id},primaryColor:qe,secondaryColor:Ke,type:Ye}),Qe={};Qe.colors=Ue,Qe.types=Me,Qe.defaultPrimaryColor=qe,Qe.defaultSecondaryColor=Ke,Qe.defaultType=Ye,Qe.defaultTheme=Ze,Qe.isDefaultTheme=function(e){return!!e&&(e.primaryColor.id===qe.id&&e.secondaryColor.id===Ke.id&&e.type.id===Ye.id)},Qe.createTheme=function(e){if(!e)return null;var a=e.primaryColor,n=e.secondaryColor,t=e.type;return a&&n&&t?(a=He(a),n=He(n),t=_e(t),a&&n&&t?(e=Object(ne.a)({palette:{primary:a.import,secondary:n.import,type:t.id},primaryColor:a,secondaryColor:n,type:t}),Qe.defaultTheme=e):null):null},Qe.changeTheme=function(e){return new Promise((function(a,n){var t=He(e.primaryColor),r=He(e.secondaryColor),o=_e(e.type);e=Object(ne.a)({palette:{primary:t.import,secondary:r.import,type:o.id},primaryColor:t,secondaryColor:r,type:o}),Qe.defaultTheme=e,a(Qe)}))},Qe.changePrimaryColor=function(e){return new Promise((function(a,n){e&&(e=He(e))||n()}))},Qe.changeSecondaryColor=function(e){return new Promise((function(a,n){e&&(e=He(e))||n()}))},Qe.changeType=function(e){return new Promise((function(a,n){e&&(e=_e(e))||n()}))},Qe.resetTheme=function(){return new Promise((function(e,a){}))};var Ve=Qe;function Xe(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}var $e=function(e){var a=r.a.useState({primaryColor:Ve.defaultTheme.primaryColor.id,secondaryColor:Ve.defaultTheme.secondaryColor.id,type:Ve.defaultTheme.type.id}),n=Object(o.a)(a,2),t=n[0],l=n[1],c=Ve.defaultTheme,m=function(e){l(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?Xe(n,!0).forEach((function(a){Object(i.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(n).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}({},t,Object(i.a)({},e.target.name,e.target.value)))},u=function(){Ve.changeTheme({primaryColor:"undefined"===typeof t.primaryColor?c.primaryColor.id:t.primaryColor,secondaryColor:"undefined"===typeof t.secondaryColor?c.secondaryColor.id:t.secondaryColor,type:"undefined"===typeof t.type?c.type.id:t.type}),e.funcion()};return r.a.createElement(J.a,{open:e.abrir,onClose:e.funcion},r.a.createElement(U.a,{disableTypography:!0},r.a.createElement(g.a,{variant:"h6"},"Cambiar paleta de colores")),r.a.createElement(M.a,null,r.a.createElement(f.a,{disablePadding:!0},r.a.createElement(H.a,{mb:1},r.a.createElement(k.a,null,r.a.createElement(w.a,null,r.a.createElement(V.a,{color:"primary"})),r.a.createElement(_.a,{fullWidth:!0},r.a.createElement(q.a,null,"Color primario"),r.a.createElement(Y.a,{smUp:!0},r.a.createElement(K.a,{native:!0,value:t.primaryColor,name:"primaryColor",onChange:m.bind()},Object.keys(Ve.colors).map((function(e){return e=Ve.colors[e],r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(Y.a,{xsDown:!0},r.a.createElement(K.a,{value:t.primaryColor,name:"primaryColor",onChange:m.bind()},Object.keys(Ve.colors).map((function(e){return e=Ve.colors[e],r.a.createElement(x.a,{key:e.id,value:e.id},e.name)}))))))),r.a.createElement(H.a,{mb:1},r.a.createElement(k.a,null,r.a.createElement(w.a,null,r.a.createElement(V.a,{color:"secondary"})),r.a.createElement(_.a,{fullWidth:!0},r.a.createElement(q.a,null,"Color secundario"),r.a.createElement(Y.a,{smUp:!0},r.a.createElement(K.a,{native:!0,value:t.secondaryColor,name:"secondaryColor",onChange:m.bind()},Object.keys(Ve.colors).map((function(e){return e=Ve.colors[e],r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(Y.a,{xsDown:!0},r.a.createElement(K.a,{value:t.secondaryColor,name:"secondaryColor",onChange:m.bind()},Object.keys(Ve.colors).map((function(e){return e=Ve.colors[e],r.a.createElement(x.a,{key:e.id,value:e.id},e.name)}))))))),r.a.createElement(H.a,{mb:1},r.a.createElement(k.a,null,r.a.createElement(w.a,null,r.a.createElement($.a,null)),r.a.createElement(_.a,{fullWidth:!0},r.a.createElement(q.a,null,"Tipo"),r.a.createElement(Y.a,{smUp:!0},r.a.createElement(K.a,{native:!0,value:t.type,name:"type",onChange:m.bind()},Object.keys(Ve.types).map((function(e){return e=Ve.types[e],r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(Y.a,{xsDown:!0},r.a.createElement(K.a,{value:t.type,name:"type",onChange:m.bind()},Object.keys(Ve.types).map((function(e){return e=Ve.types[e],r.a.createElement(x.a,{key:e.id,value:e.id},e.name)}))))))),r.a.createElement(H.a,{mt:2,mb:1},r.a.createElement(y.a,{light:!0})),r.a.createElement(k.a,null,r.a.createElement(H.a,{mb:1},r.a.createElement(Y.a,{smUp:!0},r.a.createElement(Z.a,{color:"secondary",variant:"contained",onClick:function(){return u()}},"Cambiar")),r.a.createElement(Y.a,{xsDown:!0},r.a.createElement(Z.a,{color:"secondary",variant:"contained",onClick:function(){return u()}},"Cambiar")))))))},ea=n(400),aa=n.n(ea),na=n(165),ta=n.n(na),ra=n(399),oa=n.n(ra),ia=n(198),la=n.n(ia),ca=n(633),ma=n(612),ua=n(669),sa=n(70),pa=n(632),da=n(190),fa=n.n(da);function ga(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}var ya=Object(c.a)((function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:pa.a[500],"&:hover":{backgroundColor:pa.a[700]}},fabProgress:{color:pa.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:pa.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function ba(e){var a=fa.a.connect("http://172.19.39.179:5000",{forceNew:!0}),n=ya(),t=r.a.useState(!1),c=Object(o.a)(t,2),m=c[0],u=c[1],p=r.a.useState(!1),d=Object(o.a)(p,2),f=d[0],g=d[1],y=r.a.useRef(),b=r.a.useState({}),E=Object(o.a)(b,2),h=E[0],C=E[1],O=e.dialogProps,v=Object(l.a)(Object(i.a)({},n.buttonSuccess,f)),j=function(e){C(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?ga(n,!0).forEach((function(a){Object(i.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ga(n).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}({},h,Object(i.a)({},e.target.name,e.target.value)))},k=function(){h&&(g(!1),u(!0),y.current=setTimeout((function(){g(!0),u(!1),a.emit("conectado",h.uid),a.on("conectado/respuesta",(function(n){localStorage.getItem("usuarioChat")?(a.emit("usuarios"),e.funcion()):(localStorage.setItem("usuarioChat",JSON.stringify(n)),a.emit("usuarios"),e.funcion())}))}),2e3))},w=function(e){13===e.keyCode&&k()};return r.a.useEffect((function(){return function(){clearTimeout(y.current)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(J.a,Object.assign({},O,{open:e.abrir,onClose:e.funcion}),r.a.createElement(U.a,null,"Login chat"),r.a.createElement(M.a,null,r.a.createElement(Y.a,{xsDown:!0},r.a.createElement(ma.a,{container:!0,spacing:1},r.a.createElement(ma.a,{item:!0,xs:12},r.a.createElement(ma.a,{container:!0,direction:"column",spacing:2},r.a.createElement(ma.a,{item:!0},r.a.createElement(ua.a,{autoComplete:"uid",name:"uid",autoFocus:!0,label:"Nickname",placeholder:"Nombre de usuario",required:!0,onKeyDown:w,onChange:j.bind(),type:"text",variant:"outlined"})))))),r.a.createElement(Y.a,{smUp:!0},r.a.createElement(ma.a,{container:!0,direction:"column",spacing:2},r.a.createElement(ma.a,{item:!0,xs:!0},r.a.createElement(ua.a,{autoComplete:"uid",name:"uid",fullWidth:!0,autoFocus:!0,onKeyDown:w,label:"Nickname",placeholder:"Nombre de usuario",onChange:j.bind(),required:!0,type:"text",variant:"outlined"}))))),r.a.createElement(ca.a,null,r.a.createElement(Z.a,{color:"secondary",onClick:e.funcion},"Cerrar"),r.a.createElement(Z.a,{onClick:function(){return k()},color:"primary",className:v,disabled:m,variant:"contained"},m&&r.a.createElement(sa.a,{size:24,className:n.buttonProgress}),"Conectar"))))}var Ea=n(398),ha=n.n(Ea);function Ca(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function Oa(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?Ca(n,!0).forEach((function(a){Object(i.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ca(n).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var va=Object(c.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Oa({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},avatarButton:{marginRight:e.spacing(2)},title:{flexGrow:1},bigAvatar:{marginLeft:e.spacing(5),marginRight:e.spacing(5),marginTop:e.spacing(1),marginBottom:e.spacing(1),width:60,height:60},back:{transform:"translateZ(0px)",position:"fixed",zIndex:100},nombreMenu:{marginLeft:e.spacing(6)},lista:{"&:hover":{backgroundColor:e.palette.primary.main,color:e.palette.getContrastText(e.palette.primary.main)}}}})),ja=[{nombre:"Inicio",link:"/inicio"},{nombre:"Contactos",link:"/clientes"},{nombre:"Empresas",link:"/empresas"},{nombre:"Agenda",link:"/calendario"},{nombre:"Chat",link:"/chat"},{nombre:"Cobranza",link:"/cobranza"},{nombre:"Caso",link:"/caso"}];var ka=Object(T.g)((function(e){var a=fa.a.connect("http://172.19.39.179:5000",{forceNew:!0}),n=va(),t=Object(m.a)(),c=r.a.useState(!1),E=Object(o.a)(c,2),C=E[0],v=E[1],z=r.a.useState(null),B=Object(o.a)(z,2),L=B[0],F=B[1],J=Boolean(L),U=r.a.useState(!1),M=Object(o.a)(U,2),H=M[0],_=M[1],q=r.a.useState(!1),K=Object(o.a)(q,2),Y=K[0],Z=K[1],Q=JSON.parse(localStorage.getItem("perfilGoogle")),V=function(){v(!1)};return null===localStorage.getItem("tokenGoogle")?r.a.createElement(T.a,{to:"/login"}):r.a.createElement("div",{className:n.root},r.a.createElement(s.a,null),r.a.createElement(ba,{abrir:Y,funcion:function(){Z(!1)}}),r.a.createElement($e,{abrir:H,funcion:function(){return _(!1),void e.history.push(e.location.pathname)}}),r.a.createElement(W.a,{open:C,className:n.back,onClick:function(){return V()}}),r.a.createElement(p.a,{position:"fixed",className:Object(l.a)(n.appBar,Object(i.a)({},n.appBarShift,C))},r.a.createElement(d.a,null,r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",onClick:function(){v(!0)},edge:"start",className:Object(l.a)(n.menuButton,C&&n.hide)},r.a.createElement(h.a,null)),r.a.createElement(g.a,{variant:"h6",noWrap:!0},"GNT CRM"),r.a.createElement(g.a,{variant:"h6",className:n.title}),r.a.createElement(g.a,{variant:"h6",className:n.title}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(b.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",className:n.menuButton,onClick:function(e){F(e.currentTarget)},color:"inherit"},r.a.createElement(S.a,{alt:"...",src:Q.picture})),r.a.createElement(N.a,{id:"menu-appbar",anchorEl:L,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:J,onClose:function(){return F(null)}},r.a.createElement(x.a,{disabled:!0},r.a.createElement("em",null,Q.name)),r.a.createElement(x.a,{onClick:function(){return Z(!0),void F(null)}},"Conectar chat"),r.a.createElement(x.a,{onClick:function(){return _(!0),void F(null)}},"Tema"),r.a.createElement(x.a,{onClick:function(){return function(){if(F(null),localStorage.getItem("usuarioChat")){var e=JSON.parse(localStorage.getItem("usuarioChat"));a.emit("desconectado",e.uid),a.emit("usuarios"),localStorage.clear()}}()}},"Cerrar Sesi\xf3n")))))),r.a.createElement(u.a,{className:n.drawer,variant:"persistent",anchor:"left",open:C,classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(S.a,{alt:"...",src:Q.picture,className:n.bigAvatar}),r.a.createElement(b.a,{onClick:V},"ltr"===t.direction?r.a.createElement(O.a,null):r.a.createElement(j.a,null))),r.a.createElement(g.a,{variant:"button",className:n.nombreMenu},Q.name),r.a.createElement(y.a,null),r.a.createElement(f.a,null,ja.map((function(e,a){return r.a.createElement(D.b,{to:e.link,style:{textDecoration:"none",color:"inherit"},key:a},r.a.createElement(k.a,{button:!0,key:a,onClick:V,className:n.lista},r.a.createElement(w.a,null,"Inicio"===e.nombre?r.a.createElement(I.a,null):"Gmail"===e.nombre?r.a.createElement(G.a,null):"Agenda"===e.nombre?r.a.createElement(A.a,null):"Empresas"===e.nombre?r.a.createElement(ta.a,null):"Llamadas"===e.nombre?r.a.createElement(R.a,null):"Caso"===e.nombre?r.a.createElement(la.a,null):"Chat"===e.nombre?r.a.createElement(ha.a,null):"Cobranza"===e.nombre?r.a.createElement(oa.a,null):"Contactos"===e.nombre?r.a.createElement(aa.a,null):""),r.a.createElement(P.a,{primary:e.nombre})))}))),r.a.createElement(y.a,null)))})),wa=n(615),Pa=r.a.lazy((function(){return Promise.all([n.e(0),n.e(11),n.e(24)]).then(n.bind(null,660))})),Sa=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(15)]).then(n.bind(null,667))})),xa=r.a.lazy((function(){return Promise.all([n.e(2),n.e(10),n.e(21)]).then(n.bind(null,670))})),Na=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,653))})),Ta=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,654))})),Da=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(18)]).then(n.bind(null,655))})),za=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,656))})),Ia=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(23)]).then(n.bind(null,657))})),Ba=[{id:"0",path:"/",exact:!0,name:"Inicio"},{id:"1",path:"/inicio",exact:!0,name:"Inicio",component:Pa},{id:"2",path:"/gmail",exact:!0,name:"Gmail",component:Sa},{id:"3",path:"/calendario",exact:!0,name:"Calendario",component:xa},{id:"4",path:"/clientes",exact:!0,name:"Clientes",component:Na},{id:"5",path:"/chat",exact:!0,name:"Chat",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(12),n.e(22)]).then(n.bind(null,658))}))},{id:"6",path:"/clientes/info",name:"Informaci\xf3n",component:Ta},{id:"7",path:"/clientes/nuevo",name:"Nuevo cliente",component:Da},{id:"8",path:"/empresas",exact:!0,name:"Empresas",component:za},{id:"9",path:"/empresas/nuevo",name:"Nueva empresa",component:Ia},{id:"10",path:"/empresas/info",name:"Informaci\xf3n",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,659))}))}],Ga=n(639),La=n(609);function Aa(){return r.a.createElement(g.a,{variant:"body2",align:"center"},"Copyright \xa9 ",r.a.createElement(La.a,{href:"http://newtransport.net",target:"_blank"},"GNT Servicios Generales S.A.")," ",(new Date).getFullYear(),".")}var Fa=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:e.palette.background.default,position:"fixed",bottom:0,width:"100%"}}}));function Ra(){var e=Fa();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null),r.a.createElement("footer",{className:e.footer},r.a.createElement(Ga.a,{maxWidth:"sm"},r.a.createElement(Aa,null))))}var Wa=n(611);a.default=function(){var e=Ve.defaultTheme;return r.a.createElement(Wa.a,{theme:e},r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(wa.a,{elevation:4},r.a.createElement(ka,null)),r.a.createElement(T.d,null,Ba.map((function(e){return e.component?r.a.createElement(T.b,{key:e.id,path:e.path,exact:e.exact,name:e.name,render:function(a){return r.a.createElement(e.component,Object.assign({key:e.id},a))}}):null})),r.a.createElement(T.a,{to:"/login"})),r.a.createElement(Ra,null)))}}}]);
//# sourceMappingURL=19.981a857b.chunk.js.map