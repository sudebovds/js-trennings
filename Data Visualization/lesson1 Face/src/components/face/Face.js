import React from 'react';

export const Face = (props) => {
    return(
        <circle 
            r={props.r}
            fill={props.fill}
            stroke={props.stroke}
            strokeWidth={props.strokeWidth}
        ></circle>
    );
}