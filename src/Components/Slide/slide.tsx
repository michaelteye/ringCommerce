import { useEffect, useState } from 'react';
import SvgRightarrow from '../icons/rightarrow';
import SvgLeftarrow from '../icons/leftarrow';
// import SvgFavorite from '../icons/favorite';

interface SliderProps {
  slides: string[];
  title:string
}

export const SlideShow: React.FC<SliderProps> = ({ slides, title }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <p className="pl-7">{title}</p>
        <div className="flex pr-7">
          <button onClick={prevSlide}>
            <SvgLeftarrow />
          </button>
          <button onClick={nextSlide}>
            <SvgRightarrow />
          </button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ width: '100%' }}>
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            transition: 'transform 2s linear', // Slow-motion effect, adjust duration as needed
          }}
        >
            
          {slides.map((slide: any, index: any) => (
            <img
              key={index}
              src={slide}
              alt=""
              className="w-80 h-80 object-cover pl-4"
            />
          ))}
          {slides.map((slide: any, index: any) => (
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
