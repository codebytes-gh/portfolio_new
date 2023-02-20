import { createTheme } from "@mui/material/styles";
import components from "./components";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(115, 149, 174)",
      dark: "rgb(47, 106, 217)",
      light: "rgb(70, 125, 227)",
      contrastText: "rgb(28, 40, 48)",
    },
    secondary: {
      main: "rgb(249, 187, 52)",
      dark: "rgb(255, 153, 0)",
      light: "rgb(255, 183, 77)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },

    button: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(255, 255, 255)",
  },

    text: {
      primary: "rgb(23, 23, 23)",
      secondary: "rgb(28, 40, 48)",
    },
    background: {
      default: "rgb(85, 122, 149)",
      paper: "rgb(85, 122, 149)",
    },
    divider: "rgb(225, 227, 232)",
    alternate: {
      main: "rgb(247, 250, 255)",
      dark: "rgb(237, 241, 247)",
    },
    cardShadow: "rgba(23, 70, 161, .11)",
  },
  typography: typography,
  components: components,
});

export default theme;