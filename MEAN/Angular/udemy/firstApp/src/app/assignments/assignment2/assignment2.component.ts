import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styles: [`
    .fivePlus {
      background-color: lightgray;
    }
  `]
})
export class Assignment2Component implements OnInit {
  togglerPress = true;
  counter = 0;
  counts: number[] = [];
  timestamps: object[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleView(): void {
    this.togglerPress = !this.togglerPress;
  }

  countMore(): void {
    this.counter++;
    this.counts.push(this.counter);
    this.timestamps.push(new Date());

  }

  resetCounter(): void {
    this.counter = 0;
    this.counts = [];
    this.timestamps = [];
  }

}
