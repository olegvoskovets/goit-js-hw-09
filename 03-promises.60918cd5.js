var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector(".form");r.addEventListener("submit",(function(e){if(e.preventDefault(),""===l.delay||""===l.step||""===l.amount)return;for(let e=0;e<l.amount;e++){let n=l.delay+e*l.step;u(e+1,n).then(a).catch(d)}})),r.addEventListener("input",(function(e){l[e.target.name]=Number(e.target.value)}));const l={delay:null,step:null,amount:null};function u(e,n){return new Promise(((t,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function a(e){i.Notify.success(` ✅ Fulfilled promise ${e.position} in ${e.delay}ms`)}function d(e){i.Notify.failure(` ❌  Rejected promise ${e.position} in ${e.delay}ms`)}
//# sourceMappingURL=03-promises.60918cd5.js.map
