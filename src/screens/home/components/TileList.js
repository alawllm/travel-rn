import { Text, View, StyleSheet, Image } from "react-native";
import { globalStyles } from "../../../shared/styles";
import { useTheme } from "../../../shared/providers";

export const TileList = ({ option }) => {
  const { themeStyles } = useTheme();

  return (
    <View style={styles.outerContainer}>
      <Image
        style={styles.img}
        source={{ uri: option.img }}
        imageStyle={{ borderRadius: 20 }}
      />
      <View style={styles.innerContainer}>
        <Text style={[globalStyles.boldTextSmall,themeStyles.text]}>
          {option.title}
        </Text>
        <Text>
          <Text
            style={[globalStyles.boldTextSmallPurple, themeStyles.text]}>
            ${option.pricePerNight}
          </Text>
          <Text
            style={[globalStyles.regularTextSmall, themeStyles.text ]}>
            /person
          </Text>
        </Text>
        <Text style={[globalStyles.regularTextSmall, themeStyles.text]}>
          {option.location}
        </Text>
        <Text>
          <Text
            style={[globalStyles.regularTextSmall, themeStyles.text ]}>
            {option.rating}
          </Text>
          <Text
            style={[globalStyles.regularTextSmall, themeStyles.text] }>
            ({option.numReviews} Reviews)
          </Text>
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
    gap: 15,
    height: 100,
    width: "100%",
    borderRadius: 5,
    position: "relative",
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
});
