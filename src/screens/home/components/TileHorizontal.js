import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export const TileHorizontal = () => {
  return (
    <View style={styles.container}>
      <Text>Here is the blabla</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    gap: 10,
    height: 100,
    width: 100,
  },
});
