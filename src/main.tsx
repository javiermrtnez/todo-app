// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.css';
import './index.css';
import { ThemeContextProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeContextProvider>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </ThemeContextProvider>
);
