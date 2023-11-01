// 189. Rotate Array -> Given an integer array nums, rotate the array to the right by k steps,
// where k is a non-negative

// input = [1,2,3,4,5,6,7] , k= 3 -> o/p -> [5,6,7,1,2,3,4]
// [1, 2, 3, 4, 5, 6, 7] k=1 -> [7, 1, 2, 3, 4, 5, 6] k=2 -> [6, 7, 1, 2, 3, 4, 5] k=3 -> [5, 6, 7, 1, 2, 3, 4]

let nums = [-1, -100, 3, 99]
k = 2



// In-Build ----------------------------------------------
// let nums = [-1, -100, 3, 99]
// k = 2
// var rotate = function (nums, k) {
//     let size = nums.length;

//     if (size > k) {
//         k = k % size;
//     }
//     let rotate = nums.splice(size - k, size);
//     // console.log(rotate)
//     nums.unshift(...rotate);
//     console.log(nums)
// };

// rotate(nums, k);