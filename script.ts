
// OBJECTS
// explicit 
const person: {
    name: string,
    age: number
} = {
    name: 'Hartej',
    age: 26,
};

// infere - better syntax
const person2 = {
    name: 'Genalyn',
    age: 22,
}
console.log(person.name);


// ARRAYS
// explicit 
let favouriteActivities: string[] = ['Sports', 'Eating'];
let random: any[] = ['hello', 13, 7, 'wassup'];

// inference
let hobbies = ['Sports', 'Cooking'];

for (const hobby of hobbies) {
    console.log(hobby);
}

// Tuple - Array that has a fix length and fixed type 
// special construct. It tells TS they want a specific lentgh of array and specific types aswell.
//explicit 
let role: [number, string] = [2, 'Author'];
role[1] = 'Developer';

// we can use push in tuple but wont be added to types NEEDS TO BE AWARE IF THIS


// ENUM - enum{NEW, OLD} Automatically enumerated global constant identifiers 
// const ADMIN = 0;
// const READONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN, READ_ONLY, AUTHOR
}

const baby = {
    name: 'Odin',
    age: 4,
    hobbies: ['Sleep', 'Eating'],
    role: Role.ADMIN
}

if (baby.role === 1) {
    console.log('IM A BABY ADMIN')
}