var point_1 = require('./point');
var Piece = (function () {
    function Piece(rank, color) {
        this.rank = rank;
        this.color = color;
        this.side = 'front';
        this.moves = {
            'footman': {
                'front': {
                    'basic': [
                        new point_1.Point(-1, 0),
                        new point_1.Point(0, -1),
                        new point_1.Point(0, 1),
                        new point_1.Point(1, 0),
                    ],
                },
                'back': {
                    'basic': [
                        new point_1.Point(-2, 0),
                        new point_1.Point(-1, -1),
                        new point_1.Point(-1, 1),
                        new point_1.Point(1, -1),
                        new point_1.Point(1, 1),
                    ],
                }
            },
            'duke': {
                'front': {
                    'slide': [
                        new point_1.Point(0, -1),
                        new point_1.Point(0, 1),
                    ],
                },
                'back': {
                    'slide': [
                        new point_1.Point(-1, 0),
                        new point_1.Point(1, 0),
                    ],
                }
            },
        };
    }
    Piece.prototype.getMoves = function () {
        return this.moves[this.rank][this.side];
    };
    Piece.prototype.flip = function () {
        this.side = this.side === 'front' ? 'back' : 'front';
    };
    return Piece;
})();
exports.Piece = Piece;
//# sourceMappingURL=piece.js.map