import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CCCalculator from './Components/CCCalculator';

function App() {

  function getData(data) {
    alert("alert from parent with child data: " + parseInt(data));
  }


  let numbers = [1, 2, 3, 4, 5];
  let listNumbers = numbers.map((number, index) =>
    <a href="#" className="list-group-item" key={index}>  {number * 2} - {index}  </a>);

  return (
    <div className="App">
      <header className="App-header">
        <CCCalculator sendData={getData} /> <br />
        <p style={{ fontWeight: "bold", margin: 10 }}>numbers list:</p>
        <div className="list-group" style={{ width: " 20 %" }}> {listNumbers} </div>

      </header>
    </div>
  );
}

export default App;
