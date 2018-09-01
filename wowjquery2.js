// init main object
// jQuery(document).ready - conflicted with some scripts
// Transition time = 2.4s = 20/10
// SlideShow delay = 6.5s = 12/10
jQuery('#wowslider-container1').wowSlider({
	effect:"basic_linear", 
	prev:"", 
	next:"", 
	duration: 12*100, 
	delay:20*100, 
	width:960,
	height:360,
	autoPlay:true,
	autoPlayVideo:false,
	playPause:false,
	stopOnHover:false,
	loop:false,
	bullets:1,
	caption: true, 
	captionEffect:"none",
	controls:true,
	responsive:1,
	fullScreen:false,
	gestures: 2,
	onBeforeStep:0,
	images:0
});