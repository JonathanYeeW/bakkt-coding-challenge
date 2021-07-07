import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Board, BoardIndex} from '../interfaces/Board';
import SquareView from './Square';

type Props = {
  board: Board;
  squareButtonPressed: (index: BoardIndex) => void;
  winnerExists: boolean;
};

const borderWidth = 5;

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    height: 100,
    borderColor: 'black',
  },
});

export default function Gameboard({
  board,
  squareButtonPressed,
  winnerExists,
}: Props) {
  const rows: BoardIndex[] = [0, 3, 6];
  return (
    <View style={style.container}>
      {rows.map(row => {
        return (
          <View
            key={row}
            style={
              row === 6
                ? style.row
                : {...style.row, borderBottomWidth: borderWidth}
            }>
            <SquareView
              {...{winnerExists}}
              position="left"
              player={board[row].player}
              squareButtonPressed={() => squareButtonPressed(row)}
            />
            <SquareView
              {...{winnerExists}}
              position="center"
              player={board[row + 1].player}
              squareButtonPressed={() => squareButtonPressed(row + 1)}
            />
            <SquareView
              {...{winnerExists}}
              position="right"
              player={board[row + 2].player}
              squareButtonPressed={() => squareButtonPressed(row + 2)}
            />
          </View>
        );
      })}
    </View>
  );
}
