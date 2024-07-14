/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotVal = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivotVal > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
  return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivotIndex = pivot(arr);
  let left = quickSort(arr.slice(0, pivotIndex));
  let right = quickSort(arr.slice(pivotIndex + 1));
  return [...left, arr[pivotIndex], ...right];
}

module.exports = { pivot, quickSort };
