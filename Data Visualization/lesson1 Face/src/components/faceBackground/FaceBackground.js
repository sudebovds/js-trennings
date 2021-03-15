import React from 'react';

export const FaceBackground = (props) => {
    return(
        <circle 
            r={props.r}
            fill={props.fill}
            stroke={props.stroke}
            strokeWidth={props.strokeWidth}
        ></circle>
    );
}