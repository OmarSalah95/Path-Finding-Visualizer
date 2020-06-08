// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.
export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    // If we encounter a wall, we skip it.
    if (closestNode.isWall) continue;
    // If the closest node is at a distance of infinity,
    // we must be trapped and should therefore stop.
    if (closestNode.distance === Infinity) return visitedNodesInOrder;
    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateUnvisitedNeighbors(closestNode, grid);
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  node.neighbors = neighbors;
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    nodes.push(...row);
  }
  return nodes;
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.push(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}

// Background
// 	- TLed Web20 & 20.75
// 	- started Lambda
// 	- Taught myself Python in 2 weeks for fun
// 	- Found Techy interests built computers, SBC, Dabbled in arduino/robotics/sensors etc.
// 	- Partner in a few small businesses (Smoke shops, Gas Station, WholeSale)
// 	- Regional, and Local manager of stores in the same businesses(Organizing and Optimizing teams)
// 	- School/Random Temp jobs

// Strengths
// 	- Genuine nerdy interests in code(Averaged 11-12 hrs a day at my desk over my time at lambda mostly doing stretch or helping others)
// 	- Constantly trying to find new hard problems to solve
// 	- Been a senior Member of a Product team from creating the idea, to full scale application
// 	- Team Integration
// 	- Tool and language agnostic. Every tool has a use and I have been exposed to a fair number of them
// 	Technical (Although again, language agnostic)
// 		- Python was my first and is my Fav language thus far
// 		- Javascript a close #2
// 		- React w/ hooks (& Redux if the project is large enough & or Contexts as needed)
// 		- Node, Express, PostgresQL(Although have some knowledge of Java & Springboot and working knowledge of mySQL and Oracle)

// Location, and Relocation preferences
// 	- Currently in Los Angeles

// 	Would highly prefer not to
// 		- California
// 		- New York
// 		- New Jersey
// 		- Hawaii

// 	Ideal
// 		- Texas
// 		- Virginia(If the offer is right)

// 	Happily
// 		- Anywhere with a good balance of income/taxes+cost of living(Within the US)

// Non-Negotiable
// 	None really
// 	Ideally
// 		- Salary 90-97k or 110k+ (Federal tax brackets)
// My Job Search Now:
// 	I divide my time between personal projects I find interesting and that I have to learn to build(Like a pathfinding visualizer in react),
// 	I am signed up as a contributor to some of the Building Portfolio projects, and Job Search.(Not necessarily evenly)

// 	Job Search Method:
// 		-> Find jobs on Boards
// 		-> Navigate to Company application, and apply
// 		-> Find company on LinkedIn -> Research Company and Org Chart
// 		-> Send Connection Request with personalized message to HR team, and employees with my desired job title Noting my interest
// 			in the company, why I would be a good fit after reading the application(HR staff only), interest in company mission,
// 			and learning more about the job, etc
