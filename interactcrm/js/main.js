/*--- OWL CAROUSEL ----*/

$(document).ready(function() {
 
  $("#customers").owlCarousel({
	  
	    items : 6,
/*		itemsDesktop : [1199,5],
		itemsDesktopSmall : [980,5],
		itemsTablet: [768,4],
		itemsTabletSmall: false,
		itemsMobile : [479,1],*/
		itemsCustom : [
		[1200,6],
		[1199,5],
		[980,5],
		[768,4],
        [480, 3],
		[320, 2],
      ],
		
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
		// Navigation
		navigation : true,
		navigationText : ["&nbsp;","&nbsp;"],
		rewindNav : true,
		scrollPerPage : true,
		//Pagination
		pagination : false,
		paginationNumbers: false,
	    // Responsive 
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window,
	  
	  });
  
 
});



/* HEADER EFFECT */

// Hide Header on on scroll down
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
}, 250);


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


/* RESPONSIVE NAV */

(function($) {
	$(document).ready(function() {
		$.slidebars();
	});
}) (jQuery);

/* SCROLL LINK */

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#link").click(function() {
   scrollToAnchor('contact');
});

/* YOUTUBE RESPONSIVE */
// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $(".featherlight-content");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();