// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


let address = "255.100.50.0";

var defangIPaddr = function (address) {
    let defanf = "";
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            // console.log(address[i]);
            defanf += "[.]";
        } else {
            defanf += address[i]
        }
    }
    console.log(defanf);
};

defangIPaddr(address);

// IN-BUILD method ----------------------------------
// console.log(address.replaceAll(".", "[.]"))