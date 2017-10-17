import { Component, OnInit, Input } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today: Date;
  activeBirthday: string;

  constructor(private dataService:SharedDataService) {
    this.today = new Date();
  }

  ngOnInit() {
    this.activeBirthday = this.dataService.getBirthday('Michael');
  }

  handleBirthdayChange(event: any) {
    console.log(event);
  }

}

// shared service data between footer/header
// event emitter (rxjs)
