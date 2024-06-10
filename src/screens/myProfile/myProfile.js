import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, StyleSheet } from "react-native";

export const MyProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Here is my profile</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
});
