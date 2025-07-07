import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DoctorsSection from '../Components/Doctors';

const Doctors: React.FC = () => {
  return (
    <div>
      {/* Doctors page content will go here */}
     <Navbar/>
     <DoctorsSection/>
     <Footer/>
    </div>
  );
};

export default Doctors; 