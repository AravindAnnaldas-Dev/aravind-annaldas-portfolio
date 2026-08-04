import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const projects = [
  {
    title: "Travel Booking Platform",
    description:
      "Dynamic search and booking workflows for flights, hotels, and trains. Integrated REST APIs using React Query and Axios for real-time data rendering across complete search-to-checkout transactional flows.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDG2P1n6ewbUDYskQQejYkFjsfFWmDw3WsD7SmirF6tSSvj3vhS5tsKaSrQBpjHs9eXb30Pxudp0bPn356EOXnwqjgmL9QtC-N6nS2vZIXhcyHEeyVq9uiNzktKPVlFsM6IuMpxGXcbt2G4kKdU5LlvuRyxP0x-ks6VN45oWXpuNcliFJRU9JNi1ZgHpdqB80ktjk9EEvE0oEUkDQEh1nnGce2DZN1F8yXV3hEdjGOMHJrBsZR-5yiXdzB9H4H7ovlDV6qZ4u8a4egy",
    tags: ["React.js", "Next.js", "TypeScript", "React Query", "Axios"],
    tagColor: "#00f5ff",
    isWide: true,
  },
  {
    title: "E-commerce Admin Dashboard",
    description:
      "CRUD-based admin panel with API-driven data handling for vendor management and product operations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3CadV6Gs215CSqfmKbs3QcRt6e0NGMUT1Nc4PoF_URhlan_iBSJfEVNS9HcQ1eqyzvG7nzBk6zbbC1rXvgawJCiT3QIR4UB1fnSrMcr4Nz_GwSd-WizDCKxPDBLuoU3Xaign7bKy43XPP9XXs99AQS8R62gNn1jZtPTqwoaw1s5Uh3VylFwoSBoam11EpdQt4MZ8GKeiH96CJYdzL-BhaTz93WfaO7pGPWkzIAVU09cbnEUhw3TM_jAWYxyIqIGlnF1VLtZ3GLLvu",
    tags: ["React.js", "REST APIs", "Axios", "Material UI"],
    tagColor: "#ddb7ff",
    isWide: false,
  },
];

export default function ProjectsSection() {
  return (
    <Box component="section" id="projects" sx={{ py: 16, bgcolor: "#131313" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 10,
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                fontFamily: "var(--font-space-grotesk)",
                color: "#ddb7ff",
                letterSpacing: "0.2em",
                mb: 2,
                fontSize: "0.7rem",
              }}
            >
              Case Studies
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
              Selected Projects
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "7fr 5fr" },
            gap: 6,
          }}
        >
          {projects.map((project, i) => (
            <Box
              key={project.title}
              sx={{
                cursor: "pointer",
                mt: { xs: 0, md: i === 1 ? 20 : 0 },
                "&:hover .project-img": {
                  filter: "grayscale(0%) !important",
                  opacity: "1 !important",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                  mb: 3,
                  aspectRatio: i === 0 ? "16/9" : "1/1",
                  bgcolor: "#2a2a2a",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-img"
                  style={{
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                    opacity: 0.6,
                    transition: "all 0.7s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, #131313 0%, transparent 60%)",
                    opacity: 0.6,
                    zIndex: 1,
                  }}
                />
              </Box>

              <Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 700,
                    fontSize: i === 0 ? "1.75rem" : "1.4rem",
                    color: "#e9feff",
                    mb: 1.5,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#b9caca", lineHeight: 1.7, mb: 3 }}
                >
                  {project.description}
                </Typography>

                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        background: "rgba(53, 53, 52, 0.4)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(58, 73, 74, 0.15)",
                        color: project.tagColor,
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "0.7rem",
                        borderRadius: "999px",
                        height: 28,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}