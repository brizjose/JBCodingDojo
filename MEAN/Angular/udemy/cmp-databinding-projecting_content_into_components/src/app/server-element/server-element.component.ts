import { Component, OnInit, Input, ContentChild, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() element: {type: string, name: string, content: string};

  @ContentChild('paragraph') paragraph: ElementRef;

  @ViewChild('header') header: ElementRef;

  constructor() { }

  // the following logs will help explain when data becomes available for the change detection methods:
  // also remember the difference between the ContentInit cycle and the ViewInit cycle.
  // see app.component.html for more info about the Content cycle.

  ngOnInit() {
    console.log('Init: this is the content cycle [ ' + this.paragraph.nativeElement.textContent + ' ] from on init');
    console.log('Init: this is the view cycle [ ' + this.header.nativeElement.textContent + ' ] from on init');
  }

  // at the end of the content init cycle...
  ngAfterContentInit(): void {
    console.log('AfterContent: this is the content cycle [ ' + this.paragraph.nativeElement.textContent + ' ] from after content init');
    console.log('AfterContent: this is the view cycle [ ' + this.header.nativeElement.textContent + ' ] from after content init');
  }

  // at the end of the view init cycle...
  // DOM element values are only available from afterViewInit...
  ngAfterViewInit(): void {
    console.log('AfterView: this is the content cycle [ ' + this.paragraph.nativeElement.textContent + ' ] from after view init');
    console.log('AfterView: this is the view cycle [ ' + this.header.nativeElement.textContent + ' ] from after view init');
  }

}
