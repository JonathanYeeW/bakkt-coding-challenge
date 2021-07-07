import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  newGameButtonPressed: () => void;
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
  buttonLabel: {fontSize: 23},
});

export default function NewGameButton({newGameButtonPressed}: Props) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={newGameButtonPressed}>
        <Text style={style.buttonLabel}>New Game</Text>
      </TouchableOpacity>
    </View>
  );
}
