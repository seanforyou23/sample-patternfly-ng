import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-birthday-updater',
  templateUrl: './birthday-updater.component.html',
  styleUrls: ['./birthday-updater.component.css']
})
export class BirthdayUpdaterComponent implements OnInit {

  @Output() changeBirthday: EventEmitter<string> = new EventEmitter<string>();

  userInput: string;

  constructor() {}

  ngOnInit() {}

  handler($event: KeyboardEvent) {
    this.changeBirthday.emit(this.userInput);
  }

}
