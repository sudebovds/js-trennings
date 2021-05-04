import React from 'react';
import * as vega from 'vega';
//import vegaLite from 'vega-lite';
import { Handler } from 'vega-tooltip';
import * as vl from 'vega-lite-api';
import * as d3 from 'd3';
import { config } from './assets/dataVisual/config';
import './data.css';
import { getData } from './assets/dataVisual/getData';
import { viz } from './assets/dataVisual/viz';


vl.register(vega, {
    view: { render: 'svg' },
    init: view => { view.tooltip(new Handler().call) }
})

const DataVisual = async () => {
    const marks = viz
                    .data(await getData())
                    .width(window.innerWidth)
                    .height(window.innerHeight)
                    .autosize({ type: 'fit', contains: 'padding' })
                    .config(config);

    document.body.appendChild(await marks.render());
}
DataVisual();

export default DataVisual;