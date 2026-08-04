import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TerminalIcon from "@mui/icons-material/Terminal";
import GlassCard from "./shared/GlassCard";
import Reveal from "./shared/Reveal";
import { metrics } from "@/lib/data";

export default function AboutMetrics() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ px: { xs: 3, md: 6 }, maxWidth: "1200px", mx: "auto", mb: "80px" }}
    >
      <Typography variant="headlineMd" color="text.primary" sx={{ mb: 6 }}>
        Beyond the UI
      </Typography>

      <Grid container spacing={3}>
        {metrics.map((metric) => (
          <Grid key={metric.title} size={{ xs: 12, md: 4 }}>
            <Reveal sx={{ height: "100%" }}>
              <GlassCard sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
                {metric.value ? (
                  <Typography variant="displayLg" color="primary.main">
                    {metric.value}
                  </Typography>
                ) : (
                  <TerminalIcon sx={{ fontSize: 36, color: "primary.main" }} />
                )}
                <Typography variant="headlineMd" color="text.primary">
                  {metric.title}
                </Typography>
                <Typography variant="bodyMd" color="text.secondary">
                  {metric.description}
                </Typography>
              </GlassCard>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
