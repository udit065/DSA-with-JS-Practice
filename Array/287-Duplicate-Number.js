// 287. Find the Duplicate Number
// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

let nums = [3, 1, 4, 4, 2,2];

var findDuplicate = function (nums) {
    let count = {};
    for (let elm of nums) {
        count[elm] = (count[elm] || 0) + 1;
        if (count[elm] === 2) {
            elm;
            // console.log(count[elm])
            console.log(elm);
        }
    }
    // console.log(count);
};
// findDuplicate(nums);