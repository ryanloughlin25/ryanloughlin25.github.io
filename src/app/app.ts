import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
//import {Square} from './square';
@Component({
  selector: 'board',
  templateUrl: 'board.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  styleUrls: ['board.css'],
})
export class BoardComponent {
  size = 6;
  squares = Array(this.size).fill().map(
    () => Array(this.size).fill().map(
      () => new Object()
    )
  );
  selectedSquare = 5;

  clickSquare(i, j) {
    console.log('clicked ' + i +', ' + j);
    this.selectedSquare = this.squares[i][j];
  }
}
bootstrap(BoardComponent);
