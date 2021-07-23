import { BoardSquareModel, BoardModel } from '../Board';

export enum ChessPieceTypes {
  Pawn = 'P',
  Rook = 'r',
  Bishop = 'b',
  Knight = 'n',
  Queen = 'q',
  King = 'k',
}

export enum Teams {
  Black = 'BLACK',
  White = 'WHITE',
}

export abstract class ChessPiece {

  constructor(private readonly _type: ChessPieceTypes) { }
  
  get type() {
    return this._type;
  }

  abstract listAvailableMoves(board: BoardModel): BoardSquareModel[];
  
  abstract get team(): Teams;

  abstract get currentSquare(): BoardSquareModel | undefined;
}
