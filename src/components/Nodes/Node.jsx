import React, { useEffect, useState } from 'react';

export default function Node({ x, y }) {
    console.log([x, y])

    return (
        <div className="node">
            {x}, {y}

        </div>
    )
}