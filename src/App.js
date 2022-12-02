import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";

import "./App.css";
import VideosComp from "./components/VideosComp/VideosComp";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <VideosComp />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default App;
