const solveQuadraticEquation = require("./task/task_01");

describe("Проверка Квадратного уровнения", () => {
  const testCase = [
    // {
    //   a: "a",
    //   b: "b",
    //   c: 2,
    //   output: `Два корня: x1 = ${2}, x2 = ${1}`,
    // },
    {
      a: 1,
      b: -2,
      c: 1,
      output: `Один корень: x = ${1}`,
    },
    {
      a: 1,
      b: 2,
      c: 2,
      output: `Нет вещественных корней`,
    },
    {
      a: 1,
      b: 0,
      c: 0,
      output: `Один корень: x = ${0}`,
    },
    {
      a: 100000000000000,
      b: 20000000000000,
      c: 30000000000000,
      output: `Нет вещественных корней`,
    },{
      a: 6.5,
      b: 7.2,
      c: 1.2,
      output: `Два корня: x1 = ${-0.20437487102767543}, x2 = ${-0.9033174366646323}`,
    },
  ];
  testCase.forEach((test) => {
    it(
      `Входящая строка a = ${test.a} ` +
        `Входящая строка b = ${test.b} ` +
        `Входящая строка c = ${test.c} ` +
        `Ожидаю = ${test.output}`,
      () => {
        const res = solveQuadraticEquation(test.a, test.b, test.c);
        expect(res).toBe(test.output);
      }
    );
  });
});
