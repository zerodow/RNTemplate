import { Theme, ThemeMode } from "@/types/theme"
import useThemeStore from "@/stores/themeStore"

// Hook to get theme
const useTheme = (): Theme => useThemeStore((state) => state.theme)

// Hook to get mode
export const useThemeMode = (): ThemeMode => useThemeStore((state) => state.mode)

// Hook to toggle theme
export const useToggleTheme = (): (() => void) => useThemeStore((state) => state.toggleTheme)

// Hook to enable system theme
export const useEnableSystemTheme = (): (() => void) =>
  useThemeStore((state) => state.enableSystemTheme)

// Hook to check if following system
export const useFollowSystem = (): boolean => useThemeStore((state) => state.followSystem)

export default useTheme
