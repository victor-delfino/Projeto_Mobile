import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Picker, // Para React Native >=0.59 use '@react-native-picker/picker'
} from 'react-native';
import styles from './style';

// Se você estiver usando Expo ou RN >=0.59, instale o Picker: 
// yarn add @react-native-picker/picker
import { Picker as RNPicker } from '@react-native-picker/picker';

const RAWG_API_KEY = '6b7a585cf2e54cbbb5608315ec2e5f7b';
const RAWG_BASE_URL = 'https://api.rawg.io/api';

const getYears = () => {
  const now = new Date().getFullYear();
  const years = [];
  for (let y = now; y >= 1990; y--) {
    years.push(y);
  }
  return years;
};

export default function TesteApiScreen() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

  const fetchGames = async () => {
    setLoading(true);
    setError(null);
    setGames([]);
    try {
      // Filtro por ano selecionado
      const year = selectedYear;
      const url = `${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}&page_size=10&ordering=-metacritic&dates=${year}-01-01,${year}-12-31&language=pt`;
      console.log("Buscando melhores jogos do ano:", year, url);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      setGames(data.results);
    } catch (err) {
      setError(`Erro ao carregar jogos: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      {item.released && (
        <Text style={styles.itemDetail}>Lançamento: {item.released}</Text>
      )}
      {item.metacritic !== null && item.metacritic !== undefined && (
        <Text style={styles.itemDetail}>Nota Metacritic: {item.metacritic}</Text>
      )}
      {item.background_image && (
        <Image
          source={{ uri: item.background_image }}
          style={styles.itemImage}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Jogos Mais Bem Avaliados</Text>

        <View style={styles.pickerContainer}>
          <Text style={styles.labelPicker}>Ano:</Text>
          <RNPicker
            selectedValue={selectedYear}
            style={styles.picker}
            itemStyle={styles.pickerItem}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
            mode="dropdown"
          >
            {getYears().map((year) => (
              <RNPicker.Item key={year} label={year.toString()} value={year.toString()} />
            ))}
          </RNPicker>
        </View>

        <TouchableOpacity style={styles.botaoBuscar} onPress={fetchGames}>
          <Text style={styles.botaoBuscarText}>BUSCAR MELHORES JOGOS</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacer} />

        {loading && <ActivityIndicator size="large" color="#00ffcc" />}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {games.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Jogos Encontrados:</Text>
            <FlatList
              data={games}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              nestedScrollEnabled
              style={styles.list}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}