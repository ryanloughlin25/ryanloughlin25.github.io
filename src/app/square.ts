import {Piece} from './piece'

export class Square {
  piece: Piece;
  moveType: string;

  constructor(
    piece?: Piece,
    moveType?: string
  ) {
    this.piece = piece || null;
    this.moveType = moveType || null;
  }
}
