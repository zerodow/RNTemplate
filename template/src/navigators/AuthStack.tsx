import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "@/screens/WelcomeScreen"
import LoginScreen from "@/screens/LoginScreen"
import RegisterScreen from "@/screens/RegisterScreen"
import ForgotPassword from "@/screens/ForgotPassword"

export type AuthStackParamList = {
  Welcome: undefined
  Login: undefined
  Register: undefined
  OTPInput: { phoneNumber: string } // Pass phone number to OTP screen
  ForgotPassword: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
)

export default AuthStack
