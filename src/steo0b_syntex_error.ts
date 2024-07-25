/* DESCRIBE SYNTEX ERROR

lett message = "Hello World";//syntax error
console.log(message);


Syntax errors TypeScript mein tab hoti hain jab code ki grammar ya structure TypeScript compiler ke rules ke
mutabiq nahi hoti. Yeh errors compiler ko code ko correctly parse karne se rok dete hain, aur result mein 
run nahi ho pata. Syntax errors ko fix karna zaroori hota hai taake code compile aur execute ho sake.

Common Causes of Syntax Errors
Missing Semicolons:

typescript
let name = "Vipin" // Missing semicolon
Error Message:


error TS1005: ';' expected.
Unterminated Strings:


let name = "Vipin // Missing closing quote
Error Message:

error TS1002: Unterminated string literal.
Missing or Misplaced Brackets/Braces:


if (true {
  console.log("Hello");
// Missing closing parenthesis and brace
Error Message:


error TS1005: ')' expected.
error TS1005: '}' expected.
Incorrect Variable Declaration:


let const name = "Vipin"; // Incorrect variable declaration
Error Message:


error TS1005: '=' expected.
Unmatched Parentheses:

function greet(name: string: string {
  return `Hello, ${name}`;
// Missing closing parenthesis
Error Message:


error TS1005: ',' expected.
error TS1005: ')' expected.
Example of Syntax Error
Let's see a more detailed example:

Incorrect Code:

function greet(name: string) {
  console.log("Hello, ${name}"; // Missing closing parenthesis and quote
}
Error Message:

error TS1002: Unterminated template literal.
error TS1005: ',' expected.
error TS1005: ')' expected.
Explanation:
Is example mein, console.log statement mein closing parenthesis aur quote missing hain. Yeh syntax error hai kyunki code TypeScript grammar ko follow nahi kar raha.

Correct Code:


function greet(name: string) {
  console.log(`Hello, ${name}`); // Corrected*/





