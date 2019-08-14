import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'crochet-app',
  templateUrl: './crochet-app.component.html',
  styleUrls: ['./crochet-app.component.css']
})
export class CrochetAppComponent implements AfterViewInit {
  slideIndex: number;

  constructor() {
    this.slideIndex = 1;
  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  showSlides(index: number) {
    let i;
    
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (index > slides.length) {
      this.slideIndex = 1;
    }

    if (index < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      //slides[i].style.display = "none";
      console.log(slides[i]);
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    //slides[this.slideIndex - 1].style.display = "block";
    console.log(this.slideIndex - 1);
    dots[this.slideIndex - 1].className += " active";
  }

  plusSlides(num: number) {
    this.showSlides(this.slideIndex += num);
  }

  currentSlide(num: number) {
    this.showSlides(this.slideIndex = num);
  }
}
