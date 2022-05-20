"use strict"
const right = document.getElementById('slider.right1');
const left = document.getElementById('slider.left1');
const right2 = document.getElementById('slider.right2');
const left2 = document.getElementById('slider.left2');
const right3 = document.getElementById('slider.right3');
const left3 = document.getElementById('slider.left3');
const scr1 = document.getElementById('scr1');
const scr2 = document.getElementById('scr2');
const scr3 = document.getElementById('scr3');
const negativ = document.getElementById('negat');
const pazitiv = document.getElementById('pazit');

window.onload = () =>{
     const getfilter = new Getfilter(scr1,scr2,scr3);
     getfilter.putFilterNegativ();
     getfilter.putFilterPozitiv();
     getfilter.runbuttons()
  }


class Getfilter {
    constructor (a,b,c,d){
        this.a=a;
        this.b=b;
        this.c=c;
        this.frame=0;
        this.slides=4;
    }
    putFilterNegativ() {
      negativ.onclick = () => {
        this.a.style.filter = "saturate(0%)";
        this.b.style.filter = "saturate(0%)";
        this.c.style.filter = "saturate(0%)";
    }
     };
    putFilterPozitiv() {
      pazitiv.onclick = () => {
        this.a.style.filter = "saturate(100%)";
        this.b.style.filter = "saturate(100%)";
        this.c.style.filter = "saturate(100%)";
        }
        };
    set(image){
      this.d.style.backgroundPositionX = -image * 453 + "px";
    }
    right(){
      this.frame++;
      if (this.frame == this.slides) this.frame = 0;
      this.set(this.frame);
    }
    left(){
      this.frame--;
      if (this.frame < 0) this.frame = this.slides - 1;
      this.set(this.frame);
    }
    runbuttons(){
      right.onclick = () => {
        this.d = this.a;
        this.right();
      };
      right2.onclick = () => {
        this.d = this.b;
        this.right();
      };
      right3.onclick = () => {
        this.d = this.c;
        this.right();
      };
      left.onclick = () => {
        this.d = this.a;
        this.left();
      };
      left2.onclick = () => {
        this.d = this.b;
        this.left();
      };
      left3.onclick = () => {
        this.d = this.c;
        this.left();
      };
    }
};  
/*
let frame = 0;
let sl = 4;
const r = (a) => {
  let f = (image)=> {
    a.style.backgroundPositionX = -image * 453 + "px";
  }
  frame++;
    if (frame < 0) frame = sl - 1;
    f(frame);
}
const k = (a) => {
  let f = (image)=> {
    a.style.backgroundPositionX = -image * 453 + "px";
  }
  frame++;
    if (frame < 0) frame = 0;
    f(frame);
}
right.onclick = () =>{ r(scr1)}; 
left.onclick = () =>{ k(scr1)};
right2.onclick = () =>{ r(scr2)};
left2.onclick = () =>{ k(scr2)};
right3.onclick = () =>{ r(scr3)};
left3.onclick = () =>{ k(scr3)};
*/

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