import React from 'react';
import './App.css';
import Board from './Components/Board/Board.js';

function App() {
  return (
    <div className="app-container">
      <div className='header'>
        <h1>Jogo da Velha</h1>
      </div>
      <Board/>
    </div>
  );
}

export default App;
