import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello in the home view</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "left",
    padding: 16,
    backgroundColor: 'white'
  },
});
