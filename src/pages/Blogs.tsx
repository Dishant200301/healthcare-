import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BlogSection from '../Components/Blogs'
import AppointmentForm from '../Components/Appointment'

export default function Blogs() {
  return (
    <div>
      <Navbar/>
      <BlogSection/>
      <AppointmentForm/>
      <Footer/>

    </div>
  )
}
