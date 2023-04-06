import cover from "../../assets/cover.png";
import { GlobalStyle } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <img
        src={cover}
        alt="cover"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Outlet />
    </ThemeProvider>
  );
};
