import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomValidationAndFormattingModule } from "./custom-validation-and-formatting/custom-validation-and-formatting.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent, 
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
