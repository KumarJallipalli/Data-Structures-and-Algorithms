const arr = [20, 45, 27, 47, 55, 67, 75, 88, 90];
let x = 67;

function linearSearch(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

let result = linearSearch(arr);
console.log(result);

// TC = O(N)
// SC = O(1)
