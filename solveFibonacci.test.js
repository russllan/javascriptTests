const solveFibonacci = require("./task/task_02");

describe("Проверка фибоначи", () => {
  const testCase = [
    {
      current: 1,
      expect: { number: 0, sequence: [0, 1] },
    },
    {
      current: 0,
      expect: "Порядковый номер должен быть положительным числом и больше нуля",
    },
    {
      current: "test",
      expect: "Порядковый номер должен быть числом",
    },
    {
      current: -2,
      expect: "Порядковый номер должен быть положительным числом и больше нуля",
    },
    {
      current: 2.4,
      expect: "Порядковый номер должен быть целым",
    },
    {
      current: 500,
      expect: 1.394232245616977e+104
    },
    {
      current: 1000,
      expect: 4.346655768693743e+208
    },
    {
      current: 1001,
      expect: "Порядковый номер должен быть меньше 1000",
    },
    {
      current: 999,
      expect: 2.686381002448534e+208,
    },
    {
      current: 50,
      expect: 12586269025,
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
