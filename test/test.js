const assert = require('assert');
const {generate} = require('../index');

describe('Maze Generator', function(){

    describe('Generate Maze function',  function (){

        it('should generate valid maze object for 10*10', async function (){
            const grid = 10;
            const result = await generate(grid,grid);
            assert.equal(result.rows, grid);
            assert.equal(result.cols, grid);
            assert.equal(result.blocks.length, grid);
            result.blocks.forEach(element => {
                assert.equal(element.length, grid);
            }); 
        });
    });
});