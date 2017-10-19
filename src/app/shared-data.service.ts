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

  users = [
    {name: 'Janna', birthday: 'January 9th'},
    {name: 'Crystal', birthday: 'Fedruary 2nd'},
    {name: 'Kerri', birthday: 'March 25th'},
    {name: 'Michael', birthday: 'April 9th'},
    {name: 'David', birthday: 'May 18th'},
    {name: 'Heather', birthday: 'June 26th'},
    {name: 'Darcy', birthday: 'July 19th'},
    {name: 'Jessamyn', birthday: 'August 30th'},
    {name: 'Donnie', birthday: 'September 20th'},
    {name: 'Red Hat', birthday: 'October 31st'},
    {name: 'Ashley', birthday: 'November 20th'},
    {name: 'Jesus', birthday: 'December 25th'},
  ];

  public getBirthday(userName): string {
    let foundUser = this.users.filter((user) => {
      return user.name === userName;
    })[0];

    return (foundUser) ? foundUser.birthday : '';
  }

  public getUsers(): Observable<string[]> {
    return Observable.of(
        this.users.reduce((acc, el) => {acc.push(el.name); return acc;}, [])
      )
  }

  public setActiveBirthday(name: string): void {
    this.birthdaySource.next(name);
  }

  public getActiveBirthday(name: string): Observable<string> {
    return this.activeBirthday;
  }

}
