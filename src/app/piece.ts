import {Point} from './point'

export class Piece {
  rank: string;
  color: string;
  side: string;
  moves: { [side: string]: Point[] };

  constructor(
    rank: string,
    color: string
  ) {
    this.rank = rank;
    this.color = color;
    this.side = 'front';
    this.moves = {
      'footman': {
        'front': {
          'basic': [
            new Point(-1, 0),
            new Point(0, -1),
            new Point(0, 1),
            new Point(1, 0),
          ],
        }
        'back': {
          'basic': [
            new Point(-2, 0),
            new Point(-1, -1),
            new Point(-1, 1),
            new Point(1, -1),
            new Point(1, 1),
          ],
        }
      },
      'duke': {
        'front': {
          'slide': [
            new Point(0, -1),
            new Point(0, 1),
          ],
        }
        'back': {
          'slide': [
            new Point(-1, 0),
            new Point(1, 0),
          ],
        }
      },
    }
  }

  getMoves() {
    return this.moves[this.rank][this.side];
  }

  flip() {
    this.side = this.side === 'front' ? 'back' : 'front';
  }
}
