function rwd()
	{
		var ele=document.querySelectorAll("*");
		for(var i=0;i<ele.length;i++)
		{
			if(ele[i].nodeType==1)
			{
				var rect=ele[i].getBoundingClientRect();
				if(rect.right>window.innerWidth)
					ele[i].style.border="2px solid red";
			}
		}
		
	}

window.addEventListener("load",rwd);
window.addEventListener("resize",rwd);
