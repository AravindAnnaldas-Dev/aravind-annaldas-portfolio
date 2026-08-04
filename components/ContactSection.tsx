import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import DescriptionIcon from "@mui/icons-material/Description";
import GlassCard from "./shared/GlassCard";
import Reveal from "./shared/Reveal";
import { FilledCta, OutlinedCta } from "./shared/CtaButton";
import { resumeUrl, socialLinks } from "@/lib/data";

const emailLink = socialLinks.find((link) => link.label === "Email")!;

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ px: { xs: 3, md: 6 }, maxWidth: "1200px", mx: "auto", mb: "80px" }}
    >
      <Reveal>
        <GlassCard
          sx={{
            p: { xs: 4, md: 10 },
            borderRadius: "16px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(59, 130, 246, 0.05)",
              pointerEvents: "none",
            }}
          />
          <Typography variant="displayLg" color="text.primary" sx={{ mb: 3, position: "relative" }}>
            Let&apos;s build something great.
          </Typography>
          <Typography
            variant="bodyLg"
            color="text.secondary"
            sx={{ maxWidth: "36rem", mx: "auto", mb: 6, position: "relative" }}
          >
            I&apos;m currently looking for new Frontend Engineering opportunities
            where I can contribute to complex systems and high-impact products.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <FilledCta
              href={emailLink.href}
              startIcon={<MailIcon />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Email Me
            </FilledCta>
            <OutlinedCta
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionIcon />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Download CV
            </OutlinedCta>
          </Box>
        </GlassCard>
      </Reveal>
    </Box>
  );
}
