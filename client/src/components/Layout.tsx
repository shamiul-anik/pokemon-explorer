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
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "radial-gradient(circle at 18% 22%, rgba(12, 79, 159, 0.36), rgba(2, 9, 19, 0.9) 36%), radial-gradient(circle at 80% 0%, rgba(0, 127, 255, 0.22), transparent 45%), linear-gradient(180deg, #020817 0%, #01040e 100%)"
            : "radial-gradient(circle at 12% 12%, rgba(93, 142, 198, 0.25), transparent 42%), radial-gradient(circle at 90% 8%, rgba(147, 189, 237, 0.28), transparent 32%), linear-gradient(180deg, #dae4f1 0%, #d2deed 100%)",
        transition: "background 0.3s ease",
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px)",
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
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
}
