"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[38,335],{75:function(e,t,r){r.d(t,{HC:function(){return i},Nh:function(){return s},PT:function(){return u},YJ:function(){return o},fI:function(){return l}});var a=r(294),n="https://api.themoviedb.org/3/",c="4b0d88e4e438af6c90a79ac0bd3bce13",s=function(){return a.Z.get("".concat(n).concat("trending/movie/day","?api_key=").concat(c))},o=function(e){return a.Z.get("".concat(n,"movie/").concat(e,"?api_key=").concat(c))},i=function(e,t){return a.Z.get("".concat(n,"search/movie?api_key=").concat(c,"&query=").concat(e,"&&page=").concat(t))},u=function(e){return a.Z.get("".concat(n,"movie/").concat(e,"/credits?api_key=").concat(c))},l=function(e){return a.Z.get("".concat(n,"movie/").concat(e,"/reviews?api_key=").concat(c))}},773:function(e,t,r){r.d(t,{Z:function(){return _}});var a="ImageGallery_ImageGallery__1Glj-",n="ImmageGalleryItem_ImageGalleryItem__4wB2u",c="ImmageGalleryItem_ImageGalleryItemImage__CyyKA",s="ImmageGalleryItem_img_text__b+ByL",o="ImmageGalleryItem_link_text__0D+Z4",i=r(689),u=r(87),l=r(746),m=r(184),h=function(e){var t=e.titel,r=e.img,a=e.id,h=(0,i.TH)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("li",{className:n,children:(0,m.jsxs)(u.rU,{to:"/movies/".concat(a),state:{from:h},className:o,children:[(0,m.jsx)("img",{className:c,src:r?"https://image.tmdb.org/t/p/w440_and_h660_face/"+r:l,alt:t}),(0,m.jsx)("p",{className:s,children:t})]})},a)})};function _(e){var t=e.items.map((function(e){var t=e.id,r=e.title,a=e.poster_path;return(0,m.jsx)(h,{titel:r,img:a,id:t},t)}));return(0,m.jsx)("ul",{className:a,children:t})}},639:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(154),n="Loader_wrapper__2YrQT",c=r(184),s=function(){return(0,c.jsx)("div",{className:n,children:(0,c.jsx)(a.no,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",visible:!0})})}},770:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var a=r(433),n=r(861),c=r(439),s=r(757),o=r.n(s),i=r(942),u=r(413),l=r(791),m="Searchbar_searchbar__0FWoU",h="Searchbar_SearchForm__XuPyK",_="Searchbar_searchForm_button__gWAX-",f="Searchbar_searchForm_button_label__LCSTK",d="Searchbar_searchForm_input__QuYHA",p=r(94),g=r(184),v=function(e){var t=e.onSubmit,r=(0,l.useState)({search:""}),a=(0,c.Z)(r,2),n=a[0],s=a[1],o=(0,l.useRef)();(0,l.useEffect)((function(){o.current.focus()}),[]);return(0,g.jsx)("header",{className:m,children:(0,g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n.search.trim()?(t(n.search),s({search:""})):p.Am.error("Enter text to search the gallery")},className:h,children:[(0,g.jsx)("button",{type:"submit",className:_,children:(0,g.jsx)("span",{className:f,children:"Search"})}),(0,g.jsx)("input",{ref:o,value:n.search,onChange:function(e){var t=e.target,r=t.name,a=t.value;s((function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,i.Z)({},r,a))}))},className:d,type:"text",autoComplete:"off",autoFocus:!0,name:"search",placeholder:"Search images and photos"})]})})},x=r(75),b=r(639),j=r(159),y=r(773),Z="Button_btn__RBtNK",N=function(e){var t=e.onClick,r=e.type,a=void 0===r?"submit":r,n=e.children;return(0,g.jsx)("button",{onClick:t,type:a,className:Z,children:n})},k=r(87),S=function(){var e=(0,l.useState)([]),t=(0,c.Z)(e,2),r=t[0],s=t[1],i=(0,l.useState)(!1),u=(0,c.Z)(i,2),m=u[0],h=u[1],_=(0,l.useState)(null),f=(0,c.Z)(_,2),d=f[0],Z=f[1],S=(0,l.useState)(""),I=(0,c.Z)(S,2),w=I[0],C=I[1],F=(0,k.lr)(),G=(0,c.Z)(F,2),A=G[0],H=G[1],L=A.get("search"),P=A.get("page");(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.HC)(L,P);case 3:t=e.sent,r=t.data,s((function(e){var t;return null!==(t=r.results)&&void 0!==t&&t.length?[].concat((0,a.Z)(e),(0,a.Z)(r.results)):e})),C(r.total_pages),h(!0),r.total_results||p.Am.error("\u274cSorry, there are no Movies matching your search query ".concat(L," . Please try again.")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Z(e.t0.message);case 14:return e.prev=14,h(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();L&&e()}),[L,P]);return(0,g.jsxs)(g.Fragment,{children:[d&&(0,g.jsx)(j.default,{}),m&&(0,g.jsx)(b.Z,{}),(0,g.jsx)(v,{onSubmit:function(e){s([]),H({search:e,page:1})}}),(0,g.jsx)(y.Z,{items:r}),w>P&&(0,g.jsx)(N,{onClick:function(){return H({search:L,page:Number(P)+1})},type:"button",children:"Load more"})]})},I="movies-page_bg__D+6P4",w=function(){return(0,g.jsx)("div",{className:I,children:(0,g.jsx)(S,{})})}},159:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a={img:"NotFound_img__jWgJp",error:"NotFound_error__hxUbn"},n=r.p+"static/media/error404.328a98ec29937e354c26.png",c=r(87),s=r(184),o=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:a.error,children:(0,s.jsx)("img",{src:n,alt:"error",className:a.img})}),(0,s.jsxs)("div",{className:a.errorMessage,children:[(0,s.jsx)("h3",{children:"\u041e\u0439! \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430!"}),(0,s.jsx)("p",{children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u043d\u0430\u0439\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u0443\u044e \u0432\u0430\u043c\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0432\u044b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u043b\u0438 \u0430\u0434\u0440\u0435\u0441."}),(0,s.jsx)(c.rU,{to:"/",children:"  Go to Home Page"})]})]})}},746:function(e,t,r){e.exports=r.p+"static/media/cat.6c7a11a3f8c3133a4b7a.jpg"}}]);
//# sourceMappingURL=38.3107881d.chunk.js.map