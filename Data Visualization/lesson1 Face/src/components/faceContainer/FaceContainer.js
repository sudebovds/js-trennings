export const FaceContainer = ({children, width, height, centerX, centerY}) => {
    return(
      <svg width={width} height={height} className="face__draw">
        <g transform={`translate(${centerX}, ${centerY})`}>
            {children}
        </g>            
      </svg>   
    ); 
  }