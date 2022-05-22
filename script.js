"use strict"
const scr1 = document.getElementById('scr1');
const scr2 = document.getElementById('scr2');
const scr3 = document.getElementById('scr3');
const negativ = document.getElementById('negat');
const pazitiv = document.getElementById('pazit');
const arrButt = [negativ,pazitiv];
const arrImages = [scr1,scr2,scr3];
const buttons = document.querySelector(`.buttes`);
let time;
window.onload = () =>{
     const getfilter = new Getfilter(arrImages);
     getfilter.runButtons();
     time = setInterval (()  => {
     getfilter.carousel()},4000);
  }
class Getfilter {
    constructor (images){
        this.images = images;
        this.frame=0;
        this.slides=4;
    }
    putFilterNegativ() {
        this.images.forEach(Element => Element.style.filter = "saturate(0%)");
     };
    putFilterPozitiv() {
        this.images.forEach(Element => Element.style.filter = "saturate(100%)");
     };
    set(image){
      this.d.style.backgroundPositionX = -image * 453 + "px";
    }
    setCarousel (image){
      this.images.forEach(Element => Element.style.backgroundPositionX = -image * 453 + "px");
    }
    carousel() {
      this.frame++;
      if (this.frame == this.slides) this.frame = 0;
      this.setCarousel(this.frame)
    }
    right(){
      clearInterval(time);
      this.frame++;
      if (this.frame == this.slides) this.frame = 0;
      this.set(this.frame);
      time = setInterval(() => { 
				this.carousel();
			},4000);
    }
    left(){
      clearInterval(time);
      this.frame--;
      if (this.frame < 0) this.frame = this.slides - 1;
      this.set(this.frame);
      time = setInterval(() => { 
				this.carousel();
			},4000);
    }
    shou (a) {
        this.d = a;
        this.set(a);
      }
    runButtons(){
      buttons.addEventListener("click", (event) => {
        let target = event.target;
        switch(target.id) {
          case "slider.left1":
            this.shou(this.images[0]);
            this.left();
            break;
          case "slider.left2": 
            this.shou(this.images[1]);
            this.left(); 
            break;
          case "slider.left3": 
            this.shou(this.images[2]);
            this.left(); 
            break;
          case "slider.right1":
            this.shou(this.images[0]);
            this.right();
            break;
          case "slider.right2": 
            this.shou(this.images[1]);
            this.right();
            break;
          case "slider.right3": 
            this.shou(this.images[2]);
            this.right();
            break;
          case "pazit": 
            this.putFilterPozitiv(); 
            break;
          case "negat":
            this.putFilterNegativ();
            break;
        }
      })
    };
}; 