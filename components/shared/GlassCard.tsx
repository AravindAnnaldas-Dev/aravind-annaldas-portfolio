"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const GlassCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.background.cardBorder}`,
  borderRadius: "8px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)",
    transform: "translateY(-2px)",
  },
}));

export default GlassCard;
