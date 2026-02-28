import { AppBar, Toolbar, Container, Box } from "@mui/material";
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
          <AppBrand />
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
}
