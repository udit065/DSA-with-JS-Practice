// Count Largest Sum of Consecutive Digits

// let arr = [1, 2, 3, 4, 1, 4, 7, 8];

// let num = 3;

// o/p -> [4, 7, 8] -> 19
// o/p -> num -> 2 [ 7, 8] -> 15

let arr = [1, 2, 3, 4, 1, 4, 7, 8];
let num = 3;

function consecutiveSum(arr, num) {
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    console.log(max);
}

consecutiveSum(arr, num);
