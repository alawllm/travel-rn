import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Route } from "../shared/constants";
import { MyProfileScreen, HomeScreen } from "../screens";
import { HomeIcon, ProfileIcon } from "../../assets/icons";
import { useTheme } from "../shared/providers";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Route.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let IconComponent;

          if (route.name === Route.HOME) {
            IconComponent = HomeIcon;
          } else if (route.name === Route.MYPROFILE) {
            IconComponent = ProfileIcon;
          }

          return <IconComponent color={color} size={size} />;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}>
      <Tab.Screen name={Route.HOME} component={HomeScreen} />
      <Tab.Screen name={Route.MYPROFILE} component={MyProfileScreen} />
    </Tab.Navigator>
  );
};
