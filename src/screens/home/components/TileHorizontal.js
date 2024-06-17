import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { globalStyles } from "../../../shared/styles";

export const TileHorizontal = ({ option }) => {
  return (
    <ImageBackground
      style={styles.outerContainer}
      source={{ uri: option.img }}
      imageStyle={{ borderRadius: 20 }}>
      <View style={styles.innerTile}>
        <View style={styles.horizontalContainer}>
          <Text style={globalStyles.boldTextSmall}>{option.title}</Text>
          <Text>
            <Text style={globalStyles.boldTextSmallPurple}>
              ${option.pricePerNight}
            </Text>
            <Text>/person</Text>
          </Text>
        </View>
        <Text>{option.location}</Text>
        <Text>
          <Text>{option.rating}</Text>
          <Text> ({option.numReviews} Reviews)</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 280,
    width: 280,
    borderRadius: 20,
    marginRight: 20,
    padding: 10,
    position: "relative",
  },
  innerTile: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    position: "absolute",
    left: 10,
    bottom: 15,
    padding: 15,
    display: "flex",
  },
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 8
  },
});
