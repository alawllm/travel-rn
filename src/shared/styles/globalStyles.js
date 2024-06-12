import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "left",
    padding: 16,
    backgroundColor: "white",
    gap: 30,
    padding: 16,
    fontSize: 24,
    lineHeight: 32,
    color: "#a9a9a9",
  },
  regularText: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
  },
  mediumText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
});