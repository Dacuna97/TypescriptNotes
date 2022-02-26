"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function resultPrint(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
resultPrint(add2(5, 12));
let combineValues;
combineValues = add2;
console.log(combineValues(8, 8));
addAndHandle(10, 20, resultPrint);
//# sourceMappingURL=functions.js.map