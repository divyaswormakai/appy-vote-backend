_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var s=p[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"8lYe":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("ma3e"),i=n("vRNQ"),c=n.n(i),u=o.a.createElement;t.a=function(e){var t=e.black;return u("div",{className:t?c.a.FooterContentBlack:c.a.FooterContent},u(a.b,null)," 2020 AppyVote All Rights Reserved.")}},AeAA:function(e,t,n){e.exports={homeDiv:"home_homeDiv__2sqsw",homeDivInfo:"home_homeDivInfo__3DpJS",homeDivSvg:"home_homeDivSvg__EwQdy",VoteBtnContainer:"home_VoteBtnContainer__12mnV",homeDivInfoVoteBtn:"home_homeDivInfoVoteBtn__2Yphh",countDiv:"home_countDiv__2_nbM",countDivCol:"home_countDivCol__3Zb03",storeDiv:"home_storeDiv__12Ge2",StoreButton:"home_StoreButton__2UoS5",StoreButtonText:"home_StoreButtonText__10VFp",StoreButtonText1:"home_StoreButtonText1__3xbty",StoreButtonText2:"home_StoreButtonText2__3AK-w",comingSoon:"home_comingSoon__Dqnd6",learnMoreText:"home_learnMoreText__3ELdq",shareIcons:"home_shareIcons__2GkuN"}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("MX0m"),c=n.n(i),u=n("q1tI"),s=n.n(u),l=n("nOHt"),f=n("8Kt/"),p=n.n(f),d=n("vRNQ"),h=n.n(d),v=n("AeAA"),w=n.n(v),m=n("hAPS"),y=n("w/a3"),b=n("8lYe"),g=n("tjd4"),_=n("v7au"),x=n("Lnxd"),O=n("33Fu"),S=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),k=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return S(t,e),t}(Error);function C(e,t){if(!e)throw new k(t)}function j(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var N=n("TSYQ"),P=n.n(N),D=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},A=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},T=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},B=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},H=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function R(e,t,n){var r=t.height,o=t.width,a=M(t,["height","width"]),i=I({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var u=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(u),n(c))}catch(e){console.error(e)}}),1e3);return c}var q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,a=void 0===o?400:o,i=n.windowPosition,c=void 0===i?"windowCenter":i,u=n.windowWidth,s=void 0===u?550:u;R(e,I({height:a,width:s},"windowCenter"===c?B(s,a):H(s,a)),r)},t.handleClick=function(e){return A(t,void 0,void 0,(function(){var t,n,r,o,a,i,c,u,s,l;return E(this,(function(f){switch(f.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,u=t.opts,s=o(i,u),r?[2]:(e.preventDefault(),n?(l=n(),T(l)?[4,l]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return D(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,o=e.disabledStyle,a=e.forwardedRef,i=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),u=e.style,l=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,M(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=P()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=I(I(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&o);return s.a.createElement("button",I({},l,{"aria-label":l["aria-label"]||i,className:f,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(u.Component),W=function(){return(W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var V=function(e,t,n,r){function o(o,a){var i=n(o),c=W({},o);return Object.keys(i).forEach((function(e){delete c[e]})),s.a.createElement(q,W({},r,c,{forwardedRef:a,networkName:e,networkLink:t,opts:n(o)}))}return o.displayName="ShareButton-"+e,Object(u.forwardRef)(o)};var L=V("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return C(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+j({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),z=function(){return(z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function F(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,o=t.iconFillColor,a=t.round,i=t.size,c=Y(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return s.a.createElement("svg",z({viewBox:"0 0 64 64",width:i,height:i},c),a?s.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):s.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),s.a.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var G=F({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var U=V("reddit",(function(e,t){var n=t.title;return C(e,"reddit.url"),"https://www.reddit.com/submit"+j({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"});var X=V("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return C(e,"twitter.url"),C(Array.isArray(a),"twitter.hashtags is not an array"),C(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+j({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),Q=F({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"}),K=s.a.createElement;function J(){var e=Object(u.useState)(0),t=e[0],n=e[1],r=Object(u.useState)(0),i=r[0],s=r[1],f=Object(l.useRouter)();Object(u.useEffect)((function(){d(),v(),S()}),[]);var d=function(){var e=window.location.pathname,t=new URL(document.location).searchParams;console.log(t.get("id")),"/"!==e&&(console.log(e),e.includes("/vote")&&(console.log("In vote"),t.get("id")&&t.get("token")?(console.log("We have the parameters"),localStorage.setItem("appy-vote-user",t.get("id")),localStorage.setItem("appy-vote-user-token",t.get("token")),f.push("/vote")):f.push("/vote")),f.push(e))},v=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.getCounts();case 3:t=e.sent,console.log(t),n(t.userCount),s(t.voteCount),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-BTWM0DY4TH")};return K("div",{className:h.a.container},K(p.a,null,K("title",null,"AppyVote"),K("link",{rel:"icon",href:"/favicon.ico"}),K("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-BTWM0DY4TH"})),K("div",{className:h.a.App},K(m.a,null),K("div",{className:h.a.mainContent},K("div",{className:h.a.circle1}),K("div",{className:h.a.circle2}),K("div",{className:w.a.homeDiv},K("div",{className:w.a.homeDivInfo},K("a",{href:"/",className:w.a.goHome},K("img",{src:"/whiteLogo.png",height:75,width:75,alt:"Logo"})),K("div",{className:w.a.shareIcons},"Share:\xa0\xa0",K(L,{url:"https://appyvote.com",quote:"Introducing APPYVOTE, an app to give your voice a vote, even if it won\u2019t affect an election's result, it will certainly (maybe) be a nifty gauge.",hashtag:"#election"},K(G,{size:30,round:!0})),"\xa0",K(U,{url:"https://appyvote.com",title:"Introducing APPYVOTE, an app to give your voice a vote, even if it won\u2019t affect an election's result, it will certainly (maybe) be a nifty gauge."},K(x.b.Provider,{value:{size:30,className:h.a.icon,color:"#ff4500"}},K(O.b,null))),"\xa0",K(X,{url:"https://appyvote.com",title:"Introducing APPYVOTE, an app to give your voice a vote, even if it won\u2019t affect an election's result, it will certainly (maybe) be a nifty gauge.",hashtag:"#election"},K(Q,{size:30,round:!0}))),K("h1",null,"Welcome to AppyVote..."),K("p",null,"All-in-one platform where you can enter your predictions as to who will win an election, and be updated with latest and biggest news on the elections.",K("a",{href:"/about",className:w.a.learnMoreText},"\xa0Learn more")),K("br",null),K("div",{className:w.a.VoteBtnContainer},K("a",{href:"/vote",className:w.a.homeDivInfoVoteBtn},K(x.b.Provider,{value:{className:h.a.sidebarToggleIcon,size:24}},K(g.b,null)),"   ","Vote Now")),K("div",{className:w.a.countDiv},K("div",{className:w.a.countDivCol},K("p",null,"Total Users:"),K("h1",null,t)),K("div",{className:w.a.countDivCol},K("p",null,"Total Votes:"),K("h1",null,i))),K("div",{className:w.a.storeDiv},K("a",{href:"#"},K("div",{className:w.a.StoreButton},K("img",{src:"./playStoreIcon.png",height:"25",width:"25"}),K("div",{className:w.a.StoreButtonText},K("div",{className:w.a.StoreButtonText1},"GET IT ON"),K("div",{className:w.a.StoreButtonText2},"Google Play"))),K("div",{className:w.a.comingSoon},"Coming soon...")),K("a",{href:"#"},K("div",{className:w.a.StoreButton},K(x.b.Provider,{value:{className:h.a.sidebarToggleIcon,size:30}},K(_.a,null))," ",K("div",{className:w.a.StoreButtonText},K("div",{className:w.a.StoreButtonText1},"GET IT ON"),K("div",{className:w.a.StoreButtonText2},"App Store"))),K("div",{className:w.a.comingSoon},"Coming soon...")))),K("div",{className:w.a.homeDivSvg},K("img",{src:"/home.png",alt:"Homelogo"})))),K(b.a,null)),K("div",{className:"jsx-2919720203"},K(c.a,{id:"2919720203"},["body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}","label{font-size:15px;font-weight:500;}","#__next-prerender-indicator{display:none;}"])))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},"w/a3":function(e,t,n){"use strict";var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("vDqi"),c=n.n(i);c.a.defaults.baseURL="https://appyvote.com";var u=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/api/users/profile/".concat(t));case 3:if(!(n=e.sent)){e.next=8;break}return e.abrupt("return",n.data);case 8:throw new Error("No user found");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/api/users/completeProfile",t);case 3:if(!(n=e.sent)){e.next=8;break}return e.abrupt("return",n.data);case 8:throw new Error("Update user failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/api/totalCounts");case 3:if(!(t=e.sent)){e.next=8;break}return e.abrupt("return",t.data);case 8:throw new Error("Update user failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/api/ageData");case 3:if(!(t=e.sent)){e.next=8;break}return e.abrupt("return",t.data);case 8:throw new Error("Getting data failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/api/bubbleChart");case 3:if(!(t=e.sent)){e.next=8;break}return e.abrupt("return",t.data);case 8:throw new Error("Getting data failed");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/api/sendMail",t);case 3:if(!(n=e.sent).data.success){e.next=8;break}return e.abrupt("return",n.data);case 8:throw new Error("Cannot send mail");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();t.a={getUserDetails:u,completeProfile:s,getCounts:l,getAgeData:f,getBubbleData:p,sendMail:d}}},[["vlRD",0,1,8,5,4,6,7,12,14,2,3,9]]]);