import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '../welcome-screen/welcome-screen';


it(`WelcomeScreen renders correctly after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount={3}
      time={5}
      onChange={`test`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
