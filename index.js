const _ = require('lodash');
const { backtracking } = require('./src/backtracking');

const algorithms = {
    'recursive-backtracking': backtracking
}

async function generate(rows, cols, algorithm) {
    algorithm = algorithm || 'recursive-backtracking';
    const maze = await algorithms[algorithm](rows, cols);
    return maze;
}
module.exports = {
    generate
}
