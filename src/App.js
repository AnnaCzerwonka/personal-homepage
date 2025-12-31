import { Header } from "./features/Header";
import { Skills } from "./features/Skills";
import { ToLearn } from "./features/ToLearn";
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
    </ThemeProvider>
  );
}

export default App;