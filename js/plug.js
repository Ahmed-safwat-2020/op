function header_adj() {
	if ($(window).width() < 767) {
		var header_height = $(".header").outerHeight();
		$(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
	} else {
		$(".nav-wrap .nav-list").css({ "padding-top": "0" });
	}
}
function submenu_toggle() {
	if ($(window).width() < 767) {
		$(".nav-list li.with-submenu")
			.off()
			.click(function () {
				$(this).toggleClass("is-open");
				$(".submenu").slideToggle("slow");
			});
	}
}
$(document).ready(function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 767) {
		$(".hamburger")
			.off()
			.click(function () {
				$(this).toggleClass("is-active");
				$("body,html").toggleClass("sidebar-open");
				$(".nav-wrap").toggleClass("is-open");
			});

		$(".overlay")
			.off()
			.click(function () {
				$(".hamburger").removeClass("is-active");
				$("body,html").removeClass("sidebar-open");
				$(".nav-wrap").removeClass("is-open");
			});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});
$(window).on("resize", function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 767) {
		$(".hamburger")
			.off()
			.click(function () {
				$(this).toggleClass("is-active");
				$("body,html").toggleClass("sidebar-open");
				$(".nav-wrap").toggleClass("is-open");
			});

		$(".overlay")
			.off()
			.click(function () {
				$(".hamburger").removeClass("is-active");
				$("body,html").removeClass("sidebar-open");
				$(".nav-wrap").removeClass("is-open");
			});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});


$("#owl-demo3").owlCarousel({
 
    // Most important owl features
    items :3,
    itemsCustom : false,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,1],
    itemsTabletSmall: [640,1],
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
 
    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
 
    //Autoplay
    autoPlay : true,
    stopOnHover : false,
 
    // Navigation
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    rewindNav : true,
    scrollPerPage : false,
 
    //Pagination
    pagination : true,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
 
 
});
$("#owl-demo2").owlCarousel({
 
    // Most important owl features
    items :7,
    itemsCustom : false,
    itemsDesktop : [1199,7],
    itemsDesktopSmall : [980,5],
    itemsTablet: [768,3],
    itemsTabletSmall: [640,4],
    itemsMobile : [479,3],
    singleItem : false,
    itemsScaleUp : false,
 
    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
 
    //Autoplay
    autoPlay : true,
    stopOnHover : false,
 
    // Navigation
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    rewindNav : true,
    scrollPerPage : false,
 
    //Pagination
    pagination : true,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
 
 
});

$("#owl-demo4").owlCarousel({
 
    // Most important owl features
    items :7,
    itemsCustom : false,
    itemsDesktop : [1199,7],
    itemsDesktopSmall : [980,5],
    itemsTablet: [768,4],
    itemsTabletSmall: [640,4],
    itemsMobile : [479,3],
    singleItem : false,
    itemsScaleUp : false,
 
    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
 
    //Autoplay
    autoPlay : false,
    stopOnHover : false,
 
    // Navigation
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    rewindNav : true,
    scrollPerPage : false,
 
    //Pagination
    pagination : true,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
 
 
});

var selector = '.option li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});




