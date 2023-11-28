import React, { useEffect, useState } from 'react'
import {ArrowBigLeft,ArrowBigRight} from 'lucide-react'
import "../styles/ImageSlider_1.css"
import "../styles/Arrows.css"
import Arrows from './Arrows'
import SlidesList from './SlidesList'
import DotsComponent from './DotsComponent'

interface SliderProps {
    imageURLs: string[],
    autoPlay: boolean,
    autoPlayTime: number,
    width: string,
    height: string,
}
    

const Slider = ({
    imageURLs, 
    autoPlay, 
    autoPlayTime, 
    width,
    height
}: SliderProps) => {

    const [items, setItems] = useState<String[]>([])
    const [slide, setSlide] = useState<number>(0)
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(()=> {
            setItems(imageURLs)    
    },[])

    const changeSlide = (direction: number = 1) => {
        let slideNumber = 0

        if(slide + direction < 0) {
            slideNumber = items.length - 1
        }else {
            slideNumber = (slide + direction) % items.length
        }
        setSlide(slideNumber)
    }
    const goToSlide = (number: number) => {
        setSlide(number % items.length)
    }
    useEffect(() => {
        if (!autoPlay) return;
    
        const interval = setInterval(() => {
          changeSlide(1);
        }, autoPlayTime);
    
        return () => {
          clearInterval(interval);
        };
      }, [items.length, slide]);



    return (
        <div 
            style={{width, height,background: "red"}}
            className='slider'
            >
            <Arrows onClick={goToSlide}/>
            <SlidesList/>
            <DotsComponent slidesCount={items.length} number={0}/>
        </div>
    )
}

export default Slider
