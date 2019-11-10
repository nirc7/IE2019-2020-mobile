import React from 'react';
import logo from './logo.svg';
import './App.css';
import EName from './EName'
import FCStudent from './Components/FCStudent';


const footer = <div>down</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EName} 
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to nir2's App:)
        </p>

        <FCStudent pname='benny' />
        <FCStudent pname='charlie' />
        <FCStudent pname='avi' />

        {footer}
      </header>
    </div>
  );
}

export default App;
