import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import { globalStyles } from "../../shared/styles";
import { userData } from "../../shared/data";

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
      <View style={[globalStyles.container, {gap: 10}]}>
        <Text style={globalStyles.regularTextSmall}>Darkmode</Text>
        <Text style={globalStyles.regularTextSmallRed}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};
