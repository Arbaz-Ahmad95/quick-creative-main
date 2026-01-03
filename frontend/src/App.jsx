import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProcessFlow from "./components/ProcessFlow";
import ServicesSection from   "./Pages/ServicesSection";
import DevelopmentSection from "./components/DevelopmentSection";
import ServicesCards from "./components/ServicesCards";
import CreativeServices from "./components/CreativeServices";
import DataAnalystSection from "./components/DataAnalystSection";
import WhyTrustUs from "./components/WhyTrustUs";
import CTASection from "./components/CTASection";


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
              <ProcessFlow />
              <DevelopmentSection/>
              <ServicesCards/>
              <DevelopmentSection/>
              <CreativeServices/>
              <DataAnalystSection/>
              <CTASection/>
              <WhyTrustUs/>

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
