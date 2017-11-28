import {
  DynamicFormControlModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicCheckboxModel,
  DynamicFormGroupModel,
  DynamicFormArrayModel
} from '@ng-dynamic-forms/core';

export const MY_BASIC_FORM_MODEL: DynamicFormControlModel[] = [
  // basic form model with form controls
  new DynamicInputModel({
    id: 'sampleInput',
    label: 'Sample Input',
    maxLength: 42,
    hint: 'my hint prop',
    placeholder: 'Sample input'
  }, {
    element: {
      hint: 'foo'
    },
    grid: {
      hint: 'bar'
    }
  }),
  new DynamicRadioGroupModel<string>({
    id: 'sampleRadioGroup',
    label: 'Sample Radio Group',
    options: [
      {label: 'Option 1', value: 'option-1'},
      {label: 'Option 2', value: 'option-2'},
      {label: 'Option 3', value: 'option-3'}
    ],
    value: 'option-3'
  }),
  new DynamicCheckboxModel({id: 'sampleCheckbox', label: 'I do agree'})
];

export const MY_GROUP_FORM_MODEL: DynamicFormControlModel[] = [
  // form group model
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
        placeholder: 'Mrs'
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
        placeholder: 'Enter Last Name',
        hint: 'Enter Your Last Name Here'
      }),
      new DynamicInputModel({
        id: 'input-lastNameSuffix',
        label: 'Suffix',
        maxLength: 10,
        placeholder: 'IV',
        hint: 'Enter Your Last Name Suffix here'
      })
    ]
  })
];

export const MY_ARRAY_FORM_MODEL: DynamicFormArrayModel[] = [
  new DynamicFormArrayModel({
    id: 'myFormArray',
    initialCount: 2,
    groupFactory: () => {
      return [
        new DynamicInputModel({
          id: 'myFormArrayId',
          label: 'This is an array form label'
        })
      ];
    }
  })
];
