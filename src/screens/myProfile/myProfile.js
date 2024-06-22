import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, StyleSheet } from "react-native";
import { globalStyles } from "../../shared/styles";
import { userData } from "../../shared/data";
import { EyeIcon, LogoutIcon } from "../../../assets/icons/EyeIcon";

const data = userData[0];

export const MyProfileScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container, { gap: 25 }]}>
      <Text style={globalStyles.boldTextLarge}>My profile</Text>
      <View style={globalStyles.horizontalContainer}>
        <Image
          style={globalStyles.imgRound}
          source={{ uri: data.profilePic }}
        />
        <View>
          <Text style={globalStyles.mediumTextSmall}>
            {data.name}, {data.surname}
          </Text>
          <Text style={globalStyles.regularTextSmall}>{data.email}</Text>
        </View>
      </View>
      <View style={[globalStyles.container, { gap: 10 }]}>
        <View style={styles.textWithIcon}>
          <View style={[styles.circleIcon, { backgroundColor: "#d3d3d3" }]}>
            <EyeIcon size={26} color="black" />
          </View>
          <Text style={globalStyles.regularTextSmall}>Dark Mode</Text>
        </View>
        <View style={styles.textWithIcon}>
          <View style={[styles.circleIcon, { backgroundColor: "#ffcccb" }]}>
            <LogoutIcon size={26} color="red" />
          </View>
          <Text style={globalStyles.regularTextSmallRed}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textWithIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
    marginBottom: 10,
  },
  circleIcon: {
    height: 48,
    width: 48,
    borderRadius: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
