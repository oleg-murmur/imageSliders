import React, { FC, useEffect, useState } from 'react'
import FirstSlider from './Sliders/FirstSlider/FirstSlider'
import SecondSlider from './Sliders/SecondSlider/SecondSlider'

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



    return (
        <>
            <FirstSlider slides={imageURLs}/>
            {/* <SecondSlider slides={imageURLs}/> */}
        </>

    )
}

export default SlidersController
