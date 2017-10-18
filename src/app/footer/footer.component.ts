import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() changeBirthday: EventEmitter<string> = new EventEmitter<string>();

  today: Date;
  activeBirthday: string;

  constructor(private dataService: SharedDataService) {
    this.today = new Date();
  }

  ngOnInit() {

    this.dataService.activeBirthday.subscribe((searchStream) => {

      Promise.resolve(this.dataService.getBirthday(searchStream))
        .then((data) => {
          this.changeBirthday.emit(data);

        }, (err) => {
          console.warn(err);
        });
    });

  }

  toLower(str): string {
    return str ? str.toLowerCase() : false;
  }

  observeKeyUp(event: any) {
    this.dataService.setActiveBirthday(event.target.value);
  }

}
