import React from 'react';

export const Eye = (props) => {
    return (
        <circle 
            cx={props.centerX} 
            cy={props.centerY} 
            r={props.radius}
        ></circle>
    );
};