import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#192841", // azul escuro elegante
    padding: 18,
    borderRadius: 12,
    marginBottom: 24,
    width: "100%",
    shadowColor: "#2563eb", // azul vibrante para sombra
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#282f3e",
  },
  label: {
    color: "#93c5fd", // azul claro para destaque do label
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 1,
    marginBottom: 6,
  },
  text: {
    color: "#f1f5f9", // quase branco para contraste
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "500",
    lineHeight: 24,
  },
});