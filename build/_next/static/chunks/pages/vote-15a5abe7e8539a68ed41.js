_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"2PsZ":function(e,t,o){e.exports={voteDiv:"vote_voteDiv__2gD8g",voteDivInfo:"vote_voteDivInfo__1YJx0",voteDivInfoVoteBtn:"vote_voteDivInfoVoteBtn__2UKf3",voteDivForms:"vote_voteDivForms__1lyy_",voteDivFormsContainer:"vote_voteDivFormsContainer__101Ze",profileLogoutBtn:"vote_profileLogoutBtn__3ZM5H"}},BPWH:function(e,t,o){e.exports={logOutFormDiv:"LogOut_logOutFormDiv__33kbW",logoutBtn:"LogOut_logoutBtn__ujFTp"}},J4kA:function(e,t,o){e.exports={voteFormDiv:"VoteForm_voteFormDiv__2x4RU",voteFormHeader:"VoteForm_voteFormHeader__2qDx1",voteFormRow:"VoteForm_voteFormRow__YRH1E",voteFormNeoInput:"VoteForm_voteFormNeoInput__1h7NB",voteFormNeoSubmitButton:"VoteForm_voteFormNeoSubmitButton__3KTe6",profileLogoutBtn:"VoteForm_profileLogoutBtn__2Jduf"}},Tp5K:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vote",function(){return o("yv9J")}])},oMig:function(e,t,o){e.exports={profileCompleteDiv:"ProfileComplete_profileCompleteDiv__2wmij",profileCompleteHeader:"ProfileComplete_profileCompleteHeader__wBz6r",profileCompleteForm:"ProfileComplete_profileCompleteForm__1Gmez",neoInputDisabled:"ProfileComplete_neoInputDisabled__Y7prm",neoInput:"ProfileComplete_neoInput__1bC--",profileNeoSubmitButton:"ProfileComplete_profileNeoSubmitButton__31b1K",profileLogoutBtn:"ProfileComplete_profileLogoutBtn__1cYsP"}},vdBK:function(e,t,o){e.exports={loginFormDiv:"LoginForm_loginFormDiv__20QXH",loginFormHeader:"LoginForm_loginFormHeader__3hHZu",loginFormBtnContainer:"LoginForm_loginFormBtnContainer__I4Z3H",loginFormNeoButton:"LoginForm_loginFormNeoButton__3QcXt"}},yv9J:function(e,t,o){"use strict";o.r(t);var r=o("o0o1"),a=o.n(r),n=o("HaE+"),l=o("MX0m"),u=o.n(l),i=o("q1tI"),s=o.n(i),c=o("vdBK"),p=o.n(c),v=o("+jxT"),m=s.a.createElement,f=function(){return m("div",{className:p.a.loginFormDiv},m("p",{className:p.a.loginFormHeader},"You must be logged in to vote"),m("div",{className:p.a.loginFormBtnContainer},m("a",{href:"https://makai-test.herokuapp.com/api/users/auth/google"},m("div",{className:p.a.loginFormNeoButton},m(v.b,{size:24}),"\xa0\xa0 Sign-in with Google")),m("a",{href:"https://makai-test.herokuapp.com/api/users/auth/twitter"},m("div",{className:p.a.loginFormNeoButton},m(v.e,{size:24}),"\xa0\xa0Sign-in with Twitter")),m("a",{href:"https://makai-test.herokuapp.com/api/users/auth/facebook"},m("div",{className:p.a.loginFormNeoButton},m(v.a,{size:24}),"\xa0\xa0 Sign-in with Facebook"))))},g=o("vDqi"),d=o.n(g),b=o("nOHt"),h=o("J4kA"),_=o.n(h),y=s.a.createElement,N=function(){var e=Object(i.useState)(""),t=e[0],o=e[1],r=Object(i.useState)(""),l=r[0],u=r[1],s=Object(i.useState)(""),c=s[0],p=s[1],v=Object(i.useState)([]),m=v[0],f=v[1],g=Object(i.useState)([]),h=g[0],N=g[1],w=Object(b.useRouter)();Object(i.useEffect)((function(){f(["","Donald J. Trump","Joe Biden","Berney Sanders","Eliazabeth Warren","Mike Blooomberg"]),N([""])}),[]);var k=function(){var e=Object(n.a)(a.a.mark((function e(o){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.preventDefault(),r={primaryParty:t,secondaryParty:l,comment:c},e.next=4,d.a.post("https://makai-test.herokuapp.com/api/votes/vote",r,{headers:{Authorization:"Bearer "+localStorage.getItem("appy-vote-user-token")}});case 4:e.sent?(localStorage.setItem("appy-vote-user-voteStatus",!0),w.push("/overview")):alert("Vote not registered");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y("div",{className:_.a.voteFormDiv},y("p",{className:_.a.voteFormHeader},"Cast Your Vote"),y("form",{onSubmit:k},y("div",{className:_.a.voteFormRow},y("label",null,"Primary Party:"),y("div",null,y("select",{value:t,onChange:function(e){o(e.target.value);var t=m.filter((function(t){return t!==e.target.value}));N(t)},required:!0,className:_.a.voteFormNeoInput},m.map((function(e,t){return y("option",{key:"Primary".concat(t),value:e},e)}))))),y("div",{className:_.a.voteFormRow},y("label",null,"Secondary Party:"),y("div",null,y("select",{value:l,onChange:function(e){return u(e.target.value)},className:_.a.voteFormNeoInput},h.map((function(e,t){return y("option",{key:"Primary".concat(t),value:e},e)}))))),y("div",null,y("label",null,"Comment"),y("div",null,y("textarea",{value:c,onChange:function(e){return p(e.target.value)},rows:5,cols:50,className:_.a.voteFormNeoInput}))),y("div",null,y("button",{type:"submit",className:_.a.voteFormNeoSubmitButton},"Vote"))),y("a",{onClick:function(){localStorage.removeItem("appy-vote-user"),localStorage.removeItem("appy-vote-user-token"),w.push("/overview")},className:_.a.profileLogoutBtn},"LogOut"))};function w(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}d.a.defaults.baseURL="https://makai-test.herokuapp.com";var k={getUserDetails:function(){var e=Object(n.a)(a.a.mark((function e(t){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/users/profile/".concat(t));case 3:if(!(o=e.sent)){e.next=8;break}return e.abrupt("return",o.data);case 8:throw new Error("No user found");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),completeProfile:function(){var e=Object(n.a)(a.a.mark((function e(t){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/api/users/completeProfile",t);case 3:if(!(o=e.sent)){e.next=8;break}return e.abrupt("return",o.data);case 8:throw new Error("Update user failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},F=o("oMig"),S=o.n(F),O=s.a.createElement;function x(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function D(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?x(Object(o),!0).forEach((function(t){w(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var C=["US","UK","Canada","Nepal"],j=function(){var e=Object(i.useState)(),t=e[0],o=e[1],r=Object(i.useState)(""),l=r[0],u=r[1],s=Object(i.useState)(""),c=s[0],p=s[1],v=Object(i.useState)(""),m=v[0],f=v[1],g=Object(i.useState)([]),d=g[0],h=g[1],_=Object(i.useState)(null),y=_[0],N=_[1],w=Object(b.useRouter)();Object(i.useEffect)((function(){p(C[0]),h(C),F()}),[]);var F=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!w.query.id){e.next=7;break}return e.next=4,k.getUserDetails(w.query.id);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,k.getUserDetails(localStorage.getItem("appy-vote-user"));case 9:t=e.sent;case 10:if(!t.error){e.next=12;break}throw new Error(t.error.message);case 12:console.log(t),localStorage.setItem("appy-vote-user",t.id),t.completed&&w.push("/overview"),N(t),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),alert("Error:",ErrorEvent.message),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(n.a)(a.a.mark((function e(o){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o.preventDefault(),r=D({},y),!(t>=18)){e.next=20;break}return r.age=t,r.state=l,r.country=c,r.personalID=m,r.completed=!0,e.next=11,k.completeProfile(r);case 11:if(!(n=e.sent)){e.next=17;break}localStorage.setItem("appy-vote-user",n.id),w.reload(),e.next=18;break;case 17:throw new Error("Could not update error");case 18:e.next=21;break;case 20:alert("You should be greater or equal to 18");case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0.message),alert("Something is wrong: ",e.t0.message);case 27:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}();return O("div",{className:S.a.profileCompleteDiv},O("p",{className:S.a.profileCompleteHeader},"Complete profile before voting"),y?O("form",{onSubmit:x,className:S.a.profileCompleteForm},O("div",null,O("div",null,O("input",{type:"text",value:y.displayName,disabled:!0,className:S.a.neoInputDisabled}))),O("div",null,O("input",{type:"text",value:y.email,disabled:!0,className:S.a.neoInputDisabled})),O("div",null,O("div",null,O("input",{type:"number",onChange:function(e){return o(e.target.value)},value:t,placeholder:"Age",className:S.a.neoInput,required:!0})),O("div",null,O("input",{type:"text",onChange:function(e){return u(e.target.value)},value:l,className:S.a.neoInput,placeholder:"State",required:"US"===c}))),O("div",null,O("select",{value:c,onChange:function(e){return p(e.target.value)},className:S.a.neoInput,required:!0},d.map((function(e,t){return O("option",{key:"Country".concat(t),value:e},e)})))),O("div",null,O("input",{type:"text",onChange:function(e){return f(e.target.value)},value:m,className:S.a.neoInput,placeholder:"National id(optional)"})),O("div",null,O("button",{type:"submit",className:S.a.profileNeoSubmitButton},"Complete My Profile")),O("a",{onClick:function(){localStorage.removeItem("appy-vote-user"),localStorage.removeItem("appy-vote-user-token"),w.push("/overview")},className:S.a.profileLogoutBtn},"LogOut")):null)},I=o("BPWH"),B=o.n(I),P=s.a.createElement,E=function(){var e=Object(b.useRouter)();return P("div",{className:B.a.logOutFormDiv},P("p",{className:_.a.voteFormHeader},"Thanks for voting. Check overview to check realtime status or check the battleground to keep yourself updated with the news."),P("button",{onClick:function(){localStorage.removeItem("appy-vote-user"),localStorage.removeItem("appy-vote-user-token"),e.push("/overview")},className:B.a.logoutBtn},"Log out"))},H=o("2PsZ"),L=o.n(H),U=o("vRNQ"),R=o.n(U),V=o("hAPS"),T=s.a.createElement;t.default=function(){var e=Object(i.useState)(!1),t=e[0],o=e[1],r=Object(i.useState)(!1),l=r[0],s=r[1],c=Object(i.useState)(!1),p=c[0],v=c[1],m=Object(i.useState)(!1),g=m[0],d=m[1];Object(i.useEffect)((function(){b()}),[]);var b=function(){var e=new URL(document.location).searchParams,t=e.get("id");if(console.log(t),t){console.log("Why am I here");var r=t,a=e.get("token");localStorage.setItem("appy-vote-user",r),localStorage.setItem("appy-vote-user-token",a),h(r)}else if(localStorage.getItem("appy-vote-user")){console.log("I am here too");var n=localStorage.getItem("appy-vote-user");console.log(n),h(n)}else console.log("OH what the heck"),o(!0)},h=function(){var e=Object(n.a)(a.a.mark((function e(t){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("What the fuck is this?"),e.next=3,k.getUserDetails(t);case 3:o=e.sent,console.log(o),o.completed?o.voteStatus?d(!0):v(!0):s(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return T("div",{className:R.a.App},T(V.a,null),T("div",{className:R.a.mainContent},T("div",{className:R.a.circle1}),T("div",{className:R.a.circle2}),T("div",{className:L.a.voteDiv},T("div",{className:L.a.voteDivInfo},T("h1",null,"Place a vote",T("br",null),"if you haven't yet!"),T("p",null,"Check out BattleGround where we you can be updated with the latest and biggest news on the elections"),T("br",null),T("a",{href:"/battleground",className:L.a.voteDivInfoVoteBtn},"To BattleGround")),T("div",{className:L.a.voteDivForms},T("div",{className:L.a.voteDivFormsContainer},t?T(f,null):null,l?T(j,null):null,p?T(N,null):null,g?T(E,null):null))),T("div",{className:"jsx-3587207939"},T(u.a,{id:"3587207939"},["body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}","label{font-size:15px;font-weight:500;}","#__next-prerender-indicator{display:none;}"]))))}}},[["Tp5K",0,2,7,4,3,5,6,1,8,10]]]);