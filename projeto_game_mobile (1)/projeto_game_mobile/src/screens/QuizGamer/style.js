import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0B1D2E", // Fundo azul escuro
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#93c5fd", // Azul claro padrão do app
    textAlign: "center",
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  questionText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: '500',
  },
  optionsContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  optionButton: {
    backgroundColor: "#12263A", // Azul mais escuro para botões
    paddingVertical: 16,
    marginVertical: 8,
    borderRadius: 12,
    width: "92%",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 3,
  },
  optionText: {
    fontSize: 17,
    color: "#E0E0E0", // Cinza claro
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
  resultTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFC947", // Amarelo padrão do app
    textAlign: "center",
    marginBottom: 16,
  },
  resultText: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 24,
    fontWeight: '600',
  },
  button: {
    backgroundColor: "#FFC947",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    width: "72%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 2,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: "#0B1D2E",
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
});