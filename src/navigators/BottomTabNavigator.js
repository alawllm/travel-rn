import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Route } from "../shared/constants";
import { MyProfileScreen, HomeScreen } from "../screens";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName={Route.HOME}>
      <Tab.Screen
        name={Route.HOME}
        component={HomeScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Route.MYPROFILE}
        component={MyProfileScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
