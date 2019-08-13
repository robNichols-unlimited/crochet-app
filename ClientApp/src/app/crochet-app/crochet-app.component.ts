import { Component } from '@angular/core';

@Component({
  selector: 'crochet-app',
  templateUrl: './crochet-app.component.html'
})
export class CrochetAppComponent {
  public slideIndex = 1;
  showDivs(slideIndex);

  showDivs(n: number) {
    let i;
    let x = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("demo");

    if (n > x.length) () => this.slideIndex = 1;
    if (n < 1) () => this.slideIndex = x.length;

    for (i = 0; i < x.length; i++) {
      x[i].className = "display-none";
    }

    for (i = 0; i < x.length; i++) {
      dots[i].className = dots[i].className.replace("w3-white", "");
    }

    x[this.slideIndex - 1].className = "display-block";
    dots[this.slideIndex - 1].className += " w3-white";
  }

  plusDivs(n: number) {
    this.showDivs(this.slideIndex += n);
  }

  currentDiv(n: number) {
    this.showDivs(this.slideIndex = n);
  }  
}
