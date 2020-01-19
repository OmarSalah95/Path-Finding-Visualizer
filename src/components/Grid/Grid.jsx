import React from 'react';
import Node from "../Nodes/Node"


export default function Grid(props) {
    const {
        grid,
        mouseIsPressed,
        handleMouseDown,
        handleMouseEnter,
        handleMouseUp
    } = props
    return (
        <div className="grid">

            {grid.map((r, y) =>
                r.map((node, i) => {
                    const { row, col, isFinish, isStart, isWall } = node;
                    return <Node
                        key={row + i}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={isWall}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) => handleMouseDown(row, col)}
                        onMouseEnter={(row, col) =>
                            handleMouseEnter(row, col)
                        }
                        onMouseUp={() => handleMouseUp()}
                        row={row}
                    />
                })
            )}
        </div>
    )
}