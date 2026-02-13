import { IconButton, Tooltip } from "@mui/material";
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
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "rotate(30deg) scale(1.1)",
          },
        }}
      >
        {mode === "dark" ? (
          <LightMode sx={{ color: "#FCD34D" }} />
        ) : (
          <DarkMode sx={{ color: "#6366F1" }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
