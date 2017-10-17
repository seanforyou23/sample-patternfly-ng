import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {

  @Input('timestamp') today: Date;

  constructor() {}

  ngOnInit() {
    console.log(this.today);
  }

}
