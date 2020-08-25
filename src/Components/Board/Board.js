import React, { useState } from 'react';
import './Board.css';

function Board() {
  const emptyBoard = Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);
  return (
    <div className="container">
      <div className="game">
        <div className="board-grid">
          {board.map((element, index) => {
            return <button key={index} className={`btn ${element}`}>{element}</button>
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Board;
