import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
  }

  input, h1, span {
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
  }
`
