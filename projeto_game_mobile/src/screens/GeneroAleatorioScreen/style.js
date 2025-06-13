import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1D2E", // Azul escuro padrão do app
    padding: 16,
  },
  title: {
    marginTop: 24,
    marginBottom: 20,
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF", // Branco para títulos vindos da API
    textAlign: "center",
    letterSpacing: 0.5,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFC947", // Dourado para destaque
    marginBottom: 10,
    letterSpacing: 0.2,
    textAlign: "center",
  },
  resultText: {
    fontSize: 16,
    color: "#E0E0E0",
    marginVertical: 6,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.2,
  },
  button: {
    backgroundColor: "#93c5fd", // Azul claro para botões
    paddingVertical: 16, // um pouco maior
    paddingHorizontal: 36, // mais espaço lateral
    borderRadius: 14, // mais arredondado
    marginHorizontal: 24,
    marginBottom: 32,
    alignItems: "center",
    minWidth: 200, // largura mínima para evitar corte de texto
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 7,
  },
  buttonText: {
    color: "#0B1D2E",
    fontWeight: "bold",
    fontSize: 18, // fonte um pouco maior
    letterSpacing: 0.2,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: "#FFC947",
    borderRadius: 14,
    backgroundColor: "#192841",
    marginHorizontal: 12,
    marginBottom: 14,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
});