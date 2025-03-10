import useThemeStore from "@/stores/themeStore"
import { darkTheme, lightTheme } from "@/theme"
import { THEME_MODES } from "@/utils/constant"
import { useEffect } from "react"
import { Appearance } from "react-native"

const useSystemTheme = () => {
  const { followSystem, enableSystemTheme } = useThemeStore()

  useEffect(() => {
    // If not following system, do nothing
    if (!followSystem) return

    const updateTheme = ({ colorScheme }: { colorScheme: "light" | "dark" | null | undefined }) => {
      useThemeStore.setState({
        theme: colorScheme === "dark" ? darkTheme : lightTheme,
        isDarkMode: colorScheme === "dark",
      })
    }

    // Initial sync on mount (redundant with getInitialState, but ensures consistency)
    const systemIsDark = Appearance.getColorScheme() === THEME_MODES.DARK
    useThemeStore.setState({
      theme: systemIsDark ? darkTheme : lightTheme,
      isDarkMode: systemIsDark,
    })

    // Add listener for system theme changes
    const subscription = Appearance.addChangeListener(updateTheme)

    // Cleanup listener on unmount
    return () => subscription.remove()
  }, [followSystem]) // Re-run effect if followSystem changes

  return { enableSystemTheme } // Expose action if needed
}

export default useSystemTheme
