import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 20,
        bgcolor: "#131313",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Nebula bg */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(111, 0, 190, 0.08) 0%, #131313 70%)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="md"
        sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 900,
            fontSize: { xs: "3rem", md: "6rem" },
            letterSpacing: "-0.04em",
            color: "#e9feff",
            mb: 6,
            lineHeight: 1,
          }}
        >
          Ready for the{" "}
          <Box
            component="span"
            sx={{ textShadow: "0 0 20px rgba(0, 245, 255, 0.3)" }}
          >
            Next Signal?
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#b9caca",
            fontSize: "1.15rem",
            mb: 8,
            maxWidth: 480,
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Whether you&apos;re looking to build a high-performance booking platform
          or optimize a React app, let&apos;s connect at{" "}
          <Box
            component="a"
            href="mailto:annaldasaravind897@gmail.com"
            sx={{ color: "#00f5ff", textDecoration: "none" }}
          >
            annaldasaravind897@gmail.com
          </Box>
        </Typography>

        <Button
          component="a"
          href="mailto:annaldasaravind897@gmail.com"
          variant="outlined"
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "999px",
            px: 6,
            py: 3,
            border: "1px solid rgba(0, 245, 255, 0.3)",
            fontFamily: "var(--font-manrope)",
            fontWeight: 700,
            fontSize: "1.5rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#e9feff",
            transition: "color 0.3s",
            "& .btn-fill": {
              position: "absolute",
              inset: 0,
              bgcolor: "#00f5ff",
              transform: "translateY(100%)",
              transition: "transform 0.5s",
              zIndex: 0,
            },
            "& .btn-text": {
              position: "relative",
              zIndex: 1,
            },
            "&:hover": {
              color: "#003739",
              border: "1px solid rgba(0, 245, 255, 0.3)",
              "& .btn-fill": { transform: "translateY(0)" },
            },
          }}
        >
          <Box className="btn-fill" />
          <Box component="span" className="btn-text">
            Say Hello
          </Box>
        </Button>
      </Container>
    </Box>
  );
}