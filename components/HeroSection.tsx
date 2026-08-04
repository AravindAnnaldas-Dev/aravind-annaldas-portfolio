import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { FilledCta, OutlinedCta } from "./shared/CtaButton";
import { heroImageUrl, resumeUrl, socialLinks } from "@/lib/data";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 3, md: 6 },
        maxWidth: "1200px",
        mx: "auto",
        mb: "80px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(173, 198, 255, 0.08) 0%, transparent 70%)",
          top: "20%",
          right: "10%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <Grid container spacing={6} alignItems="center">
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.5,
              borderRadius: "12px",
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "#1c1b1b",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "primary.main",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.4 },
                },
                animation: "pulse 2s infinite",
              }}
            />
            <Typography
              variant="labelSm"
              color="text.secondary"
              sx={{ lineHeight: "18px" }}
            >
              Open to Frontend Engineering opportunities
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              typography: { xs: "displayLgMobile", md: "displayLg" },
              color: "text.primary",
            }}
          >
            Hi, I&apos;m Aravind 👋
            <br />
            <Box component="span" sx={{ color: "primary.light" }}>
              Frontend Engineer building fast, scalable web experiences.
            </Box>
          </Typography>

          <Typography
            variant="bodyLg"
            color="text.secondary"
            sx={{ maxWidth: "36rem" }}
          >
            I build production-grade React and Next.js applications with a focus
            on precision and performance. Currently owning frontend development
            for a complex travel booking platform.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, pt: 1 }}>
            <FilledCta href="#projects">View My Work</FilledCta>
            <OutlinedCta href="#contact">Contact Me</OutlinedCta>
          </Box>

          <Box sx={{ display: "flex", gap: 3, pt: 3 }}>
            {socialLinks
              .filter((link) => link.label !== "Email")
              .map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.2s",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Typography variant="codeSnippet">{link.label}</Typography>
                </Link>
              ))}
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: "text.secondary",
                transition: "color 0.2s",
                "&:hover": { color: "primary.main" },
              }}
            >
              <Typography variant="codeSnippet">Resume</Typography>
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              position: "relative",
              "&:hover img": { filter: "grayscale(0)" },
              "&:hover .hero-glow-bg": { opacity: 0.5 },
            }}
          >
            <Box
              className="hero-glow-bg"
              sx={{
                position: "absolute",
                inset: -4,
                background:
                  "linear-gradient(to right, rgba(173,198,255,0.2), rgba(255,183,134,0.2))",
                borderRadius: "8px",
                filter: "blur(8px)",
                opacity: 0.25,
                transition: "opacity 1s",
              }}
            />
            <Box
              component="img"
              src={heroImageUrl}
              alt="Aravind Annaldas"
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: 6,
                filter: "grayscale(1)",
                transition: "filter 0.7s",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
