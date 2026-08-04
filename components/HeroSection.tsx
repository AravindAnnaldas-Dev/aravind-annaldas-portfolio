import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: "80px",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 50%, rgba(111, 0, 190, 0.08) 0%, #131313 70%)",
      }}
    >
      {/* Ambient glow blobs */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 800,
            background: "rgba(111, 0, 190, 0.1)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            right: "25%",
            width: 400,
            height: 400,
            background: "rgba(0, 245, 255, 0.05)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />
      </Box>

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Typography
          variant="caption"
          sx={{
            display: "inline-block",
            fontFamily: "var(--font-space-grotesk)",
            color: "#ddb7ff",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            mb: 3,
            fontSize: "0.75rem",
          }}
        >
          Frontend Developer · Hyderabad, India
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 800,
            fontSize: { xs: "2.5rem", md: "5.5rem" },
            letterSpacing: "-0.04em",
            color: "#e9feff",
            lineHeight: 1,
            mb: 4,
          }}
        >
          Building{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(to right, #00f5ff, #ddb7ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Scalable
          </Box>{" "}
          Web Applications.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#b9caca",
            fontSize: { xs: "1rem", md: "1.15rem" },
            maxWidth: 600,
            mx: "auto",
            mb: 6,
            lineHeight: 1.8,
          }}
        >
          Frontend Developer with 2+ years of experience building high-performance
          web applications using React.js, Next.js, and TypeScript — specializing
          in travel booking platforms and REST API integrations.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            component="a"
            href="#projects"
            variant="contained"
            sx={{
              borderRadius: "999px",
              px: 5,
              py: 1.75,
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              bgcolor: "#00f5ff",
              color: "#003739",
              fontSize: "0.8rem",
              "&:hover": {
                bgcolor: "#00f5ff",
                boxShadow: "0 0 30px rgba(0,245,255,0.4)",
              },
              width: { xs: "100%", md: "auto" },
            }}
          >
            Explore My Work
          </Button>

          <Button
            component="a"
            href="#contact"
            variant="outlined"
            sx={{
              borderRadius: "999px",
              px: 5,
              py: 1.75,
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderColor: "rgba(58, 73, 74, 0.3)",
              color: "#e9feff",
              fontSize: "0.8rem",
              "&:hover": {
                bgcolor: "#2a2a2a",
                borderColor: "rgba(58, 73, 74, 0.5)",
              },
              width: { xs: "100%", md: "auto" },
            }}
          >
            Let&apos;s Connect
          </Button>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 48,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(-10px)" },
          },
          animation: "bounce 2s infinite",
        }}
      >
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 32, color: "#e5e2e1" }} />
      </Box>
    </Box>
  );
}