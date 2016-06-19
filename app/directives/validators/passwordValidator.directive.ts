/**
 * Created by Franz on 5/8/2016.
 */
import {Directive,provide} from '@angular/core';
import {Control, NG_VALIDATORS} from '@angular/common';
import {PASSWORD_REGEX} from '../../util/rejex';

function validatePassword(control: Control) {
  return PASSWORD_REGEX.test(control.value) ? null : {
    validatePassword: {valid: false}
  };
}

@Directive({
  selector: '[validatePassword][ngControl]',
  providers: [
    provide(NG_VALIDATORS, {
      useValue: validatePassword,
      multi: true
    })
  ]
})
export class PasswordValidator {
  constructor() {}
}