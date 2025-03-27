const arr = [1, -2, 5, -9];
console.log(arr);


function bubbleSort (arr) {
    let n = arr.length;
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
// TC = O(N^2)

bubbleSort(arr);
console.log(arr);