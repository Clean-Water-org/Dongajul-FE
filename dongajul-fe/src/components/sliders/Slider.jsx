import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import './Slider.scss';

const Slider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  const startSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
  };

  const stopSlide = () => {
    clearInterval(slideInterval.current);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    stopSlide();
    startSlide();
  };

  return (
    <div className='slider'>
      <div
        className='slider-container'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className='slider-wrapper' key={index}>
            <img src={image} alt={`image_${index + 1}`} />
          </div>
        ))}
      </div>
      <div className='slider-nav'>
        {images.map((_, index) => (
          <span
            key={index}
            className={classNames('dot', { active: index === currentIndex })}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
