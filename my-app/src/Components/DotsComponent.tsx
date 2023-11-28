import { Dot } from 'lucide-react';
import React, { FC } from 'react'

interface DotsComponentProps {
  slidesCount: number,
  number: number
}


const DotsComponent:FC<DotsComponentProps> = ({slidesCount}:DotsComponentProps): JSX.Element => {
    const renderDots = () => {
        const dots:any[] = [];
        for (let i = 0; i < slidesCount; i++) {
          dots.push(<Dot key={`dot-${i}`}  />);
        }
    
        return dots;
      };
    
      return <div className="dots">{renderDots()}</div>;
    
}

export default DotsComponent
