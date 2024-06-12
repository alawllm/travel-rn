import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { globalStyles } from "../../shared/styles";

export const HomeScreen = () => {

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.regularText}>Hello, Margaret</Text>
      <Text style={globalStyles.regularText}>Where do you want to go?</Text>
      {/* Here search field */}
      <Text style={globalStyles.mediumText}>Popular destinations</Text>
      <Text style={globalStyles.mediumText}>Recommendation</Text>
    </SafeAreaView>
  );
};

//  style={{
//     fontFamily: Platform.select({
//       android: 'Inter_100Thin',
//       ios: 'Inter-Thin',
//     })
