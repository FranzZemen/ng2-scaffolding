/**
 * Created by Franz on 5/28/2016.
 */
import {Directive,provide} from '@angular/core';
import {Control, NG_VALIDATORS} from '@angular/common';
import {CURRENCY_REGEX} from '../../util/rejex';

function validateCurrency(control: Control) {
  
  let currencyRegex = /^([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/i;
  return CURRENCY_REGEX.test(control.value) ? null : {
    validateCurrency: {valid: false}
  };
}

@Directive({
  selector: '[validateCurrency][ngControl]',
  providers: [
    provide(NG_VALIDATORS, {
      useValue: validateCurrency,
      multi: true
    })
  ]
})
export class CurrencyValidator {
  constructor() {}
}