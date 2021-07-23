import { BoardModel, BoardSquareModel } from '../Board';
import { ChessPiece, ChessPieceTypes, Teams } from './ChessPiece';

export class Knight extends ChessPiece {
  constructor(
    private _team: Teams,
    private _currentSquare?: BoardSquareModel
  ) {
    super(ChessPieceTypes.Knight);
  }

  listAvailableMoves(board: BoardModel): BoardSquareModel[] {
    const squaresToMove: BoardSquareModel[] = [];

    if ( !this.currentSquare ) return squaresToMove;

    const [ currentX, currentY ] = this.currentSquare.location;

    for (let line = currentX - 2; line <= currentX + 2; line++) {
      if (line < 0 || line > 7) continue;

      const diff = currentX - line;

      const columnsToAdd = [];
      
      switch(diff) {
        case -2:
        case 2:
          columnsToAdd.push(currentY + 1, currentY - 1);
          break
        case -1:
        case 1:
          columnsToAdd.push(currentY + 2, currentY - 2);
          break; 
      }

      columnsToAdd.forEach(column => {
        if ( column < 8 && column >= 0 ) {
          squaresToMove.push(board[line][column]);
        }
      });
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
