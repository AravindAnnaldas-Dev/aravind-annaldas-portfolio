import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ApiIcon from "@mui/icons-material/Api";
import LayersIcon from "@mui/icons-material/Layers";
import SpeedIcon from "@mui/icons-material/Speed";
import { SvgIconComponent } from "@mui/icons-material";

interface SkillCategory {
  Icon: SvgIconComponent;
  iconColor: string;
  accentColor: string;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    Icon: LayersIcon,
    iconColor: "#00f5ff",
    accentColor: "rgba(0, 245, 255, 0.1)",
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    Icon: ApiIcon,
    iconColor: "#ddb7ff",
    accentColor: "rgba(111, 0, 190, 0.1)",
    title: "UI & APIs",
    skills: ["Tailwind CSS", "Material UI", "REST APIs", "React Query", "Axios", "Responsive Design"],
  },
  {
    Icon: SpeedIcon,
    iconColor: "#e9feff",
    accentColor: "rgba(233, 254, 255, 0.05)",
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Agile / Scrum"],
  },
];

const glassPanelSx = {
  background: "rgba(53, 53, 52, 0.4)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(58, 73, 74, 0.15)",
};

export default function SkillsSection() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ py: 16, bgcolor: "#1c1b1b", overflow: "hidden" }}
    >
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        {/* Background watermark */}
        <Typography
          aria-hidden
          sx={{
            position: "absolute",
            right: -80,
            top: 0,
            fontSize: "10rem",
            fontFamily: "var(--font-manrope)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.02)",
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          SYSTEMS
        </Typography>

        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              fontFamily: "var(--font-space-grotesk)",
              color: "#e9feff",
              letterSpacing: "0.3em",
              mb: 2,
              fontSize: "0.7rem",
            }}
          >
            Tech Stack
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3.5rem" },
              letterSpacing: "-0.04em",
              color: "#e9feff",
            }}
          >
            Engineering Toolkit
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {skillCategories.map(({ Icon, iconColor, accentColor, title, skills }) => (
            <Box
              key={title}
              sx={{
                ...glassPanelSx,
                p: 5,
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                "&:hover .corner-accent": {
                  width: 128,
                  height: 128,
                },
              }}
            >
              {/* Corner accent */}
              <Box
                className="corner-accent"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 96,
                  height: 96,
                  bgcolor: accentColor,
                  borderBottomLeftRadius: "50%",
                  transition: "all 0.3s",
                }}
              />

              <Icon sx={{ fontSize: 40, color: iconColor, mb: 4 }} />

              <Typography
                component="h4"
                sx={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#e9feff",
                  mb: 3,
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {skills.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      bgcolor: "#2a2a2a",
                      color: "#e5e2e1",
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.7rem",
                      borderRadius: "2px",
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}