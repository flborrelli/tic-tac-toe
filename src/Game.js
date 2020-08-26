import React from 'react';
import './Game.css';
import Board from './Components/Board/Board.js';

function Game() {
  return (
    <div className="game-container">
      <div className='header'>
        <h1><span role='img' aria-label='x'>❌</span> Jogo da Velha <span role='img' aria-label='O'>⭕</span></h1>
      </div>
      <Board/>
    </div>
  );
}

export default Game;
