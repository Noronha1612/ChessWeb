import { ChessPiece } from './ChessPieceTypes';

export class BoardSquareModel {
  private _currentPiece?: ChessPiece;

  constructor(initialPiece?: ChessPiece) {
    this._currentPiece = initialPiece;
  }

  setPiece(piece: ChessPiece) {
    // TODO: Validar se é um square valido
    this._currentPiece = piece;
  }

  clearSquare() {
    this._currentPiece = undefined;
  }

  get currentPiece() {
    return this._currentPiece;
  }
}

export type BoardModel = BoardSquareModel[][];
