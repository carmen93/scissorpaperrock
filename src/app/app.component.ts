import { Component } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  scores = {
    computer: 0,
    person: 0
  };

  computer: any = false;
  person: any = false;

  choices = ['rock', 'paper', 'scissors'];

  random() {
    return Math.floor(Math.random() * this.choices.length);
  }

  async play(answer: string) {
    const computer = this.choices[this.random() | 0];
    const match = computer + '_' + answer;
    console.log('computer', computer);
    switch (match) {
      case 'rock_paper':
      case 'paper_scissors':
      case 'scissors_rock':
        console.log('Computer loses!');
        console.log('You win!');
        this.scores.person++;
        var result = "YOU WIN!";
        break;
      case 'paper_rock':
      case 'scissors_paper':
      case 'rock_scissors':
        console.log('Computer wins!');
        console.log('You lose!');
        this.scores.computer++;
        var result = "YOU LOSE!";
        break;
      default:
        console.log('Draw!');
        this.scores.computer++;
        this.scores.person++;
        var result = "DRAW!";
    }

    this.computer = computer;
    this.person = answer;

    setTimeout(() => {
      alert(result);
    },
      1000);

  }

  reset() {
    this.computer = false;
    this.person = false;
    this.scores.computer = 0;
    this.scores.person = 0;
  }
}
