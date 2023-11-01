// Arr of N size ,

// let input = [12, 35, 1, 10, 34, 1];
let input = [10, 5, 10];
function secondLargestOptmize(arr) {
    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] != largest && arr[i] > secondLargest) { // if input[i] less than largest but larger than secondLargest
            secondLargest = arr[i];
        }
    }
    console.log(secondLargest);
}
secondLargestOptmize(input);


// inbuild ----------------

//only work if elements have unique value -> [10 , 5 , 10] -> o/p -> 10 -> worng
// let input2 = [10 , 5 , 10];
// let abc = input2.sort();
// console.log(abc.at(-2));

// inbuild - 2 O(nlogn)----------------

// function secondLargest(arr) {

//     let uniqueArr = Array.from(new Set(arr));
//     uniqueArr.sort((a, b) => {
//         return b - a; // sorted in desending order
//     })
//     if (uniqueArr.length >= 2) {
//         console.log(uniqueArr[1]);
//     } else {
//         return -1;
//     }
//     // console.log(uniqueArr);
// }
// secondLargest([10 , 5 , 10]);