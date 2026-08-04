import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const principles = [
  {
    number: "1",
    title: "Atomic State Isolation",
    description:
      "Preventing global re-renders by keeping state local to the nearest functional boundary.",
  },
  {
    number: "2",
    title: "Pre-emptive Hydration",
    description:
      "Using React Query to pre-fetch step 2 while the user is still filling step 1.",
  },
];

const glassPanelSx = {
  background: "rgba(53, 53, 52, 0.4)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(58, 73, 74, 0.15)",
};

const mockBars = [
  { height: 48, bg: "rgba(111, 0, 190, 0.3)", highlight: false },
  { height: 80, bg: "rgba(0, 245, 255, 0.3)", highlight: true },
  { height: 32, bg: "rgba(111, 0, 190, 0.3)", highlight: false },
];

export default function ArchitectureSection() {
  return (
    <Box component="section" id="architecture" sx={{ py: 16, bgcolor: "#131313" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#1c1b1b",
            borderRadius: 4,
            p: { xs: 6, md: 12 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dot grid */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.1,
              pointerEvents: "none",
              backgroundImage: "radial-gradient(#00f5ff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 10,
            }}
          >
            {/* Left: text */}
            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontFamily: "var(--font-space-grotesk)",
                  color: "#00f5ff",
                  letterSpacing: "0.2em",
                  mb: 3,
                  fontSize: "0.7rem",
                }}
              >
                The Secret Sauce
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  letterSpacing: "-0.03em",
                  color: "#e9feff",
                  mb: 4,
                  lineHeight: 1.15,
                }}
              >
                How I Build Scalable Systems
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#b9caca",
                  lineHeight: 1.8,
                  mb: 5,
                  fontSize: "1.05rem",
                }}
              >
                Scalability isn&apos;t just about handling more users; it&apos;s
                about maintaining developer velocity and site performance as
                complexity grows. My strategy for booking flows centers on strict
                domain-driven component separation and predictive data fetching.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {principles.map((p) => (
                  <Box key={p.number} sx={{ display: "flex", gap: 3 }}>
                    <Box
                      sx={{
                        ...glassPanelSx,
                        width: 48,
                        height: 48,
                        flexShrink: 0,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#00f5ff",
                        fontFamily: "var(--font-manrope)",
                        fontWeight: 700,
                      }}
                    >
                      {p.number}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "var(--font-manrope)",
                          fontWeight: 700,
                          color: "#e9feff",
                          mb: 0.5,
                        }}
                      >
                        {p.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#b9caca", lineHeight: 1.7 }}
                      >
                        {p.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right: UI mock */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  ...glassPanelSx,
                  width: "100%",
                  aspectRatio: "1/1",
                  borderRadius: 3,
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderColor: "rgba(0, 245, 255, 0.2)",
                }}
              >
                <Box
                  sx={{
                    height: 32,
                    width: "100%",
                    bgcolor: "rgba(0, 245, 255, 0.2)",
                    borderRadius: 1,
                    "@keyframes pulse": {
                      "0%, 100%": { opacity: 1 },
                      "50%": { opacity: 0.5 },
                    },
                    animation: "pulse 2s infinite",
                  }}
                />

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 2,
                    flex: 1,
                  }}
                >
                  {mockBars.map((bar, i) => (
                    <Box
                      key={i}
                      sx={{
                        bgcolor: "#2a2a2a",
                        borderRadius: 1,
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        ...(bar.highlight
                          ? { borderTop: "2px solid #00f5ff" }
                          : {}),
                      }}
                    >
                      <Box
                        sx={{
                          height: bar.height,
                          width: "100%",
                          bgcolor: bar.bg,
                          borderRadius: 0.5,
                          mb: 1,
                        }}
                      />
                      <Box
                        sx={{
                          height: 4,
                          width: "100%",
                          bgcolor: "rgba(58, 73, 74, 0.5)",
                          borderRadius: "999px",
                        }}
                      />
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    height: 64,
                    bgcolor: "#353534",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 3,
                  }}
                >
                  <Box
                    sx={{
                      height: 4,
                      width: 96,
                      bgcolor: "rgba(58, 73, 74, 0.5)",
                      borderRadius: "999px",
                    }}
                  />
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#00f5ff",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}