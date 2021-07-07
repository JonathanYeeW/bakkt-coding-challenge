import {Board} from '../interfaces/Board';
import {Player} from '../interfaces/Player';

export function togglePlayer(player: Player): Player {
  return player === 'red' ? 'blue' : 'red';
}

export function checkForWinner(board: Board): boolean {
  if (
    checkRowForWinner(board) ||
    checkColumnForWinner(board) ||
    checkDiagnolForWinner(board)
  ) {
    return true;
  }
  return false;
}

function checkRowForWinner(board: Board): boolean {
  // Top
  if (
    board[0].player === board[1].player &&
    board[1].player === board[2].player &&
    board[0].player !== 'none'
  ) {
    return true;
  }

  // Center
  if (
    board[3].player === board[4].player &&
    board[4].player === board[5].player &&
    board[3].player !== 'none'
  ) {
    return true;
  }

  // Bottom
  if (
    board[6].player === board[7].player &&
    board[7].player === board[8].player &&
    board[6].player !== 'none'
  ) {
    return true;
  }
  return false;
}

function checkColumnForWinner(board: Board): boolean {
  // Left
  if (
    board[0].player === board[3].player &&
    board[3].player === board[6].player &&
    board[0].player !== 'none'
  ) {
    return true;
  }

  // Center
  if (
    board[1].player === board[4].player &&
    board[4].player === board[7].player &&
    board[1].player !== 'none'
  ) {
    return true;
  }

  // Right
  if (
    board[2].player === board[5].player &&
    board[5].player === board[8].player &&
    board[2].player !== 'none'
  ) {
    return true;
  }
  return false;
}

function checkDiagnolForWinner(board: Board): boolean {
  // top left to bottom right
  if (
    board[0].player === board[4].player &&
    board[4].player === board[8].player &&
    board[0].player !== 'none'
  ) {
    return true;
  }

  // bottom left to top right
  if (
    board[6].player === board[4].player &&
    board[4].player === board[2].player &&
    board[6].player !== 'none'
  ) {
    return true;
  }
  return false;
}

export function getStalemateExists(board: Board): boolean {
  let noEmptySpaces = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i].player === 'none') {
      noEmptySpaces = false;
      break;
    }
  }
  return noEmptySpaces;
}
