import React from 'react';
import ReactDom from 'react-dom';
import App from './app/app.jsx';

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3
  };

  ReactDom.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
      />,
      document.querySelector(`#root`)
  );
}

init();
