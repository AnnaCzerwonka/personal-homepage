import { Header } from "./features/Header";
import { Skills } from "./features/Skills";
import { ToLearn } from "./features/ToLearn";
import { Portfolio } from "./features/Portfolio";
import { Footer } from "./features/Footer";
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
      <Footer />
    </ThemeProvider>
  );
}

export default App;