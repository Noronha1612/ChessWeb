import { useCallback } from 'react';
import { createContext, useEffect, useState } from 'react';

import { BoardModel, BoardSquareModel } from '../../models/Board';
import { getInitialPieceTo } from '../../utils/getInitialPieceTo';

interface BoardContextProps {
  board: BoardModel;
  selectSquare: (square: BoardSquareModel) => void;
}

export const boardContext = createContext({} as BoardContextProps);

export const BoardContextWrapper: React.FC = ({ children }) => {
  const [board, setBoard] = useState<BoardModel>([]);
  const [selectedSquare, setSelectedSquare] = useState<BoardSquareModel>();

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
          initialBoard[line][column] = new BoardSquareModel([line, column]);
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

          const pieceToBeInserted = getInitialPieceTo(boardSquare);

          if (pieceToBeInserted) boardSquare.setPiece(pieceToBeInserted);
        }
      }

      return updatedBoard;
    });
  };

  const selectSquare = useCallback(
    (squareToBeSelected: BoardSquareModel) => {
      if (squareToBeSelected.isSelected) return;

      setBoard((previewBoard) => {
        const updatedBoard = previewBoard.map((line) => {
          return line.map((square) => {
            square.unselect();

            if (square.equals(squareToBeSelected)) {
              square.select();
              setSelectedSquare(square);
            }

            return square;
          });
        });

        return updatedBoard;
      });
    },
    [setBoard, setSelectedSquare]
  );

  useEffect(handleBuildInitialBoard, []);

  useEffect(() => {
    if (!selectedSquare || !selectedSquare.currentPiece) return;

    setBoard((previewBoard) => {
      const updatedBoard = [...previewBoard];

      selectedSquare?.currentPiece
        ?.listAvailableMoves(updatedBoard)
        .forEach((square: BoardSquareModel) => {
          updatedBoard[square.location[0]][square.location[1]].setCanReceivePiece(
            true
          );
        });

      return updatedBoard;
    });
  }, [selectedSquare]);

  return (
    <boardContext.Provider
      value={{
        board,
        selectSquare,
      }}
    >
      {children}
    </boardContext.Provider>
  );
};
