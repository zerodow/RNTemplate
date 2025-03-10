import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { useTranslation } from "react-i18next"

import { Theme } from "@/types/theme"
import { commonStyles } from "@/theme/commonStyles"
import { goBack } from "@/navigators/navigationUtilities"
import useTheme from "@/hooks/useTheme"

interface CommonHeaderProps {
  title: string
  showRight?: boolean
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const styles = createStyles(theme)

  const pressLeft = () => {
    goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={pressLeft}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={[commonStyles.flex1, commonStyles.center]}>
        <Text>{t(title)}</Text>
      </View>
      <View style={styles.box} />
    </View>
  )
}

export default CommonHeader

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    box: {
      alignItems: "center",
      height: 50,
      justifyContent: "center",
      width: 80,
    },
    container: {
      backgroundColor: theme.colors.primary200,
      flexDirection: "row",
      height: 50,
      width: "100%",
    },
  })
