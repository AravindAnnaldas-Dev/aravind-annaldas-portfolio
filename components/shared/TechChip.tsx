"use client";

import Chip, { type ChipProps } from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const StyledChip = styled(Chip)(({ theme }) => ({
  background: "#1A1A1A",
  border: `1px solid ${theme.palette.background.cardBorder}`,
  color: "#94A3B8",
  fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
  fontSize: "13px",
  letterSpacing: "0.02em",
  height: "auto",
  borderRadius: "12px",
  "& .MuiChip-label": {
    padding: "4px 12px",
  },
}));

export default function TechChip(props: ChipProps) {
  return <StyledChip {...props} />;
}
