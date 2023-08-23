import "styled-components";
import { BackgroundColor, Color, CommonColor, PaletteColor } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: Palette;
  }
  export interface Palette {
    common: CommonColor;
    primary: PaletteColor;
    secondary: PaletteColor;
    grey: Color;
    background: BackgroundColor;
  }
}
