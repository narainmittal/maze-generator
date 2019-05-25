const Block = require('./block');
const {
    DIRECTIONS,
    DIRECTION_NEXT_X,
    DIRECTION_NEXT_Y,
    DIRECTION_OPP
} = require('./constants');
const _ = require('lodash');

function Backtracking(rows, cols) {

    const blocks = [];
    const stack = [];

    for (const i of _.range(0, rows)) {
        blocks[i] = [];
        for (const j of _.range(0, cols)) {
            blocks[i][j] = new Block(i, j);
        }
    }
    let current = blocks[0][0];
    stack.push(current);
    current.setVisited();

    while (stack.length > 0) {
        const dirs = _.shuffle(Reflect.ownKeys(DIRECTIONS));
        let found = false;
        for (const dir of dirs) {

            const nextX = current.x + DIRECTION_NEXT_X[dir];
            const nextY = current.y + DIRECTION_NEXT_Y[dir];

            if ((nextX >= 0 && nextX < rows) && (nextY >= 0 && nextY < cols)) {
                const nextBlock = blocks[nextX][nextY];
                if (!nextBlock.visited) {
                    current.removeWall(dir);
                    nextBlock.removeWall(DIRECTION_OPP[dir]);
                    nextBlock.setVisited();
                    stack.push(nextBlock);
                    current = nextBlock;
                    found = true;
                    break;
                }
            }

        }
        if (!found) {
            current = stack.pop();
        }
    }

    return {
        rows,
        cols,
        blocks: blocks.map(row => row.map(col => col.getBlock()))
    }
}

module.exports = {
    backtracking: Backtracking
};

