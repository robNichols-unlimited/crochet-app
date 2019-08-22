import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CrochetCriteria, YarnWeightEnum } from '../model/crochet-criteria';

@Component({
  selector: 'crochet-app',
  templateUrl: './crochet-app.component.html',
  styleUrls: ['./crochet-app.component.css']
})
export class CrochetAppComponent implements OnInit {
  slideIndex: number;
  projectTypes = [];
  projectSizes = [];
  selectedProject: string;
  form: FormGroup;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.slideIndex = 1;

    this.form = this.formBuilder.group({
      projectType: [null],
      projectSize: [null],
      yarnWeight: [null]
    });

    this.subscription = this.form.get('projectType').valueChanges.subscribe(x => {
      const selectedType = this.projectTypes.find(p => p.name === x);
      if (this.form.get('projectType').dirty) {
        this.form.get('projectSize').setValue(null);
        this.form.get('yarnWeight').setValue(null);
      }
      if (selectedType) {
        this.projectSizes = selectedType.sizes;
      } else {
        this.projectSizes = [];
      }
    });
  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
    //get types and sizes
    this.projectTypes = this.getTypes();
    //this.projectSizes = this.getSizes(); //get dynamically based on what type is selected... i.e., dimensional sizing for afghan, but wearable size for sweater
  }

  getTypes() {
    //mock a service call to a database??
    return [
      { name: 'Hat' },
      { name: 'Scarf' },
      { name: 'Mittens' },
      { name: 'Sweater' },
      { name: 'Afghan' },
      { name: 'Hot Pad' },
      { name: 'Rug' },
      { name: 'Slippers' }
    ];
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
