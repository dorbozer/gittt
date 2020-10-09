/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function() { //when document(DOM) loads completely
	checkScroll(); //check if page is scrolled
	$(window).scroll(checkScroll); //get scroll position of window
});
/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
function checkScroll() { //check if page is scrolled
	if ($(window).scrollTop() >= 300) { //if window is scrolled 300px or more
		$('.navbar').addClass('solid'); //add class 'solid' to element with class 'navbar'
	} else { //if page is not scrolled 300px from top
		$('.navbar').removeClass('solid'); //remove class 'solid' from navbar element
	}
};
$('.navbar-toggler').click(function() { //when navbar-toggler is clicked
	if ($(window).scrollTop() <= 300) { //if window scrolled 300px or less from top
		$("nav.navbar").toggleClass("solid-toggle"); //add the solid class to navbar
	}
});
/*========== CLOSE MOBILE MENU ON CLICK ==========*/
$(document).ready(function() {
	$(document).click(function(event) {
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("show");
		if (_opened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
});
/*========== SMOOTH SCROLLING TO LINKS ==========*/
$(document).ready(function() {
	$("a").on('click', function(event) { //click on any link;anchor tag;
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") { //for e.g. website.com#home - #home
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			//console.log('hash:',hash)
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({ //animate whole html and body elements
				scrollTop: $(hash).offset().top //scroll to the element with that hash
			}, 800, function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash; //website.com - website.com#home
				//Optional remove "window.location.hash = hash;" to prevent transparent navbar on load
			});
		} // End if
	});
});
/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function() {
	$(window).scroll(function() {
		$('.arrow').css('opacity', 1 - $(window).scrollTop() / 500);
	});
});
/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function() { // a self calling function
	function onScrollInit(items, trigger) { // a custom made function
		items.each(function() { //for every element in items run function
			var osElement = $(this), //set osElement to the current
				osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
				osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time
			osElement.css({ //change css of element
				'-webkit-animation-delay': osAnimationDelay, //for safari browsers
				'-moz-animation-delay': osAnimationDelay, //for mozilla browsers
				'animation-delay': osAnimationDelay //normal
			});
			var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger
			osTrigger.waypoint(function() { //scroll upwards and downwards
				osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
			}, {
				triggerOnce: true, //only once this animation should happen
				offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
			});
		});
	}
	onScrollInit($('.os-animation')); //function call with only items
	onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});