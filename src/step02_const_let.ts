//use const where variable values do not change
const a = 5;
const b : number = 33;
const c ="best";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
//console.log("let: " + z);// Error: z is not defined in this scope

/*let Tafseel se
Reassignment: let ke sath declare kiye gaye variables ko dobara assign kiya ja sakta hai. Yeh un variables ke 
liye munasib hai jin ki value waqt ke sath badal sakti hai.

let counter = 1;
counter = 2;  // Yeh allowed hai
Block Scope: let variables sirf us block ke andar accessible hotay hain jahan yeh declare kiye gaye hain.
 Is se accidental usage ko prevent kiya jata hai.


if (true) {
    let message = "Hello!";
    console.log(message);  // Outputs "Hello!"
}
// console.log(message);  // Error: message define nahi hai
Hoisting: let ke sath declare kiye gaye variables block ke top pe hoist hotay hain magar initialize nahi hotay.
 Iska matlab yeh hai ke aap let variable ko uski declaration se pehle use nahi kar sakte.


console.log(name);  // Error: 'name' ko pehle initialize nahi kiya gaya
let name = "Ali";
No Redeclaration: Aap same scope mein let ke sath same variable do dafa declare nahi kar sakte.


let username = "John";
// let username = "Doe";  // Error: 'username' pehle hi declare ho chuka hai
const Tafseel se
Constant Value: const ke sath declare kiye gaye variables ko initial assignment ke baad dobara assign nahi kiya ja sakta. Yeh un values ke liye munasib hai jo change nahi honi chahiye.


const birthYear = 1990;
// birthYear = 1991;  // Error: constant variable ko dobara assign nahi kiya ja sakta
Block Scope: let ki tarah, const variables bhi block-scoped hotay hain.


if (true) {
    const greeting = "Hi!";
    console.log(greeting);  // Outputs "Hi!"
}
// console.log(greeting);  // Error: greeting define nahi hai
Hoisting: let ki tarah, const variables bhi block ke top pe hoist hotay hain magar initialize nahi hotay*/