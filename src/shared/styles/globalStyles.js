import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    color: "#a9a9a9"
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
  boldTextSmall: {
    fontFamily: "Lexend_700Bold",
    fontSize: 16,
  },
  boldTextSmallPurple: {
    fontFamily: "Lexend_700Bold",
    fontSize: 16,
    color: "#a020f0",
  }
});
