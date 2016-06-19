/**
 * Created by Franz on 5/7/2016.
 */
import {Directive, ElementRef, OnInit} from '@angular/core';

/**
 * Be careful with this directive.  Applying it too liberally may cause issues.  It also conflicts when creating
 * a foundation control programmatically.  Therefore, only use it on a subset of components that you KNOW you need
 * it on and ARE NOT creating foundation controls programmatically.
 */
@Directive({
  selector: '[initFoundation]'
})
export class InitFoundation implements OnInit {
  element : ElementRef;
  constructor(el: ElementRef) {
    this.element = el;
  }
  ngOnInit() {
    $(this.element.nativeElement).foundation();
  }
}
