import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import DataArrayIcon from "@mui/icons-material/DataArray";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GlassCard from "./shared/GlassCard";
import Reveal from "./shared/Reveal";
import TechChip from "./shared/TechChip";
import { featuredCaseStudy, projectCards } from "@/lib/data";
import type { ProjectFeature, ProjectCard as ProjectCardType } from "@/lib/types";

const featureIcons = {
  data_array: DataArrayIcon,
  dynamic_form: DynamicFormIcon,
};

function FeatureRow({ feature }: { feature: ProjectFeature }) {
  const Icon = featureIcons[feature.icon];
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Icon sx={{ color: "primary.main" }} />
      <Typography variant="codeSnippet" color="text.primary">
        {feature.label}
      </Typography>
    </Box>
  );
}

function ProjectCard({ project }: { project: ProjectCardType }) {
  return (
    <GlassCard sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
          <Typography variant="headlineMd" color="text.primary">
            {project.title}
          </Typography>
          <Link href={project.href} sx={{ color: "text.secondary", "&:hover": { color: "primary.main" }, display: "flex" }}>
            <OpenInNewIcon />
          </Link>
        </Box>
        <Typography variant="bodyMd" color="text.secondary" sx={{ mb: 3 }}>
          {project.description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {project.techChips.map((chip) => (
          <TechChip key={chip} label={chip} />
        ))}
      </Box>
    </GlassCard>
  );
}

export default function ProjectsSection() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ px: { xs: 3, md: 6 }, maxWidth: "1200px", mx: "auto", mb: "80px" }}
    >
      <Typography variant="headlineMd" color="text.primary" sx={{ mb: 6 }}>
        Featured Work
      </Typography>

      <Reveal sx={{ mb: 3 }}>
        <GlassCard sx={{ overflow: "hidden" }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4, display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="labelSm"
                color="primary.main"
                sx={{ textTransform: "uppercase" }}
              >
                {featuredCaseStudy.eyebrow}
              </Typography>
              <Typography variant="displayLg" sx={{ fontSize: "24px", fontWeight: 600 }} color="text.primary">
                {featuredCaseStudy.title}
              </Typography>
              <Typography variant="bodyMd" color="text.secondary">
                {featuredCaseStudy.description}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 1 }}>
                {featuredCaseStudy.features.map((feature) => (
                  <FeatureRow key={feature.label} feature={feature} />
                ))}
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                bgcolor: "#1c1b1b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                borderLeft: { md: "1px solid" },
                borderColor: "divider",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  minHeight: 300,
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.default",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={featuredCaseStudy.imageUrl}
                  alt={featuredCaseStudy.imageAlt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.8,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </GlassCard>
      </Reveal>

      <Grid container spacing={3}>
        {projectCards.map((project) => (
          <Grid key={project.title} size={{ xs: 12, md: 6 }}>
            <Reveal sx={{ height: "100%" }}>
              <ProjectCard project={project} />
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
