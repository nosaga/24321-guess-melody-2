import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gemeTime, errorCount} = props;
  return <WelcomeScreen
    time = {gemeTime}
    errorCount={errorCount}
  />;
};

export default App;
