import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#2C2C31",
      light: "#DCDDFD",
      lightBlue: "#787DF9",
    },
    error: {
      main: "#D20000",
    },
    text: {
      primary: "#2C2C31",
    },
    grey: {
      100: "#FFFFFF",
      200: "#F0F0F0",
      300: "#DDDDDD",
      400: "#B5B5B5",
      500: "#575757",
      600: "#141414",
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: 36,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 28,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: 1.5,
    },
    body2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 1.5,
    },
    button: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "bold",
      letterSpacing: "0em",
      lineHeight: 1.5,
      textTransform: "none",
    },
    caption: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 12,
      lineHeight: 1.5,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 70,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 80,
      },
      "@media (min-width:600px)": {
        minHeight: 80,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
        sizeSmall: {
          height: 32,
          paddingLeft: 24,
          paddingRight: 24,
        },
        sizeMedium: {
          minHeight: 40,
        },
        sizeLarge: {
          height: 48,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          height: 18,
          borderRadius: 50,
        },
        sizeMedium: {
          height: 30,
          borderRadius: 18,
        },
        deleteIcon: {
          color: "inherit",
          marginRight: 8,
        },
        labelSmall: {
          paddingLeft: 6,
          paddingRight: 6,
        },
        labelMedium: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
      defaultProps: {
        // deleteIcon: <CloseIcon fontSize="small" />,
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingBottom: 24,
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          marginBottom: 16,
          paddingLeft: 30,
          paddingTop: 16,
          paddingBottom: 16,
          "&.Mui-selected": {
            backgroundColor: "#EEA11B",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#F1B44B",
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: 44,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          color: "inherit",
          opacity: 0.9,
        },
      },
      defaultProps: {
        primaryTypographyProps: {
          variant: "subtitle1",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "white",
          color: "#575757",
          "&.Mui-disabled": {
            background: "#F0F0F0",
          },
        },
        input: {
          padding: "12.5px 14px",
        },
        inputSizeSmall: {
          padding: "8.5px 14px",
        },
        notchedOutline: {
          borderColor: "#B5B5B5",
        },
        multiline: {
          padding: 0,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: "14px !important",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
