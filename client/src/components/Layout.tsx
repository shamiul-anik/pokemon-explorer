import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        transition: "background-color 0.3s ease",
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(10, 14, 39, 0.8)"
              : "rgba(240, 242, 255, 0.8)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
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
              variant="h6"
              component="h1"
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
              Pokémon Explorer
            </Typography>
          </Box>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
}
