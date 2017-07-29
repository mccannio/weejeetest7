/*

  Author: DeMustang
  Template: Venture App
  Version: 1.0
  URL: http://themeforest.net/user/demustang


*/
$(document).ready(function () { // Document ready
	"use strict";

	/* ==========================
	   PRE-LOADER
	=============================*/

	$(window).load(function () {
		// will fade loading animation
		$("#object").delay(600).fadeOut(300);
		// will fade loading background					
		$("#loading").delay(1000).fadeOut(500);
	});

	/* ==========================
	   Anchor Scroll
	=============================*/
	$(function () {
		$('a.scroll').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 75
			}, 2000, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	$(function () {
		$('.nav a').on('click', function () {
			if ($('.navbar-toggle').css('display') != 'none') {
				$(".navbar-toggle").trigger("click");
			}
		});
	});
	/* ==========================
	   Owl-Carousel
	=============================*/

	$('.mobile-carousel').owlCarousel({
		animateOut: 'fadeOut',
    	animateIn: 'fadeInUp',
		loop: true,
		items: 1,
		dots: false,
		autoplay:true
	});


	$('.screen-shots').owlCarousel({
		loop: true,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	$('.client-review').owlCarousel({
		loop: true,
		items: 1,
		dots: true
	});
	
	/* ==========================
	   Parallax Hero Background 
	=============================*/
	
      var distort = new logosDistort(
        document.getElementById('parallax-hero'),
        {perspectiveMulti: 1.3}
      );


	/* ==========================
	   Sticky Nav
	=============================*/
	var mn = $(".navigation");
	var mns = "navigation-scrolled";
	var hdr = $('header').height();

	$(window).scroll(function () {
		if ($(this).scrollTop() > hdr) {
			mn.addClass(mns);
		} else {
			mn.removeClass(mns);
		}
	});

	/* =====================================
	  		VIDEO POP UP
	========================================*/

	$(document).ready(function () {

		/* default settings */
		$('.venobox').venobox();


		/* custom settings */
		$('.venobox_custom').venobox({
			framewidth: '400px', // default: ''
			frameheight: '300px', // default: ''
			border: '10px', // default: '0'
			bgcolor: '#5dff5e', // default: '#fff'
			titleattr: 'data-title', // default: 'title'
			numeratio: true, // default: false
			infinigall: true // default: false
		});

		/* auto-open #firstlink on page load */
		$("#firstlink").venobox().trigger('click');
	});

	/* ==========================
	   Animated Input
	=============================*/
	
			(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();
	
	/* ==========================
	   Fullscreen Navigation
	=============================*/
	
	
	(function () {
		var triggerBttn = document.getElementById('trigger-overlay'),
			overlay = document.querySelector('div.overlay'),
			closeBttn = overlay.querySelector('button.overlay-close');
		var transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
			support = {
				transitions: Modernizr.csstransitions
			};

		function toggleOverlay() {
			if (classie.has(overlay, 'open')) {
				classie.remove(overlay, 'open');
				classie.add(overlay, 'close');
				var onEndTransitionFn = function (ev) {
					if (support.transitions) {
						if (ev.propertyName !== 'visibility') return;
						this.removeEventListener(transEndEventName, onEndTransitionFn);
					}
					classie.remove(overlay, 'close');
				};
				if (support.transitions) {
					overlay.addEventListener(transEndEventName, onEndTransitionFn);
				} else {
					onEndTransitionFn();
				}
			} else if (!classie.has(overlay, 'close')) {
				classie.add(overlay, 'open');
			}
		}

		triggerBttn.addEventListener('click', toggleOverlay);
		closeBttn.addEventListener('click', toggleOverlay);
	})();
	/* =====================================
	   SUBSCRIBE ( NEWSLETTER SUBSCRIPTION )
	========================================*/



	$('#subscribe').validate({

		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: "POST",
				data: $(form).serialize(),
				url: "inc/subscribe.php",
				success: function () {
					// alert('success');
					$('#newsletter-error').slideUp();
					$('#newsletter-success').slideDown();
				},
				error: function () {
					//alert('error');
					$('#newsletter-success').slideUp();
					$('#newsletter-error').slideDown();
				}
			});
		},
		invalidHandler: function () {
			$('#newsletter-success').slideUp();
			$("#newsletter-error").slideDown();
		},
		errorPlacement: function (error, element) {
			$('#subscribe_error').html(error.text());
		}

	});


	/* =====================================
	   SIGNUP ( FORM SUBMISSION )
	========================================*/


	$('#signup').validate({
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: "POST",
				data: $(form).serialize(),
				url: "inc/signup.php",
				success: function () {
					// alert('success');
					$('#signup-error').slideUp();
					$('#signup-success').slideDown();
				},
				error: function () {
					//alert('error');
					$('#signup-success').slideUp();
					$('#signup-error').slideDown();
				}
			});
		},
		invalidHandler: function () {
			$('#signup-success').slideUp();
			$("#signup-error").slideDown();
		},
		errorPlacement: function (error, element) {
			$('#signup_error').html(error.text());
		}
	});

	/* ==========================
	   Animated Navigation Button
	=============================*/
	var forEach = function (t, o, r) {
		if ("[object Object]" === Object.prototype.toString.call(t))
			for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
		else
			for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
	};

	var hamburgers = document.querySelectorAll(".hamburger");
	if (hamburgers.length > 0) {
		forEach(hamburgers, function (hamburger) {
			hamburger.addEventListener("click", function () {
				this.classList.toggle("is-active");
			}, false);
		});
	}


	/* ==========================
		   Custom Google Map
		=============================*/



	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.6700, -73.9400), // New York

			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [{
					"saturation": 36
				}, {
					"color": "#333333"
				}, {
					"lightness": 40
				}]
			}, {
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{
					"lightness": 20
				}, {
					"color": "#fe7210"
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 17
				}, {
					"weight": 1.2
				}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
					"lightness": 20
				}]
			}, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}, {
					"lightness": 21
				}]
			}, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#dedede"
				}, {
					"lightness": 21
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 29
				}, {
					"weight": 0.2
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 18
				}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f2f2f2"
				}, {
					"lightness": 19
				}]
			}, {
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#e9e9e9"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#fe7210"
				}]
			}, {
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#ffffff"
				}]
			}]
		};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6700, -73.9400),
			map: map,
			title: 'Snazzy!'
		});
	}

	/* =====================================
	   ScrollReveal
	========================================*/
	window.sr = ScrollReveal();

	sr.reveal('.reveal-bottom', {
		origin: 'bottom',
		distance: '20px',
		duration: 800,
		delay: 200,
		opacity: 1,
		scale: 0,
		easing: 'linear',
		reset: true
	});

	sr.reveal('.reveal-top', {
		origin: 'top',
		distance: '20px',
		duration: 800,
		delay: 200,
		opacity: 1,
		scale: 0,
		easing: 'linear',
		reset: true
	});

	sr.reveal('.reveal-left', {
		origin: 'left',
		distance: '20px',
		duration: 800,
		delay: 200,
		opacity: 1,
		scale: 0,
		easing: 'linear',
		reset: true
	});

	sr.reveal('.reveal-right', {
		origin: 'right',
		distance: '20px',
		duration: 800,
		delay: 200,
		opacity: 1,
		scale: 0,
		easing: 'linear',
		reset: true
	});

	sr.reveal('.reveal-left-fade', {
		origin: 'left',
		distance: '20px',
		duration: 800,
		delay: 0,
		opacity: 0,
		scale: 0,
		easing: 'linear',
		mobile: false
	});

	sr.reveal('.reveal-right-fade', {
		origin: 'right',
		distance: '20px',
		duration: 800,
		delay: 0,
		opacity: 0,
		scale: 0,
		easing: 'linear',
		mobile: false
	});

	sr.reveal('.reveal-right-delay', {
		origin: 'right',
		distance: '20px',
		duration: 800,
		delay: 0,
		opacity: 0,
		scale: 0,
		easing: 'linear',
		mobile: false
	}, 100);

	sr.reveal('.reveal-top-fade', {
		origin: 'top',
		distance: '20px',
		duration: 700,
		delay: 0,
		opacity: 0,
		scale: 0,
		easing: 'linear'
	});

	sr.reveal('.reveal-bottom-fade', {
		origin: 'bottom',
		distance: '20px',
		duration: 700,
		delay: 0,
		opacity: 0,
		scale: 0,
		easing: 'linear',
		mobile: false
	});


}); // End document ready
