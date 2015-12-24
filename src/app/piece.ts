import {Point} from './point'

export class Piece {
  rank: string;
  color: string;
  moves: Point[];

  constructor(
    rank: string,
    color: string
  ) {
    this.rank = rank;
    this.color = color;
    this.moves = [
      new Point(0, -1),
      new Point(-1, 0),
      new Point(1, 0),
      new Point(0, 1),
    ]
  }
}
