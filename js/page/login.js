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

// 软键盘
var windheight = $(window).height();  /*未唤起键盘时当前窗口高度*/
        
$(window).resize(function(){
   var docheight = $(window).height();  /*唤起键盘时当前窗口高度*/        
   if(docheight < windheight){            /*当唤起键盘高度小于未唤起键盘高度时执行*/
      $(".footer").css("position","static");
   }else{
      $(".footer").css("position","absolute");
   }           
});

//屏幕旋转时
$(document).bind('orientationchange',function(){ 
    if(window.orientation==90 || window.orientation==-90){ 
        $('.footer').css('position','static'); 
    }else{ 
        $('.footer').css('position','absolute'); 
    } 
}); 

// 登录
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
