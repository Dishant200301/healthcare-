import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onDoctorsClick?: () => void;
  onAppointmentClick?: () => void;
}

const HealthcareCTA: React.FC<CTAProps> = ({ 
  onDoctorsClick, 
  onAppointmentClick 
}) => {
  const handleDoctorsClick = () => {
    if (onDoctorsClick) {
      onDoctorsClick();
    } else {
      // Default navigation - you can replace with your routing logic
      window.location.href = '/doctors';
    }
  };

  const handleAppointmentClick = () => {
    if (onAppointmentClick) {
      onAppointmentClick();
    } else {
      // Default navigation - you can replace with your routing logic
      window.location.href = '/appointment';
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your health a priority Reach out to our experts now
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need a consultation, treatment plan, or simply someone to
                answer your health questions, we're just a click away.
              </p>
            </div>
            
            {/* Meet Our Doctors Button */}
            <button
              onClick={handleDoctorsClick}
              className="group inline-flex items-center font-sans md:font-serif md gap-4 bg-white text-gray-900 px-8 py-4 rounded-full border-2 border-blue-600 hover:bg-blue-700 hover:text-white transition-all duration-300 font-semibold"
            >
              <span>Meet Our Doctors</span>
              <div className="relative overflow-hidden w-6 h-6">
                <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/assets/img/6788aacf1dded3938b3b6b90/health.jpg"
                alt="Healthcare professionals"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
              {/* CTA Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-blue-600 mb-2">
                      #healthandwellness
                    </div>
                    <button
                      onClick={handleAppointmentClick}
                      className="group inline-flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors duration-200 font-semibold"
                    >
                      <span>Make an Appointment</span>
                      <ArrowRight className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareCTA;