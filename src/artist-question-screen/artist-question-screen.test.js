import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';

it(`check if App renders correctly after relaunch`, ()=> {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={`answers`}
      screenIndex={0}
      onAnswer={function () {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
