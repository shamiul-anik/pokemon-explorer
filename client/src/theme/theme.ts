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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: "background-color 0.25s ease, color 0.25s ease",
        },
      },
    },
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
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
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
      main: "#1F9DFF",
      light: "#66C1FF",
      dark: "#0E6FBF",
    },
    secondary: {
      main: "#38BDF8",
      light: "#7DD3FC",
      dark: "#0284C7",
    },
    background: {
      default: "#01040E",
      paper: "#061427",
    },
    text: {
      primary: "#F4F8FF",
      secondary: "rgba(206, 224, 246, 0.78)",
    },
    divider: "rgba(77, 130, 198, 0.28)",
  },
});

export const lightTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#0D6EBA",
      light: "#4A96D5",
      dark: "#084C81",
    },
    secondary: {
      main: "#0F8AD8",
      light: "#4AB6FF",
      dark: "#0B5F96",
    },
    background: {
      default: "#DCE5F2",
      paper: "#EAF1FA",
    },
    text: {
      primary: "#0E223A",
      secondary: "rgba(24, 47, 74, 0.72)",
    },
    divider: "rgba(27, 73, 120, 0.22)",
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
