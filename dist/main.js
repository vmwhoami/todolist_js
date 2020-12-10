(()=>{"use strict";var e={750:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'.header{display:flex;margin:2rem 0 2rem 0}.header__input,.header__input:focus{flex:0 1 40rem;height:5rem;padding:2rem;border-top-left-radius:5px;border-bottom-left-radius:5px;border:1px solid #c2c2c2;border-right:0;outline:none}.header__input::placeholder,.header__input:focus::placeholder{text-transform:uppercase}.header__btn{display:inline-flex;flex:0 0 15rem;justify-content:center;align-items:center;height:5rem;background-color:#f53333;border-top-right-radius:5px;border-bottom-right-radius:5px;border:1px solid #c2c2c2;border-left:0;text-decoration:none;color:#fff;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif}.category{width:100%;display:flex;justify-content:flex-end}.category__input{flex:0 0 40rem;height:5rem;padding:2rem;border-top-left-radius:5px;border-bottom-left-radius:5px;border:1px solid #c2c2c2;border-right:0;outline:none}.category__btn{display:inline-flex;padding:1rem;justify-content:center;align-items:center;height:5rem;background-color:#f53333;border-top-right-radius:5px;border-bottom-right-radius:5px;border:1px solid #c2c2c2;border-left:0;text-decoration:none;color:#fff;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif}.content{display:flex;justify-content:center;flex-wrap:wrap;margin-top:5rem}.card{border:1px solid #ddd;flex:0 0 45rem;background-color:#f3f3f3;overflow:hidden;border-radius:1rem;margin:2rem}.card__title{width:100%;height:5rem;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;text-align:center;background-color:#add8e6;display:flex;justify-content:center;align-items:center;position:relative}.card__delete{top:50%;transform:translateY(-50%);right:2%;justify-content:center;align-items:center;cursor:pointer}.card__edit{top:50%;transform:translateY(-50%);right:10%;justify-content:center;align-items:center;cursor:pointer}.card__add{width:20rem;height:20rem;background-color:#aab3c2;display:flex;width:100%;height:10rem;align-items:center;justify-content:center}.card__addlink{cursor:pointer;width:5rem;height:5rem;border-radius:50%;background-color:#945f5f}.card__addlink:hover{background-color:#e60000}.additem__btn{cursor:pointer;width:1rem;height:1rem;background-color:#4169e1}.item{margin:1rem;padding:1rem 2rem;display:flex;align-items:center;background-color:#fff;border-radius:5px;border:1px solid #ddd;position:relative;padding-bottom:4rem}.item__edit{bottom:5px;right:4rem}.item__del{bottom:5px;right:5px}.item__checkbox{margin:2rem}.ch__container{display:block;position:relative;padding-left:5rem;margin-bottom:1rem;cursor:pointer;font-size:2rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ch__container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:50%;transform:translateY(-50%);left:0;height:3.5rem;width:3.5rem;background-color:#eee}.ch__container:hover input~.checkmark{background-color:#ccc}.ch__container input:checked~.checkmark{background-color:#f51717}.checkmark:after{content:"";position:absolute;display:none}.ch__container input:checked~.checkmark:after{display:block}.ch__container .checkmark:after{left:1rem;top:0;width:1rem;height:2.5rem;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}*{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%}body{background-color:#e6e8e7;font-size:16px;font-size:1.6rem;line-height:1.5;font-family:Arial,Helvetica,sans-serif}.container{max-width:120rem;height:100vh;margin:0 auto}.commonbtn{position:absolute;display:inline-flex;width:3rem;height:3rem;border-radius:50%}.svgs{display:none}',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&o[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),t.push(d))}},t}},379:(e,t,r)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var c=e[o],d=t.base?c[0]+t.base:c[0],l=r[d]||0,s="".concat(d," ").concat(l);r[d]=l+1;var u=a(s),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:s,updater:h(m,t),references:1}),n.push(s)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,f=0;function h(e,t){var r,n,o;if(t.singleton){var i=f++;r=p||(p=d(t)),n=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=d(t),n=m.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var d=c(e,t),l=0;l<r.length;l++){var s=a(r[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}r=d}}}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(379),t=r.n(e),n=r(750);function o(e,t){const r=document.querySelector(".content"),n=document.createElement("div"),o=document.createElement("h3"),i=document.createElement("div"),a=document.createElement("a"),c=document.createElement("a"),d=document.createElement("div"),l=document.createElement("a"),s=document.createElement("div"),u=document.createElement("input"),m=document.createElement("a");s.classList.add("additem"),m.classList.add("additem__btn"),u.classList.add("additem__input"),n.classList.add("card"),i.classList.add("card__title"),a.classList.add("card__delete","commonbtn"),c.classList.add("card__edit","commonbtn"),d.classList.add("card__add"),l.classList.add("card__addlink"),m.textContent="Add to the list",o.textContent=e,u.id=e,i.appendChild(o),i.appendChild(a),i.appendChild(c),n.appendChild(i),n.appendChild(s),s.appendChild(u),s.appendChild(m),t.forEach((e=>{const t=document.createElement("div"),r=document.createElement("label"),o=document.createElement("input"),i=document.createElement("span"),a=document.createElement("a"),c=document.createElement("a");r.textContent=e,t.classList.add("item"),r.classList.add("ch__container"),o.classList.add("checkbox"),i.classList.add("checkmark"),a.classList.add("item__edit","commonbtn"),c.classList.add("item__del","commonbtn"),o.setAttribute("type","checkbox"),t.appendChild(r),r.appendChild(o),r.appendChild(i),t.appendChild(a),t.appendChild(c),n.appendChild(t)})),n.appendChild(d),d.appendChild(l),r.appendChild(n)}t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;let i={};!function(){class e{constructor(e){this.title=e,this.items=[]}}const t=[],r=document.querySelector(".content"),n=new e("Default1"),a=new e("Default2");function c(){r.innerHTML="",t.forEach((e=>{o(e.title,e.items)}))}n.items.push("Buy milk and a lot of other great stuff"),a.items.push("say hello world"),a.items.push("another thing"),t.push(n),t.push(a),function(){const r=document.querySelector(".category__input");document.querySelector(".category__btn").addEventListener("click",(n=>{if(!(r.value.length<3)){const n=new e(r.value);return t.push(n),c(),r.value="",n}alert("please enter a valid category name")}))}(),c(),document.querySelectorAll(".additem__btn").forEach((e=>{e.addEventListener("click",(e=>{const r=e.target.parentElement.firstChild.value,n=e.target.previousElementSibling.id;t.forEach((e=>{e.title===n&&(e.items.push(r),console.log(e.items),o(e.title,e.items))}))}))})),i.allCat=t}(),function(){let e=document.querySelectorAll(".card__delete"),t=document.querySelectorAll(".card__edit"),r=document.querySelectorAll(".item__edit"),n=document.querySelectorAll(".item__del");function o(e,t,r){e.forEach((function(e){let n=document.querySelector(`.${t}`).cloneNode(!0).cloneNode(!0);n.style.fill=r,e.appendChild(n)}))}o(e,"icon-cancel-circle","grey"),o(t,"icon-document-edit","grey"),o(r,"icon-document-edit","grey"),o(n,"icon-bin","grey")}()})()})();