'use client'

import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; // 1rem = 10px
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyle