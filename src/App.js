import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom';
import Services from "./Pages/Services";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
