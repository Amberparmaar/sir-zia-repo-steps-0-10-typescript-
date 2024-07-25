
/*Assignability errors TypeScript mein tab hoti hain jab ek type ko doosre type mein convert karne ya assign karne 
 koshish ki jati hai, lekin woh types compatible nahi hote. Yeh specific tarah ki type errors hain jo type 
 compatibility se related hoti hain. Assignability errors ensure karte hain ke values ko sirf un types ko assign
  kiya jaye jinke sath woh compatible hain.

Common Causes of Assignability Errors
Incompatible Object Properties:

typescript
Copy code
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Vipin",
  age: "21" // 'age' should be a number, not a string
};
Error Message:

python
Copy code
error TS2322: Type '{ name: string; age: string; }' is not assignable to type 'Person'.
  Types of property 'age' are incompatible.
    Type 'string' is not assignable to type 'number'.
Extra Properties:

typescript
Copy code
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

python
Copy code
error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
  Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
Function Parameter Types:

typescript
Copy code
function greet(name: string) {
  console.log(`Hello, ${name}`);
}

let myGreet: (name: number) => void = greet; // Type mismatch in function parameter
Error Message:

python
Copy code
error TS2322: Type '(name: string) => void' is not assignable to type '(name: number) => void'.
  Types of parameters 'name' and 'name' are incompatible.
    Type 'number' is not assignable to type 'string'.
Assigning Union Types:

typescript
Copy code
let numOrStr: number | string = 5;
let num: number = numOrStr; // 'numOrStr' could be a string, which is not assignable to 'number'
Error Message:

python
Copy code
error TS2322: Type 'string | number' is not assignable to type 'number'.
  Type 'string' is not assignable to type 'number'.
Example of Assignability Error
Incorrect Code:

typescript
Copy code
interface Car {
  model: string;
  year: number;
}

let myCar: Car = {
  model: "Toyota",
  year: "2020" // 'year' should be a number, not a string
};
Error Message:

python
Copy code
error TS2322: Type '{ model: string; year: string; }' is not assignable to type 'Car'.
  Types of property 'year' are incompatible.
    Type 'string' is not assignable to type 'number'.
Explanation:
Is example mein, year property ko string value "2020" assign kiya gaya hai, jabki Car interface ke mutabiq 
year property ka type number hona chahiye. Yeh assignability error hai kyunki assigned value ka type interface
 ke defined type se compatible nahi hai.

Correct Code:

typescript
Copy code
interface Car {
  model: string;
  year: number;
}

let myCar: Car = {
  model: "Toyota",
  year: 2020 // Correct type assignment
};
Key Points
Type Compatibility: Assignability errors ensure karte hain ke values sirf un types ko assign ki jaye jinke sath
 woh compatible hain.
Strict Typing: Assignability errors strict typing ka hissa hain jo code ko zyada robust aur error-free banate hain.
Early Detection: Assignability errors compile-time par hi detect hote hain, jo run-time errors aur unexpected 
behavior ko prevent karte hain.
Conclusion
Assignability errors TypeScript mein important role play karte hain by ensuring type safety aur type compatibility
. Yeh errors code ki reliability aur maintainability ko improve karte hain by preventing incorrect type assignments
 aur conversions. In errors ko samajhna aur fix karna zaroori hai taake aapka code correct aur efficient ho.*/