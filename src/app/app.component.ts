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
  foundBirthday: string;
  users: string;
  searchString: string;

  constructor(private dataService:SharedDataService) {}

  ngOnInit() {

    Promise.resolve(this.dataService.getUsers())
      .then((users) => {
        this.users = users.slice(0, 3).join(', ');
      }, (err) => {console.warn(err);});
  }

  handleBirthdayChange(text: any) {
    this.searchString = text;

    Promise.resolve(this.dataService.getBirthday(text))
      .then((birthday) => {
        this.foundBirthday = (birthday) ? birthday : null;
        this.child.activeBirthday = (birthday) ? birthday : null;
      }, (err) => {console.warn(err);});
  }
}
