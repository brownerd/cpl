module.exports=(()=>{const t=document.createElement("div"),e=document.head,o=document.body,n={backgroundColor:"black",border:"none",color:"#0f0",fontFamily:"Trebuchet MS",fontSize:"20px",fontWeight:"bold",margin:0,padding:"10px 20px",position:"absolute",transition:"all .05s ease-in",top:"-100px",left:"-100px",opacity:0,willChange:"top, left, opacity"};!function(e,o){Object.assign(t.style,n)}();const i=document.createElement("style"),l=document.createTextNode("\n    ::selection {\n      background-color: #0f0;\n      color: black;\n    }\n  ");i.appendChild(l),e&&(e.appendChild(i),t.textContent="CPL",o.appendChild(t),document.addEventListener("selectionchange",function(t,e=1e3){let o;return function(){clearTimeout(o),o=setTimeout(()=>t.apply(this,arguments),e)}}(()=>{let e=window.getSelection(),o=e.toString().length,n=e.anchorNode.parentElement;if(n){var{xPosition:i,yPosition:l}=function(t){if(t){let e=0,o=0;for(;t;)e+=t.offsetLeft+t.clientLeft,o+=t.offsetTop+t.clientTop,t=t.offsetParent;return{xPosition:e,yPosition:o}}return}(n);if(o<1)return t.style.top=-100,t.style.left=-100,void(t.style.opacity=0);t.textContent=`CPL: ${o}`,t.style.top=l-t.offsetHeight+"px",t.style.left=i+"px",t.style.opacity=1}})))});