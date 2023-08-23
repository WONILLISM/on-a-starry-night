import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import palette from "./options/palette";

const theme: DefaultTheme = {
  palette: palette,
};

const ThemeConfig = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
