import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <Box
      component="section"
      sx={{ px: { xs: 3, md: 6 }, maxWidth: "1200px", mx: "auto", my: "80px" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 6 }}>
        <Typography variant="headlineMd" color="text.primary" sx={{ flexShrink: 0 }}>
          Education
        </Typography>
        <Box sx={{ height: "1px", width: "100%", bgcolor: "divider" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-start" },
          gap: 3,
        }}
      >
        <Box>
          <Typography variant="headlineMd" color="text.primary">
            {education.degree}
          </Typography>
          <Typography variant="bodyMd" color="text.secondary">
            {education.institution}
          </Typography>
        </Box>
        <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
          <Typography variant="labelSm" color="primary.main" sx={{ display: "block" }}>
            {education.period}
          </Typography>
          <Typography variant="codeSnippet" color="text.secondary">
            {education.detail}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
