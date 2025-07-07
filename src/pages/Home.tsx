import React from "react";
import Navbar from "../Components/Navbar";
import MedicalServices from "../Components/Services";
import About from "../Components/About";
import Doctors from "../Components/Doctors";
import Appointment from "../Components/Appointment";
import Footer from "../Components/Footer";
import HealthcareCTA from "../Components/CTA";
import { Link } from "react-router-dom";
import HealthcareStats from "../Components/StatItem";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* === Homepage Content === */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                    <span className="text-sm text-slate-700 font-medium">
                      Healthcare Excellence Since 2020
                    </span>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Your Health,
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {" "}
                      Our Priority
                    </span>
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                    Experience world-class healthcare with our advanced medical
                    services, expert doctors, and cutting-edge technology. Your
                    journey to better health starts here.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { value: "50K+", label: "Patients Served" },
                    { value: "100+", label: "Expert Doctors" },
                    { value: "24/7", label: "Emergency Care" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-slate-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div>
                    <Link
                      to="/appointment"
                      className="group inline-flex items-center mr-2 gap-4 bg-rose-700 text-white px-8 py-4 rounded-full border-2  hover:bg-blue-950 hover:text-white transition-all duration-200 font-semibold"
                    >
                      <span>Appointment</span>
                    </Link>
                     <Link
                      to="/services"
                      className="group inline-flex items-center gap-4 bg-white text-gray-900 px-12 py-4 rounded-full border-2  hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold"
                    >
                      <span>Services</span>
                    </Link>
                  </div>
                  
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative">
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Healthcare Professional"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-60"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* === End Homepage === */}

      <HealthcareCTA />
      <MedicalServices />
      <About />
      <Doctors />
      <Appointment />
      <HealthcareStats/>
      <Footer />
      
    </>
  );
};

export default Home;
