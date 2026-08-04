import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { philosophyPillars } from "@/lib/data";

export default function PhilosophySection() {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "#0e0e0e", py: "80px" }}
    >
      <Box sx={{ px: { xs: 3, md: 6 }, maxWidth: "1200px", mx: "auto", textAlign: "center" }}>
        <Typography
          component="h2"
          sx={{
            typography: { xs: "headlineMd", md: "displayLg" },
            color: "text.primary",
            mb: 3,
          }}
        >
          &ldquo;I care about what happens after the UI looks good.&rdquo;
        </Typography>
        <Typography
          variant="bodyLg"
          color="text.secondary"
          sx={{ maxWidth: "40rem", mx: "auto", mb: 6 }}
        >
          Good design is just the entry fee. Engineering excellence is found in
          the resilience of the data layer and the efficiency of the runtime.
        </Typography>

        <Grid container spacing={3} sx={{ textAlign: "center" }}>
          {philosophyPillars.map((pillar) => (
            <Grid key={pillar.number} size={{ xs: 6, md: 3 }}>
              <Typography variant="labelSm" color="primary.main" sx={{ display: "block", mb: 0.5 }}>
                {pillar.number}
              </Typography>
              <Typography variant="bodyMd" sx={{ fontWeight: 700 }} color="text.primary">
                {pillar.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
