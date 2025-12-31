import { Header } from "./features/Header";
import { Skills } from "./features/Skills";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Skills />
    </ThemeProvider>
  );
}

export default App;