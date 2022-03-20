// Generics

// const names: Array<string> = ['Max', 'Manuel']; // string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });
// const mergedObj2 = merge({ name: 'Max' }, 30); // fails thanks to the extend object part

console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert(obj, key) {
  return obj[key];
}
