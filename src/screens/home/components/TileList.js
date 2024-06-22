import { Text, View, StyleSheet, Image } from "react-native";
import { globalStyles } from "../../../shared/styles";
import { useTheme } from "../../../shared/providers";
import { PinDrop, StarIcon } from "../../../../assets/icons";

export const TileList = ({ option }) => {
  const { themeStyles } = useTheme();

  return (
    <View style={[styles.outerContainer, themeStyles.lighterContainer]}>
      <Image
        style={styles.img}
        source={{ uri: option.img }}
        imageStyle={{ borderRadius: 20 }}
      />
      <View style={styles.innerContainer}>
        <Text style={[globalStyles.boldTextSmall, themeStyles.text]}>
          {option.title}
        </Text>
        <Text>
          <Text style={globalStyles.boldTextSmallPurple}>
            ${option.pricePerNight}
          </Text>
          <Text style={[globalStyles.regularTextSmall, themeStyles.text]}>
            /person
          </Text>
        </Text>
        <View style={styles.containerWithIcon}>
          <PinDrop size={20} color={themeStyles.text.color} />
          <Text style={[globalStyles.regularTextSmall, themeStyles.text]}>
            {option.location}
          </Text>
        </View>
        <View style={styles.containerWithIcon}>
          <StarIcon size={20} color="#ffcc00" />
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
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    gap: 15,
    height: 100,
    borderRadius: 10,
    position: "relative",
    marginBottom: 10,
    width: "100%",
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  innerContainer: {
    height: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "left",
  },
  containerWithIcon: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
