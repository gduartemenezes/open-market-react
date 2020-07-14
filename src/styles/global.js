import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    background: #d5d5d5;
  }

  body, input, button {
    font: 14px, 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
