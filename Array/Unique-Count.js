// Unique Count Problem

// let arr = [1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 7];
// o/p -> 7 becoz 7 unique elements in this array

let arr = [1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8];

if (arr.length > 0) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    let res = i + 1;
    console.log(res)
}