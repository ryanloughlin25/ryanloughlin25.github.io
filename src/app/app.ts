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
  size:number;
  squares:Square[][];
  pieces:Piece[];
  selectedColumn:number;
  selectedRow:number;
  selectedSquare:Square;
  turn:string;
  firebase:any;

  constructor() {
    let board = this;
    this.size = 6;
    this.turn = 'white';
    this.squares = Array(this.size).fill(null).map(
      () => Array(this.size).fill(null).map(
        () => new Square()
      )
    );
    this.hardcodePieces();
    this.firebase = new Firebase("https://ryanloughlin.firebaseio.com/");
    this.firebase.child('game').on('value', function(snapshot) {
      let game = snapshot.val();
      if (game) {
        let firebaseBoard = JSON.parse(game.squares);
        for (let row = 0; row < firebaseBoard.length; row++) {
          for (let column = 0; column < firebaseBoard[row].length; column++) {
            let firebaseSquare = firebaseBoard[row][column];
            let square = new Square();
            if (firebaseSquare.piece) {
              square.piece = new Piece(firebaseSquare.piece.rank, firebaseSquare.piece.color, firebaseSquare.piece.side);
            }
            board.squares[row][column] = square;
          }
        }
        board.turn = game.turn;
      }
    });
  }

  resetBoard() {
    this.turn = 'white';
    this.squares = Array(this.size).fill(null).map(
      () => Array(this.size).fill(null).map(
        () => new Square()
      )
    );
    this.hardcodePieces();
    this.updateFirebase();
  }

  updateFirebase() {
    this.firebase.set({
      game: {
        squares: JSON.stringify(this.squares),
        turn: this.turn,
      },
    });
  }

  hardcodePieces() {
    this.squares[0][1].piece = new Piece('footman', 'white');
    this.squares[0][2].piece = new Piece('duke', 'white');
    this.squares[1][2].piece = new Piece('footman', 'white');

    this.squares[5][1].piece = new Piece('footman', 'black');
    this.squares[5][2].piece = new Piece('duke', 'black');
    this.squares[4][2].piece = new Piece('footman', 'black');
  }

  onBoard(row:number, column:number) {
    return column >= 0 && column < this.size && row >= 0 && row < this.size;
  }

  updateAvailableMoves(piece:Piece) {
    this.clearAvailableMoves();
    let allMoves = piece.getMoves();
    for (var moveType in allMoves) {
      let moves = allMoves[moveType];
      for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        let row = move.row + this.selectedRow;
        let column = move.column + this.selectedColumn;
        if (this.onBoard(row, column)) {
          let moveSquare = this.squares[row][column];
          if (!moveSquare.piece ||
              moveSquare.piece.color != this.selectedSquare.piece.color) {
            if (moveType === 'basic') {
              moveSquare.moveType = moveType;
            } else if (moveType === 'slide') {
              while (this.onBoard(row, column)) {
                let moveSquare = this.squares[row][column];
                if (!moveSquare.piece) {
                  moveSquare.moveType = moveType;
                } else {
                  if (moveSquare.piece.color === this.turn) {
                    break;
                  } else {
                    moveSquare.moveType = moveType;
                    break;
                  }
                }
                row += move.row;
                column += move.column;
              }
            }
          }
        }
      }
    }
  }

  clearAvailableMoves() {
    for (let row = 0; row < this.squares.length; row++) {
      for (let column = 0; column < this.squares[row].length; column++) {
        this.squares[row][column].moveType = null;
      }
    }
  }

  clickSquare(row, column) {
    let clickedSquare = this.squares[row][column];
    console.log(clickedSquare);
    if (clickedSquare.piece && clickedSquare.piece.color === this.turn) {
      //select piece
      this.selectedSquare = clickedSquare;
      this.selectedRow = row;
      this.selectedColumn = column;
      this.updateAvailableMoves(clickedSquare.piece);
    } else {
      if (clickedSquare.moveType) {// === 'basic') {
        if (clickedSquare.piece && clickedSquare.piece.rank === 'duke') {
          alert(this.turn + ' wins!');
          this.resetBoard();
          return;
        }
        //move piece
        clickedSquare.piece = this.selectedSquare.piece;
        clickedSquare.piece.flip();
        this.selectedSquare.piece = null;
        //change turn
        this.turn = this.turn === 'white' ? 'black' : 'white';
        this.updateFirebase();
      }
      //unselect piece
      this.selectedSquare = null;
      this.selectedRow = null;
      this.selectedColumn = null;
      this.clearAvailableMoves();
    }
  }
}
bootstrap(BoardComponent);
