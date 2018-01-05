// JavaScript Document

/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura); 
  }

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});
    

/* =================================
===  Pre Loader       ====
=================================== */

//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
	})
//]]>

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
===  owl Carousel Slider       ====
=================================== */

$(document).ready(function() {
var owl = $("#iphone-screens");
owl.owlCarousel({
 	itemsDesktop : [1200,3], //3 items between 1200px and 1024px
	itemsDesktopSmall : [1023,2], //2 items betweem 1023px and 768px
	itemsTablet: [767,3], //2 items between 600 and 0	
});

var owl = $("#reviews");
owl.owlCarousel({
items : 2,
itemsDesktop : [1200,2], //2 items between 1200px and 1024px
itemsDesktopSmall : [1023,1], //2 items betweem 1023px and 768px
itemsTablet: [767,1], //2 items between 600 and 0	

});

var owl = $("#team-members");
owl.owlCarousel({
items : 3,
itemsDesktop : [1200,3], //3 items between 1200px and 1024px
itemsDesktopSmall : [1023,2], //2 items betweem 1023px and 768px
itemsTablet: [767,1], //2 items between 600 and 0	
 });

});


/* =================================
===  WOW ANIMATION             ====
=================================== */

wow = new WOW(
  {
    mobile: false
  });
wow.init();


/* =================================
===        One Page Nav         ====
=================================== */

$(document).ready(function() {
	$('#nav').onePageNav();
	
});

$(document).ready(function() {
	$('#nav-footer').onePageNav();
});


$(window).resize(function(){
       if ($(window).width() <= 480) {   
	   $('#nav').onePageNav({
			scrollOffset: -59
		});
	 }
});



/* =================================
===        Smooth Scroll       ====
=================================== */

smoothScroll.init({
			speed: 750,
			easing: 'easeInOutCubic',
			offset: 0,
			updateURL: false,
			callbackBefore: function ( toggle, anchor ) {},
			callbackAfter: function ( toggle, anchor ) {}
		});
		

/* =================================
===        Jquery Stellar       ====
=================================== */

$(function(){
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});
});


/* =================================
===  MAILCHIMP                 ====
=================================== */

$('.mailchimp').ajaxChimp({
    callback: mailchimpCallback,
    url: "http://dribbble.us8.list-manage.com/subscribe/post?u=1b6cddc8980598f73f6737b05&amp;id=b97c6715be" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
});

function mailchimpCallback(resp) {
     if (resp.result === 'success') {
        $('.subscription-success').html('<i class="fa-check"></i> ' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);
        
    } else if(resp.result === 'error') {
        $('.subscription-error').html('<i class="fa-times"></i> ' + resp.msg).fadeIn(1000);
    }  
}

/* =================================================
===             HEADER AREA DIV POSITIONS       ====
==================================================== */
$(window).resize(function(){
       if ($(window).width() <= 1023) {   
           $(".head-texts").insertAfter(".head-media");
       }
});

$(window).resize(function(){
       if ($(window).width() >= 1023) {   
           $(".head-media").insertAfter(".head-texts");
       }
});

$(window).resize(function(){
       if ($(window).width() <= 480) {   
	   	  $('.full-screen').removeAttr('class').attr('class', 'color-overlay');
       }
});


/* =================================================
===              RESPONSIVE NAVIGATION          ====
==================================================== */
var menuRight = document.getElementById( 'nav' ),
	linke = document.getElementById( 'Features' ),
	showRightPush = document.getElementById( 'navToggle' ),
	body = document.body;
	
	showRightPush.onclick = function() {
			classie.toggle( this, 'active' );
			classie.toggle( body, 'res-nav-push-toleft' );
			classie.toggle( menuRight, 'res-nav-open' );
			disableOther( 'showRightPush' );
	};
	
$('#nav').click(function () {
    $('.res-nav-right').toggleClass('res-nav-open');
});
	
$('#navToggle').click(function () {
    $('.res-nav-push-fix').toggleClass('res-nav-push-fix-left');
});

$('#nav').click(function () {
    $('.res-nav-push-fix').toggleClass('res-nav-push-fix-left');
});
	
$('#nav').click(function () {
    $('.res-nav-push').toggleClass('res-nav-push-toleft');
});

/* =================================
===  IE10 ON WINDOWS 8 FIX      ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}