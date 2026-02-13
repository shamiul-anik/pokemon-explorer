import { useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useThemeStore } from "./store/themeStore";
import { darkTheme, lightTheme } from "./theme/theme";
import Layout from "./components/Layout";
import FilterBar from "./components/FilterBar";
import PokemonGrid from "./components/PokemonGrid";

export default function App() {
  const mode = useThemeStore((s) => s.mode);
  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <FilterBar />
        <PokemonGrid />
      </Layout>
    </ThemeProvider>
  );
}
