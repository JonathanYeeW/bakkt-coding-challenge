import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Player} from '../interfaces/Player';

const borderWidth = 5;

type Props = {
  squareButtonPressed: () => void;
  player: Player | 'none';
  position: 'left' | 'center' | 'right';
  winnerExists: boolean;
};

const style = StyleSheet.create({
  left: {
    borderColor: 'black',
    borderRightWidth: borderWidth,
    width: '33%',
  },
  center: {
    borderColor: 'black',
    borderRightWidth: borderWidth,
    width: '34%',
  },
  right: {
    width: '33%',
  },
});

export default function Square({
  winnerExists,
  squareButtonPressed,
  player,
  position,
}: Props) {
  if (player === 'none' && winnerExists === false) {
    return (
      <TouchableOpacity style={style[position]} onPress={squareButtonPressed} />
    );
  }

  return <View style={{...style[position], backgroundColor: player}} />;
}
