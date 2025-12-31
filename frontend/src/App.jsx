import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import WhyTrustUs from "./components/WhyTrustUs";
import ProcessFlow from "./components/ProcessFlow";
import ServicesSection from   "./Pages/ServicesSection";
import ServicesTree from "./components/ServicesTree";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CTASection />
              <ServicesTree />
              <ProcessFlow />
              <WhyTrustUs />
            </>
          }
        />
        <Route path="/services" element={<ServicesSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
