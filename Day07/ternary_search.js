const arr = [20, 25, 47, 56, 59, 63, 65, 79, 82];
let target = 25;

function ternarySearch (arr, target) {
    let n = arr.length;
    let s = 0;
    let e = n-1;

    while (s <= e) {
        let mid1 = Math.floor(s + (e-s)/3);
        let mid2 = Math.floor(e - (e-s)/3);

        // if target element is found
        if (arr[mid1] == target) {
            return mid1;
        }
        if (arr[mid2] == target) {
            return mid2;
        }

        // if target lies in 1st part
        if (target < arr[mid1]) {
            e = mid1-1;
        }
        // if target lies in 3rd part
        else if (target > arr[mid2]) {
            s = mid2+1;
        }
        // if target lies in 2nd part
        else {
            s = mid1+1;
            e = mid2-1;
        }
    }

    return -1;
}
// TC = O(logN) [base 3]

console.log(ternarySearch(arr, target));