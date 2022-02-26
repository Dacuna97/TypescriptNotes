function add2(n1: number, n2: number) {
  return n1 + n2;
}

function resultPrint(num: number) {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

resultPrint(add2(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add2;
// combineValues = resultPrint;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, resultPrint);
