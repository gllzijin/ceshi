$(".queryNext").click(function(){
	var cardNum = $("#cardNum").val()
	if( cardNum == ""){
		$.alertable.alert("查询信息不能为空！")
	}else{
		$.ajax({
			type:"post",
			url:"",
			data:{cardNum:cardNum},
			dataType:"json",
			success:function(data){
				if(查不到){
					$.alertable.alert("查询结果为空，请确保您输入的查询字符串正确无误!");
				}else{
					
				}
			}
		})
		
	}
	
})
