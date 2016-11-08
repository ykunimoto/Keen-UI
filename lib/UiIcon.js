/*!
 * Keen UI v0.8.9 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2016 Josephus Paye II
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.UiIcon=n():(e.Keen=e.Keen||{},e.Keen.UiIcon=n())}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,n,t){Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=312)}({0:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},1:function(e,n){function t(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=c[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],n))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(u(r.parts[i],n));c[r.id]={id:r.id,refs:1,parts:s}}}}function r(e){for(var n=[],t={},r=0;r<e.length;r++){var o=e[r],i=o[0],s=o[1],u=o[2],a=o[3],f={css:s,media:u,sourceMap:a};t[i]?t[i].parts.push(f):n.push(t[i]={id:i,parts:[f]})}return n}function o(e,n){var t=p(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),m.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function i(e){e.parentNode.removeChild(e);var n=m.indexOf(e);n>=0&&m.splice(n,1)}function s(e){var n=document.createElement("style");return n.type="text/css",o(e,n),n}function u(e,n){var t,r,o;if(n.singleton){var u=v++;t=h||(h=s(n)),r=a.bind(null,t,u,!1),o=a.bind(null,t,u,!0)}else t=s(n),r=f.bind(null,t),o=function(){i(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}function a(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function f(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var c={},l=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},d=l(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=l(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,m=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},"undefined"==typeof n.singleton&&(n.singleton=d()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var o=r(e);return t(o,n),function(e){for(var i=[],s=0;s<o.length;s++){var u=o[s],a=c[u.id];a.refs--,i.push(a)}if(e){var f=r(e);t(f,n)}for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var y=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},18:function(e,n,t){var r,o;t(40),r=t(37);var i=t(39);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r["default"]),"function"==typeof o&&(o=o.options),o.__file="C:\\C-Code\\Keen-UI\\src\\UiIcon.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o.functional&&console.error("[vue-loader] UiIcon.vue: functional components are not supported and should be defined in plain js files using render functions."),e.exports=r},312:function(e,n,t){e.exports=t(18)},37:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={name:"ui-icon",props:{icon:{type:String,required:!0},removeText:{type:Boolean,"default":!1}}}},38:function(e,n,t){n=e.exports=t(0)(),n.push([e.i,"\n.ui-icon {\n  font-size: 24px;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  cursor: inherit;\n  vertical-align: middle;\n}\n",""])},39:function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _h("i",{staticClass:"ui-icon material-icons","class":[icon],attrs:{"aria-hidden":"true"},domProps:{textContent:_s(removeText?null:icon)}})},staticRenderFns:[]}},40:function(e,n,t){var r=t(38);"string"==typeof r&&(r=[[e.i,r,""]]);t(1)(r,{});r.locals&&(e.exports=r.locals)}})});