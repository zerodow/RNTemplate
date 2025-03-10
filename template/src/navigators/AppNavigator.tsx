import { NavigationContainer } from "@react-navigation/native"
import { ComponentProps } from "react"
import MainTabs from "./MainTab"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "@/screens/WelcomeScreen"
import LoginScreen from "@/screens/LoginScreen"
import RegisterScreen from "@/screens/RegisterScreen"
import ForgotPassword from "@/screens/ForgotPassword"
import { NetworkScreen } from "@/devtools/network-logger"

export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  Register: undefined
  OTPInput: { phoneNumber: string } // Pass phone number to OTP screen
  ForgotPassword: undefined
  MainTabs: undefined
  Networking: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const AppStack = () => {
  // const [isLoggedIn] = useMMKVBoolean(STORAGE_KEY.LOGGED_IN, storage)

  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen
        name="Networking"
        component={NetworkScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  )
}
