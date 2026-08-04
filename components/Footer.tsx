import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0e0e0e",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, md: 6 },
          maxWidth: "1200px",
          mx: "auto",
          py: 3,
          gap: 2,
        }}
      >
        <Typography variant="headlineMd" color="text.primary">
          Aravind.
        </Typography>
        <Typography variant="bodyMd" color="text.secondary">
          © 2024 Aravind Annaldas. Built with precision.
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="hover"
              sx={{
                color: "text.secondary",
                opacity: 0.8,
                textDecorationColor: "primary.main",
                "&:hover": { color: "text.primary", opacity: 1 },
              }}
            >
              <Typography variant="labelSm">{link.label}</Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
