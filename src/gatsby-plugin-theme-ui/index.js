export default {
    colors: {
      text: "#333",
      background: "#fff",
      primary: "#639",
      secondary: "#ff6347",
      white: "#fff",
    },
    fonts: {
        base: "system-ui, sans-serif",
        secondary: "Menlo, monospace",
      },
      fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      lineHeights: {
        normal: 1.5,
        medium: 1.4,
      },
      fontSizes: {
        xs: 12,
        sm: 16,
        md: 32,
        lg: 48,
        xl: 64,
      },
      letterSpacings: {
        normal: "0",
        wide: "0.25em",
      },
      breakpoints: ["768px", "1025px", "1290px"],
      space: [0,  8,  16,  32,  64],
      buttons: {
        primary: {
          color: "white",
          bg: "primary",
          "&:hover": {
          color: "primary",
          bg: "white",
          },
        },
        secondary: {
          color: "text",
          bg: "secondary",
          "&:hover": {
          color: "secondary",
          bg: "text",
          },
        },
      },
  }