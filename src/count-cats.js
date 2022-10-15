const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 *  countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let if_count = 0;
    let count_cat = matrix.map(funcCountcat);
    function funcCountcat(array){
        for (let i=0; i<array.length; i++) {
            if (array[i] === '^^'){
                if_count ++
            }
        }
    }return if_count;
}

module.exports = {
  countCats
};
