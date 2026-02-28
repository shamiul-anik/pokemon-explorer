import { create } from "zustand";

type ThemeMode = "light" | "dark";
type ThemePreference = ThemeMode | "system";

interface ThemeState {
  modePreference: ThemePreference;
  systemMode: ThemeMode;
  mode: ThemeMode;
  setModePreference: (preference: ThemePreference) => void;
  setSystemMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const getSystemMode = (): ThemeMode => {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getStoredPreference = (): ThemePreference => {
  try {
    const stored = localStorage.getItem("theme-mode");
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch {
    // localStorage unavailable
  }
  return "system";
};

const resolveMode = (modePreference: ThemePreference, systemMode: ThemeMode): ThemeMode =>
  modePreference === "system" ? systemMode : modePreference;

const initialSystemMode = getSystemMode();
const initialPreference = getStoredPreference();

export const useThemeStore = create<ThemeState>((set) => ({
  modePreference: initialPreference,
  systemMode: initialSystemMode,
  mode: resolveMode(initialPreference, initialSystemMode),
  setModePreference: (modePreference) =>
    set((state) => {
      try {
        localStorage.setItem("theme-mode", modePreference);
      } catch {
        // localStorage unavailable
      }

      return {
        modePreference,
        mode: resolveMode(modePreference, state.systemMode),
      };
    }),
  setSystemMode: (systemMode) =>
    set((state) => ({
      systemMode,
      mode: resolveMode(state.modePreference, systemMode),
    })),
  toggleMode: () =>
    set((state) => {
      const nextMode: ThemeMode = state.mode === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme-mode", nextMode);
      } catch {
        // localStorage unavailable
      }
      return {
        modePreference: nextMode,
        mode: nextMode,
      };
    }),
}));
