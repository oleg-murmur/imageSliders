import React, { useState,useEffect,useMemo } from 'react';
import './style.css';

interface SliderProps {
  slides: string[];
}

const FirstSlider: React.FC<SliderProps> = ({ slides }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }
    const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  }
  const selectSlide = (idSlide: number) =>{
    setCurrentSlide(idSlide) 

  }

useEffect(() => {
    let interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length); // Используем оператор остатка, чтобы зациклить индексы изображений
    }, 2500); // Устанавливаем интервал в 3 секунды для смены изображений

      return () => clearInterval(interval);
    }, []);

  return (
    <div className="slider-container">
      
        <div className="slider-container-slider" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease' }} >
          {slides.map((slide,index) => (
            <div key={index} className={index === currentSlide ? "slider-container-slider-slide active" : "slider-container-slider-slide"} >
              <div className="slider-container-slider-content">
                <img src={`${slide}`}/>
              </div>
            </div>
          ))}
        </div>
        <div className="dotList">
            {slides.map((slide,index)=>
              <div key={index} className={index === currentSlide ? 'dot-select' : 'dot-unselect'} onClick={()=>selectSlide(index)}></div>
            )}
        </div>

      <div className='button button-right' onClick={nextSlide}></div>
      <div className='button button-left'onClick={prevSlide}></div>

    </div>
  );
};

export default FirstSlider


