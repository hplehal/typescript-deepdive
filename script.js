// OBJECTS
// explicit 
var person = {
    name: 'Hartej',
    age: 26
};
// infere - better syntax
var person2 = {
    name: 'Genalyn',
    age: 22
};
console.log(person.name);
// ARRAYS
// explicit 
var favouriteActivities = ['Sports', 'Eating'];
var random = ['hello', 13, 7, 'wassup'];
// inference
var hobbies = ['Sports', 'Cooking'];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby);
}
// Tuple - Array that has a fix length and fixed type 
// special construct. It tells TS they want a specific lentgh of array and specific types aswell.
//explicit 
var role = [2, 'Author'];
role[1] = 'Developer';
// we can use push in tuple but wont be added to types NEEDS TO BE AWARE IF THIS
// ENUM - enum{NEW, OLD} Automatically enumerated global constant identifiers 
// const ADMIN = 0;
// const READONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var baby = {
    name: 'Odin',
    age: 4,
    hobbies: ['Sleep', 'Eating'],
    role: Role.ADMIN
};
if (baby.role === 1) {
    console.log('IM A BABY ADMIN');
}
