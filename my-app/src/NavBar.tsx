import React from 'react'
import './index.css';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='NavBar-logo'>logo</div>
            <div className="NavBar-sliders">
                <div className="NavBar-sliders-item">Slider 1</div>
                <div className="NavBar-sliders-item">Slider 2</div>
                <div className="NavBar-sliders-item">Slider 3</div>
                <div className="NavBar-sliders-item">Slider 4</div>
            </div>
            <div className='NavBar-logo'>Logout</div>
        </div>
    )
}

export default NavBar
