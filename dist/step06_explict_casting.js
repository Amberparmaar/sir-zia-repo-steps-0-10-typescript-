/*
TypeScript mein casting ka matlab hota hai ek type ko dusre type mein convert karna. Yeh do tarikon se hota
 hai: explicit casting aur implicit casting.
 
 Explict Casting
Explict casting, jise type assertion bhi kaha jata hai, developer ke taraf se explicitly perform kiya jata hai.
 TypeScript ko yeh bataya jata hai ke ek specific value ko ek specific type treat karna hai. Isme do syntax hain: angle-bracket syntax aur as syntax.

Angle-Bracket Syntax:


let someValue: any = "Hello, TypeScript";
let strLength: number = (<string>someValue).length;

as Syntax:

let someValue: any = "Hello, TypeScript";
let strLength: number = (someValue as string).length;

Implicit Casting
Implicit casting, jise type coercion bhi kaha jata hai, automatically hota hai jab TypeScript type system
apni type inference ke zariye types ko implicitly convert karta hai. Yeh JavaScript mein bhi hota hai jahan
 dynamically types convert hote hain based on the context.

 let num = 10; // TypeScript infer karta hai ke num ka type number hai.
let message = "The number is " + num; // TypeScript implicitly num ko string mein convert karta hai.
console.log(message); // Output: "The number is 10"

key Points Summary

Explict Casting (Type Assertion):

Developer explicitly type convert karta hai.

Syntax: Angle-Bracket (<type>value) ya as syntax (value as type).

Implicit Casting (Type Coercion):

TypeScript automatically type convert karta hai based on context.
Type inference aur type compatibility ke zariye hota hai.
Use Cases:

Explict casting ka use tab hota hai jab aapko TypeScript ko specifically batana hota hai ke ek value ko
 kis type treat karna hai.
Implicit casting tab hota hai jab TypeScript apne inference aur compatibility rules ka use karke types ko
 convert karta hai.
*/
let myname = "Zia";
console.log(myname.length);
console.log(myname.length);
export {};
