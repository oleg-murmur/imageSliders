import React, { FC } from 'react'
import FirstSlider from './Sliders/FirstSlider/FirstSlider'

interface SliderProps {
    imageURLs: string[],
    autoPlay: boolean,
    autoPlayTime: number,
    width: string,
    height: string,
}

const SlidersController:FC<SliderProps> = ({
    imageURLs, 
    autoPlay, 
    autoPlayTime, 
    width,
    height
}) => {
    return (<FirstSlider slides={imageURLs}/>)
}

export default SlidersController
