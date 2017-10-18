import { Component, OnInit, Input } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today: Date;
  activeBirthday: string;
  myObserver: any;

  private inputStream: Observable<Array<number>>;

  constructor(private dataService:SharedDataService) {
    this.today = new Date();
  }

  ngOnInit() {

    this.inputStream = new Observable((observer) => {
      this.myObserver = observer;
    });

    let subscribe = this.inputStream.subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.warn(err);
    });

  }

  toLower(str): string {
    return str ? str.toLowerCase() : false;
  }

  handleKeyUp(event: any) {
    this.myObserver.next(event.target.value);
  }

}
