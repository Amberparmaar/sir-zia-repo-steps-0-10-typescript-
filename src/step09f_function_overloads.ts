/*Functional overloads in TypeScript allow you to define multiple signatures for a function, so the function 
can be called with different types or numbers of arguments. */

function greet(personName: string): string;
function greet(personName: string, age: number): string;
function greet(personName: string, age: number): string;

function greet(personName: string, age?: number): string {
  if (age !== undefined) {
    return `${personName} is ${age} year old.`;
  } else {
    return `${personName}`;
  }
}
console.log(greet("Abdullah"));
console.log(greet("Ayesha", 22));
console.log(greet("daniyal", 23));
