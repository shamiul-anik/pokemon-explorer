import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import type { Pokemon } from "../types/pokemon";
import { categoryColors } from "../theme/theme";

interface PokemonCardProps {
  pokemon: Pokemon;
  index: number;
}

export default function PokemonCard({ pokemon, index }: PokemonCardProps) {
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
        backdropFilter: "blur(20px)",
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
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${chipColor}22`
              : `0 12px 40px rgba(0,0,0,0.15), 0 0 20px ${chipColor}15`,
          borderColor: chipColor + "40",
        },
        animation: `slideUp 0.4s ease ${index * 0.05}s both`,
        "@keyframes slideUp": {
          from: {
            opacity: 0,
            transform: "translateY(30px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      {/* Pokémon number badge */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          backgroundColor: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(8px)",
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
          sx={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            objectFit: "contain",
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
            "&:hover": {
              transform: "scale(1.1) rotate(3deg)",
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
