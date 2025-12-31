import { Header } from "./features/Header";
import { Skills } from "./features/Skills";
import { ToLearn } from "./features/ToLearn";
import { Portfolio } from "./features/personalHomepage/Portfolio";
import { Footer } from "./features/Footer";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <ToLearn />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;