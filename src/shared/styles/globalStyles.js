import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    color: "#a9a9a9",
    gap: 8,
  },
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
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
