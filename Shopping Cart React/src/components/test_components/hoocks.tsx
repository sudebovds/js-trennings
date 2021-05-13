import React, { useRef, useState } from 'react'

function App() {
  const [inp, setInp] = useState<string | null>(null);
  const txt = useRef<HTMLInputElement>(null);

  const inputChangeHandler = () => {
    if(txt.current){
      setInp(txt.current.value);
    }
  }

  const clearButtonHandler = () => {
    setInp(null);
    if(txt.current){
      txt.current.value = '';
    }
  }
  
  return (
    <div>
      <h1>{inp}</h1>
      
      <input type = 'text' onChange = {inputChangeHandler} ref = {txt}/>
      <button onClick = {clearButtonHandler}>Clear input</button>
     </div>
  )
}

export default App
