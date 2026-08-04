import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const stats = [
  { value: "25%", label: "Performance Gain", color: "#00f5ff" },
  { value: "2+", label: "Years Experience", color: "#ddb7ff" },
  { value: "3", label: "Booking Platforms", color: "#ddb7ff" },
  { value: "Sep '23", label: "At Enspirit", color: "#e9feff" },
];

const achievements = [
  "React Query & Axios API Integration",
  "Lazy Loading & Memoization Optimization",
  "Reusable Component Architecture",
  "Agile / Scrum Collaboration",
];

const glassPanelSx = {
  background: "rgba(53, 53, 52, 0.4)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(58, 73, 74, 0.15)",
};

export default function ExperienceSection() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{ py: 16, bgcolor: "#0e0e0e" }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 10,
            alignItems: "center",
          }}
        >
          {/* Left: text */}
          <Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                fontFamily: "var(--font-space-grotesk)",
                color: "#00dce5",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                mb: 2,
                fontSize: "0.7rem",
              }}
            >
              Professional Impact
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "-0.03em",
                color: "#e9feff",
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              Frontend Developer at Enspirit Technologies
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#b9caca",
                lineHeight: 1.8,
                mb: 4,
                fontSize: "1.05rem",
              }}
            >
              Engineered scalable flight, hotel, and train booking platforms using
              React.js and Next.js, implementing complete search-to-checkout
              transactional workflows. Improved application performance by ~25%
              through reusable component architecture, lazy loading, and memoization.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {achievements.map((item) => (
                <Box
                  key={item}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ color: "#00f5ff", flexShrink: 0 }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "var(--font-space-grotesk)",
                      color: "#e5e2e1",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: stats grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              alignItems: "start",
            }}
          >
            {stats.map((stat, i) => (
              <Box
                key={stat.label}
                sx={{
                  ...glassPanelSx,
                  p: 4,
                  borderRadius: 2,
                  textAlign: "center",
                  mt: i % 2 === 1 ? 6 : 0,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 900,
                    fontSize: "2.75rem",
                    color: stat.color,
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: "#b9caca",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}