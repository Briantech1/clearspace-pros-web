// src/App.tsx
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import PageLoader from "./components/PageLoader";

// Lazy pages (split by route)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Residential = lazy(() => import("./pages/Residential"));
const StandardCleaning = lazy(() => import("./pages/StandardCleaning"));
const DeepCleaning = lazy(() => import("./pages/DeepCleaning"));
const MoveOutCleaning = lazy(() => import("./pages/MoveOutCleaning"));
const Commercial = lazy(() => import("./pages/Commercial"));
const Airbnb = lazy(() => import("./pages/Airbnb"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const Contact = lazy(() => import("./pages/Contact"));
const Newsletter = lazy(() => import("./pages/Newsletter"));

export default function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential" element={<Residential />} />
          <Route path="/services/residential/standard" element={<StandardCleaning />} />
          <Route path="/services/residential/deep" element={<DeepCleaning />} />
          <Route path="/services/residential/move-out" element={<MoveOutCleaning />} />
          <Route path="/services/commercial" element={<Commercial />} />
          <Route path="/services/airbnb" element={<Airbnb />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
