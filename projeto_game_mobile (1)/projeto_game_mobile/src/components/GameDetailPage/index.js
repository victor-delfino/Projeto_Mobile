import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GameHeader from "../../components/GameHeader";
import GameInfo from "../../components/Gameinfo";
import GameStylePicker from "../../components/GameStylePicker";
import styles from "./style";

/**
 * Componente genérico para exibir detalhes de um jogo.
 * Props:
 * - title: string - Título do jogo
 * - images: array de objetos { uri: string } - Imagens para a galeria
 * - developer: string - Nome do desenvolvedor
 * - synopsis: string - Descrição ou sinopse do jogo
 * - storageKey: string - Chave para salvar/recuperar avaliação no AsyncStorage
 * - selectedStyle: string - Estilo selecionado para GameStylePicker
 * - onStyleChange: function - Callback para mudança de estilo
 */
export default function GameDetailPage({
  title,
  images = [],
  developer,
  synopsis,
  storageKey,
  selectedStyle,
  onStyleChange,
}) {
  const [rating, setRating] = useState(0);


  useEffect(() => {
    const loadRating = async () => {
      try {
        const savedRating = await AsyncStorage.getItem(storageKey);
        if (savedRating !== null) {
          setRating(Number(savedRating));
        }
      } catch (error) {
        console.log("Erro ao carregar avaliação:", error);
      }
    };
    loadRating();
  }, [storageKey]);

  const handleSetRating = async (value) => {
    try {
      await AsyncStorage.setItem(storageKey, value.toString());
      setRating(value);
    } catch (error) {
      console.log("Erro ao salvar avaliação:", error);
    }
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleSetRating(i)}>
          <Text style={styles.ratingStars}>{i <= fullStars ? "⭐" : "☆"}</Text>
        </TouchableOpacity>
      );
    }

    return stars;
  };

    const renderImage = ({ item }) => {
      const source = typeof item === 'string' ? { uri: item } : item;
      console.log('Images recebidas:', images);
      return <Image source={source} style={styles.image} />;
    };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator
      >
        {/* Cabeçalho */}
        <GameHeader title={title} />

        {/* Galeria de imagens */}
        <FlatList
          data={images}
          renderItem={renderImage}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={{ paddingRight: 16 }}
          style={styles.scrollView}
        />

        {/* Informações do jogo */}
        <GameInfo developer={developer} />

        {/* Sinopse */}
        <View style={styles.synopsisContainer}>
          <Text style={styles.sectionTitle}>Sinopse</Text>
          <Text style={styles.synopsisText}>{synopsis}</Text>
        </View>

        {/* Avaliação */}
        <View style={styles.ratingContainer}>
          <Text style={styles.sectionTitle}>Avaliação</Text>
          <View style={{ flexDirection: "row" }}>{renderStars()}</View>
          <Text style={styles.ratingText}>{rating.toFixed(1)} / 5.0</Text>
        </View>

        {/* Estilo favorito */}
        <GameStylePicker
          selectedStyle={selectedStyle}
          onStyleChange={onStyleChange}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
