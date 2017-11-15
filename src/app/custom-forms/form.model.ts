import {
  DynamicFormControlModel,
  DynamicInputModel
} from '@ng-dynamic-forms/core';

export const MY_APP_MODEL: DynamicFormControlModel[] = [
  new DynamicInputModel({
    id: 'sample input',
    label: 'Sample Input',
    maxLength: 42,
    placeholder: 'Type here'
  })

];
