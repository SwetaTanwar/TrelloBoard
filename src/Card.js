import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Card = ({num}) => {
  const [backgroundColor, setBackgroundColor] = useState('lightcoral');

  const onCardPress = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    setBackgroundColor(COLORS[randomNumber]);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress}>
      <Text>{num}</Text>

      <View style={[styles.label, {backgroundColor}]} />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
    padding: 8,
    marginVertical: 8,
    height: 44,
    borderRadius: 8,
  },
  label: {
    width: 32,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
