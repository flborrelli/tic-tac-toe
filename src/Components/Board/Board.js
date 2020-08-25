import React, { useState, useEffect } from "react";
import "./Board.css";
import Reset from "../Reset/Reset.js";
import ResultModal from '../ResultModal/ResultModal.js';

function Board() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  //Não deixei vazio para não ficar undefined
  const [winner, setWinner] = useState(null);

  useEffect(checkWinner, [board]);

  function handleBoardClick(index) {
    if (winner) {
      console.log("Jogo finalizado!");
      return null;
    }

    //Verify if the player click on a fulfilled board field
    if (board[index] !== "") {
      return null;
    }
    setBoard(
      board.map((element, elementIndex) =>
        elementIndex === index ? currentPlayer : element
      )
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function checkWinner() {
    const winningPossibilities = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    const winnerO = ["O", "O", "O"];
    const winnerX = ["X", "X", "X"];

    winningPossibilities.forEach((possibility) => {
      if (possibility.toString() === winnerO.toString()) {
        setWinner("O");
        console.log("O venceu!");
      } 
      if (possibility.toString() === winnerX.toString()) {
        setWinner("X");
        console.log("X venceu!");
      } 
    });
  }

  function checkDraw() {
    if (board.every((element) => element !== "") && winner === null) {
      setWinner("E");
    }
  }

  checkDraw();

  return (
    <>
    <ResultModal winner={winner}/>
    {winner ?  <div className={`jogador-da-vez ${currentPlayer}`}>Jogo Finalizado</div> : <div className={`jogador-da-vez ${currentPlayer}`}>Jogador {currentPlayer} sua vez!</div>}
    <div className="container">
      <div className="game">
        <div className="board-grid">
          {board.map((element, index) => {
            return (
              <button
                className={`btn ${element}`}
                key={index}
                onClick={() => handleBoardClick(index)}
              >
                {element}
              </button>
            );
          })}
        </div>
      </div>
      <div className='btns-container'>
      <Reset
        emptyBoard={emptyBoard}
        setCurrentPlayer={setCurrentPlayer}
        setBoard={setBoard}
        setWinner={setWinner}
      />

      {winner && (
        <footer>
          {winner === 'E' ? <h2 className={winner}>Empate 😟</h2> : <h2 className={winner}>{winner} venceu 🏆 </h2>}
        </footer>
      )}
      </div>
    </div>
    </>
  );
}

export default Board;
