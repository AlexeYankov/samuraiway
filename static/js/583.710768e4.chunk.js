"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[583],{6325:function(e,r,i){i.r(r),i.d(r,{default:function(){return ie}});var s="Login_container__lCF9u",o="Login_mainWrapper__q1E1k",n="Login_footer__QQT3r",a="Login_mappedText__6XaFT",t=i(7689),c=i(6146),l=i(6498),d=i(6009),m=i(1432),u=i(7592),_=i(3452),p=i(8147),g=i(1269),h=i(6306),x=[{id:0,tag:"Profile",icon:l.Z,style:c.Z.ProfilePic,rout:"/profile"},{id:1,tag:"Messages",icon:d.Z,style:c.Z.MessagesPic,rout:"/messages"},{id:2,tag:"Shorts",icon:m.Z,style:c.Z.ShortsPic,rout:"/shorts"},{id:3,tag:"Music",icon:u.Z,style:c.Z.MusicPic,rout:"/music"},{id:4,tag:"Video",icon:_.Z,style:c.Z.VideoPic,rout:"/video"},{id:5,tag:"Groups",icon:p.Z,style:c.Z.GroupsPic,rout:"/groups"},{id:6,tag:"Games",icon:g.Z,style:c.Z.GamesPic,rout:"/games"},{id:7,tag:"Settings",icon:h.Z,style:c.Z.SettingsPic,rout:"/settings"}],v="Features_wrapper__pc0vK",j="Features_container__1WThE",f="Features_icon__vCiKc",L="Features_description__jrzu-",b=i(184),N=function(){var e=x.slice(3,7),r=(0,t.s0)();return(0,b.jsx)("div",{className:v,children:e.map((function(e){var i=function(e){return r("".concat("/"+e))};return(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)("img",{className:f,src:e.icon,alt:e.tag,onClick:function(){return i(e.tag.toLocaleLowerCase())}}),(0,b.jsx)("span",{className:L,onClick:function(){return i(e.tag.toLocaleLowerCase())},children:e.tag})]},e.id)}))})},w={container:"MainComponent_container__v+5BN",LogoWrapper:"MainComponent_LogoWrapper__0NLbp",LogoContainer:"MainComponent_LogoContainer__ajZw2",LogoDescription:"MainComponent_LogoDescription__GGPhi",imgDescription:"MainComponent_imgDescription__3znB2",imgText:"MainComponent_imgText__6dOyk"},C=i(9518),Z=i.p+"static/media/Capture.728e5946aa013929b4f4.png",y=function(){return(0,b.jsxs)("div",{className:w.container,children:[(0,b.jsxs)("div",{className:w.LogoWrapper,children:[(0,b.jsx)("div",{className:w.LogoContainer,children:(0,b.jsx)(C.x,{})}),(0,b.jsx)("div",{className:w.LogoDescription,children:"in your mobile devices"})]}),(0,b.jsxs)("div",{className:w.imgDescription,children:[(0,b.jsxs)("div",{className:w.imgText,children:["Download official ",(0,b.jsx)("strong",{children:"mobile App"})," to be",(0,b.jsx)("br",{}),"with your friends everywhere"]}),(0,b.jsx)("img",{className:w.imgIcon,src:Z,alt:"mobile version of App"})]})]})},F="LoginForm_container__r+f0a",k="LoginForm_LogoContainer__IKHCU",M="LoginForm_login__cuBYP",P="LoginForm_loginContainer__E4T+y",S="LoginForm_inputContainer__CgGB7",T="LoginForm_loginLable__YAHZS",G="LoginForm_loginInput__RDKvS",D="LoginForm_loginError__UklKZ",H="LoginForm_loginCheckbox__9IFaw",W="LoginForm_inputWrapper__b7g--",B="LoginForm_loginInputType__YiLPd",E="LoginForm_inputError__6tCM9",V="LoginForm_buttonContainer__+0Wcx",A="LoginForm_loginButton__nwSWC",I="LoginForm_loginLableHidden__2G36L",K=i(5705),z=i(1413),R=i(9439),q=i(2791),Y=i(2935),Q=function(e){var r=e.value,i=e.type,s=e.formik,o=e.placeHolder,n=e.error,a=(0,q.useState)(i),t=(0,R.Z)(a,2),c=t[0],l=t[1],d=(0,q.useState)("black"),m=(0,R.Z)(d,2),u=m[0],_=m[1],p=n&&s.touched[r]?D:G,g=s.values[r]?I:T,h="checkbox"===i?H:g,x="checkbox"===i?B:p;return(0,b.jsxs)("div",{className:S,children:[(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("input",(0,z.Z)({className:x,type:c,id:r},s.getFieldProps(r))),(0,b.jsx)("label",{className:h,htmlFor:r,children:o}),"password"===r&&(0,b.jsx)(Y.Z,{propsPath:"M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z",fill:u,click:function(){"password"===c?(l("text"),_("gray")):(l("password"),_("black"))}})]}),s.errors[r]&&s.touched[r]&&(0,b.jsx)("div",{className:E,children:s.errors[r]})]})},U=i(6452),O=i(1510),X=i(9422),J=function(e){var r={};return e.email?e.email.length>=70&&(r.email="Must be 70 characters or less"):r.email="Required",e.password?e.password.length<4&&(r.password="Must be 5 characters or more"):r.password="Required",r},$=function(e){var r=e.page,i=(0,O.TL)(),s=(0,K.TA)({initialValues:{email:"",password:"",rememberMe:!1},validate:J,onSubmit:function(e){i((0,X.gd)(e,r))}});return(0,b.jsx)("div",{className:F,children:(0,b.jsx)("form",{onSubmit:s.handleSubmit,children:(0,b.jsxs)("div",{className:P,children:[(0,b.jsx)(Q,{value:"email",type:"text",formik:s,placeHolder:"Email or phone number",error:s.errors.email||""}),(0,b.jsx)(Q,{value:"password",type:"password",formik:s,placeHolder:"Password",error:s.errors.password||""}),(0,b.jsx)(Q,{value:"rememberMe",type:"checkbox",formik:s,placeHolder:"Remember me",error:s.errors.rememberMe||""}),(0,b.jsxs)("div",{className:V,children:[(0,b.jsx)(U.Z,{className:A,type:"submit",children:"sign in"}),(0,b.jsx)("strong",{children:"or"}),(0,b.jsx)(U.Z,{className:A,children:"create new account"}),(0,b.jsx)(U.Z,{className:A,children:"forgot password"})]})]})})})},ee=function(e){var r=e.page;return(0,b.jsxs)("div",{className:F,children:[(0,b.jsx)("div",{className:k,children:(0,b.jsx)(C.x,{})}),(0,b.jsx)("span",{className:M,children:"Login"}),(0,b.jsx)($,{page:r})]})},re=function(){var e=["buddy","2022","All rights reserved"].map((function(e,r){return(0,b.jsx)("span",{className:a,children:e},r+Math.random())}));return(0,b.jsx)("div",{className:n,children:e})},ie=function(e){var r=e.auth,i=e.page;return r?(0,b.jsx)(t.Fg,{to:"/profile",replace:!0}):(0,b.jsxs)("div",{className:s,children:[(0,b.jsxs)("div",{className:o,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(y,{}),(0,b.jsx)(N,{})]}),(0,b.jsx)("div",{children:(0,b.jsx)(ee,{page:i})})]}),(0,b.jsx)(re,{})]})}},2935:function(e,r,i){i.d(r,{Z:function(){return n}});var s="SomeSVG_container__vrCgH",o=i(184),n=function(e){var r=e.propsPath,i=e.fill,n=e.click,a=e.width,t=void 0===a?20:a,c=i||"gray";return(0,o.jsx)("svg",{className:s,fill:c,width:t,viewBox:"0 0 512 512",onClick:n,children:(0,o.jsx)("path",{d:r})})}}}]);
//# sourceMappingURL=583.710768e4.chunk.js.map