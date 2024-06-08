import logo from './logo.svg';
import './App.css';
import Mycomponent from './Component/Mycomponent';
import SecondComponent from './Component/SecondComponent';
import ThirdComponent from './Component/ThirdComponent';
import Child from './Component/Child';
import { useState } from 'react';
import FourthComponent from './Component/FourthComponent';

function App() {

  const [name, setName] = useState("Mar"); 
  const [message, setMessage] = useState("Mar"); 
  
  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

  const medicalRecord = {
    heigth: "165cm",
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

        <div>
          <hr />
            <FourthComponent />
          <hr />
        </div>

      <h2>Mensaje del Hijo:</h2>
      <p>{message}</p>
      <Child name={name} setName={setName} addMessage={addMessage}/>
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
