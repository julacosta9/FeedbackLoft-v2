(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),o=a.n(l),c=(a(81),a(40),a(2)),i=a(13),u=a(6),m=r.a.createContext({}),s=(a(82),a(16)),d=a.n(s),p=a(25),b=a(75),f=a(71),g=function(){return window.history.replaceState({},document.title,window.location.pathname)},h=r.a.createContext(),v=function(){return Object(n.useContext)(h)},E=function(e){var t=e.children,a=e.onRedirectCallback,l=void 0===a?g:a,o=Object(b.a)(e,["children","onRedirectCallback"]),i=Object(n.useState)(),u=Object(c.a)(i,2),m=u[0],s=u[1],v=Object(n.useState)(),E=Object(c.a)(v,2),x=E[0],w=E[1],y=Object(n.useState)(),k=Object(c.a)(y,2),N=k[0],j=k[1],O=Object(n.useState)(!0),C=Object(c.a)(O,2),S=C[0],R=C[1],D=Object(n.useState)(!1),I=Object(c.a)(D,2),_=I[0],U=I[1];Object(n.useEffect)(function(){(function(){var e=Object(p.a)(d.a.mark(function e(){var t,a,n,r,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)(o);case 2:if(t=e.sent,j(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,l(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,s(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:c=e.sent,w(c);case 19:R(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var P=function(){var e=Object(p.a)(d.a.mark(function e(){var t,a,n=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},U(!0),e.prev=2,e.next=5,N.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,U(!1),e.finish(10);case 13:return e.next=15,N.getUser();case 15:a=e.sent,w(a),s(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,N.handleRedirectCallback();case 3:return e.next=5,N.getUser();case 5:t=e.sent,R(!1),s(!0),w(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{isAuthenticated:m,user:x,loading:S,popupOpen:_,loginWithPopup:P,handleRedirectCallback:T,getIdTokenClaims:function(){return N.getIdTokenClaims.apply(N,arguments)},loginWithRedirect:function(){return N.loginWithRedirect.apply(N,arguments)},getTokenSilently:function(){return N.getTokenSilently.apply(N,arguments)},getTokenWithPopup:function(){return N.getTokenWithPopup.apply(N,arguments)},logout:function(){return N.logout.apply(N,arguments)}}},t)},x=a(18),w=function(e){return r.a.createElement("div",{className:"flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},e.message,r.a.createElement("button",{className:"semibold text-red-800 text-xs",id:e.id,onClick:e.callback},"X"))},y=function(){var e=Object(n.useContext)(m).notifications,t=Object(n.useState)([""]),a=Object(c.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)(function(){o(e)},[e]);var i=Object(n.useState)(!1),u=Object(c.a)(i,2),s=u[0],d=u[1];Object(n.useEffect)(function(){},[s]);return Object(n.useEffect)(function(){},[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"block",onClick:function(){return d(!0!==s)}},l[0]&&!1===l[0].isRead?r.a.createElement(x.a,{icon:["fas","bell"],className:"relative text-white"}):r.a.createElement(x.a,{icon:["far","bell"],className:"relative text-white"})),!0===s?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"py-1 mt-2 rounded-md bg-white shadow-xs absolute right-0 w-64",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"},l[0]&&l.length>0?l.map(function(e,t){if(!1===e.isRead)return r.a.createElement(w,{id:e._id,key:e._id,message:e.message,date:e.dateCreated})}):r.a.createElement("div",{className:"text-center"},"No Current Notifications"))):r.a.createElement("div",{className:"invisible"}))},k=a(14),N=a(72),j=function(e,t){var a=Object(n.useState)(e),r=Object(c.a)(a,2),l=r[0],o=r[1];return{handleChange:function(e){e.persist(),o(function(t){return Object(N.a)({},t,Object(k.a)({},e.target.name,e.target.value))})},handleSubmit:function(e){e&&e.preventDefault(),t(),console.log("Form Submitted")},values:l}},O=function(){var e=j([],a),t=e.values,a=(e.handleChange,e.handleSubmit,function(){console.log(t)}),l=Object(n.useState)(!1),o=Object(c.a)(l,2),i=o[0],u=o[1];return Object(n.useEffect)(function(){},[i]),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return u(!0!==i)}},"Genres"),!0===i?r.a.createElement("form",null,r.a.createElement("input",{name:"alternative-rock",type:"button",value:"alternative-rock",placeholder:"Alternative Rock"}),r.a.createElement("input",{name:"ambient",type:"button",value:"ambient",placholder:"Ambient"}),r.a.createElement("input",{name:"classical",type:"button",value:"classical",placeholder:"Classical"}),r.a.createElement("input",{name:"country",type:"button",value:"country",placeholder:"Country"}),r.a.createElement("input",{name:"dance-&-edm",type:"button",value:"dance-&-edm",placeholder:"Dance & EDM"}),r.a.createElement("input",{name:"dancehall",type:"button",value:"dancehall",palceholder:"Dancehall"}),r.a.createElement("input",{name:"deep-house",type:"button",value:"deep-house",palceholder:"Deep House"}),r.a.createElement("input",{name:"disco",type:"button",value:"disco",palceholder:"Disco"}),r.a.createElement("input",{name:"drum-&-bass",type:"button",value:"drum-&-bass",palceholder:"Drum & Bass"}),r.a.createElement("input",{name:"dubstep",type:"button",value:"dubstep",palceholder:"Dubstep"}),r.a.createElement("input",{name:"electronic",type:"button",value:"electronic",palceholder:"Electronic"}),r.a.createElement("input",{name:"folk-&-singer-songwriter",type:"button",value:"folk-&-singer-songwriter",palceholder:"Folk & Singer-Songwriter"}),r.a.createElement("input",{name:"hip-hop-&-rap",type:"button",value:"hip-hop-&-rap",palceholder:"Hip-Hop & Rap"}),r.a.createElement("input",{name:"house",type:"button",value:"house",palceholder:"House"}),r.a.createElement("input",{name:"indie",type:"button",value:"indie",palceholder:"Indie"}),r.a.createElement("input",{name:"jazz-&-blues",type:"button",value:"jazz-&-blues",palceholder:"Jazz & Blues"}),r.a.createElement("input",{name:"latin",type:"button",value:"latin",palceholder:"Latin"}),r.a.createElement("input",{name:"metal",type:"button",value:"metal",palceholder:"Metal"}),r.a.createElement("input",{name:"piano",type:"button",value:"piano",palceholder:"Piano"}),r.a.createElement("input",{name:"pop",type:"button",value:"pop",palceholder:"Pop"}),r.a.createElement("input",{name:"r&b-&-soul",type:"button",value:"r&b-&-soul",palceholder:"R&B & Soul"}),r.a.createElement("input",{name:"reggae",type:"button",value:"reggae",palceholder:"Reggae"}),r.a.createElement("input",{name:"reggaeton",type:"button",value:"reggaeton",palceholder:"Reggaeton"}),r.a.createElement("input",{name:"rock",type:"button",value:"rock",palceholder:"Rock"}),r.a.createElement("input",{name:"soundtrack",type:"button",value:"soundtrack",palceholder:"Soundtrack"}),r.a.createElement("input",{name:"techno",type:"button",value:"techno",palceholder:"Techno"}),r.a.createElement("input",{name:"trance",type:"button",value:"trance",palceholder:"Trance"}),r.a.createElement("input",{name:"trap",type:"button",value:"trap",palceholder:"Trap"}),r.a.createElement("input",{name:"triphop",type:"button",value:"triphop",palceholder:"Triphop"}),r.a.createElement("input",{name:"world",type:"button",value:"world",palceholder:"World"}),r.a.createElement("button",null,"Update Preferred Genres")):r.a.createElement("div",null),r.a.createElement("button",null,"log out button"))},C=a(73),S=a.n(C),R=function(){var e=v(),t=e.isAuthenticated,a=e.logout,l=Object(n.useState)(!1),o=Object(c.a)(l,2),u=o[0],s=o[1],d=Object(n.useState)(!1),p=Object(c.a)(d,2),b=p[0],f=p[1];Object(n.useEffect)(function(){},[u]);var g=Object(n.useContext)(m),h=g.username,E=(g.email,g.feedbackGiven),x=g.feedbackReceived;g._id;return r.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-fl-red p-6 shadow-lg"},r.a.createElement("img",{src:S.a,className:"w-56"}),r.a.createElement("div",{className:"sm:hidden"},r.a.createElement("button",{className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",onClick:function(){f(!b)}},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),b?r.a.createElement("path",{fillRule:"evenodd",d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}):r.a.createElement("path",{fillRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"})))),r.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto pl-16 pb-3"},r.a.createElement("div",{className:"text-sm lg:flex-grow"},r.a.createElement(i.b,{to:"/",href:"#responsive-header",className:"block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:underline mr-4"},"Dashboard"),r.a.createElement(i.b,{to:"/loop",href:"#responsive-header",className:"block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:underline mr-4 pl-2"},"Loop")),r.a.createElement("span",{className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 relative"},r.a.createElement(y,null)),r.a.createElement("a",{className:"block mt-4 lg:inline-block lg:mt-0 font-semibold text-white mr-4",onClick:function(){return s(!0!==u)}},h),!0===u?r.a.createElement(O,null):r.a.createElement("div",null),r.a.createElement("span",{className:"block mt-4 lg:inline-block lg:mt-0 text-white mr-4"},r.a.createElement("span",{className:"mx-1"},E),r.a.createElement("i",{className:"fas fa-arrow-alt-circle-up mx-1"})),r.a.createElement("span",{className:"block mt-4 lg:inline-block lg:mt-0 text-white mr-4"},r.a.createElement("span",{className:"mx-1"},x),r.a.createElement("i",{className:"fas fa-arrow-alt-circle-down mx-1"})),r.a.createElement("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"},t&&r.a.createElement("button",{onClick:function(){return a()}},"Logout"))))},D=a(4),I=a.n(D),_=function(e){return I.a.get("/api/users/".concat(e))},U=function(e){return I.a.get("/api/users/".concat(e))},P=function(e){I.a.post("/api/users",e).then(function(e){return console.log(e),e}).catch(function(e){console.log(e)})},T=function(e,t){I.a.put("/api/users/incrementFeedback",{giverId:e,receiverId:t}).then(function(e){return e}).catch(function(e){console.log(e)})},z=function(e){I.a.put("/api/users/addNotification",e).then(function(e){return e}).catch(function(e){console.log(e)})},L=function(e){return I.a.get("/api/projects/byUser/".concat(e))},H=function(e){I.a.post("/api/projects",e).then(function(e){return console.log(e),e}).catch(function(e){console.log(e)})},W=function(e){return I.a.get("/api/comments/byAuthor/".concat(e))},A=function(e){return I.a.get("/api/comments/byProject/".concat(e))},B=function(e){I.a.post("/api/comments",e).then(function(e){return console.log(e),e}).catch(function(e){console.log(e)})},M=function(e){return I.a.get("/api/loop",e)},F=function(e){var t=Object(n.useContext)(m),a=t._id,l=t.username,o=j({authorId:"",authorUsername:"",text:"",rating:1,projectId:"",projectName:""},function(t){B(c),T(a,e.id),z({recipientId:e.id,senderName:l,message:l+" has left a review on your project "+e.projectName}),window.location.reload(!1)}),c=o.values,i=o.handleChange,u=o.handleSubmit;return c.authorId=a,c.authorUsername=l,c.projectId=e.projectId,c.projectName=e.projectName,r.a.createElement("form",{className:"w-full max-w-xl bg-white rounded-lg px-4 py-4 mx-auto shadow-lg border-gray-400",onSubmit:u},r.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},r.a.createElement("label",{className:"px-4 pt-3 pb-2 text-gray-800 text-lg",htmlFor:"body"},"Add a new comment"),r.a.createElement("div",{className:"w-full md:w-full px-3 mb-2 mt-2"},r.a.createElement("textarea",{className:"appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500",name:"body",placeholder:"Type Your Comment",onChange:i,required:!0})),r.a.createElement("div",{className:"w-full md:w-full px-3 mb-2 mt-2 relative"},r.a.createElement("label",{className:"px-4 pt-3 pb-3 text-gray-800 text-lg",htmlFor:"rating"},"Rating"),r.a.createElement("select",{onChange:i,name:"rating",id:"rating",className:"appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"},r.a.createElement("option",{value:3},r.a.createElement("span",null,"\u2764\ufe0f")," Love it!"),r.a.createElement("option",{value:2},r.a.createElement("span",null,"\ud83d\udc4d")," Like it."),r.a.createElement("option",{value:1},r.a.createElement("span",null,"\ud83d\udee0\ufe0f")," Needs Work...")),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8 pt-6 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),r.a.createElement("div",{className:"w-full md:w-full flex items-start md:w-full px-3 mt-4"},r.a.createElement("div",{className:"flex items-start w-1/2 text-gray-700 px-2 mr-auto"},r.a.createElement("svg",{fill:"none",className:"w-5 h-5 text-gray-600 mr-1",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})),r.a.createElement("p",{className:"text-xs md:text-sm pt-px"},"Please be detailed and contructive. Help keep our community friendly :D")),r.a.createElement("div",{className:"-mr-1"},r.a.createElement("input",{type:"submit",className:"bg-white text-gray-700 font-medium py-1 px-4 border border-fl-red rounded-md tracking-wide mr-1 hover:bg-fl-red hover:text-white cursor-pointer h-12",value:"Post Comment"})))))},G=function(e){var t=Object(n.useState)({feedbackGiven:0,feedbackReceived:0}),a=Object(c.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)(function(){_(e.userId).then(function(e){o(e.data),console.log(e.data)}).catch(function(e){return console.log(e)})},[e.userId]),r.a.createElement("div",{className:"w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-12/12 md:w-12/12 bg-white mx-3 md:mx-0 lg:mx-0 m-8 p-6"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row justify-between"},r.a.createElement("p",{className:"font-bold text-3xl mb-2 hover:text-fl-red"},e.name),r.a.createElement("span",{className:"self-start inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#",e.genre)),r.a.createElement("div",{className:"flex flex-row items-baseline"},r.a.createElement("p",{className:"font-bold text-xl mb-2 mr-2"},e.username),r.a.createElement(x.a,{icon:"arrow-alt-circle-up",className:"mx-1"}),l.feedbackGiven,r.a.createElement(x.a,{icon:"arrow-alt-circle-down",className:"mx-1"}),l.feedbackReceived)),e.url,r.a.createElement("div",{className:"px-2"},e.description))},J=function(){var e,t=Object(n.useState)((e={name:"",username:"",userId:"",url:"",genre:"",dateCreated:""},Object(k.a)(e,"name",""),Object(k.a)(e,"_id",""),e)),a=Object(c.a)(t,2),l=a[0],o=a[1],i=Object(n.useContext)(m)._id;return Object(n.useEffect)(function(){M({id:i}).then(function(e){o(e.data),console.log(e.data)}).catch(function(e){return console.log(e)})},[]),r.a.createElement("div",{className:"container mx-auto"},console.log("user id "+i),r.a.createElement(G,{name:l.name,username:l.username,userId:l.userId,url:"<"===l.url[0]?r.a.createElement("iframe",{srcDoc:l.url}):r.a.createElement("audio",{controls:!0,controlsList:"nodownload"},r.a.createElement("source",{src:l.url,type:"audio/mpeg"})),genre:l.genre,description:l.description,dateCreated:l.dateCreated}),r.a.createElement(F,{projectId:l._id,projectName:l.name,id:l.userId}))},q=function(e){return r.a.createElement("div",{className:"flex flex-col p-4 "},r.a.createElement("div",null,r.a.createElement("span",{className:"font-bold"},e.authorUsername," "),r.a.createElement("span",{className:"text-xs"},"posted ",function(e){var t=new Date(e);return t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()}(e.timestamp))),r.a.createElement("div",null,e.text))},Y=function(e){var t=e.project,a=t._id,l=t.name,o=t.username,i=t.genres,u=t.url,m=t.description,s=Object(n.useState)([{authorUsername:"",dateCreated:"",text:"",_id:""}]),d=Object(c.a)(s,2),p=d[0],b=d[1];return Object(n.useEffect)(function(){A(a).then(function(e){return b(e.data)}).catch(function(e){return console.log(e)})},[a]),r.a.createElement("div",{className:"mx-2"},r.a.createElement("div",{className:"w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-10/12 md:w-12/12 bg-white md:mx-auto sm:mx-2 mt-16 mb-8 p-6"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row justify-between"},r.a.createElement("p",{className:"font-bold text-3xl mb-2 hover:text-fl-red"},l),r.a.createElement("span",{className:"self-start inline-block bg-fl-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#House",i)),r.a.createElement("p",{className:"font-bold text-xl mb-2"},o)),"<"===u[0]?r.a.createElement("iframe",{className:"h-iframe",srcdoc:u}):r.a.createElement("audio",{controls:!0,controlsList:"nodownload"},r.a.createElement("source",{src:u,type:"audio/mpeg"})),r.a.createElement("div",{className:"px-2"},m),r.a.createElement("div",{className:"bg-white border-l-4 ml-8 px-2 "},p.map(function(e){return r.a.createElement(q,{key:e._id,authorUsername:e.authorUsername,timestamp:e.dateCreated,text:e.text})}))))},V=function(){return r.a.createElement("div",null,r.a.createElement(Y,null))},X=(a(106),function(e){var t=Object(n.useContext)(m),a=t._id,l=t.username,o=Object(n.useState)(!1),i=Object(c.a)(o,2),u=i[0],s=i[1],d=j({name:"",userId:"",username:"",genre:"rock",url:"",description:""},function(){var e=new FormData,t=document.getElementById("audio-file");e.append("audio",t.files[0]),I.a.post("/api/projects/audio-upload",e).then(function(e){p.url=e.data.s3AudioUrl,H(p)}).catch(function(e){console.log(e)})}),p=d.values,b=d.handleChange,f=d.handleSubmit;return Object(n.useEffect)(function(){},[u]),p.userId=a,p.username=l,r.a.createElement("form",{class:"w-full max-w-xl flex flex-col bg-white rounded-lg px-6 py-6 mx-auto shadow-lg border-gray-400",onSubmit:f},r.a.createElement("label",{className:"pt-3 pb-2 text-gray-800 text-lg"},"Upload Type"),r.a.createElement("form",{className:"flex flex-row"},!1===u?r.a.createElement("button",{className:"bg-teal-400 w-6/12 text-white font-medium py-1 px-4 border border-teal-400 rounded-md tracking-wide mr-1 hover:bg-teal-400 hover:text-white h-12",onClick:function(e){e.preventDefault(),s(!1)}},"Upload a file"):r.a.createElement("button",{className:"bg-white w-6/12 text-gray-700 font-medium py-1 px-4 border border-teal-400 rounded-md tracking-wide mr-1 hover:bg-teal-400 hover:text-white h-12",onClick:function(e){e.preventDefault(),s(!1)}},"Upload a file"),!0===u?r.a.createElement("button",{className:"bg-orange-sc w-6/12 text-white font-medium py-1 px-4 border border-orange-sc rounded-md tracking-wide mr-1 hover:bg-orange-sc hover:text-white h-12",onClick:function(e){e.preventDefault(),s(!0)}},"Soundcloud"):r.a.createElement("button",{className:"bg-white w-6/12 text-gray-700 font-medium py-1 px-4 border border-orange-sc rounded-md tracking-wide mr-1 hover:bg-orange-sc hover:text-white h-12",onClick:function(e){e.preventDefault(),s(!0)}},"Soundcloud")),!1===u?r.a.createElement("input",{name:"file",type:"file",id:"audio-file",className:"pt-3 pb-2 mt-4"}):r.a.createElement("input",{name:"url",type:"text",placeholder:"Paste your soundcloud embed link",onChange:b,value:p.url,className:"pt-3 pb-2 mt-4 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"}),r.a.createElement("label",{className:"pt-3 pb-2 text-gray-800 text-lg",for:"name"},"Project Title"),r.a.createElement("input",{name:"name",type:"text",placeholder:"Project Title",onChange:b,value:p.name,className:"appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500",required:!0}),r.a.createElement("div",{class:"w-full md:w-full mb-2 mt-2 relative"},r.a.createElement("label",{className:"pt-3 pb-2 text-gray-800 text-lg",for:"genre"},"Genre"),r.a.createElement("select",{onChange:b,name:"genre",id:"genre",className:"appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"},r.a.createElement("option",{value:"alternative-rock"},"Alternative Rock"),r.a.createElement("option",{value:"ambient"},"Ambient"),r.a.createElement("option",{value:"classical"},"Classical"),r.a.createElement("option",{value:"country"},"Country"),r.a.createElement("option",{value:"dance-&-edm"},"Dance & EDM"),r.a.createElement("option",{value:"dancehall"},"Dancehall"),r.a.createElement("option",{value:"deep-house"},"Deep House"),r.a.createElement("option",{value:"disco"},"Disco"),r.a.createElement("option",{value:"drum-&-bass"},"Drum & Bass"),r.a.createElement("option",{value:"dubstep"},"Dubstep"),r.a.createElement("option",{value:"electronic"},"Electronic"),r.a.createElement("option",{value:"folk-&-singer-songwriter"},"Folk & Singer-Songwriter"),r.a.createElement("option",{value:"hip-hop-&-rap"},"Hip-hop & Rap"),r.a.createElement("option",{value:"house"},"House"),r.a.createElement("option",{value:"indie"},"Indie"),r.a.createElement("option",{value:"jazz-&-blues"},"Jazz & Blues"),r.a.createElement("option",{value:"latin"},"Latin"),r.a.createElement("option",{value:"metal"},"Metal"),r.a.createElement("option",{value:"piano"},"Piano"),r.a.createElement("option",{value:"pop"},"Pop"),r.a.createElement("option",{value:"r&b-&-soul"},"R&B & Soul"),r.a.createElement("option",{value:"reggae"},"Reggae"),r.a.createElement("option",{value:"reggaeton"},"Reggaeton"),r.a.createElement("option",{value:"rock"},"Rock"),r.a.createElement("option",{value:"soundtrack"},"Soundtrack"),r.a.createElement("option",{value:"techno"},"Techno"),r.a.createElement("option",{value:"trance"},"Trance"),r.a.createElement("option",{value:"trap"},"Trap"),r.a.createElement("option",{value:"triphop"},"Triphop"),r.a.createElement("option",{value:"world"},"World")),r.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8 pt-6 text-gray-700"},r.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),r.a.createElement("label",{className:"pt-3 pb-2 text-gray-800 text-lg",for:"description"},"Description"),r.a.createElement("textarea",{name:"description",type:"text",placeholder:"Express to listeners what you like about about your song and what you'd like feedback on.",onChange:b,value:p.description,className:"appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500",required:!0}),r.a.createElement("div",{className:"flex flex-row mt-3"},r.a.createElement("button",{className:"bg-white w-6/12 text-gray-700 font-medium py-1 px-4 border border-teal-400 rounded-md tracking-wide mr-1 hover:bg-teal-400 hover:text-white h-12"},"Submit"),r.a.createElement("button",{onClick:e.callback,id:"cancel",className:"bg-white w-6/12 text-gray-700 font-medium py-1 px-4 border border-gray-700 rounded-md tracking-wide mr-1 hover:bg-gray-700 hover:text-white h-12"},"Cancel")))}),$=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){},[a]);return r.a.createElement("div",null,!1===a?r.a.createElement("div",{onClick:function(){return l(!0)},className:"flex flex-col lg:w-4/12 max-w-sm items-center my-2 p-8 rounded bg-fl-yellow space-x-2 mx-auto cursor-pointer hover:shadow-md transition ease-in-out duration-200"},r.a.createElement("p",{className:"text-black text-center text-lg"},"Create A New Project"),r.a.createElement("i",{className:"fas fa-plus-circle fa-2x text-black pt-4"})):r.a.createElement(X,{callback:function(e){e.preventDefault(),l(!1)}}))},K=function(){var e=Object(n.useContext)(m),t=(e.username,e.email,e.feedbackGiven,e.feedbackReceived,e._id),a=Object(n.useState)([{authorUsername:"",dateCreated:"",text:"",_id:""}]),l=Object(c.a)(a,2),o=l[0],i=l[1];return Object(n.useEffect)(function(){W(t).then(function(e){i(e.data)}).catch(function(e){return console.log(e)})},[t]),r.a.createElement("div",{className:"w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-10/12 md:w-12/12 bg-white md:mx-auto mt-8 mb-8 p-6"},r.a.createElement("h2",{className:"font-bold text-xl mb-2"},"Your Comment History"),r.a.createElement("div",{className:"bg-white border-l-4 ml-8 px-2 "},o.map(function(e){return r.a.createElement(q,{key:e._id,authorUsername:e.authorUsername,timestamp:e.dateCreated,text:e.text})})))},Q=function(){var e=v(),t=(e.user,e.isAuthenticated,e.loginWithRedirect,e.logout,Object(n.useContext)(m)._id),a=Object(n.useState)([{name:"",userId:"",username:"",genre:"",url:"",description:"",dateCreated:"",lastCommentDate:"",_id:""}]),l=Object(c.a)(a,2),o=l[0],i=l[1],u=Object(n.useState)(!1),s=Object(c.a)(u,2);s[0],s[1];return Object(n.useEffect)(function(){L(t).then(function(e){return i(e.data)}).catch(function(e){return console.log(e)})},[t]),r.a.createElement("div",{className:"container mx-auto"},o.map(function(e){return r.a.createElement(Y,{key:e._id,project:e})}),o.length<=2?r.a.createElement($,null):r.a.createElement("div",null),r.a.createElement(K,null),console.log("Projects: ".concat(o._id)))},Z=a(22),ee=a(26);Z.b.add(ee.b,ee.a,ee.c);var te=function(){var e=v(),t=e.loading,a=e.user,l=e.isAuthenticated,o=e.loginWithRedirect;e.logout;if(t)return r.a.createElement("div",null,"Loading...");var s=Object(n.useState)({username:"",email:"",feedbackGiven:"",feedbackReceived:"",_id:"",notifications:[]}),d=Object(c.a)(s,2),p=d[0],b=d[1];if(Object(n.useEffect)(function(){U(a.email).then(function(e){console.log(e.data),b(e.data[0])}).catch(function(e){return console.log(e)}),document.body.style.background="#E8f4ff"},[a]),l)return U(a.email).then(function(e){0==e.data.length&&P({email:a.email,username:a.nickname})}),r.a.createElement(m.Provider,{value:p},r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/loop"},r.a.createElement(R,null),r.a.createElement(J,null)),r.a.createElement(u.a,{path:"/project-page"},r.a.createElement(R,null),r.a.createElement(V,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(R,null),r.a.createElement(Q,null)))));o({})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(38),ne=a(8),re=Object(ne.a)();o.a.render(r.a.createElement(E,{domain:ae.domain,client_id:ae.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){re.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t){},38:function(e){e.exports={domain:"round-mud-0489.auth0.com",clientId:"F67R6sd5HEohmobiI9GN2Xbtb38yhdnJ"}},40:function(e,t,a){},73:function(e,t,a){e.exports=a.p+"static/media/feedbackloft-logo-white-transparent.e61408bf.png"},76:function(e,t,a){e.exports=a(179)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.fa0fd34a.chunk.js.map