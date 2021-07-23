import { ChessPiece, Teams } from '../models/Pieces/ChessPiece';

export function sumCoordsByTeam(
  chessPiece: ChessPiece,
  operatorVec: [number, number]
): [number, number] {
  if (!chessPiece.currentSquare) return [-1, -1];

  const [currentX, currentY] = chessPiece.currentSquare.location;
  const [operatorX, operatorY] = operatorVec;

  return chessPiece.team === Teams.Black
    ? [currentX + operatorX, currentY + operatorY]
    : [+(currentX - operatorX), +(currentY - operatorY)];
}
