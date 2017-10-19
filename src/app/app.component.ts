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

      this.searchStream = searchStream;

      Promise.resolve(this.dataService.getBirthday(searchStream))
        .then((result) => {

            this.footer.activeBirthday = (result) ? result : null;
            this.curBday = result;

        }, (err) => {
          console.warn(err);
        });
    });

  }

  // callback for keyup event
  handleBirthdayChange(text: any) {
    this.searchStream = text;

    Promise.resolve(this.dataService.getBirthday(text))
      .then((birthday) => {
        this.curBday = (birthday) ? birthday : null;
        this.footer.activeBirthday = (birthday) ? birthday : null;
      }, (err) => {
        console.warn(err);
      });
  }
}
