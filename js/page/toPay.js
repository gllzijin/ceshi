$(function(){
	var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var strResult="";
	for(var i=0;i<16;i++){
		strResult += str.charAt(Math.floor(Math.random()*str.length));
	}
	$("#online_id").val(strResult);
	$("#online_idstr").text(strResult);
})
    

function formsub()
{
	puredigit = new RegExp("[^A-Za-z0-9]");
	var ol = $("#online_id").val();
	if(ol==""){
		$.alertable.alert("自定义信息不能为空.");
		return;
	}
	if(ol.length<8){
		$.alertable.alert("自定义信息长度不小于8位.");
		return;
	}
	if (puredigit.test(ol))
	{
		$.alertable.alert("自定义信息请输入字母和数字.");
		return;
	}

	$.ajax({
		type:"post",
		url:"",
		data:{ payForm: $("#payform").val() },
		dataType:"json",
		success:function(data){

		}
	})
}