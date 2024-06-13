import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/navigators";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Lexend_400Regular,
  Lexend_500Medium,
} from "@expo-google-fonts/lexend";

export default function App() {
   let [fontsLoaded] = useFonts({
     Lexend_400Regular,
     Lexend_500Medium,
   });

   if (!fontsLoaded) {
     return <AppLoading />;
   }
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MyTabs />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
