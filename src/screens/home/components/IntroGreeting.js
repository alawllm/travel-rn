import { View, Image, Text } from "react-native";
import { useTheme } from "../../../shared/providers";

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
    </View>
  );
};
