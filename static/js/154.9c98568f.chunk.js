(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[154],{154:function(e,t,n){"use strict";n.d(t,{no:function(){return dn}});var r=n(413);function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var i=n(184),s=n(791);var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};Object.create;function c(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var u=n(613),l=n.n(u),d="-ms-",f="-moz-",p="-webkit-",h="comm",v="rule",m="decl",g="@keyframes",S=Math.abs,y=String.fromCharCode,b=Object.assign;function _(e){return e.trim()}function w(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,n){return e.replace(t,n)}function C(e,t,n){return e.indexOf(t,n)}function O(e,t){return 0|e.charCodeAt(t)}function T(e,t,n){return e.slice(t,n)}function P(e){return e.length}function x(e){return e.length}function R(e,t){return t.push(e),e}function k(e,t){return e.filter((function(e){return!w(e,t)}))}var A=1,I=1,D=0,N=0,j=0,$="";function W(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:A,column:I,length:s,return:"",siblings:a}}function F(e,t){return b(W("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function H(e){for(;e.root;)e=F(e.root,{children:[e]});R(e,e.siblings)}function L(){return j=N>0?O($,--N):0,I--,10===j&&(I=1,A--),j}function K(){return j=N<D?O($,N++):0,I++,10===j&&(I=1,A++),j}function B(){return O($,N)}function U(){return N}function M(e,t){return T($,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){return A=I=1,D=P($=e),N=0,[]}function V(e){return $="",e}function Y(e){return _(M(N-1,J(91===e?e+2:40===e?e+1:e)))}function q(e){for(;(j=B())&&j<33;)K();return z(e)>2||z(j)>3?"":" "}function Z(e,t){for(;--t&&K()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return M(e,U()+(t<6&&32==B()&&32==K()))}function J(e){for(;K();)switch(j){case e:return N;case 34:case 39:34!==e&&39!==e&&J(j);break;case 40:41===e&&J(e);break;case 92:K()}return N}function Q(e,t){for(;K()&&e+j!==57&&(e+j!==84||47!==B()););return"/*"+M(t,N-1)+"*"+y(47===e?e:K())}function X(e){for(;!z(B());)K();return M(e,N)}function ee(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function te(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case m:return e.return=e.return||e.value;case h:return"";case g:return e.return=e.value+"{"+ee(e.children,r)+"}";case v:if(!P(e.value=e.props.join(",")))return""}return P(n=ee(e.children,r))?e.return=e.value+"{"+n+"}":""}function ne(e,t,n){switch(function(e,t){return 45^O(e,0)?(((t<<2^O(e,0))<<2^O(e,1))<<2^O(e,2))<<2^O(e,3):0}(e,t)){case 5103:return p+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p+e+e;case 4789:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return p+e+f+e+d+e+e;case 5936:switch(O(e,t+11)){case 114:return p+e+d+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return p+e+d+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return p+e+d+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return p+e+d+e+e;case 6165:return p+e+d+"flex-"+e+e;case 5187:return p+e+E(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return p+e+d+"flex-item-"+E(e,/flex-|-self/g,"")+(w(e,/flex-|baseline/)?"":d+"grid-row-"+E(e,/flex-|-self/g,""))+e;case 4675:return p+e+d+"flex-line-pack"+E(e,/align-content|flex-|-self/g,"")+e;case 5548:return p+e+d+E(e,"shrink","negative")+e;case 5292:return p+e+d+E(e,"basis","preferred-size")+e;case 6060:return p+"box-"+E(e,"-grow","")+p+e+d+E(e,"grow","positive")+e;case 4554:return p+E(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+p+e+e;case 4200:if(!w(e,/flex-|baseline/))return d+"grid-column-align"+T(e,t)+e;break;case 2592:case 3360:return d+E(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,w(e.props,/grid-\w+-end/)}))?~C(e+(n=n[t].value),"span",0)?e:d+E(e,"-start","")+e+d+"grid-row-span:"+(~C(n,"span",0)?w(n,/\d+/):+w(n,/\d+/)-+w(e,/\d+/))+";":d+E(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return w(e.props,/grid-\w+-start/)}))?e:d+E(E(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,p+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(O(e,t+1)){case 109:if(45!==O(e,t+4))break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+f+(108==O(e,t+3)?"$3":"$2-$3"))+e;case 115:return~C(e,"stretch",0)?ne(E(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return E(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,s,a){return d+n+":"+r+a+(o?d+n+"-span:"+(i?s:+s-+r)+a:"")+e}));case 4949:if(121===O(e,t+6))return E(e,":",":"+p)+e;break;case 6444:switch(O(e,45===O(e,14)?18:11)){case 120:return E(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p+(45===O(e,14)?"inline-":"")+"box$3$1"+p+"$2$3$1"+d+"$2box$3")+e;case 100:return E(e,":",":"+d)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return E(e,"scroll-","scroll-snap-")+e}return e}function re(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case m:return void(e.return=ne(e.value,e.length,n));case g:return ee([F(e,{value:E(e.value,"@","@"+p)})],r);case v:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(w(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":H(F(e,{props:[E(t,/:(read-\w+)/,":-moz-$1")]})),H(F(e,{props:[t]})),b(e,{props:k(n,r)});break;case"::placeholder":H(F(e,{props:[E(t,/:(plac\w+)/,":-webkit-input-$1")]})),H(F(e,{props:[E(t,/:(plac\w+)/,":-moz-$1")]})),H(F(e,{props:[E(t,/:(plac\w+)/,d+"input-$1")]})),H(F(e,{props:[t]})),b(e,{props:k(n,r)})}return""}))}}function oe(e){return V(ie("",null,null,null,[""],e=G(e),0,[0],e))}function ie(e,t,n,r,o,i,s,a,c){for(var u=0,l=0,d=s,f=0,p=0,h=0,v=1,m=1,g=1,b=0,_="",w=o,T=i,x=r,k=_;m;)switch(h=b,b=K()){case 40:if(108!=h&&58==O(k,d-1)){-1!=C(k+=E(Y(b),"&","&\f"),"&\f",S(u?a[u-1]:0))&&(g=-1);break}case 34:case 39:case 91:k+=Y(b);break;case 9:case 10:case 13:case 32:k+=q(h);break;case 92:k+=Z(U()-1,7);continue;case 47:switch(B()){case 42:case 47:R(ae(Q(K(),U()),t,n,c),c);break;default:k+="/"}break;case 123*v:a[u++]=P(k)*g;case 125*v:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+l:-1==g&&(k=E(k,/\f/g,"")),p>0&&P(k)-d&&R(p>32?ce(k+";",r,n,d-1,c):ce(E(k," ","")+";",r,n,d-2,c),c);break;case 59:k+=";";default:if(R(x=se(k,t,n,u,l,o,a,_,w=[],T=[],d,i),i),123===b)if(0===l)ie(k,t,x,x,w,i,d,a,T);else switch(99===f&&110===O(k,3)?100:f){case 100:case 108:case 109:case 115:ie(e,x,x,r&&R(se(e,x,x,0,0,o,a,_,o,w=[],d,T),T),o,T,d,a,r?w:T);break;default:ie(k,x,x,x,[""],T,0,a,T)}}u=l=p=0,v=g=1,_=k="",d=s;break;case 58:d=1+P(k),p=h;default:if(v<1)if(123==b)--v;else if(125==b&&0==v++&&125==L())continue;switch(k+=y(b),b*v){case 38:g=l>0?1:(k+="\f",-1);break;case 44:a[u++]=(P(k)-1)*g,g=1;break;case 64:45===B()&&(k+=Y(K())),f=B(),l=d=P(_=k+=X(U())),b++;break;case 45:45===h&&2==P(k)&&(v=0)}}return i}function se(e,t,n,r,o,i,s,a,c,u,l,d){for(var f=o-1,p=0===o?i:[""],h=x(p),m=0,g=0,y=0;m<r;++m)for(var b=0,w=T(e,f+1,f=S(g=s[m])),C=e;b<h;++b)(C=_(g>0?p[b]+" "+w:E(w,/&\f/g,p[b])))&&(c[y++]=C);return W(e,t,n,0===o?v:a,c,u,l,d)}function ae(e,t,n,r){return W(e,t,n,h,y(j),T(e,2,-2),0,r)}function ce(e,t,n,r,o){return W(e,t,n,m,T(e,0,r),T(e,r+1,-1),r,o)}var ue={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",de="active",fe="data-styled-version",pe="6.1.8",he="/*!sc*/\n",ve="undefined"!=typeof window&&"HTMLElement"in window,me=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),ge=(new Set,Object.freeze([])),Se=Object.freeze({});function ye(e,t,n){return void 0===n&&(n=Se),e.theme!==n.theme&&e.theme||t||n.theme}var be=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_e=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function Ee(e){return e.replace(_e,"-").replace(we,"")}var Ce=/(a)(d)/gi,Oe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Te(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Oe(t%52)+n;return(Oe(t%52)+n).replace(Ce,"$1-$2")}var Pe,xe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Re=function(e){return xe(5381,e)};function ke(e){return Te(Re(e)>>>0)}function Ae(e){return e.displayName||e.name||"Component"}function Ie(e){return"string"==typeof e&&!0}var De="function"==typeof Symbol&&Symbol.for,Ne=De?Symbol.for("react.memo"):60115,je=De?Symbol.for("react.forward_ref"):60112,$e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},We={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},He=((Pe={})[je]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pe[Ne]=Fe,Pe);function Le(e){return("type"in(t=e)&&t.type.$$typeof)===Ne?Fe:"$$typeof"in e?He[e.$$typeof]:$e;var t}var Ke=Object.defineProperty,Be=Object.getOwnPropertyNames,Ue=Object.getOwnPropertySymbols,Me=Object.getOwnPropertyDescriptor,ze=Object.getPrototypeOf,Ge=Object.prototype;function Ve(e,t,n){if("string"!=typeof t){if(Ge){var r=ze(t);r&&r!==Ge&&Ve(e,r,n)}var o=Be(t);Ue&&(o=o.concat(Ue(t)));for(var i=Le(e),s=Le(t),a=0;a<o.length;++a){var c=o[a];if(!(c in We||n&&n[c]||s&&c in s||i&&c in i)){var u=Me(t,c);try{Ke(e,c,u)}catch(e){}}}}return e}function Ye(e){return"function"==typeof e}function qe(e){return"object"==typeof e&&"styledComponentId"in e}function Ze(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Je(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xe(e[r],t[r]);else if(Qe(t))for(var r in t)e[r]=Xe(e[r],t[r]);return e}function et(e,t){Object.defineProperty(e,"toString",{value:t})}function tt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw tt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=(i=0,t.length);i<a;i++)this.tag.insertRule(s,t[i])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(he);return t},e}(),rt=new Map,ot=new Map,it=1,st=function(e){if(rt.has(e))return rt.get(e);for(;ot.has(it);)it++;var t=it++;return rt.set(e,t),ot.set(t,e),t},at=function(e,t){it=t+1,rt.set(e,t),ot.set(t,e)},ct="style[".concat(le,"][").concat(fe,'="').concat(pe,'"]'),ut=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},dt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(he),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var c=a.match(ut);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(at(l,u),lt(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function ft(){return n.nc}var pt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(le,de),r.setAttribute(fe,pe);var s=ft();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},ht=function(){function e(e){this.element=pt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw tt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),vt=function(){function e(e){this.element=pt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gt=ve,St={isServer:!ve,useCSSOMInjection:!me},yt=function(){function e(e,t,n){void 0===e&&(e=Se),void 0===t&&(t={});var r=this;this.options=a(a({},St),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ve&&gt&&(gt=!1,function(e){for(var t=document.querySelectorAll(ct),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(le)!==de&&(dt(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),et(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return ot.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),s=t.getGroup(n);if(void 0===i||0===s.length)return"continue";var a="".concat(le,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==i&&i.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(s).concat(a,'{content:"').concat(c,'"}').concat(he)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return st(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(a(a({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new mt(n):t?new ht(n):new vt(n)}(this.options),new nt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(st(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(st(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(st(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,_t=/^\s*\/\/.*$/gm;function wt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=wt(e.children,t)),e}))}function Et(e){var t,n,r,o=void 0===e?Se:e,i=o.options,s=void 0===i?Se:i,a=o.plugins,c=void 0===a?ge:a,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===v&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(r,u))})),s.prefix&&l.push(re),l.push(te);var d=function(e,o,i,a){void 0===o&&(o=""),void 0===i&&(i=""),void 0===a&&(a="&"),t=a,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(_t,""),u=oe(i||o?"".concat(i," ").concat(o," { ").concat(c," }"):c);s.namespace&&(u=wt(u,s.namespace));var d,f=[];return ee(u,function(e){var t=x(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}(l.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=c.length?c.reduce((function(e,t){return t.name||tt(15),xe(e,t.name)}),5381).toString():"",d}var Ct=new yt,Ot=Et(),Tt=s.createContext({shouldForwardProp:void 0,styleSheet:Ct,stylis:Ot}),Pt=(Tt.Consumer,s.createContext(void 0));function xt(){return(0,s.useContext)(Tt)}function Rt(e){var t=(0,s.useState)(e.stylisPlugins),n=t[0],r=t[1],o=xt().styleSheet,i=(0,s.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),a=(0,s.useMemo)((function(){return Et({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,s.useEffect)((function(){l()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var c=(0,s.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}}),[e.shouldForwardProp,i,a]);return s.createElement(Tt.Provider,{value:c},s.createElement(Pt.Provider,{value:a},e.children))}var kt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Ot);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,et(this,(function(){throw tt(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Ot),this.name+e.hash},e}(),At=function(e){return e>="A"&&e<="Z"};function It(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;At(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Dt=function(e){return null==e||!1===e||""===e},Nt=function e(t){var n,r,o=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Dt(s)&&(Array.isArray(s)&&s.isCss||Ye(s)?o.push("".concat(It(i),":"),s,";"):Qe(s)?o.push.apply(o,c(c(["".concat(i," {")],e(s),!1),["}"],!1)):o.push("".concat(It(i),": ").concat((n=i,null==(r=s)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in ue||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function jt(e,t,n,r){return Dt(e)?[]:qe(e)?[".".concat(e.styledComponentId)]:Ye(e)?!Ye(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:jt(e(t),t,n,r):e instanceof kt?n?(e.inject(n,r),[e.getName(r)]):[e]:Qe(e)?Nt(e):Array.isArray(e)?Array.prototype.concat.apply(ge,e.map((function(e){return jt(e,t,n,r)}))):[e.toString()];var o}function $t(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ye(n)&&!qe(n))return!1}return!0}var Wt=Re(pe),Ft=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&$t(e),this.componentId=t,this.baseHash=xe(Wt,t),this.baseStyle=n,yt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ze(r,this.staticRulesId);else{var o=Je(jt(this.rules,e,t,n)),i=Te(xe(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var s=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,s)}r=Ze(r,i),this.staticRulesId=i}else{for(var a=xe(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var d=Je(jt(l,e,t,n));a=xe(a,d+u),c+=d}}if(c){var f=Te(a>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,".".concat(f),void 0,this.componentId)),r=Ze(r,f)}}return r},e}(),Ht=s.createContext(void 0);Ht.Consumer;var Lt={};new Set;function Kt(e,t,n){var r=qe(e),o=e,i=!Ie(e),c=t.attrs,u=void 0===c?ge:c,l=t.componentId,d=void 0===l?function(e,t){var n="string"!=typeof e?"sc":Ee(e);Lt[n]=(Lt[n]||0)+1;var r="".concat(n,"-").concat(ke(pe+n+Lt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):l,f=t.displayName,p=void 0===f?function(e){return Ie(e)?"styled.".concat(e):"Styled(".concat(Ae(e),")")}(e):f,h=t.displayName&&t.componentId?"".concat(Ee(t.displayName),"-").concat(t.componentId):t.componentId||d,v=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,m=t.shouldForwardProp;if(r&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;m=function(e,t){return g(e,t)&&S(e,t)}}else m=g}var y=new Ft(n,h,r?o.componentStyle:void 0);function b(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,i=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,d=s.useContext(Ht),f=xt(),p=e.shouldForwardProp||f.shouldForwardProp,h=ye(t,d,i)||Se,v=function(e,t,n){for(var r,o=a(a({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var s=Ye(r=e[i])?r(o):r;for(var c in s)o[c]="className"===c?Ze(o[c],s[c]):"style"===c?a(a({},o[c]),s[c]):s[c]}return t.className&&(o.className=Ze(o.className,t.className)),o}(r,t,h),m=v.as||l,g={};for(var S in v)void 0===v[S]||"$"===S[0]||"as"===S||"theme"===S&&v.theme===h||("forwardedAs"===S?g.as=v.forwardedAs:p&&!p(S,m)||(g[S]=v[S]));var y=function(e,t){var n=xt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,v),b=Ze(c,u);return y&&(b+=" "+y),v.className&&(b+=" "+v.className),g[Ie(m)&&!be.has(m)?"class":"className"]=b,g.ref=n,(0,s.createElement)(m,g)}(_,e,t)}b.displayName=p;var _=s.forwardRef(b);return _.attrs=v,_.componentStyle=y,_.displayName=p,_.shouldForwardProp=m,_.foldedComponentIds=r?Ze(o.foldedComponentIds,o.styledComponentId):"",_.styledComponentId=h,_.target=r?o.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Xe(e,o[r],!0);return e}({},o.defaultProps,e):e}}),et(_,(function(){return".".concat(_.styledComponentId)})),i&&Ve(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Bt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ut=function(e){return Object.assign(e,{isCss:!0})};function Mt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ye(e)||Qe(e))return Ut(jt(Bt(ge,c([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?jt(r):Ut(jt(Bt(r,t)))}function zt(e,t,n){if(void 0===n&&(n=Se),!t)throw tt(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Mt.apply(void 0,c([r],o,!1)))};return r.attrs=function(r){return zt(e,t,a(a({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return zt(e,t,a(a({},n),r))},r}var Gt=function(e){return zt(Kt,e)},Vt=Gt;be.forEach((function(e){Vt[e]=Gt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=$t(e),yt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Je(jt(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&yt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Yt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Je(Mt.apply(void 0,c([e],t,!1))),o=ke(r);return new kt(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=ft(),r=Je([n&&'nonce="'.concat(n,'"'),"".concat(le,'="true"'),"".concat(fe,'="').concat(pe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw tt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw tt(2);var n=((t={})[le]="",t[fe]=pe,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=ft();return r&&(n.nonce=r),[s.createElement("style",a({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new yt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw tt(2);return s.createElement(Rt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw tt(3)}})(),"__sc-".concat(le,"__");var qt,Zt,Jt,Qt,Xt,en,tn,nn,rn,on={"aria-busy":!0,role:"progressbar"},sn=(Vt.div(qt||(qt=o(["\n  display: ",";\n"])),(function(e){return e.$visible?"flex":"none"})),"http://www.w3.org/2000/svg"),an=242.776657104492,cn=Yt(Zt||(Zt=o(["\n12.5% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n43.75% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n100% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n"])),33.98873199462888,an,26.70543228149412,84.97182998657219,an,84.97182998657219,2.42776657104492,an,240.34889053344708),un=(Vt.path(Jt||(Jt=o(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),2.42776657104492,an,cn,1.6),Yt(Qt||(Qt=o(["\nto {\n   transform: rotate(360deg);\n }\n"])))),ln=(Vt.svg(Xt||(Xt=o(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: 0.75s;\n"])),un),Vt.polyline(en||(en=o(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(e){return e.width})),Yt(tn||(tn=o(["\nto {\n   stroke-dashoffset: 136;\n }\n"])))),dn=(Vt.polygon(nn||(nn=o(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),ln),Vt.svg(rn||(rn=o(["\n  transform-origin: 50% 65%;\n"]))),function(e){var t=e.visible,n=void 0===t||t,o=e.width,s=void 0===o?"80":o,a=e.height,c=void 0===a?"80":a,u=e.wrapperClass,l=void 0===u?"":u,d=e.wrapperStyle,f=void 0===d?{}:d,p=e.ariaLabel,h=void 0===p?"blocks-loading":p;return n?(0,i.jsxs)("svg",(0,r.Z)((0,r.Z)({width:s,height:c,className:l,style:f,xmlns:sn,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid","aria-label":h,"data-testid":"blocks-svg"},on),{},{children:[(0,i.jsx)("title",{children:"Blocks"}),(0,i.jsx)("desc",{children:"Animated representation of blocks"}),(0,i.jsx)("rect",{x:"17",y:"17",width:"20",height:"20",fill:"#577c9b",children:(0,i.jsx)("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0s",calcMode:"discrete"})}),(0,i.jsx)("rect",{x:"40",y:"17",width:"20",height:"20",fill:"#577c9b",children:(0,i.jsx)("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.125s",calcMode:"discrete"})}),(0,i.jsx)("rect",{x:"63",y:"17",width:"20",height:"20",fill:"#577c9b",children:(0,i.jsx)("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.25s",calcMode:"discrete"})}),(0,i.jsx)("rect",{x:"17",y:"40",width:"20",height:"20",fill:"#577c9b",children:(0,i.jsx)("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.875s",calcMode:"discrete"})}),(0,i.jsx)("rect",{x:"63",y:"40",width:"20",height:"20",fill:"#577c9b",children:(0,i.jsx)("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.375s",calcMode:"discrete"})}),(0,i.jsx)("rect",{x:"17",y:"63",width:"20",height:"20",fill:"#577c9b",children:(0,i.jsx)("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.75s",calcMode:"discrete"})}),(0,i.jsx)("rect",{x:"40",y:"63",width:"20",height:"20",fill:"#577c9b",children:(0,i.jsx)("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.625s",calcMode:"discrete"})}),(0,i.jsx)("rect",{x:"63",y:"63",width:"20",height:"20",fill:"#577c9b",children:(0,i.jsx)("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.5s",calcMode:"discrete"})})]})):null})},613:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var u=i[c];if(!a(u))return!1;var l=e[u],d=t[u];if(!1===(o=n?n.call(r,l,d,u):void 0)||void 0===o&&l!==d)return!1}return!0}}}]);
//# sourceMappingURL=154.9c98568f.chunk.js.map