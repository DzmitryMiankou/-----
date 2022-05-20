"use strict"
window.onload = () =>{
negativ.onclick = () => {
const getfilter = new Getfilter(scr1,scr3,scr2);
getfilter.getFilterNegativ();
};
pazitiv.onclick = () => {
const getfilter = new Getfilter(scr1,scr3,scr2);
getfilter.getFilterPozitiv();
};
}
const right = document.getElementById('slider.right1');
const left = document.getElementById('slider.left1');
const scr1 = document.getElementById('scr1');
const scr2 = document.getElementById('scr2');
const scr3 = document.getElementById('scr3');
const negativ = document.getElementById('negat');
const pazitiv = document.getElementById('pazit');
class Getfilter {
    constructor (a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
        this.f=0;
        this.sl=2;
    }
    getFilterNegativ() {
        this.a.style.filter = "saturate(0%)";
        this.b.style.filter = "saturate(0%)";
        this.c.style.filter = "saturate(0%)";
    }
    getFilterPozitiv() {
        this.a.style.filter = "saturate(100%)";
        this.b.style.filter = "saturate(100%)";
        this.c.style.filter = "saturate(100%)";
        }
};  
let frame = 0;
let sl = 2;
/*
right.onclick = () =>{
  let f = (image)=> {
    scr1.style.backgroundPositionX = -image * 453 + "px";
  }
  frame++;
    if (frame < 0) frame = sl - 1;
    f(frame);
};*/
const r = (a) => {
  let f = (image)=> {
    a.style.backgroundPositionX = -image * 453 + "px";
  }
  frame++;
    if (frame < 0) frame = sl - 1;
    f(frame);
}
right.onclick = () =>{ r(scr1)};
left.onclick = () =>{ r(scr1)};


 /*let tim;
      window.onload = function () {
        // запуск слайдера после загрузки документа
        slider.init();
        tim = setInterval(function () {
          // ставим двухсекундный интервал для перелистывания картинок
          slider.right();
        }, 3000);
      };
      const slider = {
        slides: 2, //количество слайдов
        frame: 0, // текущий кадр для отображения - номер картинки
        set: function (image) {
          // установка нужного смещения картинки фона
          let sr1 = document.getElementById("scr1");
          sr1.style.backgroundPositionX = -image * 453 + "px";
          let sr2 = document.getElementById("scr2");
          sr2.style.backgroundPositionX = -image * 453 + "px";
          let sr3 = document.getElementById("scr3");
          sr3.style.backgroundPositionX = -image * 453 + "px";
        },
        init: function () {
          // запуск слайдера с картинкой с нулевым индексом
          this.set(0);
        },
        left: function () {
          // крутим на один кадр влево
          clearInterval(tim); //останавливаем автоматическую прокрутку карусели - чтобы не было скачков
          this.frame--;
          if (this.frame < 0) this.frame = this.slides - 1;
          this.set(this.frame);
          tim = setInterval(function () {
            // ставим пятисекундный интервал для перелистывания картинок, листаем в ту же сторону
            slider.left();
          }, 3000);
        },
        right: function () {
          // крутим на один кадр вправо
          clearInterval(tim); //останавливаем автоматическую прокрутку карусели - чтобы не было скачков
          this.frame++;
          if (this.frame == this.slides) this.frame = 0; //дошли до конца - переходим в начало
          this.set(this.frame);
          tim = setInterval(function () {
            // ставим пятисекундный интервал для перелистывания картинок, листаем вправо
            slider.right();
          }, 3000);
        },
      };*/