function t(){n.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}var e;const n={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};n.btnStart.addEventListener("click",(function(o){n.btnStart.disabled=!0,n.btnStop.disabled=!1,e=setInterval(t,1e3)})),n.btnStop.addEventListener("click",(function(t){n.btnStart.disabled=!1,n.btnStop.disabled=!0,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.e9cec87e.js.map