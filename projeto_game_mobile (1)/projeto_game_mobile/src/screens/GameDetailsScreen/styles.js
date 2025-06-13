import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1D2E', // Fundo escuro azul padrão do app
    padding: 16, // Padding maior para harmonizar com outros componentes
  },
  // Título interno da GameDetailsScreen
  titulo: {
    marginTop: 24,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#93c5fd', // Azul claro para títulos, seguindo o padrão do app
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  // Estilos de box e texto podem ser removidos se não forem usados diretamente nesta tela.
  // Caso precise de um destaque/box para detalhes:
  detailBox: {
    width: '100%',
    borderRadius: 14,
    backgroundColor: '#192841', // Azul escuro complementar
    padding: 16,
    marginVertical: 12,
    shadowColor: '#2563eb', // Sombra azul para harmonia visual
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4,
  },
  detailText: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  // Exemplo de estilo para sinopse ou informações do jogo
  sinopse: {
    marginVertical: 14,
    fontSize: 16,
    color: '#e5e7eb',
    lineHeight: 22,
    textAlign: 'justify',
  },
  // Exemplo de estilo para galeria de imagens
  gallery: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 10,
    paddingHorizontal: 4,
  },
});