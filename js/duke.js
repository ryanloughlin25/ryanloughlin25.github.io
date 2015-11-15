angular.module('dukeApp', [])
  .controller('GameController', function() {
    var game = this;
    game.selectedPiece = null;
    game.board = [
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
    ];
    game.blah = function(row, column, square) {
      if (square.piece) {
        console.log(square);
        game.selectedPiece = square;
        //game.board[0][1].foo = "available_move";
        angular.forEach(game.selectedPiece.moves, function(move) {
          console.log(move);
          var r = +row + move.y;
          var c = +column + move.x;
          if (r >= 0 && r < 6 && c >= 0 && c < 6) {
            console.log(r);
            console.log(c);
            var moveSquare = game.board[r][c]
            if (!moveSquare.piece) {
              moveSquare.foo = "available_move";
            }
          }
        });
      }
    };
    game.foo = function(a, b) {
      console.log(a);
      console.log(b);
    }
    game.board[0][0] = {
      piece: 'footman',
      side: 'front',
      moves: [
        {x: 0, y: -1},
        {x: 0, y: 1},
        {x: -1, y: 0},
        {x: 1, y:0},
      ],
    };
  });
