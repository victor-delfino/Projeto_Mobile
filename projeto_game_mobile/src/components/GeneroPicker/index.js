import React from 'react';
import { View, Text, Picker } from 'react-native';
import defaultStyles from './style';

export default function GenrePicker({
  genres,
  selectedGenre,
  onSelectGenre,
  styles = defaultStyles,
}) {
  return (
    <View style={styles.pickerContainer}>
      <Text style={styles.label}>Selecione um gênero:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedGenre}
          onValueChange={onSelectGenre}
          style={styles.picker}
          dropdownIconColor="#f59e42"
          itemStyle={styles.pickerItem}
          mode="dropdown"
        >
          <Picker.Item label="-- Escolha --" value={null} />
          {genres.map((genre) => (
            <Picker.Item key={genre.id} label={genre.name} value={genre.slug} />
          ))}
        </Picker>
      </View>
    </View>
  );
}