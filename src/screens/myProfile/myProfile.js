import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from "react-native";

export const MyProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Here is your profile</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "left",
    padding: 16,
    backgroundColor: "white",
  },
});
