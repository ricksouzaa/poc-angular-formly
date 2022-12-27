import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFormat'
})
export class DecimalFormatPipe extends DecimalPipe implements PipeTransform {

  transform(value: any, digitsInfo: string = '1.2-2'): any {
    return super.transform(value, digitsInfo);
  }

}
