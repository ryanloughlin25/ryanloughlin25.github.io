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
      'front': [
        new Point(0, -1),
        new Point(-1, 0),
        new Point(1, 0),
        new Point(0, 1),
      ],
      'back': [
        new Point(0, -2),
        new Point(-1, -1),
        new Point(1, -1),
        new Point(-1, 1),
        new Point(1, 1),
      ],
    }
  }

  getMoves() {
    return this.moves[this.side];
  }

  flip() {
    this.side = this.side === 'front' ? 'back' : 'front';
  }
}
