// Square Checked in Another Array
// Example 1:

// Input: arr = [1,2,3,4]
// Input: arr2 = [1,9,16,4]
// Output: true
// Example 2:

// Input: arr = [1,2,3,4]
// Input: arr2 = [1,9,25,4]
// Output: false

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [1, 9, 16, 4, 5];

// function squareCheck(arr, arr2) {
//     for (let i = 0; i < arr.length; i++) {
//         let isSquare = false;
//         for (let z = 0; z < arr2.length; z++) {
//             if (arr[i] * arr[i] === arr2[z]) {
//                 isSquare = true;
//             }
//             if (z === arr2.length - 1) {
//                 if (!isSquare) {
//                     console.log("false");
//                 }
//             }
//         }
//     }
//     console.log("true");
// }
// squareCheck(arr, arr2);


//-------------
function Square(arr, square) {
    if (arr.length !== square.length) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * arr[i] !== square[i]) {
            return false;
        }
    }

    return true;
}

const result = Square([1, 2, 3, 4, 6], [1, 4, 9, 16, 36]);
console.log(result);

