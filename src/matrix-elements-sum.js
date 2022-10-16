const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum_matrix = 0;
  if (matrix[0] == ''){
    matrix = matrix[0].split(',')
    for (let i of matrix){
      (parseInt(i))}
  }
  let sum_matrix_item = matrix.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  sum_matrix);
  return sum_matrix_item
}

module.exports = {
  getMatrixElementsSum
};
