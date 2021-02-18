let btn = document.getElementsByClassName('icon-bars')[0];
let phone_menu = document.getElementsByClassName('menu__list')[0];
let index = 0;

btn.onclick = function(){
	if (index == 0){
		phone_menu.style.display = "block";
		index += 1;
	}
	else{
		phone_menu.style.display = "none";
		index -= 1;
	}
}

$(function(){
	
    $('.reviews__large').slick({
		prevArrow: '<button class="slider__btn slider__btn-left"></button>',
        nextArrow: '<button class="slider__btn slider__btn-right"></button>',
		slidesToShow: 3,
		slidesToScroll: 1
    });
	$('.reviews__medium').slick({
		prevArrow: '<button class="slider__btn slider__btn-left"></button>',
        nextArrow: '<button class="slider__btn slider__btn-right"></button>',
		slidesToShow: 2,
		slidesToScroll: 1
    });
	$('.reviews__little').slick({
		prevArrow: '<button class="slider__btn slider__btn-left"></button>',
        nextArrow: '<button class="slider__btn slider__btn-right"></button>',
		slidesToShow: 1,
		slidesToScroll: 1
    });

	$('.questions__item-title').on('click', function(){
        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    });
});

