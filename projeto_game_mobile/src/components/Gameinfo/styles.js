import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 0,
    alignItems: 'center',
    backgroundColor: '#192841', // Fundo elegante e consistente com demais componentes
  },
  image: {
    width: 0, // Ajuste conforme necessidade do seu layout
    height: 0,
    borderRadius: 8,
    marginBottom: 0,
  },
  developer: {
    color: '#93c5fd', // Azul claro elegante, mesmo tom dos títulos de seção
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: 0.3,
  },
});