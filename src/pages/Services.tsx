import React from 'react';
import MedicalServices from '../Components/Services';
import Navbar from '../Components/Navbar';
import AppointmentForm from '../Components/Appointment';
import Footer from '../Components/Footer';

const Services: React.FC = () => {
  return (
    <div>
      {/* Services page content will go here */}
      <Navbar/>
     <MedicalServices/>
     <AppointmentForm/>
     <Footer/>
    </div>
  );
};

export default Services; 