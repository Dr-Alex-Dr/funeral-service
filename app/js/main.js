

$(function(){
	var $menu_popup = $('.menu__list');
	
	$(".icon-bars").click(function(){
		$menu_popup.slideToggle(300, function(){
			if ($menu_popup.is(':hidden')) {
				$('.icon-bars').removeClass('body_pointer');
			} else {
				$('.icon-bars').addClass('body_pointer');
			}					
		});  
		return false;
	});			
	
	
	
    $('.reviews__slider').slick({
		prevArrow: '<button class="slider__btn slider__btn-left"></button>',
        nextArrow: '<button class="slider__btn slider__btn-right"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
			  }
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
			  }
			}

		]
    });

	
	
});

	