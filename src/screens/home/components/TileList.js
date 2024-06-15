import { Text, View, StyleSheet, Image } from "react-native";
import { globalStyles } from "../../../shared/styles";

export const TileList = ({ option }) => {
  return (
    <View style={styles.outerContainer}>
      <Image
        style={styles.img}
        source={{ uri: option.img }}
        imageStyle={{ borderRadius: 20 }}
      />
      <View style={styles.innerContainer}>
        <Text style={globalStyles.boldTextSmall}>{option.title}</Text>
        <Text>
          <Text style={globalStyles.boldTextSmallPurple}>
            ${option.pricePerNight}
          </Text>
          <Text>/person</Text>
        </Text>
        <Text>{option.location}</Text>
        <Text>
          <Text>{option.rating}</Text>
          <Text> ({option.numReviews} Reviews)</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "flex-start",
    padding: 4,
    gap: 5,
    height: 128,
    width: "100%",
    borderRadius: 20,
    padding: 15,
    position: "relative",
  },
  img: {
    height: 80,
    width: 80,
  },
  innerContainer: {
    height: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "left",
  },
});
