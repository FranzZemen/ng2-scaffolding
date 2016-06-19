import { Component,Type } from '@angular/core';
import {InitFoundation} from './directives/initFoundation.directive';
import {SomeStatefulService} from './services/someStatefulService.service';
import {SomeThing} from './components/someThing/someThing.component';

let thisAppComponent;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [SomeThing],
  providers: [SomeStatefulService]
})
export class AppComponent {
  hello: string = 'Hello World';
  constructor() {
  }
}


