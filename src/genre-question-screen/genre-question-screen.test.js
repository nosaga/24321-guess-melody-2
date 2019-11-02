import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';


it(`GenreQuestionScreen renders correctly after relaunch`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
      question={``}
      screenIndex={5}
      onAnswer={function () {
        return `test`;
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
