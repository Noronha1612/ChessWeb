import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { BoardModel, BoardSquareModel } from '../../models/Board';
import { getInitialPieceTo } from '../../utils/getInitialPieceTo';
import BoardSquare from './components/BoardSquare';

import { Container, Line } from './styles';

const Board: React.FC = () => {
  const [board, setBoard] = useState<BoardModel>([]);

  const handleBuildInitialBoard = () => {
    setBoard([]);
    includeSquares();
    includePiecesIntoSquares();
  };

  const includeSquares = () => {
    setBoard((initialBoard) => {
      for (let line = 0; line < 8; line++) {
        initialBoard[line] = [];
        for (let column = 0; column < 8; column++) {
          initialBoard[line][column] = new BoardSquareModel();
        }
      }

      return initialBoard;
    });
  };

  const includePiecesIntoSquares = () => {
    setBoard((previewBoard) => {
      const updatedBoard = [...previewBoard];

      for (let line = 0; line < 8; line++) {
        for (let column = 0; column < 8; column++) {
          const boardSquare = updatedBoard[line][column];

          const pieceToBeInserted = getInitialPieceTo([line, column]);

          if (pieceToBeInserted)
            boardSquare.setPiece(pieceToBeInserted);
        }
      }

      return updatedBoard;
    });
  };

  useEffect(handleBuildInitialBoard, []);

  return (
    <Container>
      {board.map((line, index) => (
        <Line key={index}>
          {line.map((square, index) => (
            <BoardSquare
              key={index}
              team={square.currentPiece?.team}
              pieceType={square.currentPiece?.type}
            />
          ))}
        </Line>
      ))}
    </Container>
  );
};

export default Board;
