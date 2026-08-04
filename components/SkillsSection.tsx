import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlassCard from "./shared/GlassCard";
import Reveal from "./shared/Reveal";
import { coreSkills, skillCategories } from "@/lib/data";

export default function SkillsSection() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ px: { xs: 3, md: 6 }, maxWidth: "1200px", mx: "auto", mb: "80px" }}
    >
      <Typography variant="headlineMd" color="text.primary" sx={{ mb: 6 }}>
        Engineering Toolkit
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Reveal sx={{ height: "100%" }}>
            <GlassCard
              sx={{
                p: 3,
                height: "100%",
                borderLeft: "4px solid",
                borderLeftColor: "primary.main",
              }}
            >
              <Typography
                variant="labelSm"
                color="text.secondary"
                sx={{ textTransform: "uppercase", mb: 2, display: "block" }}
              >
                Frontend Core
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {coreSkills.map((skill) => (
                  <Box key={skill.name} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="headlineMd" color="text.primary">
                      {skill.name}
                    </Typography>
                    <Typography variant="labelSm" color="primary.main">
                      {skill.level}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </GlassCard>
          </Reveal>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={3}>
            {skillCategories.map((category) => (
              <Grid key={category.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Typography
                  variant="labelSm"
                  color="primary.main"
                  sx={{ mb: 1, display: "block" }}
                >
                  {category.title}
                </Typography>
                <Typography variant="bodyMd" color="text.secondary">
                  {category.items}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
