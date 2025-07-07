import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section className="about py-16 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2" data-w-id="c1a6e09b-9715-b75b-8b51-d80bfcff695a">
            <img
              src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd906aac271d1741c21cd_about.jpg"
              srcSet="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd906aac271d1741c21cd_about-p-500.jpg 500w, https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd906aac271d1741c21cd_about-p-800.jpg 800w, https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678dd906aac271d1741c21cd_about.jpg 1080w"
              sizes="(max-width: 991px) 100vw, 50vw"
              alt="About Image"
              className="rounded-lg w-full object-cover"
              loading="lazy"
            />
            <div className="on-scroll block"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-semibold mb-6">Dedicated to Your Well-Being</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                We are committed to providing compassionate, personalized healthcare to every patient we serve.
                With a team of experienced doctors, nurses, and specialists, we strive to offer the highest
                standard of care in a welcoming and supportive environment.
              </p>
              <p className="text-lg">Whether you need routine check-ups or specialized care, we are here to guide you through every step of your healthcare journey.</p>
            </div>

            <Link
              to="/about-us"
              className="inline-flex rounded-full items-center mt-6 border border-black px-6 py-2 text-black hover:bg-black hover:text-white transition duration-300"
            >
              <span>More About Us</span>
              <span className="ml-2 relative w-4 h-4">
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/6773947d79d4083ab30e47f9_white-arrow.svg"
                  alt="Arrow"
                  className="absolute inset-0 w-full h-full transition-transform transform"
                />
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/6773947d79d4083ab30e47f9_white-arrow.svg"
                  alt="Arrow Hover"
                  className="absolute inset-0 w-full h-full transform translate-x-[-140%] translate-y-[140%] transition-transform"
                />
              </span>
            </Link>

            <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6">
              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678ddce8dfe722c9cbd05e8b_tf-1.svg"
                  alt="Expert Doctors"
                  className="w-12 h-12"
                />
                <div>
                  <div className="font-semibold text-lg">Expert Doctors</div>
                  <div className="text-gray-600">Your health journey with expert.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678ddce82e6bce024fc41b50_tf-2.svg"
                  alt="Emergency Care"
                  className="w-12 h-12"
                />
                <div>
                  <div className="font-semibold text-lg">Emergency Care</div>
                  <div className="text-gray-600">Proven Experts for Consultation</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678ddce8d11a64d21cfba86a_tf-3.svg"
                  alt="Appointment"
                  className="w-12 h-12"
                />
                <div>
                  <div className="font-semibold text-lg">Request Appointment</div>
                  <div className="text-gray-600">Schedule Your Visit</div>
                </div>
              </div>
            </div>

            <div className="mt-10" data-w-id="5218ee86-bc8b-259c-fa97-a2bf38cabc90">
              <img
                src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678ddc668e5c93eaf9fb4e0b_about-us.jpg"
                srcSet="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678ddc668e5c93eaf9fb4e0b_about-us-p-500.jpg 500w, https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/678ddc668e5c93eaf9fb4e0b_about-us.jpg 640w"
                sizes="(max-width: 991px) 100vw, 25vw"
                alt="About Image Small"
                className="rounded-md w-full max-w-xs"
                loading="lazy"
              />
              <div className="on-scroll block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
