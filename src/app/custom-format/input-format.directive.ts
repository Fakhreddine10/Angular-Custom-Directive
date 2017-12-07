import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[textformat]'
})
export class InputFormatDirective {

@Input('textformat') inputFormat;

  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    let valueOfField :string =this.el.nativeElement.value;
    if ("uppercase"===((this.inputFormat as string))){
      this.el.nativeElement.value=valueOfField.toUpperCase();
    }
    if ("lowercase"===((this.inputFormat as string))){
      this.el.nativeElement.value=valueOfField.toLowerCase();
    }
    
  }

}