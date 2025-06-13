import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1D2E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  headerImage: {
    width: width * 0.92,
    height: 180,
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 8,
    backgroundColor: '#192841',
  },
  title: {
    color: '#93c5fd',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    color: '#E0E0E0',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 28,
    marginHorizontal: 8,
    fontWeight: '500',
  },
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',         // Dispor botões lado a lado
    flexWrap: 'wrap',             // Permite quebrar linha se não couberem
    marginTop: 12,
    marginBottom: 12,
    gap: 0, // gap não é suportado oficialmente, usar margin nos botões
  },
  button: {
    width: width * 0.42,           // Dois botões por linha, com espaçamento
    minWidth: 150,
    margin: 8,                     // Espaço entre os botões
    alignSelf: 'center',
    borderRadius: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
  },
  // ... seus outros estilos
  gameName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  nextImageText: {
    color: '#93c5fd',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 10,
    fontStyle: 'italic',
    letterSpacing: 0.2,
  }
// ... restante do seu styles
});