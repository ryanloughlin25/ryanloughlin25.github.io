var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var square_1 = require('./square');
var piece_1 = require('./piece');
var BoardComponent = (function () {
    function BoardComponent() {
        var _this = this;
        this.size = 6;
        this.turn = 'white';
        this.squares = Array(this.size).fill(null).map(function () { return Array(_this.size).fill(null).map(function () { return new square_1.Square(); }); });
        this.hardcodePieces();
    }
    BoardComponent.prototype.hardcodePieces = function () {
        this.squares[0][1].piece = new piece_1.Piece('footman', 'white');
        this.squares[0][2].piece = new piece_1.Piece('duke', 'white');
        this.squares[1][2].piece = new piece_1.Piece('footman', 'white');
        this.squares[5][1].piece = new piece_1.Piece('footman', 'black');
        this.squares[5][2].piece = new piece_1.Piece('duke', 'black');
        this.squares[4][2].piece = new piece_1.Piece('footman', 'black');
    };
    BoardComponent.prototype.onBoard = function (row, column) {
        return column >= 0 && column < this.size && row >= 0 && row < this.size;
    };
    BoardComponent.prototype.updateAvailableMoves = function (piece) {
        this.clearAvailableMoves();
        var allMoves = piece.getMoves();
        for (var moveType in allMoves) {
            var moves = allMoves[moveType];
            for (var i = 0; i < moves.length; i++) {
                var move = moves[i];
                var row = move.row + this.selectedRow;
                var column = move.column + this.selectedColumn;
                if (this.onBoard(row, column)) {
                    var moveSquare = this.squares[row][column];
                    if (!moveSquare.piece ||
                        moveSquare.piece.color != this.selectedSquare.piece.color) {
                        if (moveType === 'basic') {
                            moveSquare.moveType = moveType;
                        }
                        else if (moveType === 'slide') {
                            while (this.onBoard(row, column)) {
                                var moveSquare_1 = this.squares[row][column];
                                if (!moveSquare_1.piece) {
                                    moveSquare_1.moveType = moveType;
                                }
                                else {
                                    if (moveSquare_1.piece.color === this.turn) {
                                        break;
                                    }
                                    else {
                                        moveSquare_1.moveType = moveType;
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
    };
    BoardComponent.prototype.clearAvailableMoves = function () {
        for (var row = 0; row < this.squares.length; row++) {
            for (var column = 0; column < this.squares[row].length; column++) {
                this.squares[row][column].moveType = null;
            }
        }
    };
    BoardComponent.prototype.clickSquare = function (row, column) {
        var clickedSquare = this.squares[row][column];
        console.log(clickedSquare);
        if (clickedSquare.piece && clickedSquare.piece.color === this.turn) {
            //select piece
            this.selectedSquare = clickedSquare;
            this.selectedRow = row;
            this.selectedColumn = column;
            this.updateAvailableMoves(clickedSquare.piece);
        }
        else {
            if (clickedSquare.moveType) {
                //move piece
                clickedSquare.piece = this.selectedSquare.piece;
                clickedSquare.piece.flip();
                this.selectedSquare.piece = null;
                //change turn
                this.turn = this.turn === 'white' ? 'black' : 'white';
            }
            //unselect piece
            this.selectedSquare = null;
            this.selectedRow = null;
            this.selectedColumn = null;
            this.clearAvailableMoves();
        }
    };
    BoardComponent = __decorate([
        angular2_1.Component({
            selector: 'board',
            templateUrl: 'board.component.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            styleUrls: ['board.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], BoardComponent);
    return BoardComponent;
})();
exports.BoardComponent = BoardComponent;
angular2_1.bootstrap(BoardComponent);
//# sourceMappingURL=app.js.map