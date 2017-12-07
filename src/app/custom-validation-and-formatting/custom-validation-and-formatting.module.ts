import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxOccDirective } from "../custom-format/max-occ.directive";
import { InputFormatDirective } from "../custom-format/input-format.directive";
import { EmailFormatDirective } from "../custom-format/email-format.directive";
import { PasswordValidator } from "../custom-validator/password/password-validator.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaxOccDirective,InputFormatDirective,EmailFormatDirective,PasswordValidator],
  exports: [MaxOccDirective,InputFormatDirective,EmailFormatDirective,PasswordValidator]
})
export class CustomValidationAndFormattingModule { }
