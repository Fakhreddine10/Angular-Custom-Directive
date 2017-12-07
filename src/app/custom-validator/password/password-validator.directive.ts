import { Directive, Input, forwardRef, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl,ValidationErrors } from '@angular/forms';
import {passwordval} from './password-validator';

const PASSWORD_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PasswordValidator),
  multi: true
};
@Directive({
  selector: '[passwordvalidator][formControlName],[passwordvalidator][formControl],[passwordvalidator][ngModel]',
  providers: [PASSWORD_VALIDATOR]
})
export class PasswordValidator implements OnInit,Validator,OnChanges {
  @Input('passwordvalidator') regexvalue:string;

  constructor() { }

 private validator: ValidatorFn;
 private onChange: () => void;

  ngOnInit(): void {
    this.validator=passwordval(this.regexvalue);
    
  }
   ngOnChanges(changes: SimpleChanges): void {
    for (let key in changes) {
      if (key === 'passwordvalidator') {
        console.log(changes[key].currentValue);
        this.validator = passwordval(changes[key].currentValue);
        if (this.onChange) this.onChange();
      }
    }
  }
  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
  registerOnValidatorChange(fn: () => void): void {
    this.onChange=fn;
  }
  

}

