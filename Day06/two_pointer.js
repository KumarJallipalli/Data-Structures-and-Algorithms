/**
 * Q:
 *  - Given a Sorted Array of Size n & a target value
 *  - Find a pair of elements whose sum = target value
*/

const arr = [20, 40, 60, 80, 90, 120, 240];
let target = 210;

function bruteForce (arr, target) {
    let n = arr.length;
    
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
// TC = O(N^2);

console.log(bruteForce(arr, target));



function twoPointerApproach (arr, target) {
    let n = arr.length;
    let i = 0;
    let j = n-1;

    while (i<=j) {
        if (arr[i] + arr[j] == target) {
            return [i, j];
        }
        else if (arr[i]+arr[j] < target) {
            i++;
        }
        else {
            j--;
        }
    }

    return [-1, -1];
}
// TC = O(N)

const ans = twoPointerApproach(arr, target);
console.log(ans)