import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side */}
          <div className="flex-1 space-y-6 animate-fade-in">
            {/* Contact Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link 
                to="tel:+(239)555-0104"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                <span>+(239) 555-0104</span>
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/6788e09b1ba560be368b08ed_ic-phone.svg"
                  alt="Phone Icon"
                  className="w-4 h-4"
                />
              </Link>
              <Link
                to="mailto:info.vaxet@example.com"
                className="text-blue-600 hover:underline"
              >
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/6784b9f5ff32052b659d63fd_ic-mail.svg"
                  alt="Mail Icon"
                  className="w-6 h-6"
                />
              </Link>
              <Link to="/appointment" className="text-blue-600 hover:underline">
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678a47a20e82f1635da04eb0_ic-appointment.svg"
                  alt="Appointment Icon"
                  className="w-6 h-6"
                />
              </Link>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Healing Beyond Boundaries with Expertise
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex-1 space-y-6">
            {/* Description + Button */}
            <div className="space-y-4">
              <p className="text-gray-700 text-lg">
                We pride ourselves on offering a comprehensive suite of
                services, from medicine & appointment scheduling to personalized
                wellness.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
              >
                <span>Our Services</span>
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/6789ed2b4e846d24f50149f4_cts-arrow.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </Link>
            </div>

            {/* Hero Image Gallery */}
            <div className="animate-fade-in space-y-4">
              <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
                {[
                  "678a3f4285fb0a8f1fb87aa6_hero-05.jpg",
                  "678a3f422191e8bcc2ee5e62_hero-04.jpg",
                  "678a3f42a3898df2c38e5471_hero-03.jpg",
                  "678a3f42eeb15c512f27f97d_hero-02.jpg",
                  "678a3f426d4629bd1a6a4f0e_hero-01.jpg",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={`https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/${img}`}
                    alt={`Hero ${i + 1}`}
                    className="rounded-lg object-cover w-full h-auto"
                    loading="lazy"
                  />
                ))}
              </div>

              {/* Tag / Testimonial */}
              <div className="flex items-center gap-3 mt-4">
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678a45ab26f079558d13c18c_star.svg"
                  alt="Star Icon"
                  className="w-5 h-5"
                  loading="lazy"
                />
                <div className="text-sm text-gray-600">
                  More than 8000+ lives restored to wellness
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
