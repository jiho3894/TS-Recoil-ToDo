import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./Routers/Router";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { ThemeEnums, themeState } from "./Recoil/Atoms";
import { darkTheme, lightTheme } from "./styles/Theme";

function App() {
  const theme = useRecoilValue(themeState);
  const { DARK } = ThemeEnums;
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme !== DARK ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}
export default App;
