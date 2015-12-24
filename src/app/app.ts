import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Square} from './square';
import {Piece} from './piece';

@Component({
  selector: 'board',
  templateUrl: 'board.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  styleUrls: ['board.css'],
})
export class BoardComponent {
  size = null;
  squares = null;
  selectedX = null;
  selectedY = null;
  selectedSquare = null;

  constructor() {
    this.size = 6;
    this.squares = Array(this.size).fill(null).map(
      () => Array(this.size).fill(null).map(
        () => new Square()
      )
    );
    this.hardcodePieces();
  }

  hardcodePieces() {
    this.squares[2][1].piece = new Piece('footman', 'white');
    this.squares[2][3].piece = new Piece('footman', 'white');
    this.squares[4][3].piece = new Piece('footman', 'black');
  }

  updateAvailableMoves(piece:Piece) {
    this.clearAvailableMoves();
    for (let i = 0; i < piece.moves.length; i++) {
      let move = piece.moves[i];
      let x = move.x + this.selectedX;
      let y = move.y + this.selectedY;
      let moveSquare = this.squares[y][x];
      if (x >= 0 && x < this.size && y >= 0 && y < this.size) {
        if (!moveSquare.piece ||
            moveSquare.piece.color != this.selectedSquare.piece.color) {
          moveSquare.moveType = 'basic';
        }
      }
    }
  }

  clearAvailableMoves() {
    for (let y = 0; y < this.squares.length; y++) {
      for (let x = 0; x < this.squares[y].length; x++) {
        this.squares[y][x].moveType = null;
      }
    }
  }

  clickSquare(y, x) {
    let clickedSquare = this.squares[y][x];
    console.log(clickedSquare);
    //TODO: if statement should respect piece color
    if (clickedSquare.piece) {
      this.selectedSquare = clickedSquare;
      this.selectedY = y;
      this.selectedX = x;
      this.updateAvailableMoves(clickedSquare.piece);
    } else {
      if (clickedSquare.moveType) {// === 'basic') {
        clickedSquare.piece = this.selectedSquare.piece;
        this.selectedSquare.piece = null;
      }
      this.selectedSquare = null;
      this.selectedY = null;
      this.selectedX = null;
      this.clearAvailableMoves();
    }
  }
}
bootstrap(BoardComponent);
