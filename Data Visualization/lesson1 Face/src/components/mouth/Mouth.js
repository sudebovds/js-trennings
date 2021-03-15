import React from 'react';
import { arc } from 'd3';

export const Mouth = ({mouthWith, mouthRadius}) => {

    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWith)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2);

    return(
        <path d={mouthArc()} />
    );
}