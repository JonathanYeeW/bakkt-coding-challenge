import {Board, Square, BoardIndex} from '../interfaces/Board';
import {Player} from '../interfaces/Player';

export function createBoard(): Board {
  const board: Board = [];
  for (let i = 0; i < 9; i++) {
    board.push(createSquare());
  }
  return board;
}

export function createSquare(): Square {
  return {player: 'none'};
}

export function setSquareToPlayer(
  index: BoardIndex,
  currentPlayer: Player,
  board: Board,
) {
  board[index].player = currentPlayer;
}
