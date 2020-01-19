import React, { useEffect, useState } from 'react';
import Node from "../Nodes/Node"


export default function Grid(props) {

    const [state, setState] = useState({ grid: [] })

    useEffect(() => {
        let grid = []
        for (let row = 0; row < 30; row++) {
            let currentRow = []
            for (let col = 0; col < 50; col++) {
                currentRow.push([col + 1, row + 1])
            }
            grid.push(currentRow)
        }
        setState({ grid: grid })
        console.log("Effect Grid:", grid)
    }, [])

    return (
        <div className="grid">

            {state.grid.map((row, y) => {
                return row.map(cell => {
                    return <Node x={cell[0]} y={cell[1]} />
                })
            })}
        </div>
    )
}