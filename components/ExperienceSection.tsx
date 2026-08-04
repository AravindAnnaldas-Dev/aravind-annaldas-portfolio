import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlassCard from "./shared/GlassCard";
import Reveal from "./shared/Reveal";
import TechChip from "./shared/TechChip";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{ px: { xs: 3, md: 6 }, maxWidth: "1200px", mx: "auto", mb: "80px" }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", mb: 6 }}>
        <Box>
          <Typography
            variant="labelSm"
            color="primary.main"
            sx={{ textTransform: "uppercase", letterSpacing: "0.15em" }}
          >
            Experience
          </Typography>
          <Typography variant="headlineMd" color="text.primary" sx={{ mt: 0.5 }}>
            Professional Experience
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" }, flexGrow: 1, height: "1px", bgcolor: "divider", ml: 6 }} />
      </Box>

      <Reveal>
        <GlassCard sx={{ p: 4 }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", mb: 3 }}>
            <Box>
              <Typography variant="headlineMd" color="text.primary">
                {experience.company}
              </Typography>
              <Typography variant="bodyMd" color="primary.main">
                {experience.role}
              </Typography>
            </Box>
            <Typography variant="labelSm" color="text.secondary" sx={{ mt: { xs: 1, md: 0 } }}>
              {experience.period}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box component="ul" sx={{ display: "flex", flexDirection: "column", gap: 2, listStyle: "none", p: 0, m: 0 }}>
                {experience.bullets.map((bullet) => (
                  <Box key={bullet} component="li" sx={{ display: "flex", gap: 2 }}>
                    <Typography color="primary.main">•</Typography>
                    <Typography variant="bodyMd" color="text.secondary">
                      {bullet}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 6 }}>
                {experience.techChips.map((chip) => (
                  <TechChip key={chip} label={chip} />
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  bgcolor: "#1c1b1b",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  width: "100%",
                }}
              >
                <Typography variant="displayLg" color="text.primary">
                  {experience.stat.value}
                </Typography>
                <Typography variant="labelSm" color="text.secondary">
                  {experience.stat.label}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </GlassCard>
      </Reveal>
    </Box>
  );
}
