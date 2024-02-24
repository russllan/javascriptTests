const binarySearch = require("./task/task_03");

describe("Проверка бинарного поиска", () => {
  console.time('FOR LOOP PROFILE')
  const testCase = [
    {
      arr: [-10, -5, -4, -3, -2, -1],
      key: -3,
      expected: 3,
    },
    {
      arr: ["a", "b", "c"],
      key: "b",
      expected: 1,
    },
    {
      arr: [],
      key: 12,
      expected: -1,
    },
    {
      arr: [1, 2, 3, 4, 5],
      key: null,
      expected: -1,
    },
    {
      arr: [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
        2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
        317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465,
        14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296,
        433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976,
        7778742049, 12586269025,
      ],
      key: 2971215073,
      expected: 47,
    }, // static
    {
      arr: [17],
      key: 17,
      expected: 0,
    },
    {
      arr: [17],
      key: 0,
      expected: -1,
    },
    {
      arr: [17, 21, 23, 29],
      key: 17,
      expected: 0,
    },
    {
      arr: [9, 16, 18, 30, 31, 41, 45],
      key: 45,
      expected: 6,
    },
    {
      arr: [17, 18, 21, 23, 29, 38, 41],
      key: 23,
      expected: 3,
    },
    {
      arr: [17, 18, 21, 23, 29, 33, 38],
      key: 21,
      expected: 2,
    },
    {
      arr: [12, 18, 21, 23, 32],
      key: 23,
      expected: 3,
    },
    {
      arr: [21, 23, 29, 33, 38],
      key: 25,
      expected: -1,
    },
    {
      // sort
      arr: [5, 1, -5, 13, 4, 25, -20],
      key: 13,
      expected: 5,
    }, // четные и нечетные
    {
      arr: [1, 2, 3, 4, 5],
      key: 4,
      expected: 3,
    },
    {
      arr: [1, 2, 3, 4, 5, 6],
      key: 5,
      expected: 3,
    },
    {
      arr: [1,2,3],
      key: 0,
      expected: -1
    },
    {
      arr: [1,2,3],
      key: 2,
      expected: 1
    },
    {
      arr: [1,2,3],
      key: 3,
      expected: 2
    },
    {
      arr: [1,2,3],
      key: 1,
      expected: 0
    },

    // laba 6 test for while
    {
      // Полный прогон
      arr: [5, 10, 12, 37],
      key: 37,
      expected: 3,
    },
    {
      // 1 итерации
      arr: [5, 10, 12, 37],
      key: 10,
      expected: 1,
    },
    {
      // 2 итерации
      arr: [5, 10, 12, 37],
      key: 5,
      expected: 0,
    },
    {
      // m < n ; m = 3
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      key: 16,
      expected: 15,
    },
    {
      // n-1 ; n = 4
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      key: 16,
      expected: 15,
    },
    {
      // n iteration ; n = 5
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      key: 16,
      expected: 15,
    },
    {
      // n + 1 ; n = 6
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      key: 16,
      expected: 15,
    },
  ];

  testCase.forEach((item) => {
    it(`Массив: [${item.arr}] и ключа: ${item.key}`, () => {
      const res = binarySearch(item.arr, item.key);
      expect(res).toEqual(item.expected);
    });
  });
  console.timeEnd('FOR LOOP PROFILE')
});
