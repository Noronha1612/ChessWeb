import { BoardModel, BoardSquareModel } from '../Board';
import { ChessPiece, ChessPieceTypes, Teams } from './ChessPiece';

export class Rook extends ChessPiece {
  constructor(
    private _team: Teams,
    private _currentSquare?: BoardSquareModel
  ) {
    super(ChessPieceTypes.Rook);
  }

  listAvailableMoves(board: BoardModel): BoardSquareModel[] {
    const squaresToMove = [];

    if (!this.currentSquare) return [];

    const [currentX, currentY] = this.currentSquare.location;

    for (let line = 0; line < 8; line++) {
      for (let column = 0; column < 8; column++) {
        if (line === currentX && column === currentY) continue;

        if (line === currentX || column === currentY) {
          squaresToMove.push(board[line][column]);
        }
      }
    }

    return squaresToMove;
  }

  get team(): Teams {
    return this._team;
  }

  get currentSquare(): BoardSquareModel | undefined {
    if (!this._currentSquare) return undefined;
    return new BoardSquareModel(this._currentSquare.location, this);
  }
}
