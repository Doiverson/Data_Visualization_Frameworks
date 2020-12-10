import XYFrame from "semiotic/lib/XYFrame"
import { scaleSqrt } from "d3-scale"

import { ReactComponent as ReactLogo } from './assets/tesla.svg';


const rScale = scaleSqrt()
    .domain([0, 16660516])
    .range([0, 25])
const frameProps = {   points: [{ theaterCount: 4, rank: 18, grossWeekly: 327616, title: "Ex Machina" },
        { theaterCount: 39, rank: 15, grossWeekly: 1150814, title: "Ex Machina" },
        { theaterCount: 1255, rank: 6, grossWeekly: 7156570, title: "Ex Machina" },
        { theaterCount: 1279, rank: 6, grossWeekly: 3615000, title: "Ex Machina" }],
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
            Semiotic
        </text>
    ),
    axes: [{ orient: "left", label: "Rank" },
        { orient: "bottom", label: { name: "Theaters", locationDistance: 55 } }],
    customPointMark: ({ d }) => {
        return (
                <ReactLogo/>
        )
    }
}

export default () => {
    return <XYFrame {...frameProps} />
}
