import { useState } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

import Header from "./components/Header";
import Hero from "./components/Hero";
import JobListings from "./components/Jobs";
import jobsData from "./components/jobsData";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState({ position: "", location: "" });

  const handleSearch = ({ position, location }) => {
    setSearchTerm({ position, location });
  };

  AOS.init({
    duration: 2000, // default animation duration
    once: true, // animate only once when element appears
  });

  return (
    <>
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <JobListings jobsData={jobsData} searchTerm={searchTerm} />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
