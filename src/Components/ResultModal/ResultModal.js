import React, {useState} from "react";
import "./ResultModal.css";
import { Button, Modal } from 'semantic-ui-react';
import Reset from "../Reset/Reset.js";


function ResultModal({winner}) {
  const [open, setOpen] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  
  if(winner === 'O' || winner === 'X' || winner === 'E'){
    setIsWinner(true)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={winner}
      size="mini"
    >
      {winner === 'E' ? <Modal.Header>Empate</Modal.Header> : <Modal.Header>{winner} venceu</Modal.Header>}
      <Modal.Actions>
        <Button color='teal' onClick={() => setOpen(false)}>
          Restart
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ResultModal;