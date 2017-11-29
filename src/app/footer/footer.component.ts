import {
  Component,
  OnInit,
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
  searchStream: string;



  constructor(private dataService: SharedDataService) {
    this.today = new Date();
  }

  ngOnInit() {

    // const arr: string[] = ['one', 'two', 'three'];
    // const firstInArr = arr[0];
    // console.log(firstInArr);
    //
    // const arr2: Array<number> = [3, 4, 5];
    // const firstInArr2 = arr2[0];
    // console.log(firstInArr2);
    //
    // const arr3: (string | number)[] = [5, '4', 3];
    // const secondInArr3 = arr3[1];
    // console.log(secondInArr3);
    //
    // const arr4: Array<number | boolean> = [true, 2, false];
    // const firstInArr4 = arr4[0];
    // console.log(firstInArr4);
    //
    // const arr5: Array<object> = [{foo: 'foo', bar: 'bar'}, {fooz: 'fooz', baz: 'baz'}];
    // const firstInArr5 = arr5[0];
    // console.log(firstInArr5);
    //
    // const People: Array<object> = [{'bob': 'Bob', 'john': 'John', 'alex': 'Alex'}];
    // console.log(People);
  }

  toLower(str): string {
    return str ? str.toLowerCase() : false;
  }

  observeModelChange($event: KeyboardEvent) {
    this.dataService.setActiveBirthday(this.searchStream);
  }

}
