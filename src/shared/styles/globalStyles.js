import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 7,
    height: "auto",
  },
  horizontalContainer: {
    display: "flex",
    alignContent: "space-between",
    height: "auto",
    flexDirection: "row",
    gap: 15,
  },
  imgRound: {
    borderRadius: 24,
    height: 48,
    width: 48,
  },
  regularTextSmall: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
  },
  regularTextSmallRed: {
    color: "#FF0000",
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
  boldTextLarge: {
    fontFamily: "Lexend_700Bold",
    fontSize: 24,
  },
  boldTextSmallPurple: {
    fontFamily: "Lexend_700Bold",
    fontSize: 16,
    color: "#a020f0",
  },
});
