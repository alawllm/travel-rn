import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/navigators";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MyTabs />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
