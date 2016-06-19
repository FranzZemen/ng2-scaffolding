/**
 * Created by Franz on 5/8/2016.
 */
import {Directive,provide} from '@angular/core';
import {Control, NG_VALIDATORS} from '@angular/common';
import {USERNAME_REGEX} from '../../util/rejex';

function validateUsername(control: Control) {
  return USERNAME_REGEX.test(control.value) ? null : {
    validateUsername: {valid: false}
  };
}

@Directive({
  selector: '[validateUsername][ngControl]',
  providers: [
    provide(NG_VALIDATORS, {
      useValue: validateUsername,
      multi: true
    })
  ]
})
export class UsernameValidator {
  constructor() {}
}