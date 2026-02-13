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
import { useFilterStore } from "../store/filterStore";
import { CATEGORIES } from "../types/pokemon";

export default function FilterBar() {
  const { nameStartedWith, category, setNameStartedWith, setCategory, clearFilters } =
    useFilterStore();

  const hasFilters = nameStartedWith || category;

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
        backdropFilter: "blur(20px)",
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
        label="Search by name"
        variant="outlined"
        size="small"
        value={nameStartedWith}
        onChange={(e) => setNameStartedWith(e.target.value)}
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
          onClick={clearFilters}
          sx={{
            borderRadius: 2,
            animation: "fadeIn 0.2s ease",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "scale(0.9)" },
              to: { opacity: 1, transform: "scale(1)" },
            },
          }}
        >
          Clear
        </Button>
      )}
    </Box>
  );
}
