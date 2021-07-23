import { sumCoordsByTeam } from '../../utils/sumCoordsByTeam';
import { BoardModel, BoardSquareModel } from '../Board';
import { ChessPiece, ChessPieceTypes, Teams } from './ChessPiece';

export class Pawn extends ChessPiece {
  private _hasMoved = false;

  constructor(
    private _team: Teams,
    private _currentSquare?: BoardSquareModel
  ) {
    super(ChessPieceTypes.Pawn);
  }

  listAvailableMoves(board: BoardModel): BoardSquareModel[] {
    const squaresToMove = [];

    const [squareToMoveX, squareToMoveY] = sumCoordsByTeam(
      this,
      [1, 0]
    );
    squaresToMove.push(board[squareToMoveX][squareToMoveY]);
    if (!this._hasMoved) {
      const [extraSquareToMoveX, extraSquareToMoveY] =
        sumCoordsByTeam(this, [2, 0]);
      squaresToMove.push(
        board[extraSquareToMoveX][extraSquareToMoveY]
      );
    }

    return squaresToMove;
  }

  get hasMoved(): boolean {
    return this._hasMoved;
  }

  get team(): Teams {
    return this._team;
  }

  get currentSquare(): BoardSquareModel | undefined {
    if (!this._currentSquare) return undefined;
    return new BoardSquareModel(this._currentSquare.location, this);
  }
}
