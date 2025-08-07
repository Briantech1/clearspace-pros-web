import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import StandardCleaning from "./pages/StandardCleaning";
import DeepCleaning from "./pages/DeepCleaning";
import MoveOutCleaning from "./pages/MoveOutCleaning";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Airbnb from "./pages/Airbnb";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/residential" element={<Residential />} />
<Route path="/services/residential/standard" element={<StandardCleaning />} />
<Route path="/services/residential/deep" element={<DeepCleaning />} />
<Route path="/services/residential/move-out" element={<MoveOutCleaning />} />
<Route path="/services/commercial" element={<Commercial />} />
<Route path="/services/airbnb" element={<Airbnb />} />
        <Route path="/newsletter" element={<Newsletter />} /> {/* ✅ new route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
