const App = () => {
  return (
    <div className="face">
            <svg width="960" height="500" className="face__draw">
                <circle 
                    cx="480" 
                    cy="250" 
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
