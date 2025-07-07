import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Blogs from './pages/Blogs';
import Appointment from './pages/Appointment';
import ContactUs from './pages/ContactUs';
import { Contact } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
};

export default App;
