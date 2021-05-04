import * as vl from 'vega-lite-api';

export const viz = vl
                    .markPoint({
                        fill: true,
                        stroke: false,
                        size: 900,
                        opacity: .1
                    })
                    .encode(
                        vl.x().fieldQ('displaysment').scale({zero: false}),
                        vl.y().fieldQ('horsepower').scale({zero: false}),
                        vl.tooltip().fieldN('name')
                    )