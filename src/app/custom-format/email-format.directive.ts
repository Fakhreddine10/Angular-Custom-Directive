import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[emailprefix]'
})
export class EmailFormatDirective {

@Input('emailprefix')emailformat ;

  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    let valueOfEmail :string =this.el.nativeElement.value;
    this.el.nativeElement.value=valueOfEmail.concat(this.emailformat);    
  }

}