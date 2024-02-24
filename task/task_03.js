function binarySearch(arr, key) {
  // const arr = [5, 10, 12, 37];
  // const key = 37;
  // console.time('FOR LOOP PROFILE')
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === key) {
        return mid; // Найден ключ, возвращаем индекс
      } else if (arr[mid] < key) {
        left = mid + 1; // Искомый элемент в правой половине
      } else {
        right = mid - 1; // Искомый элемент в левой половине
      }
    }
  
    return -1; // Элемент не найден
    // console.timeEnd('FOR LOOP PROFILE')
  }
  
//   document.getElementById('searchButton').addEventListener('click', function() {
//     // Вызов вашей функции бинарного поиска при нажатии на кнопку
//     binarySearchFunction();
// });

module.exports = binarySearch;  