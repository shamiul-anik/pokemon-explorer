import { Box, Typography } from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import type { ElementType } from "react";

interface AppBrandProps {
  titleVariant?: "h6" | "subtitle1" | "body1";
  titleComponent?: ElementType;
}

export default function AppBrand({
  titleVariant = "h6",
  titleComponent = "h1",
}: AppBrandProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <CatchingPokemon
        sx={{
          fontSize: 32,
          color: "primary.main",
          animation: "spin 3s linear infinite",
          "@keyframes spin": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
        }}
      />
      <Typography
        variant={titleVariant}
        component={titleComponent}
        sx={{
          fontWeight: 800,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #6C63FF, #FF6584)"
              : "linear-gradient(135deg, #5B52E0, #FF4D6D)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.02em",
        }}
      >
        {"Pok\u00e9mon Explorer"}
      </Typography>
    </Box>
  );
}
