import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    cardBorder: string;
  }
  interface Palette {
    onSurfaceVariant: string;
    tertiaryAccent: string;
  }
  interface PaletteOptions {
    onSurfaceVariant?: string;
    tertiaryAccent?: string;
  }
  interface TypographyVariants {
    displayLg: React.CSSProperties;
    displayLgMobile: React.CSSProperties;
    headlineMd: React.CSSProperties;
    bodyLg: React.CSSProperties;
    bodyMd: React.CSSProperties;
    labelSm: React.CSSProperties;
    codeSnippet: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    displayLg?: React.CSSProperties;
    displayLgMobile?: React.CSSProperties;
    headlineMd?: React.CSSProperties;
    bodyLg?: React.CSSProperties;
    bodyMd?: React.CSSProperties;
    labelSm?: React.CSSProperties;
    codeSnippet?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    displayLg: true;
    displayLgMobile: true;
    headlineMd: true;
    bodyLg: true;
    bodyMd: true;
    labelSm: true;
    codeSnippet: true;
  }
}

// Spacing tokens (px): base=4, xs=8, sm=16, gutter=24, md=24, lg=48, xl=80
export const spacing = {
  base: 4,
  xs: 8,
  sm: 16,
  md: 24,
  gutter: 24,
  lg: 48,
  xl: 80,
};

export const colors = {
  background: "#0A0A0A",
  paper: "#121212",
  cardBorder: "#262626",
  primary: "#3B82F6",
  primaryFixedDim: "#adc6ff",
  onSurface: "#e5e2e1",
  onSurfaceVariant: "#c2c6d6",
  tertiary: "#ffb786",
  tertiaryContainer: "#df7412",
  chipBg: "#1A1A1A",
  chipText: "#94A3B8",
  surfaceContainerLow: "#1c1b1b",
  surfaceContainerLowest: "#0e0e0e",
  outlineVariant: "#424754",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
      light: colors.primaryFixedDim,
      contrastText: "#002e6a",
    },
    tertiaryAccent: colors.tertiary,
    onSurfaceVariant: colors.onSurfaceVariant,
    background: {
      default: colors.background,
      paper: colors.paper,
      cardBorder: colors.cardBorder,
    },
    text: {
      primary: colors.onSurface,
      secondary: colors.onSurfaceVariant,
    },
    divider: colors.outlineVariant,
  },
  typography: {
    fontFamily: "var(--font-geist), Geist, sans-serif",
    displayLg: {
      fontFamily: "var(--font-hanken-grotesk), 'Hanken Grotesk', sans-serif",
      fontSize: "48px",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      fontWeight: 700,
    },
    displayLgMobile: {
      fontFamily: "var(--font-hanken-grotesk), 'Hanken Grotesk', sans-serif",
      fontSize: "32px",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      fontWeight: 700,
    },
    headlineMd: {
      fontFamily: "var(--font-hanken-grotesk), 'Hanken Grotesk', sans-serif",
      fontSize: "24px",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      fontWeight: 600,
    },
    bodyLg: {
      fontFamily: "var(--font-geist), Geist, sans-serif",
      fontSize: "18px",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    bodyMd: {
      fontFamily: "var(--font-geist), Geist, sans-serif",
      fontSize: "16px",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    labelSm: {
      fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
      fontSize: "13px",
      lineHeight: 1.0,
      letterSpacing: "0.02em",
      fontWeight: 500,
    },
    codeSnippet: {
      fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
      fontSize: "14px",
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          displayLg: "div",
          displayLgMobile: "div",
          headlineMd: "div",
          bodyLg: "p",
          bodyMd: "p",
          labelSm: "span",
          codeSnippet: "span",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none" as const,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background,
          color: colors.onSurface,
          scrollBehavior: "smooth",
        },
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: colors.surfaceContainerLowest,
        },
        "::-webkit-scrollbar-thumb": {
          background: colors.cardBorder,
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: colors.primary,
        },
      },
    },
  },
});

export default theme;
