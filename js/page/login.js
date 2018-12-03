$(document).ready(function(){
	$('#loginForm').bootstrapValidator({
		fields:{
			userId:{
				message:'卡号为11位数字',
				validators:{
					notEmpty:{
						message:'卡号不能为空'
					},
					
					regexp:{
						regexp:/^[0-9]{11}$/
					}
				}
			},
			pwd:{
				validators:{
					notEmpty:{
						message:"密码不能为空"
					},
					
					regexp:{
						regexp:/^[a-zA-Z0-9]{6,12}$/,
						message:'密码由6-12位的字母、数字组成'
					}
				}
			}
		}
	})
})

$("#loginForm .btn").unbind('click').click(function(){
	$("#loginForm").bootstrapValidator('validate');
	var cardNum = $("#cardNum").val();
	var pwd = $("#pwd").val();
	var cardnumRe =  /^[a-zA-Z0-9]{7,}$/;
    var pwdRe= /^[a-zA-Z0-9]{6,12}$/;
    if(cardnumRe.test(cardNum) && pwdRe.test(pwd)) {
    	
        // $.ajax({
        //     type:"post",
        //     url:"",
        //     data:{"userId":cardNum,"pwd":pwd},
        //     dataType:"json",
        //     success:function(data){
        //         if(data.ret==0){
        				setCookie("userid",cardNum);
						setCookie("userpwd",pwd);
        				// location.href = "demand.html";
        //         }else{
        //             alert(data.msg);
        //         }
        //     }
        // })
    }
})