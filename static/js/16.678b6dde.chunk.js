(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[16],{120:function(e,a,t){"use strict";var n=t(74);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1)),l=(0,n(t(75)).default)(r.default.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");a.default=l},131:function(e,a,t){"use strict";var n=t(74);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1)),l=(0,n(t(75)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=l},132:function(e,a,t){"use strict";var n=t(74);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1)),l=(0,n(t(75)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");a.default=l},170:function(e,a,t){"use strict";var n=t(0),r=t(2),l=t(1),o=t.n(l),i=(t(6),t(12)),c=t(26),s=t(100),m=o.a.forwardRef((function(e,a){var t=e.classes,l=e.className,c=Object(r.a)(e,["classes","className"]),m=o.a.useContext(s.a);return o.a.createElement("div",Object(n.a)({className:Object(i.a)(t.root,l,"flex-start"===m.alignItems&&t.alignItemsFlexStart),ref:a},c))}));a.a=Object(c.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(m)},515:function(e,a,t){"use strict";var n=t(0),r=t(1),l=t.n(r),o=(t(6),t(26)),i=t(544),c=l.a.forwardRef((function(e,a){return l.a.createElement(i.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},585:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return R}));var n=t(85),r=t(1),l=t.n(r),o=t(549),i=t(551),c=t(308),s=t(574),m=t(564),d=t(558),u=t(170),p=t(553),f=t(10),b=t(560),E=t(131),v=t.n(E),h=t(578),g=t(597),O=t(561),y=t(111),k=t.n(y),j=t(160),C=t.n(j),N=t(559),S=t(569),M=t(563),x=t(515),z=t(562),w=t(573),T=t(546),P=t(132),H=t.n(P),I=t(552),V=t(120),_=t.n(V),A=t(184),D=t.n(A),J=Object(c.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(10)},avatar:{backgroundColor:e.palette.secondary.main},speedDial:{position:"fixed",bottom:e.spacing(7),right:e.spacing(2)},back:{transform:"translateZ(0px)",position:"fixed",zIndex:100}}})),L=[{id:0,nombre:"New Transport S.A.",empresa:"Per\xf9"},{id:1,nombre:"GNT S.A.",empresa:"Per\xf9"},{id:2,nombre:"Nintendo",empresa:"Jap\xf2n"},{id:3,nombre:"FIAT",empresa:"Estados Unidos"},{id:4,nombre:"General Electric",empresa:"Per\xf9"},{id:5,nombre:"Polar",empresa:"Venezuela"},{id:6,nombre:"Sony",empresa:"Estados Unidos"},{id:7,nombre:"Marvel",empresa:"Estados Unidos"},{id:8,nombre:"Disney",empresa:"Estados Unidos"},{id:9,nombre:"Honda",empresa:"Jap\xf2n"},{id:10,nombre:"Kawasaki",empresa:"Jap\xf2n"}],U=[{name:"Nuevo"}],F=l.a.forwardRef((function(e,a){return l.a.createElement(w.a,Object.assign({direction:"up",ref:a},e))}));function R(){var e=l.a.useState(!1),a=Object(n.a)(e,2),t=a[0],r=a[1],c=l.a.useState(!1),E=Object(n.a)(c,2),y=E[0],j=E[1],w=l.a.useState(!1),P=Object(n.a)(w,2),V=P[0],A=P[1],R=l.a.useState(!1),G=Object(n.a)(R,2),q=G[0],B=G[1],K=J();return!0===y?l.a.createElement(f.a,{to:"/empresas/nuevo"}):!0===q?l.a.createElement(f.a,{to:"/empresas/info"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null),l.a.createElement(O.a,{open:t,className:K.back}),l.a.createElement(h.a,{ariaLabel:"Speedial",className:K.speedDial,icon:l.a.createElement(k.a,null),onClose:function(){r(!1)},onOpen:function(){r(!0)},open:t},U.map((function(e){return l.a.createElement(g.a,{key:e.name,icon:"Nuevo"===e.name?l.a.createElement(v.a,null):"",tooltipTitle:e.name,onClick:"Nuevo"===e.name?function(){return j(!0)}:""})}))),l.a.createElement(N.a,{open:V,TransitionComponent:F,keepMounted:!0,onClose:function(){return A(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(z.a,{id:"alert-dialog-slide-title"},"\xbfSeguro que deseas eliminar?"),l.a.createElement(M.a,null,l.a.createElement(x.a,{id:"alert-dialog-slide-description"},"Una vez eliminada se perder\xe1 toda la informaci\xf3n de esta empresa.")),l.a.createElement(S.a,null,l.a.createElement(T.a,{onClick:function(){return A(!1)},color:"secondary"},"Cancelar"),l.a.createElement(T.a,{variant:"contained",onClick:function(){return A(!1)},color:"secondary"},"Confirmar"))),l.a.createElement(b.a,{in:!0,timeout:1e3},l.a.createElement(i.a,{elevation:4,className:K.root},l.a.createElement(d.a,null,L.map((function(e,a){return l.a.createElement(m.a,{key:a,button:!0,divider:!0},l.a.createElement(u.a,null,l.a.createElement(p.a,{className:K.avatar},l.a.createElement(C.a,null))),l.a.createElement(s.a,{primary:e.nombre,secondary:e.empresa}),l.a.createElement(I.a,{"aria-label":"informaci\xf3n",onClick:function(){return B(!0)}},l.a.createElement(D.a,{color:"primary"})),l.a.createElement(I.a,{"aria-label":"editar",onClick:function(){return alert("editar empresa "+e.id)}},l.a.createElement(_.a,{color:"primary"})),l.a.createElement(I.a,{"aria-label":"eliminar",onClick:function(){return A(!0)}},l.a.createElement(H.a,{color:"error"})))}))))))}}}]);
//# sourceMappingURL=16.678b6dde.chunk.js.map