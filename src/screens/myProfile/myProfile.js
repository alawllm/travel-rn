import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Text } from "react-native";


export const MyProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Here is my profile!!!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
});