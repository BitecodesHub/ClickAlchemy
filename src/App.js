import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import  { Homepage } from "./components/homepage.js";
import { Navbar } from "./components/Navbar.js";
import AboutSection from "./components/About.js";
import Services from "./components/Services.js";
import ContactSection from "./components/Contact.js";
// No curly braces
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
