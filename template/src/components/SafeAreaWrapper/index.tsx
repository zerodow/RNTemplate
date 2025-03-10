import useTheme from "@/hooks/useTheme"
import { Theme } from "@/types/theme"
import React, { ReactNode } from "react"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface SafeAreaWrapperProps {
  children: ReactNode
}

const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({ children }) => {
  const theme = useTheme()
  const styles = createStyles(theme)
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary200,
      flex: 1,
    },
  })
