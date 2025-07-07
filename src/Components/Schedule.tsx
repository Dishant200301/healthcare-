import React from 'react';

interface ScheduleData {
  time: string;
  schedule: string;
  doctor: string;
  duration: string;
}

const scheduleData: ScheduleData[] = [
  {
    time: "10:00 AM",
    schedule: "New Patient Consultations",
    doctor: "Dr. Marvin McKinney",
    duration: "60 Minutes"
  },
  {
    time: "11:00 AM",
    schedule: "Diagnostic Testing",
    doctor: "Dr. Leslie Alexander",
    duration: "60 Minutes"
  },
  {
    time: "12:00 PM",
    schedule: "Vaccination Appointments",
    doctor: "Dr. Jane Cooper",
    duration: "60 Minutes"
  },
  {
    time: "01:00 PM",
    schedule: "Physical Therapy Sessions",
    doctor: "Dr. Ronald Richards",
    duration: "60 Minutes"
  },
  {
    time: "03:00 PM",
    schedule: "Preventive Care Visits",
    doctor: "Dr. Wade Warren",
    duration: "60 Minutes"
  },
  {
    time: "04:00 PM",
    schedule: "Medication Management",
    doctor: "Dr. Theresa Webb",
    duration: "60 Minutes"
  }
];

const TitleIcon: React.FC = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#3B82F6"/>
  </svg>
);

const MedicineSchedule: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TitleIcon />
            <span className="text-blue-600 font-medium text-lg">Service Times</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Medicine Department Schedule
          </h2>
        </div>

        {/* Schedule Table */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                      Time
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                      Schedule
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                      Doctor
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                      Duration
                    </th>
                  </tr>
                </thead>
                
                {/* Table Body */}
                <tbody className="divide-y divide-gray-200">
                  {scheduleData.map((item, index) => (
                    <tr 
                      key={index}
                      className={`hover:bg-gray-50 transition-colors duration-200 ${
                        index === scheduleData.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        {item.time}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {item.schedule}
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        {item.doctor}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {item.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Decorative overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent pointer-events-none rounded-2xl"></div>
        </div>

        {/* Mobile Card View (hidden on desktop) */}
        <div className="lg:hidden mt-8">
          <div className="space-y-4">
            {scheduleData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-xl font-bold text-blue-600">{item.time}</div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {item.duration}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.schedule}
                </h3>
                <p className="text-gray-600 font-medium">{item.doctor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineSchedule;