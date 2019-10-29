import React from 'react';
import ReactDom from 'react-dom';
import App from './app/app.jsx';
import questions from './mocks/questions';

const init = (gameQuestions) => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };

  ReactDom.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
