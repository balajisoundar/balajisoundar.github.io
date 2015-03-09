function jsonrender(){
var $jom={};
var redirect;
var nameMap={"classNames":"class"};
var attrMap={"tag":true,"inner":true,"children":true};
$jom.output=function(obj)
{
if(!obj)
{
redirect=1;
console.log("Something wrong with the passed element or element is missing. Returning the output");
}
else
{
redirect=0;
}
}
$jom.render=function(input,ele)
{
if(!input)
return;
this.output(ele);
var output="";
var nameMap={"classNames":"class"};
var attrMap={"tag":true,"inner":true,"children":true};
function renderEngine(obj)
{
if(Array.isArray(obj))
{
for(var i=0;i<obj.length;i++)
renderEngine(obj[i]);
return;
}
output+="<"+obj.tag+" ";
for(attr in obj)
{
var nameHolder="";
if(nameMap[attr])
{
nameHolder=attr;
attr=nameMap[attr];
}
if(attrMap[attr])
continue;
if(nameHolder)
output+=attr+"='"+obj[nameHolder]+"' ";
else
output+=attr+"='"+obj[attr]+"' ";
}
output+=">"+(obj.inner || "");
if(obj.children)
renderEngine(obj.children);
output+="</"+obj.tag+">";
}
renderEngine(input);
if(redirect)
return output;
else
ele.innerHTML=output;
};
$jom.repeat=function(obj,data,ele)
{
if(!obj && !data)
return;
this.output(ele);
output="";
function renderEngineData(obj,data)
{
if(Array.isArray(data))
{
for(var i=0;i<data.length;i++)
renderEngineData(obj,data[i]);
return;
}
output+="<"+obj.tag+" ";
for(attr in obj)
{
var nameHolder="";
if(nameMap[attr])
{
nameHolder=attr;
attr=nameMap[attr];
}
if(attrMap[attr])
continue;
if(nameHolder)
output+=attr+"='"+obj[nameHolder]+"' ";
else
output+=attr+"='"+obj[attr]+"' ";
}
output+=">"+data;
output+="</"+obj.tag+">";
}
renderEngineData(obj,data);
if(redirect)
return output;
else
ele.innerHTML+=output;
}
return $jom;
}
