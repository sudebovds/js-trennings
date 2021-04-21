import React, { useState } from 'react';

const linkStyle = {
    cursor: 'pointer',
    color: 'balck',
    fontSize: '25px'
}

const DataVisual = () => {

    const [data, setData] = useState(null);

    const clickHandler = (event) => {
        setData(event.target.id)
    }

    console.log(data);

    return(
        <>
            <a style = {linkStyle} onClick = {clickHandler} id = 'a'>Click</a>
            <div style = {{width: '150px', height: '150px', background: 'red'}} onClick = {clickHandler} id = 'div'></div>
        </>
    )
}

export default DataVisual;