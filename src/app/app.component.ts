import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';

import { InfoStatusCardConfig } from 'patternfly-ng';
import { SharedDataService } from './shared-data.service';
import { FooterComponent } from './footer/footer.component';

// forms stuff
import { MY_FORM_MODEL } from './custom-forms/form.model';
import { FormGroup } from '@angular/forms';
import {
  DynamicFormControlModel,
  DynamicFormService,
  DynamicFormGroupModel,
  DynamicInputModel
} from '@ng-dynamic-forms/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

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
  formModel: DynamicFormControlModel[] = MY_FORM_MODEL;
  formGroup: FormGroup;

  constructor(
    private dataService: SharedDataService,
    private formService: DynamicFormService
   ) {}

  ngOnInit() {
    // create a form group
    this.formGroup = this.formService.createFormGroup(this.formModel);
    // get a reference to the nested form group by ID
    const nestedFormGroup = this.formGroup.controls['group-firstName'] as FormGroup;
    // get a reference to the model that represents your form group
    const nestedFormGroupModel = this.formModel[0] as DynamicFormGroupModel;
    // create a new form control to add
    const newModel = new DynamicInputModel({
      id: 'input-address',
      label: 'Address',
      maxLength: 42,
      hint: 'Enter your home address',
      placeholder: '100 Grove Drive'
    });

    // add a new input after a second
    setTimeout(() => {
      // console.log(this.formService.removeFormGroupControl(1, this.formGroup, newGroupModel));
      this.formService.addFormGroupControl(nestedFormGroup, nestedFormGroupModel, newModel);
      console.log(nestedFormGroup);
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

  }

  // callback for keyup event
  handleBirthdayChange(text: string) {

    const bday = this.dataService.getBirthday(text);

    this.searchStream = text;
    this.curBday = bday;
    this.footer.activeBirthday = bday;

  }
}
