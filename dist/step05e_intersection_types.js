/*TypeScript mein, intersection types aapko do ya zyada types ko combine karne ki sahulat dete hain taake
aap aik naya type bana saken jo dono types ke sab properties aur methods ko include karta ho. Yeh concept
 aapko strongly typed objects banane mein madad deta hai jo different interfaces ya types ko follow karte hain.

Intersection Types Syntax
Intersection types banane ke liye & (ampersand) operator ka istemal hota hai.

typescript
Copy code
interface A {
  propertyA: string;
}

interface B {
  propertyB: number;
}

type C = A & B;
Yahan par C aik naya type hai jo A aur B dono types ki properties ko include karta hai.

Example
Agar hum aik object banate hain jo C type ka ho, to usme A aur B dono ki properties honi chahiye.

typescript
Copy code
const example: C = {
  propertyA: "Hello",
  propertyB: 42
};
Yeh object example ab propertyA aur propertyB dono ko contain karta hai, kyunki C type ko define kiya gaya hai
as A & B. */
function personEmploye(emp) {
    console.log(`This employe name is ${emp.name} , her id is ${emp.personId}`);
}
const emp = {
    name: "amber",
    personId: 789,
};
personEmploye(emp);
let fruit = {
    name: "Lemon",
    colour: "yellow",
    isItHealthy: true,
    weightLoss: "yes",
    preventFromCancer: true,
};
function getFruit(fruit) {
    console.log(`${fruit.name} is healthy fruit. It's colour is ${fruit.colour}.${fruit.name} contain citric acid is ${fruit.isItHealthy}.`);
    console.log(`${fruit.weightLoss} it is good for weightloss`);
}
getFruit(fruit);
export {};
