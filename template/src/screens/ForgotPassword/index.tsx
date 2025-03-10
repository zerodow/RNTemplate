import SafeAreaWrapper from "@/components/SafeAreaWrapper"
import CommonHeader from "@/components/CommonHeader"
import { Button, View } from "react-native"
import { commonStyles } from "@/theme/commonStyles"
import { navigate } from "@/navigators/navigationUtilities"

const ForgotPassword = () => {
  return (
    <SafeAreaWrapper>
      <CommonHeader title="Forgot Password" />
      <View style={commonStyles.flex1}>
        <Button title="To Login" onPress={() => navigate("Login")} />
      </View>
    </SafeAreaWrapper>
  )
}

export default ForgotPassword
