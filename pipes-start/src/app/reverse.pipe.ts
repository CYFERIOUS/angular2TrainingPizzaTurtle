import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {

    var splitString = value.split(""); 
   
    var reverseArray = splitString.reverse(); 
 
    var joinAgain = reverseArray.join(""); 
    
    return joinAgain; 
  }

}
