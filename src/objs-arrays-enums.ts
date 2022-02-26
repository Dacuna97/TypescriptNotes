// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: 'Diego',
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// person.role.push('admin'); IT IS PERMITTED BY TYPESCRIPT BUT IT IS NOT CORRECT
// person.role[1] = 10;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'Diego',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

let favoriteActivities: string[];

favoriteActivities = person.hobbies;

console.log('Person: ', person.name);

person.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
  // hobby.map(()) // ERROR !!!! TYPESCRIPT IS DOING IT CORRECTLY
});

if (person.role === Role.AUTHOR) {
  console.log('is Author');
}
