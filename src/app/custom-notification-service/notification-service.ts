import { Injectable } from '@angular/core';
import { NotificationService as NS, Notification } from 'patternfly-ng';

@Injectable()

export class RandomService {
  constructor() {}

  getPi() {
    return Math.PI;
  }
}

export class NotificationService extends NS {
  constructor() {
    super();
  }

  getFoo() {
    return 'foo';
  }
}
