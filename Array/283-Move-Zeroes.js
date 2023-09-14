//283. Move Zeroes
// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Correct for Space Complexity O(n)
// let nums = [0, 1, 0, 3, 12, 0 , 5 , 0 , 6];

var moveZeroes = function (nums) {
    let temp = [];
    for (let keys in nums) {
        // console.log(nums[keys])
        if (nums[keys] !== 0) {
            temp.push(nums[keys])
        }
    }
    let newZeros = nums.length - temp.length;
    // console.log(newZeros)
    for (let i = 0; i < newZeros; i++) {
        temp.push(0);
    }
    console.log(temp);
};

// moveZeroes(nums);

// Doing it with Space Complexity O(1)

let nums = [0, 1, 0, 3, 12, 0, 55];

function moveZeroToRight(nums) {
    let zeroPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[zeroPointer]] = [nums[zeroPointer], nums[i]];

            zeroPointer++;
        }
    }
    console.log(nums)
}
// moveZeroToRight(nums);

