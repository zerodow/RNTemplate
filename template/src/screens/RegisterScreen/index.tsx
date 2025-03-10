import SafeAreaWrapper from "@/components/SafeAreaWrapper"
import CommonHeader from "@/components/CommonHeader"
import { Button, View } from "react-native"
import { commonStyles } from "@/theme/commonStyles"
import { navigate } from "@/navigators/navigationUtilities"

const RegisterScreen = () => {
  return (
    <SafeAreaWrapper>
      <CommonHeader title="Register Screen" />
      <View style={commonStyles.flex1}>
        <Button title="To Login" onPress={() => navigate("Login")} />
      </View>
    </SafeAreaWrapper>
  )
}

export default RegisterScreen
