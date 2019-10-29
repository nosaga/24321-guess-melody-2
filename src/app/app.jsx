import React, {Component, PureComponent} from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from "prop-types";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";


class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if(question === -1) {
      const {
        gameTime,
        errorCount
      } = props;

      return <WelcomeScreen
        time = {gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return  <GenreQuestionScreen
        question={questions[question]}
        screenIndex={currentQuestion}
        onAnswer={onUserAnswer}
      />

      case `artist`: return <ArtistQuestionScreen
        question={questions[question]}
        screenIndex={currentQuestion}
        onAnswer={onUserAnswer}
      />
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };
  }

  render() {
    const {
      gameTime,
      errorCount,
      questions
    } = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props,() => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          ...prevState,
          question: !isEnd ? nextIndex : -1,
        };
      })
    })
  }
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array
};

export default App;
