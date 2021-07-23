import React from 'react';
import { BoardContextWrapper } from '../../contexts/Board';

import Board from './components/Board';

import { Container } from './styles';

const BoardHome: React.FC = () => {

  return (
    <Container>
      <BoardContextWrapper>
        <Board />
      </BoardContextWrapper>
    </Container>
  );
};

export default BoardHome;
