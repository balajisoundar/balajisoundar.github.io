!function(){!function(){var e='.select-wrapper-div{position:relative;display:inline-block;min-width:150px}.select-p{color:#1f1f1f;border:1px solid rgba(0,0,0,.24);margin:0 0 10px;cursor:pointer;padding:5px 27px 5px 5px;border-radius:3px;background:url(http://www.gregdoerfler.com/images/icons/dropdown_arrow.png) 96% center no-repeat #FFF;box-shadow:1px 1px 3px rgba(0,0,0,.32)}.select-ul{padding:0;margin:0;border-radius:3px;background-color:#FFF;transition:height .2s linear;position:absolute;width:100%;max-height:300px;z-index:99999;color:#1f1f1f}.select-ul-inactive{display:none}.select-ul-active{box-shadow:1px 1px 3px rgba(0,0,0,.32);border:1px solid rgba(0,0,0,.25);display:block}.select-ul:before{content:"";width:1px;height:0;border-left:5px solid rgba(0,0,0,.01);border-right:5px solid transparent;border-bottom:6px solid rgba(0,0,0,.25);float:left;margin-top:-7px;margin-left:46%}.select-options-li{list-style-type:none;margin:0;cursor:pointer;padding:5px;font-size:12px}.select-options-li-selected,.select-options-li:hover{background-color:rgba(226,226,226,.56)}',t=document.createElement("style");t.innerHTML=e,t.type="text/css",document.querySelector("head").appendChild(t)}(),Object.prototype.prettify=function(){var e=document.createElement("div"),t=document.createElement("ul"),i=document.createElement("p"),l=this.childNodes,n=this;this.style.height="0",this.style.width="0",this.style.visibility="hidden";var s=function(){n.value=this.dataset.value,i.innerHTML=this.innerHTML,t.className=" select-ul select-ul-inactive";var e=t.querySelector(".select-options-li-selected");if(e.className="select-options-li",this.className+="  select-options-li-selected","createEvent"in document){var l=document.createEvent("HTMLEvents");l.initEvent("change",!1,!0),n.dispatchEvent(l)}else n.fireEvent("onchange")};i.innerHTML="select an option";for(var o=0;o<l.length;o++)if(1==l[o].nodeType){var c=document.createElement("li");c.setAttribute("data-value",l[o].value),c.innerHTML=l[o].innerHTML,c.className+=" select-options-li",t.appendChild(c),c.addEventListener("click",s),"selected"==l[o].getAttribute("selected")&&(c.className+=" select-options-li-selected",i.innerHTML=l[o].innerHTML)}e.appendChild(i),e.appendChild(t),n.parentNode.insertBefore(e,n),t.offsetHeight>300&&(t.style.overflowY="scroll"),i.onclick=function(){t.className=-1!=t.className.indexOf("select-ul-active")?" select-ul select-ul-inactive":" select-ul select-ul-active"},document.addEventListener("click",function(e){e.target!=i&&(t.className=" select-ul select-ul-inactive")}),e.className+=" select-wrapper-div",i.className+=" select-p",t.className+=" select-ul select-ul-inactive"},window.addEventListener("load",function(){for(var e=document.querySelectorAll("select[data-prettify='']"),t=0;t<e.length;t++)Object.prototype.prettify.call(e[t]);});}();
