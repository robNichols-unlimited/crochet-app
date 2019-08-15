import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrochetCriteria, YarnWeightEnum } from '../model/crochet-criteria';

@Component({
  selector: 'crochet-app',
  templateUrl: './crochet-app.component.html',
  styleUrls: ['./crochet-app.component.css']
})
export class CrochetAppComponent implements OnInit {
  slideIndex: number;
  criteria: CrochetCriteria;
  projectTypes: Array<string> = [];
  projectSizes: Array<string> = [];

  patternForm = new FormGroup({
    type: new FormControl(''),
    size: new FormControl(''),
    yarnWeight: new FormControl(YarnWeightEnum) //0: Lace, 1: SuperFine, 2: Fine, 3: Light, 4: Medium, 5: Bulky, 6: Super Bulky
  });  

  constructor() {
    this.slideIndex = 1;    
  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
    //get types and sizes
    this.projectTypes = this.getTypes();
    //this.projectSizes = this.getSizes(); //get dynamically based on what type is selected... i.e., dimensional sizing for afghan, but wearable size for sweater
  }

  getTypes() {
    //mock a service call to a database??
    return ['Hat', 'Scarf', 'Mittens', 'Sweater', 'Afghan', 'Hot Pad', 'Rug', 'Slippers']
  }

  //slider control - do not modify at this time.
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
      slides[i].className = slides[i].className.replace(" slide-show", "");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].className += " slide-show";
    dots[this.slideIndex - 1].className += " active";
  }

  plusSlides(num: number) {
    this.showSlides(this.slideIndex += num);
  }

  currentSlide(num: number) {
    this.showSlides(this.slideIndex = num);
  }
}
