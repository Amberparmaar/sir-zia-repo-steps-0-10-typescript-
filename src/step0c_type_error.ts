/*let message = "Hello World";
console.loger(message);

TypeScript mein type errors tab hoti hain jab code mein type checking ke dauran types ka mismatch hota hai.
TypeScript strong typing system use karta hai jo compile-time par types ko verify karta hai. Type errors ka 
primary maksad yeh ensure karna hota hai ke code correctly typed ho aur run-time errors ko prevent kar sake.

Common Causes of Type Errors
Assigning Incorrect Type:

let age: number = "21"; // Assigning a string to a number type
Error Message:


error TS2322: Type 'string' is not assignable to type 'number'.
Type Mismatch in Function Parameters:

function greet(name: string) {
  console.log(`Hello, ${name}`);
}

greet(123); // Passing a number instead of a string
Error Message:


error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
Missing Required Property:

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Vipin" // Missing the 'age' property
};
Error Message:


error TS2739: Type '{ name: string; }' is missing the following properties from type 'Person': age
Excess Property Check:


interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Vipin",
  age: 21,
  gender: "male" // 'gender' is not a property of 'Person'
};
Error Message:


error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
  Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
Type Assertion Errors:


let someValue: any = "this is a string";
let strLength: number = (someValue as number).length; // Incorrect type assertion
Error Message:


error TS2352: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
Example of Type Error
Incorrect Code:

interface Car {
  model: string;
  year: number;
}

let myCar: Car = {
  model: "Toyota",
  year: "2020" // 'year' should be a number, not a string
};
Error Message:


error TS2322: Type 'string' is not assignable to type 'number'.
Explanation:
Is example mein, year property ko string value "2020" assign kiya gaya hai, jabki Car interface ke mutabiq year property ka type number hona chahiye. Yeh type error hai kyunki assigned value ka type interface ke defined type se match nahi karta.

Correct Code:

interface Car {
  model: string;
  year: number;
}

let myCar: Car = {
  model: "Toyota",
  year: 2020 // Correct type assignment
};
Importance of Fixing Type Errors
Type errors ko fix karna zaroori hai because:

Compile-Time Safety: Type errors ko fix karke aap compile-time par hi errors detect kar sakte hain, jo run-time
 errors aur crashes ko prevent karta hai.
Code Reliability: Correct types use karke aap apne code ko zyada reliable aur predictable bana sakte hain.
IntelliSense and Refactoring: Accurate types se IDE better IntelliSense aur refactoring tools provide kar sakta 
hai, jo developer productivity ko enhance karta hai.
TypeScript type errors ko detect karke developer ko early stage pe hi fix karne ka mauka deta hai, jo code
 quality aur maintainability ko improve karta hai.*/

