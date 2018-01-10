jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//open/close primary navigation
	$('.box-primary-nav-trigger').on('click', function(){
		$('.box-menu-icon').toggleClass('is-clicked'); 
		$('.box-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.box-primary-nav').hasClass('is-visible') ) {
			$('.box-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.box-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});

function mouse_moved(e) {

	var io = document.getElementById("onderstefoto");
	//var offset = img_onder.offset();
	var relativeX = (e.clientX - io.style.left);
	var relativeY = (e.clientY - io.style.top);
	//alert(offset);
	
	var img = document.getElementById("bovenstefoto");
	if (relativeX>300 && relativeY>50) {
		img.style.left = e.clientX - 50 + "px"; 
		img.style.top = e.clientY - 50 + "px";
		//img.style.backgroundPosition = "" + (-e.clientX+329+25) + "px " + (-e.clientY+132+25) + "px";
		img.style.backgroundPosition = "" + (325-relativeX) + "px " + (155-relativeY) + "px";
	}
	var img_x = img.style.left;
	var img_y = img.style.top;
}
