import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills";
import { ScrollToTop } from "./components/custom/ScrollToTop";
import Education from "./sections/Education";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Home />
      <main>
        <About />
        <Skills />
        <Education />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
