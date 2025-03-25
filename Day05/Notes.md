# 05. Arrays & Searching [ 25/03/2025 ]


## Data Structures

`Data Structure` → Way to Structure/Organize the Data

Types of Data Structure

- Linear → Storing the Data in a Linear Way
- Non-Linear →  Storing the Data in a Non-Linear Way

Why we need Different Data Structure..?

- We choose the Data Structure depending on the Use Case & which is Primarily based on the TC
- For a Specific Use Case, Which ever the DS gives us less TC → we will choose it
- As it reduces the Execution Time → which in turn increases the Efficiency


## Arrays

- `Array` → Collection of Items, stored in a Contiguous Memory
- Each Element in an Array is Identified using unique numbers called Index
    - Generally, Index start from “0” & ends at “n-1”
- Base Address → 1st Element’s Address

## What is Contiguous Memory

- Assume an Array contains all int types, where int type takes 4 Bytes of Memory
- Then Each Element will be Stored in such a Manner
    - 1st Element [ Base Address ]→ 1000 [ Assume ]
    - 2nd Element → 1004
    - 3rd Element → 1008
    - `ith` Element → `Base Address + ( i - 0 ) * 4`
- This type of Storing is called Contiguous
- Formula == `Base Add + ( i - Base Ind ) * Si`

<aside>
NOTE:

- Dynamically Typed Arrays → Arrays with different Data Types
- Dynamically Typed Arrays will Type Cast all the Elements to the Highest Data Types
</aside>


## Use Cases

- Due to Contiguous Memory,
    - we can easily Calculate the Memory Address of any Element in an Array
    - Hence, Accessing the Elements becomes Easy in an Array
        - As it won’t traverse the whole Array,
        - it just gets the memory add & Access it

## Random Access

- The Property of “Directly Accessing any Element either by Memory Address or by Index” is called the “Property of Random Access”
- `Random Access` → Randomly Accessing any of the Element in an Array.
- TC of this Random Access → `TC = O(1)`
- Hence Accessing the Elements is non costly operation in Array

## Searching

- We need to Access an Element but, What if we don’t know the Index of the Element..?
    - We only know the Element
    - Then we will go for Searching & find out the Index of Element
    - Then Access the Element using Index


Linear Search
- we will use a loop
- Go through each Element
- Verify & Find the Element

```jsx
const arr = [20, 45, 27, 47, 55, 67, 75, 88, 90];
let x = 67

function linearSearch (arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}

let result = linearSearch (arr)
console.log(result);

// TC = O(N)
// SC = O(1)
```

```python
## function definition
def linearSearch(arr, x):
	for i in range(len(arr)):
		if arr[i] I == x:
			return i
	return -1

## Driver code
arr = [20, 45, 27, 47, 55, 67, 75, 88, 90]
x = 65
## function calling
result = linearSearch(arr, x)
print("Searching element is present at index:", result)

## TC = O(N)
## SC = O(1)
```

Time Complexity :

- In Worst Case → `O(N)` [ when element is found near the Last index ]
- In Best Case → `O(1)` [ when element is found near the First index ]
- In Average Case → `1/2 O(N) + 1/2 O(1) == O(N)` [ when element is found half of time near the Last & half of time near First index ]


## Binary Search

- To Use Binary Search, Array Must be Sorted [ Ascending or Descending ]
- Now, we will use this SORT behavior & Find the Element
- Binary Search is Smarter Version of Linear Search
    - Where it divides the entire array into 2 parts based on middle element
    - Using Sorting behavior, it will cleverly shift to one of the array parts & do the same again

STEPS:

- we will use 3 variables representing Indices of Array → start, end & mid
- we will split the whole array into 2 parts using middle Element → `mid = ( s + e )/2`
- This will raise 3 scenarios
    1. if `mid == Element`, 
        - Then return the Element
    2. if `mid > Element`, 
        - Then, Element will be present in Left Part of Array
        - Hence, Search the Element in the Left part of Array
        - So, Update the End element → `e = mid - 1`
    3. if `mid < Element`,
        - Then, Element will be present in Right Part of Array
        - Hence, Search the Element in the Right part of Array
        - So, Update the Start element → `s = mid + 1`
- Repeat the above steps until you find the Element

`TC = O(logN)` → As we will be halving for every iteration

```jsx
const arr = [20, 30, 40, 50, 60, 70, 80, 90];

function binarySearch (arr, x) {
    let s = 0;
    let e = arr.length - 1;

    while (s <= e) {
        let mid = Math.floor((s+e)/2);

        if (arr[mid] == x) {
            return mid;
        }
        else if (arr[mid] < x) {
            s = mid + 1;
        }
        else if (arr[mid] > x) {
            e = mid - 1;
        }
    }

    return -1;
}

let ans = binarySearch (arr, 70);
console.log(ans);
```

<aside>
💡

NOTE:

---

- We write the `mid` condition in 2 ways
    1. `mid = (i + j)/2`
    2. `mid = i + (j -i)/2`
- 2nd Method is Preferred ⇒ `mid = i + (j -i)/2`
    - As, 1st division happens & then Addition
    - So, Overflow of the Values will Happen
    - Hence, Always the 2nd way of Condition is better
</aside>

## Recursion

- `Recursion` → Calling the same function again inside the function definition
- For Every Recursive call, Base Condition is V.IMP
    - Base Condition is the Terminating Condition for Recursive Calls

```jsx
function recursiveBinarySearch(arr, x, i, j) {
    while (i <= j) {
        let mid = Math.floor(i+(j-i)/2);

        if (arr[mid] == x) {
            return mid;
        }
        else if (arr[mid] < x) {
            return recursiveBinarySearch(arr, x, mid+1, j);
        }
        else {
            return recursiveBinarySearch(arr, x, i, mid-1);
        }
    }
    return -1;
}

const arr3 = [20, 30, 40, 50, 60, 70, 80, 90];
let sol = recursiveBinarySearch(arr3, 40, 0, 7)
console.log(sol)
```

```jsx
function recursiveBinarySearch(arr, x, i, j) {
		// Base Condition
    if (i > j) {
        return -1;                                      // TC = O(1) => C
    }
    
    // Code
    let mid = Math.floor(i+(j-i)/2);

    if (arr[mid] == x) {
        return mid;                                     // TC = O(1) => C
    }
    else if (arr[mid] < x) {
        return recursiveBinarySearch(arr, x, mid+1, j); // TC = O(N/2)
    }
    else {
        return recursiveBinarySearch(arr, x, i, mid-1); // TC = O(N/2)
    }
}

const arr3 = [20, 30, 40, 50, 60, 70, 80, 90];
let sol = recursiveBinarySearch(arr3, 90, 0, 7)
console.log(sol)
```

As we have a Recursive Function here,

We can create a Recurrence Relation out of it

- Recurrence Relation → `T(N) = T(N/2) + C`
    - It is NOT `T(N) = 2T(N/2) + C`, As we will only go either left (or) right part for searching
    - Hence, `T(N) = T(N/2) + C`
- According to Master’s Theorem:
    - `T(n) = aT(n/b) + f(n)` where `f(n) = Theta[n^k * (logn)^p]`
    - And `log_b(a) = k` , && `p > -1` : Then, Ans = `Theta[n^k * (logn)^(p+1)]` [ Ans = `Theta[f(n)logn]` ]
    - Hence, `TC = O(logN)`

<aside>
NOTE:

- What if the Array consists of the repeating Terms..?
- It will Print any one of the repeating elements
    - based on the size of array & No. of repeating Elements
</aside>