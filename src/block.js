const { DIRECTIONS } = require('./constants');
function Block(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.dir = DIRECTIONS.DOWN | DIRECTIONS.UP | DIRECTIONS.LEFT | DIRECTIONS.RIGHT;
}

Block.prototype.addWall = function (direction) {
    this.dir = this.dir | DIRECTIONS[direction];
}

Block.prototype.removeWall = function (direction) {
    this.dir = this.dir & (~DIRECTIONS[direction]);
}

Block.prototype.setVisited = function () {
    this.visited = true;
}

Block.prototype.getBlock = function () {
    return {
        'x': this.x,
        'y': this.y,
        'dir': this.dir,
        'downWall': (this.dir & DIRECTIONS.DOWN) !== 0,
        'leftWall': (this.dir & DIRECTIONS.LEFT) !== 0
    };
}

module.exports = Block;

