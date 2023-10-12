import Navbar from "../components/Navbar";
import About from "../components/About";
import { darkModeAtom } from "../config/theme";
import { useAtom } from "jotai";

function Home() {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <main className={darkMode ? "dark" : "light"}>
      <Navbar />
      <About />
    </main>
  );
}

export default Home;
