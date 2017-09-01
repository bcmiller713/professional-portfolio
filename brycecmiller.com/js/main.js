;(function () {

	'use strict';



	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);

			return false;
		});

	};


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');

		$section.waypoint(function(direction) {

		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};





	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top animated slideInDown slideOutUp');
					}, 100 );
				}
			}

		});
	};



	// Animations
	// Home

	var homeAnimate = function() {
		if ( $('#home').length > 0 ) {

			$('#home').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#home .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var introAnimate = function() {
		if ( $('#intro').length > 0 ) {

			$('#intro').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#intro .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 1000);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var portfolioAnimate = function() {
		if ( $('#portfolio').length > 0 ) {

			$('#portfolio').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#portfolio .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var recommendationsAnimate = function() {
		var recommendations = $('#recommendations');
		if ( recommendations.length > 0 ) {

			recommendations.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = recommendations.find('.to-animate').length,
						sec = parseInt((sec * 200) - 400);

					setTimeout(function() {
						recommendations.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						recommendations.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var skillsAnimate = function() {
		var skills = $('#skills');
		if ( skills.length > 0 ) {

			skills.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = skills.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						skills.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						skills.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);



					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var aboutAnimate = function() {
		var about = $('#about');
		if ( about.length > 0 ) {

			about.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);



					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var countersAnimate = function() {
		var counters = $('#counters');
		if ( counters.length > 0 ) {

			counters.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = counters.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						counters.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						counters.find('.js-counter').countTo({
						 	formatter: function (value, options) {
				      		return value.toFixed(options.decimals);
				   		},
						});
					}, 400);

					setTimeout(function() {
						counters.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);





					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var contactAnimate = function() {
		var contact = $('#contact');
		if ( contact.length > 0 ) {

			contact.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var request;

	$("#contact-form").on("submit", function(event) {
			// Prevent default posting of form - put here to work in case of errors
	    event.preventDefault();

	    // Clear any error messaging
    	$("#name-error").html("");
    	$("#email-error").html("");
    	$("#message-error").html("");
    	$("#name").parent().removeClass("has-error");
    	$("#email").parent().removeClass("has-error");
    	$("#message").parent().removeClass("has-error");

	    // Abort any pending request
	    if (request) {
	      request.abort();
	    }

	    // Validate Input
	    var inputName = $("#name").val().trim();
	    var nameReg = /^[a-zA-Z ]+$/;
	    var inputEmail = $("#email").val().trim();
	    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	    // var inputPhone = $("#phone").trim().val();
	    // var phoneReg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
	    var inputMessage = $("#message").val().trim();
	    var inputError = false;

	    if (inputName === "") {
	    	$("#name-error").html("Name is required");
	    	$("#name").parent().addClass("has-error");
	    	inputError = true;
	    }
	    else if (!nameReg.test(inputName)) {
	    	$("#name-error").html("Only letters and spaces allowed")
	    	$("#name").parent().addClass("has-error");
	    	inputError = true;
	    }
	    if (inputEmail === "") {
	    	$("#email-error").html("Email is required");
	    	$("#email").parent().addClass("has-error");
	    	inputError = true;
	    }
	    else if (!emailReg.test(inputEmail)) {
	      $("#email-error").html("Invalid Email Format");
	    	$("#email").parent().addClass("has-error");
	    	inputError = true;
	    }
	    // if (!phoneReg.test(inputPhone)) {
		    // $("#phone-error").html("Invalid phone number");
		    // inputError = true;
	    // }
	    if (inputMessage === "") {
	    	$("#message-error").html("Message is required");
	    	$("#message").parent().addClass("has-error");
	    	inputError = true;
	    }

	    // If no errors, Ajax call runs php script and sends me an email
	    if (!inputError) {

	    	// setup some local variables
		    var $form = $(this);

		    // Let's select and cache all the fields
		    var $inputs = $form.find("input, textarea");

		    // Serialize the data in the form
		    var serializedData = $form.serialize();

		    // Let's disable the inputs for the duration of the Ajax request.
		    // Note: we disable elements AFTER the form data has been serialized.
		    // Disabled form elements will not be serialized.
		    $inputs.prop("disabled", true);

		    // Fire off the request to /form.php
		    request = $.ajax({
		        url: "./php/contact.php",
		        type: "POST",
		        data: serializedData
		    });

		    // Callback handler that will be called on success
		    request.done(function (response, textStatus, jqXHR){
		        // Log a message to the console
		        console.log("response: ", response);
		    });

		    // Callback handler that will be called on failure
		    request.fail(function (jqXHR, textStatus, errorThrown){
		        // Log the error to the console
		        console.error(
		            "The following error occurred: "+
		            textStatus, errorThrown
		        );
		    });

		    // Callback handler that will be called regardless
	    	// if the request failed or succeeded
	    	request.always(function () {
	      	// Reenable the inputs
	      	$inputs.prop("disabled", false);
	      	// Clear text from inputs
	      	$("#name").val("");
	      	$("#email").val("");
	      	$("#phone").val("");
	      	$("#message").val("");
	    	});
	  	}
	});

	// Document on load.
	$(function(){

		parallax();

		burgerMenu();

		clickMenu();

		windowScroll();

		navigationSection();

		goToTop();

		// Animations
		homeAnimate();
		introAnimate();
		portfolioAnimate();
		recommendationsAnimate();
		skillsAnimate();
		aboutAnimate();
		countersAnimate();
		contactAnimate();

	});

}());
