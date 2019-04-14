const _ = require('lodash');
const Block = require('./block');

function generate(rows, cols){

    const maze ={
        blocks : [],
        start : null,
        end : null,
    }

    for(const i of _.range(0, rows)){
        maze.blocks[i] = [];
        for(const j of _.range(0, cols)){
            maze.blocks[i][j] = Block.block(i, j);
        }
    }

    maze.start =  Block.block(0,0)

    maze.end =  Block.block(rows-1, cols-1);

    return maze;
    
}

module.exports ={
    generate
}