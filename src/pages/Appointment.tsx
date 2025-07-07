import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AppointmentForm from '../Components/Appointment';

const Appointment: React.FC = () => {
  return (
    <div>
      {/* Appointment page content will go here */}
   <Navbar/>
   <AppointmentForm/>
   <Footer/>
    </div>
  );
};

export default Appointment; 