(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[5],{20:function(e,n,t){"use strict";n.a={urlGmail:"https://www.googleapis.com/gmail/v1/users/me/",urlCalendar:"https://www.googleapis.com/calendar/v3/calendars/primary/events",client_id:"128451255760-6lug3bde25hnd9btogfr7t3ff135ddvq.apps.googleusercontent.com",api_key:"AIzaSyC0_rYfBmJYrGPbqlVmcB_MjH_Ioem3tpE",primary_color:"red",secondary_color:"purple",type:"dark",chatID:"12175f61a39221e",chatKey:"dc6caa6233ad738d187ea788fe4208da44d5c50b",chatRegion:"eu"}},47:function(e,n,t){e.exports=t(58)},52:function(e,n,t){},53:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(28),c=t.n(o),l=(t(52),t(29)),i=t(10),s=t(73),u=t(70),m=(t(53),function(){return r.a.createElement(s.a,{position:"absolute",top:"50%",left:"50%"},r.a.createElement(u.a,{color:"primary"}))});var d=function(){var e=r.a.lazy((function(){return Promise.all([t.e(2),t.e(3),t.e(19)]).then(t.bind(null,551))})),n=r.a.lazy((function(){return Promise.all([t.e(3),t.e(9),t.e(24)]).then(t.bind(null,607))}));return r.a.createElement(l.a,null,r.a.createElement(r.a.Suspense,{fallback:m()},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/login",name:"Login",render:function(n){return r.a.createElement(e,n)}}),r.a.createElement(i.b,{path:"/",name:"Inicio",render:function(e){return r.a.createElement(n,e)}}))))},p=t(21),h=t(20);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=(new p.CometChat.AppSettingsBuilder).subscribePresenceForAllUsers().setRegion(h.a.chatRegion).build();p.CometChat.init(h.a.chatID,f).then((function(){}),(function(e){console.log("fallo el inicio de chat:",e)})),c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,6,8]]]);
//# sourceMappingURL=main.05d91b7f.chunk.js.map