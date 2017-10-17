import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  today: Date;

  // like props in react
  // exposes this data as "someValue" in the view template
  @Input('name') someValue: string;

  constructor() {
    this.today = new Date();
  }

  private doThingy(): void {
    console.log('thingy');
  }

  ngOnInit() {
    this.doThingy();

  }

}
