import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from './App.jsx';
import theme from './styles/theme.js';

// Basic global styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.blackPrimary};
    color: ${theme.colors.goldHighlight}; // Default text color, can be overridden
    font-family: 'Helvetica Neue', Arial, sans-serif; // Default font
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    overflow-x: hidden; // Prevent horizontal scroll by default
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
