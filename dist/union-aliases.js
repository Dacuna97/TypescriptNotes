"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, 'as-number');
console.log('combinedAges', combinedAges);
const combinedNames = combine('Max', 'Ana', 'as-text');
console.log('combinedNames', combinedNames);
const combinedStringAges = combine('30', '26', 'as-number');
console.log('combinedStringAges', combinedStringAges);
//# sourceMappingURL=union-aliases.js.map