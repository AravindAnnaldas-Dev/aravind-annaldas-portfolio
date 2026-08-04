"use client";

import Button, { type ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const FilledCtaButton = styled(Button)(({ theme }) => ({
  padding: "12px 24px",
  borderRadius: "4px",
  background: theme.palette.primary.main,
  color: "#002e6a",
  fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
  fontSize: "13px",
  letterSpacing: "0.02em",
  fontWeight: 500,
  transition: "all 0.3s ease",
  "&:hover": {
    background: theme.palette.primary.main,
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
  },
}));

export const OutlinedCtaButton = styled(Button)(({ theme }) => ({
  padding: "12px 24px",
  borderRadius: "4px",
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
  fontSize: "13px",
  letterSpacing: "0.02em",
  fontWeight: 500,
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    background: "transparent",
  },
}));

type AnchorButtonProps = ButtonProps & {
  target?: string;
  rel?: string;
};

export function FilledCta(props: AnchorButtonProps) {
  return <FilledCtaButton variant="contained" disableElevation {...props} />;
}

export function OutlinedCta(props: AnchorButtonProps) {
  return <OutlinedCtaButton variant="outlined" {...props} />;
}
