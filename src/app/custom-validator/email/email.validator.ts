
import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export const emailval = (prefix: string): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
      let value:string=control.value;
      let match:boolean=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);   
      if(match){
          if(prefix){
              if(value.includes(prefix)){
                  return {emailval:true};
                }
                return null;
          }
          return {emailval:true};
        }
      return null;
    };
  };