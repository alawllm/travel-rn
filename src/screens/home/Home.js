import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, StyleSheet } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello in the home view</Text>
      <Button
        title="Go to my profile"
        onPress={() => navigation.navigate("myProfile")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
});
