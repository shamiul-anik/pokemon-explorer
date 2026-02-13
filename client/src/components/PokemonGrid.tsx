import {
  Grid,
  Box,
  Typography,
  Skeleton,
  Card,
  CardContent,
  Button,
  Alert,
} from "@mui/material";
import { CatchingPokemon, Refresh, SearchOff } from "@mui/icons-material";
import { usePokemons } from "../hooks/usePokemons";
import PokemonCard from "./PokemonCard";

function SkeletonCard() {
  return (
    <Card
      sx={{
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "background.paper",
      }}
    >
      <Skeleton variant="rectangular" height={200} animation="wave" />
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
        <Skeleton variant="text" width="60%" height={32} animation="wave" />
        <Skeleton variant="rounded" width={80} height={24} animation="wave" />
      </CardContent>
    </Card>
  );
}

export default function PokemonGrid() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = usePokemons();

  // Flatten the pages into a single array of Pokémon
  const pokemons = data?.pages.flatMap((page) => page.data) ?? [];

  // Loading state with skeleton cards (initial load only)
  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <SkeletonCard />
          </Grid>
        ))}
      </Grid>
    );
  }

  // Error state
  if (isError) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          py: 8,
        }}
      >
        <Alert
          severity="error"
          sx={{ maxWidth: 500, borderRadius: 3, width: "100%" }}
        >
          {error instanceof Error
            ? error.message
            : "Failed to fetch Pokémon data. Please try again."}
        </Alert>
        <Button
          variant="contained"
          startIcon={<Refresh />}
          onClick={() => refetch()}
          sx={{ mt: 1 }}
        >
          Retry
        </Button>
      </Box>
    );
  }

  // Empty state
  if (!pokemons.length) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          py: 8,
          color: "text.secondary",
        }}
      >
        <SearchOff sx={{ fontSize: 64, opacity: 0.5 }} />
        <Typography variant="h6">No Pokémon found</Typography>
        <Typography variant="body2">
          Try adjusting your search or filter criteria.
        </Typography>
      </Box>
    );
  }

  // Data state
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 3,
          color: "text.secondary",
        }}
      >
        <CatchingPokemon fontSize="small" />
        <Typography variant="body2">
          Showing {pokemons.length} of {data?.pages[0]?.total ?? 0} Pokémon
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {pokemons.map((pokemon, index) => (
          <Grid key={pokemon.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <PokemonCard pokemon={pokemon} index={index} />
          </Grid>
        ))}
        {isFetchingNextPage &&
          Array.from({ length: 4 }).map((_, i) => (
            <Grid key={`skeleton-${i}`} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <SkeletonCard />
            </Grid>
          ))}
      </Grid>

      {/* Load More Button */}
      {hasNextPage && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            sx={{
              borderRadius: 4,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #6C63FF, #FF6584)"
                  : "linear-gradient(135deg, #5B52E0, #FF4D6D)",
              boxShadow: "0 8px 20px rgba(108, 99, 255, 0.3)",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {isFetchingNextPage ? "Catching more..." : "Load More Pokémon"}
          </Button>
        </Box>
      )}
    </Box>
  );
}
