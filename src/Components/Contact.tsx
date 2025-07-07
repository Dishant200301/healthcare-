import React from "react";
import { Link } from "react-router-dom";

interface TimeSlot {
  day: string;
  hours: string;
  isLast?: boolean;
}

interface Contact {
  label: string;
  phone: string;
}

const CareInfo: React.FC = () => {
  const timeSlots: TimeSlot[] = [
    { day: "Monday - Friday", hours: "9AM - 10PM" },
    { day: "Saturday", hours: "9AM - 10PM" },
    { day: "Sunday", hours: "10AM - 4PM", isLast: true },
  ];

  const emergencyContacts: Contact[] = [
    { label: "Hospital No:", phone: "+(704) 555-0127" },
    { label: "For Ambulance:", phone: "+(480) 555-0103" },
  ];

  const appointmentContact: Contact = {
    label: "Call us for book:",
    phone: "+(316) 555-0116",
  };

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Opening Times */}
          <div className="bg-white rounded-xl p-6 shadow-md ">
            <h5 className="text-lg font-bold text-gray-900 mb-4">Opening & Closing Times</h5>
            <p className="text-sm text-gray-600 mb-4">
              Our facility is open to serve you every week. We are also available for emergency care.
            </p>
            <div className="space-y-2">
              {timeSlots.map((slot, i) => (
                <div
                  key={i}
                  className={`flex justify-between border-gray-200 py-2 ${
                    !slot.isLast ? "border-b" : ""
                  }`}
                >
                  <span className="text-gray-800">{slot.day}</span>
                  <span className="text-blue-600 font-semibold">{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Cases */}
          <div className="bg-red-600 text-white rounded-xl p-6 shadow-md">
            <h5 className="text-lg font-bold mb-4">Emergency Cases</h5>
            <p className="text-sm mb-4">
              For urgent medical attention, our team is ready to help 24/7 & contact us.
            </p>
            <div className="space-y-4">
              {emergencyContacts.map((contact, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-sm">{contact.label}</span>
                  <Link to={`tel:${contact.phone}`} className="text-white font-bold text-lg hover:text-red-200">
                    {contact.phone}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment */}
          <div className="bg-blue-600 text-white rounded-xl p-6 shadow-md">
            <h5 className="text-lg font-bold mb-4">Schedule Your Appointment</h5>
            <p className="text-sm mb-4">
              Simply choose a convenient time, and our team will be ready to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm">{appointmentContact.label}</span>
                <Link
                  to={`tel:${appointmentContact.phone}`}
                  className="text-white font-bold text-lg hover:text-blue-200"
                >
                  {appointmentContact.phone}
                </Link>
              </div>
              <Link
                to="/appointment"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-sky-50 transition"
              >
                Make an Appointment
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/6789ed2b4e846d24f50149f4_cts-arrow.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareInfo;
