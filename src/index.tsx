import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';

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
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

