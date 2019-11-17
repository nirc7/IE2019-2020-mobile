import React from 'react';
//import logo from './logo.svg';
import './App.css';
import EName from './Components/EName';
import FCStudent from './Components/FCStudent';
import CCPerson from './Components/CCPerson';



const EName2 = <div>Student2 Name2</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EName}
        {EName2}
        <div>nir2</div>
        <FCStudent sname="avi" sgrade={100}/>
        <FCStudent sname="benny" sgrade={99}/>
        <CCPerson />
      </header>
    </div>
  );
}

export default App;
