import { useEffect, useState } from "react";
import { csv } from 'd3';
import Message from "./components/message/Message";

const url = `https://gist.githubusercontent.com/sudebovds/0620df3655bfe3638db025cd5e47da50/raw/cssColorsData.csv`;

const liStyle = {
    listStyle: 'none', 
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '200px',
    padding: '15px 25px'
};

const liClickHandler = (event) => {
    document.getElementById('body').setAttribute('style', `background-color: ${event.target.id}`)
}

const Data = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('Fetching data');
        csv(url).then(setData);
    }, []);
  
    return (
        <div className="App">
            Data is { data ? Message(data) : 'loading'}

            <hr/><br/>

            <h2>Click on color name</h2>

            { data ? data.map((el) => {

                return <li 
                            className = 'liItem' 
                            key = {el.Keyword} 
                            id = {el.Keyword}
                            style = {liStyle} 
                            onClick = {liClickHandler}
                        >
                              &#127754; {el.Keyword}
                        </li>
            }) : null}
        </div>
    );
}
export default Data;