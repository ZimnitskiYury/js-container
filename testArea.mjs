import arrayExtensions from "./library"

let arr = [1, 2, 3, 4];

console.log(take(arr, 2));
console.log(arrayExtensions.chain(arr).take(2).value())
console.log(arr);