// JavaScript Document

/*===================================
	SUPERSIZED
=====================================*/

/*jQuery(function($){
				
$.supersized({
	// Functionality
	slide_interval          :   3000,		// Length between transitions
	transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	700,		// Speed of transition
											   
	// Components							
	slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides 					:  	[
{image : 'assets/img/background.jpg', title : 'Background1', thumb : 'assets/img/background.jpg', url : 'http://www.google.com/'},
{image : 'assets/img/background2.jpg', title : 'Background2', thumb : 'assets/img/background.jpg', url : 'http://www.yahoo.com'}
		]
					
				});
		    });
*/


$('#background, body').vegas({
    slides: [
		{ src: 'assets/img/background.jpg', url: 'http://www.google.com/'},
        { src: 'assets/img/background2.jpg', url: 'http://www.google.com/'},
		{ src: 'assets/img/background.jpg', url: 'http://www.yahoo.com/',  video:["assets/video/video.mp4","assets/video/video.webm","assets/video/video.ogv"] },
    ]
});	    
/*===================================
	F I L E  D R O P
=====================================*/			
      // Tell FileDrop we can deal with iframe uploads using this URL:
      var options = {iframe: {url: '../vendor/filedrop/upload.php'}};
      // Attach FileDrop to an area ('zone' is an ID but you can also give a DOM node):
      var zone = new FileDrop('zone', options);

      // Do something when a user chooses or drops a file:
      zone.event('send', function (files) {
        // Depending on browser support files (FileList) might contain multiple items.
        files.each(function (file) {
          // React on successful AJAX upload:
          file.event('done', function (xhr) {
            // 'this' here points to fd.File instance that has triggered the event.
            alert('Done uploading ' + this.name + ', response:\n\n' + xhr.responseText);
          });

          // Send the file:
          file.sendTo('../vendor/filedrop/upload.php');
        });
      });

      // React on successful iframe fallback upload (this is separate mechanism
      // from proper AJAX upload hence another handler):
      zone.event('iframeDone', function (xhr) {
        alert('Done uploading via <iframe>, response:\n\n' + xhr.responseText);
      });

      // A bit of sugar - toggling multiple selection:
      fd.addEvent(fd.byID('multiple'), 'change', function (e) {
        zone.multiple(e.currentTarget || e.srcElement.checked);
      });
	  
	  
/*===================================
	S E L E C T I Z E
=====================================*/	

			var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
                  '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

$('#friends-email').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    labelField: 'name',
    searchField: ['name', 'email'],
    options: [
        {email: 'hello@sandip.io', name: 'Sandeep'},
        {email: 'hi@required.io', name: 'Nina'},
        {email: 'hi@dropper.io', name: 'Hakan'}
    ],
    render: {
        item: function(item, escape) {
            return '<div>' +
                (item.name ? '<span class="name" style="color:#8c8c8c; padding-right:3px;">' + escape(item.name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
            '</div>';
        },
        option: function(item, escape) {
            var label = item.name || item.email;
            var caption = item.name ? item.email : null;
            return '<div>' +
                '<span class="label" style="color:#8c8c8c; padding-right:3px;">' + escape(label) + '</span>' +
                (caption ? '<span class="caption" style="color:#b3b3b3;">' + escape(caption) + '</span>' : '') +
            '</div>';
        }
    },
    createFilter: function(input) {
        var match, regex;

        // email@address.com
        regex = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        match = input.match(regex);
        if (match) return !this.options.hasOwnProperty(match[0]);

        // name <email@address.com>
        regex = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        match = input.match(regex);
        if (match) return !this.options.hasOwnProperty(match[2]);

        return false;
    },
    create: function(input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return {email: input};
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            return {
                email : match[2],
                name  : $.trim(match[1])
            };
        }
        alert('Invalid email address.');
        return false;
    }
});

/*===================================
	P I E C O N
=====================================*/	

(function(){
    var count = 0;
    Piecon.setOptions({fallback: 'force', color: '#34a5dd', background: '#e5e5e5', shadow: '#fff',});
    var i = setInterval(function(){
      if (++count > 100) { Piecon.reset(); clearInterval(i); return false; }
      Piecon.setProgress(count);
    }, 250);
  })();
  
/*===================================
	V E X
=====================================*/	
vex.defaultOptions.className = 'vex-theme-os';
$('.login').click(function(){
	vex.dialog.open({
		message: 'Enter your username and password:',
		input: '' +
			'<input name="username" type="text" placeholder="Username" required />' +
			'<input name="password" type="password" placeholder="Password" required />' +
		'',
		buttons: [
			$.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
			$.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
		],
		callback: function (data) {
			$('.demo-result-login').show().html('' +
				'<h4>Result</h4>' +
				'<p>' +
					'Username: <b>' + data.username + '</b><br/>' +
					'Password: <b>' + data.password + '</b>' +
				'</p>' +
			'')
		}
	});
});