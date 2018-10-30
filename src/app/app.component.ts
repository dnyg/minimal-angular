import * as $ from 'jquery';
import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div #container></div>'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container') element: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      ($(this.element.nativeElement) as any).fullCalendar();
    });
  }
}
