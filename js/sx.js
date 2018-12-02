var cookiename="jg";
function getRequest(name){
	var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
	var r=window.location.search.substr(1).match(reg);
	if(r!=null)
	{
		return unescape(r[2]);
	}
	else{return null;}
}
function setCookie(name,value)
{
	if(value){
    	var Days = 3;
    	var exp  = new Date();    //new Date("December 31, 9998");
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()
	}
}
function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){return unescape(arr[2]);}
    else {return null;}
}
if (window.attachEvent)
{
     //IE 的事件代码
	window.attachEvent("onload",function(){
		setCookie(cookiename,getRequest(cookiename));
	});
}
else
{
     //其它浏览器的事件代码
	window.addEventListener("load",function(){
		setCookie(cookiename,getRequest(cookiename));
	}, false);
}

