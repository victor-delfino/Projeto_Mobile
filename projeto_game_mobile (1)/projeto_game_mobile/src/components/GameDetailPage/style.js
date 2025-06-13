import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1D2E',
    padding: 14,
  },

  // Título do jogo
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F1F5F9',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  // FlatList ou ScrollView horizontal com screenshots
  scrollView: {
    height: 250,
    marginTop: 16,
    marginBottom: 18,
  },

  // Imagem do jogo
  image: {
    width: width * 0.85,
    height: 220,
    resizeMode: 'cover',
    borderRadius: 12,
    marginHorizontal: 10,
    backgroundColor: '#2c2c2c',
  },

  // Sinopse
  synopsisContainer: {
    padding: 16,
    backgroundColor: '#192841',
    borderRadius: 10,
    marginTop: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#93c5fd',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  synopsisText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#cbd5e1',
  },

  // Avaliação (estrelas e nota)
  ratingContainer: {
    padding: 16,
    backgroundColor: '#192841',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  ratingStars: {
    fontSize: 30,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 6,
  },

  // Informações do desenvolvedor
  developerText: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 10,
  },

  // Estilo favorito selecionado (GameStylePicker)
  stylePickerText: {
    fontSize: 16,
    color: '#93c5fd',
    marginTop: 10,
    textAlign: 'center',
  },
});