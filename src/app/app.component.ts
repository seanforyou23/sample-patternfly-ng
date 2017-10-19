import { Component, ViewChild, OnInit } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild(FooterComponent) footer;

  title = 'Birthday Lookup';
  curBday: string;
  users: string;
  searchStream: string;

  constructor(private dataService: SharedDataService) {}

  ngOnInit() {

    let users$ = this.dataService.getUsers();

    users$.subscribe((observable) => {
      this.users = observable.slice(0, 3).join(', ');
    }, (err) => {
      console.warn(err);
    });

    this.dataService.birthdaySource.subscribe((searchStream) => {

      let bday = this.dataService.getBirthday(searchStream);

      this.searchStream = searchStream;
      this.curBday = bday;
      this.footer.activeBirthday = bday;
    });

  }

  // callback for keyup event
  handleBirthdayChange(text: any) {

    let bday = this.dataService.getBirthday(text);

    this.searchStream = text;
    this.curBday = bday;
    this.footer.activeBirthday = bday;

  }
}
