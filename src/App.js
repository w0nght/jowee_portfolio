import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HashScroll from "./components/HashScroll";
import Hero from "./components/Hero";
// import Projects from "./components/Projects";
import CaseStudyPickAndSpin from "./pages/CaseStudyPickAndSpin";
import CaseStudyScrabbleHelper from "./pages/CaseStudyScrabbleHelper";
import CaseStudyPortfolio from "./pages/CaseStudyPortfolio";
import CaseStudyThree from "./pages/CaseStudyThree";
import CaseStudyALDI from "./pages/CaseStudyALDI";
import ExperienceSection from "./components/ExperienceSection";
import About from "./pages/About";
import Footer from "./components/Footer";
import GAScrollTracker from "./components/GAScrollTracker";
import FeatureProjects from "./components/FeatureProjects";

function App() {
  return (
    <>
      <Navbar />
      <HashScroll />
      <GAScrollTracker />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeatureProjects />
              {/* <Projects /> */}
              <ExperienceSection />
            </>
          }
        />
        <Route path="/projects/pick-and-spin" element={<CaseStudyPickAndSpin />} />
        <Route path="/projects/scrabble-helper" element={<CaseStudyScrabbleHelper />} />
        <Route path="/projects/personal-portfolio" element={<CaseStudyPortfolio />} />
        <Route path="/projects/tafe" element={<CaseStudyThree />} />
        <Route path="/projects/aldi" element={<CaseStudyALDI />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer shown across all pages so put it outside the Routes */}
      <Footer />
    </>
  );
}

export default App;
