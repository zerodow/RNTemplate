import { loadString, zustandStorage } from "@/utils/storage"
import STORAGE_KEY from "@/utils/storage/storageKey"
import { darkTheme, lightTheme } from "@/theme"
import { ThemeMode, ThemeState } from "@/types/theme"
import { THEME_MODES } from "@/utils/constant"
import { Appearance } from "react-native"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const getInitialState = (): Partial<ThemeState> => {
  // Load persisted theme mode
  const persistedMode = loadString(STORAGE_KEY.THEME_STATUS)
    ? JSON.parse(loadString(STORAGE_KEY.THEME_STATUS)!).state.mode
    : THEME_MODES.LIGHT

  // Check if system is dark
  const systemIsDark = Appearance.getColorScheme() === THEME_MODES.DARK

  // If system theme is enabled, return system theme
  if (persistedMode === THEME_MODES.SYSTEM) {
    return {
      mode: THEME_MODES.SYSTEM,
      theme: systemIsDark ? darkTheme : lightTheme,
      isDarkMode: systemIsDark,
      followSystem: true,
    }
  }

  const mode = persistedMode as ThemeMode
  return {
    mode,
    theme: mode === THEME_MODES.DARK ? darkTheme : lightTheme,
    isDarkMode: mode === THEME_MODES.DARK,
    followSystem: false,
  }
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      ...(getInitialState() as ThemeState),

      toggleTheme: () =>
        set((state) => {
          if (state.followSystem) {
            // If following system, disable it and toggle manually
            const newMode = state.isDarkMode ? THEME_MODES.LIGHT : THEME_MODES.DARK
            return {
              mode: newMode,
              theme: newMode === THEME_MODES.DARK ? darkTheme : lightTheme,
              isDarkMode: newMode === THEME_MODES.DARK,
              followSystem: false,
            }
          }
          // Normal toggle between light and dark
          const newMode = state.mode === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT
          return {
            mode: newMode,
            theme: newMode === THEME_MODES.DARK ? darkTheme : lightTheme,
            isDarkMode: newMode === THEME_MODES.DARK,
          }
        }),

      enableSystemTheme: () =>
        set(() => {
          const systemTheme = Appearance.getColorScheme()
          return {
            mode: THEME_MODES.SYSTEM,
            theme: systemTheme == THEME_MODES.LIGHT ? lightTheme : darkTheme, // Default until system detection (see below)
            followSystem: true,
            isDarkMode: false, // Update this with system detection
          }
        }),
    }),
    {
      name: STORAGE_KEY.THEME_STATUS,
      storage: createJSONStorage(() => zustandStorage),
      partialize: (state) => ({
        mode: state.mode,
        isDarkMode: state.isDarkMode, // Tracks dark mode status
        followSystem: state.followSystem,
      }), // Persist only mode
    },
  ),
)

export default useThemeStore
