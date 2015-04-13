function rwd()
	{
		if(Number(localStorage.dev))
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
						text.innerHTML=ele[i].offsetWidth+"px";
						text.style.color="white";
						text.style.display="inline-block";
						text.style.backgroundColor="red";
						ele[i].parentNode.insertBefore(text,ele[i]);
					}
				}
			}
		}
		
	}

window.addEventListener("load",rwd);

