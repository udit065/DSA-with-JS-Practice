// 771. Jewels and Stones

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

let jewels = "aA";
let stones = "aAAbbbb";

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let keys in jewels) {
            if (stones[i] === jewels[keys]) {
                count++;
            }
        }
        // console.log(stones[i], jewels);
        // if (stones[i].includes(jewels[0]) || stones[i].includes(jewels[1]) || stones[i].includes(jewels[2])) {
        //     // console.log(stones[i], "found");
        //     count++;
        // }
    }
    console.log(count);
};

numJewelsInStones(jewels, stones);

// Inbuild -------------
// const numJewelsInStones = (J, S) => {
//     const jewels = new Set(J)
//     return S.split('').reduce((res, s) => res + jewels.has(s), 0)
// };