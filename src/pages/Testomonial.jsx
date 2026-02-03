// TestimonialPage.js

import { useEffect, useRef, useState } from 'react';
import { gsap } from "../animations/gsap";
import karateOne from '../images/karate-1.jpg';
import karateTwo from '../images/karate-2.jpg';
import karateThree from '../images/karate-3.jpg';


const testimonialsData = [
  {
    id: 1,
    name: 'Riya Sharma',
    text: 'The beginner program helped me feel stronger in just a few weeks. The coaches keep every class focused and supportive.',
    image: karateOne,
  },
  {
    id: 2,
    name: 'Daniel Lee',
    text: 'I joined for fitness, but I stayed for the community. The sparring sessions are safe and incredibly motivating.',
    image: karateTwo,
  },
  {
    id: 3,
    name: 'Anita Desai',
    text: 'The self-defense classes are practical and empowering. I feel more confident commuting alone at night.',
    image: karateThree,
  },
  // Add more testimonials as needed
];

export const TestimonialPage = () => {
  const [testimonials, ] = useState(testimonialsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Auto-scroll to the next testimonial
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Adjust the interval duration (in milliseconds) as needed

    return () => {
      // Clear the interval on component unmount
      clearInterval(intervalId);
    };
  }, [testimonials]);

  useEffect(() => {
    if (!gsap) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonial-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 24,
        duration: 0.7,
      });
    }, testimonialRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonial-section" id="testimonials" ref={testimonialRef}>
      <div className="container testimonial-container">
          <h2 className='testmonial_heading'>What our students say about us</h2>
        <div className="testimonial-card">
          <div className="testimonial-avatar">
            <img src={testimonials[currentIndex].image} alt={`Image of ${testimonials[currentIndex].name}`} />
          </div>
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <p className="testimonial-author">- {testimonials[currentIndex].name}</p>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              aria-label={`View testimonial from ${item.name}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
