const sumColumns = require("./task/task_04");

describe("Сумма столбцов матрицы", () => {
  test("Пропустить цикл полностью", () => {
    const matrixEmpty = [[]];
    const resultEmpty = sumColumns(matrixEmpty);
    expect(resultEmpty).toEqual([]);
  });

  test("Один проход через цикл", () => {
    const matrixSingle = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const resultSingle = sumColumns(matrixSingle);
    expect(resultSingle).toEqual([5, 7, 9]);
  });

  test("Двойной проход через цикл", () => {
    const matrixDouble = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const resultDouble = sumColumns(matrixDouble);
    expect(resultDouble).toEqual([12, 15, 18]);
  });

  test("m проходов через цикл (m < n)", () => {
    const matrixM = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    const resultM = sumColumns(matrixM);
    // Рассмотрим случай m = 2
    expect(resultM).toEqual([22, 26, 30]);
  });

  test("n - 1 проходов через цикл", () => {
    // Представим, что n = 3
    const matrixNMinus1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const resultNMinus1 = sumColumns(matrixNMinus1);
    expect(resultNMinus1).toEqual([12, 15, 18]);
  });

  test("n проходов через цикл", () => {
    // Представим, что n = 3
    const matrixN = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const resultN = sumColumns(matrixN);
    expect(resultN).toEqual([12, 15, 18]);
  });

  test("n + 1 проходов через цикл", () => {
    // Представим, что n = 3
    const matrixNPlus1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    const resultNPlus1 = sumColumns(matrixNPlus1);
    // Рассмотрим случай n + 1 = 4
    expect(resultNPlus1).toEqual([22, 26, 30]);
  });

  test("Неккоректная матрица", () => {
    const matrixNPlus1 = [
      [1, 2, 3, 4],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    const resultNPlus1 = sumColumns(matrixNPlus1);
    expect(resultNPlus1).toEqual(`Введите матрицу так, чтобы столбцы были равны между собой`);
  });

});
