import logo from './logo.svg';
import './App.css';
import Mycomponent from './Component/Mycomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia
        </p>
        
      <Mycomponent />
      </header>
    </div>
  );
}

export default App;
