import { useState, useEffect } from 'react';
import SvgRightarrow from '../../Components/icons/rightarrow';
import SvgLeftarrow from '../../Components/icons/leftarrow';
import ring1 from '../../assets/images/ring1.png';
import ring2 from '../../assets/images/ring2.png';
import ring3 from '../../assets/images/ring3.png';
import ring4 from '../../assets/images/ring4.png';

export const BestSellers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [ring1, ring2, ring3, ring4];
  const totalSlides = slides.length;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000); // Change slide every 5 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <p className="pl-7">Our Best Sellers</p>
        <div className="flex pr-7">
          <button onClick={prevSlide}>
            <SvgLeftarrow />
          </button>
          <button onClick={nextSlide}>
            <SvgRightarrow />
          </button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ width: "100%" }}>
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            transition: 'transform 2s linear', // Slow-motion effect, adjust duration as needed
          }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt=""
              className="w-80 h-80 object-cover pl-4"
            />
          ))}
          {slides.map((slide, index) => (
            <img
              key={index + totalSlides}
              src={slide}
              alt=""
              className="w-80 h-80 object-cover pl-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
