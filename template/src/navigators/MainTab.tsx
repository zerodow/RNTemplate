import GiftScreen from "@/screens/GiftScreen"
import HomeScreen from "@/screens/HomeScreen"
import MenuScreen from "@/screens/MenuScreen"
import ProfileScreen from "@/screens/ProfileScreen"
import QRScreen from "@/screens/QRScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

export type TabParamList = {
  Home: undefined
  Search: undefined
  Notifications: undefined
  Profile: undefined
  Settings: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

const MainTabs = () => (
  <Tab.Navigator
  // screenOptions={({ route }) => ({
  //   tabBarIcon: ({ color, size }) => {
  //     let iconName: string = "home"
  //     switch (route.name) {
  //       case "Home":
  //         iconName = "home-outline"
  //         break
  //       case "Search":
  //         iconName = "search-outline"
  //         break
  //       case "Notifications":
  //         iconName = "notifications-outline"
  //         break
  //       case "Profile":
  //         iconName = "person-outline"
  //         break
  //       case "Settings":
  //         iconName = "settings-outline"
  //         break
  //     }
  //     return <Icon name={iconName} size={size} color={color} />
  //   },
  // })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={MenuScreen} />
    <Tab.Screen name="Notifications" component={QRScreen} />
    <Tab.Screen name="Profile" component={GiftScreen} />
    <Tab.Screen name="Settings" component={ProfileScreen} />
  </Tab.Navigator>
)

export default MainTabs
