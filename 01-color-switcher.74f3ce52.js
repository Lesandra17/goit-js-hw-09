let t;const e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{t||(e.disabled=!0,t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3))})),a.addEventListener("click",(()=>{clearInterval(t),e.disabled=!1,t=null}));
//# sourceMappingURL=01-color-switcher.74f3ce52.js.map
