import Navbar from "../components/Navbar";
import About from "../components/About";
import { darkModeAtom } from "../config/theme";
import { useAtom } from "jotai";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <main className={darkMode ? "dark" : "light"}>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
