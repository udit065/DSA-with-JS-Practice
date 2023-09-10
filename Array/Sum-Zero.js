// Element whose sum equal to 0 . O/P -> [-4 , 4 ] = 0 

let arr = [-5, -4, -2, 0, 2, 4, 6, 7];
let flg = false;

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
            console.log([arr[i], arr[j]]);
            flg = true;
            break;
        }
    }
    if (flg) {
        break;
    }
}