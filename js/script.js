'use strict'
//Burger Menu
const burgerMenu = document.querySelector('.header-content__burger');
if (burgerMenu){
	const menuContentHeader = document.querySelector('.header-content__menu');
	burgerMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		burgerMenu.classList.toggle('_active');
		menuContentHeader.classList.toggle('_active');
	})
}

//Tabs

const btnTabs_1 = document.querySelector('.tabs-tab__tab_1');
const btnTabs_2 = document.querySelector('.tabs-tab__tab_2');
const btnTabs_3 = document.querySelector('.tabs-tab__tab_3');

const textTabs_1 = document.getElementById('body_1');
const textTabs_2 = document.getElementById('body_2');
const textTabs_3 = document.getElementById('body_3');


function goToWorkBtn() {
	body_1.setAttribute('data-no-click', 'false');
	body_2.setAttribute('data-no-click', 'false');
	body_3.setAttribute('data-no-click', 'false');
}


function showNewTextBlockForPc(body_1, body_2, body_3, btn_1, btn_2, btn_3) {
	//Проверяем активен ли первый текст в данный момент
	if (body_1.getAttribute("data-delete") === 'true' && body_1.getAttribute('data-no-click') === 'false') {
		//Проверяем какой текст был активен до нажатия на кнопку
		if (body_2.getAttribute('data-delete') === 'false') {
			//останавливаем работу всех кнопок с целью избежания много разового нажатия на кнопку пользователем
			body_1.setAttribute('data-no-click', 'true');
			body_2.setAttribute('data-no-click', 'true');
			body_3.setAttribute('data-no-click', 'true');

			//работаем с переменной цветов кнопак
			btn_2.setAttribute('data-active-color', 'false');
			btn_1.setAttribute('data-active-color', 'true');

			//Работаем с движением активного блока текста
			body_2.setAttribute('data-lock', 'true');
			setTimeout(() => {body_2.setAttribute('data-delete', 'true')}, 3000);
			body_2.setAttribute('data-active', 'false');
			body_2.setAttribute('data-swichtop', 'false');

			//работаем с движением нового блока текста
			body_1.setAttribute('data-delete', 'false');
			body_1.setAttribute('data-lock', 'false');
			body_1.setAttribute('data-swichtop', 'true');
			setTimeout(() =>{body_1.setAttribute('data-active', 'true')}, 5);
			setTimeout(goToWorkBtn, 3000);
		} else {
			//останавливаем работу всех кнопок с целью избежания много разового нажатия на кнопку пользователем
			body_1.setAttribute('data-no-click', 'true');
			body_2.setAttribute('data-no-click', 'true');
			body_3.setAttribute('data-no-click', 'true');

			//работаем с переменной цветов кнопак
			btn_3.setAttribute('data-active-color', 'false');
			btn_1.setAttribute('data-active-color', 'true');

			//Работаем с движением активного блока текста
			body_3.setAttribute('data-lock', 'true');
			setTimeout(() => {body_3.setAttribute('data-delete', 'true')}, 3000);
			body_3.setAttribute('data-active', 'false');
			body_3.setAttribute('data-swichtop', 'false');

			//работаем с движением нового блока текста
			body_1.setAttribute('data-delete', 'false');
			body_1.setAttribute('data-lock', 'false');
			body_1.setAttribute('data-swichtop', 'true');
			setTimeout(() =>{body_1.setAttribute('data-active', 'true')}, 5);
			setTimeout(goToWorkBtn, 3000);
		}
	}
}

//btn 1
btnTabs_1.addEventListener('click', function(e){
	showNewTextBlockForPc(textTabs_1,textTabs_2, textTabs_3, btnTabs_1, btnTabs_2, btnTabs_3)
})


// btn 2
btnTabs_2.addEventListener('click', function(e){
	showNewTextBlockForPc(textTabs_2,textTabs_1, textTabs_3, btnTabs_2, btnTabs_1, btnTabs_3)
})

btnTabs_3.addEventListener('click', function(e){
	showNewTextBlockForPc(textTabs_3,textTabs_1, textTabs_2, btnTabs_3, btnTabs_1, btnTabs_2)
})







