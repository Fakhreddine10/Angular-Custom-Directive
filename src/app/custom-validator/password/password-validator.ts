
import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export const passwordval = (regexval: string): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
      console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(control.value));
      let match:boolean=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(control.value);
      if(match) return {passwordval:true};
      return null;
  };
};