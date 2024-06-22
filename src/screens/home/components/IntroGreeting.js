import { View, Image, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../shared/providers";
import { BellIcon } from "../../../../assets/icons";

export const IntroGreeting = ({ data, styles }) => {
  const { themeStyles } = useTheme();

  return (
    <View style={styles.horizontalContainer}>
      <Image style={styles.imgRound} source={{ uri: data[0].profilePic }} />
      <View>
        <Text style={[styles.regularTextSmall, themeStyles.text]}>
          Hello, {data[0].name}
        </Text>
        <Text style={[styles.mediumTextSmall, themeStyles.text]}>
          Where do you want to go?
        </Text>
      </View>
      <View
        style={[
         localStyles.circleIcon,
          {
            backgroundColor: `${themeStyles.lighterContainer.backgroundColor}`,
          },
        ]}>
        <BellIcon size={26} color={themeStyles.text.color} />
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  circleIcon: {
    height: 48,
    width: 48,
    borderRadius: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
