import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import GeneroPicker from '../../components/GeneroPicker/index'
import styles from './style';

const API_KEY = '6b7a585cf2e54cbbb5608315ec2e5f7b';

const { width } = Dimensions.get('window');

export default function GameByGenreScreen() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [game, setGame] = useState(null);
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [loadingGame, setLoadingGame] = useState(false);
  const [error, setError] = useState(null);
  const [lastGames, setLastGames] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const res = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const data = await res.json();
        setGenres(data.results);
      } catch (err) {
        setError('Erro ao carregar gêneros');
      } finally {
        setLoadingGenres(false);
      }
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    if (!selectedGenre) {
      setGame(null);
      setLastGames([]);
      return;
    }
    fetchRandomGame(selectedGenre, []);
    // eslint-disable-next-line
  }, [selectedGenre]);

  async function fetchRandomGame(genre, alreadyShownGames = lastGames) {
    setLoadingGame(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}&page_size=40`
      );
      const data = await res.json();
      if (!data.results || data.results.length === 0) {
        setError('Nenhum jogo encontrado para este gênero.');
        setGame(null);
        setLastGames([]);
        return;
      }
      const filtered = data.results.filter(g => !alreadyShownGames.includes(g.id));
      if (filtered.length === 0) {
        setError('Todos os jogos desse gênero já foram sorteados. Tente outro gênero!');
        setGame(null);
        setLastGames([]);
        return;
      }
      const randomIndex = Math.floor(Math.random() * filtered.length);
      const newGame = filtered[randomIndex];
      setGame(newGame);
      setLastGames(prev => [...prev, newGame.id]);
    } catch (err) {
      setError('Erro ao buscar jogo');
      setGame(null);
      setLastGames([]);
    } finally {
      setLoadingGame(false);
    }
  }

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={[styles.titulo, { color: '#FFFFFF' }]}></Text>

      {loadingGenres ? (
        <ActivityIndicator size="large" color="#FFC947" />
      ) : (
        <GeneroPicker
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />
      )}

      {loadingGame && <ActivityIndicator size="large" color="#FFC947" style={{ marginTop: 20 }} />}

      {error && (
        <Text style={{ color: 'red', marginTop: 20, fontWeight: 'bold', textAlign: 'center' }}>{error}</Text>
      )}

      {game && (
        <View style={[
          styles.box,
          { 
            width: width * 0.92, // ocupa quase toda a largura da tela
            maxWidth: 480,
            minHeight: 420,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          }
        ]}>
          <Text style={[styles.texto, { color: '#FFFFFF', fontSize: 24, textAlign: 'center' }]}>{game.name}</Text>
          {game.background_image && (
            <Image
              source={{ uri: game.background_image }}
              style={{ width: '100%', height: 200, borderRadius: 14, marginTop: 14 }}
              resizeMode="cover"
            />
          )}
          <Text style={[styles.texto, { marginTop: 16, color: '#E0E0E0', fontSize: 18 }]}>
            Lançamento: {game.released || 'Desconhecido'}
          </Text>
          <Text style={[styles.texto, { color: '#E0E0E0', fontSize: 18 }]}>Nota: {game.rating || 'N/A'}</Text>

          <TouchableOpacity
            style={[
              styles.button,
              { 
                marginTop: 32, 
                backgroundColor: '#93c5fd',
                minWidth: 220,
                paddingVertical: 16,
                borderRadius: 14,
                alignSelf: 'center'
              }
            ]}
            onPress={() => fetchRandomGame(selectedGenre)}
          >
            <Text style={{ color: '#0B1D2E', fontWeight: 'bold', fontSize: 18 }}>
              Sortear outro jogo
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}