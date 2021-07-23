import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  button, a {
    outline: 0;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    background: none;
  }
`;