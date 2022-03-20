type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Diego',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;

// Function overloads
function addUnionTypes(a: number, b: number): number;
function addUnionTypes(a: string, b: string): string;
function addUnionTypes(a: Combinable, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result2 = addUnionTypes('Max', ' Schwarz');
result2.split(' ');

// Optional Chaining Section
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

// End Optional Chaining Section

// Nullish Coalescing

const userInput2 = '';

const storedData = userInput2 ?? 'DEFAULT VALUE'; // if userInput2 is null or undefined only, not empty string or 0, then use fallback value

console.log('stored data', storedData);

// End of Nullish Coalescing

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name:' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start date: ' + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log('Driving');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck');
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo...' + amount);
//   }
// }
// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // Discriminated unions

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving with speed: ' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// // Type Casting

// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById('user-input')
// // );
// const userInputElement = document.getElementById(
//   'user-input'
// )! as HTMLInputElement;

// userInputElement.value = 'Hi there!';