import React, { useEffect, useState } from "react";
import { dijkstra, getNodesInShortestPathOrder } from "./Algorithms/Dijkstra";
import "./App.css";
import Grid from "./components/Grid/Grid";

function App() {
  const [state, setState] = useState({
    grid: [],
    mouseIsPressed: false,
    startNode: [15, 10],
    endNode: [15, 40],
  });

  useEffect(() => {
    let grid = [];
    for (let row = 0; row < 30; row++) {
      let currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push({
          col: col,
          row: row,
          isStart: row === state.startNode[0] && col === state.startNode[1],
          isFinish: row === state.endNode[0] && col === state.endNode[1],
          distance: Infinity,
          isVisited: false,
          isWall: false,
          previousNode: null,
        });
      }
      grid.push(currentRow);
    }
    // console.log(grid);
    setState({ ...state, grid: grid });
  }, []);

  const handleMouseDown = (row, col) => {
    setState({
      ...state,
      mouseIsPressed: true,
      grid: state.grid.map((r) =>
        r.map((node) =>
          node.row === row && node.col === col
            ? { ...node, isWall: !node.isWall }
            : node
        )
      ),
    });
  };

  const handleMouseEnter = (row, col) => {
    if (!state.mouseIsPressed) return;
    handleMouseDown(row, col);
  };

  const handleMouseUp = () => {
    setState({ ...state, mouseIsPressed: false });
  };

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10.5 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 10 * i);
    }
  };

  const visualizeDijkstra = () => {
    const { grid, startNode, endNode } = state;
    const head = grid[startNode[0]][startNode[1]];
    const finishNode = grid[endNode[0]][endNode[1]];
    const visitedNodesInOrder = dijkstra(grid, head, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    console.log(state);
  };
  return (
    <div className="App">
      <button onClick={() => visualizeDijkstra()}>
        Visualize Dijkstra's Algorithm
      </button>
      <input type="text" />
      <Grid
        grid={state.grid}
        mouseIsPressed={state.mouseIsPressed}
        handleMouseDown={handleMouseDown}
        handleMouseEnter={handleMouseEnter}
        handleMouseUp={handleMouseUp}
      />
    </div>
  );
}

export default App;
