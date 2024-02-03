function binarySearch(arr, key) {
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
  }
  
module.exports = binarySearch;  