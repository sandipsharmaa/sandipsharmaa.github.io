// JavaScript Document

  /* =================================
===         CONTACT FORM       ====
=================================== */

$(document).ready(function() {
    $("#submit").click(function() { 
        //get input field values
        var user_name       = $('input[name=name]').val(); 
        var user_email      = $('input[name=email]').val();
        var user_company    = $('input[name=company]').val();
		var user_phone       = $('input[name=phone]').val(); 
        var user_budget      = $('select[name=budget]').val();
        var user_description    = $('textarea[name=description]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name==""){ 
            $('input[name=name]').css('border-bottom','0.0625rem solid red'); 
            proceed = false;
        }
        if(user_email==""){ 
            $('input[name=email]').css('border-bottom','0.0625rem solid red' ); 
            proceed = false;
        }
		if(user_company==""){ 
            $('input[name=company]').css('border-bottom','0.0625rem solid red'); 
            proceed = false;
        }
        if(user_phone==""){ 
            $('input[name=phone]').css('border-bottom','0.0625rem solid red' ); 
            proceed = false;
        }
		if(user_budget==""){ 
            $('select[name=budget]').css('border-bottom','0.0625rem solid red' ); 
            proceed = false;
        }
        if(user_description=="") {  
            $('textarea[name=description]').css('border-bottom','0.0625rem solid red'); 
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed) 
        {
            //data to be sent to server
            post_data = {'userName':user_name, 'userEmail':user_email, 'userCompany':user_company, 'userPhone':user_phone, 'userBudget':user_budget, 'userDescription':user_description};
            
            //Ajax post data to server
            $.post('contact.php', post_data, function(response){  

                //load json data from server and output message     
				if(response.type == 'error')
				{
					output = '<div class="error">'+response.text+'</div>';
				}else{
				    output = '<div class="success">'+response.text+'</div>';
					
					//reset values in all input fields
					$('#contact_form input').val(''); 
					$('#contact_form select').val(''); 
					$('#contact_form textarea').val(''); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
			
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form select, #contact_form textarea").keyup(function() { 
        $("#contact_form input, #contact_form select, #contact_form textarea").css('border',''); 
        $("#result").slideUp();
    });
    
});