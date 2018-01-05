// JavaScript Document

/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
//function alturaMaxima() {
//  var altura = $(window).height();
//  $(".overlay").css('min-height',altura);
//  }
//
//$(document).ready(function() {
//  alturaMaxima();
//  $(window).bind('resize', alturaMaxima);
//});


/* =================================
===        Scroll Header        ====
=================================== */

$(function() {
            //your code
            var mainbottom = $('.full-screen').offset().top + $('.full-screen').height();

            $(window).on('scroll',function(){

                stop = Math.round($(window).scrollTop());
                if (stop > mainbottom) {
                    $('header').addClass('header-scroll');
                } else {
                    $('header').removeClass('header-scroll');
                }
            });
        });
		

/* =================================
===       NIVO LIGHT BOX       ====
=================================== */	
	
$(document).ready(function(){
   $('a').nivoLightbox({
    effect: 'fade',                             // The effect to use when showing the lightbox
    theme: 'default',                           // The lightbox theme to use
    keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
    clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
    onInit: function(){},                       // Callback when lightbox has loaded
    beforeShowLightbox: function(){},           // Callback before the lightbox is shown
    afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
    beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
    afterHideLightbox: function(){},            // Callback after the lightbox is hidden
    onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
    onNext: function(element){},                // Callback when the lightbox gallery goes to next item
    errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
});
});	

/* =================================
===        SMOOTH SCROLL        ====
=================================== */	

smoothScroll.init({
			speed: 1000,
			easing: 'easeInOutCubic',
			offset: 0,
			updateURL: false,
			callbackBefore: function ( toggle, anchor ) {},
			callbackAfter: function ( toggle, anchor ) {}
		});
		
/* =================================
===         DRIBBBLE API       ====
=================================== */	
	
$(function() {
  $.getJSON('https://api.dribbble.com/v1/users/sandeepsharma/shots?access_token=9323e5fcb389767430bfb6007b642eec9fe5b98386285c2b42ad3cac9b12eb42&callback=?', function(resp) {
    if (resp.data.length > 0) {							
      $.each(resp.data.reverse(), function(i, val) {
        $('#dribbble').prepend(
          '<li class="box"><a href="'+val.html_url+'" target="_blank"><img src="'+val.images.normal+'" /></a></li>'
        );
      });
    }
    else {
      $('#dribbble').append('<li>No shots.</li>');
    }
  });		   							    
});