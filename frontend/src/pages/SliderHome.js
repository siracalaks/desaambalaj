import React, { useState, useEffect } from 'react';
import './SliderHome.css';

const SliderHome = ({ brands }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === brands.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, brands.length]);
  

  return (
    <div className="slider-container">
      <div className="slider">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={index === activeIndex ? 'slide active' : 'slide'}
          >
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderHome;
