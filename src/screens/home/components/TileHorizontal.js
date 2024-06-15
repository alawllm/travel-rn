import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../../../shared/styles";

export const TileHorizontal = ({option}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerTile}>
        <Text>{option}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#add8e6",
    gap: 10,
    height: 295,
    width: 300,
    borderRadius: 20,
    marginRight: 20,
    padding: 15,
    position: "relative",
  },
  innerTile: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    position: "absolute",
    left: 15,
    bottom: 15,
    padding: 15,
  },
});
