angular.module('dukeApp', [])
  .controller('GameController', function() {
    var game = this;

    game.board = [
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
      [{}, {}, {}, {}, {}, {},],
    ];

    game.setAvailableMoves = function() {
      angular.forEach(game.selectedPiece.square.moves, function(move) {
        console.log(move);
        var r = +game.selectedPiece.row + move.y;
        var c = +game.selectedPiece.column + move.x;
        if (r >= 0 && r < 6 && c >= 0 && c < 6) {
          console.log(r);
          console.log(c);
          var moveSquare = game.board[r][c]
          if (!moveSquare.piece) {
            moveSquare.moveType = 'move';
          }
        }
      });
    };

    game.unsetAvailableMoves = function() {
      console.log('unselect');
      angular.forEach(game.board, function(row) {
        angular.forEach(row, function(square) {
          delete square.moveType;
        });
      });
    }

    game.movePiece = function() {
      console.log('move');
      game.board[game.selectedPiece.row][game.selectedPiece.column] = {};
      game.board[game.clickedRow][game.clickedColumn] = game.selectedPiece.square;
    }

    game.clickSquare = function(row, column, square) {
      game.clickedRow = row;
      game.clickedColumn = column;
      if (square.piece) {
        console.log(square);
        game.selectedPiece = {
          row: row,
          column: column,
          square: square,
        };
        game.setAvailableMoves();
      } else if (square.moveType) {
        if (square.moveType === 'move') {
          game.unsetAvailableMoves();
          game.movePiece();
          game.selectedPiece = null;
        }
      }
    };

    //hardcode things
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
