import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Scroll from '../../components/scroll/scroll';
import Imagem from '../../components/imagem/imagem';
import styles from './style';
import axios from 'axios';

function Avaliar({ navigation }) {
  const [gamesData, setGamesData] = useState({});
  const [loading, setLoading] = useState(true);

  // Os slugs dos jogos que você tem imagens locais
  const gameSlugs = [
    'red-dead-redemption-2',
    'the-last-of-us-part-ii',
    'hollow-knight',
    'elden-ring',
  ];
  const gameNames = [
  'Red Dead Redemption 2',
  'The Last of Us Part II',
  'Hollow Knight',
  'Elden Ring',
];

useEffect(() => {
  const fetchGames = async () => {
    try {
      const apiKey = '6b7a585cf2e54cbbb5608315ec2e5f7b';

      const requests = gameNames.map(name =>
        axios.get(`https://api.rawg.io/api/games?search=${encodeURIComponent(name)}&key=${apiKey}`)
      );

      const responses = await Promise.all(requests);

      const gamesMap = {};

      for (const res of responses) {
        const game = res.data.results[0];
        if (game) {
          console.log('Slug encontrado na API:', game.slug);

          const detailRes = await axios.get(`https://api.rawg.io/api/games/${game.id}?key=${apiKey}`);
          const gameDetail = detailRes.data;

          const screenshotsRes = await axios.get(`https://api.rawg.io/api/games/${game.id}/screenshots?key=${apiKey}`);
          const screenshots = screenshotsRes.data.results || [];

          // Monta o array de imagens com background_image primeiro e depois até 2 screenshots diferentes
          const images = [];

          if (gameDetail.background_image) {
            images.push(gameDetail.background_image);
          }

          const screenshotsToAdd = screenshots
            .map(screen => screen.image)
            .filter(img => img !== gameDetail.background_image)
            .slice(0, 2);

          images.push(...screenshotsToAdd);

          gamesMap[game.slug] = {
            id: gameDetail.id.toString(),
            title: gameDetail.name,
            images,
            developer: gameDetail.developers?.[0]?.name || 'Desconhecido',
            synopsis: gameDetail.description_raw || 'Sem descrição',
            storageKey: `game_${gameDetail.id}`,
            defaultStyle: gameDetail.genres?.[0]?.name || 'Outros',
          };
        }
      }

      setGamesData(gamesMap);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar jogos da API:', error);
      setLoading(false);
    }
  };

  fetchGames();
}, []);





  const navigateToGameDetails = (slug) => {
    const game = gamesData[slug];
    if (game) {
      navigation.navigate('GameDetails', game);
    } else {
      console.warn(`Dados do jogo com slug "${slug}" não encontrados`);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogos para Avaliar</Text>
      <Scroll>
        <View style={styles.box}>
          <Imagem
            source={require('../../imagemJogos/REDteste.jpg')}
            onPress={() => navigateToGameDetails('red-dead-redemption-2')}
          />
          <Text style={styles.texto}>Red Dead Redemption 2</Text>
        </View>

        <View style={styles.box}>
          <Imagem
            source={require('../../imagemJogos/Thelast2Re.jpg')}
            onPress={() => navigateToGameDetails('the-last-of-us-part-2')}
          />
          <Text style={styles.texto}>The Last of Us Part II</Text>
        </View>

        <View style={styles.box}>
          <Imagem
            source={require('../../imagemJogos/HollowKnightS.png')}
            onPress={() => navigateToGameDetails('hollow-knight')}
          />
          <Text style={styles.texto}>Hollow Knight</Text>
        </View>

        <View style={styles.box}>
          <Imagem
            source={require('../../imagemJogos/Elden.png')}
            onPress={() => navigateToGameDetails('elden-ring')}
          />
          <Text style={styles.texto}>Elden Ring</Text>
        </View>
      </Scroll>
    </View>
  );
}

export default Avaliar;
