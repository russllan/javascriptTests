const solveFibonacci = require("./task/task_02");

describe("Проверка фибоначи", () => {
  const testCase = [
    {
      current: 5,
      expect: { number: 3, sequence: [0, 1, 1, 2, 3, 5] },
    },
    {
      current: 1,
      expect: { number: 0, sequence: [0, 1] },
    },
    {
      current: 2,
      expect: { number: 1, sequence: [0, 1, 1] },
    },
    {
      current: "test",
      expect: "Порядковый номер должен быть числом",
    },
    {
      current: -2,
      expect: "Порядковый номер должен быть положительным числом",
    },
    {
        current: 2.4,
        expect: "Порядковый номер должен быть целым",
      },
  ];
  testCase.forEach((item) => {
    it(
      `Входящий параметр ${item.current}\n` + `Ожидаю результат ${item.expect}`,
      () => {
        const res = solveFibonacci(item.current);
        expect(res).toEqual(item.expect);
      }
    );
  });
});
