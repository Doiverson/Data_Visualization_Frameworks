import React, { PureComponent } from 'react';

import Semiotic from "./Semiotic";
import Antd from "./Antd";
import Vis from "./Vis";

import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ZAxis
} from 'recharts';

import './style.scss';
import { ReactComponent as ReactLogo } from './assets/tesla.svg';

const data02 = [
    { x: 300, y: 300, z: 200 },
    { x: 400, y: 500, z: 260 },
    { x: 200, y: 700, z: 400 },
    { x: 340, y: 350, z: 280 },
    { x: 560, y: 500, z: 500 },
    { x: 230, y: 780, z: 200 },
    { x: 500, y: 400, z: 200 },
    { x: 300, y: 500, z: 260 },
    { x: 240, y: 300, z: 400 },
    { x: 320, y: 550, z: 280 },
    { x: 500, y: 400, z: 500 },
    { x: 420, y: 280, z: 200 },
];

export default class Example extends PureComponent {

    render() {
        return (
            <div>
                {/*<Antd/>*/}
                {/*<Semiotic/>*/}
                <ScatterChart
                    width={500}
                    height={400}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                    <YAxis yAxisId="left" type="number" dataKey="y" name="weight" unit="kg" stroke="#8884d8" />
                    <YAxis yAxisId="right" type="number" dataKey="y" name="weight" unit="kg" orientation="right" stroke="#82ca9d" />
                    {/*<ZAxis range={[2000, 2000]}/>*/}
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    {/*<Scatter yAxisId="left" name="A school" data={data01} fill="#8884d8"/>*/}
                    <Scatter yAxisId="right" name="A school" data={data02} shape={(d) => {
                        console.log(d)
                        return( <React.Fragment>
                            {/*<ReactLogo className="hello"/>*/}
                            <rect x={d.cx} y={d.cy} style={{fill:"rgb(180,180,188)", stroke:"rgb(0,0,0)", width:50, height:20}} />
                            <svg id="Layer_1" x={d.cx} y={d.cy}>
                                <image href="https://logos-download.com/wp-content/uploads/2016/06/Disney_logo.png" width={80} height={30}/>
                                {/*<g id="TESLA">*/}
                                {/*    <path className="st0"*/}
                                {/*          d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3"/>*/}
                                {/*    <g>*/}
                                {/*        <path className="st0"*/}
                                {/*              d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"/>*/}
                                {/*    </g>*/}
                                {/*</g>*/}
                            </svg>
                        </React.Fragment>)}}/>

                    {/*<Scatter yAxisId="right" name="A school" data={data02} shape={<ReactLogo className="hello"/>}/>*/}
                </ScatterChart>
                {/*<Vis/>*/}
            </div>
        );
    }
}

