import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const socialLinks = ["GITHUB", "LINKEDIN"];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0e0e0e",
        py: 6,
        px: { xs: 4, md: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(233, 254, 255, 0.4)",
        }}
      >
        ©️ 2024 ARAVIND ANNALDAS. ENGINEERED FOR PERFORMANCE.
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        {socialLinks.map((label) => (
          <Link
            key={label}
            href="#"
            underline="none"
            sx={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(233, 254, 255, 0.4)",
              display: "inline-block",
              transition: "all 0.3s",
              "&:hover": {
                color: "#00f5ff",
                transform: "translateY(-4px)",
              },
            }}
          >
            {label}
          </Link>
        ))}
      </Box>
    </Box>
  );
}