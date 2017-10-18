import { Injectable } from '@angular/core';

// emits metadata associated with this given service
// let's angular know if it needs to inject other dependencies into this service
@Injectable()
export class SharedDataService {

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

  public getUsers(): string[] {
    return Object.keys(this.birthdays);
  }

}
