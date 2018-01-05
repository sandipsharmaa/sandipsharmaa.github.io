/* =====================================
=== 		MOBILE NAV JQUERY        ===
======================================== */

$('#burger').click(function(event){
  $(this).toggleClass('open');
  $('nav').animate({height:'toggle'},200);
});


/* =================================
===             POP UP          ====
=================================== */

$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	: 980,
		maxHeight	: 600,
		fitToView	: true,
		width		: '100%',
		height		: '100%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});


/* =================================
===        STICKY HEADER        ====
=================================== */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 125);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


// Show Header on on scroll down
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".ontop");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            header.removeClass('ontop').addClass("StickyNav");
        } else {
            header.removeClass("StickyNav").addClass('ontop');
        }
    });
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
