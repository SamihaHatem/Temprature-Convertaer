import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temprature'
})
export class TempraturePipe implements PipeTransform {

  transform(value: any,unit:string) {
    var temp
    if(value && !isNaN(value)){

      if(unit=='Celsius'){
        temp=(value-32)/1.8
     }
     if(unit=='Fahrenheit'){
        temp=(value*1.8)+32
     }
    
    return temp
    }
    return null;
  }

}
