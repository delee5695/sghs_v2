import React from 'react';
import logo from './logo.svg';
import './App.css';
import logoimg from './logo2.png'

/*import { slide as Menu } from 'react-burger-menu'; */

function App() {
  return (
    <div className="App">
      
      <div className="App-header">
        <img src={logoimg} className="logoimg" height="90px"/>
        <h1>Our Hearts in Korea,<br/> Our Eyes to the World</h1>
      </div>
      
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    
      
    </div>
  );
}

export default App;
