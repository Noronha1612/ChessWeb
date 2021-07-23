import React, { useContext } from 'react';
import { boardContext } from '../../../../contexts/Board';

import BoardSquare from '../BoardSquare';

import { Line } from './styles';

const Board: React.FC = () => {
  const { board, selectSquare } = useContext(boardContext);

  return (
    <div>
      {board.map((line, index) => (
        <Line key={index}>
          {line.map((square, index) => (
            <button key={index} onClick={() => selectSquare(square)}>
              <BoardSquare
                selected={square.isSelected}
                canReceivePiece={square.canReceivePiece}
                piece={
                  square.currentPiece && {
                    team: square.currentPiece?.team,
                    type: square.currentPiece?.type,
                  }
                }
              />
            </button>
          ))}
        </Line>
      ))}
    </div>
  );
};

export default Board;
