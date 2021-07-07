import {Player} from './Player';

export type Board = Square[];

export type BoardIndex = number;

export type Square = {
  player: Player | 'none';
};
