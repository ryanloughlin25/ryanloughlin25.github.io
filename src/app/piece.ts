export class Piece {
  rank: string;
  color: string;

  constructor(
    rank: string,
    color: string,
  ) {
    this.rank = rank;
    this.color = color;
    this.moves = [
      {'x': 0, 'y': -1},
      {'x': -1, 'y': 0},
      {'x': 1, 'y': 0},
      {'x': 0, 'y': 1},
    ]
  }
}
