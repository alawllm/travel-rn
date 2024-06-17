import { View, Image, Text } from "react-native";

export const IntroGreeting = ({ data, styles }) => {
  return (
    <View style={styles.horizontalContainer}>
      <Image style={styles.imgRound} source={{ uri: data[0].profilePic }} />
      <View>
        <Text style={styles.regularTextSmall}>Hello, {data[0].name}</Text>
        <Text style={styles.mediumTextSmall}>Where do you want to go?</Text>
      </View>
    </View>
  );
};
