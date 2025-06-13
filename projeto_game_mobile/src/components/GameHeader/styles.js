import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: '#0b1d2e',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: '#2563eb', // Azul de destaque sutil e moderno
    borderBottomWidth: 1,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    color: '#f1f5f9', // Tom branco-azulado para maior contraste
    fontWeight: 'bold',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});