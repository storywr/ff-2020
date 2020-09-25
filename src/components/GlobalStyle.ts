import { createGlobalStyle } from 'styled-components'

import { backgroundGrey, grey600 } from '@/theme/colors'
import { font, regularWeight } from '@/theme/typography'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    display: initial;
    min-height: 100%;
    width: 100vw;

    font-size: 1rem;
    line-height: 1.15;
  }

  body {
    -webkit-overflow-scrolling: touch;
    margin: 0;
    overflow-y: auto;

    background-color: ${backgroundGrey};
    color: ${grey600};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${font};
    font-weight: ${regularWeight};
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;

    font-size: 1rem;
    font-weight: ${regularWeight};
  }

  ul {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
