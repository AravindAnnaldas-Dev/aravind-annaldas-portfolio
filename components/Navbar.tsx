"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(19, 19, 19, 0.4)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 0 40px rgba(0,245,255,0.06)",
        borderBottom: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 0.5 }}>
          <Typography
            sx={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#e9feff",
              textTransform: "uppercase",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Aravind Annaldas
          </Typography>

          <Box
            component="nav"
            sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                underline="none"
                sx={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(233, 254, 255, 0.6)",
                  transition: "color 0.3s",
                  "&:hover": { color: "#00f5ff" },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1,
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              bgcolor: "#00f5ff",
              color: "#003739",
              "&:hover": {
                bgcolor: "#63f7ff",
                transform: "scale(1.05)",
              },
              "&:active": { transform: "scale(0.95)" },
              transition: "all 0.2s",
            }}
          >
            Hire Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}