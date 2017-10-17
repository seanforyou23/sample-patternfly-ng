import { Injectable } from '@angular/core';

// emits metadata associated with this given service
// let's angular know if it needs to inject other dependencies into this service
@Injectable()
export class SharedDataService {

  constructor() {}

  birthdays = {
    'Michael': 'Apr 9',
    'David': 'Apr 18',
    'Ashley': 'Apr 20',
    'Kerri': 'Apr 25',
    'Heather': 'Jun 26',
    'Crystal': 'Feb 2'
  };

  public getBirthday(person): string {
    return this.birthdays[person];
  }

  public getUsers(): string[] {
    return Object.keys(this.birthdays);
  }

}
