import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Player} from '../interfaces/Player';

type Props = {
  currentPlayer: Player;
  winnerExists: boolean;
  stalemate: boolean;
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  status: {fontSize: 23, color: 'green'},
  stalemate: {fontSize: 23, color: 'gray'},
});

export default function Results({
  winnerExists,
  currentPlayer,
  stalemate,
}: Props) {
  if (stalemate === true) {
    return (
      <View style={style.container}>
        <Text style={style.stalemate}>stalemate</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      {winnerExists === true ? (
        <Text style={style.status}>{currentPlayer} is the winner!</Text>
      ) : (
        <Text style={{...style.status, color: currentPlayer}}>
          {currentPlayer} turn
        </Text>
      )}
    </View>
  );
}
