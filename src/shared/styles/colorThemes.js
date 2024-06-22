import { StyleSheet } from "react-native";

const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7f5",
  },
  lighterContainer: {
    backgroundColor: "#ffffff",
  },
  text: {
    color: "#0a0a0af5",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: "#0a0a0af5",
  },
  lighterContainer: {
    backgroundColor: "#1c1c1cf5",
  },
  text: {
    color: "#fafafaf5",
  },
});

export { lightTheme, darkTheme };
