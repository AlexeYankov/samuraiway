"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[100],{4100:function(e,r,n){n.r(r),n.d(r,{default:function(){return O}});var t,a=n(9439),s=n(3250),c="Settings_wrapper__krLTu",i="Settings_container__wB8pP",l="Settings_birthdayWrapper__ChEDx",o="Settings_InputContainer__-P6lp",u="Settings_DayWidth__GchUp",d="Settings_YearWidth__r1cPU",p="Settings_CityWidth__S7JYu",_="Settings_bithdayInputSpan__+RrEm",m="Input_container__RTqPA",h="Input_superInput__1O2jj",v="Input_errorInput__5rJ70",f="Input_error__RmiYZ",x="Input_placeHolder__VXeNw",j="Input_placeHolderOnTop__M1yvl",g="Input_containerWithData__+9V8e",y=n(1413),N=n(4925),S=n(2791),C=new Uint8Array(16);function E(){if(!t&&!(t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(C)}var w=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var b=function(e){return"string"===typeof e&&w.test(e)},k=[],I=0;I<256;++I)k.push((I+256).toString(16).substr(1));var Z=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(k[e[r+0]]+k[e[r+1]]+k[e[r+2]]+k[e[r+3]]+"-"+k[e[r+4]]+k[e[r+5]]+"-"+k[e[r+6]]+k[e[r+7]]+"-"+k[e[r+8]]+k[e[r+9]]+"-"+k[e[r+10]]+k[e[r+11]]+k[e[r+12]]+k[e[r+13]]+k[e[r+14]]+k[e[r+15]]).toLowerCase();if(!b(n))throw TypeError("Stringified UUID is invalid");return n};var H=function(e,r,n){var t=(e=e||{}).random||(e.rng||E)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,r){n=n||0;for(var a=0;a<16;++a)r[n+a]=t[a];return r}return Z(t)},R=n(184),T=["type","onChangeText","onEnter","error","className","spanClassName","errorMessage","value","placeHolder","setError"],P=function(e){var r=e.type,n=e.onChangeText,t=e.onEnter,s=e.error,c=e.className,i=(e.spanClassName,e.errorMessage,e.value,e.placeHolder),l=e.setError,o=(0,N.Z)(e,T),u=(0,S.useState)(""),d=(0,a.Z)(u,2),p=d[0],_=d[1],f=p?j:x,C="".concat(c," ").concat(s?v:h);return(0,R.jsxs)("div",{className:p?g:m,children:[(0,R.jsx)("input",(0,y.Z)({type:r,onChange:function(e){n&&n(e.currentTarget.value),_(e.currentTarget.value),function(e,r,n){var t=new RegExp(/[\\@#$/:?{~!"^_`\[\]]/),a=+e;"Day"===r&&n(a>31),"Year"===r&&n(a>2013||a>1&&a<1900),"City"===r&&(e.split("").length>100||t.test(e)||!0!==!e&&e.split("").length<3?n(!0):n(!1))}(e.currentTarget.value,i,l)},onKeyPress:function(e){t&&"Enter"===e.key&&t()},className:C,value:p,id:H()},o)),(0,R.jsx)("span",{className:f,children:i})]})},J="Select_container1__hCdxG",V="Select_wrapper__RP9JB",W="Select_select__0jKWi",D="Select_fieldName__YRnAG",L="Select_fieldNameStartPosition__40WIs",Y="Select_selectContainer__63Ynx",A="Select_active__LJfJa",M="Select_option__vXEJu",U="Select_optionActive__+aMc-",q=n(2935),B=["\u044f\u043d\u0432\u0430\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b\u044c","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c"],G="Month",K=function(){var e=(0,S.useState)(""),r=(0,a.Z)(e,2),n=r[0],t=r[1],s=(0,S.useState)(!1),c=(0,a.Z)(s,2),i=c[0],l=c[1],o=function e(r){var n;i||(console.log(2),null===(n=document.querySelector("main"))||void 0===n||n.removeEventListener("click",e),l(!0))},u=n?(0,R.jsx)(q.Z,{fill:"black",propsPath:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z",width:14}):"",d="select"+H(),p=B.map((function(e){var r=function(e){var r;console.log(e),t(e),l(!1),null===(r=document.querySelector("main"))||void 0===r||r.removeEventListener("click",o)};return e!==n?(0,R.jsx)("div",{className:M,onClick:function(){return r(e)},children:(0,R.jsx)("span",{children:e})},H()):(0,R.jsx)("div",{className:U,onClick:function(){return r(e)},children:(0,R.jsx)("span",{children:e})},H())})),_=n?"":(0,R.jsx)("span",{className:i?D:L,children:G});return(0,R.jsxs)("div",{className:J,id:d,children:[(0,R.jsx)("div",{className:i?V+" "+A:V,id:d,onClick:function(e){return function(e){var r;e.currentTarget.id===d&&(console.log(1),null===(r=document.querySelector("main"))||void 0===r||r.addEventListener("click",o)),l(!i)}(e)},children:(0,R.jsxs)("div",{className:W,children:[n,u,n&&(0,R.jsx)("span",{className:D,children:G}),_]})}),i&&(0,R.jsx)("div",{className:Y,children:p})]})},O=function(){var e=(0,S.useState)(!1),r=(0,a.Z)(e,2),n=r[0],t=r[1],m=(0,S.useState)(!1),h=(0,a.Z)(m,2),v=h[0],x=h[1],j=(0,S.useState)(!1),g=(0,a.Z)(j,2),y=g[0],N=g[1],C=(0,S.useState)(!1),E=(0,a.Z)(C,2);E[0],E[1];console.log(y);var w=v||n;return(0,R.jsx)("section",{className:s.Z.profileAppWrapper,children:(0,R.jsxs)("div",{className:c,children:[(0,R.jsx)("h2",{children:"About"}),(0,R.jsxs)("div",{className:i,children:[(0,R.jsx)("span",{children:"Date of Birth"}),(0,R.jsxs)("div",{className:l,children:[(0,R.jsx)(P,{className:o+" "+u,setError:t,type:"number",placeHolder:"Day",error:w}),(0,R.jsx)(K,{}),(0,R.jsx)(P,{className:o+" "+d,setError:x,type:"number",placeHolder:"Year",error:w}),w&&(0,R.jsx)("span",{className:"".concat(_," ").concat(f),children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f."})]})]}),(0,R.jsxs)("div",{className:i,children:[(0,R.jsx)("span",{children:"City"}),(0,R.jsxs)("div",{className:l,children:[(0,R.jsx)(P,{className:o+" "+p,setError:N,type:"text",placeHolder:"City",error:y}),y&&(0,R.jsx)("span",{className:"".concat(_," ").concat(f),children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u043d\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u0431\u043e\u043b\u0435\u0435 3, \u0431\u0435\u0437 \u0441\u043f\u0435\u0446 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."})]})]}),(0,R.jsxs)("div",{className:i,children:[(0,R.jsx)("span",{children:"Job"}),(0,R.jsxs)("div",{className:l,children:[(0,R.jsx)(P,{className:o+" "+p,setError:N,type:"text",placeHolder:"Job place",error:y}),y&&(0,R.jsx)("span",{className:"".concat(_," ").concat(f),children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u043d\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u0431\u043e\u043b\u0435\u0435 3, \u0431\u0435\u0437 \u0441\u043f\u0435\u0446 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."})]})]}),(0,R.jsxs)("div",{className:i,children:[(0,R.jsx)("span",{children:"Home page"}),(0,R.jsxs)("div",{className:l,children:[(0,R.jsx)(P,{className:o+" "+p,setError:N,type:"text",placeHolder:"home page",error:y}),y&&(0,R.jsx)("span",{className:"".concat(_," ").concat(f),children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u043d\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u0431\u043e\u043b\u0435\u0435 3, \u0431\u0435\u0437 \u0441\u043f\u0435\u0446 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."})]})]})]})})}},2935:function(e,r,n){n.d(r,{Z:function(){return s}});var t="SomeSVG_container__vrCgH",a=n(184),s=function(e){var r=e.propsPath,n=e.fill,s=e.click,c=e.width,i=void 0===c?20:c,l=n||"gray";return(0,a.jsx)("svg",{className:t,fill:l,width:i,viewBox:"0 0 512 512",onClick:s,children:(0,a.jsx)("path",{d:r})})}}}]);
//# sourceMappingURL=100.29d11509.chunk.js.map