import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
  toggleMode: () => void;
}

// Read initial value from sessionStorage
const getStoredMode = (): ThemeMode => {
  try {
    const stored = sessionStorage.getItem("theme-mode");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // sessionStorage not available
  }
  return "dark"; // default to dark mode
};

export const useThemeStore = create<ThemeState>((set) => ({
  mode: getStoredMode(),
  toggleMode: () =>
    set((state) => {
      const newMode: ThemeMode = state.mode === "dark" ? "light" : "dark";
      try {
        sessionStorage.setItem("theme-mode", newMode);
      } catch {
        // sessionStorage not available
      }
      return { mode: newMode };
    }),
}));
