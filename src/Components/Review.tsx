import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Leslie Alexander",
    location: "Georgia, USA",
    image: "https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67889e7564815ea0828c9edc_review-thumb-01.jpg",
    text: "I’m truly grateful for the care I received here. The doctors were attentive, and the staff made me feel comfortable every step of the way. Thanks to their expert guidance.",
  },
  {
    name: "Cameron Williamson",
    location: "Dallas, USA",
    image: "https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67889e74dc442708d3f1f586_review-thumb-02.jpg",
    text: "From scheduling my appointment to the actual consultation, everything was seamless. I highly recommend their services for anyone seeking quality care.",
  },
  {
    name: "Esther Howards",
    location: "Miami, USA",
    image: "https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67889e7440d00642e6e0452f_review-thumb-03.jpg",
    text: "The consultation was thorough, and I felt just as valued as if I were in the clinic. Highly recommend their modern, patient-first approach.",
  },
  {
    name: "Ronald Richards",
    location: "New York, USA",
    image: "https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67889e753ca42be5ba5cb1a2_review-thumb-04.jpg",
    text: "The care and attention I received at this facility were exceptional. The doctors and nurses went above and beyond to ensure my comfort and recovery.",
  },
  {
    name: "Kristin Watson",
    location: "Georgia, USA",
    image: "https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67889e753ca42be5ba5cb1c3_review-thumb-05.jpg",
    text: "I was impressed with the state-of-the-art equipment and the expertise of the staff. They explained everything clearly and made me feel confident in my treatment plan.",
  },
  {
    name: "Courtney Henry",
    location: "Miami, USA",
    image: "https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67889e75efddb4cc196a8639_review-thumb-06.jpg",
    text: "The emergency team acted swiftly and professionally during a critical moment for my family. Their timely intervention saved a life, and we’ll forever be thankful!",
  },
  {
    name: "Floyd Miles",
    location: "New Jersey, USA",
    image: "https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67889e75db56603eef0d8f53_review-thumb-07.jpg",
    text: "From the welcoming front desk to the skilled specialists, every step of my experience was seamless. They truly care about their patients’ well-being.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="reviews">
      <div className="container w-container">
        <div className="section-title">
          <div className="sub-title">
            <img
              src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/67738a6edfb9a1be9200f6b4_ic-title.svg"
              alt="Title Icon"
              className="title-icon"
              loading="lazy"
            />
            <div>Testimonials</div>
          </div>
          <h2 className="title">Patients Review</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop
          className="review-slider"
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-block">
                <div className="review-img">
                  <img
                    src={review.image}
                    alt={`${review.name} photo`}
                    className="review-image"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="review-text">“{review.text}”</p>
                  <div className="review-info">
                    <div>{review.name}</div>
                    <div>/</div>
                    <div>{review.location}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
