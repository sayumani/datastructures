function insertionSort(arr, n) {
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i;

    while (j >= 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j = j - 1;
    }
    arr[j] = temp;
  }
  console.log(arr);
}

let arr = [12, 11, 13, 5, 6];
insertionSort(arr, arr.length);
// console.log(arr);
