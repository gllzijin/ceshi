$(document).ready(function(){
	$("#city_1").citySelect({ 
		prov:"学生来源",
		nodata:"none"
    });	
	
	$('#informationForm').bootstrapValidator({
		live: 'disabled',
		fields:{
			name:{
				message:'姓名不能为空',
				validators:{
					notEmpty:{
						message:'请填写姓名！'
					}
				}
			},
			sex:{
				validators:{
					notEmpty:{
						message:"请选择性别！"
					},
					callback:{
						message:'请选择性别!',
						callback:function(value,validator){
							if(value == 0){
								return false;
							}else{
								return true;
							}
						}
					}
				}
			},
			param_province:{
				validators:{
					notEmpty:{
						message:"请选择学生来源！"
					},
					callback:{
						message:'请选择学生来源!',
						callback:function(value,validator){
							if(value == '学生来源'){
								return false;
							}else{
								return true;
							}
						}
					}
				}
			},
			schoolName:{
				message:'学校名称不能为空！',
				validators:{
					notEmpty:{
						message:'请填写学校名称！'
					}
				}
			}
		}
	})
})

$("#start").unbind('click').click(function(){
	$("#informationForm").bootstrapValidator('validate');
	var name = $("#name").val();
	var sex = $("#sex").val();
	var param_province = $("#param_province").val();
	var param_city = $("#param_city").val();
	var schoolName = $("#schoolName").val();
	if(!name && !sex && !schoolName && !param_city){
		// ajax请求


	}
})