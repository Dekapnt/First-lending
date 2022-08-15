'use strict'

const burgerMenu = document.querySelector('.header-content__burger');
if (burgerMenu){
	const menuContentHeader = document.querySelector('.header-content__menu');
	burgerMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		burgerMenu.classList.toggle('_active');
		menuContentHeader.classList.toggle('_active');
	})
}