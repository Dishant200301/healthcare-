import React from 'react';
import {Link} from 'react-router-dom';

interface Doctor {
  name: string;
  specialty: string;
  imageUrl: string;
  profileLink: string;
}

const doctors: Doctor[] = [
  {
    name: 'Ronald Richards',
    specialty: 'Allergy & Immunology',
    imageUrl:
      'https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788afbd6cea0e5679aabd1e_doctor-thumb-05.jpg',
    profileLink: '/doctors/ronald-richards',
  },
  {
    name: 'Wade Warren',
    specialty: 'Infectious Diseases',
    imageUrl:
      'https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788afc74e06d0aee8e0c386_doctor-thumb-06.jpg',
    profileLink: '/doctors/wade-warren',
  },
  {
    name: 'Jane Cooper',
    specialty: 'Gynecology',
    imageUrl:
      'https://cdn.prod.website-files.com/6788aacf1dded3938b3b6b90/6788adec349227452af4759a_doctor-thumb-04.jpg',
    profileLink: '/doctors/jane-cooper',
  },
];

const DoctorsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white mt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-2 caret-yellow-600 text-sm text-blue-600 font-semibold mb-2">
              <img
                src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67738a6edfb9a1be9200f6b4_ic-title.svg"
                alt="Title Icon"
                className="w-5 h-5"
              />
              <span>Our Experts</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800">Meet Our Doctors</h2>
          </div>
          <Link
            to="/doctors"
            className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>View All</span>
            <img
              src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67738f0efaeb04f5025bdc32_link-arrow.svg"
              alt="Arrow"
              className="ml-2 w-4 h-4"
            />
          </Link>
        </div>

        {/* Doctor Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3   ">
          {doctors.map((doctor, idx) => (
            <Link
              key={idx}
              to={doctor.profileLink}
              className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden ">
                <img
                  src={doctor.imageUrl}
                  alt={`${doctor.name} photo`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">{doctor.name}</h4>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
