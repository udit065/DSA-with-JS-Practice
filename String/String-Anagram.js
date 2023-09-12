// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// let str1 = "hello";
// let str2 = "loleh";

let s = "anagram";
let t = "nagddaram";

var isAnagram = function (s, t) {
    if (s.length != t.length) {
        console.log("false");
    } else {
        let count = {};
        for (let elm of s) {
            count[elm] = (count[elm] || 0) + 1;
            // console.log(elm , count[elm])
        }
        for (let item of t) {
            count[item] -= 1;
            // console.log(item, count[item])
        }
        console.log(count)
        if (Object.values(count).every(data => data === 0)) {
            console.log("true")
        } else {
            console.log("false")
        }

    }

};
isAnagram(s, t);