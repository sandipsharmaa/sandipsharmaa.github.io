// JavaScript Document

  /* =================================
===         CONTACT FORM       ====
=================================== */

$(document).ready(function() {
    $("#submit").click(function() {
        //get input field values
        var user_name       = $('input[name=name]').val();
        var user_mobile    = $('input[name=mobile]').val();
        var user_email      = $('input[name=email]').val();

        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name==""){
            $('input[name=name]').css('border-bottom','0.0625rem solid red');
            proceed = false;
        }
        if(user_mobile==""){
            $('input[name=mobile]').css('border-bottom','0.0625rem solid red' );
            proceed = false;
        }
        if(user_email==""){
            $('input[name=email]').css('border-bottom','0.0625rem solid red');
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed)
        {
            //data to be sent to server
            post_data = {'fullName':user_name, 'userMobile':user_mobile, 'userEmail':user_email};

            //Ajax post data to server
            $.post('contact.php', post_data, function(response){

                //load json data from server and output message
        if(response.type == 'error')
        {
          output = '<div class="error">'+response.text+'</div>';
        }else{
            output = '<div class="success">'+response.text+'</div>';

          //reset values in all input fields
          $('#contactForm input').val('');
          $('#contactForm select').val('');
          $('#contactForm textarea').val('');
        }

        $("#result").hide().html(output).slideDown();
            }, 'json');
        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contactForm input, #contactForm select, #contactForm textarea").keyup(function() {
        $("#contactForm input, #contactForm select, #contactForm textarea").css('border','');
        $("#result").slideUp();
    });

});
