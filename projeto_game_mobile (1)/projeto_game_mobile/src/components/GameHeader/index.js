// src/components/GameHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

export default function GameHeader(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}
