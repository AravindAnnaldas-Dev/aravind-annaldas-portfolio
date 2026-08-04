"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks, resumeUrl } from "@/lib/data";

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function TopNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    scrollToId(e, href);
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 3, md: 6 } }}>
        <Toolbar disableGutters sx={{ height: 64, justifyContent: "space-between" }}>
          <Typography
            variant="displayLg"
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "text.primary",
            }}
          >
            Aravind.
          </Typography>

          <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToId(e, link.href)}
                underline="none"
                sx={{
                  fontFamily: "var(--font-geist), Geist, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "text.secondary",
                  transition: "color 0.2s",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="contained"
              disableElevation
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                px: 3,
                py: 1,
                borderRadius: "4px",
                bgcolor: "primary.main",
                color: "#002e6a",
                fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                fontSize: "13px",
                letterSpacing: "0.02em",
                fontWeight: 500,
                "&:hover": { bgcolor: "primary.main", opacity: 0.9 },
              }}
            >
              Resume
            </Button>

            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" }, color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "min(320px, 80vw)",
              bgcolor: "background.default",
              borderLeft: "1px solid",
              borderColor: "divider",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            sx={{ color: "text.primary" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          component="nav"
          sx={{ display: "flex", flexDirection: "column", gap: 3, px: 4, pb: 4 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleMobileLinkClick(e, link.href)}
              underline="none"
              sx={{
                fontFamily: "var(--font-geist), Geist, sans-serif",
                fontSize: "20px",
                fontWeight: 500,
                color: "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              {link.label}
            </Link>
          ))}

          <Button
            variant="contained"
            disableElevation
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 2,
              px: 3,
              py: 1.25,
              borderRadius: "4px",
              bgcolor: "primary.main",
              color: "#002e6a",
              fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.02em",
              fontWeight: 500,
              "&:hover": { bgcolor: "primary.main", opacity: 0.9 },
            }}
          >
            Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
