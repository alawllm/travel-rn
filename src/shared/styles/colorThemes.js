import { StyleSheet } from "react-native";

const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  text: {
    color: "#000000",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
  text: {
    color: "#ffffff",
  },
});

export { lightTheme, darkTheme };
