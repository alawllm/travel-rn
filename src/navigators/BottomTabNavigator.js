import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Route } from "../shared/constants";
import { MyProfileScreen, HomeScreen } from "../screens";
import { HomeIcon, ProfileIcon } from "../../assets/icons";
import { useTheme } from "../shared/providers";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  const { themeStyles } = useTheme();
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
        tabBarStyle: {
          backgroundColor: themeStyles.container.backgroundColor
        },
      })}>
      <Tab.Screen name={Route.HOME} component={HomeScreen} />
      <Tab.Screen name={Route.MYPROFILE} component={MyProfileScreen} />
    </Tab.Navigator>
  );
};
