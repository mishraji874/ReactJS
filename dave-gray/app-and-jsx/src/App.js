import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Dave"
  const handleNameChange = () => {
    const names = ["bob", "kevin", "dave"]
    const int = Math.floor(Math.random * 3);
    return names[int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello World!
          Hello {name}
          Hello {handleNameChange()}!
        </p>
        <p>html</p>
        <p>{"Dave"}</p>
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
