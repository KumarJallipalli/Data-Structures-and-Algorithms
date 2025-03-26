/**
 * Q:
 *  - Integer in each r0w is sorted from left to right
 *  - First integer from each row > Last Integer from previous row
 *  - Given a Target Element, Find whether the target element is prenet or not 
*/

const matrix = [ [1, 3, 5, 7], [10, 11, 16, 20],  [23, 30, 34, 60] ]
let target = 40;

// Brute Force
function bruteForce (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (matrix[i][j] == target) {
                return true;
            }
        }
    }

    return false;
}
// TC = O(M*N)

console.log(bruteForce(matrix, target));



function optimizedApproach (arr, target) {
    let m = arr.length;
    let n = arr[0].length;

    let s = 0;
    let e = m*n - 1;

    // Binary Seach Implementyation in 2D Array
    while (s <= e) {
        let mid = s + Math.floor((e-s)/2);

        // Getting the row & Column numbers for 2D Array
        let i = Math.floor(mid/n);
        let j = mid % n;

        if (arr[i][j] == target) {
            return true;
        }
        else if (arr[i][j] < target) {
            s = mid + 1;
        }
        else {
            e = mid - 1;
        }
    }

    return false;
}
// TC = O(log[M*N])

console.log(optimizedApproach(matrix, target));