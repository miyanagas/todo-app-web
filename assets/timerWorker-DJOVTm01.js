(function(){"use strict";let t=null,e=!1,s=0;self.addEventListener("message",a=>{let n=a.data.command;n==="set"?(s=a.data.time,self.postMessage({time:s,isRunning:e})):n==="start"?(t=setInterval(()=>{s-=1,s<=0&&(clearInterval(t),e=!1),self.postMessage({time:s,isRunning:e})},1e3),e=!0):n==="stop"&&(clearInterval(t),e=!1,self.postMessage({time:s,isRunning:e}))},!1)})();
