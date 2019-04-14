const generator = require('./src/generator');

function generateMaze(rows, cols){
    return generator.generate(rows, cols);
}

module.exports = {
    maze : generateMaze
}