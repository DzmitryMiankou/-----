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
    constructor (a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
        this.frame=0;
        this.slides=4;
        this.arrImg = [this.a, this.b, this.c];
    }
    putFilterNegativ() {
      negativ.onclick = () => {
        this.arrImg.forEach(Element => Element.style.filter = "saturate(0%)");
    }
     };
    putFilterPozitiv() {
      pazitiv.onclick = () => {
        this.arrImg.forEach(Element => Element.style.filter = "saturate(100%)");
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
