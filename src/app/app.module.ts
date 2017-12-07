import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomValidationAndFormattingModule } from "./custom-validation-and-formatting/custom-validation-and-formatting.module";
import { FormsModule } from "@angular/forms";
import { EmailValidatorDirective } from './custom-validator/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective, 
  ],
  imports: [
    BrowserModule,
    CustomValidationAndFormattingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
