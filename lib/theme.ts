import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00f5ff",
      contrastText: "#003739",
    },
    secondary: {
      main: "#ddb7ff",
      contrastText: "#490080",
    },
    background: {
      default: "#131313",
      paper: "#201f1f",
    },
    text: {
      primary: "#e5e2e1",
      secondary: "#b9caca",
    },
    divider: "#3a494a",
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, sans-serif",
    h1: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
    },
    caption: {
      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
      fontSize: "0.75rem",
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none" as const,
          fontWeight: 700,
          fontFamily: "var(--font-manrope), Manrope, sans-serif",
          letterSpacing: "0.1em",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#131313",
          scrollbarWidth: "thin",
        },
      },
    },
  },
});

export default theme;