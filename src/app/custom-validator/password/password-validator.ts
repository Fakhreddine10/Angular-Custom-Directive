
import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export const passwordval = (regexval: string): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
       let regex:RegExp=new RegExp(regexval);
       let match:boolean=regex.test(control.value);
      if(match) return {passwordval:true};
      return null;
  };
};