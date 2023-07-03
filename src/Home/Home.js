import ImageSlider from "../ImgSlider/ImgSlider";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider"
import React from 'react'
import './Home.css'
import AboutUs from "../AboutUs/AboutUs";

export default function Home() {
  return (
    <div className="container-home">
      <ImageSlider/>
      <div id="AboutUs">
      <AboutUs/>
      </div>
      <TestimonialSlider/>
    </div>
  )
}
