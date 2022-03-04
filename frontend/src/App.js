import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/home").then(response => response.text()).then(message => {
      console.log(message);
      setMessage(message);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
