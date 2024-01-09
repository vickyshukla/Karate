// TestimonialPage.js

import { useState, useEffect } from 'react';


const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://placekitten.com/100/100', // Replace with the actual image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://placekitten.com/100/101', // Replace with the actual image URL
  },
  // Add more testimonials as needed
];

export const TestimonialPage = () => {
  const [testimonials, ] = useState(testimonialsData);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="testimonial-container container">
        <h2 className='testmonial_heading'>What our student say about us</h2>
      <div className="testimonial">
        <img src={testimonials[currentIndex].image} alt={`Image of ${testimonials[currentIndex].name}`} className="testimonial-image" />
        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
        <p className="testimonial-author">- {testimonials[currentIndex].name}</p>
      </div>
    </div>
  );
};


