import Navbar from "../components/Navbar";
import About from "../components/About";
import { darkModeAtom } from "../config/theme";
import { useAtom } from "jotai";
import Projects from "../components/Projects";

function Home() {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <main className={darkMode ? "dark" : "light"}>
      <Navbar />
      <About />
      <Projects />
    </main>
  );
}

export default Home;
