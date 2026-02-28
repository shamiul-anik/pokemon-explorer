import { useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { useThemeStore } from "./store/themeStore";
import { darkTheme, lightTheme } from "./theme/theme";
import Layout from "./components/Layout";
import FilterBar from "./components/FilterBar";
import PokemonGrid from "./components/PokemonGrid";
import Login1 from "./components/Login/Login1";
import Login2 from "./components/Login/Login2";

function HomePage() {
  return (
    <Layout>
      <FilterBar />
      <PokemonGrid />
    </Layout>
  );
}

function RouterThemeShell() {
  const mode = useThemeStore((s) => s.mode);
  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}

const rootRoute = createRootRoute({
  component: RouterThemeShell,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login1",
  component: Login1,
});

const loginRoute2 = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login2",
  component: Login2,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute, loginRoute2]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
