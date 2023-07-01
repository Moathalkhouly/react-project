import React, { useState } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    text: "MindShare has been an incredible platform for me to express my thoughts and ideas. I love how easy it is to share and engage in meaningful discussions.",
    author: "John Doe",
  },
  {
    text: "Using MindShare has allowed me to connect with like-minded individuals and gain valuable insights. It's a great place to explore diverse perspectives and expand my knowledge.",
    author: "Jane Smith",
  },
  {
    text: "I highly recommend MindShare to anyone looking for an inspiring and supportive community. It has become my go-to platform for sharing, discovering thought-provoking content.",
    author: "Alex Johnson",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return null; 
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='All'>
    <h2 style={{textAlign:"center"}}>Testimonials</h2>
    <div className="testimonial-slider">
      <div className="slider-content">
        <div className="testimonial">
          <p className="testimonial-text">{testimonials[activeIndex].text}</p>
          <p className="testimonial-author">{testimonials[activeIndex].author}</p>
        </div>
      </div>
      <div className="slider-controls">
        <button className="slider-control prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="slider-control next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
    </div>
  );
};

export default TestimonialSlider;