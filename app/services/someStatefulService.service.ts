/**
 * Created by Franz on 6/5/2016.
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import _ = require ('lodash');

@Injectable() 
export class SomeStatefulService {
  _someValue: string = 'Not set';
  
  get someValue () : string {
    return this._someValue;
  }
  set someValue(value:string) {
    this._someValue = value;
  }

  private someValueSource = new Subject<string>();
  somValueObservable = this.someValueSource.asObservable();

  constructor() {}
}

