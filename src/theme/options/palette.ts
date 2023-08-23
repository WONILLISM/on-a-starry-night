import { Palette } from "styled-components";
import { Color } from "../types";

const GREY: Color = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const palette: Palette = {
  background: {
    light: "#FFFFFF",
    dark: "#000000",
  },
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: {
    main: "",
  },
  secondary: {
    main: "",
  },
  grey: GREY,
};

export default palette;
