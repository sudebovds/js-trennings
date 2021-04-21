import { useEffect, useState } from "react";
import { csv } from 'd3';
import './data.css';
import Message from "./components/message/Message";

const url = `https://gist.githubusercontent.com/sudebovds/0620df3655bfe3638db025cd5e47da50/raw/cssColorsData.csv`;

const liClickHandler = (event) => {
    document.getElementById('body').setAttribute('style', `background-color: ${event.target.id}`);
}

const Data = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        csv(url).then(setData);
    }, []);
  
    return (
        <div className="App">
            Data is { data ? Message(data) : 'loading'}

            <hr/><br/>

            <h2>Click on color name</h2>

            { data ? data.map(el => {
                
               let num = Math.round(Math.random() * (100 - 50) + 50);

                return <li 
                            className = 'listItem' 
                            key = {el.Keyword} 
                            id = {el.Keyword}
                            style = {{color: el.Keyword}} 
                            onClick = {liClickHandler}
                        >
                          <span dangerouslySetInnerHTML={{__html: `&#1277${num}; `}} /> &nbsp;{el.Keyword}
                        </li>
            }) : null}
        </div>
    );
}
export default Data;