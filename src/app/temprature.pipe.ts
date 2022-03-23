import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temprature'
})
export class TempraturePipe implements PipeTransform {

  transform(value: any,unit:string) {
    var temp
    if(value){
      if(unit='Fahrenheit')
        temp=(value * (9/5)) + 32
      if(unit='Celsius')
      temp=(value-32)/ (9/5)
    return temp
    }
    return null;
  }

}
