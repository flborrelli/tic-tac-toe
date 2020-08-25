import React from "react";
import "./Reset.css";

function Reset({ emptyBoard, setWinner, setBoard, setCurrentPlayer }) {
  function resetGame() {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  }

  return (
    <div className="reset-container">
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}

export default Reset;
