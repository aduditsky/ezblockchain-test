import { createGlobalStyle } from 'styled-components';
import { IStyles } from './global-styles.interfaces';

const GlobalStyles = createGlobalStyle<{ theme: IStyles }>`

  @font-face {
      font-family: "Graphik";
      src: url('/fonts/Graphik.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: fallback;
  }

  @font-face {
      font-family: 'MonumentExtended';
      src: url('/fonts/MonumentExtended.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: fallback;
  }

  body {
    margin: 0;
    font-family: "Graphik", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
