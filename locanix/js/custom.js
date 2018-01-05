$(document).ready(function(){
	 $('#filter-close').on("click",function(){
		 $(".filter-pop").slideUp("fast");
		 });
});

/* =================================
=== 		 Pre Loader       ====
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
=== 		 DROPDOWN       ====
=================================== */

function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
}

$(function () {

    var dd = new DropDown($('#vehicles'));
    var dd = new DropDown($('#date'));
    var dd = new DropDown($('#graph'));
    var dd = new DropDown($('#sort'));

    $(document).click(function () {
        // all dropdowns
        $('.ddmain').removeClass('active');
    });

});

/* =================================
=== 		 RANGE SLIDER       ====
=================================== */

/* ======== D I S T A N C E ======== */

$("#distance").noUiSlider({
    start: [0, 200],
    animate: true,
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 200
    },

    format: wNumb({
        decimals: 0,
        thousand: '.',
    })

});

$('#distance').Link('lower').to($('#distance-lower'));
$('#distance').Link('upper').to($('#distance-upper'));

$("#distance").Link('lower').to('-inline-<div class="tooltip"></div>', function (value) {
    $(this).html(
        '<span>' + value + '</span>'
    );
});


$("#distance").Link('upper').to('-inline-<div class="tooltip"></div>', function (value) {
    $(this).html(
        '<span>' + value + '</span>'
    );
});


/* ======== D U R A T I O N ======== */

$("#duration").noUiSlider({
    start: [0, 195],
    animate: true,
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 195
    },

    format: wNumb({
        decimals: 0,
        thousand: '.',
    })

});

$('#duration').Link('lower').to($('#duration-lower'));
$('#duration').Link('upper').to($('#duration-upper'));

$("#duration").Link('lower').to('-inline-<div class="tooltip"></div>', function (value) {
    $(this).html(
        '<span>' + value + '</span>'
    );
});


$("#duration").Link('upper').to('-inline-<div class="tooltip"></div>', function (value) {
    $(this).html(
        '<span>' + value + '</span>'
    );
});

/* ======== F U E L ======== */

$("#fuel").noUiSlider({
    start: [0, 50],
    animate: true,
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 50
    },

    format: wNumb({
        decimals: 0,
        thousand: '.',
        prefix: '$',
    })

});

$('#fuel').Link('lower').to($('#fuel-lower'));
$('#fuel').Link('upper').to($('#fuel-upper'));


$("#fuel").Link('lower').to('-inline-<div class="tooltip"></div>', function (value) {
    $(this).html(
        '<span>' + value + '</span>'
    );
});


$("#fuel").Link('upper').to('-inline-<div class="tooltip"></div>', function (value) {
    $(this).html(
        '<span>' + value + '</span>'
    );
});


/* ======== T I M E ======== */

$("#time").noUiSlider({
    start: [0, 24],
    animate: true,
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 24
    },

    format: wNumb({
        decimals: 0,
        thousand: '.',
        postfix: 'H',
    })

});

$('#time').Link('lower').to($('#time-lower'));
$('#time').Link('upper').to($('#time-upper'));

$("#time").Link('lower').to('-inline-<div class="tooltip"></div>', function (value) {
    $(this).html(
        '<span>' + value + '</span>'
    );
});


$("#time").Link('upper').to('-inline-<div class="tooltip"></div>', function (value) {
    $(this).html(
        '<span>' + value + '</span>'
    );
});

/* =================================
=== 	 CSS CLASS TOGGLE       ====
=================================== */

$(".sort-swap").click(function(){
  $(".sort-swap").toggleClass("up");
}); 


$("nav > .mob").click(function(){
  $("nav > .push-right").toggleClass("appear");
}); 

$("nav > .mob").click(function(){
  $("nav > .mob").toggleClass("toggle-nav");
}); 



$(".calendar-icon").click(function(){
  $(".wide-container").toggleClass("float-right");
  $(".calendar-icon").toggleClass("trip-icon");
}); 


/* =================================
=== 	 FILTER SHOW HIDE       ====
=================================== */

$(document).ready(function() {
    $('#filter-box').toggle(
        function() {
            $('.filter-pop').slideDown("fast");
        },
        function() {
            $('.filter-pop').slideUp("fast");
        }
    );	
});

/* =================================
=== 		 CHART SLIDER       ====
=================================== */

var margin = {
        top: 30,
        right: 10,
        bottom: 30,
        left: 0
    },
    width = 860 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

var formatPercent = d3.format("0%");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .23);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
        return "<b>" + d.letter + "</b> <br /> <span style=''>" + d.frequency + "</span>";
    })

var svg = d3.select("body .chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.attr("preserveAspectRatio", "xMinYMin meet")
	.attr("class", "chart-content")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

d3.tsv("data.tsv", type, function (error, data) {
    x.domain(data.map(function (d) {
        return d.letter;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.frequency;
    })]);
	
	svg.append("g")
        .attr("class", "lines")
		.append("g")
		.attr("class", "ticker")
		.attr("opacity", "1")
		.attr("transform", "translate(0,139)")
		.append("line")
		.attr("x2", "2620")
		.attr("y2", "0")
		
	svg.append("g")
        .attr("class", "lines")
		.append("g")
		.attr("class", "ticking")
		.attr("opacity", "1")
		.attr("transform", "translate(0,119)")
		.append("line")
		.attr("x2", "2620")
		.attr("y2", "0")
		
	svg.append("g")
	.attr("class", "lines")
	.append("g")
	.attr("class", "ticking")
	.attr("opacity", "1")
	.attr("transform", "translate(0,99)")
	.append("line")
	.attr("x2", "2620")
	.attr("y2", "0")
		
	svg.append("g")
	.attr("class", "lines")
	.append("g")
	.attr("class", "ticking")
	.attr("opacity", "1")
	.attr("transform", "translate(0,79)")
	.append("line")
	.attr("x2", "2620")
	.attr("y2", "0")	
	
	svg.append("g")
	.attr("class", "lines")
	.append("g")
	.attr("class", "ticking")
	.attr("opacity", "1")
	.attr("transform", "translate(0,59)")
	.append("line")
	.attr("x2", "2620")
	.attr("y2", "0")
	
	svg.append("g")
	.attr("class", "lines")
	.append("g")
	.attr("class", "ticking")
	.attr("opacity", "1")
	.attr("transform", "translate(0,39)")
	.append("line")
	.attr("x2", "2620")
	.attr("y2", "0")
	
	svg.append("g")
	.attr("class", "lines")
	.append("g")
	.attr("class", "ticking")
	.attr("opacity", "1")
	.attr("transform", "translate(0,19)")
	.append("line")
	.attr("x2", "2620")
	.attr("y2", "0")
	
	svg.append("g")
	.attr("class", "lines")
	.append("g")
	.attr("class", "ticking")
	.attr("opacity", "1")
	.attr("transform", "translate(0,0)")
	.append("line")
	.attr("x2", "2620")
	.attr("y2", "0")
	


    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
    //.text("Frequency");

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.letter);
        })
    //.attr("rx", "10")
    .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d.frequency);
        })
        .attr("height", function (d) {
            return height - y(d.frequency);
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)


    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
		
	
			
});

function type(d) {
    d.frequency = +d.frequency;
    return d;
}



