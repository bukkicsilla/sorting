function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Assume the current element is the minimum
    let minIndex = i;
    // Check the rest of the array for a smaller element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // If the minimum is not the position of the current element, swap them
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

module.exports = selectionSort;
