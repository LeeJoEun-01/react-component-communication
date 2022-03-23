import logo from './logo.svg';
import './App.css';
import A from './components/A'
import F from './components/F'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <A />
        <F />
      </header>
    </div>
  );
}

export default App;
