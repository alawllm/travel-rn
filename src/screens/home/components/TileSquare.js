import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { globalStyles } from "../../../shared/styles";
import { useTheme } from "../../../shared/providers";
import { PinDrop, StarIcon } from "../../../../assets/icons";

export const TileSquare = ({ option }) => {
  const { themeStyles } = useTheme();
  return (
    <ImageBackground
      style={styles.outerContainer}
      source={{ uri: option.img }}
      imageStyle={{ borderRadius: 20 }}>
      <View style={[styles.innerTile, themeStyles.container]}>
        <View style={styles.horizontalContainer}>
          <Text style={[globalStyles.boldTextSmall, themeStyles.text]}>
            {option.title}
          </Text>
          <Text>
            <Text style={globalStyles.boldTextSmallPurple}>
              ${option.pricePerNight}
            </Text>
            <Text style={[globalStyles.regularTextSmall, themeStyles.text]}>
              / person
            </Text>
          </Text>
        </View>
        <View style={styles.containerWithIcon}>
          <PinDrop size={20} color={themeStyles.text.color} />
          <Text style={[globalStyles.regularTextSmall, themeStyles.text]}>
            {option.location}
          </Text>
        </View>
        <View style={styles.containerWithIcon}>
          <StarIcon size={20} color='#ffcc00' />
          <Text>
            <Text style={[globalStyles.regularTextSmall, themeStyles.text]}>
              {option.rating}
            </Text>

            <Text style={[globalStyles.regularTextSmall, themeStyles.text]}>
              ({option.numReviews} Reviews)
            </Text>
          </Text>
        </View>
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
    paddingBottom: 8,
  },
  containerWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  }
});
