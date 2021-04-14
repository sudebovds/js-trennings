import { useState } from "react";
import * as d3 from "d3";

/*const width = 960;
const height = 500;
const circleRadius = 30;*/
const url = `https://gist.githubusercontent.com/sudebovds/0620df3655bfe3638db025cd5e47da50/raw/cssColorsData.csv`;

const Data = () => {
    const [data, setData] = useState(null);

    d3.csv(url).then(data => {
        let message = '';

        /*message = message + `${Math.round(d3.csvFormat(data).length / 1024)} Kb`;
        message += `${data.length} rows\n`;
        message += `${data.columns.length} columns\n`*/ 
    })
  
    return (
        <div className="App">
            {/*message*/}
        </div>
    );
}

export default Data;