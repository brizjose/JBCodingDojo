import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  n;
  evens: number[] = [];
  odds: number[] = [];

  startGame() {
    this.n = setInterval(() => {
      const number = this.generateNumber(100);
      if (number % 2 === 0) {
        console.log(number, 'even');
        this.evens.push(number);
      } else {
        console.log(number, 'odd');
        this.odds.push(number);
      }
    }, 600);
  }

  stopGame() {
    clearInterval(this.n);
  }

  generateNumber(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  clearGame(): void {
    this.evens = [];
    this.odds = [];
  }
}
