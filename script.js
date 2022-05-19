"use strict"
let tim;
	window.onload = function() { // запуск слайдера после загрузки документа
		slider.init();
		tim = setInterval(function() {
	 // ставим двухсекундный интервал для перелистывания картинок
		slider.right();
		/*let main = document.getElementById("maindiv1");
			main.style.filter = "saturate(0%)";*/
		},3000);
}
	const slider = {
		slides: 2, //количество слайдов
		frame:0, // текущий кадр для отображения - номер картинки 
		set: function(image) { // установка нужного смещения картинки фона 
			let sr1 = document.getElementById("scr1");
			sr1.style.backgroundPositionX = -image*453+"px";
			let sr2 = document.getElementById("scr2");
			sr2.style.backgroundPositionX = -image*453+"px";
			let sr3 = document.getElementById("scr3");
			sr3.style.backgroundPositionX = -image*453+"px";
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
		},
	};
	const getOnclik = (a,b,c,d,f) => {
a.onclick = () =>{
			c.style.filter = "saturate(0%)";
			d.style.filter = "saturate(0%)";
			f.style.filter = "saturate(0%)";
			a.style.background = "black";
			b.style.background = "black";
		};
b.onclick = () =>{
			c.style.filter = "saturate(100%)";
			d.style.filter = "saturate(100%)";
			f.style.filter = "saturate(100%)";
			a.style.background = "red";
			b.style.background = "red";
		};
}
let main = document.getElementById("maindiv1");
let main2 = document.getElementById("maindiv2");
let main3 = document.getElementById("maindiv3");
let neg = document.getElementById("negat");
let paz = document.getElementById("pazit");
getOnclik(neg,paz,main,main2,main3);