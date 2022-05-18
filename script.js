"use strict"
var tim;
	window.onload = function() { // запуск слайдера после загрузки документа
		slider.init();
		tim = setInterval(function() { // ставим двухсекундный интервал для перелистывания картинок
			slider.right();
		},2000);
	};
	var slider = {
		slides: 2, //количество слайдов
		frame:0, // текущий кадр для отображения - номер картинки 
		set: function(image) { // установка нужного смещения картинки фона 
			document.getElementById("scr1").style.backgroundPositionX = -image*453+"px";
		},
		init: function() { // запуск слайдера с картинкой с нулевым индексом
			this.set(0);
		},
		left: function() { // крутим на один кадр влево
			clearInterval(tim); //останавливаем автоматическую прокрутку карусели - чтобы не было скачков
			this.frame--;
			if(this.frame < 0) this.frame = this.slides-1; 
			this.set(this.frame);
			tim = setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок, листаем в ту же сторону
				slider.left();
			},2000);
		},
		right: function() { // крутим на один кадр вправо
			clearInterval(tim);//останавливаем автоматическую прокрутку карусели - чтобы не было скачков
			this.frame++;
			if(this.frame == this.slides) this.frame = 0; //дошли до конца - переходим в начало
			this.set(this.frame);		
			tim = setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок, листаем вправо
				slider.right();
			},2000);
		}
	};