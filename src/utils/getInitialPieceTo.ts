import { ChessPieceTypes, Teams } from './../models/ChessPieceTypes';
import { ChessPiece } from '../models/ChessPieceTypes';

export function getInitialPieceTo(
  boardLocation: [number, number]
): ChessPiece | undefined {
  const [axisX, axisY] = boardLocation;

  let pieceTeam: Teams | undefined;
  if (axisX === 0 || axisX === 1) pieceTeam = Teams.White;
  else if (axisX === 6 || axisX === 7) pieceTeam = Teams.Black;

  if (!pieceTeam) return undefined;

  if (axisX === 1 || axisX === 6)
    return new ChessPiece(
      pieceTeam,
      ChessPieceTypes.Pawn,
      boardLocation
    );

  switch (axisY) {
    case 0:
    case 7:
      return new ChessPiece(
        pieceTeam,
        ChessPieceTypes.Tower,
        boardLocation
      );
    case 1:
    case 6:
      return new ChessPiece(
        pieceTeam,
        ChessPieceTypes.Knight,
        boardLocation
      );
    case 2:
    case 5:
      return new ChessPiece(
        pieceTeam,
        ChessPieceTypes.Bishop,
        boardLocation
      );
    case 3:
      return new ChessPiece(
        pieceTeam,
        ChessPieceTypes.Queen,
        boardLocation
      );
    case 4:
      return new ChessPiece(
        pieceTeam,
        ChessPieceTypes.King,
        boardLocation
      );
  }
}
