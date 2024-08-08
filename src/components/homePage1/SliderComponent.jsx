import { useState } from 'react'

import slider1 from '/src/assets/homePage1/slider/sliderImg1.jpg'
import slider2 from '/src/assets/homePage1/slider/sliderImg2.jpg'
import slider3 from '/src/assets/homePage1/slider/sliderImg3.jpg'

import '../../styling/SliderComponent.css'

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [slider1, slider2, slider3]

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="slider">
      <div className="left-arrow" onClick={goToPrevious}>
        ❮
      </div>
      <div className="right-arrow" onClick={goToNext}>
        ❯
      </div>
      <div
        className="slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SliderComponent
