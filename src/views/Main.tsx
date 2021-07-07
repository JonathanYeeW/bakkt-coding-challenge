import React, {useState} from 'react';
import {BoardIndex, Board} from '../interfaces/Board';
import {Player} from '../interfaces/Player';
import {createBoard, setSquareToPlayer} from '../utilities/board.utils';
import {
  getStalemateExists,
  checkForWinner,
  togglePlayer,
} from '../utilities/game.utils';
import Gameboard from './Gameboard';
import Status from './Status';
import NewGameButton from './NewGameButton';
import Title from './Title';

export default function Main_hooks() {
  const [board, setBoard] = useState<Board>(createBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>('blue');
  const [winnerExists, setWinnerExists] = useState<boolean>(false);
  const [stalemate, setStalemate] = useState<boolean>(false);

  function squareButtonPressed(index: BoardIndex) {
    if (winnerExists === false) {
      setSquareToPlayer(index, currentPlayer, board);
      if (checkForWinner(board)) {
        setBoard(board);
        setWinnerExists(true);
      } else {
        setCurrentPlayer(togglePlayer(currentPlayer));
        setBoard(board);
        setStalemate(getStalemateExists(board));
      }
    }
  }

  function newGameButtonPressed() {
    setBoard(createBoard());
    setCurrentPlayer(togglePlayer(currentPlayer));
    setWinnerExists(false);
    setStalemate(false);
  }

  return (
    <>
      <Title />
      <Status {...{winnerExists, currentPlayer, stalemate}} />
      <Gameboard {...{board, winnerExists, squareButtonPressed}} />
      <NewGameButton {...{newGameButtonPressed}} />
    </>
  );
}
