/**
 * Created by Franz on 6/19/2016.
 */
import {Component} from '@angular/core';

@Component ({
  selector: 'some-thing',
  templateUrl: 'app/components/someThing.component.html',
  directives: [],
  styleUrls: ['app/components/someThing.component.css']
})
export class SomeThing {
  thing: string = 'I\'m a thing';
  constructor () {}
}