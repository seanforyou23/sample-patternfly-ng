import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// emits metadata associated with this given service
// lets angular know if it needs to inject other dependencies into this service
@Injectable()
export class SharedDataService {

  public birthdaySource = new BehaviorSubject<string>('');
  activeBirthday = this.birthdaySource.asObservable();

  constructor() {}

  birthdays = {
    'Janna': 'January 9th',
    'Crystal': 'February 2nd',
    'Kerri': 'March 14th',
    'Michael': 'April 9th',
    'David': 'May 28th',
    'Heather': 'June 26th',
    'Darcy': 'July 19th',
    'Jessamyn': 'August 30th',
    'Donnie': 'September 20th',
    'Red Hat': 'October 31st',
    'Ashley': 'November 4th',
    'Jesus': 'December 25th'
  };

  // users = [
  //   {name: 'Janna', birthday: 'January 9th'},
  //   {name: 'Crystal', birthday: 'Fedruary 2nd'},
  //   {name: 'Kerri', birthday: 'March 25th'},
  //   {name: 'Michael', birthday: 'April 9th'},
  //   {name: 'David', birthday: 'May 18th'},
  //   {name: 'Heather', birthday: 'June 26th'},
  //   {name: 'Darcy', birthday: 'July 19th'},
  //   {name: 'Jessamyn', birthday: 'August 30th'},
  //   {name: 'Donnie', birthday: 'September 20th'},
  //   {name: 'Red Hat', birthday: 'October 31st'},
  //   {name: 'Ashley', birthday: 'November 20th'},
  //   {name: 'Jesus', birthday: 'December 25th'},
  // ];

  public getBirthday(person): string {
    return this.birthdays[person];
  }

  public getUsers(): Observable<string[]> {
    return Observable.of(Object.keys(this.birthdays));
    // return Observable.of(
    //     this.users.reduce((acc, el) => {acc.push(el.name); return acc;}, [])
    //   )
  }

  public setActiveBirthday(name: string): void {
    this.birthdaySource.next(name);
  }

  public getActiveBirthday(name: string): any {
    return this.activeBirthday;
  }

}
