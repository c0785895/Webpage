$(document).ready(function(){
	//moving the focus to the fname
	$("#fname").focus();
	
	//testing to see if inputs are valid
	$("#contact_us_form").validate({
		rules:{
			fname:{
				required: true
			}, 
			lname:{
				required: true
			},
			email:{
				required: true,
				email: true
			},
			phone:{
				required: true, 
				phoneUS: true
			}
		}
	});//end of validate
});//end ready