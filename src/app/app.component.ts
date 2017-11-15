import { Component, ViewChild, OnInit } from '@angular/core';

import { InfoStatusCardConfig } from 'patternfly-ng';
import { SharedDataService } from './shared-data.service';
import { FooterComponent } from './footer/footer.component';
import { MY_APP_MODEL } from './custom-forms/form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  card1Config: InfoStatusCardConfig = {
    showTopBorder: true,
    htmlContent: true,
    title: 'TinyCore-local',
    href: '//www.redhat.com/',
    iconStyleClass: 'fa fa-shield',
    info: [
      'VM Name: aapdemo002',
      'Host Name: localhost.localdomian',
      'IP Address: 10.9.62.100',
      'Power status: on'
    ]
  };

  @ViewChild(FooterComponent) footer;

  title = 'Birthday Lookup';
  curBday: string;
  users: string;
  searchStream: string;

  constructor(private dataService: SharedDataService) {}

  ngOnInit() {

    console.log('MY_APP_MODEL: ', MY_APP_MODEL);

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
  handleBirthdayChange(text: string) {

    let bday = this.dataService.getBirthday(text);

    this.searchStream = text;
    this.curBday = bday;
    this.footer.activeBirthday = bday;

  }
}
