import React from 'react';
import {
  ChessPieceTypes,
  Teams,
} from '../../../../models/ChessPieceTypes';

import { Container } from './styles';

interface BoardSquareProps {
  team?: Teams;
  pieceType?: ChessPieceTypes;
}

const BoardSquare: React.FC<BoardSquareProps> = ({
  team,
  pieceType,
}) => {
  return <Container>{pieceType && pieceType}</Container>;
};

export default BoardSquare;
