import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import SpecialDays from "./components/SpecialDays";
import PhotoGallery from "./components/PhotoGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <History />
      <SpecialDays />
      <PhotoGallery />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;