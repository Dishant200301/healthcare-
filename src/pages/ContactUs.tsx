import React from 'react'
import Navbar from '../Components/Navbar'
import { Contact } from 'lucide-react'
import Footer from '../Components/Footer'
import CareInfo from '../Components/Contact'

export default function ContactUs() {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <CareInfo/>
      <Footer/>
    </div>
  )
}
