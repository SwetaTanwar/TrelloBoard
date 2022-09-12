import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Card = ({num}) => {

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{num}</Text>

      <View style={styles.label} />
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
    backgroundColor: 'lightcoral',
    top: 5,
    right: 5,
  },
});
