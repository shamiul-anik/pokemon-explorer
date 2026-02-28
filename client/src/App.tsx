import { useEffect, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { useThemeStore } from "./store/themeStore";
import { darkTheme, lightTheme } from "./theme/theme";
import Layout from "./components/Layout";
import FilterBar from "./components/FilterBar";
import PokemonGrid from "./components/PokemonGrid";
import Login1 from "./components/Login/Login";
import OrderDashboard from "./components/Dashboard/OrderDashboard";

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
  const setSystemMode = useThemeStore((s) => s.setSystemMode);
  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applySystemMode = (matches: boolean) => {
      setSystemMode(matches ? "dark" : "light");
    };

    applySystemMode(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) => applySystemMode(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [setSystemMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
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
  path: "/login",
  component: Login1,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: OrderDashboard,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute, dashboardRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
