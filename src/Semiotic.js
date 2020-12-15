import XYFrame from "semiotic/lib/XYFrame"
import { scaleSqrt } from "d3-scale"

import { ReactComponent as ReactLogo } from './assets/tesla.svg';

const rScale = scaleSqrt()
    .domain([0, 16660516])
    .range([0, 25])
const frameProps = {   points: [{ theaterCount: 4, rank: 18, grossWeekly: 327616, title: "Ex Machina" },
        { theaterCount: 124, rank: 29, grossWeekly: 201345, title: "Ex Machina" },
        { theaterCount: 81, rank: 34, grossWeekly: 153162, title: "Ex Machina" },
        { theaterCount: 61, rank: 36, grossWeekly: 102114, title: "Ex Machina" },
        { theaterCount: 39, rank: 42, grossWeekly: 64350, title: "Ex Machina" },
        { theaterCount: 31, rank: 47, grossWeekly: 45344, title: "Ex Machina" },
        { theaterCount: 10, rank: 24, grossWeekly: 240160, title: "Far from the Madding Crowd" },
        { theaterCount: 99, rank: 15, grossWeekly: 1090487, title: "Far from the Madding Crowd" },
        { theaterCount: 98, rank: 30, grossWeekly: 138071, title: "Far from the Madding Crowd" },
        { theaterCount: 74, rank: 39, grossWeekly: 86393, title: "Far from the Madding Crowd" },
        { theaterCount: 3366, rank: 3, grossWeekly: 16660516, title: "The Longest Ride" },
        { theaterCount: 3371, rank: 5, grossWeekly: 9372323, title: "The Longest Ride" },
        { theaterCount: 803, rank: 14, grossWeekly: 780244, title: "The Longest Ride" },
        { theaterCount: 329, rank: 17, grossWeekly: 419930, title: "The Longest Ride" },
        { theaterCount: 45, rank: 40, grossWeekly: 33808, title: "The Longest Ride" },
        { theaterCount: 24, rank: 56, grossWeekly: 17379, title: "The Longest Ride" },
        { theaterCount: 9, rank: 67, grossWeekly: 6872, title: "The Longest Ride" }],
    size: [700,400],
    margin: { left: 60, bottom: 90, right: 10, top: 40 },
    xAccessor: "theaterCount",
    yAccessor: "rank",
    yExtent: [0],
    xExtent: [0],
    pointStyle: d => {
        return {
            r: 5,
            fill:
                d.title === "Ex Machina"
                    ? "#ac58e5"
                    : d.title === "Far from the Madding Crowd"
                    ? "#E0488B"
                    : "#9fd0cb"
        }
    },
    title: (
        <text textAnchor="middle">
            Theaters showing <tspan fill={"#ac58e5"}>Ex Machina</tspan> vs{" "}
            <tspan fill={"#E0488B"}>Far from the Madding Crowd</tspan>
        </text>
    ),
    axes: [{ orient: "left", label: "Rank" },
        { orient: "bottom", label: { name: "Theaters", locationDistance: 55 } }],
    customPointMark: ({ d }) => {
        return (
            <g>
                {/*<circle r={rScale(d.grossWeekly)} stroke="white" />*/}
                <rect width="50" height="30" style={{fill:"rgb(180,180,188)", stroke:"rgb(0,0,0)"}} />
                <ReactLogo/>
                {/*<text>{d.week}</text>*/}
            </g>
        )
    }
}

const ScatterPlot = () => {
    return <XYFrame {...frameProps} />
}

export default ScatterPlot;
