import"./assets/styles-92844b79.js";import{i as r}from"./assets/vendor-b2e127cd.js";const s=document.querySelector(".form");s.addEventListener("submit",u);function u(i){i.preventDefault();let t;s.elements.state.value==="fulfilled"?t=!0:t=!1,m(t,s.elements.delay.value).then(({delay:e})=>{r.success({position:"topRight",messageColor:"brown",message:`✅ Fulfilled promise in ${e}ms`,timeout:3e3})}).catch(({delay:e})=>{r.error({position:"topRight",messageColor:"brown",message:`❌ Rejected promise in ${e}ms`,timeout:3e3})});function m(e,o){return new Promise((n,l)=>{setTimeout(()=>{e?n({delay:o}):l({delay:o})},o)})}i.currentTarget.reset()}
//# sourceMappingURL=commonHelpers2.js.map