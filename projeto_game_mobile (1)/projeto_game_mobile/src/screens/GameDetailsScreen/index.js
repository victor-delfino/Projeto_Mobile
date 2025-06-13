// src/screens/GameDetailsScreen/index.js

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import GameDetailPage from '../../components/GameDetailPage'; // Ajuste o caminho
import styles from './styles';
// Esta tela recebe os dados do jogo via 'route.params'
export default function GameDetailsScreen({ route }) {
  // A prop 'route' vem automaticamente do React Navigation
  const { title, images, developer, synopsis, storageKey, defaultStyle } = route.params;

  // O estado 'selectedStyle' agora é inicializado com o defaultStyle passado
  const [selectedStyle, setSelectedStyle] = useState(defaultStyle || 'Outros'); // 'Outros' como fallback

  // Opcional: Se quiser que o título do navegador mude dinamicamente
  // useEffect(() => {
  //   navigation.setOptions({ title: title });
  // }, [title, navigation]);

  if (!route.params) {
    return (
      <View style={styles.container}>
        <Text>Nenhum dado de jogo fornecido.</Text>
      </View>
    );
  }

  return (
    <GameDetailPage
      title={title}
      images={images}
      developer={developer}
      synopsis={synopsis}
      storageKey={storageKey}
      selectedStyle={selectedStyle}
      onStyleChange={setSelectedStyle}
    />
  );
}