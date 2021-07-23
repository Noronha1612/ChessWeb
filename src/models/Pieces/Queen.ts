import { BoardModel, BoardSquareModel } from '../Board';
import { ChessPiece, ChessPieceTypes, Teams } from './ChessPiece';

export class Queen extends ChessPiece {
  constructor(private _team: Teams, private _currentSquare?: BoardSquareModel) {
    super(ChessPieceTypes.Queen);
  }

  listAvailableMoves(board: BoardModel): BoardSquareModel[] {
    const squaresToMove: BoardSquareModel[] = [];

    if (!this.currentSquare) return [];

    const [currentX, currentY] = this.currentSquare.location;

    for (let line = 0; line < 8; line++) {
      const diffAxisX = +(currentX - line);

      const columnsToAdd = [currentY - diffAxisX, currentY + diffAxisX];

      columnsToAdd.forEach((column) => {
        if (
          column >= 0 && column < 8 &&
          !(line === currentX && column === currentY)
        ) {
          squaresToMove.push(board[line][column]);
        }
      });

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
