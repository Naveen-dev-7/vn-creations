import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Process from "./components/Process/Process";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
// import About from "./components/About/About";

import CaseStudy from "./pages/CaseStudy";


import "./styles/global.css";
import "./styles/animations.css";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Process />
              <About/>
              <Portfolio />
              <Contact />
              <CTA />
            </>
          }
        />

        <Route path="/case-study" element={<CaseStudy />} />

        {/* Future case study route */}
        {/* <Route path="/case-study" element={<CaseStudy />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
