import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    marginTop: 14,
    backgroundColor: '#0b1d2e', // Azul escuro padrão de fundo
    borderRadius: 12,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
    paddingVertical: 6,
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16, // Mais espaçamento lateral
    gap: 12, // Espaço entre elementos (React Native >= 0.71)
  },
});