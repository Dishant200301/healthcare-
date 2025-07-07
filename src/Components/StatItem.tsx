import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  id: string;
  number: string;
  description: string;
}

const HealthcareStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    {
      id: 'years-experience',
      number: '16+',
      description: 'Vaxet has been a trusted provider of exceptional healthcare services.'
    },
    {
      id: 'patient-visits',
      number: '6000+',
      description: 'We are proud to serve over 6,000+ patient visits annually.'
    },
    {
      id: 'satisfied-patients',
      number: '75k+',
      description: 'We take pride in the trust your health & happiness are our top priorities.'
    },
    {
      id: 'medical-experts',
      number: '20+',
      description: 'Each bringing a wealth of knowledge & expertise to provide you.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A data-driven approach to better healthcare
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            From the number of consultations to our patient satisfaction rates, we are
            committed to delivering the best possible outcomes for every individual.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`
                text-center p-6 rounded-lg bg-slate-800 border border-slate-700
                transform transition-all duration-700 ease-out
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
                {stat.number}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareStats;