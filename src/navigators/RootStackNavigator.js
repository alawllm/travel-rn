import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Route } from "../shared/constants";

import { MyProfileScreen, HomeScreen } from "../screens";

const RootStack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return (
    // navigation prop passed to every screen defined in the navigation
    <RootStack.Navigator initialRouteName={Route.HOME}>
      <RootStack.Screen
        name={Route.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={Route.MYPROFILE}
        component={MyProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
