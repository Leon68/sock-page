/**
 * 首页功能
 */

//define(id, ['jquery'], function($){ $('')  })
//
//
//CMD
// define(function(require, exports, module){
// 	var jQuery = require('jquery');
// 	var GoTop = require('com/gotop');
// 	console.log(GoTop)

// 	new GoTop();
// })

//AMD

define(['jquery','com/gotop', 'com/event', 'com/carousel', 'com/exposure','com/barrel'], function($, GoTop, Event, Carousel, Exposure, Barrel) {

	

	new GoTop();


	 Carousel.init($('.carousel'));
	 new Barrel($('.landscope-img'))
	$('.load-more').on('click',function(){
        new Barrel($('.landscope-img'))
	})
	// var i = 0,
	// 	len = $('.intro p').length;
    //
	// Event.on('carousel_show_pre', function() {
	// 	$('.intro p').hide().eq(i).fadeIn();
	// 	i--;
	// 	i = i % len;
	// });
	// Event.on('carousel_show_next', function() {
	// 	$('.intro p').hide().eq(i).fadeIn();
	// 	i++;
	// 	i = i % len;
	// });
    //
    //
	// Exposure.one($('.img-cells img'), function(){
    //
	// 	var $this = $(this);
	// 	$this.attr('src', $this.attr('data-src'));
	// });


});