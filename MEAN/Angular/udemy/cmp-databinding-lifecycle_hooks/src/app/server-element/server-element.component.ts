import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('in the constructor');
  }

  // onChanges takes an argument
  // changes observes the bound element which in here is an "@Input() element"
  // it logs current and previous values of tracked elements
  ngOnChanges(changes: SimpleChanges) {
    console.log('from onChanges we see...', changes);
  }

  ngOnInit() {
    console.log('from ngOnInit');
  }

  // doCheck tracks every change.  if there's a click, an input, a promise is returned
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
 
  ngAfterViewChecked() {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy';)
  }


}
