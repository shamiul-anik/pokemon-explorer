import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";
import { Search, FilterList, Clear } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useFilterStore } from "../store/filterStore";
import { CATEGORIES } from "../../../shared/types/pokemon";

export default function FilterBar() {
  const { nameStartedWith, category, setNameStartedWith, setCategory, clearFilters } =
    useFilterStore();

  const [searchInput, setSearchInput] = useState(nameStartedWith);

  useEffect(() => {
    setSearchInput(nameStartedWith);
  }, [nameStartedWith]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (searchInput !== nameStartedWith) {
        setNameStartedWith(searchInput);
      }
    }, 220);

    return () => window.clearTimeout(timer);
  }, [searchInput, nameStartedWith, setNameStartedWith]);

  const hasFilters = searchInput || category;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        alignItems: "center",
        mb: 4,
        p: 3,
        borderRadius: 3,
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 8px 32px rgba(0,0,0,0.3)"
            : "0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      <FilterList sx={{ color: "text.secondary", fontSize: 28 }} />

      <TextField
        label="Search by Name"
        variant="outlined"
        size="small"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="e.g. Pi, Char..."
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
        sx={{ minWidth: 220, flex: 1 }}
      />

      <FormControl size="small" sx={{ minWidth: 180 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="">
            <em>All Categories</em>
          </MenuItem>
          {CATEGORIES.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {hasFilters && (
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<Clear />}
          onClick={() => {
            setSearchInput("");
            clearFilters();
          }}
          sx={{ borderRadius: 2 }}
        >
          Clear
        </Button>
      )}
    </Box>
  );
}
