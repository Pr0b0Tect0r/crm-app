(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[14],{116:function(e,a,t){"use strict";var n=t(74);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1)),l=(0,n(t(75)).default)(r.default.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");a.default=l},130:function(e,a,t){"use strict";var n=t(74);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1)),l=(0,n(t(75)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=l},131:function(e,a,t){"use strict";var n=t(74);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1)),l=(0,n(t(75)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");a.default=l},167:function(e,a,t){"use strict";var n=t(0),r=t(2),l=t(1),i=t.n(l),o=(t(6),t(12)),c=t(24),m=t(96),u=i.a.forwardRef((function(e,a){var t=e.classes,l=e.className,c=Object(r.a)(e,["classes","className"]),u=i.a.useContext(m.a);return i.a.createElement("div",Object(n.a)({className:Object(o.a)(t.root,l,"flex-start"===u.alignItems&&t.alignItemsFlexStart),ref:a},c))}));a.a=Object(c.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(u)},513:function(e,a,t){"use strict";var n=t(0),r=t(1),l=t.n(r),i=(t(6),t(24)),o=t(541),c=l.a.forwardRef((function(e,a){return l.a.createElement(o.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(i.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},579:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return F}));var n=t(85),r=t(1),l=t.n(r),i=t(546),o=t(548),c=t(306),m=t(571),u=t(561),s=t(555),d=t(167),p=t(550),f=t(10),b=t(557),v=t(541),E=t(130),g=t.n(E),h=t(575),S=t(595),O=t(558),N=t(107),C=t.n(N),j=t(131),k=t.n(j),y=t(549),x=t(116),A=t.n(x),z=t(556),M=t(566),T=t(560),L=t(513),w=t(559),_=t(570),G=t(543),H=t(181),I=t.n(H),V=Object(c.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(10)},avatar:{backgroundColor:e.palette.secondary.main},speedDial:{position:"fixed",bottom:e.spacing(7),right:e.spacing(2)},back:{transform:"translateZ(0px)",position:"fixed",zIndex:100}}})),D=[{id:0,nombre:"Bruno Zumaeta",empresa:"New Transport S.A."},{id:1,nombre:"Juan Lizama",empresa:"GNT S.A."},{id:2,nombre:"Alexander Rodr\xedguez",empresa:"GNT S.A."},{id:3,nombre:"Wilder Lizama",empresa:"GNT S.A."},{id:4,nombre:"Carol Cajal",empresa:"GNT S.A."},{id:5,nombre:"Jorge Sevillano",empresa:"GNT S.A."},{id:6,nombre:"Aquaman",empresa:"Super amigos"},{id:7,nombre:"Superman",empresa:"Super amigos"},{id:8,nombre:"Spiderman",empresa:"Avengers"},{id:9,nombre:"Capitan am\xe9rica",empresa:"Avengers"},{id:10,nombre:"Luigi",empresa:"Nintendo"}],J=[{name:"Nuevo"}],R=l.a.forwardRef((function(e,a){return l.a.createElement(_.a,Object.assign({direction:"up",ref:a},e))}));function F(){var e=l.a.useState(!1),a=Object(n.a)(e,2),t=a[0],r=a[1],c=l.a.useState(!1),E=Object(n.a)(c,2),N=E[0],j=E[1],x=l.a.useState(!1),_=Object(n.a)(x,2),H=_[0],F=_[1],P=l.a.useState(!1),q=Object(n.a)(P,2),B=q[0],W=q[1],Z=V();return!0===t?l.a.createElement(f.a,{to:"/clientes/info"}):!0===H?l.a.createElement(f.a,{to:"/clientes/nuevo"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null),l.a.createElement(O.a,{open:N,className:Z.back}),l.a.createElement(O.a,{open:B,className:Z.back}),l.a.createElement(h.a,{ariaLabel:"Speedial",className:Z.speedDial,icon:l.a.createElement(C.a,null),onClose:function(){j(!1)},onOpen:function(){j(!0)},open:N},J.map((function(e){return l.a.createElement(S.a,{key:e.name,icon:"Nuevo"===e.name?l.a.createElement(g.a,null):"",tooltipTitle:e.name,onClick:"Nuevo"===e.name?function(){return F(!0)}:""})}))),l.a.createElement(z.a,{open:B,TransitionComponent:R,keepMounted:!0,onClose:function(){return W(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(w.a,{id:"alert-dialog-slide-title"},"\xbfSeguro que deseas eliminar?"),l.a.createElement(T.a,null,l.a.createElement(L.a,{id:"alert-dialog-slide-description"},"Una vez eliminado se perder\xe1 toda la informaci\xf3n de este contacto.")),l.a.createElement(M.a,null,l.a.createElement(G.a,{onClick:function(){return W(!1)},color:"secondary"},"Cancelar"),l.a.createElement(G.a,{variant:"contained",onClick:function(){return W(!1)},color:"secondary"},"Confirmar"))),l.a.createElement(b.a,{in:!0,timeout:1e3},l.a.createElement(o.a,{elevation:4,className:Z.root},l.a.createElement(s.a,null,D.map((function(e,a){return l.a.createElement(u.a,{key:a,button:!0,divider:!0},l.a.createElement(d.a,null,l.a.createElement(p.a,{className:Z.avatar},l.a.createElement(v.a,{variant:"h6"},e.nombre.substr(0,1)))),l.a.createElement(m.a,{primary:e.nombre,secondary:e.empresa}),l.a.createElement(y.a,{"aria-label":"informaci\xf3n",onClick:function(){return r(!0)}},l.a.createElement(I.a,{color:"primary"})),l.a.createElement(y.a,{"aria-label":"editar",onClick:function(){return alert("editar contacto "+e.id)}},l.a.createElement(A.a,{color:"primary"})),l.a.createElement(y.a,{"aria-label":"eliminar",onClick:function(){return W(!0)}},l.a.createElement(k.a,{color:"error"})))}))))))}}}]);
//# sourceMappingURL=14.4c68dc49.chunk.js.map