import logo from './logo.svg';
import './App.css';
import Mycomponent from './Component/Mycomponent';
import SecondComponent from './Component/SecondComponent';
import ThirdComponent from './Component/ThirdComponent';

function App() {

  const medicalRecord = {
    heigth: "160",
    bloodGroup: "O+",
    allergies: "none"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia
        </p>
        
      <SecondComponent />
      <ThirdComponent 
        name="Ricardo"
        lastName="Capera"
        card={ medicalRecord }
      />
      <Mycomponent />
      </header>
    </div>
  );
}

export default App;
