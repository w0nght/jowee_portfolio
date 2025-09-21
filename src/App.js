import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HashScroll from "./components/HashScroll";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CaseStudyScrabbleHelper from "./pages/CaseStudyScrabbleHelper";
import CaseStudyPortfolio from "./pages/CaseStudyPortfolio";
import CaseStudyThree from "./pages/CaseStudyThree";
import CaseStudyFour from "./pages/CaseStudyFour";
import ExperienceSection from "./components/ExperienceSection";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <HashScroll />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <ExperienceSection />
            </>
          }
        />
        <Route
          path="/projects/scrabble-helper"
          element={<CaseStudyScrabbleHelper />}
        />
        <Route path="/projects/portfolio" element={<CaseStudyPortfolio />} />
        <Route path="/projects/three" element={<CaseStudyThree />} />
        <Route path="/projects/four" element={<CaseStudyFour />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* More sections: Experience, Skills, Footer */}
    </>
  );
}

export default App;
