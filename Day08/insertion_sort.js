const arr = [2, 1, 3, 7, 5];
console.log(arr);

function insertionSort (arr) {
    for (let i=1; i<arr.length; i++) {
        let key = arr[i];
        let j = i-1;
        // checking whether there are any elements > key
        while ( j>=0 && arr[j] > key ) {
            // Moving the larger elements to right side by one step/index
            arr[j+1] = arr[j];
            j--;
        }
        // Inserting the key to it;s right place
        arr[j+1] = key;
    }
}
// TC = O(N^2)

insertionSort(arr);
console.log(arr);