"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[7],{4089:function(e,s,t){t.r(s),t.d(s,{default:function(){return be}});var n,o=t(9439),i=t(2791),r={profileWrapper:"Profilestyles_profileWrapper__W104h",profileWrapperBlack:"Profilestyles_profileWrapperBlack__OzJpB",profileAvatar:"Profilestyles_profileAvatar__X54Z+",profileInfo:"Profilestyles_profileInfo__4o6Iu",profileSubscribers__container:"Profilestyles_profileSubscribers__container__yyfAG",profileSubscribers__container__Black:"Profilestyles_profileSubscribers__container__Black__M23Ja",profileTexting__container:"Profilestyles_profileTexting__container__UUF3i",profileTexting__buttonImg:"Profilestyles_profileTexting__buttonImg__xnd8i",profileTexting__button_Invite:"Profilestyles_profileTexting__button_Invite__pWOT0",profileTexting:"Profilestyles_profileTexting__OHoDk",profileTexting__blackList:"Profilestyles_profileTexting__blackList__9xKxY",profileTexting__button:"Profilestyles_profileTexting__button__8iiRY",profileTexting__buttonContainer:"Profilestyles_profileTexting__buttonContainer__AS8QK",profileSubscribers__count:"Profilestyles_profileSubscribers__count__rN41e",profileSubscribers__buttons:"Profilestyles_profileSubscribers__buttons__B-x90",profileSubscribers__listContainer:"Profilestyles_profileSubscribers__listContainer__8Hn9g",profileSubscribers__showingList_top:"Profilestyles_profileSubscribers__showingList_top__TDQrC",profileSubscribers__AvaMin:"Profilestyles_profileSubscribers__AvaMin__310Y7",profileAdversting:"Profilestyles_profileAdversting__+aj45",profileTexting__subscribe:"Profilestyles_profileTexting__subscribe__Y-1++",profileInfo__posts:"Profilestyles_profileInfo__posts__KBxOh",profileInfo__CRUDarea:"Profilestyles_profileInfo__CRUDarea__gB7V-",profileInfo__CRUDarea__black:"Profilestyles_profileInfo__CRUDarea__black__Zkebv",profileInfo__CRUDarea__buttons:"Profilestyles_profileInfo__CRUDarea__buttons__5cIib",profileInfo__CRUDarea__send:"Profilestyles_profileInfo__CRUDarea__send__KIU-V",profileInfo__CRUDarea__close:"Profilestyles_profileInfo__CRUDarea__close__Q7H7t",profileInfo__CRUDarea__content:"Profilestyles_profileInfo__CRUDarea__content__khju6"},_=t(3250),a=t.p+"static/media/Tony_Soprano_Portrait.c030f9f79b6f48836487.jpg",l=t(184),c=function(e){var s=e.photo;return(0,l.jsx)("img",{className:r.profileAvatar,src:s})},p=function(e){var s,t=e.data;return(0,l.jsx)("article",{className:r.profileAvatar,children:(0,l.jsx)(c,{photo:void 0===t.photos?a:(s=t.photos.large,null!==s?t.photos.large:a)})})},f=t(6452),u=t(8255),d=t(1087),h=function(e){var s=e.theme,t=e.subscribers,n=e.subscribersTotal;console.log(n,t);var o=n>=6?6:n,i=t.slice(0,o).map((function(e){var s=e.photos.large?e.photos.large:u,t=e.name.split("").length>6?e.name.split("").slice(0,4).join("")+"...":e.name;return(0,l.jsxs)(d.OL,{className:r.profileSubscribers__listContainer,to:"",children:[(0,l.jsx)("img",{className:r.profileSubscribers__AvaMin,src:s,alt:"Photo1"}),(0,l.jsx)("span",{children:t})]},e.id)}));return(0,l.jsxs)("div",{className:"White"===s?r.profileSubscribers__container:r.profileSubscribers__container__Black,children:[(0,l.jsxs)("div",{className:r.profileSubscribers__buttons,children:[(0,l.jsx)(d.OL,{className:r.profileSubscribers__count,to:"/subscribers",children:"Subscribers"}),(0,l.jsx)(d.OL,{className:r.profileSubscribers__count,to:"/subscribers",children:n})]}),(0,l.jsx)("div",{className:r.profileSubscribers__showingList_top,children:i})]})},m=t.p+"static/media/Nestle.ba1772e32cd666f0127b.png",x=["title","titleId"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},C.apply(this,arguments)}function j(e,s){if(null==e)return{};var t,n,o=function(e,s){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||(o[t]=e[t]);return o}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e,s){var t=e.title,o=e.titleId,r=j(e,x);return i.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:s,"aria-labelledby":o},r),t?i.createElement("title",{id:o},t):null,n||(n=i.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})))}var v,g=i.forwardRef(b),y=(t.p,function(e){var s=e.isProfile,t=e.theme,n=e.subs,o=e.users;return(0,l.jsx)("article",{className:r.profileTexting,children:(0,l.jsxs)("div",{className:r.profileTexting__container,children:[s&&(0,l.jsxs)("div",{className:r.profileTexting__buttonContainer,children:[(0,l.jsxs)(f.Z,{className:r.profileTexting__button,children:[(0,l.jsx)(g,{className:r.profileTexting__buttonImg,fill:"white",width:"20",height:"22"}),(0,l.jsx)("span",{className:r.profileTexting__button_Invite,children:"Follow"})]}),(0,l.jsxs)(f.Z,{className:r.profileTexting__button,children:[(0,l.jsx)(g,{className:r.profileTexting__buttonImg,fill:"white",width:"20",height:"22"}),(0,l.jsx)("span",{className:r.profileTexting__button_Invite,children:"Message"})]})]}),s&&(0,l.jsx)(f.Z,{className:r.profileTexting__blackList,children:(0,l.jsx)("span",{children:"send to black list"})}),(0,l.jsx)(h,{theme:t,subscribers:o,subscribersTotal:n}),(0,l.jsx)("div",{className:r.profileAdversting,children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:m,alt:"adverst"})})})]})})}),N={info__container:"InfoComponent_info__container__7ki6T",info__container__Black:"InfoComponent_info__container__Black__mCRe-",info__header:"InfoComponent_info__header__5HeXN",info__UserName:"InfoComponent_info__UserName__iWycF",info__UserTextContainer:"InfoComponent_info__UserTextContainer__y3s5W",info__UserTextStatus:"InfoComponent_info__UserTextStatus__F1KlQ",info__UserOnlineStatus:"InfoComponent_info__UserOnlineStatus__00e0l",info__generalData__container:"InfoComponent_info__generalData__container__xymSe",info__footer:"InfoComponent_info__footer__6YQmh",info__footer__container:"InfoComponent_info__footer__container__W8dHJ",info__footer__unit:"InfoComponent_info__footer__unit__ERNFo",info__footer__unit__number:"InfoComponent_info__footer__unit__number__qU-+e",info__footer__unit__text:"InfoComponent_info__footer__unit__text__Kf7tF",info__generalData__Birth__Date:"InfoComponent_info__generalData__Birth__Date__R9ruR"},P=function(e){var s=e.theme,t=e.subscribersTotal;return(0,l.jsxs)("div",{className:"White"===s?N.info__container:N.info__container__Black,children:[(0,l.jsxs)("div",{className:N.info__header,children:[(0,l.jsxs)("p",{className:N.info__UserName,children:["@","Anthony_Soprano"]}),(0,l.jsxs)("div",{className:N.info__UserTextContainer,children:[(0,l.jsx)("span",{className:N.info__UserTextStatus,children:"Can solve any your problem"}),(0,l.jsxs)("span",{className:N.info__UserOnlineStatus,children:["last seen 19 jun 2013 at 21:51",(0,l.jsx)("svg",{style:{marginLeft:"10px"},fill:"gray",width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,l.jsx)("path",{d:"M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM304 64H80V384H304V64z"})})]})]})]}),(0,l.jsxs)("div",{className:N.info__generalData__container,children:[(0,l.jsxs)("div",{className:N.info__generalData__Birth,children:[(0,l.jsx)("span",{children:"Date of Birth:"}),(0,l.jsx)("article",{children:(0,l.jsx)("span",{className:N.info__generalData__Birth__Date,children:"18/09/1961"})})]}),(0,l.jsxs)("div",{className:N.info__generalData__City,children:[(0,l.jsx)("span",{children:"City:"}),(0,l.jsx)("article",{children:(0,l.jsx)("span",{children:"New Jersey"})})]}),(0,l.jsxs)("div",{className:N.info__generalData__Job,children:[(0,l.jsx)("span",{children:"Job:"}),(0,l.jsx)("article",{children:(0,l.jsx)("span",{children:"like a dream"})})]}),(0,l.jsxs)("div",{className:N.info__generalData__Job,children:[(0,l.jsx)("span",{children:"Homepage:"}),(0,l.jsx)("article",{children:(0,l.jsx)("span",{children:"realDrum-is-life.com"})})]})]}),(0,l.jsx)("div",{className:N.info__footer,children:(0,l.jsxs)("div",{className:N.info__footer__container,children:[(0,l.jsxs)(d.OL,{className:N.info__footer__unit,to:"/subscribers",children:[(0,l.jsx)("span",{className:N.info__footer__unit__number,children:t}),(0,l.jsx)("span",{className:N.info__footer__unit__text,children:"subscribers"})]}),(0,l.jsxs)("a",{className:N.info__footer__unit,href:"",children:[(0,l.jsx)("span",{className:N.info__footer__unit__number,children:"488"}),(0,l.jsx)("span",{className:N.info__footer__unit__text,children:"posts"})]}),(0,l.jsxs)("a",{className:N.info__footer__unit,href:"",children:[(0,l.jsx)("span",{className:N.info__footer__unit__number,children:"423"}),(0,l.jsx)("span",{className:N.info__footer__unit__text,children:"photos"})]})]})})]})},w=function(e){var s=e.theme,t=e.subs;return(0,l.jsx)("article",{className:r.profileInfo,children:(0,l.jsx)(P,{theme:s,subscribersTotal:t})})},S="CRUDComponent_crud__container__fBsi7",A="CRUDComponent_crud__container__black__OqQLm",I="CRUDComponent_crud__unit__w-ced",k="CRUDComponent_crud__SearchContainer__aAogT",V=["title","titleId"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},D.apply(this,arguments)}function M(e,s){if(null==e)return{};var t,n,o=function(e,s){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||(o[t]=e[t]);return o}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function T(e,s){var t=e.title,n=e.titleId,o=M(e,V);return i.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:s,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,v||(v=i.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})))}var H=i.forwardRef(T),B=(t.p,t(4504)),U=function(e){var s=e.theme,t=e.addPost,n=e.addShorts,r=(0,i.useState)(""),_=(0,o.Z)(r,2),a=_[0],c=_[1];return(0,l.jsxs)("div",{className:"White"===s?S:A,children:[(0,l.jsxs)("button",{className:I,onClick:t,children:[(0,l.jsx)(H,{fill:"255",width:"20",height:"22",opacity:"0.7"}),(0,l.jsxs)("span",{children:["Add ",(0,l.jsx)("br",{}),"new post"]})]}),(0,l.jsxs)("button",{className:I,onClick:n,children:[(0,l.jsx)(H,{fill:"255",width:"20",height:"22",opacity:"0.7"}),(0,l.jsx)("span",{children:"#Shorts"})]}),(0,l.jsxs)("div",{className:k,children:[(0,l.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.currentTarget.value)}}),!a&&(0,l.jsx)("span",{children:"Search"}),!a&&(0,l.jsx)("img",{src:B.Z,alt:"search"})]})]})},z=t(2935),L=t(9434),O=t(8341),Z={close:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z",send:"M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z",shorts:"M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z",video:"M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z",pictures:"M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z",music:"M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"},R=function(e){var s=e.clearTextArea,t=e.theme,n=e.accept,_=e.closeFn,a=e.value,c=e.onChange,p=e.shorts,f=(0,i.useState)(Object),u=(0,o.Z)(f,2),d=u[0],h=u[1],m=(0,L.I0)(),x=function(e){h(e.target.files)},C=function(e){e.currentTarget.click()};console.log(d);var j=p?(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"file",id:"uploadFile",style:{display:"none"},onChange:function(e){return x(e)},accept:n,multiple:!0}),(0,l.jsx)("label",{htmlFor:"uploadFile",id:"uploadFile",onClick:function(e){return C(e)},children:(0,l.jsx)("button",{children:(0,l.jsx)(z.Z,{propsPath:Z.shorts})})})]}):(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"file",id:"uploadFile",style:{display:"none"},onChange:function(e){return x(e)},accept:n,multiple:!0}),(0,l.jsx)("label",{htmlFor:"uploadFile",id:"uploadFile",onClick:function(e){return C(e)},children:(0,l.jsx)("button",{children:(0,l.jsx)(z.Z,{propsPath:Z.pictures})})}),(0,l.jsx)("button",{children:(0,l.jsx)(z.Z,{propsPath:Z.music})}),(0,l.jsx)("input",{type:"file",id:"uploadVideo",style:{display:"none"},onChange:function(e){return x(e)},accept:"video/mp4,video/x-m4v,video/*",multiple:!0}),(0,l.jsx)("label",{htmlFor:"uploadVideo",id:"uploadVideo",onClick:function(e){return C(e)},children:(0,l.jsx)("button",{children:(0,l.jsx)(z.Z,{propsPath:Z.video})})})]});return(0,l.jsxs)("div",{className:"White"===t?r.profileInfo__CRUDarea:r.profileInfo__CRUDarea__black,children:[(0,l.jsx)("textarea",{className:"",onChange:function(e){c(e.currentTarget.value)},value:a}),(0,l.jsxs)("div",{className:r.profileInfo__CRUDarea__buttons,children:[(0,l.jsx)("button",{className:r.profileInfo__CRUDarea__send,onClick:function(){var e=new Date,t=e.getMonth()+1,n=e.getDate()+"."+t+"."+e.getFullYear(),o=e+"";console.log("posted"),m((0,O.CU)(o,n,a,"","","")),s("")},children:(0,l.jsx)(z.Z,{propsPath:Z.send})}),(0,l.jsx)("div",{className:r.profileInfo__CRUDarea__content,children:j}),(0,l.jsx)("button",{className:r.profileInfo__CRUDarea__close,onClick:_,children:(0,l.jsx)(z.Z,{propsPath:Z.close})})]})]})},F=t(1510),E="PostComponent_posts__contaiter__yg80W",W="PostComponent_posts__contaiter__black__nZeb5",Q="PostComponent_posts__header__EVeDU",J="PostComponent_posts__header__search__rRnTh",Y="PostComponent_posts__header__description__aaiOc",K="PostComponent_posts__header__icon__oLuow",q="PostComponent_posts__userPhoto__TN4g+",X="PostComponent_posts__userPost__1xAb1",G="PostComponent_posts__user__container__wiUVa",$="PostComponent_posts__post__pinned__icon__DvHNw",ee="PostComponent_posts__user__name__svCXe",se="PostComponent_posts__user__bmIfH",te="PostComponent_posts__post__date__0C2UV",ne="PostComponent_posts__post__pinned__QK72y",oe="PostComponent_posts__user__moreButton__3uBYO",ie="PostComponent_posts__post__1uOBU",re="PostComponent_posts__post__textarea__st3p5",_e="PostComponent_posts__post__textarea__black__MpQjj",ae="PostComponent_posts_footer__m5CbG",le="PostComponent_posts_footer_black__49gqB",ce="PostComponent_posts_footer__container__icons__RyaiG",pe="PostComponent_moreButton__Menu__eV1e8",fe="PostComponent_moreButton__Menu__Black__3BM60",ue=[{id:630,tag:"M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z",value:10,name:"likes"},{id:4531,tag:"M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z",value:10,name:"comments"},{id:36452,tag:"M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z",value:10,name:"reposts"},{id:3653,tag:"M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z",value:10,name:"views"}],de=function(e){var s=ue.map((function(s){return(0,l.jsxs)("button",{className:ce,onClick:function(){"likes"===s.name&&e.postLikeHandler(e.post.id)},children:[(0,l.jsx)(z.Z,{fill:"White"!==e.theme?"white":"",propsPath:e.post.isLiked&&"likes"===s.name?"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z":s.tag}),(0,l.jsx)("span",{style:"views"===s.name?{minWidth:"30px",textAlign:"left"}:{},children:e.post.status[s.name]})]},s.id)}));return(0,l.jsx)("div",{className:"White"===e.theme?ae:le,children:s})},he=(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{className:ne,children:"post pinned"}),(0,l.jsx)("svg",{className:$,width:15,fill:"gray",viewBox:"0 0 384 512",children:(0,l.jsx)("path",{d:"M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"})})]}),me=(0,l.jsxs)("div",{className:Q,children:[(0,l.jsx)("div",{className:J,children:(0,l.jsx)("span",{className:Y,children:"Posts"})}),(0,l.jsx)("div",{className:K,onClick:function(){return console.log("Clicked")},children:(0,l.jsx)("svg",{width:25,fill:"gray",viewBox:"0 0 512 512",children:(0,l.jsx)("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"})})})]}),xe=function(e){var s=e.theme,t=e.data,n=e.post,r=e.postSearch,_=(0,F.TL)(),c=(0,i.useState)(!1),p=(0,o.Z)(c,2),f=p[0],u=p[1],d=(0,i.useState)(!1),h=(0,o.Z)(d,2),m=h[0],x=h[1],C=(0,i.useState)(!1),j=(0,o.Z)(C,2),b=(j[0],j[1],(0,i.useState)(n.text)),v=(0,o.Z)(b,2),g=v[0],y=v[1],N=(0,L.v9)((function(e){return e.posts})),P=function(e){"delete"===e&&_((0,O.UW)(n.id)),"edit"===e&&(u(!f),x(!m))},w=m?(0,l.jsx)("textarea",{onKeyDown:function(e){return"Enter"===e.key?x(!m):"Escape"===e.key?(y(g),x(!m)):void 0},className:"White"===s?re:_e,onChange:function(e){y(e.currentTarget.value)},value:g}):(0,l.jsx)("span",{children:n.text}),S=(0,l.jsxs)("div",{className:"White"===s?E:W,children:[r&&me,(0,l.jsxs)("div",{className:X,children:[(0,l.jsx)("div",{className:q,children:(0,l.jsx)("img",{src:a,alt:""})}),(0,l.jsxs)("div",{className:se,children:[(0,l.jsxs)("div",{className:G,children:[(0,l.jsx)("span",{className:ee,children:t.fullName}),N.pinn&&he,(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:te,children:n.time})]}),(0,l.jsxs)("div",{className:G,style:{display:"flex"},onClick:function(){return u(!f)},children:[(0,l.jsx)("svg",{className:oe,width:35,fill:"gray",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,l.jsx)("path",{d:"M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"})}),f&&(0,l.jsxs)("ul",{className:"White"===s?pe:fe,children:[(0,l.jsx)("li",{onClick:function(){return P("delete")},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),(0,l.jsx)("li",{onClick:function(){return P("edit")},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),(0,l.jsx)("li",{onClick:function(){return P("share")},children:"\u041f\u0435\u0440\u0435\u0441\u043b\u0430\u0442\u044c"})]})]})]})]}),(0,l.jsx)("div",{className:ie,children:w}),(0,l.jsx)(de,{post:n,theme:s,postLikeHandler:function(e){_((0,O.cn)(e))}})]});return(0,l.jsx)(i.Fragment,{children:N&&S},n.id)},Ce=function(e){var s=e.theme,t=e.openPostFn,n=e.addShorts,_=e.closePostFn,a=e.someShorts,c=e.value,p=e.valueShorts,f=e.someValue,d=e.shorts,h=e.post,m=e.data,x=(0,i.useState)([]),C=(0,o.Z)(x,2),j=(C[0],C[1],(0,F.CG)((function(e){return e.posts})));return(0,l.jsxs)("article",{className:r.profileInfo__posts,children:[(0,l.jsx)(U,{theme:s,addPost:t,addShorts:n}),h&&(0,l.jsx)(R,{theme:s,accept:"image/*,.png,.jpg,.gif,.web,.webp",closeFn:_,value:c,onChange:f,clearTextArea:f}),d&&(0,l.jsx)(R,{theme:s,accept:"video/mp4,video/x-m4v,video/*",closeFn:_,value:p,onChange:a,clearTextArea:a,shorts:!0}),j.map((function(e){return(0,l.jsx)(xe,{postSearch:e.id===j[0].id,theme:s,data:m,photo:u,post:e},e.id)}))]})},je=t(7689),be=function(e){var s=e.isProfile,t=e.theme,n=e.data,a=e.subs,c=(e.randomPageUseEffect,e.users),f=e.auth,u=(0,i.useState)(!1),d=(0,o.Z)(u,2),h=d[0],m=d[1],x=(0,i.useState)(!1),C=(0,o.Z)(x,2),j=C[0],b=C[1],v=(0,i.useState)(""),g=(0,o.Z)(v,2),N=g[0],P=g[1],S=(0,i.useState)(""),A=(0,o.Z)(S,2),I=A[0],k=A[1];return f?(0,l.jsx)("article",{className:_.Z.profileAppWrapper,children:(0,l.jsxs)("section",{className:"White"===t?r.profileWrapper:r.profileWrapperBlack,children:[(0,l.jsx)(p,{data:n}),(0,l.jsx)(y,{isProfile:s,theme:t,subs:a,users:c}),(0,l.jsx)(w,{theme:t,subs:a}),(0,l.jsx)(Ce,{post:h,shorts:j,value:N,someValue:P,valueShorts:I,someShorts:k,openPostFn:function(){m(!h),b(!1)},addShorts:function(){b(!j),m(!1)},closePostFn:function(){m(!1),b(!1)},theme:t,data:n}),(0,l.jsx)("article",{className:r.profileAside})]})}):(0,l.jsx)(je.Fg,{to:"/login",replace:!0})}},2935:function(e,s,t){t.d(s,{Z:function(){return i}});var n="SomeSVG_container__vrCgH",o=t(184),i=function(e){var s=e.propsPath,t=e.fill,i=e.click,r=e.width,_=void 0===r?25:r,a=t||"gray";return(0,o.jsx)("svg",{className:n,fill:a,height:20,width:_,viewBox:"0 0 512 512",onClick:i,children:(0,o.jsx)("path",{d:s})})}},8255:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXk5ueutLeorrLn6eqrsbTBxsi7wMLe4eK3vL/IzM7a3d7W2du0urzT1tjP0tTLz9HdeyibAAAC4klEQVR4nO2a3ZqjIAyGgSA/inr/d7tYu91pp0JCE312hvekh9/XEAIkKtXpdDqdTqfT6XQ6/zEAoLz3t98LxP0Ug95xcVTnegA1O22t/ou1afDnWQBYtNEvWBvGkyzApO2r/A3jTokCDO/ltyjoWdwBqHCovwUhCjsAlUr6OQiDrANfVL85cKIOqvqyMYBQ1895sEg5gFhe/0cMvJD+iNPXOsmEABJSX9tVwgHM2ABkBPQV4OW1lahHlABoy28AtwUfBvi3ov92ABdx3PqwUFZAohY4kr427AczTV9r7hPB01ZA68Crr2ZaDmZ4kwB7DskZOL4IHmBHZgPUANiJ1wBxF/5AA5cvweVJuF68DdVELUSJV7+hFHMfRugb6Q7/84S4DQzvJqBfSLhzMEMzwH4ly7WQ4oD/QpQ3IikEAu8C/MtM6m1GCYHI6xSfBVaoV1Xvz9z1pbo0sCAPBKEGBfZQNoIdUyg2Ce8LILIDHlQdiLQGCA7E9XMelDJRagM+OVgOmuVZPp3TLvfvK5LV8QT13cKU7KsHa8+cmSgYYzIPD9aYsJ48NdqmVsvgQkohuDipawZnN26/5ysrP85LjEMmxmUZt+nhKYuQZcYc+pSX3X7BGKPDsAovxT6s3PQOyoDd5oezlzGR1Z+HlUfFyOqw8nsAmNxhAXxjwi2sCQEqfh+V1jzw1SXwgyE/zrfq5FhuJlkeH/vXKDBYgLVVfvcwfJYLMFYGpYgofDI5KF8+sBZSaxDAf/r37w4aZ+qHnwk0WGi5KDb0xQoO6G8lluX/4oDaNKM3JmsOaAMMdn2ig4bxBMYBOg+A3BbFOUC3DsldUSToLxtI/TASqMYBawF4BlcOsI2YJgeIRaA1JMnUDUhl4E69fSJQgp6phkCkBPyj1sEQ3AJ3am100ocaTZRrgWwKbpR3ItCn9GQDxWIkvgd0ZZ5H+1ankWISEIdzTZRmun7rNEgzlyLQ6XQ6nV/IH0u2HqZahO7HAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=7.20681e80.chunk.js.map