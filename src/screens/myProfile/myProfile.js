import { SafeAreaView } from "react-native-safe-area-context";
import { Text} from "react-native";
import { globalStyles } from "../../shared/styles";
export const MyProfileScreen = () => {

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.regularText}>My profile</Text>
      <Text style={globalStyles.mediumText}>Name, surname</Text>
      <Text style={globalStyles.mediumText}>Darkmode</Text>
      <Text style={globalStyles.mediumText}>Logout</Text>
    </SafeAreaView>
  );
};
