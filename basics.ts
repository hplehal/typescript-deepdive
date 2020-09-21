// Using Types - Basics of TypeScript
console.log('Time to get this started!');
function add(n1: number, n2: number) {
    return n1 + n2;
}

function subtract(n1: number, n2: number) {
    return n1 - n2;
}

console.log(add(10, 2));
console.log(subtract(10, 2));
let arr: any[] = [1, '3', 3];

let total: number = arr.reduce((acc: number, item: number) => {
    return acc += item;
})

console.log(total);


// Typescript is staticlly type 
// Javascript is dynamically type 



function add1 (n1:number, n2:number, showResult:boolean) {
    if(showResult){
        console.log(n1 + n2)
    } else {
        return n1+n2
    }
}

const printResult = false;
add1(2,4,printResult);

// Type inference - builtin functionality to understand which typeww you have for the declaration 


