import React from 'react';

export default function Node(props) {
    const {
        col,
        isFinish,
        isStart,
        isWall,
        onMouseDown,
        onMouseEnter,
        onMouseUp,
        row,
    } = props;

    const extraClassName =
        isFinish
            ? 'node-finish'
            : isStart
                ? 'node-start'
                : isWall
                    ? 'node-wall'
                    : '';


    return (
        <div
            id={`node-${row}-${col}`}
            className={`node ${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp()}
        >
            <h2>{isStart ? ">>" : isFinish ? "X" : ""}</h2>

        </ div>


    )
}