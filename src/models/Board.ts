import { ChessPiece } from './Pieces';

export class BoardSquareModel {
  private readonly _location: [number, number];
  private _currentPiece?: ChessPiece;
  private _selected: boolean;
  private _canReceivePiece?: boolean;

  constructor(location: [number, number], initialPiece?: ChessPiece) {
    this._location = location;
    this._currentPiece = initialPiece;
    this._selected = false;
  }

  setPiece(piece: ChessPiece) {
    // TODO: Validar se é um square valido
    this._currentPiece = piece;
  }

  clearSquare() {
    this._currentPiece = undefined;
  }

  select() {
    this._selected = true;
  }

  unselect() {
    this._selected = false;
    this._canReceivePiece = false;
  }

  setCanReceivePiece(bool: boolean) {
    this._canReceivePiece = bool;
  }

  get canReceivePiece() {
    return this._canReceivePiece;
  }

  get currentPiece() {
    return this._currentPiece;
  }

  get isSelected() {
    return this._selected;
  }

  get location(): [number, number] {
    return [...this._location];
  }

  equals(squareModel: BoardSquareModel): boolean {
    return (
      JSON.stringify(this.location) ===
      JSON.stringify(squareModel.location)
    );
  }
}

export type BoardModel = BoardSquareModel[][];
