import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "left",
    padding: 16,
    backgroundColor: "white",
    gap: 10,
    padding: 16,
    color: "#a9a9a9",
  },
  regularTextSmall: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
  },
  regularTextMedium: {
    fontFamily: "Lexend_500Medium",
    fontSize: 14,
  },
  mediumTextSmall: {
    fontFamily: "Lexend_500Medium",
    fontSize: 16,
  },
  mediumTextBigger: {
    fontFamily: "Lexend_500Medium",
    fontSize: 18,
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
});
