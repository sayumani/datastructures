function quickSort(array, left, right) {
  if (left < right) {
    let pivotIndex = partition(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex, right);
  }
}

function partition(array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)];
  let l = left;
  let r = right;
  while (l <= r) {
    while (array[l] < pivot) {
      l++;
    }
    while (array[r] > pivot) {
      r--;
    }
    if (l <= r) {
      [array[l], array[r]] = [array[r], array[l]];
      l++;
      r--;
    }
  }
  return l;
}

let array = [8, 5, 2, 10, 6, 3, 9];
quickSort(array, 0, array.length - 1);
console.log(array);
