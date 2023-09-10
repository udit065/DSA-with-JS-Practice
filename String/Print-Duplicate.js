// Print all the duplicate characters in a string

// let str = "geeksforgeeks";
// o/p - > { g: 2, e: 4, k: 2, s: 2, f: 1, o: 1, r: 1 }

let str = "geeksforgeeks";
let count = {};

for (let elm of str) {
    count[elm] = (count[elm] || 0) + 1;
}
console.log(count);