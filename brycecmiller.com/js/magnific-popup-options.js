$(document).ready(function() {
  // MagnificPopup
	var magnifPopup = function() {
		$(".image-popup").magnificPopup({
			items: [
				{
					src: "images/work_1.jpg",
					title: "<a href='https://www.google.com/' target='_blank'>Demo</a>"
				},
				{
					src: "images/easyeats.PNG",
					title: "<a href='https://easyeatsapp.herokuapp.com/' target='_blank'>Demo</a>"
				},
				{
					src: "images/gregis.PNG",
					title: "<a href='https://bcmiller713.github.io/gregis/' target='_blank'>Demo</a>"
				},
				{
					src: "images/burger.PNG",
					title: "<a href='https://sequelized-burger-crud.herokuapp.com/' target='_blank'>Demo</a>"
				},
				{
					src: "images/friend.PNG",
					title: "<a href='https://friend-find-app.herokuapp.com/' target='_blank'>Demo</a>"
				},
				{
					src: "images/bamazon.PNG",
					title: "<a href='https://github.com/bcmiller713/bamazon' target='_blank'>Demo</a>"
				}
			],
			type: "image",
			removalDelay: 300,
			mainClass: "mfp-with-zoom",
			gallery: {
				enabled: true
			// },
			// zoom: {
			// 	enabled: true, // By default it's false, so don't forget to enable it

			// 	duration: 300, // duration of the effect, in milliseconds
			// 	easing: "ease-in-out", // CSS transition easing function

			// // 	// The "opener" function should return the element from which popup will be zoomed in
			// // 	// and to which popup will be scaled down
			// // 	// By defailt it looks for an image tag:
			// 	opener: function(openerElement) {
			// // 		// openerElement is the element on which popup was initialized, in this case its <a> tag
			// // 		// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			// 		return openerElement.is("img") ? openerElement : openerElement.find("img");
			// 	}
			}
		});
	};

	var magnifVideo = function() {
		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
	};

	


	// Call the functions 
	magnifPopup();
	magnifVideo();

});