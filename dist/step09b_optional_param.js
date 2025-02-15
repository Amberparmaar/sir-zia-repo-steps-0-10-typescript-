//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); //ok
//let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok
console.log(result1);
console.log(result3);
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
export {};
