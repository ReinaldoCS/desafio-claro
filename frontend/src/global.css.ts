import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`   
  :root {

    --white: #ffff;
    --red: #e3262e;

    --gray-300: #a8a8b3;
    --gray-900: #121214;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: var(--gray-900);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: var(--gray-900);
  }
`;