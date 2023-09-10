// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// var defangIPaddr = function (address) {

// };
let address = "1.1.1.1";

var defangIPaddr = function (address) {
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            // let newDot = "[.]";
            // newDot = address[i];
            // console.log(newDot);
            console.log(address[i]);
        }
        }
};

defangIPaddr(address);

// IN-BUILD method ----------------------------------
// console.log(address.replaceAll(".", "[.]"))