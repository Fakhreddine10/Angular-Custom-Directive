import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[maxocc]'
})
export class MaxOccDirective {

@Input('maxocc') maxoccvalue;
private maxreached:boolean=false;
private fixedinput:string;
  constructor(private el:ElementRef) { }

@HostListener("keydown", ["$event"]) onkeyup(event: KeyboardEvent){
  console.log("djjd");
    let value:string=this.el.nativeElement.value;
  if(value.length === (this.maxoccvalue as number))
        {
         this.fixedinput=value;
         this.maxreached=true;
        }
  if(!this.maxreached){
         return;
    }
  this.el.nativeElement.vaule=this.fixedinput;
  }
}
