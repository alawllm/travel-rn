import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../../shared/styles";
import { userData } from "../../shared/data";
import {
  EyeIcon,
  LogoutIcon,
  ToggleOffIcon,
  ToggleOnIcon,
} from "../../../assets/icons";
import { useTheme } from "../../shared/providers";
import { TextWithIcon } from "./components";

const data = userData[0];

export const MyProfileScreen = () => {
  const { theme, toggleTheme, themeStyles } = useTheme();

  return (
    <SafeAreaView
      style={[globalStyles.container, themeStyles.container, { gap: 25, height: '100%' }]}>
      <Text style={[globalStyles.boldTextLarge, themeStyles.text]}>
        My profile
      </Text>

      <View style={[globalStyles.horizontalContainer, themeStyles.text]}>
        <Image
          style={globalStyles.imgRound}
          source={{ uri: data.profilePic }}
        />
        <View>
          <Text style={[globalStyles.mediumTextSmall, themeStyles.text]}>
            {data.name}, {data.surname}
          </Text>
          <Text style={[globalStyles.regularTextSmall, themeStyles.text]}>
            {data.email}
          </Text>
        </View>
      </View>

      <View style={[globalStyles.container, themeStyles.text, { gap: 10 }]}>
        <View style={styles.endsWrapper}>
          <TextWithIcon
            circleColor="#d3d3d3"
            text="Dark mode"
            textColor={[globalStyles.regularTextSmall, themeStyles.text]}>
            <EyeIcon size={26} color="black" />
          </TextWithIcon>

          <TouchableOpacity onPress={toggleTheme}>
            {theme === "dark" ? (
              <ToggleOnIcon size={50} color="#c6c6c6" />
            ) : (
              <ToggleOffIcon size={50} color="#c6c6c6" />
            )}
          </TouchableOpacity>
        </View>
        <TextWithIcon
          circleColor="#ffcccb"
          text="Logout"
          textColor={globalStyles.regularTextSmallRed}>
          <LogoutIcon size={26} color="red" />
        </TextWithIcon>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  endsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
