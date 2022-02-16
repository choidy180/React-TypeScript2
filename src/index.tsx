import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { lightTheme } from './theme';

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTteme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTteme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

