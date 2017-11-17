import {
  DynamicFormControlModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicCheckboxModel,
  DynamicFormGroupModel
} from '@ng-dynamic-forms/core';

export const MY_FORM_MODEL: DynamicFormControlModel[] = [
  // // very basic example config
  // new DynamicInputModel({
  //   id: "sampleInput",
  //   label: "Sample Input",
  //   maxLength: 42,
  //   placeholder: "Sample input"
  // }),
  // new DynamicRadioGroupModel<string>({
  //   id: "sampleRadioGroup",
  //   label: "Sample Radio Group",
  //   options: [
  //     {label: "Option 1", value: "option-1"},
  //     {label: "Option 2", value: "option-2"},
  //     {label: "Option 3", value: "option-3"}
  //   ],
  //   value: "option-3"
  // }),
  // new DynamicCheckboxModel({id: "sampleCheckbox", label: "I do agree"})

  // groups config
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
