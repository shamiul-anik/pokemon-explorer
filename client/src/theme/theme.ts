import { createTheme, type ThemeOptions } from "@mui/material/styles";

const commonOptions: ThemeOptions = {
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', sans-serif",
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h6: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          letterSpacing: "0.02em",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
};

export const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#6C63FF",
      light: "#8B83FF",
      dark: "#4B44B2",
    },
    secondary: {
      main: "#FF6584",
      light: "#FF8FA3",
      dark: "#CC5069",
    },
    background: {
      default: "#0A0E27",
      paper: "#141833",
    },
    text: {
      primary: "#E8E8F0",
      secondary: "#9A9AB0",
    },
  },
});

export const lightTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#5B52E0",
      light: "#7C74FF",
      dark: "#3D36A0",
    },
    secondary: {
      main: "#FF4D6D",
      light: "#FF7A8F",
      dark: "#CC3D57",
    },
    background: {
      default: "#F0F2FF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A2E",
      secondary: "#6B6B80",
    },
  },
});

// Category color mapping for chips
export const categoryColors: Record<string, string> = {
  Fire: "#FF6B35",
  Water: "#3B82F6",
  Grass: "#22C55E",
  Electric: "#F59E0B",
  Psychic: "#A855F7",
  Ice: "#06B6D4",
  Dragon: "#7C3AED",
  Dark: "#64748B",
  Fairy: "#EC4899",
  Normal: "#94A3B8",
  Fighting: "#DC2626",
  Poison: "#8B5CF6",
  Ground: "#D97706",
  Flying: "#60A5FA",
  Bug: "#84CC16",
  Rock: "#A8A29E",
  Ghost: "#7C3AED",
  Steel: "#6B7280",
};
