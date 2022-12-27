import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe extends CurrencyPipe implements PipeTransform {

  transform(value: any,
            currencyCode: string = 'BRL',
            display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
            digitsInfo: string = '1.2-2'): any {
    return super.transform(value, currencyCode, display, digitsInfo);
  }

}
