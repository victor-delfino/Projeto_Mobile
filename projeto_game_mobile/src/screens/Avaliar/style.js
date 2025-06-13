import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1D2E', // Fundo escuro azul padrão do app
    padding: 16, // Espaçamento maior para harmonizar com demais componentes
  },
  titulo: {
    marginTop: 24,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#93c5fd', // Azul claro padrão de títulos
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  box: {
    width: 250,
    height: 350,
    marginHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFC947', // Borda amarela dourada
    borderWidth: 3,
    borderRadius: 18, // Bordas mais suaves e modernas
    backgroundColor: '#192841', // Fundo interno azul escuro consistente
    shadowColor: '#2563eb', // Sombra azul para harmonia visual
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 8,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
    textAlign: 'center',
    marginTop: 16,
    letterSpacing: 0.3,
  },
});