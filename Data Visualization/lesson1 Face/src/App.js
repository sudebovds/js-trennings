import React from 'react';

const App = () => {

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <div className="face">
            <svg width={width} height={height} className="face__draw">
                <circle 
                    cx={centerX} 
                    cy={centerY} 
                    r="249"
                    fill="yellow"
                    stroke="black"
                ></circle>
                <circle 
                    cx="350" 
                    cy="180" 
                    r="50"
                ></circle>
                <circle 
                    cx="600" 
                    cy="180" 
                    r="50"
                ></circle>
            </svg>      
    </div>
  );
}

export default App;
