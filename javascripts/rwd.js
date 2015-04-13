function rwd()
	{
		var ele=document.querySelectorAll("*");
		for(var i=0;i<ele.length;i++)
		{
			if(ele[i].nodeType==1)
			{
				var rect=ele[i].getBoundingClientRect();
				if(rect.right>window.innerWidth)
				{
					ele[i].style.border="2px solid red";
					var text=document.createElement("span");
					text.innerHTML=window.innerWidth+"px";
					text.style.color="red";
					ele[i].appendChild(text);
				}
			}
		}
		
	}

window.addEventListener("load",rwd);
window.addEventListener("resize",rwd);
