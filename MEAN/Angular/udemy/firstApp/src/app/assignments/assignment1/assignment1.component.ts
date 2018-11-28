import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styles: [`
    * {
      color: dodgerblue;
    }
  `]
})
export class Assignment1Component implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit() {
  }

  resetUser(event: Event) {
    this.userName = '';
  }

}
