import React from 'react';
import './Board.css';

function Board() {
  return (
    <div className="container">
      <div className="game">
        <div className="board-row">
          <button>X</button>
          <button>X</button>
          <button>X</button>
        </div>
        <div className="board-row">
          <button>X</button>
          <button>X</button>
          <button>X</button>
        </div>
        <div className="board-row">
          <button>X</button>
          <button>X</button>
          <button>X</button>
        </div>
      </div>
    </div>
  );
}

export default Board;
