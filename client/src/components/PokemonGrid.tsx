import {
  Grid,
  Box,
  Typography,
  Skeleton,
  Card,
  CardContent,
  Button,
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { CatchingPokemon, Refresh, SearchOff } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import { useFilterStore } from "../store/filterStore";
import PokemonCard from "./PokemonCard";

const PAGE_SIZE_OPTIONS = [8, 20, 40, 60, 80, 100] as const;

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
  const nameStartedWith = useFilterStore((s) => s.nameStartedWith);
  const category = useFilterStore((s) => s.category);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<number>(8);

  const { data, isLoading, isError, error, refetch } = usePokemons(page, limit);

  useEffect(() => {
    setPage(1);
  }, [nameStartedWith, category, limit]);

  const pokemons = data?.data ?? [];
  const total = data?.total ?? 0;
  const shownCount = Math.min(page * limit, total);
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleLimitChange = (event: SelectChangeEvent<number>) => {
    setLimit(Number(event.target.value));
  };

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
            : "Failed to fetch Pokemon data. Please try again."}
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
        <Typography variant="h6">No Pokemon found</Typography>
        <Typography variant="body2">
          Try adjusting your search or filter criteria.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 3,
          color: "text.secondary",
          flexWrap: "wrap",
        }}
      >
        <CatchingPokemon fontSize="small" />
        <Typography variant="body2">
          Showing {shownCount} of {total} Pokemon
        </Typography>

        <FormControl size="small" sx={{ ml: "auto", minWidth: 130 }}>
          <InputLabel id="items-per-page-label">Items</InputLabel>
          <Select<number>
            labelId="items-per-page-label"
            value={limit}
            label="Items"
            onChange={handleLimitChange}
          >
            {PAGE_SIZE_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {pokemons?.map((pokemon, index) => (
          <Grid key={pokemon.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <PokemonCard pokemon={pokemon} index={index} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
}


