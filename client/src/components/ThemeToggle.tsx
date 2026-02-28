import { Box, IconButton, Tooltip } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useThemeStore } from "../store/themeStore";

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeStore();

  return (
    <Tooltip title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
      <IconButton
        onClick={toggleMode}
        color="inherit"
        sx={{
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.06)",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        }}
      >
        <Box sx={{ width: 24, height: 24, position: "relative" }}>
          <LightMode
            sx={{
              color: "#FCD34D",
              position: "absolute",
              inset: 0,
              transition: "opacity 0.22s ease, transform 0.22s ease",
              opacity: mode === "dark" ? 1 : 0,
              transform: mode === "dark" ? "scale(1) rotate(0deg)" : "scale(0.85) rotate(-12deg)",
            }}
          />
          <DarkMode
            sx={{
              color: "#6366F1",
              position: "absolute",
              inset: 0,
              transition: "opacity 0.22s ease, transform 0.22s ease",
              opacity: mode === "light" ? 1 : 0,
              transform: mode === "light" ? "scale(1) rotate(0deg)" : "scale(0.85) rotate(12deg)",
            }}
          />
        </Box>
      </IconButton>
    </Tooltip>
  );
}
