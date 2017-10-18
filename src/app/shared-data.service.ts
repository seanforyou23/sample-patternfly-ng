import { Injectable } from '@angular/core';
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

  public getBirthday(person): string {
    return this.birthdays[person];
  }

  // public getUsers(): Observable<string[]> {
  public getUsers(): string[] {
    // return Observable.of(Object.keys(.
    return Object.keys(this.birthdays);
  }

  public setActiveBirthday(name: string): void {
    this.birthdaySource.next(name);
  }

  public getActiveBirthday(name: string): any {
    return this.activeBirthday;
  }

}
