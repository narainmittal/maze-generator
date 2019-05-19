# About
Utility to generate randomized maze in a grid format. The grid format is supplied as input. This is based on recursive backtracking algorithm. Output consists of 2D array of blocks with corresponding indexes and flags to indicate the maze path.

# Usage

Install the package locally as a dependency 

```
npm install -S @narainmittal/maze-generator
```

OR

Install the package globally

```
npm install -g @narainmittal/maze-generator
```

Post install make a call to the api with rows and columns as input
```
const maze = require('@narainmittal/maze-generator');

console.log(JSON.stringify(maze.generateMaze(10,10), null, 4));
```

Sample JSON output for 3*3 grid

```
{
    "rows": 3,
    "cols": 3,
    "blocks": [
        [
            {
                "x": 0,
                "y": 0,
                "dir": 13,
                "downWall": false,
                "leftWall": true
            },
            {
                "x": 0,
                "y": 1,
                "dir": 7,
                "downWall": true,
                "leftWall": true
            },
            {
                "x": 0,
                "y": 2,
                "dir": 9,
                "downWall": false,
                "leftWall": false
            }
        ],
        [
            {
                "x": 1,
                "y": 0,
                "dir": 12,
                "downWall": false,
                "leftWall": true
            },
            {
                "x": 1,
                "y": 1,
                "dir": 5,
                "downWall": false,
                "leftWall": true
            },
            {
                "x": 1,
                "y": 2,
                "dir": 8,
                "downWall": false,
                "leftWall": false
            }
        ],
        [
            {
                "x": 2,
                "y": 0,
                "dir": 6,
                "downWall": true,
                "leftWall": true
            },
            {
                "x": 2,
                "y": 1,
                "dir": 10,
                "downWall": true,
                "leftWall": false
            },
            {
                "x": 2,
                "y": 2,
                "dir": 14,
                "downWall": true,
                "leftWall": true
            }
        ]
    ]
}
```