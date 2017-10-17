import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  thing1: number;
  thing2: number;

  constructor() {
    this.thing1 = 20;
    this.thing2 = 10;

  }

  // which of these "addNumbers" is "correct"?
  private addNumbers(): void {
    console.log(this.thing1 + this.thing2);
  }

  // addNumbers = function () {
  //   console.log(this.thing1 + this.thing2);
  // }

  ngOnInit() {
    // setTimeout(function () {
    //   console.log('about to update this.thing1');
    //   this.thing1 = 100;
    //   console.log(this.thing1);
    // }, 2000);
  }

}

// shared service data between footer/header
// event emitter (rxjs)
