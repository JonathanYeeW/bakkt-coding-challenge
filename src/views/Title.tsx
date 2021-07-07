import React from 'react';
import {Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  title: {fontSize: 32, alignSelf: 'center', marginBottom: 25, marginTop: 25},
});

export default function Title() {
  return <Text style={style.title}>Tic Tac Toe</Text>;
}
