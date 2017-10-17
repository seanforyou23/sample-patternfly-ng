import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-birthday-updater',
  templateUrl: './birthday-updater.component.html',
  styleUrls: ['./birthday-updater.component.css']
})
export class BirthdayUpdaterComponent implements OnInit {

  @Output() changeBirthday: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onKey(event: any) {
    this.changeBirthday.emit(event.target.value);
  }

}
