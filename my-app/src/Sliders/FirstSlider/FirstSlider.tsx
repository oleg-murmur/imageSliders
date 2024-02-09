import React, { useState,useEffect,useMemo } from 'react';
import './style.css';
import useHookTimeOut from '../../hooks/useHookTimeOut';

interface SliderProps {
  slides: string[];
}

const FirstSlider: React.FC<SliderProps> = ({ slides }) => {


  const {nextSlide,prevSlide,currentSlide,selectSlide} = useHookTimeOut(slides)

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

      <div className='button button-right' onClick={ nextSlide}></div>
      <div className='button button-left'onClick={prevSlide}></div>


    </div>
  );
};

export default FirstSlider


