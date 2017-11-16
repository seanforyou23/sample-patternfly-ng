import {
  DynamicFormControlModel,
  DynamicFormGroupModel,
  DynamicInputModel
} from '@ng-dynamic-forms/core';

export const MY_FORM_MODEL: DynamicFormControlModel[] = [

  new DynamicFormGroupModel({
    id: 'group-firstName',
    legend: 'First Name Legend',
    group: [
      new DynamicInputModel({
        id: 'input-firstName',
        label: 'First Name',
        maxLength: 42,
        hint: 'Enter your first name',
        placeholder: 'First Name'
      }),
      new DynamicInputModel({
        id: 'input-firstNamePrefix',
        label: 'Prefix',
        maxLength: 10,
        hint: 'Enter your first name prefix',
        placeholder: 'Mrs.'
      })
    ]
  }),
  new DynamicFormGroupModel({
    id: 'group-lastName',
    legend: 'Last Name Legend',
    group: [
      new DynamicInputModel({
        id: 'input-lastName',
        label: 'Last Name',
        maxLength: 42,
        placeholder: 'Enter Last Name'
      }),
      new DynamicInputModel({
        id: 'input-lastNameSuffix',
        label: 'Suffix',
        maxLength: 10,
        placeholder: 'IV'
      })
    ]
  })


];
