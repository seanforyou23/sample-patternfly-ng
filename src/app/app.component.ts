import { Component, ViewChild } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild(FooterComponent) child;

  title: string = 'Birthday Lookup';
  curBday: string;
  users: string;
  searchStream: string;

  constructor(private dataService:SharedDataService) {}

  ngOnInit() {

    Promise.resolve(this.dataService.getUsers())
      .then((users) => {
        this.users = users.slice(0, 3).join(', ');
      }, (err) => {console.warn(err);});


    // this.dataService.activeBirthday.subscribe((searchStream) => {
    //   Promise.resolve(this.dataService.getBirthday(searchStream))
    //     .then((result) => {
    //       if (typeof result === 'string') {
    //         this.curBday = (result) ? result : null;
    //         this.child.activeBirthday = (result) ? result : null;
    //       }
    //     }, (err) => {console.warn(err)});
    // });

    // observe changes to a service property
    // "activeBirthday" is actually the observable, but I'd rather subscribe to
    // "birthdaySource" - is this ok?
    this.dataService.birthdaySource.subscribe((searchStream) => {

      this.searchStream = searchStream;

      Promise.resolve(this.dataService.getBirthday(searchStream))
        .then((result) => {

            this.child.activeBirthday = (result) ? result : null;
            this.curBday = result;

        }, (err) => {console.warn(err)});
    });
  }

  // callback for keyup event
  handleBirthdayChange(text: any) {
    this.searchStream = text;

    Promise.resolve(this.dataService.getBirthday(text))
      .then((birthday) => {
        this.curBday = (birthday) ? birthday : null;
        this.child.activeBirthday = (birthday) ? birthday : null;
      }, (err) => {console.warn(err);});
  }
}
