const _ = require('lodash');
const { backtracking } = require('./src/backtracking');

const algorithms = {
    'recursive-backtracking': backtracking
}

function generate(rows, cols, algorithm) {
    algorithm = algorithm || 'recursive-backtracking';
    const maze = algorithms[algorithm](rows, cols);
    return maze;
}
module.exports = {
    generateMaze: generate
}
