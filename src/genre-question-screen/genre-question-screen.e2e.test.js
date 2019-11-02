import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';


Enzyme.configure({adapter: new Adapter()});

it(`GenreQuestionScreen screen button is clickable`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<GenreQuestionScreen
    question={``}
    screenIndex={0}
    onAnswer={clickHandler}
  />);
  const startButton = app.find(`button`);
  startButton.simulate(`onchange`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
  app.update();
});
