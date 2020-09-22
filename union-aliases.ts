// UNION 
function add(input1: number | string, input2: number | string) {
    let result: number | string;
    // runtime check
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = add(30, 26);
console.log(combineAges);

const combineNames = add('Gen', 'Hartej');
console.log(combineNames);

// Literal types
//The code below has a type of 'HELLO' since it is a constant variabl and const only have one and only one value.
const hello = 'HELLO';

// TYPE ALIAS
type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
    let result: Combinable;
    // runtime check
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

// we can also use type alias to objects 

type User = { name: string; age: number };

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}