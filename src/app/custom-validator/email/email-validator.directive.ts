import { Directive, Input, forwardRef, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl,ValidationErrors } from '@angular/forms';
import { emailval } from "./email.validator";

const EMAIL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
@Directive({
  selector: '[emailvalidator][formControlName],[emailvalidator][formControl],[emailvalidator][ngModel]',
  providers: [EMAIL_VALIDATOR]
})
export class EmailValidator implements OnInit,Validator,OnChanges {
  @Input('emailvalidator') prefix:string;

  constructor() { }

 private validator: ValidatorFn;
 private onChange: () => void;

  ngOnInit(): void {
    this.validator=emailval(this.prefix);
    
  }
   ngOnChanges(changes: SimpleChanges): void {
    for (let key in changes) {
      if (key === 'emailvalidator') {
        this.validator = emailval(changes[key].currentValue);
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
