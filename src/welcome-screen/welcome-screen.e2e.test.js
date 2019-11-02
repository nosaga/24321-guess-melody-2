import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from '../welcome-screen/welcome-screen';

Enzyme.configure({adapter: new Adapter()});

it(`Welcome screen button is clickable`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen
    errorCount={3}
    time={5}
    onStartButtonClick={clickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
  app.update();
});
