
import'./ImageSlider.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images


const ImageSlider = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className='container-imge' >
        <img src="https://st2.depositphotos.com/1017986/7904/i/450/depositphotos_79046312-stock-photo-close-up-of-different-food.jpg" alt="Image 1" />
      </div >
      <div  className='container-imge'>
        <img src="https://thedailyaesthetics.com/wp-content/uploads/image-2.jpeg" alt="Image 2" />
      </div>
      <div  className='container-imge'>
        <img src="https://img.taste.com.au/R_dRdL7V/taste/2022/09/healthy-tacos-recipe-181113-1.jpg" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;