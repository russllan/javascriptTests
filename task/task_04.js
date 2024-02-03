function sumColumns(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // create массив для хранения сумм стол
  const columnSums = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      columnSums[j] += matrix[i][j];
    //   if (cols !== matrix[i].length) {
    //     return `Введите матрицу так, чтобы столбцы были равны между собой`;
    //     if( cols === matrix[i].length){

    //     }
      //}
    }
  }

  return columnSums;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const result = sumColumns(matrix);
console.log(result);

module.exports = sumColumns;