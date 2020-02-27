import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App = () => {
  // let isShown = false;
  console.log('I am rendering');
  const [isVisible, setIsVisible] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  // arg 1 is a callback, 2 is an array
  React.useEffect(() => {
    // this runs after the first render call
    console.log('First render');
    axios.get('/api/getCounter')
      .then(res => setCounter(res.data.counter))
      .catch(console.log);
  }, [isVisible]); // if empty only gets called 1 time after first render

  return (
    <div className="App">
      <header className="App-header">
        <h2>Total Page visits: {counter}</h2>
        {isVisible && <h1>Here is my component</h1>}
        <button onClick={() => setIsVisible(!isVisible)}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
