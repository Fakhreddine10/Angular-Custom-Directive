export class Utils{

    static formattingDate(format:string,date:string):string{
    const longFormat="dd/mm/yyyy";
    const shortFormat="mm/yyyy"; 
    let dd:string=date.substr(0,2);
    let mm:string=date.substr(2,2);
    let yyyy:string=date.substr(4,4);
    if(longFormat===format){
      return dd+"/"+mm+"/"+yyyy;
    }
    if(shortFormat===format){
      return mm+"/"+yyyy;
    }

  }
}