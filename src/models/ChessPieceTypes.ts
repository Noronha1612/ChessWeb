export enum ChessPieceTypes {
  Pawn = 'PAWN',
  Tower = 'TOWER',
  Bishop = 'BISHOP',
  Knight = 'KNIGHT',
  Queen = 'QUEEN',
  King = 'KING',
}

export enum Teams {
  Black = 'BLACK',
  White = 'WHITE',
}

export class ChessPiece {
  constructor(
    private readonly _team: Teams,
    private readonly _type: ChessPieceTypes,
    private _localization: [number, number]
  ) {}

  get type() {
    return this._type;
  }

  get team() {
    return this._team;
  }

  get localization() {
    return [...this._localization];
  }
}
