import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

export const HomeScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hello in the home view!!!</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
});