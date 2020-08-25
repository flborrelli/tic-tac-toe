import React, { useState } from 'react';
import './Board.css';

function Board() {

  const emptyBoard = Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState('O')

  function handleBoardClick(index){
    setBoard(board.map((element, elementIndex) => elementIndex === index ? currentPlayer : element));
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <div className="container">
      <div className="game">
        <div className="board-grid">
          {board.map((element, index) => {
            return <button className={`btn ${element}`} key={index} onClick={() => handleBoardClick(index)}>{element}</button>
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Board;
