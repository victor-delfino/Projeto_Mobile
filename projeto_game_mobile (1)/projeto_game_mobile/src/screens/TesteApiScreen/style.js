import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1D2E',
    padding: 14,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    // Título principal da tela
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F1F5F9',
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  botaoBuscar: {
    backgroundColor: '#3498db',
    borderRadius: 9,
    paddingVertical: 12,
    paddingHorizontal: 26,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  botaoBuscarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  buttonSpacer: {
    height: 10,
  },
  errorText: {
    // Texto de erro
    color: '#FF6347',
    marginTop: 18,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    // Container da seção de resultados
    width: '100%',
    marginTop: 28,
    backgroundColor: '#192841',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  sectionTitle: {
    // Título da seção de resultados
    fontSize: 18,
    fontWeight: 'bold',
    color: '#93c5fd',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  list: {
    maxHeight: 480,
    width: '100%',
  },
  itemContainer: {
    // Card de cada jogo
    backgroundColor: '#222b38',
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#26344d',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 1,
  },
  itemTitle: {
    // Nome do jogo
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1F5F9',
    marginBottom: 6,
    letterSpacing: 0.15,
  },
  itemDetail: {
    // Detalhes do jogo (ex: lançamento, nota)
    fontSize: 15,
    color: '#cbd5e1',
    marginBottom: 3,
  },
  itemImage: {
    // Imagem do jogo
    width: '100%',
    height: 160,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#2c2c2c',
    alignSelf: 'center',
  },
  // ... (seu código já existente)
  pickerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    justifyContent: 'center',
  },
  labelPicker: {
    color: '#F1F5F9',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  picker: {
    height: 44,
    width: 120,
    color: '#F1F5F9',
    backgroundColor: '#192841',
    borderRadius: 8,
  },
  pickerItem: {
    color: '#F1F5F9',
    fontSize: 16,
  }
// ... (restante do seu código)
});

export default styles;