/**
 * Created by Franz on 5/8/2016.
 */
import {Directive,provide} from '@angular/core';
import {Control, NG_VALIDATORS} from '@angular/common';
import {EMAIL_REGEX} from '../../util/rejex';

function validateEmail(control: Control) {
  return EMAIL_REGEX.test(control.value) ? null : {
    validateEmail: {valid: false}
  };
}

@Directive({
  selector: '[validateEmail][ngControl]',
  providers: [
    provide(NG_VALIDATORS, {
      useValue: validateEmail,
      multi: true
    })
  ]
})
export class EmailValidator {
  constructor() {}
}