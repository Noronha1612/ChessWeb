import React from 'react';
import Piece from 'react-chess-pieces';

import {
  ChessPieceTypes,
  Teams,
} from '../../../../models/Pieces/ChessPiece';

import { CanReceivePieceIndicator, Container, PieceWrapper } from './styles';

interface BoardSquareProps {
  selected: boolean;
  canReceivePiece?: boolean;
  piece?: {
    team: Teams;
    type: ChessPieceTypes;
  };
}

const BoardSquare: React.FC<BoardSquareProps> = ({
  piece,
  selected,
  canReceivePiece,
}) => {
  return (
    <Container selected={selected}>
      {canReceivePiece && (<CanReceivePieceIndicator />)}
      {piece && (
        <PieceWrapper rotatePiece={piece.team === Teams.Black}>
          <Piece
            piece={
              piece.team === Teams.White
                ? piece.type?.toUpperCase()
                : piece.type?.toLowerCase()
            }
          />
        </PieceWrapper>
      )}
    </Container>
  );
};

export default BoardSquare;
