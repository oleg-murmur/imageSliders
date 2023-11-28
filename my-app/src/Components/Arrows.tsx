import React from 'react'
import "../styles/Arrows.css"

interface ArrowsProps {
    onClick: (any:any) => void,
}


const Arrows = ({onClick}:ArrowsProps) => {
    return (
        <div className='arrows'>
            <div className="" onClick={e=>onClick(-1)}>обратно</div>
            <div className="" onClick={e=>onClick(1)}>дальше</div>
        </div>
    )
}

export default Arrows
