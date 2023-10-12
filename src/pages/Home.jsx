import Navbar from "../components/Navbar";
import { darkModeAtom } from "../config/theme";
import { useAtom } from "jotai";

function Home() {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <main className={darkMode ? "dark" : "light"}>
      <Navbar />
    </main>
  );
}

export default Home;
