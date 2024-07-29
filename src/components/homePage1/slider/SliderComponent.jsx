import { useState } from 'react';
import './sliderComponent.css';
import slider1 from '/public/homePage1/pexels-belle-co-99483-847393.jpg';
import slider2 from '/public/homePage1/pexels-fabianwiktor-994605.jpg';
import slider3 from '/public/homePage1/pexels-nubikini-386025.jpg';

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [slider1,slider2,slider3]

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="left-arrow" onClick={goToPrevious}>❮</div>
      <div className="right-arrow" onClick={goToNext}>❯</div>
      <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
    </div>
  );
};

export default SliderComponent;
