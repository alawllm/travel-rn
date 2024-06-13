import { SafeAreaView } from "react-native-safe-area-context";
import { Text} from "react-native";
import { globalStyles } from "../../shared/styles";
export const MyProfileScreen = () => {

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.mediumTextSmall}>My profile</Text>
      <Text style={globalStyles.regularTextSmall}>Name, surname</Text>
      <Text style={globalStyles.mediumTextBigger}>Darkmode</Text>
      <Text style={globalStyles.mediumTextBigger}>Logout</Text>
    </SafeAreaView>
  );
};
