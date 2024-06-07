import logo from './logo.svg';
import './App.css';
import Mycomponent from './Component/Mycomponent';
import SecondComponent from './Component/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia
        </p>
        
      <SecondComponent />
      <Mycomponent />
      </header>
    </div>
  );
}

export default App;
