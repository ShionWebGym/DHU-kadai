import React from 'react';
import logo from './logo_dhu.svg';
import './css/App.css';
import Navi from './Navi';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="wrapper">
      <a href="https://www.dhw.ac.jp/" className="logo_dhu">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <Navi/>
      </div>
      </header>
      <Main/>
    </div>
  );
}

export default App;
