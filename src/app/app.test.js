import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app';

it(`check if App renders correctly after relaunch`, ()=> {
  const tree = renderer
    .create(<App
      gameTime={5}
      errorCount={3}
      questions={[`songs`, `singers`]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
