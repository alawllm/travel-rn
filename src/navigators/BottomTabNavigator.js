import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Route } from "../shared/constants";
import { MyProfileScreen, HomeScreen } from "../screens";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Route.HOME}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name={Route.HOME} component={HomeScreen} />
      <Tab.Screen name={Route.MYPROFILE} component={MyProfileScreen} />
    </Tab.Navigator>
  );
};
