// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first
//  occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function haystackFunc(haystack, needle) {
    if (needle.length > haystack.length) {
        console.log(-1);
        return;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            console.log(i);
            return;
        }
    }

    console.log(-1);
}

haystackFunc("adbusdtsad", "sad");