const arr = [70, 20, 50, 30, 90, 5, 15];
console.log(arr);

function selectionSort (arr) {
    for (let i=0; i<arr.length; i++) {
        let minInd = i;
        // Finding min element
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[minInd]) {
                minInd = j;
            }
        }
        // Swapping 
        if (i != minInd) {
            let temp = arr[i];
            arr[i] = arr[minInd];
            arr[minInd] = temp;
        }
    }
}
// TC = O(N^2)

selectionSort(arr);
console.log(arr);