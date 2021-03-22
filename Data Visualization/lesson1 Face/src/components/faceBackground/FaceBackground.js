import React from 'react';

const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
  
    console.log({clientX, clientY});
  }

export const FaceBackground = (props) => {
    return(
        <circle 
            r={props.r}
            fill={props.fill}
            stroke={props.stroke}
            strokeWidth={props.strokeWidth}

            onMouseMove = {handleMouseMove}
        ></circle>
    );
}