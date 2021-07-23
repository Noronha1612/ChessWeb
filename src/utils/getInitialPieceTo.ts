import { BoardSquareModel } from './../models/Board';
import { Teams } from '../models/Pieces/ChessPiece';
import { ChessPiece } from '../models/Pieces/ChessPiece';
import {
  Pawn,
  Rook,
  Knight,
  King,
  Queen,
  Bishop,
} from '../models/Pieces';

export function getInitialPieceTo(
  boardSquare: BoardSquareModel
): ChessPiece | undefined {
  const [axisX, axisY] = boardSquare.location;

  let pieceTeam: Teams | undefined;
  if (axisX === 0 || axisX === 1) pieceTeam = Teams.Black;
  else if (axisX === 6 || axisX === 7) pieceTeam = Teams.White;

  if (!pieceTeam) return undefined;

  if (axisX === 1 || axisX === 6)
    return new Pawn(pieceTeam, boardSquare);

  switch (axisY) {
    case 0:
    case 7:
      return new Rook(pieceTeam, boardSquare);
    case 1:
    case 6:
      return new Knight(pieceTeam, boardSquare);
    case 2:
    case 5:
      return new Bishop(pieceTeam, boardSquare);
    case 3:
      return new Queen(pieceTeam, boardSquare);
    case 4:
      return new King(pieceTeam, boardSquare);
  }
}
