_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"2PsZ":function(e,a,t){e.exports={voteDiv:"vote_voteDiv__2gD8g",voteDivInfo:"vote_voteDivInfo__1YJx0",aboutDivInfo:"vote_aboutDivInfo__2WVHI",voteDivInfoVoteBtn:"vote_voteDivInfoVoteBtn__2UKf3",voteDivForms:"vote_voteDivForms__1lyy_",voteDivFormsContainer:"vote_voteDivFormsContainer__101Ze",profileLogoutBtn:"vote_profileLogoutBtn__3ZM5H",mobileDesc:"vote_mobileDesc__a8wov",desktopDesc:"vote_desktopDesc__2suP_"}},"8lYe":function(e,a,t){"use strict";var o=t("q1tI"),n=t.n(o),r=t("ma3e"),i=t("vRNQ"),s=t.n(i),u=n.a.createElement;a.a=function(e){var a=e.black;return u("div",{className:a?s.a.FooterContentBlack:s.a.FooterContent},u(r.b,null)," 2020 AppyVote All Rights Reserved.")}},BPWH:function(e,a,t){e.exports={logOutFormDiv:"LogOut_logOutFormDiv__33kbW",logoutBtn:"LogOut_logoutBtn__ujFTp"}},J4kA:function(e,a,t){e.exports={voteFormDiv:"VoteForm_voteFormDiv__2x4RU",voteFormHeader:"VoteForm_voteFormHeader__2qDx1",voteFormRow:"VoteForm_voteFormRow__YRH1E",voteFormNeoInput:"VoteForm_voteFormNeoInput__1h7NB",voteFormNeoSubmitButton:"VoteForm_voteFormNeoSubmitButton__3KTe6",profileLogoutBtn:"VoteForm_profileLogoutBtn__2Jduf"}},Tp5K:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vote",function(){return t("yv9J")}])},oMig:function(e,a,t){e.exports={profileCompleteDiv:"ProfileComplete_profileCompleteDiv__2wmij",profileCompleteHeader:"ProfileComplete_profileCompleteHeader__wBz6r",profileCompleteForm:"ProfileComplete_profileCompleteForm__1Gmez",neoInputDisabled:"ProfileComplete_neoInputDisabled__Y7prm",neoInput:"ProfileComplete_neoInput__1bC--",profileNeoSubmitButton:"ProfileComplete_profileNeoSubmitButton__31b1K",profileLogoutBtn:"ProfileComplete_profileLogoutBtn__1cYsP"}},vdBK:function(e,a,t){e.exports={loginFormDiv:"LoginForm_loginFormDiv__20QXH",loginFormHeader:"LoginForm_loginFormHeader__3hHZu",loginFormBtnContainer:"LoginForm_loginFormBtnContainer__I4Z3H",loginFormNeoButton:"LoginForm_loginFormNeoButton__3QcXt",policies:"LoginForm_policies__1iJvo",creditInfo:"LoginForm_creditInfo__3tvrs"}},"w/a3":function(e,a,t){"use strict";var o=t("o0o1"),n=t.n(o),r=t("HaE+"),i=t("vDqi"),s=t.n(i);s.a.defaults.baseURL="https://appyvote.com";var u=function(){var e=Object(r.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/users/profile/".concat(a));case 3:if(!(t=e.sent)){e.next=8;break}return e.abrupt("return",t.data);case 8:throw new Error("No user found");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/api/users/completeProfile",a);case 3:if(!(t=e.sent)){e.next=8;break}return e.abrupt("return",t.data);case 8:throw new Error("Update user failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),c=function(){var e=Object(r.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/totalCounts");case 3:if(!(a=e.sent)){e.next=8;break}return e.abrupt("return",a.data);case 8:throw new Error("Update user failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/ageData");case 3:if(!(a=e.sent)){e.next=8;break}return e.abrupt("return",a.data);case 8:throw new Error("Getting data failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(r.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/bubbleChart");case 3:if(!(a=e.sent)){e.next=8;break}return e.abrupt("return",a.data);case 8:throw new Error("Getting data failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/api/sendMail",a);case 3:if(!(t=e.sent).data.success){e.next=8;break}return e.abrupt("return",t.data);case 8:throw new Error("Cannot send mail");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}();a.a={getUserDetails:u,completeProfile:l,getCounts:c,getAgeData:p,getBubbleData:v,sendMail:m}},yv9J:function(e,a,t){"use strict";t.r(a);var o=t("o0o1"),n=t.n(o),r=t("HaE+"),i=t("MX0m"),s=t.n(i),u=t("q1tI"),l=t.n(u),c=t("vdBK"),p=t.n(c),v=t("+jxT"),m=t("YFqc"),d=t.n(m),f=l.a.createElement,g=function(){return f("div",{className:p.a.loginFormDiv},f("p",{className:p.a.loginFormHeader},"You must be logged in to vote"),f("div",{className:p.a.loginFormBtnContainer},f("a",{href:"https://appyvote.com/api/users/auth/google"},f("div",{className:p.a.loginFormNeoButton},f(v.b,{size:24}),"\xa0\xa0Sign-in with Google")),f("a",{href:"https://appyvote.com/api/users/auth/twitter"},f("div",{className:p.a.loginFormNeoButton},f(v.e,{size:24}),"\xa0\xa0Sign-in with Twitter")),f("a",{href:"https://appyvote.com/api/users/auth/facebook"},f("div",{className:p.a.loginFormNeoButton},f(v.a,{size:24}),"Sign-in with Facebook")),f("p",{className:p.a.policies},"By continuing, you agree to",f(d.a,{href:"/terms"},f("a",null," Appyvote's Terms ")),"and",f(d.a,{href:"/privacy"},f("a",null," Privacy Policy")),".")),f("div",{className:p.a.creditInfo},"AppyVote, created as a hobby project by Dipeche. Starring: Project Lead: Dipeche, Dev guru: Divyaswor, UI/UX: Buddhi, DevOps: Ujan"))},b=t("vDqi"),h=t.n(b),y=t("nOHt"),_=t("J4kA"),w=t.n(_),S=l.a.createElement,N=function(){var e=Object(u.useState)(""),a=e[0],t=e[1],o=Object(u.useState)(""),i=o[0],s=(o[1],Object(u.useState)("")),l=s[0],c=s[1],p=Object(u.useState)([]),v=p[0],m=p[1],d=Object(u.useState)([]),f=(d[0],d[1]),g=Object(y.useRouter)();Object(u.useEffect)((function(){m(["","Donald J. Trump","Joe Biden","Berney Sanders","Elizabeth Warren","Mike Bloomberg"]),f([""])}),[]);var b=function(){var e=Object(r.a)(n.a.mark((function e(t){var o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o={primaryParty:a,secondaryParty:i,comment:l},e.next=4,h.a.post("https://appyvote.com/api/votes/vote",o,{headers:{Authorization:"Bearer "+localStorage.getItem("appy-vote-user-token")}});case 4:e.sent?(localStorage.setItem("appy-vote-user-voteStatus",!0),g.push("/overview")):alert("Vote not registered");case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return S("div",{className:w.a.voteFormDiv},S("p",{className:w.a.voteFormHeader},"Cast Your Vote"),S("form",{onSubmit:b},S("div",{className:w.a.voteFormRow},S("label",null,"Choose your candidate:"),S("div",null,S("select",{value:a,onChange:function(e){t(e.target.value);var a=v.filter((function(a){return a!==e.target.value}));f(a)},required:!0,className:w.a.voteFormNeoInput},v.map((function(e,a){return S("option",{key:"Primary".concat(a),value:e},e)}))))),S("label",null,"Comment"),S("div",null,S("textarea",{value:l,onChange:function(e){return c(e.target.value)},rows:5,cols:50,className:w.a.voteFormNeoInput})),S("div",null,S("button",{type:"submit",className:w.a.voteFormNeoSubmitButton},"Vote"))),S("a",{onClick:function(){localStorage.removeItem("appy-vote-user"),localStorage.removeItem("appy-vote-user-token"),g.push("/overview")},className:w.a.profileLogoutBtn},"LogOut"))};function k(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var I=t("w/a3"),C=t("oMig"),F=t.n(C),D=l.a.createElement;function B(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function x(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?B(Object(t),!0).forEach((function(a){k(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O=["United States","United Kingdom","Nepal","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"],j=function(){var e=Object(u.useState)(),a=e[0],t=e[1],o=Object(u.useState)(""),i=o[0],s=o[1],l=Object(u.useState)(""),c=l[0],p=l[1],v=Object(u.useState)(""),m=v[0],d=v[1],f=Object(u.useState)([]),g=f[0],b=f[1],h=Object(u.useState)({}),_=h[0],w=h[1],S=Object(y.useRouter)();Object(u.useEffect)((function(){p(O[0]),b(O),N()}),[]);var N=function(){var e=Object(r.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!S.query.id){e.next=7;break}return e.next=4,I.a.getUserDetails(S.query.id);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,I.a.getUserDetails(localStorage.getItem("appy-vote-user"));case 9:a=e.sent;case 10:if(!a.error){e.next=12;break}throw new Error(a.error.message);case 12:console.log(a),localStorage.setItem("appy-vote-user",a.id),a.completed&&S.push("/overview"),w(a),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),alert("Error:",ErrorEvent.message),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(r.a)(n.a.mark((function e(t){var o,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),o=x({},_),!(a>=18)){e.next=20;break}return o.age=a,o.state=i,o.country=c,o.personalID=m,o.completed=!0,e.next=11,I.a.completeProfile(o);case 11:if(!(r=e.sent)){e.next=17;break}localStorage.setItem("appy-vote-user",r.id),S.reload(),e.next=18;break;case 17:throw new Error("Could not update error");case 18:e.next=21;break;case 20:alert("You should be greater or equal to 18");case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0.message),alert("Something is wrong: ",e.t0.message);case 27:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(a){return e.apply(this,arguments)}}();return D("div",{className:F.a.profileCompleteDiv},D("p",{className:F.a.profileCompleteHeader},"Complete profile before voting"),_?D("form",{onSubmit:k,className:F.a.profileCompleteForm},D("div",null,D("div",null,D("input",{type:"text",value:_.displayName,disabled:!0,className:F.a.neoInputDisabled}))),D("div",null,D("input",{type:"text",value:_.email,disabled:!0,className:F.a.neoInputDisabled})),D("div",null,D("input",{type:"number",onChange:function(e){return t(e.target.value)},value:a,placeholder:"Age",className:F.a.neoInput,required:!0})),D("select",{value:c,onChange:function(e){return p(e.target.value)},className:F.a.neoInput,required:!0},g.map((function(e,a){return D("option",{key:"Country".concat(a),value:e,className:F.a.neoInput},e)}))),"United States"===c?D("div",null,D("input",{type:"text",onChange:function(e){return s(e.target.value)},value:i,className:F.a.neoInput,placeholder:"State"})):null,D("div",null,D("input",{type:"text",onChange:function(e){return d(e.target.value)},value:m,className:F.a.neoInput,placeholder:"National id(optional)"})),D("div",null,D("button",{type:"submit",className:F.a.profileNeoSubmitButton},"Complete My Profile"))):null,D("a",{onClick:function(){localStorage.removeItem("appy-vote-user"),localStorage.removeItem("appy-vote-user-token"),S.push("/overview")},className:F.a.profileLogoutBtn},"LogOut"))},P=t("BPWH"),E=t.n(P),M=l.a.createElement,L=function(){var e=Object(y.useRouter)();return M("div",{className:E.a.logOutFormDiv},M("p",{className:w.a.voteFormHeader},"Thanks for voting. Check overview to check realtime status or check the battleground to keep yourself updated with the news."),M("button",{onClick:function(){localStorage.removeItem("appy-vote-user"),localStorage.removeItem("appy-vote-user-token"),e.push("/overview")},className:E.a.logoutBtn},"Log out"))},R=t("8lYe"),A=t("2PsZ"),H=t.n(A),T=t("vRNQ"),G=t.n(T),U=t("hAPS"),V=l.a.createElement;a.default=function(){var e=Object(u.useState)(!1),a=e[0],t=e[1],o=Object(u.useState)(!1),i=o[0],l=o[1],c=Object(u.useState)(!1),p=c[0],v=c[1],m=Object(u.useState)(!1),d=m[0],f=m[1];Object(u.useEffect)((function(){b()}),[]);var b=function(){var e=new URL(document.location).searchParams,a=e.get("id");if(console.log(a),a){console.log("Why am I here");var o=a,n=e.get("token");localStorage.setItem("appy-vote-user",o),localStorage.setItem("appy-vote-user-token",n),h(o)}else if(localStorage.getItem("appy-vote-user")){console.log("I am here too");var r=localStorage.getItem("appy-vote-user");console.log(r),h(r)}else console.log("OH what the heck"),t(!0)},h=function(){var e=Object(r.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("What the fuck is this?"),e.next=3,I.a.getUserDetails(a);case 3:t=e.sent,console.log(t),t.completed?t.voteStatus?f(!0):v(!0):l(!0);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return V("div",{className:G.a.App},V(U.a,null),V("div",{className:G.a.mainContent},V("div",{className:G.a.circle1}),V("div",{className:G.a.circle2}),V("div",{className:H.a.voteDiv},V("div",{className:H.a.voteDivInfo},V("img",{src:"/whiteLogo.png",height:75,width:75,alt:"Logo"}),V("h1",null,"Place your prediction",V("br",null),"if you haven't yet!"),V("div",{className:H.a.desktopDesc},V("p",null,"Check out BattleGround where you can be updated with latest and biggest news on the elections"),V("br",null),V("a",{href:"/battleground",className:H.a.voteDivInfoVoteBtn},"To BattleGround"))),V("div",{className:H.a.voteDivForms},V("div",{className:H.a.voteDivFormsContainer},a?V(g,null):null,i?V(j,null):null,p?V(N,null):null,d?V(L,null):null)),V("div",{className:H.a.mobileDesc},V("div",{className:H.a.voteDivInfo},V("p",null,"Check out BattleGround where you can be updated with the latest and biggest news on the elections"),V("br",null),V("a",{href:"/battleground",className:H.a.voteDivInfoVoteBtn},"To BattleGround")))),V("div",{className:"jsx-3587207939"},V(s.a,{id:"3587207939"},["body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}","label{font-size:15px;font-weight:500;}","#__next-prerender-indicator{display:none;}"])),V(R.a,{black:!0})))}}},[["Tp5K",0,1,8,5,4,6,7,2,3,9]]]);