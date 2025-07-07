import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Emergency Care",
    description:
      "We ensure prompt attention and compassionate support when you need it the most.",
  },
  {
    title: "Operation Theater",
    description:
      "With advanced equipment and a skilled surgical team, we provide precision care for all procedures.",
  },
  {
    title: "Pharmacy",
    description:
      "It provides a wide range of quality medications to support your treatment plan.",
  },
  {
    title: "Radiation Oncology",
    description:
      "Combining cutting-edge technology with expert care, we ensure precise treatment tailored.",
  },
];

const MedicalServices: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="services py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2 text-sm text-blue-500 font-medium">
            <img
              src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67738a6edfb9a1be9200f6b4_ic-title.svg"
              alt="Title Icon"
              className="w-5 h-5"
              loading="lazy"
            />
            <span>What We Do</span>
          </div>
          <h2 className="text-3xl font-bold">Our Medical Services</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <p className="mb-6 text-gray-600">
              With a team of experienced professionals & state-of-the-art
              facilities, we are dedicated to supporting your health &
              well-being at every stage of life.
            </p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex justify-between items-center px-4 py-3 shadow-lg bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <h5 className="text-md font-semibold">{service.title}</h5>
                    <img
                      src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678891488c2d8315d6d86a5d_ic-plus.svg"
                      alt="Toggle Icon"
                      className={`w-4 h-4 transform hover:shadow-gray-800 transition-transform ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                      loading="lazy"
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 py-3 bg-white text-sm text-gray-600">
                      {service.description}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="inline-flex items-center mt-6 text-white font-semibold rounded-full bg-[#0c4a6e] p-3 pl-5 align hover:none"
            >
              View All Services
              <img
                src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67738f0efaeb04f5025bdc32_link-arrow.svg"
                alt="Arrow"
                className="ml-2 w-4 h-4"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd2f63786862948247a18_service.jpg"
              alt="Service"
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 60vw"
              srcSet="
                https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd2f63786862948247a18_service-p-500.jpg 500w,
                https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd2f63786862948247a18_service-p-800.jpg 800w,
                https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd2f63786862948247a18_service-p-1080.jpg 1080w,
                https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd2f63786862948247a18_service.jpg 1680w
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
