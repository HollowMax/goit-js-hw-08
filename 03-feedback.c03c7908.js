function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var o,r,i,f,u,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,u=setTimeout(h,e),l?y(t):f}function T(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=i}function h(){var t=p();if(T(t))return w(t);u=setTimeout(h,function(t){var n=e-(t-a);return s?v(n,i-(t-c)):n}(t))}function w(t){return u=void 0,g&&o?y(t):(o=r=void 0,f)}function O(){var t=p(),n=T(t);if(o=arguments,r=this,a=t,n){if(void 0===u)return j(a);if(s)return u=setTimeout(h,e),y(a)}return void 0===u&&(u=setTimeout(h,e)),f}return e=b(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},O.flush=function(){return void 0===u?f:w(p())},O}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const y={},j=document.querySelector("form"),T=JSON.parse(localStorage.getItem("feedback-form-state"));for(const t in T)j[t].value=T[t];j.addEventListener("input",t(e)((function(t){const{name:e,value:n}=t.target;y[e]=n,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),j.addEventListener("submit",(t=>{t.preventDefault();for(const t in y)console.log(j[t],j[t].value),delete y[t];t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.c03c7908.js.map
