_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"3r9c":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},"M+ze":function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),a=n.n(r),o=n("q1tI"),i=n.n(o),u=n("Tqrk"),c=n.n(u),s=n("vRNQ"),l=n.n(s),m=n("o0o1"),f=n.n(m),d=n("HaE+"),p=n("vDqi"),b=n.n(p);b.a.defaults.baseURL="https://appyvote.com";var g=[{title:"ABC News Live",url:"https://www.youtube.com/embed/w_Ma8oQLmSM"},{title:"How the US election works",url:"https://www.youtube.com/embed/LY8L6C7tsx8"},{title:"US election 2020: Vice presidential debate between Mike Pence and Kamala Harris",url:"https://www.youtube.com/embed/6Gk8zA2AXc4"}],v={getForumData:function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("ASDFAAASS"),e.next=4,b.a.get("/api/forum");case 4:return t=e.sent,e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),getYoutubeData:function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",g);case 4:return e.prev=4,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0.message});case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}(),getNewsData:function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/news");case 3:return t=e.sent,console.log("ASDFAAASS"),console.log(t.data),e.abrupt("return",t.data);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},h=i.a.createElement,w=function(){var e=Object(o.useState)([]),t=e[0],n=e[1];Object(o.useEffect)((function(){r()}),[]);var r=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getForumData();case 3:t=e.sent,n(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return h(i.a.Fragment,null,h("h1",null,"Forum"),h("div",{className:c.a.bgForumContent},t.length>0?t.map((function(e,t){return h("div",{key:"Forum-item-".concat(t),className:c.a.itemLinkContent},h("a",{href:e.url,className:c.a.itemLink},h("p",{className:c.a.itemLinkHeader},h("b",null,e.author)," ",h("p",{className:c.a.itemLinkTime},e.date,",",e.time)),h("p",{className:c.a.itemLinkDesc},e.text),h("p",{className:c.a.itemLinkReadMore},"Read more...")))})):null))},_=n("g6dt"),k=n.n(_);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=!("undefined"===typeof window||!window.document||!window.document.createElement);function C(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function x(e){var t=Object(o.useRef)();return function(e,t){if(C(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!C(e[n[a]],t[n[a]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function L(e){return"object"===typeof e?y({},e):e}function T(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}N&&k()("https://platform.twitter.com/widgets.js","twttr");function j(e,t,n,r){var a=Object(o.useState)(null),i=a[0],u=a[1],c=Object(o.useRef)(null);if(!N)return{ref:c,error:i};var s=[e,x(t),x(n)];return Object(o.useEffect)((function(){u(null);var a,o,i=!1;if(c.current){var s=function(){var a,o=(a=f.a.mark((function a(){var o,s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c&&c.current){a.next=2;break}return a.abrupt("return");case 2:return(o=document.createElement("div")).setAttribute("twdiv","yes"),c.current.appendChild(o),a.prev=5,a.next=8,new Promise((function(e,t){var n=function(){return t(new Error("Could not load remote twitter widgets js"))};k.a.ready("twttr",{success:function(){var t=window.twttr;t&&t.widgets||n(),e(t.widgets)},error:n})}));case 8:return s=a.sent,a.next=11,s[e](L(t),o,L(n));case 11:if(a.sent||i){a.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:a.next=21;break;case 16:return a.prev=16,a.t0=a.catch(5),console.error(a.t0),u(a.t0),a.abrupt("return");case 21:if(c&&c.current){a.next=23;break}return a.abrupt("return");case 23:if(!i){a.next=26;break}return o&&o.remove(),a.abrupt("return");case 26:r&&r();case 27:case"end":return a.stop()}}),a,null,[[5,16]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function i(e){T(o,n,r,i,u,"next",e)}function u(e){T(o,n,r,i,u,"throw",e)}i(void 0)}))});return function(){return o.apply(this,arguments)}}();a=c.current,o="twdiv",a&&a.querySelectorAll("*").forEach((function(e){e.hasAttribute(o)&&e.remove()})),s()}return function(){i=!0}}),s),{ref:c,error:i}}var E=function(e){var t=e.dataSource,n=e.options,r=e.onLoad,a=e.renderError,o=j("createTimeline",t,n,r),u=o.ref,c=o.error;return i.a.createElement("div",{ref:u},c&&a&&a(c))},O=n("+jxT"),F=i.a.createElement,S=["bpolitics","ftukpolitics","GdnPolitics","MrMichaelSpicer","BBCPolitics","TelePolitics","foxnewspolitics","CNNPolitics"],A=function(){return F(i.a.Fragment,null,F("h1",null,"Twitter\xa0 ",F(O.e,{size:30})),F(E,{dataSource:{sourceType:"profile",screenName:S[Math.floor(Math.random()*S.length)]},options:{tweetLimit:10}}))},D=i.a.createElement,P=function(){var e=Object(o.useState)([]),t=e[0],n=e[1];Object(o.useEffect)((function(){r()}),[]);var r=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getNewsData();case 3:t=e.sent,n(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return D(i.a.Fragment,null,D("h1",null,"Headlines"),D("div",{className:c.a.bgNewsContent},t.length>0?t.map((function(e,t){return D("div",{key:"Headlines-".concat(t),className:c.a.itemLinkContent},D("a",{href:e.url,className:c.a.itemLink},D("p",{className:c.a.itemLinkHeader},D("b",null,e.title),D("p",{className:c.a.itemLinkTime},e.date,", ",e.time)),e.imgUrl?D("img",{src:e.imgUrl,alt:"Image",width:"100%",height:"100%",className:c.a.itemLinkContentImg}):null))})):null))},M=i.a.createElement,H=function(){var e=Object(o.useState)([]),t=e[0],n=e[1];Object(o.useEffect)((function(){r()}),[]);var r=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getYoutubeData();case 3:t=e.sent,n(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return M(i.a.Fragment,null,M("h1",null,M(O.f,{size:40,color:"#ff0000"}),"\xa0Youtube"),M("div",{className:c.a.bgForumContent},t.length>0?t.map((function(e,t){return M("div",{key:"Youtube-".concat(t),className:c.a.itemLinkYoutube},M("p",{className:c.a.itemLinkHeader},M("b",null,e.title)),M("iframe",{width:"100%",height:"100%",src:e.url,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))})):null))},Y=n("hAPS"),I=n("gFX4"),R=n.n(I),z=i.a.createElement,X=function(){var e=Object(o.useState)([]),t=e[0],n=e[1],r=null;return Object(o.useEffect)((function(){return(r=R()("https://appyvote.com")).on("getComments",(function(e){n(e)})),function(){r.disconnect()}}),[]),z(i.a.Fragment,null,z("h1",null,"Comments"),z("div",{className:c.a.bgForumContent},t.length>0?t.map((function(e,t){return z("div",{key:"Comment-item-".concat(t),className:c.a.itemLinkContent},z("a",{href:e.url,className:c.a.itemLink},z("p",{className:c.a.itemLinkHeader},z("b",null,e.user)," "),z("p",{className:c.a.comment},e.comment)))})):z("div",{className:c.a.loaderContainer},z("span",{className:c.a.loader}),z("p",{class:c.a.loadingText},"Loading AppyVote comments"))))},q=i.a.createElement,U=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(o.useEffect)((function(){setTimeout((function(){n(!0)}),5e3)}),[]),q(i.a.Fragment,null,t?null:q("div",{className:c.a.loaderContainer},q("span",{className:c.a.loader}),q("p",{className:c.a.loadingText},"Loading AppyVote chatroom")),q("iframe",{src:"https://deadsimplechat.com/_2rfLdMTn",width:"100%",height:"100%"}))},J=i.a.createElement;t.default=function(){return J("div",{className:l.a.App},J(Y.a,null),J("div",{className:l.a.mainContent},J("div",{className:l.a.circle1}),J("div",{className:l.a.circle2}),J("div",{className:c.a.header},J("h1",null,"AppyVote")),J("div",{className:c.a.bgContent},J("div",{className:c.a.bgTlk},J(U,null)),J("div",{className:c.a.bgTwitter},J(A,null)),J("div",{className:c.a.bgYoutube},J(H,null)),J("div",{className:c.a.bgNews},J(P,null)),J("div",{className:c.a.bgForum},J(w,null)),J("div",{className:c.a.bgComment},J(X,null)))),J("div",{className:"jsx-2919720203"},J(a.a,{id:"2919720203"},["body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}","label{font-size:15px;font-weight:500;}","#__next-prerender-indicator{display:none;}"])))}},Tqrk:function(e,t,n){e.exports={bgContent:"battleground_bgContent__1noTi",bgContentChild:"battleground_bgContentChild__1EWOp",bgTwitter:"battleground_bgTwitter__2_0AX",bgYoutube:"battleground_bgYoutube__1hW-M",bgNews:"battleground_bgNews__tIFJT",bgForum:"battleground_bgForum__2bYGx",bgComment:"battleground_bgComment__1evu6",bgTlk:"battleground_bgTlk__1ZkzY",bgNewsContent:"battleground_bgNewsContent__1JEa6",bgForumContent:"battleground_bgForumContent__3KWRd",itemLink:"battleground_itemLink__2wzPA",itemLinkHeader:"battleground_itemLinkHeader__2JAx6",itemLinkContent:"battleground_itemLinkContent__M6FmT",itemLinkTime:"battleground_itemLinkTime__2ZaTX",itemLinkContentImg:"battleground_itemLinkContentImg__h6SeC",itemLinkDesc:"battleground_itemLinkDesc__hCVPg",itemLinkReadMore:"battleground_itemLinkReadMore__2XrD2",itemLinkYoutube:"battleground_itemLinkYoutube__3Bhpb",header:"battleground_header__1d-rI",tlkContent:"battleground_tlkContent__3IT_L",loaderContainer:"battleground_loaderContainer___S2GI",loader:"battleground_loader__2HCsT",rotation:"battleground_rotation__2Kpt6",loadingText:"battleground_loadingText__19Dm2"}},fD2q:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/battleground",function(){return n("M+ze")}])},g6dt:function(e,t,n){var r,a,o;a=[],void 0===(o="function"===typeof(r=function(){var e=function(){},t={},n={},r={};function a(e,t){e=e.push?e:[e];var a,o,i,u=[],c=e.length,s=c;for(a=function(e,n){n.length&&u.push(e),--s||t(u)};c--;)o=e[c],(i=n[o])?a(o,i):(r[o]=r[o]||[]).push(a)}function o(e,t){if(e){var a=r[e];if(n[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function i(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function u(t,n,r,a){var o,i,c=document,s=r.async,l=(r.numRetries||0)+1,m=r.before||e,f=t.replace(/[\?|#].*$/,""),d=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(f)?((i=c.createElement("link")).rel="stylesheet",i.href=d,(o="hideFocus"in i)&&i.relList&&(o=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f)?(i=c.createElement("img")).src=d:((i=c.createElement("script")).src=t,i.async=void 0===s||s),i.onload=i.onerror=i.onbeforeload=function(e){var c=e.type[0];if(o)try{i.sheet.cssText.length||(c="e")}catch(s){18!=s.code&&(c="e")}if("e"==c){if((a+=1)<l)return u(t,n,r,a)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";n(t,c,e.defaultPrevented)},!1!==m(t,i)&&c.head.appendChild(i)}function c(e,t,n){var r,a,o=(e=e.push?e:[e]).length,i=o,c=[];for(r=function(e,n,r){if("e"==n&&c.push(e),"b"==n){if(!r)return;c.push(e)}--o||t(c)},a=0;a<i;a++)u(e[a],r,n)}function s(e,n,r){var a,u;if(n&&n.trim&&(a=n),u=(a?r:n)||{},a){if(a in t)throw"LoadJS";t[a]=!0}function s(t,n){c(e,(function(e){i(u,e),t&&i({success:t,error:n},e),o(a,e)}),u)}if(u.returnPromise)return new Promise(s);s()}return s.ready=function(e,t){return a(e,(function(e){i(t,e)})),s},s.done=function(e){o(e,[])},s.reset=function(){t={},n={},r={}},s.isDefined=function(e){return e in t},s})?r.apply(t,a):r)||(e.exports=o)}},[["fD2q",0,1,8,5,4,6,7,2,3,9,13]]]);