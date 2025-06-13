import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import Botao from '../../components/botao/Botao';
import styles from './styles';

const RAWG_API_KEY = '6b7a585cf2e54cbbb5608315ec2e5f7b';
const RAWG_BASE_URL = 'https://api.rawg.io/api';

function HomeScreen({ navigation }) {
  const [games, setGames] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      setLoading(true);
      try {
        const response = await fetch(
          `${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}&page_size=10&ordering=-rating`
        );
        const data = await response.json();
        setGames(data.results || []);
      } catch (e) {
        setGames([]);
      }
      setLoading(false);
    }
    fetchGames();
  }, []);

  const handleNextImage = () => {
    if (games.length === 0) return;
    setCurrent((prev) => (prev + 1) % games.length);
  };

  const getCurrentGame = () => games[current] || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao GameHub</Text>

      <TouchableOpacity onPress={handleNextImage} activeOpacity={0.85}>
        {loading ? (
          <ActivityIndicator color="#3498db" size="large" style={{ marginVertical: 18 }} />
        ) : games.length > 0 && getCurrentGame().background_image ? (
          <>
            <Image
              source={{ uri: getCurrentGame().background_image }}
              style={styles.headerImage}
              resizeMode="cover"
            />
            <Text style={styles.gameName}>{getCurrentGame().name}</Text>
          </>
        ) : (
          <Image
            source={{
              uri: 'https://zlyer-cdn-comps-en.bigeyes.com/ux-landscape/game-image/5803/d4/be/5803d4bea386d90226c8825147349a9e.jpeg',
            }}
            style={styles.headerImage}
            resizeMode="cover"
          />
        )}
        <Text style={styles.nextImageText}>Toque na imagem para ver outro jogo!</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        Explore jogos, avalie, participe de quizzes e descubra novidades!
      </Text>
      <View style={styles.buttonGroup}>
        <Botao
          title="Meu Perfil"
          onPress={() => navigation.navigate('TelaPerfil')}
          style={styles.button}
        />
        <Botao
          title="Avaliação de Jogos"
          onPress={() => navigation.navigate('Avaliar')}
          style={styles.button}
        />
        <Botao
          title="Quiz "
          onPress={() => navigation.navigate('QuizScreen')}
          style={styles.button}
        />
        <Botao
          title="Buscar Jogos"
          onPress={() => navigation.navigate('TesteApi')}
          style={styles.button}
        />
      </View>
    </View>
  );
}

export default HomeScreen;