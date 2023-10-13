import Navbar from "../components/Navbar";
import About from "../components/About";
import { darkModeAtom } from "../config/theme";
import { useAtom } from "jotai";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <main className={darkMode ? "dark" : "light"}>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
