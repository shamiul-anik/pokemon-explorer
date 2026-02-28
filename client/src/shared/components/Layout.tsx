import { AppBar, Toolbar, Container, Box, Button } from "@mui/material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { Link as RouterLink } from "@tanstack/react-router";
import ThemeToggle from "./ThemeToggle";
import AppBrand from "./AppBrand";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "radial-gradient(circle at 18% 22%, rgba(12, 79, 159, 0.36), rgba(2, 9, 19, 0.9) 36%), radial-gradient(circle at 80% 0%, rgba(0, 127, 255, 0.22), transparent 45%), linear-gradient(180deg, #020817 0%, #01040e 100%)"
            : "radial-gradient(circle at 12% 12%, rgba(93, 142, 198, 0.25), transparent 42%), radial-gradient(circle at 90% 8%, rgba(147, 189, 237, 0.28), transparent 32%), linear-gradient(180deg, #dae4f1 0%, #d2deed 100%)",
        transition: "background 0.4s ease",
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          transition: "background-color 0.25s ease, border-color 0.25s ease",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(6, 20, 39, 0.82)"
              : "rgba(234, 241, 250, 0.82)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <AppBrand />
          <Box sx={{ display: "flex", alignItems: "center", ml: "auto", gap: 2 }}>
            <ThemeToggle />
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              startIcon={<LoginRoundedIcon />}
              sx={{
                textTransform: "none",
                backgroundColor: "text.primary",
                color: "background.paper",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "secondary.light",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
}
