(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[1],{505:function(e,t,o){"use strict";var a=o(2),n=o(0),r=o(1),i=o.n(r),c=(o(6),o(12)),s=o(26),l=o(605),u=o(27),p=i.a.forwardRef((function(e,t){var o=e.children,r=e.classes,s=e.className,p=e.color,d=void 0===p?"default":p,m=e.component,b=void 0===m?"button":m,f=e.disabled,h=void 0!==f&&f,g=e.disableFocusRipple,v=void 0!==g&&g,y=e.focusVisibleClassName,O=e.size,T=void 0===O?"large":O,x=e.variant,j=void 0===x?"round":x,C=Object(a.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.a.createElement(l.a,Object(n.a)({className:Object(c.a)(r.root,s,"round"!==j&&r.extended,"large"!==T&&r["size".concat(Object(u.a)(T))],h&&r.disabled,{primary:r.primary,secondary:r.secondary,inherit:r.colorInherit}[d]),component:b,disabled:h,focusRipple:!v,focusVisibleClassName:Object(c.a)(r.focusVisible,y),ref:t},C),i.a.createElement("span",{className:r.label},o))}));t.a=Object(s.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(p)},588:function(e,t,o){"use strict";var a=o(0),n=o(2),r=o(1),i=o.n(r),c=(o(6),o(12)),s=o(30),l=o(26),u=o(587),p=o(505),d=o(82),m=o(27),b=o(225);function f(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}var h=i.a.forwardRef((function(e,t){var o=e.ariaLabel,r=e.FabProps,l=(r=void 0===r?{}:r).ref,h=Object(n.a)(r,["ref"]),g=e.children,v=e.classes,y=e.className,O=e.direction,T=void 0===O?"up":O,x=e.hidden,j=void 0!==x&&x,C=e.icon,w=e.onBlur,E=e.onClose,k=e.onFocus,R=e.onKeyDown,D=e.onMouseEnter,L=e.onMouseLeave,M=e.onOpen,P=e.open,N=(e.openIcon,e.TransitionComponent),F=void 0===N?u.a:N,S=e.transitionDuration,z=void 0===S?{enter:s.b.enteringScreen,exit:s.b.leavingScreen}:S,I=e.TransitionProps,B=Object(n.a)(e,["ariaLabel","FabProps","children","classes","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"]),$=i.a.useRef();i.a.useEffect((function(){return function(){clearTimeout($.current)}}),[]);var V=i.a.useRef(0),W=i.a.useRef(),H=i.a.useRef([]);H.current=[H.current[0]];var A=i.a.useCallback((function(e){H.current[0]=e}),[]),K=Object(d.a)(l,A),J=function(e,t){return function(o){H.current[e+1]=o,t&&t(o)}};i.a.useEffect((function(){P||(V.current=0,W.current=void 0)}),[P]);var U=function(e){"mouseleave"===e.type&&L&&L(e),"blur"===e.type&&w&&w(e),clearTimeout($.current),E&&("blur"===e.type?(e.persist(),$.current=setTimeout((function(){E(e,"blur")}))):E(e,"mouseLeave"))},q=function(e){"mouseenter"===e.type&&D&&D(e),"focus"===e.type&&k&&k(e),clearTimeout($.current),M&&!P&&(e.persist(),$.current=setTimeout((function(){M(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])})))},G=o.replace(/^[^a-z]+|[^\w:.-]+/gi,""),Q=i.a.Children.toArray(g).filter((function(e){return i.a.isValidElement(e)})),X=Q.map((function(e,t){var o=e.props.FabProps,r=(o=void 0===o?{}:o).ref,c=Object(n.a)(o,["ref"]);return i.a.cloneElement(e,{FabProps:Object(a.a)({},c,{ref:J(t,r)}),delay:30*(P?t:Q.length-t),open:P,id:"".concat(G,"-action-").concat(t)})}));return i.a.createElement("div",Object(a.a)({className:Object(c.a)(v.root,v["direction".concat(Object(m.a)(T))],y),ref:t,role:"presentation",onKeyDown:function(e){R&&R(e);var t,o,a,n=e.key.replace("Arrow","").toLowerCase(),r=W.current,i=void 0===r?n:r;if("Escape"!==e.key){if(f(n)===f(i)&&void 0!==f(n)){e.preventDefault();var c=n===i?1:-1,s=(t=V.current+c,o=0,a=H.current.length-1,t<o?o:t>a?a:t);H.current[s].focus(),V.current=s,W.current=i}}else E&&(H.current[0].focus(),E(e,"escapeKeyDown"))},onBlur:U,onFocus:q,onMouseEnter:q,onMouseLeave:U},B),i.a.createElement(F,Object(a.a)({in:!j,timeout:z,unmountOnExit:!0},I),i.a.createElement(p.a,Object(a.a)({color:"primary","aria-label":o,"aria-haspopup":"true","aria-expanded":P,"aria-controls":"".concat(G,"-actions")},h,{onClick:function(e){h.onClick&&h.onClick(e),clearTimeout($.current),P?E&&E(e,"toggle"):M&&M(e,"toggle")},className:Object(c.a)(v.fab,h.className),ref:K}),i.a.isValidElement(C)&&Object(b.a)(C,["SpeedDialIcon"])?i.a.cloneElement(C,{open:P}):C)),i.a.createElement("div",{id:"".concat(G,"-actions"),role:"menu","aria-orientation":f(T),className:Object(c.a)(v.actions,!P&&v.actionsClosed)},X))}));t.a=Object(l.a)((function(e){return{root:{zIndex:e.zIndex.speedDial,display:"flex",pointerEvents:"none"},fab:{pointerEvents:"auto"},directionUp:{flexDirection:"column-reverse","& $actions":{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},directionDown:{flexDirection:"column","& $actions":{flexDirection:"column",marginTop:-32,paddingTop:48}},directionLeft:{flexDirection:"row-reverse","& $actions":{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},directionRight:{flexDirection:"row","& $actions":{flexDirection:"row",marginLeft:-32,paddingLeft:48}},actions:{display:"flex",pointerEvents:"auto"},actionsClosed:{transition:"top 0s linear 0.2s",pointerEvents:"none"}}}),{name:"MuiSpeedDial"})(h)},617:function(e,t,o){"use strict";var a=o(2),n=o(0),r=o(1),i=o.n(r),c=(o(6),o(12)),s=o(15),l=o(26),u=o(505),p=o(11),d=o(28),m=o.n(d),b=o(27),f=o(558),h=o(586),g=o(82),v=o(119),y=o(180),O=o(85);function T(e){return Math.round(1e5*e)/1e5}var x=i.a.forwardRef((function(e,t){var o=e.children,r=e.classes,s=e.disableFocusListener,l=void 0!==s&&s,u=e.disableHoverListener,p=void 0!==u&&u,d=e.disableTouchListener,T=void 0!==d&&d,x=e.enterDelay,j=void 0===x?0:x,C=e.enterTouchDelay,w=void 0===C?700:C,E=e.id,k=e.interactive,R=void 0!==k&&k,D=e.leaveDelay,L=void 0===D?0:D,M=e.leaveTouchDelay,P=void 0===M?1500:M,N=e.onClose,F=e.onOpen,S=e.open,z=e.placement,I=void 0===z?"bottom":z,B=e.PopperProps,$=e.title,V=e.TransitionComponent,W=void 0===V?f.a:V,H=e.TransitionProps,A=Object(a.a)(e,["children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperProps","title","TransitionComponent","TransitionProps"]),K=Object(O.a)(),J=i.a.useState(!1),U=J[0],q=J[1],G=i.a.useState(0)[1],Q=i.a.useState(),X=Q[0],Y=Q[1],Z=i.a.useRef(!1),_=i.a.useRef(null!=S).current,ee=i.a.useRef(),te=i.a.useRef(),oe=i.a.useRef(),ae=i.a.useRef(),ne=i.a.useRef();i.a.useEffect((function(){ee.current||(ee.current="mui-tooltip-".concat(Math.round(1e5*Math.random()))),S&&G((function(e){return!e}))}),[S]),i.a.useEffect((function(){return function(){clearTimeout(te.current),clearTimeout(oe.current),clearTimeout(ae.current),clearTimeout(ne.current)}}),[]);var re=function(e){_||U||q(!0),F&&F(e)},ie=function(e){var t=o.props;"mouseover"===e.type&&t.onMouseOver&&t.onMouseOver(e),Z.current&&"touchstart"!==e.type||(X&&X.removeAttribute("title"),clearTimeout(oe.current),clearTimeout(ae.current),j?(e.persist(),oe.current=setTimeout((function(){re(e)}),j)):re(e))},ce=Object(y.a)(),se=ce.isFocusVisible,le=ce.onBlurVisible,ue=ce.ref,pe=i.a.useState(!1),de=pe[0],me=pe[1],be=function(e){_||q(!1),N&&N(e),clearTimeout(te.current),te.current=setTimeout((function(){Z.current=!1}),K.transitions.duration.shortest)},fe=function(e){var t=o.props;"blur"===e.type&&(t.onBlur&&t.onBlur(e),de&&(me(!1),le())),"mouseleave"===e.type&&t.onMouseLeave&&t.onMouseLeave(e),clearTimeout(oe.current),clearTimeout(ae.current),e.persist(),ae.current=setTimeout((function(){be(e)}),L)},he=Object(g.a)(Y,t),ge=Object(g.a)(ue,he),ve=i.a.useCallback((function(e){Object(v.a)(ge,m.a.findDOMNode(e))}),[ge]),ye=Object(g.a)(o.ref,ve),Oe=_?S:U;""===$&&(Oe=!1);var Te=!Oe&&!p,xe=Object(n.a)({"aria-describedby":Oe?E||ee.current:null,title:Te&&"string"===typeof $?$:null},A,{},o.props,{className:Object(c.a)(A.className,o.props.className)});T||(xe.onTouchStart=function(e){Z.current=!0;var t=o.props;t.onTouchStart&&t.onTouchStart(e),clearTimeout(ae.current),clearTimeout(te.current),clearTimeout(ne.current),e.persist(),ne.current=setTimeout((function(){ie(e)}),w)},xe.onTouchEnd=function(e){o.props.onTouchEnd&&o.props.onTouchEnd(e),clearTimeout(ne.current),clearTimeout(ae.current),e.persist(),ae.current=setTimeout((function(){be(e)}),P)}),p||(xe.onMouseOver=ie,xe.onMouseLeave=fe),l||(xe.onFocus=function(e){X||Y(e.currentTarget),se(e)&&(me(!0),ie(e));var t=o.props;t.onFocus&&t.onFocus(e)},xe.onBlur=fe);var je=R?{onMouseOver:xe.onMouseOver,onMouseLeave:xe.onMouseLeave,onFocus:xe.onFocus,onBlur:xe.onBlur}:{};return i.a.createElement(i.a.Fragment,null,i.a.cloneElement(o,Object(n.a)({ref:ye},xe)),i.a.createElement(h.a,Object(n.a)({className:Object(c.a)(r.popper,R&&r.popperInteractive),placement:I,anchorEl:X,open:!!X&&Oe,id:xe["aria-describedby"],transition:!0},je,B),(function(e){var t=e.placement,o=e.TransitionProps;return i.a.createElement(W,Object(n.a)({timeout:K.transitions.duration.shorter},o,H),i.a.createElement("div",{className:Object(c.a)(r.tooltip,r["tooltipPlacement".concat(Object(b.a)(t.split("-")[0]))],Z.current&&r.touch)},$))})))})),j=Object(l.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none",flip:!1},popperInteractive:{pointerEvents:"auto"},tooltip:{backgroundColor:Object(s.c)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(T(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(T(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(p.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(p.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(p.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(p.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip"})(x),C=i.a.forwardRef((function(e,t){var o=e.classes,r=e.className,s=e.delay,l=void 0===s?0:s,p=e.FabProps,d=e.icon,m=e.id,f=e.open,h=e.TooltipClasses,g=e.tooltipOpen,v=void 0!==g&&g,y=e.tooltipPlacement,O=void 0===y?"left":y,T=e.tooltipTitle,x=Object(a.a)(e,["classes","className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"]),C=i.a.useState(v),w=C[0],E=C[1],k={transitionDelay:"".concat(l,"ms")};p&&p.style&&(p.style.transitionDelay="".concat(l,"ms"));var R=i.a.createElement(u.a,Object(n.a)({size:"small",className:Object(c.a)(o.fab,r,!f&&o.fabClosed),tabIndex:-1,role:"menuitem",style:k,"aria-describedby":"".concat(m,"-label")},p),d);return v?i.a.createElement("span",Object(n.a)({id:m,ref:t,className:Object(c.a)(o.staticTooltip,o["tooltipPlacement".concat(Object(b.a)(O))],!f&&o.staticTooltipClosed)},x),i.a.createElement("span",{style:k,id:"".concat(m,"-label"),className:o.staticTooltipLabel},T),R):i.a.createElement(j,Object(n.a)({id:m,ref:t,title:T,placement:O,onClose:function(){E(!1)},onOpen:function(){E(!0)},open:f&&w,classes:h},x),R)}));t.a=Object(l.a)((function(e){return{fab:{margin:8,color:e.palette.text.secondary,backgroundColor:e.palette.background.paper,"&:hover":{backgroundColor:Object(s.b)(e.palette.background.paper,.15)},transition:"".concat(e.transitions.create("transform",{duration:e.transitions.duration.shorter}),", opacity 0.8s"),opacity:1},fabClosed:{opacity:0,transform:"scale(0)"},staticTooltip:{position:"relative",display:"flex","& $staticTooltipLabel":{transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.shorter}),opacity:1}},staticTooltipClosed:{"& $staticTooltipLabel":{opacity:0,transform:"scale(0.5)"}},staticTooltipLabel:Object(n.a)({position:"absolute"},e.typography.body1,{backgroundColor:e.palette.background.paper,borderRadius:e.shape.borderRadius,boxShadow:e.shadows[1],color:e.palette.text.secondary,padding:"4px 16px"}),tooltipPlacementLeft:{alignItems:"center","& $staticTooltipLabel":{transformOrigin:"100% 50%",right:"100%",marginRight:8}},tooltipPlacementRight:{alignItems:"center","& $staticTooltipLabel":{transformOrigin:"0% 50%",left:"100%",marginLeft:8}}}}),{name:"MuiSpeedDialAction"})(C)}}]);
//# sourceMappingURL=1.aa5068db.chunk.js.map