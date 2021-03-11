import React from 'react';
import { Face } from './components/face/Face';
import { Eye } from './components/eye/Eye';
import { Mouth } from './components/mouth/Mouth';

const App = () => {
  
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 2;
  const radius = height / 2 - strokeWidth;
  const eyeOffsetX = 120;
  const eyeOffsetY = 100;
  const eyeRadius = 50;

  return (
    <div className="face">
            <svg width={width} height={height} className="face__draw">
              <g transform={`translate(${centerX}, ${centerY})`}>
                <Face 
                    r={radius}
                    fill="yellow"
                    stroke="black"
                    strokeWidth={strokeWidth}
                />
                <Eye
                  centerX = {- eyeOffsetX} 
                  centerY = {- eyeOffsetY}
                  radius = {eyeRadius}
                />
                <Eye
                  centerX = {eyeOffsetX} 
                  centerY = {- eyeOffsetY}
                  radius = {eyeRadius}
                /> 
                <Mouth />   
              </g>            
            </svg>      
    </div>
  );
}

export default App;
