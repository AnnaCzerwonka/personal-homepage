import { Header } from "./features/Header";
import { Skills } from "./features/Skills";
import { ToLearn } from "./features/ToLearn";
import { Portfolio } from "./features/Portfolio";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Skills />
      <ToLearn />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;