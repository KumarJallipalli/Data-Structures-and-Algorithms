const arr = [20, 30, 40, 50, 60, 70, 80, 90];

function binarySearch(arr, x) {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] < x) {
      s = mid + 1;
    } else if (arr[mid] > x) {
      e = mid - 1;
    }
  }

  return -1;
}

let ans = binarySearch(arr, 70);
console.log(ans);

// Using Recursive Method
function recursiveBinarySearch(arr, x, i, j) {
  // Base Condition
  if (i > j) {
    return -1; // TC = O(1) => C
  }

  // Code
  let mid = Math.floor(i + (j - i) / 2);

  if (arr[mid] == x) {
    return mid; // TC = O(1) => C
  } else if (arr[mid] < x) {
    return recursiveBinarySearch(arr, x, mid + 1, j); // TC = O(N/2)
  } else {
    return recursiveBinarySearch(arr, x, i, mid - 1); // TC = O(N/2)
  }
}

const arr3 = [20, 30, 40, 50, 60, 70, 80, 90];
let sol = recursiveBinarySearch(arr3, 90, 0, 7);
console.log(sol);
