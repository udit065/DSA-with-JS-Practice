// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// 1. Two Sum
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

let nums = [3, 3];
let target = 6;

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                // let res = nums.indexOf(nums[i]);
                // let res2 = nums.indexOf(nums[j]);
                // console.log(res, res2);
                console.log(i, j);
            }
        }
    }
}
twoSum(nums, target);