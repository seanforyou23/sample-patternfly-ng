import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';

import { InfoStatusCardConfig, NotificationService, NotificationType, Notification } from 'patternfly-ng';
import { SharedDataService } from './shared-data.service';
import { FooterComponent } from './footer/footer.component';

// forms stuff
import {
  MY_BASIC_FORM_MODEL,
  MY_GROUP_FORM_MODEL,
  MY_ARRAY_FORM_MODEL
} from './custom-forms/form.model';
import { FormGroup, FormArray } from '@angular/forms';
import {
  DynamicFormControlModel,
  DynamicFormService,
  DynamicFormGroupModel,
  DynamicInputModel,
  DynamicFormArrayModel
} from '@ng-dynamic-forms/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  notifications: Notification[];

  // card stuff
  card1Config: InfoStatusCardConfig = {
    showTopBorder: true,
    htmlContent: true,
    title: 'TinyCore-local',
    href: '//www.redhat.com/',
    iconStyleClass: 'fa fa-shield',
    info: [
      'VM Name: aapdemo002',
      'Host Name: localhost.localdomian',
      'IP Address: 10.9.62.100',
      'Power status: on'
    ]
  };

  // footer stuff
  @ViewChild(FooterComponent) footer;

  title = 'Birthday Lookup';
  curBday: string;
  users: string;
  searchStream: string;

  // forms stuff
  basicFormModel: DynamicFormControlModel[] = MY_BASIC_FORM_MODEL;
  formGroupModel: DynamicFormControlModel[] = MY_GROUP_FORM_MODEL;
  formArrayModel: DynamicFormArrayModel[] = MY_ARRAY_FORM_MODEL;
  formGroup: FormGroup;
  basicForm: FormGroup;
  arrayForm: FormGroup;
  formArrayControl: FormArray;

  constructor(
    private dataService: SharedDataService,
    private formService: DynamicFormService,
    private notificationService: NotificationService
   ) {
    notificationService.setDelay(1500);
  }

  ngOnInit(): void {
    // create a form group
    this.formGroup = this.formService.createFormGroup(this.formGroupModel);
    this.basicForm = this.formService.createFormGroup(this.basicFormModel);
    this.arrayForm = this.formService.createFormGroup(this.formArrayModel);

    this.formArrayControl = this.formGroup.get('myFormArray') as FormArray;
    // this.formArrayModel = this.formService.findById('myFormArray', this.formArrayModel) as DynamicFormArrayModel;

    // get a reference to the nested form group by ID
    const nestedFormGroup = this.formGroup.controls['group-firstName'] as FormGroup;
    // get a reference to the model that represents your form group
    const nestedFormGroupModel = this.formGroupModel[0] as DynamicFormGroupModel;
    // create a new form control to add
    const newModel = new DynamicInputModel({
      id: 'input-address',
      label: 'Address (Dynamically added via addFormGroupControl)',
      maxLength: 42,
      hint: 'Enter your home address',
      placeholder: 'Dynamically added Input'
    });

    // add a new input after a second
    setTimeout(() => {
      this.formService.addFormGroupControl(nestedFormGroup, nestedFormGroupModel, newModel);
    }, 1000);

    const users$ = this.dataService.getUsers();

    users$.subscribe((observable) => {
      this.users = observable.slice(0, 3).join(', ');
    }, (err) => {
      console.warn(err);
    });

    this.dataService.birthdaySource.subscribe((searchStream) => {

      const bday = this.dataService.getBirthday(searchStream);

      this.searchStream = searchStream;
      this.curBday = bday;
      this.footer.activeBirthday = bday;
    });
    // launch a notification
    setTimeout(() => {
      this.notificationService.message(
        NotificationType.WARNING,
        'Notification Header.',
        'Notification Message.',
        false,
        null,
        null
      );
    }, 1200);

    // attached notifications to property for the view
    this.notifications = this.notificationService.getNotifications();
  }

  launchNotification() {
    this.notificationService.message(
      NotificationType.WARNING,
      'Default Header.',
      'Default Message.',
      false,
      null,
      null
    );
  }

  // addItem() {
  //   this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
  // }
  //
  // clear() {
  //   this.formService.clearFormArray(this.formArrayControl, this.formArrayModel);
  // }

  // callback for keyup event
  handleBirthdayChange(text: string) {

    const bday = this.dataService.getBirthday(text);

    this.searchStream = text;
    this.curBday = bday;
    this.footer.activeBirthday = bday;

  }
}
