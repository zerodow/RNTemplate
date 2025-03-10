export interface Theme {
  colors: any
  spacing: any
}

export type ThemeMode = "light" | "dark" | "system"

export interface ThemeState {
  mode: ThemeMode
  theme: Theme
  isDarkMode: boolean
  followSystem: boolean
  toggleTheme: () => void
  enableSystemTheme: () => void
}

export interface CommonResponse {
  status?: boolean
  message: string
}
