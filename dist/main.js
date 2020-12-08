(()=>{"use strict";var e,r,t,n={750:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(645),o=t.n(n)()((function(e){return e[1]}));o.push([e.id,'.header{display:flex;margin:2rem 0 2rem 0}.header__input,.header__input:focus{flex:0 1 40rem;height:5rem;padding:2rem;border-top-left-radius:5px;border-bottom-left-radius:5px;border:1px solid #c2c2c2;border-right:0;outline:none}.header__input::placeholder,.header__input:focus::placeholder{text-transform:uppercase}.header__btn{display:inline-flex;flex:0 0 15rem;justify-content:center;align-items:center;height:5rem;background-color:#f53333;border-top-right-radius:5px;border-bottom-right-radius:5px;border:1px solid #c2c2c2;border-left:0;text-decoration:none;color:#fff;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif}.category{width:100%;display:flex;justify-content:flex-end}.category__input{flex:0 0 40rem;height:5rem;padding:2rem;border-top-left-radius:5px;border-bottom-left-radius:5px;border:1px solid #c2c2c2;border-right:0;outline:none}.category__btn{display:inline-flex;padding:1rem;justify-content:center;align-items:center;height:5rem;background-color:#f53333;border-top-right-radius:5px;border-bottom-right-radius:5px;border:1px solid #c2c2c2;border-left:0;text-decoration:none;color:#fff;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif}.content{display:flex;justify-content:center;flex-wrap:wrap;margin-top:5rem}.card{border:1px solid #ddd;flex:0 0 45rem;background-color:#f3f3f3;overflow:hidden;border-radius:5px;margin:2rem}.card__title{width:100%;height:5rem;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;text-align:center;background-color:#add8e6;display:flex;justify-content:center;align-items:center;position:relative}.card__delete{top:50%;transform:translateY(-50%);right:2%;justify-content:center;align-items:center;background-color:#f53333}.card__add{background-color:#aab3c2;display:inline-flex;width:100%;height:5rem;align-items:center;justify-content:center}.item{margin:1rem;padding:1rem 2rem;display:flex;align-items:center;background-color:#fff;border-radius:5px;border:1px solid #ddd;position:relative;padding-bottom:4rem}.item__edit{background-color:blue;bottom:5px;right:4rem}.item__del{background-color:violet;bottom:5px;right:5px}.item__checkbox{margin:2rem}.ch__container{display:block;position:relative;padding-left:5rem;margin-bottom:1rem;cursor:pointer;font-size:2rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ch__container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:50%;transform:translateY(-50%);left:0;height:3.5rem;width:3.5rem;background-color:#eee}.ch__container:hover input~.checkmark{background-color:#ccc}.ch__container input:checked~.checkmark{background-color:#f51717}.checkmark:after{content:"";position:absolute;display:none}.ch__container input:checked~.checkmark:after{display:block}.ch__container .checkmark:after{left:1rem;top:0;width:1rem;height:2.5rem;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}*{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%}body{background-color:#e6e8e7;font-size:16px;font-size:1.6rem;line-height:1.5;font-family:Arial,Helvetica,sans-serif}.container{max-width:120rem;height:100vh;margin:0 auto}.commonbtn{position:absolute;display:inline-flex;width:3rem;height:3rem;border-radius:50%}',""]);const i=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),r.push(d))}},r}},379:(e,r,t)=>{var n,o=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}(),i=[];function a(e){for(var r=-1,t=0;t<i.length;t++)if(i[t].identifier===e){r=t;break}return r}function c(e,r){for(var t={},n=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var f=a(l),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:l,updater:h(u,r),references:1}),n.push(l)}return n}function d(e){var r=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=t.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){r.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var s,l=(s=[],function(e,r){return s[e]=r,s.filter(Boolean).join("\n")});function f(e,r,t,n){var o=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function u(e,r,t){var n=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function h(e,r){var t,n,o;if(r.singleton){var i=m++;t=p||(p=d(r)),n=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=d(r),n=u.bind(null,t,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var t=c(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<t.length;n++){var o=a(t[n]);i[o].references--}for(var d=c(e,r),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},o={};function i(e){if(o[e])return o[e].exports;var r=o[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e=i(379),r=i.n(e),t=i(750),r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals})();