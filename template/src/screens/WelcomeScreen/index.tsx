import SafeAreaWrapper from "@/components/SafeAreaWrapper"
import CommonHeader from "@/components/CommonHeader"
import { Button, Text, View } from "react-native"
import { commonStyles } from "@/theme/commonStyles"
import { navigate } from "@/navigators/navigationUtilities"
import Config from "react-native-config"
import { Theme } from "@/types/theme"
import useTheme, { useEnableSystemTheme, useToggleTheme } from "@/hooks/useTheme"

const WelcomeScreen = () => {
  const theme = useTheme()
  const toggleTheme = useToggleTheme()
  const enableSystemTheme = useEnableSystemTheme()
  const styles = createStyles(theme)

  const testRequest = () => {
    fetch("http://localhost:3000/test")
      .then((response) => response.json())
      .then((data) => console.log("Data received:", data))
      .catch((error) => console.error("Error:", error))
  }

  return (
    <SafeAreaWrapper>
      <CommonHeader title="Welcome Screen asdasd" />
      <View style={[styles.container, commonStyles.flex1]}>
        <Text>{Config.API_BASE_URL}</Text>
        <Button title="To Login" onPress={() => navigate("Login")} />
        <Button title="Test Request" onPress={() => testRequest()} />
        <Button
          title="Toggle theme"
          onPress={() => {
            toggleTheme()
          }}
        />
        <Button
          title="Enable system theme"
          onPress={() => {
            enableSystemTheme()
          }}
        />
      </View>
    </SafeAreaWrapper>
  )
}

export default WelcomeScreen

const createStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
})
