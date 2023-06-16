import logo from './logo.svg';
import './App.css';
import Toggle_Button from './hooks/Toggle_Button';


function App() {
  const [isOn, setIsOn] = Toggle_Button()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setIsOn(isOn => !isOn)}>Is Active {`${isOn}`}</button>
      </header>
    </div>
  );
}

export default App;
