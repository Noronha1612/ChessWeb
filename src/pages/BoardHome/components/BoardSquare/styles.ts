import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
  width: 100px;
  height: 100px;
  background: ${(props) => (props.selected ? 'lightgray' : 'gray')};
  border: 1px solid darkgray;
  color: white;
  position: relative;
`;

export const PieceWrapper = styled.div<{ rotatePiece: boolean }>`
  ${(props) => props.rotatePiece && 'transform: rotate(180deg);'}
`;

export const CanReceivePieceIndicator = styled.div`
  width: 25px;
  height: 25px;
  background: lightblue;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
