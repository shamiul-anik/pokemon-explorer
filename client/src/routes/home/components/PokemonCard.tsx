import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { memo } from "react";
import type { Pokemon } from "../../../shared/types/pokemon";
import { categoryColors } from "../../../shared/theme/theme";

interface PokemonCardProps {
  pokemon: Pokemon;
  index: number;
}

function PokemonCard({ pokemon, index }: PokemonCardProps) {
  const chipColor = categoryColors[pokemon.category] || "#94A3B8";

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "visible",
        cursor: "pointer",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(145deg, rgba(20, 24, 51, 0.9), rgba(30, 35, 70, 0.7))"
            : "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(240,242,255,0.8))",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(108, 99, 255, 0.15)"
            : "rgba(91, 82, 224, 0.1)",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 8px 32px rgba(0,0,0,0.4)"
            : "0 4px 20px rgba(0,0,0,0.08)",
        "&:hover": {
          transform: "translateY(-4px) scale(1.01)",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? `0 14px 36px rgba(0,0,0,0.45), 0 0 16px ${chipColor}22`
              : `0 8px 24px rgba(0,0,0,0.14), 0 0 10px ${chipColor}15`,
          borderColor: chipColor + "40",
        },
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        willChange: "transform",
      }}
    >
      {/* Pokémon number badge */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: 2,
          px: 1.5,
          py: 0.5,
          zIndex: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{ fontWeight: 700, color: "rgba(255,255,255,0.7)" }}
        >
          #{String(pokemon.id).padStart(3, "0")}
        </Typography>
      </Box>

      {/* Pokémon image */}
      <Box
        sx={{
          position: "relative",
          pt: "85%",
          background: `radial-gradient(circle at 50% 50%, ${chipColor}15, transparent 70%)`,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={pokemon.image}
          alt={pokemon.name}
          loading={index < 8 ? "eager" : "lazy"}
          decoding="async"
          sx={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            objectFit: "contain",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.26))",
            "&:hover": {
              transform: "scale(1.06) rotate(2deg)",
            },
          }}
        />
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          pb: "16px !important",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
          }}
        >
          {pokemon.name}
        </Typography>

        <Chip
          label={pokemon.category}
          size="small"
          sx={{
            backgroundColor: chipColor + "20",
            color: chipColor,
            border: `1px solid ${chipColor}40`,
            fontWeight: 600,
            fontSize: "0.75rem",
          }}
        />
      </CardContent>
    </Card>
  );
}

export default memo(PokemonCard);
