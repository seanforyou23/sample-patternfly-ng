import { Component, OnInit, Input } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  thing1: number;
  thing2: number;
  result: number;
  activeBirthday: string;

  // @Input('birthday') bday: string;

  constructor(private dataService:SharedDataService) {
    this.thing1 = 20;
    this.thing2 = 10;
  }

  private addNumbers(): void {
    console.log(this.thing1 + this.thing2);
    this.result += this.thing1 + this.thing2;
  }

  ngOnInit() {
    this.result = this.thing1 + this.thing2;
      this.activeBirthday = this.dataService.getData('Mike');
  }

}

// shared service data between footer/header
// event emitter (rxjs)
