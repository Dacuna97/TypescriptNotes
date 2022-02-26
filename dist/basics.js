"use strict";
function add(n1, n2, printResult, resultString) {
    const result = n1 + n2;
    if (printResult) {
        console.log(resultString + result);
    }
    else {
        return result;
    }
    return result;
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultString = 'Result : ';
add(number1, number2, printResult, resultString);
//# sourceMappingURL=basics.js.map