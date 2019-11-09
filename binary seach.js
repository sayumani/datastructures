function binarySearch(array, left, right, key) {
  if (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if(array[mid] === key){
        return mid;
    }
    if (key < array[mid]) {
      return binarySearch(array, left, mid - 1, key);
    } else {
      return binarySearch(array, mid + 1, right, key);
    }
  }
  return -1;
}

let array =[1,2,3,4,5,6,7,8,9];
let res = binarySearch(array , 0 ,array.length-1,7);
console.log(res  , array[res]);
