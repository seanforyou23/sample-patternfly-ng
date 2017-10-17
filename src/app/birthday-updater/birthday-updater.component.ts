import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-updater',
  templateUrl: './birthday-updater.component.html',
  styleUrls: ['./birthday-updater.component.css']
})
export class BirthdayUpdaterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public reportBirthdays(): void {
    console.log('foo');
  }

}
