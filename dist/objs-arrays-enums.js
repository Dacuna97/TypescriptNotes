"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Diego',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = person.hobbies;
console.log('Person: ', person.name);
person.hobbies.forEach((hobby) => {
    console.log(hobby.toUpperCase());
});
if (person.role === Role.AUTHOR) {
    console.log('is Author');
}
//# sourceMappingURL=objs-arrays-enums.js.map