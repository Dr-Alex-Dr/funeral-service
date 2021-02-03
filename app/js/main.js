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