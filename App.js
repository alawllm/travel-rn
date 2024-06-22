import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/navigators";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import { ThemeProvider } from "./src/shared/providers";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <ThemeProvider>
        <SafeAreaProvider>
          <MyTabs />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
