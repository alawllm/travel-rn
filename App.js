import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "./src/navigators";
import { View, Text } from "react-native";

export default function App() {
  return (
      <NavigationContainer>
        <SafeAreaProvider>
          <View><Text>Hello from the app!</Text></View>
          <RootStackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
  );
}
