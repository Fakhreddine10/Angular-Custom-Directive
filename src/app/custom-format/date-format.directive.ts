import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Utils } from "../utilities/utils";

@Directive({
  selector: '[dateformat]'
})
export class DateFormatDirective {

@Input('dateformat') inputformat

  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    let date:string=this.el.nativeElement.value;
    this.el.nativeElement.value=Utils.formattingDate(this.inputformat,date);
    
  }
}
