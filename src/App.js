import logo from './logo.svg';
import logomolber from './logomolber.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="">
        <img src={logomolber} />
        <Navbar/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Molber APP.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
