import React, { useEffect, useState } from 'react'

type IteratingProps<T> = T[]


export const useHookTimeOut = (iteratingProps: IteratingProps<string>) => {


    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide,setAutoSlide] = useState(true)
  
    const handleImageClick = () => {
        setAutoSlide(false); 
        setTimeout(() => {
          setAutoSlide(true); 
        }, 10000);
      };
      
    const nextSlide = () => {
      setCurrentSlide((prevSlide:number) => (prevSlide === iteratingProps.length - 1 ? 0 : prevSlide + 1));
      handleImageClick()
    }
      const prevSlide = () => {
      setCurrentSlide((prevSlide:number) => (prevSlide === 0 ? iteratingProps.length - 1 : prevSlide - 1));
      handleImageClick()
    }
    const selectSlide = (idSlide: number) =>{
      setCurrentSlide(idSlide) 
      handleImageClick()
    }


    useEffect(() => {
        let interval: string | number | NodeJS.Timer | undefined;
        if(autoSlide) {  
          interval = setInterval(() => {
            setCurrentSlide((prevIndex) => (prevIndex + 1) % iteratingProps.length); 
          }, 2000);
        }
            return () => clearInterval(interval);
      
          }, [autoSlide,iteratingProps.length]);
      


    return {
        nextSlide,
        prevSlide,
        selectSlide,
        currentSlide
    }
}

export default useHookTimeOut
