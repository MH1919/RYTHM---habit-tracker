import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(120deg, #f7f7fa 0%, #e3e6ec 100%);
    color: #18181b;
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 0;
    background: none;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Better text rendering */
  * {
    text-rendering: optimizeLegibility;
  }
`;

export default GlobalStyles; 