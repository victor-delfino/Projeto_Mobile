import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles.js';

export default function GameStylePicker(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>O quanto você recomendaria este jogo?</Text>
      <Picker
        selectedValue={props.selectedStyle}
        onValueChange={itemValue => props.onStyleChange(itemValue)}
        style={styles.picker}
        dropdownIconColor="#fff"
        itemStyle={styles.pickerItem}
        mode="dropdown"
      >
        <Picker.Item label="Não recomendaria" value="naorecomendaria" />
        <Picker.Item label="Recomendaria com ressalvas" value="poucorecomendaria" />
        <Picker.Item label="Recomendaria" value="recomendaria" />
        <Picker.Item label="Altamente recomendaria" value="muitorecomendaria" />
        <Picker.Item label="Obra-prima" value="obraprima" />
      </Picker>
    </View>
  );
}