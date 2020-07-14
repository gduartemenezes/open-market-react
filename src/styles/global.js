import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');

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
        -webkit-font-smoothing: antialiased;
    }


  html, body, #root {
    min-height: 100%;
  }

  body, input, button {
    font: 14px;
    font-family: 'Roboto', 'Arial', sans-serif;
  }

  body {
    background: #d5d5d5;
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
