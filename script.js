// UNION 
function add(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = add(30, 26);
console.log(combineAges);
var combineNames = add('Gen', 'Hartej');
console.log(combineNames);
