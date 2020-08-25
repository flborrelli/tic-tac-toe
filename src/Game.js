import React from 'react';
import './Game.css';
import Board from './Components/Board/Board.js';

function Game() {
  return (
    <div className="game-container">
      <div className='header'>
        <h1>Jogo da Velha</h1>
      </div>
      <Board/>
    </div>
  );
}

export default Game;
